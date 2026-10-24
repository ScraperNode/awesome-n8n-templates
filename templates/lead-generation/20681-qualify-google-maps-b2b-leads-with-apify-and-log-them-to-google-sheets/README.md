# 🎣 Qualify Google Maps B2B leads with Apify and log them to Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
For agencies and B2B sales teams who prospect local businesses: reads searches from a Google Sheet, runs the Google Maps Scraper API actor on Apify, and appends the places that best match your ideal customer to a Leads tab, with AI verdicts and no LLM key needed.

## How it works
1. Reads your searches from a Google Sheet: a search term, a city and your ideal customer in one sentence. Searches marked done are skipped.
2. Runs the Google Maps Scraper API actor on Apify once per search. Every place comes back with phone, website, address, rating and reviews count.
3. Each place also gets AI verdicts from the actor: fit with your ideal customer (0 to 1), digital maturity, online booking expected but missing, independent or chain, size and price tier. No LLM key to wire.
4. Attaches each place to its search and keeps the places above your minimum fit (all of them when a search has no ideal customer).
5. Appends the kept places to a Leads tab, best fit first.
6. Marks each search as done with the number of places scanned and leads found, so you can add searches over time and run it again.

## Setup
1. Create a Google Sheet with two tabs. Searches: search, location, ideal_customer, status, leads_found, places_scanned (you fill the first three). Leads: the columns listed in the Sheet columns note of the workflow.
2. Connect your Google Sheets credential in the three Sheets nodes (Read searches, Append leads, Mark searches done) and pick the right tab in each.
3. Add your Apify API token as an Apify credential (install the verified Apify node if your instance asks for it).
4. Adjust the Settings node: minimum fit (0 to 1), places per search and language. Run the workflow manually, and run it again whenever you add searches.

## Requirements
- An Apify account: the actor is pay per use, $0.50 per 1,000 places plus $1 per 1,000 places qualified, no subscription (50 places with verdicts cost about $0.08).
- A Google account for Google Sheets.
- No OpenAI or other AI key: the verdicts are part of the actor.

## Customization
- Reword the ideal customer for each search, for example: independent restaurant without online booking.
- Raise the minimum fit in Settings to keep only the best matches.
- Add your own yes/no questions with customQuestions in the Find and qualify places node.

## Additional info
Field names follow the most used Google Maps scraper on Apify, so sheets and workflows built for it keep working.

## 🔗 Nodes Used

Google Sheets, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
