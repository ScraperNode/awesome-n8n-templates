# 🎣 Generate and score Google Maps leads with Gemini, Apify, and Google Sheets

> ⚡ **377 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video:https://youtu.be/NGruDecKxAg?si=ot9pj6IN4IoLstow

This workflow takes a chat-based search request, scrapes matching businesses from Google Maps using Apify, scores and ranks them with Google Gemini, deduplicates against an existing Google Sheet by placeId, saves new leads to the sheet, and returns a formatted results message to the chat.

## How it works
1. Receives a message from an n8n chat trigger containing the user’s Google Maps lead search request.
2. Sends the request to Google Gemini to extract structured search parameters (business type, location, max results, and output mode).
3. Calls an Apify Google Maps scraping actor with the extracted parameters and selects a clean set of lead fields from the results.
4. Removes duplicate businesses based on Google Maps placeId and batches the remaining leads into a single list.
5. Sends the lead list to Google Gemini to add a 0–100 score and short reason to each lead and returns them sorted by score.
6. Checks the scored leads against existing rows in Google Sheets and filters out any placeId values that are already saved.
7. Appends or updates the new leads in Google Sheets and returns a formatted ranked lead list back to the chat.

## Setup
1. Set up Google Gemini (Google PaLM) credentials for the two HTTP requests that parse intent and score/rank leads.
2. Add an Apify API token as an HTTP Header Auth credential and confirm the Apify actor endpoint used to scrape Google Maps.
3. Connect a Google Sheets service account, and update the spreadsheet ID, sheet/tab, and column headers (including placeId) used to read and upsert leads.
4. Enable the chat trigger and copy/configure the chat webhook/channel details for wherever you send user messages from.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
