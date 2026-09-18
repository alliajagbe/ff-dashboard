window.FF = {
 "meta": {
  "generated": "2026-09-17",
  "sources": [
   {
    "id": "grants",
    "label": "Airtable grants table (2016 to 2024 grid view)",
    "stage": "program",
    "rows": 141,
    "sensitivity": "pii",
    "present": true,
    "note": "85 column export. The 13 column copy in the project folder is a subset and is not used."
   },
   {
    "id": "census",
    "label": "Main census",
    "stage": "discover",
    "rows": 165,
    "sensitivity": "pii",
    "present": true,
    "note": "Highest quality file on disk. Also carries the selection funnel in Cohort Status."
   },
   {
    "id": "acs_interest",
    "label": "AI Civic Studio interest form",
    "stage": "discover",
    "rows": 3,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "acs_application",
    "label": "AI Civic Studio application",
    "stage": "discover",
    "rows": 1,
    "sensitivity": "pii",
    "present": true,
    "note": "44 columns including employees and revenue. Effectively the baseline template, already fielded."
   },
   {
    "id": "eligibility_rubric",
    "label": "Founder sourcing and eligibility rubric",
    "stage": "apply",
    "rows": 0,
    "sensitivity": "open",
    "present": false,
    "note": "Named in the Data Audit. No file exists. Scores decide who gets funded, then vanish."
   },
   {
    "id": "pitch_rubric",
    "label": "Pitch rubric",
    "stage": "apply",
    "rows": 0,
    "sensitivity": "open",
    "present": false,
    "note": "Named in the Data Audit. No file exists."
   },
   {
    "id": "impact_stats",
    "label": "Historical impact stats",
    "stage": "program",
    "rows": 11,
    "sensitivity": "open",
    "present": true,
    "note": "Org level annual counts. The only source for workshops, office hours, co-working and advising sessions."
   },
   {
    "id": "sprint_outputs",
    "label": "Sprint outputs",
    "stage": "program",
    "rows": 29,
    "sensitivity": "open",
    "present": true,
    "note": "29 cohorts. Capital here is Sprint only and is not total capital."
   },
   {
    "id": "volunteers",
    "label": "Volunteer list",
    "stage": "program",
    "rows": 212,
    "sensitivity": "pii",
    "present": true,
    "note": "Carries names, employers, phone and LinkedIn. Aggregate only."
   },
   {
    "id": "advising_pre",
    "label": "Sprint advising pre-survey",
    "stage": "program",
    "rows": 63,
    "sensitivity": "pii",
    "present": true,
    "note": "Same form served founders and volunteers, so role must be read before interpreting."
   },
   {
    "id": "pitchprov",
    "label": "PitchProv event surveys",
    "stage": "program",
    "rows": 97,
    "sensitivity": "open",
    "present": true,
    "note": "Event date and venue live only in the filename. No email, so responses never join to a founder."
   },
   {
    "id": "website_intake",
    "label": "Founder website intake",
    "stage": "program",
    "rows": 8,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "directory",
    "label": "Founder website directory",
    "stage": "community",
    "rows": 123,
    "sensitivity": "pii",
    "present": true,
    "note": "Best bridge to the grants table, 78 of 94 emails match."
   },
   {
    "id": "newsletter",
    "label": "2025 newsletter survey",
    "stage": "community",
    "rows": 3,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "hardware",
    "label": "Founder network hardware survey",
    "stage": "community",
    "rows": 36,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "circle",
    "label": "Circle community survey",
    "stage": "community",
    "rows": 2,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "ten_year",
    "label": "2026 ten year vision survey",
    "stage": "alumni",
    "rows": 1,
    "sensitivity": "pii",
    "present": true,
    "note": ""
   },
   {
    "id": "storytracking",
    "label": "Story tracking",
    "stage": "alumni",
    "rows": 0,
    "sensitivity": "open",
    "present": false,
    "note": "Named in the Data Audit with no link. No file exists."
   },
   {
    "id": "payments",
    "label": "Capital award payment survey",
    "stage": "program",
    "rows": 0,
    "sensitivity": "excluded",
    "present": false,
    "note": "Excluded from this product by policy. Contains financial identifiers that fall under the most restricted access tier."
   }
  ],
  "eras": [
   {
    "label": "American Entrepreneurship Award",
    "from": 2016,
    "to": 2017
   },
   {
    "label": "Envolve Entrepreneurship",
    "from": 2018,
    "to": 2022
   },
   {
    "label": "Founder Forward",
    "from": 2023,
    "to": 2026
   }
  ]
 },
 "provenance": {
  "capital_total": {
   "source": "Airtable grants table (2016 to 2024 grid view)",
   "source_id": "grants",
   "file": "2016 to 2024-Grid view.csv",
   "field": "Capital amount",
   "value": 859418,
   "denom": null,
   "note": "85 column export. The 13 column copy in the project folder is a subset and is not used.",
   "asof": "2026-09-17"
  },
  "founders_funded": {
   "source": "Airtable grants table (2016 to 2024 grid view)",
   "source_id": "grants",
   "file": "2016 to 2024-Grid view.csv",
   "field": "Founder's Name + Main Email",
   "value": 126,
   "denom": 141,
   "note": "Deduplicated on email, falling back to name.",
   "asof": "2026-09-17"
  },
  "advising_sessions": {
   "source": "Historical impact stats",
   "source_id": "impact_stats",
   "file": "Historical Impact Stats-Grid view.csv",
   "field": "Advising Sessions Facilitated",
   "value": 459.0,
   "denom": null,
   "note": "Tracked here, contrary to the Phase 1 note that advising is invisible. Falls from 179 sessions in 2021 to 10 in 2025.",
   "asof": "2026-09-17"
  },
  "sprint_probono": {
   "source": "Sprint outputs",
   "source_id": "sprint_outputs",
   "file": "Sprint Outputs-Main View.csv",
   "field": "Pro Bono Value",
   "value": 100540,
   "denom": 29,
   "note": "29 cohorts. Capital here is Sprint only and is not total capital.",
   "asof": "2026-09-17"
  },
  "sprint_capital": {
   "source": "Sprint outputs",
   "source_id": "sprint_outputs",
   "file": "Sprint Outputs-Main View.csv",
   "field": "Capital Raised",
   "value": 441968,
   "denom": null,
   "note": "Sprint programme only. Not the same figure as total capital deployed.",
   "asof": "2026-09-17"
  },
  "volunteer_probono": {
   "source": "Volunteer list",
   "source_id": "volunteers",
   "file": "Volunteer List-Grid view.csv",
   "field": "Pro Bono Value",
   "value": 147906,
   "denom": 212,
   "note": "Value is filled on every row but hours on only 143 of 212, so 69 rows carry a value with no hours behind it.",
   "asof": "2026-09-17"
  },
  "pitchprov_responses": {
   "source": "PitchProv event surveys",
   "source_id": "pitchprov",
   "file": "*PitchProv.csv",
   "field": "all four rated questions",
   "value": 97,
   "denom": 4,
   "note": "Two events served students and youth, two served founders and stakeholders. Scores must never be pooled across those audiences.",
   "asof": "2026-09-17"
  },
  "selection_funnel": {
   "source": "Main census",
   "source_id": "census",
   "file": "MAIN SURVEY (DO NOT EDIT)-Main Census (DO NOT EDIT).csv",
   "field": "Cohort Status",
   "value": 126,
   "denom": 165,
   "note": "The closest thing to an application funnel that exists. The eligibility and pitch rubrics named in the Data Audit are not on disk.",
   "asof": "2026-09-17"
  }
 },
 "conflicts": [
  {
   "metric": "Grantees per year",
   "values": [
    {
     "source": "Historical impact stats",
     "value": 83
    },
    {
     "source": "Airtable grants table",
     "value": 64
    }
   ],
   "why": "4 years disagree (2016, 2020, 2021, 2022). The widest is 2021, where impact stats say 30 and the grants table holds 16.",
   "delta": 19
  },
  {
   "metric": "Pro bono value",
   "values": [
    {
     "source": "Volunteer list",
     "value": 147906
    },
    {
     "source": "Sprint outputs",
     "value": 100540
    },
    {
     "source": "Phase 1 handoff note",
     "value": 120000
    }
   ],
   "why": "Three figures for one metric. The volunteer list and sprint outputs count different things and neither matches the $120k ScaleUp figure carried in the docs.",
   "delta": 47366
  }
 ],
 "founders": {
  "universe": 230,
  "network_universe": 460,
  "by_population": {
   "advising": 48,
   "census": 164,
   "directory": 89,
   "funded": 94,
   "prospect": 4,
   "volunteer": 205
  },
  "unresolvable": {
   "funded": 33,
   "volunteer": 3,
   "advising": 15,
   "directory": 34
  },
  "overlaps": {
   "census_funded": 41,
   "directory_funded": 78,
   "advising_funded": 8,
   "advising_volunteer": 15,
   "census_directory": 37
  }
 },
 "grants": {
  "records": 141,
  "founders": 126,
  "capital": 859418,
  "unlinked": 32,
  "survival": {
   "Yes": 111,
   "No": 14,
   "Not Sure": 1
  },
  "last_updated": [
   {
    "stamp": "July 10, 2024 09:46",
    "n": 137
   },
   {
    "stamp": "May 5, 2025 09:46",
    "n": 4
   }
  ],
  "coverage": [
   {
    "label": "Capital amount",
    "filled": 141,
    "total": 141,
    "pct": 100.0
   },
   {
    "label": "Participation year",
    "filled": 141,
    "total": 141,
    "pct": 100.0
   },
   {
    "label": "Still in business?",
    "filled": 141,
    "total": 141,
    "pct": 100.0
   },
   {
    "label": "City",
    "filled": 126,
    "total": 141,
    "pct": 89.4
   },
   {
    "label": "State",
    "filled": 126,
    "total": 141,
    "pct": 89.4
   },
   {
    "label": "Linked founder record",
    "filled": 109,
    "total": 141,
    "pct": 77.3
   },
   {
    "label": "Email",
    "filled": 108,
    "total": 141,
    "pct": 76.6
   },
   {
    "label": "Growth stage",
    "filled": 109,
    "total": 141,
    "pct": 77.3
   },
   {
    "label": "Cohort name",
    "filled": 88,
    "total": 141,
    "pct": 62.4
   },
   {
    "label": "Partner",
    "filled": 84,
    "total": 141,
    "pct": 59.6
   }
  ]
 },
 "impact_series": [
  {
   "key": "Grantees/Awardees",
   "label": "Grantees and awardees",
   "points": [
    {
     "year": 2016,
     "v": 9.0
    },
    {
     "year": 2017,
     "v": 10.0
    },
    {
     "year": 2018,
     "v": 15.0
    },
    {
     "year": 2019,
     "v": 20.0
    },
    {
     "year": 2020,
     "v": 14.0
    },
    {
     "year": 2021,
     "v": 30.0
    },
    {
     "year": 2022,
     "v": 30.0
    },
    {
     "year": 2023,
     "v": 16.0
    },
    {
     "year": 2024,
     "v": 12.0
    },
    {
     "year": 2025,
     "v": 4.0
    },
    {
     "year": 2026,
     "v": null
    }
   ],
   "total": 160.0,
   "filled": 10,
   "years": 11
  },
  {
   "key": "Founders Served",
   "label": "Founders served",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": 40.0
    },
    {
     "year": 2022,
     "v": 15.0
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": 50.0
    },
    {
     "year": 2025,
     "v": 84.0
    },
    {
     "year": 2026,
     "v": 20.0
    }
   ],
   "total": 209.0,
   "filled": 5,
   "years": 11
  },
  {
   "key": "Funding Disbursed",
   "label": "Funding disbursed",
   "points": [
    {
     "year": 2016,
     "v": 127500.0
    },
    {
     "year": 2017,
     "v": 250000.0
    },
    {
     "year": 2018,
     "v": 46350.0
    },
    {
     "year": 2019,
     "v": 25500.0
    },
    {
     "year": 2020,
     "v": 24100.0
    },
    {
     "year": 2021,
     "v": 73776.68
    },
    {
     "year": 2022,
     "v": 152191.32
    },
    {
     "year": 2023,
     "v": 76000.0
    },
    {
     "year": 2024,
     "v": 78000.0
    },
    {
     "year": 2025,
     "v": 6000.0
    },
    {
     "year": 2026,
     "v": null
    }
   ],
   "total": 859418.0,
   "filled": 10,
   "years": 11
  },
  {
   "key": "FF Sprint Cohorts",
   "label": "Sprint cohorts",
   "points": [
    {
     "year": 2016,
     "v": 0.0
    },
    {
     "year": 2017,
     "v": 0.0
    },
    {
     "year": 2018,
     "v": 0.0
    },
    {
     "year": 2019,
     "v": 0.0
    },
    {
     "year": 2020,
     "v": 3.0
    },
    {
     "year": 2021,
     "v": 4.0
    },
    {
     "year": 2022,
     "v": 7.0
    },
    {
     "year": 2023,
     "v": 4.0
    },
    {
     "year": 2024,
     "v": 3.0
    },
    {
     "year": 2025,
     "v": 1.0
    },
    {
     "year": 2026,
     "v": null
    }
   ],
   "total": 22.0,
   "filled": 10,
   "years": 11
  },
  {
   "key": "Advising Sessions Facilitated",
   "label": "Advising sessions",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": 179.0
    },
    {
     "year": 2022,
     "v": 180.0
    },
    {
     "year": 2023,
     "v": 66.0
    },
    {
     "year": 2024,
     "v": 24.0
    },
    {
     "year": 2025,
     "v": 10.0
    },
    {
     "year": 2026,
     "v": null
    }
   ],
   "total": 459.0,
   "filled": 5,
   "years": 11
  },
  {
   "key": "PitchProv",
   "label": "PitchProv events",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": null
    },
    {
     "year": 2022,
     "v": null
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": 1.0
    },
    {
     "year": 2025,
     "v": 2.0
    },
    {
     "year": 2026,
     "v": 1.0
    }
   ],
   "total": 4.0,
   "filled": 3,
   "years": 11
  },
  {
   "key": "Office Hours",
   "label": "Office hours",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": null
    },
    {
     "year": 2022,
     "v": null
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": null
    },
    {
     "year": 2025,
     "v": 1.0
    },
    {
     "year": 2026,
     "v": 8.0
    }
   ],
   "total": 9.0,
   "filled": 2,
   "years": 11
  },
  {
   "key": "Co-Working Hours",
   "label": "Co-working hours",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": null
    },
    {
     "year": 2022,
     "v": null
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": 14.0
    },
    {
     "year": 2025,
     "v": 20.0
    },
    {
     "year": 2026,
     "v": 6.0
    }
   ],
   "total": 40.0,
   "filled": 3,
   "years": 11
  },
  {
   "key": "Workshops",
   "label": "Workshops",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": null
    },
    {
     "year": 2022,
     "v": null
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": null
    },
    {
     "year": 2025,
     "v": 1.0
    },
    {
     "year": 2026,
     "v": null
    }
   ],
   "total": 1.0,
   "filled": 1,
   "years": 11
  },
  {
   "key": "Social Hours",
   "label": "Social hours",
   "points": [
    {
     "year": 2016,
     "v": null
    },
    {
     "year": 2017,
     "v": null
    },
    {
     "year": 2018,
     "v": null
    },
    {
     "year": 2019,
     "v": null
    },
    {
     "year": 2020,
     "v": null
    },
    {
     "year": 2021,
     "v": null
    },
    {
     "year": 2022,
     "v": null
    },
    {
     "year": 2023,
     "v": null
    },
    {
     "year": 2024,
     "v": null
    },
    {
     "year": 2025,
     "v": null
    },
    {
     "year": 2026,
     "v": 2.0
    }
   ],
   "total": 2.0,
   "filled": 1,
   "years": 11
  }
 ],
 "reconciliation": [
  {
   "year": 2016,
   "impact_stats": 9.0,
   "grants_table": 7,
   "match": false
  },
  {
   "year": 2017,
   "impact_stats": 10.0,
   "grants_table": 10,
   "match": true
  },
  {
   "year": 2018,
   "impact_stats": 15.0,
   "grants_table": 15,
   "match": true
  },
  {
   "year": 2019,
   "impact_stats": 20.0,
   "grants_table": 20,
   "match": true
  },
  {
   "year": 2020,
   "impact_stats": 14.0,
   "grants_table": 13,
   "match": false
  },
  {
   "year": 2021,
   "impact_stats": 30.0,
   "grants_table": 16,
   "match": false
  },
  {
   "year": 2022,
   "impact_stats": 30.0,
   "grants_table": 28,
   "match": false
  },
  {
   "year": 2023,
   "impact_stats": 16.0,
   "grants_table": 16,
   "match": true
  },
  {
   "year": 2024,
   "impact_stats": 12.0,
   "grants_table": 12,
   "match": true
  },
  {
   "year": 2025,
   "impact_stats": 4.0,
   "grants_table": 4,
   "match": true
  },
  {
   "year": 2026,
   "impact_stats": null,
   "grants_table": 0,
   "match": null
  }
 ],
 "sprint": [
  {
   "cohort": "Texas Health & Wellness",
   "y": 2020,
   "q": "2020 Q3",
   "loc": "Texas",
   "status": "Completed",
   "cap": 8000.0,
   "founders": 5.0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "DivInc",
    "BLNDED"
   ],
   "theme": [
    "Health & Wellness"
   ]
  },
  {
   "cohort": "Diverse SAAS",
   "y": 2020,
   "q": "2020 Q3",
   "loc": "National",
   "status": "Completed",
   "cap": 8000.0,
   "founders": 5.0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "Envolve"
   ],
   "theme": [
    "Tech"
   ]
  },
  {
   "cohort": "Indigenous Futures",
   "y": 2020,
   "q": "2020 Q3",
   "loc": "Albuquerque",
   "status": "Completed",
   "cap": 8000.0,
   "founders": 4.0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "Native Women Lead"
   ],
   "theme": [
    "Community / Economic Power",
    "Indigenous"
   ]
  },
  {
   "cohort": "Louisville Triumphant 1",
   "y": 2021,
   "q": "2021 Q1",
   "loc": "Louisville",
   "status": "Completed",
   "cap": 16628.48,
   "founders": 5.0,
   "vols": 14.0,
   "sessions": 20.0,
   "hours": null,
   "probono": 4400.0,
   "type": "Cohort",
   "partner": [
    "FISLL",
    "NBA"
   ],
   "theme": [
    "Community / Economic Power",
    "Black Founders",
    "Education",
    "Food"
   ]
  },
  {
   "cohort": "Newark Culture Heroes",
   "y": 2021,
   "q": "2021 Q2",
   "loc": "Newark",
   "status": "Completed",
   "cap": 18302.08,
   "founders": 7.0,
   "vols": 19.0,
   "sessions": 18.0,
   "hours": null,
   "probono": 3960.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Culture",
    "Black Founders"
   ]
  },
  {
   "cohort": "Tulsa Titans",
   "y": 2021,
   "q": "2021 Q2",
   "loc": "Tulsa",
   "status": "Completed",
   "cap": 18653.12,
   "founders": 4.0,
   "vols": 20.0,
   "sessions": 6.0,
   "hours": null,
   "probono": 1320.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Community / Economic Power",
    "Black Founders"
   ]
  },
  {
   "cohort": "Philly Tech",
   "y": 2021,
   "q": "2021 Q2",
   "loc": "Philadelphia",
   "status": "Completed",
   "cap": 20193.0,
   "founders": 5.0,
   "vols": 29.0,
   "sessions": 36.0,
   "hours": null,
   "probono": 7920.0,
   "type": "Cohort",
   "partner": [
    "Comcast"
   ],
   "theme": [
    "Tech",
    "Black Founders"
   ]
  },
  {
   "cohort": "Scale Up 1",
   "y": 2021,
   "q": "2021 Q3",
   "loc": "National",
   "status": "Completed",
   "cap": 0.0,
   "founders": 40.0,
   "vols": 30.0,
   "sessions": 79.0,
   "hours": null,
   "probono": 17380.0,
   "type": "Learning Series",
   "partner": [
    "Deloitte"
   ],
   "theme": [
    "Various"
   ]
  },
  {
   "cohort": "Twin Cities Rising",
   "y": 2021,
   "q": "2021 Q4",
   "loc": "Twin Cities",
   "status": "Completed",
   "cap": 18191.32,
   "founders": 4.0,
   "vols": 9.0,
   "sessions": 9.0,
   "hours": null,
   "probono": 1980.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Health & Wellness",
    "Education",
    "Female Founders"
   ]
  },
  {
   "cohort": "Louisville Renaissance",
   "y": 2021,
   "q": "2021 Q4",
   "loc": "Louisville",
   "status": "Completed",
   "cap": 16000.0,
   "founders": 5.0,
   "vols": 5.0,
   "sessions": 11.0,
   "hours": null,
   "probono": 2420.0,
   "type": "Cohort",
   "partner": [
    "FISLL",
    "PNC",
    "Surdna Foundation"
   ],
   "theme": [
    "Black Founders",
    "Tech",
    "Community / Economic Power",
    "Health & Wellness"
   ]
  },
  {
   "cohort": "Rooted in Food",
   "y": 2022,
   "q": "2022 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 40000.0,
   "founders": 5.0,
   "vols": 38.0,
   "sessions": 42.0,
   "hours": null,
   "probono": 9240.0,
   "type": "Cohort",
   "partner": [
    "PwC",
    "Surdna Foundation"
   ],
   "theme": [
    "Food"
   ]
  },
  {
   "cohort": "Wellness Revolution",
   "y": 2022,
   "q": "2022 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 5.0,
   "vols": 4.0,
   "sessions": 9.0,
   "hours": null,
   "probono": 1980.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Health & Wellness",
    "Female Founders"
   ]
  },
  {
   "cohort": "Glorious Juneteenth",
   "y": 2022,
   "q": "2022 Q2",
   "loc": "National",
   "status": "Completed",
   "cap": 18000.0,
   "founders": 6.0,
   "vols": 12.0,
   "sessions": 12.0,
   "hours": null,
   "probono": 2640.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Black Founders",
    "Community / Economic Power"
   ]
  },
  {
   "cohort": "DMV EJ",
   "y": 2022,
   "q": "2022 Q2",
   "loc": "DC / MD",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 4.0,
   "vols": 11.0,
   "sessions": 11.0,
   "hours": null,
   "probono": 2420.0,
   "type": "Cohort",
   "partner": [
    "Meta",
    "University of Maryland"
   ],
   "theme": [
    "Green / Environmental Justice"
   ]
  },
  {
   "cohort": "Scale Up 2",
   "y": 2022,
   "q": "2022 Q3",
   "loc": "National",
   "status": "Completed",
   "cap": 0.0,
   "founders": 15.0,
   "vols": 10.0,
   "sessions": 48.0,
   "hours": null,
   "probono": 10560.0,
   "type": "Learning Series",
   "partner": [
    "Deloitte"
   ],
   "theme": [
    "Various"
   ]
  },
  {
   "cohort": "Louisville Triumphant 3",
   "y": 2022,
   "q": "2022 Q4",
   "loc": "Louisville",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 5.0,
   "vols": 36.0,
   "sessions": 58.0,
   "hours": null,
   "probono": 12760.0,
   "type": "Cohort",
   "partner": [
    "FISLL",
    "PwC",
    "Amplify",
    "Render"
   ],
   "theme": [
    "Black Founders",
    "Education",
    "Food",
    "Tech",
    "Health & Wellness"
   ]
  },
  {
   "cohort": "Louisville Triumphant 3 - Amplify Learning Series",
   "y": 2022,
   "q": "2022 Q4",
   "loc": "Louisville",
   "status": "Completed",
   "cap": 0.0,
   "founders": 4.0,
   "vols": 0,
   "sessions": 0,
   "hours": 30.0,
   "probono": 0.0,
   "type": "Learning Series",
   "partner": [
    "FISLL",
    "PwC",
    "Amplify"
   ],
   "theme": [
    "Black Founders",
    "Education",
    "Food",
    "Tech",
    "Health & Wellness"
   ]
  },
  {
   "cohort": "Black Veterans",
   "y": 2023,
   "q": "2023 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 18000.0,
   "founders": 4.0,
   "vols": 23.0,
   "sessions": 38.0,
   "hours": null,
   "probono": 8360.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Veteran Founders",
    "Black Founders"
   ]
  },
  {
   "cohort": "Indigenous Creative",
   "y": 2023,
   "q": "2023 Q2",
   "loc": "National",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 4.0,
   "vols": 33.0,
   "sessions": 10.0,
   "hours": null,
   "probono": 2200.0,
   "type": "Cohort",
   "partner": [
    "PwC"
   ],
   "theme": [
    "Indigenous",
    "Culture"
   ]
  },
  {
   "cohort": "Pru23-Black Wealth Futures",
   "y": 2023,
   "q": "2023 Q2",
   "loc": "National",
   "status": "Completed",
   "cap": 18000.0,
   "founders": 4.0,
   "vols": 9.0,
   "sessions": 9.0,
   "hours": null,
   "probono": 1980.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Workforce",
    "Atlanta",
    "Newark",
    "Jacksonville",
    "Chicago",
    "Twin Cities",
    "Detroit",
    "Hartford"
   ]
  },
  {
   "cohort": "Southeast EJ",
   "y": 2023,
   "q": "2023 Q4",
   "loc": "SE Regional",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 4.0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "Meta",
    "University of Maryland"
   ],
   "theme": [
    "Green / Environmental Justice"
   ]
  },
  {
   "cohort": "Indigenous EJ",
   "y": 2023,
   "q": "2023 Q4",
   "loc": "National",
   "status": "Pending",
   "cap": 20000.0,
   "founders": 0,
   "vols": 0,
   "sessions": 9.0,
   "hours": null,
   "probono": 1980.0,
   "type": "Cohort",
   "partner": [
    "Meta",
    "University of Maryland"
   ],
   "theme": [
    "Green / Environmental Justice",
    "Indigenous",
    "Female Founders"
   ]
  },
  {
   "cohort": "Pru23 - AAPI New Longevity",
   "y": 2024,
   "q": "2024 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 18000.0,
   "founders": 4.0,
   "vols": 26.0,
   "sessions": 13.0,
   "hours": null,
   "probono": 2860.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "AAPI"
   ]
  },
  {
   "cohort": "Scale Up 3",
   "y": 2024,
   "q": "2024 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 0.0,
   "founders": 0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Learning Series",
   "partner": [
    "Deloitte"
   ],
   "theme": [
    "Various"
   ]
  },
  {
   "cohort": "Deloitte Platform",
   "y": 2024,
   "q": "2024 Q1",
   "loc": "National",
   "status": "Pending",
   "cap": 0.0,
   "founders": 0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "Deloitte"
   ],
   "theme": []
  },
  {
   "cohort": "PwC - Procurement Pathways",
   "y": 2024,
   "q": "2024 Q1",
   "loc": "Louisville",
   "status": "Completed",
   "cap": 40000.0,
   "founders": 4.0,
   "vols": 33.0,
   "sessions": 11.0,
   "hours": null,
   "probono": 2420.0,
   "type": "Cohort",
   "partner": [
    "PwC",
    "Render"
   ],
   "theme": [
    "Procurement"
   ]
  },
  {
   "cohort": "Scale Up 4",
   "y": 2024,
   "q": "2024 Q1",
   "loc": "National",
   "status": "Completed",
   "cap": 0.0,
   "founders": 0,
   "vols": 0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Learning Series",
   "partner": [
    "Deloitte"
   ],
   "theme": []
  },
  {
   "cohort": "PwC - Sustainable Bronx",
   "y": 2024,
   "q": "2024 Q2",
   "loc": "Mid Atlantic",
   "status": "Completed",
   "cap": 20000.0,
   "founders": 4.0,
   "vols": 15.0,
   "sessions": 0,
   "hours": null,
   "probono": 0.0,
   "type": "Cohort",
   "partner": [
    "PwC"
   ],
   "theme": [
    "Sustainability"
   ]
  },
  {
   "cohort": "Pru23 - MLK Pitch",
   "y": 2025,
   "q": "2025 Q1",
   "loc": "Mid Atlantic",
   "status": "Completed",
   "cap": 18000.0,
   "founders": 4.0,
   "vols": 25.0,
   "sessions": 8.0,
   "hours": 8.0,
   "probono": 1760.0,
   "type": "Cohort",
   "partner": [
    "Prudential"
   ],
   "theme": [
    "Sustainability"
   ]
  }
 ],
 "sprint_totals": {
  "capital": 441968,
  "probono": 100540,
  "cohorts": 29,
  "volunteers": 401,
  "sessions": 457,
  "founders": 160
 },
 "volunteers": {
  "n": 212,
  "probono": 147906,
  "hours": 672.3,
  "hours_filled": 143,
  "no_year": 70,
  "by_year": [
   {
    "year": 2022,
    "n": 48
   },
   {
    "year": 2023,
    "n": 85
   },
   {
    "year": 2024,
    "n": 3
   },
   {
    "year": 2025,
    "n": 5
   },
   {
    "year": 2026,
    "n": 11
   }
  ],
  "session_types": [
   {
    "label": "Advising",
    "n": 133
   },
   {
    "label": "Office Hours",
    "n": 11
   },
   {
    "label": "Workshop",
    "n": 2
   },
   {
    "label": "Sprint Series",
    "n": 1
   }
  ],
  "skills": [
   {
    "label": "Finance and Business Models",
    "n": 23
   },
   {
    "label": "Marketing. Communications, and Branding",
    "n": 18
   },
   {
    "label": "Strategy and Vision",
    "n": 18
   },
   {
    "label": "Growth, Scaling, Investments",
    "n": 13
   },
   {
    "label": "Finance and Operations,Strategy and Vision",
    "n": 13
   },
   {
    "label": "Product Design and Testing",
    "n": 12
   },
   {
    "label": "Operations, Logistics, Administration",
    "n": 9
   },
   {
    "label": "Product  & Service Design",
    "n": 8
   },
   {
    "label": "Talent & Leadership",
    "n": 6
   },
   {
    "label": "Talent and Human Resources",
    "n": 5
   }
  ]
 },
 "pitchprov": [
  {
   "date": "12/16/24",
   "y": 2024,
   "venue": "Ginjan Cafe @ Brooklyn",
   "n": 22,
   "audience": "Founders and stakeholders",
   "roles": [
    {
     "label": "Community stakeholder",
     "n": 11
    },
    {
     "label": "Founder",
     "n": 8
    },
    {
     "label": "Philanthropic stakeholder",
     "n": 3
    },
    {
     "label": "Investor",
     "n": 3
    },
    {
     "label": "Corporate stakeholder",
     "n": 2
    }
   ],
   "comments": 17,
   "questions": [
    {
     "key": "invite",
     "short": "Would invite a friend",
     "text": "How likely are you to invite a friend to another PitchProv?",
     "n": 21,
     "mean": 4.86,
     "dist": [
      0,
      0,
      0,
      3,
      18
     ]
    },
    {
     "key": "community",
     "short": "Sense of community",
     "text": "Attending PitchProv increased my sense of community",
     "n": 22,
     "mean": 4.27,
     "dist": [
      0,
      0,
      3,
      10,
      9
     ]
    },
    {
     "key": "confidence",
     "short": "Communication confidence",
     "text": "Attending PitchProv increased my confidence in my communication skills",
     "n": 22,
     "mean": 4.05,
     "dist": [
      0,
      0,
      7,
      7,
      8
     ]
    },
    {
     "key": "ecosystem",
     "short": "Commitment to the ecosystem",
     "text": "Participating increased my commitment to supporting entrepreneurial ecosystems",
     "n": 22,
     "mean": 4.55,
     "dist": [
      0,
      1,
      1,
      5,
      15
     ]
    }
   ]
  },
  {
   "date": "3/21/25",
   "y": 2025,
   "venue": "Diversitech @ Philly",
   "n": 31,
   "audience": "Founders and stakeholders",
   "roles": [
    {
     "label": "Founder",
     "n": 16
    },
    {
     "label": "Community Stakeholder",
     "n": 9
    },
    {
     "label": "Corporate Stakeholder",
     "n": 6
    },
    {
     "label": "Investor",
     "n": 1
    }
   ],
   "comments": 19,
   "questions": [
    {
     "key": "invite",
     "short": "Would invite a friend",
     "text": "How likely are you to invite a friend to another PitchProv?",
     "n": 31,
     "mean": 4.81,
     "dist": [
      0,
      0,
      0,
      6,
      25
     ]
    },
    {
     "key": "community",
     "short": "Sense of community",
     "text": "Attending PitchProv increased my sense of community",
     "n": 31,
     "mean": 4.84,
     "dist": [
      0,
      0,
      1,
      3,
      27
     ]
    },
    {
     "key": "confidence",
     "short": "Communication confidence",
     "text": "Attending PitchProv increased my confidence in my communication skills",
     "n": 31,
     "mean": 4.65,
     "dist": [
      0,
      0,
      2,
      7,
      22
     ]
    },
    {
     "key": "ecosystem",
     "short": "Commitment to the ecosystem",
     "text": "Participating increased my commitment to supporting entrepreneurial ecosystems",
     "n": 30,
     "mean": 4.63,
     "dist": [
      0,
      0,
      1,
      9,
      20
     ]
    }
   ]
  },
  {
   "date": "11/1/25",
   "y": 2025,
   "venue": "BUILD NYC @ LIU BK",
   "n": 29,
   "audience": "Students and youth",
   "roles": [
    {
     "label": "Sophomore",
     "n": 12
    },
    {
     "label": "Senior",
     "n": 9
    },
    {
     "label": "Junior",
     "n": 8
    }
   ],
   "comments": 2,
   "questions": [
    {
     "key": "invite",
     "short": "Would invite a friend",
     "text": "How likely are you to invite a friend to another PitchProv?",
     "n": 29,
     "mean": 3.31,
     "dist": [
      2,
      5,
      10,
      6,
      6
     ]
    },
    {
     "key": "community",
     "short": "Sense of community",
     "text": "Attending PitchProv increased my sense of community",
     "n": 29,
     "mean": 3.62,
     "dist": [
      0,
      0,
      15,
      10,
      4
     ]
    },
    {
     "key": "confidence",
     "short": "Communication confidence",
     "text": "Attending PitchProv increased my confidence in my communication skills",
     "n": 29,
     "mean": 3.76,
     "dist": [
      0,
      2,
      9,
      12,
      6
     ]
    },
    {
     "key": "ecosystem",
     "short": "Commitment to the ecosystem",
     "text": "Participating increased my commitment to supporting entrepreneurial ecosystems",
     "n": 29,
     "mean": 3.79,
     "dist": [
      0,
      3,
      8,
      10,
      8
     ]
    }
   ]
  },
  {
   "date": "7/31/26",
   "y": 2026,
   "venue": "Young Adult Day @ JobsFirstNYC",
   "n": 15,
   "audience": "Students and youth",
   "roles": [
    {
     "label": "Other",
     "n": 10
    },
    {
     "label": "Senior",
     "n": 3
    },
    {
     "label": "Freshman",
     "n": 2
    }
   ],
   "comments": 9,
   "questions": [
    {
     "key": "invite",
     "short": "Would invite a friend",
     "text": "How likely are you to invite a friend to another PitchProv?",
     "n": 15,
     "mean": 4.4,
     "dist": [
      0,
      0,
      3,
      3,
      9
     ]
    },
    {
     "key": "community",
     "short": "Sense of community",
     "text": "Attending PitchProv increased my sense of community",
     "n": 15,
     "mean": 4.2,
     "dist": [
      0,
      0,
      1,
      10,
      4
     ]
    },
    {
     "key": "confidence",
     "short": "Communication confidence",
     "text": "Attending PitchProv increased my confidence in my communication skills",
     "n": 15,
     "mean": 4.33,
     "dist": [
      0,
      0,
      3,
      4,
      8
     ]
    },
    {
     "key": "ecosystem",
     "short": "Commitment to the ecosystem",
     "text": "Participating increased my commitment to supporting entrepreneurial ecosystems",
     "n": 15,
     "mean": 4.33,
     "dist": [
      0,
      0,
      1,
      8,
      6
     ]
    }
   ]
  }
 ],
 "pitchprov_questions": [
  {
   "key": "invite",
   "short": "Would invite a friend",
   "text": "How likely are you to invite a friend to another PitchProv?"
  },
  {
   "key": "community",
   "short": "Sense of community",
   "text": "Attending PitchProv increased my sense of community"
  },
  {
   "key": "confidence",
   "short": "Communication confidence",
   "text": "Attending PitchProv increased my confidence in my communication skills"
  },
  {
   "key": "ecosystem",
   "short": "Commitment to the ecosystem",
   "text": "Participating increased my commitment to supporting entrepreneurial ecosystems"
  }
 ],
 "census": {
  "n": 165,
  "funnel": [
   {
    "label": "Pending",
    "n": 53
   },
   {
    "label": "Completed",
    "n": 37
   },
   {
    "label": "Not Eligible",
    "n": 36
   },
   {
    "label": "(not set)",
    "n": 39
   }
  ],
  "growth_stage": [
   {
    "label": "Start-Up - MVP launched, seed funding, early revenue",
    "n": 74
   },
   {
    "label": "Growth - consistent revenue generation, client acquisition",
    "n": 36
   },
   {
    "label": "Development - prototype development / MVP close to launch",
    "n": 35
   },
   {
    "label": "Expansion - geographic and client expansion",
    "n": 11
   },
   {
    "label": "Early Ideation - research and planning",
    "n": 8
   },
   {
    "label": "Maturity - stable profits, major market influence",
    "n": 1
   }
  ],
  "solution_type": [
   {
    "label": "Service",
    "n": 45
   },
   {
    "label": "Product",
    "n": 41
   },
   {
    "label": "Creative / Cultural",
    "n": 31
   },
   {
    "label": "Technology",
    "n": 27
   },
   {
    "label": "Other",
    "n": 7
   },
   {
    "label": "Infrastructural",
    "n": 6
   },
   {
    "label": "(not recorded)",
    "n": 8
   }
  ],
  "cities": [
   {
    "label": "Louisville",
    "n": 39
   },
   {
    "label": "Minneapolis",
    "n": 17
   },
   {
    "label": "Tulsa",
    "n": 15
   },
   {
    "label": "Philadelphia",
    "n": 8
   },
   {
    "label": "Saint Paul",
    "n": 6
   },
   {
    "label": "Newark, NJ",
    "n": 5
   },
   {
    "label": "LOUISVILLE",
    "n": 4
   },
   {
    "label": "Newark",
    "n": 4
   },
   {
    "label": "Houston",
    "n": 3
   },
   {
    "label": "Atlanta",
    "n": 3
   }
  ],
  "challenges": [
   {
    "label": "Finances and Business Modeling,\"Investments, Growth, and Scaling\",Marketing and Communications",
    "n": 13
   },
   {
    "label": "Finances and Business Modeling,\"Investments, Growth, and Scaling\",Operations / Administration",
    "n": 6
   },
   {
    "label": "Finances and Business Modeling,Marketing and Communications,\"Investments, Growth, and Scaling",
    "n": 5
   },
   {
    "label": "Investments, Growth, and Scaling",
    "n": 3
   },
   {
    "label": "Finances and Business Modeling,\"Investments, Growth, and Scaling\",Product / Service Design",
    "n": 2
   },
   {
    "label": "Investments, Growth, and Scaling\",Operations / Administration,Other",
    "n": 2
   },
   {
    "label": "Finances and Business Modeling,Product / Service Design,Marketing and Communications",
    "n": 2
   },
   {
    "label": "Finances and Business Modeling,Operations / Administration,Marketing and Communications",
    "n": 2
   }
  ],
  "coverage": [
   {
    "label": "Email",
    "filled": 165,
    "total": 165,
    "pct": 100.0
   },
   {
    "label": "Growth stage",
    "filled": 165,
    "total": 165,
    "pct": 100.0
   },
   {
    "label": "Race",
    "filled": 162,
    "total": 165,
    "pct": 98.2
   },
   {
    "label": "Gender",
    "filled": 165,
    "total": 165,
    "pct": 100.0
   },
   {
    "label": "Home city",
    "filled": 165,
    "total": 165,
    "pct": 100.0
   },
   {
    "label": "Year founded",
    "filled": 160,
    "total": 165,
    "pct": 97.0
   },
   {
    "label": "Cohort status",
    "filled": 126,
    "total": 165,
    "pct": 76.4
   },
   {
    "label": "Traction",
    "filled": 87,
    "total": 165,
    "pct": 52.7
   },
   {
    "label": "Capital raised",
    "filled": 11,
    "total": 165,
    "pct": 6.7
   },
   {
    "label": "Which cohort",
    "filled": 0,
    "total": 165,
    "pct": 0.0
   },
   {
    "label": "Business focus",
    "filled": 0,
    "total": 165,
    "pct": 0.0
   }
  ]
 },
 "advising": {
  "n": 63,
  "roles": [
   {
    "label": "Advisor",
    "n": 37
   },
   {
    "label": "Founder",
    "n": 26
   }
  ],
  "needs": [
   {
    "label": "Professional Growth",
    "n": 19
   },
   {
    "label": "Marketing",
    "n": 10
   },
   {
    "label": "Operations",
    "n": 10
   },
   {
    "label": "Product Design",
    "n": 10
   },
   {
    "label": "Strategy",
    "n": 10
   },
   {
    "label": "Business Growth",
    "n": 10
   },
   {
    "label": "Other",
    "n": 6
   }
  ],
  "cohorts": [
   {
    "label": "Newark Culture Heroes",
    "n": 20
   },
   {
    "label": "Louisville Triumphant 1",
    "n": 5
   },
   {
    "label": "New Longevity",
    "n": 4
   },
   {
    "label": "Sustainability",
    "n": 4
   },
   {
    "label": "Tulsa Titans",
    "n": 4
   },
   {
    "label": "Procurement Pathways",
    "n": 2
   },
   {
    "label": "Twin Cities Rising",
    "n": 2
   },
   {
    "label": "Philly Tech",
    "n": 1
   }
  ]
 },
 "community": {
  "directory": 123,
  "newsletter": 3,
  "hardware": 36,
  "circle": 2,
  "ten_year": 1,
  "hardware_apple": 35,
  "directory_years": [
   {
    "label": "2022",
    "n": 26
   },
   {
    "label": "2021",
    "n": 16
   },
   {
    "label": "2019",
    "n": 14
   },
   {
    "label": "2023",
    "n": 14
   },
   {
    "label": "2017",
    "n": 11
   },
   {
    "label": "2018",
    "n": 10
   },
   {
    "label": "2024",
    "n": 8
   },
   {
    "label": "2016",
    "n": 6
   },
   {
    "label": "2020",
    "n": 4
   },
   {
    "label": "2020,2018",
    "n": 4
   },
   {
    "label": "2020,2019",
    "n": 2
   },
   {
    "label": "2025,2024",
    "n": 2
   },
   {
    "label": "2019,2020",
    "n": 1
   },
   {
    "label": "2019,2022",
    "n": 1
   },
   {
    "label": "2023,2020",
    "n": 1
   },
   {
    "label": "2023,2020,2019",
    "n": 1
   },
   {
    "label": "2024,2025",
    "n": 1
   },
   {
    "label": "2024,2025,2022",
    "n": 1
   }
  ],
  "directory_industry": [
   {
    "label": "Consumer Products & Services",
    "n": 47
   },
   {
    "label": "Creative Media",
    "n": 27
   },
   {
    "label": "Tech & Tech-Enabled",
    "n": 27
   },
   {
    "label": "Regenerative Business",
    "n": 19
   },
   {
    "label": "Other",
    "n": 3
   }
  ]
 },
 "discover": {
  "acs_interest": 3,
  "acs_application": 1,
  "census_by_year": [
   {
    "year": 2020,
    "n": 25
   },
   {
    "year": 2021,
    "n": 131
   },
   {
    "year": 2022,
    "n": 6
   },
   {
    "year": 2023,
    "n": 3
   }
  ]
 },
 "demographics": {
  "denominator": 95,
  "race": [
   {
    "label": "Black / African American",
    "n": 72
   },
   {
    "label": "Indigenous / Native American / Native Hawaiian",
    "n": 17
   },
   {
    "label": "Latinx / Latino / Hispanic",
    "n": 16
   },
   {
    "label": "Multiracial",
    "n": 11
   },
   {
    "label": "Asian American / Pacific Islander",
    "n": 9
   }
  ],
  "female": 45,
  "veteran": 7,
  "lgbtq": 7
 }
};
window.FF_ROWS = [{"f":110,"y":2016,"amt":12500,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":107,"y":2016,"amt":2500,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":99,"y":2016,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":122,"y":2016,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":95,"y":2016,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":108,"y":2016,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":116,"y":2016,"amt":12500,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":97,"y":2017,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":126,"y":2017,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":102,"y":2017,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":109,"y":2017,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":105,"y":2017,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":115,"y":2017,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":104,"y":2017,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":112,"y":2017,"amt":25000,"captype":"Loan","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":118,"y":2017,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":120,"y":2017,"amt":25000,"captype":"Loan","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"American Entrepreneurship Award","era":"American Entrepreneurship Award","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":98,"y":2018,"amt":2800,"captype":"Grant","state":"Georgia","city":"Atlanta","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":117,"y":2018,"amt":1000,"captype":"Grant","state":"Michigan","city":"Flint","region":"Midwest","stage":"","solution":"","alive":"No","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":79,"y":2018,"amt":2800,"captype":"Grant","state":"Florida","city":"Miami","region":"Southeast","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":114,"y":2018,"amt":5000,"captype":"Grant","state":"Michigan","city":"Detroit","region":"Midwest","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":14,"y":2018,"amt":7000,"captype":"Grant","state":"Georgia","city":"Atlanta","region":"Southeast","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":100,"y":2018,"amt":2500,"captype":"Grant","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":101,"y":2018,"amt":5000,"captype":"Grant","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"No","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":113,"y":2018,"amt":1550,"captype":"Grant","state":"Florida","city":"Miami","region":"Southeast","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":123,"y":2018,"amt":3200,"captype":"Grant","state":"Michigan","city":"Detroit","region":"Midwest","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":124,"y":2018,"amt":4200,"captype":"Grant","state":"South Carolina","city":"Charleston","region":"Other","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":111,"y":2018,"amt":2800,"captype":"Grant","state":"Maryland","city":"Baltimore","region":"Atlantic","stage":"","solution":"","alive":"No","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":21,"y":2018,"amt":2500,"captype":"Grant","state":"Washington, DC","city":"Washington, DC","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":121,"y":2018,"amt":2500,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":119,"y":2018,"amt":2500,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":51,"y":2018,"amt":1000,"captype":"Grant","state":"Georgia","city":"Atlanta","region":"Southeast","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Envolve Award","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black","aapi"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":31,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Development","solution":"Service","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":85,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":41,"y":2019,"amt":1000,"captype":"Grant","state":"Louisiana","city":"New Orleans","region":"South Central","stage":"Start-Up","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":34,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":71,"y":2019,"amt":2000,"captype":"Grant","state":"Texas","city":"Austin","region":"South Central","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":125,"y":2019,"amt":1500,"captype":"Grant","state":"Colorado","city":"Denver","region":"West","stage":"","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":38,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":27,"y":2019,"amt":2000,"captype":"Grant","state":"","city":"","region":"","stage":"Development","solution":"Creative / Cultural","alive":"No","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["indigenous","multiracial"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":91,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":8,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Other","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":88,"y":2019,"amt":1000,"captype":"Grant","state":"New Mexico","city":"Albuquerque","region":"Tribal Nations & Southwest","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":77,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":3,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Growth","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":19,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black","latinx","aapi","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":43,"y":2019,"amt":2000,"captype":"Grant","state":"","city":"","region":"","stage":"Development","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["indigenous","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":89,"y":2019,"amt":1000,"captype":"Grant","state":"Texas","city":"Dallas","region":"South Central","stage":"Start-Up","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":55,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Development","solution":"Infrastructural","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":11,"y":2019,"amt":2000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":35,"y":2019,"amt":2000,"captype":"Grant","state":"Texas","city":"Austin","region":"South Central","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["aapi","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":94,"y":2019,"amt":1000,"captype":"Grant","state":"","city":"","region":"","stage":"Start-Up","solution":"Other","alive":"No","purpose":"Titan Generator at SXSW","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":true,"race":["latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":51,"y":2020,"amt":2000,"captype":"Grant","state":"Georgia","city":"Atlanta","region":"Southeast","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":[],"cohort":"Diverse SaaS","linked":true,"race":["black","aapi"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":83,"y":2020,"amt":2000,"captype":"Grant","state":"New Mexico","city":"Jermez Pueblo","region":"Tribal Nations & Southwest","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Native Women Lead"],"cohort":"Indigenous Futures","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":79,"y":2020,"amt":2000,"captype":"Grant","state":"Florida","city":"Miami","region":"Southeast","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":[],"cohort":"Diverse SaaS","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":21,"y":2020,"amt":2000,"captype":"Grant","state":"Washington, DC","city":"Washington, DC","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":[],"cohort":"Diverse SaaS","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":27,"y":2020,"amt":2000,"captype":"Grant","state":"New Mexico","city":"Albuquerque","region":"Tribal Nations & Southwest","stage":"Development","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Native Women Lead"],"cohort":"Indigenous Futures","linked":true,"race":["indigenous","multiracial"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":93,"y":2020,"amt":2000,"captype":"Grant","state":"New Mexico","city":"Albuquerque","region":"Tribal Nations & Southwest","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Native Women Lead"],"cohort":"Indigenous Futures","linked":true,"race":["indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":106,"y":2020,"amt":100,"captype":"Grant","state":"","city":"","region":"","stage":"","solution":"","alive":"Yes","purpose":"Melvina Pitch Competition","era":"Envolve Entrepreneurship","partner":[],"cohort":"","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":71,"y":2020,"amt":2000,"captype":"Grant","state":"Texas","city":"Austin","region":"South Central","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["DivInc","BLNDED"],"cohort":"Texas Health & Wellness","linked":true,"race":["latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":19,"y":2020,"amt":2000,"captype":"Grant","state":"Texas","city":"Houston","region":"South Central","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["DivInc","BLNDED"],"cohort":"Texas Health & Wellness","linked":true,"race":["black","latinx","aapi","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":53,"y":2020,"amt":2000,"captype":"Grant","state":"Texas","city":"Austin","region":"South Central","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["DivInc","BLNDED"],"cohort":"Texas Health & Wellness","linked":true,"race":["black","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":88,"y":2020,"amt":2000,"captype":"Grant","state":"New Mexico","city":"Albuquerque","region":"Tribal Nations & Southwest","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Native Women Lead"],"cohort":"Indigenous Futures","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":14,"y":2020,"amt":2000,"captype":"Grant","state":"Georgia","city":"Atlanta","region":"Southeast","stage":"Start-Up","solution":"Service","alive":"Not Sure","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":[],"cohort":"Diverse SaaS","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":70,"y":2020,"amt":2000,"captype":"Grant","state":"Texas","city":"Leander","region":"South Central","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["DivInc","BLNDED"],"cohort":"Texas Health & Wellness","linked":true,"race":["latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":33,"y":2021,"amt":4663,"captype":"Grant","state":"Oklahoma","city":"Tulsa","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Tulsa Titans","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":32,"y":2021,"amt":4576,"captype":"Grant","state":"New Jersey","city":"East Orange","region":"Atlantic","stage":"Development","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Newark Culture Heroes","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":78,"y":2021,"amt":5048,"captype":"Grant","state":"New Jersey","city":"Lawrence Township","region":"Atlantic","stage":"Start-Up","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Comcast"],"cohort":"Philly Tech","linked":true,"race":["black","latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":13,"y":2021,"amt":4157,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Other","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","NBA"],"cohort":"Louisville Triumphant 1","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":90,"y":2021,"amt":5048,"captype":"Grant","state":"Pennsylvania","city":"Folcroft","region":"Atlantic","stage":"Development","solution":"Technology","alive":"No","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Comcast"],"cohort":"Philly Tech","linked":true,"race":["black","aapi"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":45,"y":2021,"amt":4157,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","NBA"],"cohort":"Louisville Triumphant 1","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":72,"y":2021,"amt":4157,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","NBA"],"cohort":"Louisville Triumphant 1","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":56,"y":2021,"amt":4663,"captype":"Grant","state":"Oklahoma","city":"Tulsa","region":"South Central","stage":"Start-Up","solution":"Infrastructural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Tulsa Titans","linked":true,"race":["black","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":84,"y":2021,"amt":5048,"captype":"Grant","state":"Pennsylvania","city":"Philadelphia","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Comcast"],"cohort":"Philly Tech","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":58,"y":2021,"amt":4157,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","NBA"],"cohort":"Louisville Triumphant 1","linked":true,"race":["black","latinx","aapi","indigenous","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":47,"y":2021,"amt":5048,"captype":"Grant","state":"Pennsylvania","city":"Philadelphia","region":"Atlantic","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Comcast"],"cohort":"Philly Tech","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":1,"y":2021,"amt":4576,"captype":"Grant","state":"New Jersey","city":"South Orange","region":"Atlantic","stage":"Start-Up","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Newark Culture Heroes","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":57,"y":2021,"amt":4576,"captype":"Grant","state":"New Jersey","city":"Newark","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"No","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Newark Culture Heroes","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":10,"y":2021,"amt":4663,"captype":"Grant","state":"Oklahoma","city":"Tulsa","region":"South Central","stage":"Start-Up","solution":"Product","alive":"No","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Tulsa Titans","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":40,"y":2021,"amt":4663,"captype":"Grant","state":"Oklahoma","city":"Tulsa","region":"South Central","stage":"Growth","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Tulsa Titans","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":30,"y":2021,"amt":4576,"captype":"Grant","state":"New York","city":"Laurelton","region":"Atlantic","stage":"Start-Up","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Newark Culture Heroes","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":2,"y":2022,"amt":4000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Infrastructural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","PNC","Surdna Foundation"],"cohort":"Louisville Renaissance","linked":true,"race":["black","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":74,"y":2022,"amt":4500,"captype":"Grant","state":"Michigan","city":"Detroit","region":"Midwest","stage":"Start-Up","solution":"Creative / Cultural","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Glorious Juneteenth","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":26,"y":2022,"amt":4548,"captype":"Grant","state":"Minnesota","city":"Minneapolis","region":"Midwest","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Twin Cities Rising","linked":true,"race":[],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":67,"y":2022,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Amplify Louisville","FISLL","PwC","Render Capital"],"cohort":"Louisville Triumphant 3","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":52,"y":2022,"amt":4000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","PNC","Surdna Foundation"],"cohort":"Louisville Renaissance","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":20,"y":2022,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Amplify Louisville","FISLL","PwC","Render Capital"],"cohort":"Louisville Triumphant 3","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":66,"y":2022,"amt":4500,"captype":"Grant","state":"Maryland","city":"Silver Spring","region":"Atlantic","stage":"Start-Up","solution":"Other","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Glorious Juneteenth","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":54,"y":2022,"amt":10000,"captype":"Grant","state":"North Carolina","city":"Graham","region":"Southeast","stage":"Development","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["PwC","Surdna Foundation"],"cohort":"Rooted in Food","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":5,"y":2022,"amt":5000,"captype":"Grant","state":"Washington, DC","city":"Washington, DC","region":"Atlantic","stage":"Development","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Meta","University of Maryland"],"cohort":"DMV Environmental Justice","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":24,"y":2022,"amt":4000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","PNC","Surdna Foundation"],"cohort":"Louisville Renaissance","linked":true,"race":["black","latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":36,"y":2022,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Wellness Revolution","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":91,"y":2022,"amt":5000,"captype":"Grant","state":"Texas","city":"Austin","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Wellness Revolution","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":7,"y":2022,"amt":4000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["FISLL","PNC","Surdna Foundation"],"cohort":"Louisville Renaissance","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":59,"y":2022,"amt":5000,"captype":"Grant","state":"Maryland","city":"University Park","region":"Atlantic","stage":"Early Ideation","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Meta","University of Maryland"],"cohort":"DMV Environmental Justice","linked":true,"race":["black","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":49,"y":2022,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Other","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Amplify Louisville","FISLL","PwC","Render Capital"],"cohort":"Louisville Triumphant 3","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":42,"y":2022,"amt":5000,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Wellness Revolution","linked":true,"race":["black","latinx","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":22,"y":2022,"amt":5000,"captype":"Grant","state":"Indiana","city":"New Albany","region":"South Central","stage":"Growth","solution":"Service","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Wellness Revolution","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":63,"y":2022,"amt":10000,"captype":"Grant","state":"Kansas","city":"Hoyt","region":"South Central","stage":"Expansion","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["PwC","Surdna Foundation"],"cohort":"Rooted in Food","linked":true,"race":["indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":37,"y":2022,"amt":4548,"captype":"Grant","state":"Minnesota","city":"Saint Paul","region":"Midwest","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Twin Cities Rising","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":61,"y":2022,"amt":10000,"captype":"Grant","state":"California","city":"Calabasas","region":"West","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["PwC","Surdna Foundation"],"cohort":"Rooted in Food","linked":true,"race":["latinx","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":64,"y":2022,"amt":4548,"captype":"Grant","state":"Minnesota","city":"Saint Paul","region":"Midwest","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Twin Cities Rising","linked":true,"race":["black","multiracial"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":68,"y":2022,"amt":4548,"captype":"Grant","state":"Minnesota","city":"Saint Paul","region":"Midwest","stage":"Expansion","solution":"Creative / Cultural","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Twin Cities Rising","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":4,"y":2022,"amt":4500,"captype":"Grant","state":"New Jersey","city":"Newark","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Glorious Juneteenth","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":12,"y":2022,"amt":4500,"captype":"Grant","state":"Illinois","city":"Chicago","region":"Midwest","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Prudential Cares"],"cohort":"Glorious Juneteenth","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":92,"y":2022,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Amplify Louisville","FISLL","PwC","Render Capital"],"cohort":"Louisville Triumphant 3","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":81,"y":2022,"amt":10000,"captype":"Grant","state":"California","city":"Los Angeles","region":"West","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Reunion Grant","era":"Envolve Entrepreneurship","partner":["PwC","Surdna Foundation"],"cohort":"Rooted in Food","linked":true,"race":["black","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":46,"y":2022,"amt":5000,"captype":"Grant","state":"Maryland","city":"Baltimore","region":"Atlantic","stage":"Start-Up","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Meta","University of Maryland"],"cohort":"DMV Environmental Justice","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":9,"y":2022,"amt":5000,"captype":"Grant","state":"New Jersey","city":"Newark","region":"Atlantic","stage":"Development","solution":"Other","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Envolve Entrepreneurship","partner":["Meta","University of Maryland"],"cohort":"DMV Environmental Justice","linked":true,"race":["black","latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":69,"y":2023,"amt":4500,"captype":"Grant","state":"Georgia","city":"Norcross","region":"Southeast","stage":"Development","solution":"Service","alive":"No","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Wealth Futures","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":15,"y":2023,"amt":4500,"captype":"Grant","state":"New York","city":"Queensbury","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Veterans","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":88,"y":2023,"amt":5000,"captype":"Grant","state":"New Mexico","city":"Albuquerque","region":"Tribal Nations & Southwest","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["PwC"],"cohort":"Indigenous Creative","linked":true,"race":["indigenous"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"LGBTQI+"},{"f":50,"y":2023,"amt":5000,"captype":"Grant","state":"Texas","city":"Glenn Heights","region":"South Central","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["PwC"],"cohort":"Indigenous Creative","linked":true,"race":["latinx","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":23,"y":2023,"amt":5000,"captype":"Grant","state":"Louisiana","city":"New Orleans","region":"South Central","stage":"Start-Up","solution":"Infrastructural","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Meta","University of Maryland"],"cohort":"Southeast Environmental Justice","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":73,"y":2023,"amt":5000,"captype":"Grant","state":"Washington, DC","city":"Seattle","region":"West","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["PwC"],"cohort":"Indigenous Creative","linked":true,"race":["latinx","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":25,"y":2023,"amt":4500,"captype":"Grant","state":"Minnesota","city":"Saint Paul","region":"Midwest","stage":"Development","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Wealth Futures","linked":true,"race":["black","indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":96,"y":2023,"amt":4500,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Veterans","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":17,"y":2023,"amt":4500,"captype":"Grant","state":"California","city":"Long Beach","region":"West","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Veterans","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":75,"y":2023,"amt":5000,"captype":"Grant","state":"Georgia","city":"Fairburn","region":"Southeast","stage":"Development","solution":"Infrastructural","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Meta","University of Maryland"],"cohort":"Southeast Environmental Justice","linked":true,"race":["black","latinx"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":82,"y":2023,"amt":4500,"captype":"Grant","state":"Pennsylvania","city":"Philadelphia","region":"Atlantic","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Wealth Futures","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":48,"y":2023,"amt":5000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Creative / Cultural","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Meta","University of Maryland"],"cohort":"Southeast Environmental Justice","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":6,"y":2023,"amt":4500,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Growth","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Veterans","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Veteran","lgbtq":"Not LGBTQI+"},{"f":28,"y":2023,"amt":5000,"captype":"Grant","state":"Virginia","city":"Portsmouth","region":"Atlantic","stage":"Growth","solution":"Service","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Meta","University of Maryland"],"cohort":"Southeast Environmental Justice","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":60,"y":2023,"amt":4500,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Black Wealth Futures","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":65,"y":2023,"amt":5000,"captype":"Grant","state":"North Carolina","city":"Carrboro","region":"Southeast","stage":"Growth","solution":"Creative / Cultural","alive":"Yes","purpose":"Founder Forward powered by Envolve","era":"Founder Forward","partner":["PwC"],"cohort":"Indigenous Creative","linked":true,"race":["indigenous"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":39,"y":2024,"amt":5000,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC"],"cohort":"Sustainability","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":44,"y":2024,"amt":4500,"captype":"Grant","state":"New York","city":"New York","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"New Longevity","linked":true,"race":["aapi"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":103,"y":2024,"amt":5000,"captype":"Grant","state":"New York","city":"New York","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC"],"cohort":"Sustainability","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""},{"f":87,"y":2024,"amt":5000,"captype":"Grant","state":"New York","city":"Nyack","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC"],"cohort":"Sustainability","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":16,"y":2024,"amt":10000,"captype":"Grant","state":"Kentucky","city":"Matthews","region":"Southeast","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC","Render Capital"],"cohort":"Procurement Pathways","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":9,"y":2024,"amt":5000,"captype":"Grant","state":"New Jersey","city":"Newark","region":"Atlantic","stage":"Development","solution":"Other","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC"],"cohort":"Sustainability","linked":true,"race":["black","latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":86,"y":2024,"amt":10000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Development","solution":"Technology","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC","Render Capital"],"cohort":"Procurement Pathways","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":18,"y":2024,"amt":4500,"captype":"Grant","state":"California","city":"Los Angeles","region":"West","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"New Longevity","linked":true,"race":["aapi"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":29,"y":2024,"amt":10000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Growth","solution":"Service","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC","Render Capital"],"cohort":"Procurement Pathways","linked":true,"race":["latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":80,"y":2024,"amt":4500,"captype":"Grant","state":"California","city":"Los Angeles","region":"West","stage":"Start-Up","solution":"Service","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"New Longevity","linked":true,"race":["aapi"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":62,"y":2024,"amt":10000,"captype":"Grant","state":"Kentucky","city":"Louisville","region":"South Central","stage":"Growth","solution":"Technology","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["PwC","Render Capital"],"cohort":"Procurement Pathways","linked":true,"race":["black","multiracial"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":76,"y":2024,"amt":4500,"captype":"Grant","state":"New York","city":"New York","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"New Longevity","linked":true,"race":["latinx","aapi"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":9,"y":2025,"amt":1250,"captype":"Grant","state":"New Jersey","city":"Newark","region":"Atlantic","stage":"Development","solution":"Other","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Sustainability","linked":true,"race":["black","latinx"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":39,"y":2025,"amt":1250,"captype":"Grant","state":"New York","city":"Bronx","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Sustainability","linked":true,"race":["black"],"gender":"Not female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":87,"y":2025,"amt":1250,"captype":"Grant","state":"New York","city":"Nyack","region":"Atlantic","stage":"Start-Up","solution":"Product","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Sustainability","linked":true,"race":["black"],"gender":"Female-identified","veteran":"Non-veteran","lgbtq":"Not LGBTQI+"},{"f":103,"y":2025,"amt":2250,"captype":"Grant","state":"New York","city":"New York","region":"Atlantic","stage":"","solution":"","alive":"Yes","purpose":"Founder Forward","era":"Founder Forward","partner":["Prudential Cares"],"cohort":"Sustainability","linked":false,"race":[],"gender":"","veteran":"","lgbtq":""}];
