# 🎣 Score and route inbound leads with Gemini, website enrichment, Slack and Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives inbound lead submissions via webhook, validates and enriches them with basic website scraping, scores fit and intent using Google Gemini, logs every lead to Google Sheets, and alerts a Slack channel when a lead scores as hot.

## How it works
1. Receives a POST request on a webhook endpoint for inbound lead details and immediately returns a 200 response with a generated lead ID.
2. Normalizes the payload into consistent fields (name, email, company, website, job title, message), flags free or disposable emails, and marks obvious spam/test submissions as junk.
3. If the lead looks valid, calls a public email scoring API to get an email verdict/score and marks the lead as junk if the verdict is invalid or disposable.
4. For non-junk leads, fetches the company homepage and extracts a short plain-text summary from the HTML for enrichment.
5. Sends the lead details and extracted website text to Google Gemini and parses structured JSON containing an ICP score, tier (hot/warm/cold), key reasons, next action, and confidence.
6. Combines the Gemini output with the lead record, appends the result to a Google Sheets tab named "Leads", and posts a formatted Slack alert when the tier is hot.

## Setup
1. Add Google Gemini API credentials (Google AI Studio/Vertex Gemini connection) for the Gemini chat model used to score leads.
2. Add Google Sheets OAuth2 credentials and replace the placeholder spreadsheet ID in the Config step, ensuring the spreadsheet has a sheet/tab named "Leads".
3. Add Slack OAuth2 credentials with permission to post messages, and replace the placeholder Slack channel ID in the Config step.
4. Update the ICP description and the hot/warm threshold values in the Config step to match your qualification criteria.
5. Copy the webhook URL from the webhook trigger and configure it in your form or lead source to send JSON via HTTP POST.

## Additional info
Need it installed? I set this up in your n8n on Fiverr, starting around $20: https://www.fiverr.com/mouwah/set-up-a-tested-n8n-invoice-approval-or-lead-routing-workflow-in-your-n8n
Pro version (email typo rescue, speed-to-lead tracking, more routing tiers): https://mohabaha0.gumroad.com/l/lead-routing-pro

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
