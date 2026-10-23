# 🔬 Track web page table changes with Google Sheets and Gaffa

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to scrape a table from a web page using Gaffa, sync it to a Google Sheets “Table” tab, and append a per-row audit trail of additions, changes, and removals to a “Changes” tab.

## How it works
1. Runs every morning on a schedule.
2. Uses Gaffa to load the configured web page in a browser and extract the target HTML table into structured rows.
3. Stops with an error if the table cannot be read or if no rows contain the configured key column.
4. Fetches the extracted rows, keeps only rows that have a value in the key column, and reads the existing rows from the Google Sheets “Table” tab (excluding rows already marked as removed).
5. Compares the current web table rows to the Google Sheets rows using the key column to detect new, changed, and removed entries.
6. Appends new rows to Google Sheets with first_seen/last_changed dates, updates changed rows in place with a refreshed last_changed date, and marks missing rows as removed by setting removed_on.
7. Appends a change-log entry to the Google Sheets “Changes” tab for each addition, change (including field-level before/after details), and removal.

## Setup
1. Install the @gaffa-dev/n8n-nodes-gaffa community node and add a Gaffa API credential.
2. Add a Google Sheets credential and create (or select) a spreadsheet with two tabs named to match your settings (default: “Table” and “Changes”).
3. In the Settings step, set the Google Sheets document URL, the page URL, the CSS selector for the table, and a key column name that uniquely identifies each row.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
