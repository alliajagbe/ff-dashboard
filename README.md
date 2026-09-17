# Founder Forward Journey Analytics

A tabbed analytics product. Six pages following the founder journey: Overview, then Discover,
Apply, Program, Community, Alumni. Built from every source registered in `sources.py`.

Live: https://claude.ai/artifact/6Kcqdk69xPqt3KErH9FgFP (private until you share it)

## Refreshing

    python3 build_from_csv.py     # from the CSV exports on disk
    python3 refresh.py            # live from the Airtable API (needs .env)

Both write `data.js`, the only file the page reads. Republish the artifact afterwards.

## Adding a source

One dict in `sources.py`. Nothing else knows where data lives.

    dict(id='my_source', stage='program', population='funded', sensitivity='open',
         path='/path/to/file.csv', label='Human readable name', join='Email',
         note='Anything the team should know when reading these numbers.')

`sensitivity` values:

  open      aggregates may be published
  pii       carries direct identifiers; aggregate only, never row level
  excluded  never loaded at all, for any reason

## Excluded by policy

`Payment Survey-Results.csv` is registered with `sensitivity='excluded'` and is never read.
It holds cleartext financial identifiers. The build refuses to write output if that flag is
ever changed, and `assert_clean()` additionally fails on any email address or financial token
reaching `data.js`. Escalate where that file lives; do not route it through this product.

## Self-serve features

  Provenance    click any tile for source file, field, denominator and conflicting sources
  Deep links    tab and filters encode into the URL, so a view can be sent rather than described
  CSV export    the CSV buttons use the artifact downloads capability, clipboard as fallback
  Metric search the Find a metric box filters sections and tiles on the current tab

## What the product deliberately refuses to do

  Join sources that do not join. Populations are reported separately, because the census
  shares only 41 email addresses with the grants table.
  Filter demographics. Aggregate only, because cohorts of four make race by city identifying.
  Pool PitchProv scores. Two events served students and two served founders.
  Report percentages below n=10.

## Files

    index.html          the page
    data.js             generated, do not edit by hand
    sources.py          source registry, the only place file paths live
    ff_lib.py           loading, entity resolution, aggregation, safety assertions
    build_from_csv.py   CSV to data.js
    refresh.py          Airtable API to data.js
