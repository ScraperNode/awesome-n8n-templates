# 📊 Audit connected integrations and email pricing & limits report with n8n API, Claude and Gmail

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

- Connects to your n8n instance via API and fetches all credentials you have set up
- Maps each credential type to its real service name (supports 40+ services: OpenAI, Slack, Notion, Airtable, Google, Stripe, and more)
- Sends the full list to Claude AI, which researches current pricing tiers, free limits, and API rate limits for every service
- Builds a colour-coded HTML email report sorted by tier: 🟢 Free · 🟡 Freemium · 🔴 Paid only
- Includes: free quota, paid plan starting price, API rate limit, and key notes for each service

## Set up steps

- Create an **HTTP Header Auth** credential named `n8n API Key` — Header Name: `X-N8N-API-KEY`, Header Value: your n8n API key (Settings → API → Create API Key)
- Connect your **Anthropic** account credential for Claude AI pricing research
- Connect your **Gmail** OAuth2 credential for the report email
- Open the **Configuration** node and set your n8n instance URL and notification email address
- Run manually or add a Schedule trigger for automated weekly reports

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
