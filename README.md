# Founder Forward Journey Analytics

A tabbed analytics product. Six pages following the founder journey: Overview, then Discover,
Apply, Program, Community, Alumni. Built from every source registered in `sources.py`.

Live: https://alliajagbe.github.io/ff-dashboard/

This is a public URL. Anyone with the link can read it. It carries no personal data,
but it does expose capital amounts, partner names, cohort names and the data quality
findings, so treat the link as shareable-internally rather than secret.

## Refreshing

    python3 build_from_csv.py     # from the CSV exports on disk
    python3 refresh.py            # live from the Airtable API (needs .env)
    git add data.js && git commit -m "refresh data" && git push

Both write `data.js`, the only file the page reads. Pushing to main redeploys the
site in about a minute. Nothing else needs to change.

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

  Crossfilter   click any bar, donut segment, bubble, trend point or matrix cell
                filters award rows, cohorts and events, each against its own dataset
  Cross-tab     Explore page pivots any two of 16 dimensions against each other
  Deep links    page, year range and every filter encode into the URL
  Theme         light by default, dark by toggle, remembered per browser
  Provenance    every KPI and card carries a chip naming the file it reads; clicking
                opens source, file, row count, field, denominator, active filters,
                build date and any conflicting source. Chips turn amber where two
                sources disagree. Overview lists every source, including the three
                named in the Data Audit with no file and the one excluded by policy.

### How crossfilter behaves

Within a dimension values OR together (Louisville plus Newark shows both). Across dimensions
they AND together (Louisville and Black is the intersection). A chart on dimension D ignores
D's own selection, so selecting Louisville does not collapse the city chart to one bar.

Worked example. Click Louisville on the city chart, then Black on the race chart: 19 founders,
95% of Louisville's 20, Technology 7 / Service 6, Start-Up 11 / Development 6 / Growth 2.

## What the product deliberately refuses to do

  Join sources that do not join. Populations are reported separately, because the census
  shares only 41 email addresses with the grants table.
  Filter demographics. Aggregate only, because cohorts of four make race by city identifying.
  Pool PitchProv scores. Two events served students and two served founders.
  Report a percentage below 5 founders. The count still shows; the share reads n<5.

## Files

    index.html          the page
    data.js             generated, do not edit by hand
    sources.py          source registry, the only place file paths live
    ff_lib.py           loading, entity resolution, aggregation, safety assertions
    build_from_csv.py   CSV to data.js
    refresh.py          Airtable API to data.js

## Source files stay local

`.gitignore` excludes every CSV, DOCX and PDF. The exports live on your machine and
never enter the repository. Only the aggregated `data.js` is published.

## Export buttons

On the hosted site the CSV buttons copy to the clipboard, because saving a file
directly needs a runtime the plain web page does not have. Paste into a sheet.

## A note on demographics and the public URL

Race, gender, veteran and LGBTQI+ flags are in the row data so that any filter combination
works. Percentages below 5 founders are suppressed in the interface, but the rows themselves
are readable in data.js, so that suppression is a courtesy rather than a control. If the
demographic detail ever needs to be genuinely restricted, the lever is access-controlled
hosting, not the interface. Cloudflare Pages with Access covers it on the free tier.

## Correction carried in the product

The Phase 1 note records the PitchProv confidence question as unanswered. It is not. All four
rated questions are answered on all four events; the answers are words ("Strongly agree"), not
digits, so a numeric-only read reports them empty. The dashboard shows the full distribution,
mean and n for every question and event, split by audience because two events served students
and two served founders.
