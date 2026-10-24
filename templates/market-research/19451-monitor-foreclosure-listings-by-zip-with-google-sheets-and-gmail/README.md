# 📊 Monitor foreclosure listings by ZIP with Google Sheets and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Build a daily ZIP-code property watchlist with Foreclosure Finder on RapidAPI, Google Sheets and Gmail. Save source-deduplicated matches and optionally email records not yet marked notified. This preview starts inactive with email disabled.

## How it works
1. Runs on a daily schedule at 8:00 AM (America/New_York) or on manual trigger.
2. Validates your watchlist settings (ZIP, radius, price/bed filters, Google Sheet details, and optional email recipient).
3. Queries the Foreclosure Finder API on RapidAPI to fetch up to 500 listings from Auction, HUD, Fannie Mae, Freddie Mac, and Redfin for the configured area and filters.
4. Validates the API response to ensure all five sources are included and the result set is complete before proceeding.
5. Reads your Google Sheets watchlist history and identifies listings that have not been previously notified, using a source + listing ID key for deduplication.
6. Upserts current unnotified matches as pending Google Sheets rows, then builds a digest preview. The first digest includes existing matches. Records from different sources can describe the same property; this is source-record deduplication.
7. When email is enabled, sends the digest through Gmail. Only a returned Gmail message ID permits marking the corresponding rows notified. This confirms send acceptance, not inbox delivery. Empty results send no email.

## Setup
1. Create a RapidAPI subscription for Foreclosure Finder and add a Header Auth credential with header name `X-RapidAPI-Key` set to your RapidAPI key.
2. Create a dedicated Google Sheet tab, such as Watchlist. Put these exact columns in row 1, one per cell: listing_key, source, listing_id, address, price, bedrooms, bathrooms, property_type, asset_type, status, property_link, first_seen, last_seen, notified_at, gmail_message_id. Set spreadsheetId and sheetName in Watchlist settings.
3. Connect the same Google Sheets credential to Read watchlist history, Save pending matches and Mark matches notified. Keep listing_key as the match column and RAW / Let n8n format for writes. Use a separate sheet for each watchlist and run only one execution per sheet at a time.
4. Connect Gmail, choose a recipient inbox you control and keep sendEmail=false. Test manually and inspect saved pending rows plus the Build email preview output. A preview writes sheet rows but sends no email.
5. Set sendEmail=true for one test to your own inbox. Confirm the digest and the rows’ notified_at and gmail_message_id values. Run again with unchanged results and confirm no repeat email. Only then verify the timezone and daily 8 AM America/New_York schedule and activate.

## Requirements
- An n8n instance with built-in HTTP Request, Google Sheets and Gmail nodes; your own Foreclosure Finder RapidAPI subscription and key; a dedicated Google Sheet; and Google Sheets/Gmail credentials. The basic fields used here do not require paid-only data. Check current API quotas and hosting costs.

## Customization
- Change ZIP, radius, price range, minimum bedrooms, property type, recipient and schedule in the settings and trigger nodes. Keep each complete scan within 500 matches. This version handles one ZIP per run and does not paginate.

## Additional info
Preview and limitations: fixture checks and a dated live RapidAPI response passed transformation checks; Google Sheets writes and Gmail sends were simulated. A Google-connected end-to-end execution remains outstanding.

Oversized, malformed or reported partial scans stop before writes/email. Coverage varies, and a silent source failure cannot be distinguished from empty inventory. The sheet retains history; it does not continuously track availability or notify on price changes. Opening bids are not purchase prices.

If Gmail accepts a send but the final sheet update fails, inspect Sent and the execution before retrying; duplicate sends are possible in that gap. Do not enable Gmail automatic retries or overlapping executions.

Provided by Foreclosure Finder, the API provider. Built with AI assistance. Use your own credentials. RapidAPI listing: https://rapidapi.com/claytoncloudsolutions-claytoncloudsolutions-default/api/foreclosure-finder1

- ClaytonCloudSolutions

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
