# 🎣 Qualify and route inbound leads with OpenAI, Slack, HubSpot, and Google Sheets

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives inbound lead submissions via a webhook, validates business emails, enriches leads by scraping their website, and uses OpenAI to score ICP fit. It then routes hot leads to Slack, Gmail, and HubSpot, logs all leads to Google Sheets, and responds to the form with the score.

## How it works
1. Receives an inbound lead as a POST request via a webhook.
2. Applies your ICP details and thresholds, normalizes incoming fields, and validates the email while detecting free/role inboxes and deriving the company domain.
3. If the email is a valid business address, fetches the lead’s website and extracts a short text sample plus keyword buying signals from the page content.
4. Sends the lead details and website signals to OpenAI (gpt-4o-mini) to produce a structured ICP fit score, segment, reasoning, recommended next step, and a personalized opening line.
5. Combines the AI fit score with a deterministic data-quality score, assigns the lead to hot/warm/cold tiers, and routes the record accordingly.
6. Alerts hot leads in Slack, sends the lead an instant personalized Gmail reply, creates/updates the contact in HubSpot with the appropriate lifecycle stage, appends every lead to Google Sheets, and returns a JSON webhook response with the lead’s score and tier.

## Setup
1. Create credentials for OpenAI, Slack, Gmail, HubSpot (app token), and Google Sheets in n8n.
2. Update the ICP settings, thresholds, and target Slack channel in the “Set ICP and Scoring Rules” step.
3. Set your Google Sheets document ID and ensure a sheet named “Leads” exists with columns matching the workflow’s logged fields.
4. Copy the production webhook URL and configure your form/chat tool to send a POST JSON body with fields like name, email, company, website, job_title, phone, message, and source.

## Requirements
- n8n 1.60 or newer, cloud or self-hosted
- OpenAI API key (gpt-4o-mini or better) for the scoring chain
- Optional: Slack, Gmail, HubSpot app token and Google Sheets credentials

## Customization
- Swap the OpenAI model for Anthropic, Gemini, Groq or a local Ollama model - the structured output parser stays the same
- Replace the HubSpot nodes with Pipedrive, Attio, Airtable or Salesforce; they receive the same flat JSON
- Tune hot and warm thresholds, the ICP fields and the 80/20 blend between AI fit and data quality in one Set node
- Add a second LLM chain on the hot branch to draft a full first-touch email from the buying signals

## Additional info
Paid template. Buyers receive the workflow JSON plus a step-by-step README (credential setup, Google Sheet header row, curl test command, scoring breakdown and troubleshooting) instantly after purchase on Gumroad, and keep permanent access to the download. Support is handled by replying to the Gumroad receipt. No hardcoded credentials anywhere; all API access goes through n8n credentials. Enrichment uses the lead's own public website, so no paid enrichment API is required.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
