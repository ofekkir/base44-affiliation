#!/usr/bin/env bash
# Fetch all public English templates from Base44 marketplace API
# Usage: ./fetch_templates.sh <BEARER_TOKEN>
# Output: raw_data.json in the same directory

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

TOKEN="${1:?Usage: $0 <BEARER_TOKEN>}"

curl -s \
  -H "accept: application/json" \
  -H "authorization: Bearer ${TOKEN}" \
  -H "x-active-workspace-id: 69cb7d3b6ec9767019d69f86" \
  -H "x-origin-url: https://app.base44.com/app-templates" \
  'https://app.base44.com/api/app-catalog-items/catalog?q=%7B%22$and%22:%5B%7B%22$or%22:%5B%7B%22visibility_scope%22:%22public%22%7D,%7B%22visibility_scope%22:%7B%22$exists%22:false%7D%7D%5D%7D,%7B%22$or%22:%5B%7B%22language%22:%22en%22%7D,%7B%22language%22:%7B%22$exists%22:false%7D%7D,%7B%22language%22:null%7D%5D%7D%5D%7D&limit=2000&skip=0&sort_by=usage' \
  -o "${SCRIPT_DIR}/raw_data.json"

COUNT=$(python3 -c "import json; print(len(json.load(open('${SCRIPT_DIR}/raw_data.json'))))")
echo "Saved ${COUNT} templates to ${SCRIPT_DIR}/raw_data.json"
