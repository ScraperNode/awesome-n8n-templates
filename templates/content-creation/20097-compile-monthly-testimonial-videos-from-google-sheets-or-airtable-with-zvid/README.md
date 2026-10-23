# 🎬 Compile monthly testimonial videos from Google Sheets or Airtable with Zvid

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
For marketing and customer-success teams: compile featured testimonials from Google Sheets or Airtable into a branded square video with quote cards, optional ratings and a call to action.

## How it works
1. Run monthly or manually and choose Google Sheets or Airtable as the testimonial source.
2. Select featured entries with an empty Status, up to maxQuotes, and stop if fewer than minQuotes qualify.
3. Prepare the quote cards, author details and month label while respecting configured text limits.
4. Check the optional music file and continue without it when unavailable or oversized.
5. Build the compilation and validate the design and credit quote with the native Zvid node.
6. With dryRun=true, save an editor draft; the default false branch renders and waits for completion.
7. After success, mark the included Google Sheets rows compiled and save VideoUrl. Airtable mode returns results without updating records.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials. A workspace owner/admin may need to install it. Get a key at https://app.zvid.io/api-keys; use Base URL https://api.zvid.io on every Zvid node.
2. Connect Google Sheets and select the same spreadsheet/tab in both sheet nodes. Add Quote, Author, Role, Company, Rating, Featured, Status and VideoUrl headers.
3. Fill Quote and Author, set Featured=true and leave Status empty. Set brandName, CTA, colors and quote limits in Config. dryRun=false spends Zvid credits; true previews without marking rows.
4. For Airtable, set source=airtable, configure airtableBaseId, airtableTable and optional airtableView, then attach a read-enabled Bearer Auth credential to Fetch Airtable records.
5. Test manually, inspect the finished video, and check the workflow timezone before activating monthly runs.

## Requirements
- An n8n workspace supporting community nodes, Zvid credits and access to your chosen Google Sheets or Airtable source. At least minQuotes approved, featured testimonials must be pending.

## Customization
- Adjust branding, music, quote length, scene timing and the call to action in Config.

## Additional info
Open Watch video → Binary → data → View. To repeat a test, clear Status only on the intended test rows; keep their quotes and previous video links. Social publishing is not included. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/testimonial-compilation.md

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
