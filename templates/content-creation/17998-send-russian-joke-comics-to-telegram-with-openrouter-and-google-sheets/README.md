# 🎬 Send Russian joke comics to Telegram with OpenRouter and Google Sheets

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow scrapes a Russian joke from anekdot.ru, uses OpenRouter (chat + image) to turn it into a single-panel comic image, posts the image with a caption to Telegram, and tracks state and deduplication in Google Sheets while storing generated images in Google Drive.

## How it works
1. Starts manually (or on a schedule if you replace the trigger) and searches Google Drive for the history Google Sheets spreadsheet, creating it (plus an images folder) on first run.
2. Loads the last processed page from the spreadsheet’s State tab, builds the anekdot.ru tag URL, downloads the page HTML, and extracts jokes that match the target length.
3. Reads previously used joke hashes from the Used Jokes tab and selects the first unused joke, paging through anekdot.ru (up to 15 pages) until it finds a valid unused candidate.
4. Sends the chosen joke text to an OpenRouter chat model to extract a strict JSON description (scene, characters, and short dialogue), then assembles a safe image prompt with optional speech bubbles.
5. Generates a square comic image via the OpenRouter Images API, and if moderation blocks the request it logs the joke as blocked in Google Sheets and retries with the next unused joke.
6. Converts the returned base64 image to a PNG, uploads it to Google Drive, shares it publicly, and posts it to Telegram with an HTML caption containing the joke text.
7. Appends the sent joke hash, excerpt, timestamp, and Drive image URL to the Used Jokes tab and updates the current page in State if it changed.

## Setup
1. Add credentials for OpenRouter API, Telegram, Google Sheets OAuth2, and Google Drive OAuth2 (with the Google Sheets API and Drive API enabled).
2. Set the Telegram chat ID in the Telegram “send photo” step to your target channel/chat numeric ID.
3. Ensure the Google Drive search name and the Google Sheets spreadsheet title match exactly (default is “Anekdot Bot — History”), or change both to your preferred name.
4. Optionally change the anekdot.ru tag in the URL-building code (default is “вовочка”) and the Google Drive folder name where images are stored.
5. Select an OpenRouter chat model in the OpenRouter Chat Model node (the workflow ships without a preset model).
6. If you want automatic posting, replace the Manual Trigger with a Schedule Trigger and activate the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, AI Agent, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
