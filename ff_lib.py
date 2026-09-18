"""Load every registered source, resolve founders across them, and emit the
aggregates the dashboard renders.

Nothing in here writes a name, email or other direct identifier into the
output. build() asserts that before returning.
"""
import collections, csv, datetime, glob, json, os, re
import sources as S

TODAY = datetime.date.today().isoformat()
ERAS = [('American Entrepreneurship Award', 2016, 2017),
        ('Envolve Entrepreneurship',        2018, 2022),
        ('Founder Forward',                 2023, 2026)]


# ----------------------------------------------------------------- helpers
def g(r, k):
    v = r.get(k)
    if v is None:
        return ''
    if isinstance(v, list):
        v = ', '.join(str(x) for x in v)
    return str(v).strip().strip('"').strip()


def money(s):
    s = re.sub(r'[^0-9.\-]', '', s or '')
    try:
        return float(s)
    except ValueError:
        return 0.0


def num(s):
    s = re.sub(r'[^0-9.\-]', '', s or '')
    try:
        return float(s)
    except ValueError:
        return None


def year_of(s):
    m = re.search(r'(19|20)\d{2}', s or '')
    return int(m.group(0)) if m else None


def era_of(y):
    for label, lo, hi in ERAS:
        if y is not None and lo <= y <= hi:
            return label
    return 'Other'


def norm_email(s):
    return (s or '').strip().lower()


def norm_name(s):
    return re.sub(r'\s+', ' ', (s or '')).strip().lower()


def read(spec):
    """Load one source. Returns [] for excluded, absent or unreadable files."""
    if spec['sensitivity'] == 'excluded' or not spec.get('path'):
        return []
    paths = sorted(glob.glob(spec['path'])) if spec.get('glob') else [spec['path']]
    out = []
    for p in paths:
        if not os.path.exists(p):
            continue
        with open(p, newline='', encoding='utf-8-sig', errors='replace') as f:
            for row in csv.DictReader(f):
                if any((v or '').strip() for v in row.values()):
                    row['__file'] = os.path.basename(p)
                    out.append(row)
    return out


def tally(rows, key, blank_label=None, top=None):
    c = collections.Counter(g(r, key) for r in rows)
    out = [{'label': k, 'n': v} for k, v in c.most_common() if k]
    if top:
        out = out[:top]
    if blank_label and c.get(''):
        out.append({'label': blank_label, 'n': c['']})
    return out


def survival_by_founder(rows):
    """One verdict per founder, taken from their most recent participation."""
    latest = {}
    for r in sorted(rows, key=lambda x: x['y'] or 0):
        latest[r['f']] = r['alive']
    return dict(collections.Counter(v or '(blank)' for v in latest.values()))


def coverage(rows, key, label):
    n = len(rows) or 1
    filled = sum(1 for r in rows if g(r, key))
    return {'label': label, 'filled': filled, 'total': len(rows),
            'pct': round(100 * filled / n, 1)}


# ----------------------------------------------------------- provenance
class Prov:
    """Records where every published figure came from, and any source that
    disagrees with it. This is what the UI shows when someone clicks a number."""

    def __init__(self):
        self.entries = {}
        self.conflicts = []

    def add(self, mid, source_id, field, value, denom=None, note=''):
        spec = S.BY_ID.get(source_id, {})
        self.entries[mid] = {
            'source': spec.get('label', source_id), 'source_id': source_id,
            'file': os.path.basename(spec.get('path') or '') if spec.get('path') else None,
            'field': field, 'value': value, 'denom': denom,
            'note': note or spec.get('note', ''), 'asof': TODAY,
        }
        return value

    def conflict(self, metric, values, why=''):
        nums = [v['value'] for v in values if isinstance(v['value'], (int, float))]
        self.conflicts.append({
            'metric': metric, 'values': values, 'why': why,
            'delta': round(max(nums) - min(nums), 2) if len(nums) > 1 else None,
        })


# ---------------------------------------------------------- founder graph
def founder_graph(loaded):
    """Who we know, resolved on email only.

    Falling back to a name would fork one person into two whenever a file has
    their name but not their address, which inflates the universe. Rows with no
    email are counted as unresolvable instead, which is the honest answer and is
    itself a finding: they can never be linked to anything.
    """
    pops, unresolved = collections.defaultdict(set), collections.Counter()

    for sid, spec, rows in loaded:
        pop = spec.get('population')
        jk = spec.get('join')
        if not pop or not rows:
            continue
        for r in rows:
            e = norm_email(g(r, jk)) if jk else ''
            if e and '@' in e:
                pops[pop].add(e)
            else:
                unresolved[pop] += 1

    # Volunteers and advisors are people we know, but they are not founders.
    # Keeping the two universes apart stops the funnel overstating founder reach.
    FOUNDER_POPS = ('funded', 'census', 'directory', 'prospect')
    founder_u = set().union(*[pops[p] for p in FOUNDER_POPS if p in pops]) if pops else set()
    network_u = set().union(*pops.values()) if pops else set()

    def ov(a, b):
        return len(pops.get(a, set()) & pops.get(b, set()))

    return {
        'universe': len(founder_u),
        'network_universe': len(network_u),
        'by_population': {k: len(v) for k, v in sorted(pops.items())},
        'unresolvable': dict(unresolved),
        'overlaps': {
            'census_funded':      ov('census', 'funded'),
            'directory_funded':   ov('directory', 'funded'),
            'advising_funded':    ov('advising', 'funded'),
            'advising_volunteer': ov('advising', 'volunteer'),
            'census_directory':   ov('census', 'directory'),
        },
    }


# ------------------------------------------------------------- award rows
def award_rows(grants):
    """One row per award, carrying every dimension the dashboard filters on.

    Demographics are present only where the record links to a founder profile,
    which is 95 of 126 founders. Every demographic measure in the UI prints that
    denominator rather than implying the full table.
    """
    def fkey(r):
        e = norm_email(g(r, 'Main Email (from Link Field)'))
        return 'e:' + e if e else 'n:' + norm_name(g(r, "Founder's Name"))

    ids = {k: i + 1 for i, k in enumerate(sorted({fkey(r) for r in grants}))}
    RACE = [('black', 'Black / African American'),
            ('latinx', 'Latinx / Latino / Hispanic'),
            ('aapi', 'Asian American / Pacific Islander'),
            ('indigenous', 'Indigenous / Native American / Native Hawaiian'),
            ('multiracial', 'Multiracial')]

    def yn(r, col):
        v = g(r, col)
        return True if v == 'Yes' else (False if v == 'No' else None)

    out = []
    for r in grants:
        y = year_of(g(r, 'Participation year'))
        city = g(r, 'City')
        linked = bool(g(r, 'Link Field'))
        out.append({
            'f': ids[fkey(r)], 'y': y, 'amt': round(money(g(r, 'Capital amount'))),
            'captype': g(r, 'Type of capital received'),
            'state': g(r, 'State'), 'city': city,
            'region': S.CITY_REGION.get(city, 'Other' if city else ''),
            'stage': g(r, 'Growth Stage (from Link Field)').split(' - ')[0],
            'solution': g(r, 'Solution Type (from Link Field)'),
            'alive': g(r, 'Still in business? '),
            'purpose': g(r, 'Purpose'), 'era': era_of(y),
            'partner': [p.strip() for p in g(r, 'Partner').split(',') if p.strip()],
            'cohort': g(r, 'Cohort name'),
            'linked': linked,
            # A founder may select more than one race, so this is a list and the
            # shares it produces do not sum to 100.
            'race': [k for k, col in RACE
                     if linked and g(r, col + ' (Race) (from Link Field)') == 'Yes'],
            'gender': ('Female-identified' if yn(r, 'Female-Identified? (Owner Demographics) (from Link Field)')
                       else ('Not female-identified' if linked and yn(
                           r, 'Female-Identified? (Owner Demographics) (from Link Field)') is False else '')),
            'veteran': ('Veteran' if yn(r, 'Veteran? (Owner Demographics) (from Link Field)')
                        else ('Non-veteran' if linked and yn(
                            r, 'Veteran? (Owner Demographics) (from Link Field)') is False else '')),
            'lgbtq': ('LGBTQI+' if yn(r, 'LGBTQI+? (Owner Demographics) (from Link Field)')
                      else ('Not LGBTQI+' if linked and yn(
                          r, 'LGBTQI+? (Owner Demographics) (from Link Field)') is False else '')),
        })
    return out


# ------------------------------------------------------------------ build
def build():
    loaded = [(s['id'], s, read(s)) for s in S.SOURCES]
    R = {sid: rows for sid, s, rows in loaded}
    P = Prov()

    grants  = R['grants']
    census  = R['census']
    impact  = [r for r in R['impact_stats'] if g(r, 'Year')]
    sprint  = R['sprint_outputs']
    vols    = R['volunteers']
    pitch   = R['pitchprov']
    advpre  = R['advising_pre']

    # ---- grants
    rows = award_rows(grants)
    n_founders = len({r['f'] for r in rows})
    cap_total  = sum(r['amt'] for r in rows)
    P.add('capital_total', 'grants', 'Capital amount', cap_total)
    P.add('founders_funded', 'grants', "Founder's Name + Main Email", n_founders,
          denom=len(rows), note='Deduplicated on email, falling back to name.')

    # ---- founder funnel
    graph = founder_graph(loaded)

    # ---- historical impact stats, the org level annual series
    IMPACT_COLS = [('Grantees/Awardees', 'Grantees and awardees'),
                   ('Founders Served', 'Founders served'),
                   ('Funding Disbursed', 'Funding disbursed'),
                   ('FF Sprint Cohorts', 'Sprint cohorts'),
                   ('Advising Sessions Facilitated', 'Advising sessions'),
                   ('PitchProv', 'PitchProv events'),
                   ('Office Hours', 'Office hours'),
                   ('Co-Working Hours', 'Co-working hours'),
                   ('Workshops', 'Workshops'),
                   ('Social Hours', 'Social hours')]
    impact_series = []
    for col, label in IMPACT_COLS:
        pts = [{'year': year_of(g(r, 'Year')), 'v': num(g(r, col))} for r in impact]
        pts = [p for p in pts if p['year'] is not None]
        impact_series.append({
            'key': col, 'label': label, 'points': pts,
            'total': round(sum(p['v'] for p in pts if p['v'] is not None), 2),
            'filled': sum(1 for p in pts if p['v'] is not None), 'years': len(pts),
        })
    P.add('advising_sessions', 'impact_stats', 'Advising Sessions Facilitated',
          next(s['total'] for s in impact_series if s['key'] == 'Advising Sessions Facilitated'),
          note='Tracked here, contrary to the Phase 1 note that advising is invisible. '
               'Falls from 179 sessions in 2021 to 10 in 2025.')

    # ---- reconcile grantee counts against the grants table
    per_year = collections.Counter(r['y'] for r in rows if r['y'])
    recon = []
    for r in impact:
        y = year_of(g(r, 'Year'))
        a = num(g(r, 'Grantees/Awardees'))
        if y is None:
            continue
        b = per_year.get(y, 0)
        recon.append({'year': y, 'impact_stats': a, 'grants_table': b,
                      'match': None if a is None else int(a) == b})
    bad = [x for x in recon if not x['match'] and x['impact_stats'] is not None]
    if bad:
        worst = max(bad, key=lambda x: abs(int(x['impact_stats']) - x['grants_table']))
        P.conflict('Grantees per year',
                   [{'source': 'Historical impact stats',
                     'value': int(sum(x['impact_stats'] for x in bad))},
                    {'source': 'Airtable grants table',
                     'value': int(sum(x['grants_table'] for x in bad))}],
                   why='%d years disagree (%s). The widest is %d, where impact stats say %d and '
                       'the grants table holds %d.' % (
                           len(bad), ', '.join(str(x['year']) for x in bad),
                           worst['year'], int(worst['impact_stats']), worst['grants_table']))

    # ---- sprint cohorts
    sprint_rows = []
    for r in sprint:
        if not g(r, 'Cohort'):
            continue
        d = g(r, 'Date')
        sprint_rows.append({
            'cohort': g(r, 'Cohort'), 'y': year_of(d), 'q': d,
            'loc': g(r, 'Location'), 'status': g(r, 'Status'),
            'cap': money(g(r, 'Capital Raised')),
            'founders': num(g(r, 'Founders')) or 0,
            'vols': num(g(r, 'Volunteers')) or 0,
            'sessions': num(g(r, 'Sessions')) or 0,
            'hours': num(g(r, '# of Hours')),
            'probono': money(g(r, 'Pro Bono Value')),
            'type': g(r, 'Type'), 'status': g(r, 'Status'),
            'partner': [p.strip() for p in re.split(r'[,/]', g(r, 'Partner')) if p.strip()],
            # Theme is comma separated but several rows file a city here instead of
            # a theme, which the UI flags rather than silently cleans.
            'theme': [t.strip().strip('"') for t in re.split(r',(?=[A-Z])', g(r, 'Theme'))
                      if t.strip().strip('"')],
        })
    sprint_pb  = round(sum(money(g(r, 'Pro Bono Value')) for r in sprint))
    sprint_cap = round(sum(money(g(r, 'Capital Raised')) for r in sprint))
    P.add('sprint_probono', 'sprint_outputs', 'Pro Bono Value', sprint_pb,
          denom=len(sprint_rows))
    P.add('sprint_capital', 'sprint_outputs', 'Capital Raised', sprint_cap,
          note='Sprint programme only. Not the same figure as total capital deployed.')

    # ---- volunteers
    vol_pb    = sum(money(g(r, 'Pro Bono Value')) for r in vols)
    vol_hours = sum(money(g(r, 'Total Hours')) for r in vols)
    vol_hours_filled = sum(1 for r in vols if g(r, 'Total Hours'))
    P.add('volunteer_probono', 'volunteers', 'Pro Bono Value', round(vol_pb),
          denom=len(vols),
          note='Value is filled on every row but hours on only %d of %d, so %d rows carry a '
               'value with no hours behind it.' % (vol_hours_filled, len(vols),
                                                   len(vols) - vol_hours_filled))
    P.conflict('Pro bono value',
               [{'source': 'Volunteer list', 'value': round(vol_pb)},
                {'source': 'Sprint outputs', 'value': sprint_pb},
                {'source': 'Phase 1 handoff note', 'value': 120000}],
               why='Three figures for one metric. The volunteer list and sprint outputs count '
                   'different things and neither matches the $120k ScaleUp figure carried in the docs.')

    def vol_years(rows_):
        c = collections.Counter()
        for r in rows_:
            ys = [year_of(x) for x in g(r, 'Volunteer Year').split(',')]
            for y in [y for y in ys if y]:
                c[y] += 1
        return [{'year': y, 'n': n} for y, n in sorted(c.items())]

    def vol_session_types(rows_):
        c = collections.Counter()
        for r in rows_:
            for part in re.split(r'",\s*|,(?=[A-Z])', g(r, 'Session Type')):
                part = part.strip().strip('"')
                if part:
                    c[part.split(':')[0]] += 1
        return [{'label': k, 'n': v} for k, v in c.most_common()]

    # ---- pitchprov.
    # Questions 3 to 5 are answered with words ("Strongly agree"), not digits, so a
    # numeric-only parse reports them as empty. They are fully answered.
    LIKERT = {'strongly disagree': 1, 'disagree': 2, 'neutral': 3, 'agree': 4,
              'strongly agree': 5, 'not likely': 1, 'likely': 5}
    QUESTIONS = [
        {'key': 'invite',     'short': 'Would invite a friend',
         'text': 'How likely are you to invite a friend to another PitchProv?'},
        {'key': 'community',  'short': 'Sense of community',
         'text': 'Attending PitchProv increased my sense of community'},
        {'key': 'confidence', 'short': 'Communication confidence',
         'text': 'Attending PitchProv increased my confidence in my communication skills'},
        {'key': 'ecosystem',  'short': 'Commitment to the ecosystem',
         'text': 'Participating increased my commitment to supporting entrepreneurial ecosystems'},
    ]

    def likert(v):
        v = (v or '').strip()
        if re.match(r'^[1-5](\.0)?$', v):
            return int(float(v))
        return LIKERT.get(v.lower())

    events = []
    by_file = collections.defaultdict(list)
    for r in pitch:
        by_file[r['__file']].append(r)

    for fn, rs in sorted(by_file.items()):
        m = re.match(r'(\d+)_(\d+)_(\d+)\s*-\s*(.*?)-All', fn)
        cols = [c for c in rs[0] if c != '__file']
        roles = collections.Counter()
        youth = 0
        for r in rs:
            parts = [p.strip() for p in g(r, cols[1]).split(',') if p.strip()]
            for p in parts:
                roles[p] += 1
                if re.search(r'freshman|sophomore|junior|senior', p, re.I):
                    youth += 1
        qs = []
        for i, q in enumerate(QUESTIONS):
            vals = [likert(g(r, cols[2 + i])) for r in rs]
            vals = [v for v in vals if v]
            qs.append({'key': q['key'], 'short': q['short'], 'text': q['text'],
                       'n': len(vals),
                       'mean': round(sum(vals) / len(vals), 2) if vals else None,
                       'dist': [sum(1 for v in vals if v == k) for k in range(1, 6)]})
        events.append({
            'date': '%s/%s/%s' % (m.group(1), m.group(2), m.group(3)) if m else '',
            'y': 2000 + int(m.group(3)) if m else None,
            'sort': (2000 + int(m.group(3)), int(m.group(1)), int(m.group(2))) if m else (0, 0, 0),
            'venue': m.group(4).strip() if m else fn,
            'n': len(rs),
            # A youth event is one where school year appears at all, which is what
            # actually separates these audiences.
            'audience': 'Students and youth' if youth else 'Founders and stakeholders',
            'roles': [{'label': k, 'n': v} for k, v in roles.most_common()],
            'comments': sum(1 for r in rs if len(g(r, cols[6])) > 3),
            'questions': qs,
        })
    events.sort(key=lambda e: e['sort'])
    for e in events:
        e.pop('sort')

    P.add('pitchprov_responses', 'pitchprov', 'all four rated questions',
          sum(e['n'] for e in events), denom=len(events),
          note='Two events served students and youth, two served founders and stakeholders. '
               'Scores must never be pooled across those audiences.')

    # ---- census, selection funnel and profile
    funnel = tally(census, 'Cohort Status', blank_label='(not set)')
    P.add('selection_funnel', 'census', 'Cohort Status',
          sum(x['n'] for x in funnel if x['label'] != '(not set)'), denom=len(census),
          note='The closest thing to an application funnel that exists. The eligibility and '
               'pitch rubrics named in the Data Audit are not on disk.')

    # ---- advising demand
    adv_roles = tally(advpre, 'Please identify your role:', blank_label='(blank)')
    adv_needs = []
    for col in ['Marketing', 'Operations', 'Product Design', 'Strategy',
                'Business Growth', 'Professional Growth', 'Other']:
        adv_needs.append({'label': col, 'n': sum(1 for r in advpre if g(r, col))})
    adv_needs.sort(key=lambda x: -x['n'])

    # ---- assemble
    data = {
        'meta': {
            'generated': TODAY,
            'sources': [{'id': s['id'], 'label': s['label'], 'stage': s['stage'],
                         'rows': len(R.get(s['id'], [])),
                         'sensitivity': s['sensitivity'],
                         'present': bool(s.get('path')) and s['sensitivity'] != 'excluded'
                                    and len(R.get(s['id'], [])) > 0,
                         'note': s.get('public_note', s.get('note', ''))} for s in S.SOURCES],
            'eras': [{'label': l, 'from': lo, 'to': hi} for l, lo, hi in ERAS],
        },
        'provenance': P.entries,
        'conflicts': P.conflicts,
        'founders': graph,
        'rows': rows,
        'grants': {
            'records': len(rows), 'founders': n_founders, 'capital': cap_total,
            'unlinked': sum(1 for r in rows if not r['linked']),
            'survival': survival_by_founder(rows),
            'last_updated': [{'stamp': k, 'n': v} for k, v in collections.Counter(
                g(r, 'Last updated') for r in grants if g(r, 'Last updated')).most_common()],
            'coverage': [coverage(grants, k, lbl) for k, lbl in [
                ('Capital amount', 'Capital amount'), ('Participation year', 'Participation year'),
                ('Still in business? ', 'Still in business?'), ('City', 'City'), ('State', 'State'),
                ('Link Field', 'Linked founder record'),
                ('Main Email (from Link Field)', 'Email'),
                ('Growth Stage (from Link Field)', 'Growth stage'),
                ('Cohort name', 'Cohort name'), ('Partner', 'Partner')]],
        },
        'impact_series': impact_series,
        'reconciliation': recon,
        'sprint': sprint_rows,
        'sprint_totals': {'capital': sprint_cap, 'probono': sprint_pb,
                          'cohorts': len(sprint_rows),
                          'volunteers': int(sum(r['vols'] for r in sprint_rows)),
                          'sessions': int(sum(r['sessions'] for r in sprint_rows)),
                          'founders': int(sum(r['founders'] for r in sprint_rows))},
        'volunteers': {
            'n': len(vols), 'probono': round(vol_pb), 'hours': round(vol_hours, 1),
            'hours_filled': vol_hours_filled,
            'no_year': sum(1 for r in vols if not g(r, 'Volunteer Year')),
            'by_year': vol_years(vols), 'session_types': vol_session_types(vols),
            'skills': tally(vols, 'Skills', top=10),
        },
        'pitchprov': events,
        'pitchprov_questions': QUESTIONS,
        'census': {
            'n': len(census), 'funnel': funnel,
            'growth_stage': tally(census, 'Growth Stage', blank_label='(not recorded)'),
            'solution_type': tally(census, 'Solution Type', blank_label='(not recorded)'),
            'cities': tally(census, 'Home City', top=10),
            'challenges': tally(census, 'Organizational Challenges', top=8),
            'coverage': [coverage(census, k, lbl) for k, lbl in [
                ('Main Email', 'Email'), ('Growth Stage', 'Growth stage'), ('Race', 'Race'),
                ('Female-Identified?', 'Gender'), ('Home City', 'Home city'),
                ('Year Founded', 'Year founded'), ('Cohort Status', 'Cohort status'),
                ('Traction', 'Traction'), ('Capital Raised', 'Capital raised'),
                ('Which Cohort?', 'Which cohort'), ('Business Focus', 'Business focus')]],
        },
        'advising': {'n': len(advpre), 'roles': adv_roles, 'needs': adv_needs,
                     'cohorts': tally(advpre, 'Cohort', top=8)},
        'community': {
            'directory': len(R['directory']), 'newsletter': len(R['newsletter']),
            'hardware': len(R['hardware']), 'circle': len(R['circle']),
            'ten_year': len(R['ten_year']),
            'hardware_apple': sum(1 for r in R['hardware']
                                  if g(r, 'Do you use Apple products to operate your business? ').lower().startswith('y')),
            'directory_years': tally(R['directory'], 'Year of Award'),
            'directory_industry': tally(R['directory'], 'Industry', top=8),
        },
        'discover': {
            'acs_interest': len(R['acs_interest']), 'acs_application': len(R['acs_application']),
            'census_by_year': [{'year': y, 'n': n} for y, n in sorted(collections.Counter(
                year_of(g(r, 'Submission Date')) for r in census).items()) if y],
        },
    }

    # ---- demographics, aggregate only, from the grants table
    RACES = ['Black / African American', 'Latinx / Latino / Hispanic',
             'Asian American / Pacific Islander',
             'Indigenous / Native American / Native Hawaiian', 'Multiracial']
    seen, dem = set(), []
    for r in grants:
        k = norm_email(g(r, 'Main Email (from Link Field)')) or norm_name(g(r, "Founder's Name"))
        if k in seen or not g(r, 'Link Field'):
            continue
        seen.add(k); dem.append(r)
    data['demographics'] = {
        'denominator': len(dem),
        'race': sorted([{'label': x, 'n': sum(
            1 for r in dem if g(r, x + ' (Race) (from Link Field)') == 'Yes')} for x in RACES],
            key=lambda d: -d['n']),
        'female': sum(1 for r in dem if g(r, 'Female-Identified? (Owner Demographics) (from Link Field)') == 'Yes'),
        'veteran': sum(1 for r in dem if g(r, 'Veteran? (Owner Demographics) (from Link Field)') == 'Yes'),
        'lgbtq': sum(1 for r in dem if g(r, 'LGBTQI+? (Owner Demographics) (from Link Field)') == 'Yes'),
    }
    return data


# ------------------------------------------------------------- safety net
def assert_clean(data):
    """Refuse to emit anything carrying a direct identifier."""
    blob = json.dumps(data)
    # A bare '@' is not enough: venue names like "BUILD NYC @ LIU BK" are legitimate.
    m = re.search(r'[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', blob)
    if m:
        ctx = blob[max(0, m.start() - 90):m.end() + 40]
        raise SystemExit('REFUSING TO WRITE: an email address reached the output near:\n  ' + ctx)
    low = blob.lower()
    for bad in ['routing', 'account number', 'ssn']:
        if bad in low:
            raise SystemExit('REFUSING TO WRITE: forbidden token %r reached the output.' % bad)
    pay = S.BY_ID['payments']
    if pay['sensitivity'] != 'excluded':
        raise SystemExit('REFUSING TO WRITE: the payment survey is no longer marked excluded.')
    return True


def write(data, path='data.js'):
    assert_clean(data)
    rows = data.pop('rows')
    with open(path, 'w') as f:
        f.write('window.FF = ' + json.dumps(data, indent=1) + ';\n')
        f.write('window.FF_ROWS = ' + json.dumps(rows, separators=(',', ':')) + ';\n')
    data['rows'] = rows
    present = [s for s in data['meta']['sources'] if s['present']]
    print('wrote %s' % path)
    print('  %d of %d sources loaded, %d rows total'
          % (len(present), len(data['meta']['sources']), sum(s['rows'] for s in present)))
    for s in data['meta']['sources']:
        flag = 'ok     ' if s['present'] else ('EXCLUDED' if s['sensitivity'] == 'excluded' else 'ABSENT ')
        print('    %-9s %-5s %s' % (flag, s['rows'] or '', s['label']))
