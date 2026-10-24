# 🎣 Score inbound leads with Claude and route HubSpot lifecycle stages

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives inbound leads via webhook, uses Anthropic Claude (with website scraping and web search) to score and classify them, then updates HubSpot lifecycle stage, creates deals for hot leads, alerts Slack, and sends tier-specific replies through Gmail.

## How it works
1. Receives a POST webhook request containing lead details (name, email, company, job title, and message).
2. Ensures three HubSpot contact properties exist for AI scoring (ai_lead_score, ai_lead_tier, ai_score_reason).
3. Extracts the company domain from the lead’s email and fetches the company website homepage content.
4. Uses Anthropic Claude web search to gather third-party company intelligence while excluding the company’s own domain.
5. Builds a lead profile and sends the form data, website text, and external research to Anthropic Claude to return a 1–10 score, a reason, and a drafted reply email.
6. Upserts the contact in HubSpot, sets the lifecycle stage based on score thresholds, and writes the AI score fields to the contact record.
7. Routes by tier: for hot leads it creates a HubSpot deal, posts a Slack alert, and sends the generated email via Gmail, while warm and cold leads receive their respective generated emails via Gmail.

## Setup
1. Add credentials for HubSpot (App Token), Anthropic (API key), Slack (OAuth2), and Gmail (OAuth2).
2. Set your ICP description, hot/warm score thresholds, and the target Slack channel ID in the Lead Scoring Config step.
3. Activate the workflow, copy the webhook URL, and configure your lead capture form to POST the expected fields to the webhook path (lead-intake).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
