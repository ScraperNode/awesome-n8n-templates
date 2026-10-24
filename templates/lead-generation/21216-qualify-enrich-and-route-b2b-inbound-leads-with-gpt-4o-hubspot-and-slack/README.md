# 🎣 Qualify, enrich, and route B2B inbound leads with GPT-4o, HubSpot, and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives inbound lead submissions via a webhook, fetches the company website for context, uses OpenAI GPT-4o-mini to score and qualify the lead with structured output, upserts the contact into HubSpot, and posts high-priority or nurture notifications to Slack.

## How it works
1. Receives a POST request on an n8n webhook with inbound lead details (name, email, company, and message).
2. Normalizes the incoming fields and derives the company domain from the email address.
3. Fetches the prospect’s company website homepage HTML using an HTTP request.
4. Sends the lead details plus a cleaned website snippet to OpenAI (GPT-4o-mini) and parses a strict JSON result containing lead score, tier, summary, reasoning, and an outreach icebreaker.
5. Creates or updates the matching contact in HubSpot with the qualification details stored in the contact fields.
6. Routes leads with a score of 70 or higher to a Slack sales channel and logs lower-scoring leads to a separate Slack nurture channel.

## Setup
1. Copy the webhook URL from the “Inbound Lead Webhook” trigger and configure your form/tool to send lead submissions to it via POST.
2. Add an OpenAI API credential for the OpenAI Chat Model node.
3. Connect your HubSpot OAuth2 credential and confirm which contact properties you want to populate in the upsert step.
4. Connect your Slack credential and update the target channels (for example, #sales-hot-leads and #marketing-nurture-feed) to match your workspace.
5. Adjust the lead score threshold (currently 70) and the ICP prompt text if you want different routing and qualification criteria.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
