"""Pull straight from Airtable and rebuild data.js.

    cp .env.example .env     # then fill in your token and base id
    python3 refresh.py

Reads credentials from .env or the environment. The token never leaves
this machine and never enters data.js: only aggregates are written, no
founder names, emails, or per-person rows.

    AIRTABLE_TOKEN   personal access token, scope data.records:read
    AIRTABLE_BASE    base id, starts with "app"
    AIRTABLE_TABLE   table name or id (default: Grants)
    AIRTABLE_VIEW    optional view name, to match a saved grid view
"""
import json, os, sys, time, urllib.parse, urllib.request
import ff_lib

def load_env(path='.env'):
    if not os.path.exists(path):
        return
    for line in open(path):
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            k, v = line.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

load_env()
TOKEN = os.environ.get('AIRTABLE_TOKEN')
BASE  = os.environ.get('AIRTABLE_BASE')
TABLE = os.environ.get('AIRTABLE_TABLE', 'Grants')
VIEW  = os.environ.get('AIRTABLE_VIEW')

if not TOKEN or not BASE:
    sys.exit('Missing AIRTABLE_TOKEN or AIRTABLE_BASE.\n'
             'Copy .env.example to .env and fill it in, then run again.')

url = 'https://api.airtable.com/v0/%s/%s' % (BASE, urllib.parse.quote(TABLE, safe=''))
rows, offset, page = [], None, 0

while True:
    params = {'pageSize': '100'}
    if VIEW:
        params['view'] = VIEW
    if offset:
        params['offset'] = offset
    req = urllib.request.Request(url + '?' + urllib.parse.urlencode(params),
                                 headers={'Authorization': 'Bearer ' + TOKEN})
    try:
        body = json.load(urllib.request.urlopen(req, timeout=30))
    except urllib.error.HTTPError as e:
        detail = e.read().decode('utf-8', 'replace')[:400]
        sys.exit('Airtable returned %s.\n%s\n\n'
                 'A 403 usually means the token lacks data.records:read or access to this base.\n'
                 'A 404 usually means AIRTABLE_BASE or AIRTABLE_TABLE is wrong.' % (e.code, detail))
    rows.extend(r.get('fields', {}) for r in body.get('records', []))
    page += 1
    offset = body.get('offset')
    if not offset:
        break
    time.sleep(0.25)          # stay under Airtable's 5 req/sec limit

print('fetched %d records over %d page(s)' % (len(rows), page))

# Tell the operator if the table's field names drift from what ff_lib expects.
seen = set()
for r in rows:
    seen.update(r.keys())
missing = [k for k in ff_lib.C.values() if k not in seen]
if missing:
    print('\nWARNING: these expected fields were not found in the table:')
    for m in missing:
        print('  -', m)
    print('Edit the C map at the top of ff_lib.py to match your field names.')
    print('Fields actually present:')
    for s in sorted(seen):
        print('  ', s)

ff_lib.write(ff_lib.aggregate(rows, 'Airtable %s / %s' % (BASE, TABLE)))
