/**
 * One-time script to get a Google OAuth refresh token.
 * Run: npm run auth
 *
 * Prerequisites:
 * 1. Reuse the OAuth2 credentials from yb4 (or create new ones in Google Cloud Console)
 *    - Type: "Web application"
 *    - Authorized redirect URI: http://localhost:3000/callback
 * 2. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env
 *
 * Required APIs (enable in Google Cloud Console):
 *   - Tag Manager API
 *   - Google Analytics Admin API
 */
import 'dotenv/config';
import * as http from 'http';

interface TokenResponse {
  refresh_token?: string;
  error?: string;
}

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const PORT = 3000;
const REDIRECT_URI = `http://localhost:${String(PORT)}/callback`;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env first.');
  process.exit(1);
}

const clientId = CLIENT_ID;
const clientSecret = CLIENT_SECRET;

const authUrl =
  `https://accounts.google.com/o/oauth2/auth` +
  `?client_id=${clientId}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code` +
  `&scope=${encodeURIComponent(
    [
      'https://www.googleapis.com/auth/tagmanager.edit.containers',
      'https://www.googleapis.com/auth/analytics.edit',
    ].join(' '),
  )}` +
  `&access_type=offline`;

console.log('\nOpen this URL in your browser:\n');
console.log(authUrl);
console.log('\nWaiting for Google to redirect back...\n');

async function handleCallback(req: http.IncomingMessage, res: http.ServerResponse): Promise<void> {
  const urlObj = new URL(req.url ?? '/', `http://localhost:${String(PORT)}`);
  if (urlObj.pathname !== '/callback') {
    res.end('Not found');
    return;
  }

  const code = urlObj.searchParams.get('code');
  const error = urlObj.searchParams.get('error');

  if (error ?? !code) {
    res.end(`<h2>Error: ${error ?? 'no code received'}</h2>`);
    server.close();
    process.exit(1);
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  });

  const data = (await tokenRes.json()) as TokenResponse;

  if (!tokenRes.ok) {
    res.end(`<h2>Token exchange failed</h2><pre>${JSON.stringify(data, null, 2)}</pre>`);
    server.close();
    process.exit(1);
  }

  res.end('<h2>Success! You can close this tab and check your terminal.</h2>');
  server.close();

  console.log('Add this to your .env:\n');
  console.log(`GOOGLE_REFRESH_TOKEN=${data.refresh_token ?? ''}`);
}

const server = http.createServer((req, res) => {
  handleCallback(req, res).catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    res.end(`<h2>Unexpected error: ${message}</h2>`);
    server.close();
    process.exit(1);
  });
});

server.listen(PORT);
