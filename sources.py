"""Declarative registry of every Founder Forward data source.

Adding a file to the product is one dict here, not a code change. Nothing
outside this module knows where data lives on disk.

sensitivity:
    open      aggregates may be published
    pii       carries direct identifiers; aggregate only, never row level
    excluded  never loaded at all, for any reason

population: which group of people the file describes, used to build the
founder funnel without pretending the sources join cleanly.
"""
import os

HOME = os.path.expanduser('~')
FF   = os.path.join(HOME, 'Desktop', 'ff')
DL   = os.path.join(HOME, 'Downloads')

SOURCES = [
    # ---------------- canonical grants table ----------------
    dict(id='grants', stage='program', population='funded', sensitivity='pii',
         path=os.path.join(DL, '2016 to 2024-Grid view.csv'),
         label='Airtable grants table (2016 to 2024 grid view)',
         join='Main Email (from Link Field)',
         note='85 column export. The 13 column copy in the project folder is a subset and is not used.'),

    # ---------------- stage 1, discover ----------------
    dict(id='census', stage='discover', population='census', sensitivity='pii',
         path=os.path.join(FF, 'MAIN SURVEY (DO NOT EDIT)-Main Census (DO NOT EDIT).csv'),
         label='Main census', join='Main Email',
         note='Highest quality file on disk. Also carries the selection funnel in Cohort Status.'),
    dict(id='acs_interest', stage='discover', population='prospect', sensitivity='pii',
         path=os.path.join(FF, 'AI Civic Studio Interest Form-ACS - Interest Form .csv'),
         label='AI Civic Studio interest form', join='Email'),
    dict(id='acs_application', stage='discover', population='prospect', sensitivity='pii',
         path=os.path.join(FF, 'AI Civic Studio Application-Grid view.csv'),
         label='AI Civic Studio application', join='Email Address',
         note='44 columns including employees and revenue. Effectively the baseline template, already fielded.'),

    # ---------------- stage 2, apply ----------------
    # Eligibility rubric and pitch rubric are named in the Data Audit but are not
    # on disk. Registered as absent so the product can say so out loud.
    dict(id='eligibility_rubric', stage='apply', population='applicant', sensitivity='open',
         path=None, label='Founder sourcing and eligibility rubric',
         note='Named in the Data Audit. No file exists. Scores decide who gets funded, then vanish.'),
    dict(id='pitch_rubric', stage='apply', population='applicant', sensitivity='open',
         path=None, label='Pitch rubric',
         note='Named in the Data Audit. No file exists.'),

    # ---------------- stage 3, program ----------------
    dict(id='impact_stats', stage='program', population=None, sensitivity='open',
         path=os.path.join(FF, 'Historical Impact Stats-Grid view.csv'),
         label='Historical impact stats',
         note='Org level annual counts. The only source for workshops, office hours, co-working and advising sessions.'),
    dict(id='sprint_outputs', stage='program', population=None, sensitivity='open',
         path=os.path.join(FF, 'Sprint Outputs-Main View.csv'),
         label='Sprint outputs',
         note='29 cohorts. Capital here is Sprint only and is not total capital.'),
    dict(id='volunteers', stage='program', population='volunteer', sensitivity='pii',
         path=os.path.join(FF, 'Volunteer List-Grid view.csv'),
         label='Volunteer list', join='Email',
         note='Carries names, employers, phone and LinkedIn. Aggregate only.'),
    dict(id='advising_pre', stage='program', population='advising', sensitivity='pii',
         path=os.path.join(FF, 'Main Advising Pre-Survey-Responses.csv'),
         label='Sprint advising pre-survey', join='Email',
         note='Same form served founders and volunteers, so role must be read before interpreting.'),
    dict(id='pitchprov', stage='program', population=None, sensitivity='open',
         path=os.path.join(FF, '*PitchProv.csv'), glob=True,
         label='PitchProv event surveys',
         note='Event date and venue live only in the filename. No email, so responses never join to a founder.'),
    dict(id='website_intake', stage='program', population=None, sensitivity='pii',
         path=os.path.join(FF, 'Founder-WebsiteIntake.csv'),
         label='Founder website intake'),

    # ---------------- stage 4, community ----------------
    dict(id='directory', stage='community', population='directory', sensitivity='pii',
         path=os.path.join(FF, 'FounderWebsiteDirectory.csv'),
         label='Founder website directory', join='Email',
         note='Best bridge to the grants table, 78 of 94 emails match.'),
    dict(id='newsletter', stage='community', population=None, sensitivity='pii',
         path=os.path.join(FF, 'NewsletterSurvey-2025.csv'),
         label='2025 newsletter survey'),
    dict(id='hardware', stage='community', population=None, sensitivity='pii',
         path=os.path.join(FF, 'NetworkHardwareSurvey.csv'),
         label='Founder network hardware survey', join='Email'),
    dict(id='circle', stage='community', population=None, sensitivity='pii',
         path=os.path.join(FF, 'CircleCommunitySurvey.csv'),
         label='Circle community survey'),

    # ---------------- stage 5, alumni ----------------
    dict(id='ten_year', stage='alumni', population=None, sensitivity='pii',
         path=os.path.join(FF, '2026Newsletter10YearVisionSurvey.csv'),
         label='2026 ten year vision survey', join='Email'),
    dict(id='storytracking', stage='alumni', population=None, sensitivity='open',
         path=None, label='Story tracking',
         note='Named in the Data Audit with no link. No file exists.'),

    # ---------------- excluded ----------------
    dict(id='payments', stage='program', population=None, sensitivity='excluded',
         path=os.path.join(FF, 'Payment Survey-Results.csv'),
         label='Capital award payment survey',
         # Internal reason, deliberately NOT emitted to data.js: the file holds
         # cleartext bank account numbers (61 rows), routing numbers (61) and
         # EIN or SSN (78). Escalate where the file lives; do not publish detail.
         public_note='Excluded from this product by policy. Contains financial identifiers '
                     'that fall under the most restricted access tier.'),
]

BY_ID = {s['id']: s for s in SOURCES}

# Column names that must never reach data.js, matched case insensitively as
# substrings. The build asserts against these.
FORBIDDEN = ['email', 'e-mail', 'account number', 'routing', 'ein', 'ssn',
             'phone', 'linkedin', 'mailing address', 'legal business address',
             'headshot', 'beneficiary']


# City to region. Edit this rather than the code when a city is misfiled or added.
# Anything not listed falls into "Other", which the UI labels honestly.
REGIONS = {
    'Atlantic': ['Bronx', 'Newark', 'Philadelphia', 'New York', 'Baltimore', 'Washington, DC',
                 'Nyack', 'Brooklyn', 'Jersey City', 'East Orange', 'South Orange', 'Laurelton',
                 'Lawrence Township', 'Folcroft', 'Silver Spring', 'Queensbury', 'Portsmouth',
                 'University Park'],
    'South Central': ['Louisville', 'Houston', 'Tulsa', 'Austin', 'New Orleans', 'Dallas',
                      'San Antonio', 'Leander', 'Glenn Heights', 'New Albany', 'Hoyt'],
    'Tribal Nations & Southwest': ['Albuquerque', 'Santa Fe', 'Phoenix', 'Gallup', 'Jermez Pueblo'],
    'Southeast': ['Miami', 'Atlanta', 'Jacksonville', 'Charlotte', 'Durham', 'Columbia',
                  'Orlando', 'Norcross', 'Fairburn', 'Graham', 'Carrboro', 'Matthews'],
    'Midwest': ['Detroit', 'Saint Paul', 'Minneapolis', 'Chicago', 'Flint', 'Indianapolis',
                'Kansas City'],
    'West': ['Los Angeles', 'Oakland', 'San Francisco', 'Denver', 'Seattle', 'San Diego',
             'Long Beach', 'Calabasas'],
}
CITY_REGION = {c: r for r, cities in REGIONS.items() for c in cities}
