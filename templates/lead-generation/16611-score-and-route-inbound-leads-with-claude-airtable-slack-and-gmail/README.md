# 🎣 Score and route inbound leads with Claude, Airtable, Slack, and Gmail

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound form leads via a webhook, normalizes the submission, optionally scrapes the lead’s website with Jina AI Reader, and uses Anthropic Claude to score and summarize the lead. It logs results to Airtable, posts a Slack alert, and creates a Gmail draft for hot leads.

## How it works
1. Receives a POST webhook when a new lead submission comes in and immediately returns a JSON receipt response.
2. Normalizes the incoming payload (Typeform, Tally, JotForm, or custom JSON) into consistent lead fields like name, email, company, website, and message.
3. If a website is provided, fetches up to 2,000 characters of page content using Jina AI Reader and attaches it to the lead.
4. Sends the lead details and scraped content to Anthropic Claude to produce structured JSON including a score, tier (hot/warm/cold), red flags, an enriched summary, and a first-reply draft.
5. Builds a formatted Slack message and prepares a complete lead record (including routing flags) from the AI output.
6. Creates a new record in Airtable and posts the lead alert to a Slack channel.
7. If the lead is classified as hot, creates a Gmail draft using the generated first-reply text.

## Setup
1. Copy the webhook URL from the Webhook trigger and configure your form tool (or any sender) to POST submissions to it.
2. Connect an Anthropic credential and select the Claude model used by the Anthropic Chat Model step.
3. Create or update an Airtable base/table with fields that match the mapped columns (for example Name, Email, Score, Tier, Summary, Message, Website, Red Flags), then set the Base ID and Table ID in the Airtable node.
4. Connect your Slack OAuth2 credentials and set the target channel (for example #new-leads) in the Slack message step.
5. Connect your Gmail OAuth2 credentials for draft creation and adjust the hot-lead threshold logic by editing the Claude prompt or tier rules if needed.

## 🔗 Nodes Used

Airtable, Slack, Webhook, Gmail, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
