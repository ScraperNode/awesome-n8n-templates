# 🎣 Find and verify business emails with ScraperCity, OpenAI, Google Sheets, and Gmail

> ⚡ **45 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads contacts from Google Sheets, finds and verifies their business emails via the ScraperCity Email Finder API, generates a short personalized icebreaker with OpenAI, appends the enriched leads to another Google Sheet, and emails a run summary via Gmail.

## How it works
1. Starts manually to run an email enrichment job.
2. Reads contacts (first name, last name, domain) from an input Google Sheets worksheet and aggregates them into a single payload.
3. Submits the contacts to the ScraperCity Email Finder API, then waits and repeatedly checks the job status until it succeeds or fails/times out.
4. When the job succeeds, downloads the result CSV from ScraperCity, parses it, normalizes key fields (name, domain, email, verification status, provider), and keeps only rows with an email.
5. For each verified contact, prompts OpenAI to generate one short, company-referencing cold-email opening line in the configured language.
6. Appends the enriched lead (including email, status, and icebreaker) to an output Google Sheets worksheet and sends a summary email via Gmail.

## Setup
1. Create a ScraperCity account with Email Finder credits and add an HTTP Header Auth credential that sends your API key (for example, an Authorization: Bearer <key> header) for the ScraperCity HTTP requests.
2. Connect your Google Sheets OAuth2 credential and select the input spreadsheet/worksheet (contacts) and output spreadsheet/worksheet (leads).
3. Add an OpenAI API credential and confirm the model name in the Configuration values.
4. Add a Gmail OAuth2 credential and set the notification email address, offer text, and any polling limits (wait time and max checks) in Configuration.
5. Ensure your input sheet contains columns named firstName, lastName, and domain.

## Additional info
# Find and verify business emails then draft AI icebreakers in Google Sheets

# [Open full documentation on Notion](https://automatisation.notion.site/Course-Find-and-verify-business-emails-then-draft-AI-icebreakers-in-Google-Sheets-39d3d6550fd9810b8200d55f10e2a1c5)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
