import 'dotenv/config';
import { google } from 'googleapis';

// ── Site definitions ────────────────────────────────────────────────────────
// Each site gets its own GA4 property, GTM container, and Clarity tag.

interface SiteConfig {
  name: string;
  url: string;
  clarityProjectId: string;
  /** Existing GTM container public ID (e.g. GTM-XXXXXXX). Null → create new. */
  existingGtmId: string | null;
  /** Existing GA4 measurement ID (e.g. G-XXXXXXXXXX). Null → create new. */
  existingGa4Id: string | null;
}

const SITES: SiteConfig[] = [
  {
    name: 'HoopoeApps',
    url: 'https://hoopoeapps.com',
    clarityProjectId: requireEnv('CLARITY_PROJECT_ID_HOOPOEAPPS'),
    existingGtmId: process.env.GTM_CONTAINER_ID_HOOPOEAPPS || null,
    existingGa4Id: process.env.GA4_MEASUREMENT_ID_HOOPOEAPPS || null,
  },
  {
    name: 'Baby Looks Like Me',
    url: 'https://hoopoeapps.com/babylook',
    clarityProjectId: requireEnv('CLARITY_PROJECT_ID_BABYLOOKSLIKEME'),
    existingGtmId: process.env.GTM_CONTAINER_ID_BABYLOOKSLIKEME || null,
    existingGa4Id: process.env.GA4_MEASUREMENT_ID_BABYLOOKSLIKEME || null,
  },
];

// ── Consent Mode v2 defaults (Custom HTML tag) ──────────────────────────────
// Grants all consent by default globally, then denies for EEA/UK/CH regions.
// This fires on the Consent Initialization trigger (before any other tags).

const CONSENT_DEFAULTS_HTML = `<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'analytics_storage': 'granted'
  });
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500,
    'region': ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
  });
  gtag('set', 'url_passthrough', true);
</script>`;

// ── Helpers ──────────────────────────────────────────────────────────────────

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
}

function clarityHtml(projectId: string): string {
  return `<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","${projectId}");
</script>`;
}

// ── GA4 property + data stream creation ─────────────────────────────────────

async function createGa4Property(site: SiteConfig, gaAccountId: string): Promise<string> {
  if (site.existingGa4Id) {
    console.log(`  GA4: reusing existing ${site.existingGa4Id}`);
    return site.existingGa4Id;
  }

  const analyticsAdmin = google.analyticsadmin('v1beta');

  // Check for existing property with same name
  const listResp = await analyticsAdmin.properties.list({
    filter: `parent:accounts/${gaAccountId}`,
  });
  const existing = listResp.data.properties?.find(
    (p) => p.displayName === site.name,
  );

  let propertyName: string;

  if (existing?.name) {
    propertyName = existing.name;
    console.log(`  GA4: found existing property "${site.name}" (${propertyName})`);
  } else {
    const createResp = await analyticsAdmin.properties.create({
      requestBody: {
        displayName: site.name,
        parent: `accounts/${gaAccountId}`,
        timeZone: 'Asia/Jerusalem',
        currencyCode: 'USD',
      },
    });
    propertyName = createResp.data.name ?? '';
    console.log(`  GA4: created property "${site.name}" (${propertyName})`);
  }

  // Check for existing web data stream
  const streamsResp = await analyticsAdmin.properties.dataStreams.list({
    parent: propertyName,
  });
  const existingStream = streamsResp.data.dataStreams?.find(
    (s) => s.type === 'WEB_DATA_STREAM',
  );

  if (existingStream?.webStreamData?.measurementId) {
    console.log(`  GA4: reusing data stream → ${existingStream.webStreamData.measurementId}`);
    return existingStream.webStreamData.measurementId;
  }

  // Create web data stream
  const streamResp = await analyticsAdmin.properties.dataStreams.create({
    parent: propertyName,
    requestBody: {
      displayName: `${site.name} Web`,
      type: 'WEB_DATA_STREAM',
      webStreamData: {
        defaultUri: site.url,
      },
    },
  });

  const measurementId = streamResp.data.webStreamData?.measurementId ?? '';
  console.log(`  GA4: created data stream → ${measurementId}`);
  return measurementId;
}

// ── GTM container setup ─────────────────────────────────────────────────────

async function setupGtmContainer(
  site: SiteConfig,
  ga4MeasurementId: string,
  gtmAccountParent: string,
) {
  const tagmanager = google.tagmanager('v2');

  // ── Resolve or create container ─────────────────────────────────────────
  let containerId: string;
  let publicId: string;

  if (site.existingGtmId) {
    const resp = await tagmanager.accounts.containers.list({ parent: gtmAccountParent });
    const found = resp.data.container?.find((c) => c.publicId === site.existingGtmId);
    if (!found?.containerId) {
      throw new Error(`GTM container ${site.existingGtmId} not found`);
    }
    containerId = found.containerId;
    publicId = found.publicId ?? site.existingGtmId;
    console.log(`  GTM: reusing container ${publicId}`);
  } else {
    const listResp = await tagmanager.accounts.containers.list({ parent: gtmAccountParent });
    const existing = listResp.data.container?.find((c) => c.name === site.name);
    if (existing?.containerId) {
      containerId = existing.containerId;
      publicId = existing.publicId ?? '';
      console.log(`  GTM: found existing container ${publicId} (${site.name})`);
    } else {
      const resp = await tagmanager.accounts.containers.create({
        parent: gtmAccountParent,
        requestBody: { name: site.name, usageContext: ['web'] },
      });
      containerId = resp.data.containerId ?? '';
      publicId = resp.data.publicId ?? '';
      console.log(`  GTM: created container ${publicId} (${site.name})`);
    }
  }

  const containerParent = `${gtmAccountParent}/containers/${containerId}`;

  // ── Get default workspace ───────────────────────────────────────────────
  const wsResp = await tagmanager.accounts.containers.workspaces.list({ parent: containerParent });
  const workspaceId = wsResp.data.workspace?.[0]?.workspaceId ?? '';
  const workspaceParent = `${containerParent}/workspaces/${workspaceId}`;

  // ── Fetch existing triggers & tags for upsert ───────────────────────────
  const existingTriggers = await tagmanager.accounts.containers.workspaces.triggers.list({
    parent: workspaceParent,
  });
  const existingTags = await tagmanager.accounts.containers.workspaces.tags.list({
    parent: workspaceParent,
  });

  async function upsertTrigger(name: string, body: Record<string, unknown>): Promise<string> {
    const found = existingTriggers.data.trigger?.find((t) => t.name === name);
    if (found?.triggerId) {
      console.log(`  GTM trigger exists: "${name}"`);
      return found.triggerId;
    }
    const resp = await tagmanager.accounts.containers.workspaces.triggers.create({
      parent: workspaceParent,
      requestBody: { name, ...body },
    });
    console.log(`  GTM trigger created: "${name}"`);
    return resp.data.triggerId ?? '';
  }

  async function upsertTag(name: string, body: Record<string, unknown>): Promise<string> {
    const found = existingTags.data.tag?.find((t) => t.name === name);
    if (found?.tagId) {
      await tagmanager.accounts.containers.workspaces.tags.update({
        path: `${workspaceParent}/tags/${found.tagId}`,
        requestBody: { name, ...body },
      });
      console.log(`  GTM tag updated: "${name}"`);
      return found.tagId;
    }
    const resp = await tagmanager.accounts.containers.workspaces.tags.create({
      parent: workspaceParent,
      requestBody: { name, ...body },
    });
    console.log(`  GTM tag created: "${name}"`);
    return resp.data.tagId ?? '';
  }

  // ── Triggers ────────────────────────────────────────────────────────────
  const consentInitTriggerId = await upsertTrigger('Consent Init', {
    type: 'CONSENT_INIT',
  });

  const allPagesTriggerId = await upsertTrigger('All Pages', {
    type: 'PAGEVIEW',
  });

  // ── Tags ────────────────────────────────────────────────────────────────

  // 1. Consent Mode v2 defaults
  await upsertTag('Consent Defaults', {
    type: 'html',
    parameter: [{ type: 'TEMPLATE', key: 'html', value: CONSENT_DEFAULTS_HTML }],
    firingTriggerId: [consentInitTriggerId],
  });

  // 2. GA4 Configuration
  await upsertTag(`GA4 — ${site.name}`, {
    type: 'googtag',
    parameter: [{ type: 'TEMPLATE', key: 'tagId', value: ga4MeasurementId }],
    firingTriggerId: [allPagesTriggerId],
  });

  // 3. Microsoft Clarity
  await upsertTag(`Clarity — ${site.name}`, {
    type: 'html',
    parameter: [{ type: 'TEMPLATE', key: 'html', value: clarityHtml(site.clarityProjectId) }],
    firingTriggerId: [allPagesTriggerId],
  });

  return publicId;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const gtmAccountId = requireEnv('GTM_ACCOUNT_ID');
  const gaAccountId = requireEnv('GA_ACCOUNT_ID');

  const auth = new google.auth.OAuth2(
    requireEnv('GOOGLE_CLIENT_ID'),
    requireEnv('GOOGLE_CLIENT_SECRET'),
  );
  auth.setCredentials({ refresh_token: requireEnv('GOOGLE_REFRESH_TOKEN') });
  google.options({ auth });

  const results: { site: string; gtmId: string; ga4Id: string }[] = [];

  for (const site of SITES) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Setting up: ${site.name}`);
    console.log('='.repeat(60));

    // Step 1: Create/reuse GA4 property + data stream
    const ga4MeasurementId = await createGa4Property(site, gaAccountId);

    // Step 2: Create/reuse GTM container + configure all tags
    const gtmPublicId = await setupGtmContainer(
      site,
      ga4MeasurementId,
      `accounts/${gtmAccountId}`,
    );

    results.push({ site: site.name, gtmId: gtmPublicId, ga4Id: ga4MeasurementId });
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`\n${'='.repeat(60)}`);
  console.log('Setup complete! Set these env vars in Vercel:\n');
  for (const r of results) {
    console.log(`  ${r.site}:`);
    console.log(`    NEXT_PUBLIC_GTM_ID = ${r.gtmId}`);
    console.log(`    (GA4 ${r.ga4Id} is configured inside GTM)\n`);
  }
  console.log('Then publish each container in the GTM UI to go live.');
}

main().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
