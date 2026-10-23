# 🎬 Create and publish LinkedIn posts from URLs with Telegram, Gemini, and Google Sheets

> ⚡ **72 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow uses Telegram to collect or queue article URLs from Google Sheets, then scrapes the page and uses Google Gemini (with Groq fallback) to generate and quality-check a LinkedIn post draft, requests approval in Telegram, publishes via LinkedIn, and updates publishing status in Google Sheets.

## How it works
1. Receives Telegram messages and button callbacks, then shows a start menu to choose between using an unpublished URL from Google Sheets, providing your own URL, or adding a new URL to the sheet.
2. If you add a new URL, it collects the URL via a Telegram form, validates the URL format, checks Google Sheets for duplicates, and appends the URL with a “Published = No” status.
3. If you pick an unpublished URL from Google Sheets, it fetches the first row where “Published = No” and asks in Telegram whether to proceed or skip.
4. When proceeding with either a queued URL or your own URL, it scrapes the webpage content via HTTP and uses Google Gemini (with a Groq fallback model) to generate a LinkedIn post draft.
5. It runs the draft through a QC audit agent (using Google Gemini with Groq fallback) and stops with an error message in Telegram if the output fails validation.
6. It sends the cleaned draft to Telegram for approval or rejection within a time limit.
7. If approved, it publishes the post to LinkedIn as an organization update, then marks the URL as published in Google Sheets (and logs new URLs to a separate tab) and sends the LinkedIn post link back in Telegram.

## Setup
1. Connect Telegram Bot credentials, publish the Telegram trigger webhook, and start the bot so you can receive messages and inline-button callbacks.
2. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID, sheet/tab names, and columns so they include at least “URLs”, “Published”, and (optionally) “Date Published”.
3. Connect LinkedIn OAuth2 credentials and set the correct organization ID to publish posts as.
4. Add Google Gemini (PaLM) API credentials for the primary writing/QC models and Groq API credentials for the fallback models.
5. Review and adjust the Telegram chat/user access checks and any hard-coded IDs, plus the approval timeouts and timezone used for the “Date Published” timestamp.

## Requirements
- Obtain a Telegram bot account and API token.
- Secure a Google Sheets account with editing permissions.
- Register an AI language model API provider account.

## Customization
- Modify the AI prompt instructions to enforce specific output parameters.
- Add an additional Google Sheets node to log the generated text alongside the source URL.
- Change the Telegram output node to route the draft to a designated group channel.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, LinkedIn, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
