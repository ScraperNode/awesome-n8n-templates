# 🎣 Score and log scraped B2B leads with Apify, OpenAI, and Google Sheets

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning, pulls new leads from an Apify actor, uses the OpenAI Chat Completions API to score each lead against your ideal customer profile, and appends the scored results (including low scores) to a Google Sheets spreadsheet.

## How it works
1. Runs every day at 8:00 and loads your ideal customer profile, offer description, score threshold, and per-run lead limit.
2. Calls the Apify run-sync-get-dataset-items API to fetch a fresh batch of leads from the configured actor.
3. Normalizes the incoming lead fields into a consistent structure, deduplicates leads, and caps the batch size to your max leads per run.
4. Stops processing if no leads are returned, otherwise sends each lead to the OpenAI Chat Completions API to get a JSON score (1–10) and one-sentence reason.
5. Parses the AI response, attaches the verdict to each lead, and formats a final row including timestamp, lead details, score, reason, and threshold.
6. Appends every processed lead as a new row in Google Sheets.

## Setup
1. Create a Header Auth credential for Apify (Authorization: Bearer <your Apify token>) and select it in the Apify HTTP request.
2. Create a Header Auth credential for OpenAI (Authorization: Bearer <your OpenAI API key>) and select it in the OpenAI HTTP request.
3. Connect a Google Sheets OAuth2 account and replace the Google Sheet URL and sheet name used for the append operation.
4. Edit the Apify actor URL (YOUR-USERNAME~YOUR-ACTOR) and JSON body to match your chosen actor input.
5. Update the settings values (ICP description, offer description, score threshold, and max leads per run) to fit your qualification criteria and cost limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
