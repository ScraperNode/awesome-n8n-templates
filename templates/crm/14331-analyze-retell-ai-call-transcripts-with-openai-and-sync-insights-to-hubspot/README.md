# 🤝 Analyze Retell AI call transcripts with OpenAI and sync insights to HubSpot

> ⚡ **69 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who is this for

Sales teams and agencies using Retell AI for voice outreach who want to automatically analyze every call and push insights into their CRM. Ideal for businesses running AI voice agents that need structured post-call intelligence without manual review.

## How it works

When a Retell AI voice call ends, the platform sends a `call_analyzed` webhook to this workflow. It parses the transcript, call duration, and metadata, then sends everything to OpenAI for analysis. The AI returns structured data: sentiment, lead score (1-10), key topics, buying signals, objections, action items, and a recommended next step.

The enriched data is synced to HubSpot, updating the contact record. If the lead score meets your threshold, the workflow alerts your sales team on Slack and creates a priority follow-up task in HubSpot. Every call is logged to Google Sheets for tracking.

## How to set up

1. Open the **Set user config variables** node and enter your Slack channel, lead score threshold (default: 7), Google Sheet ID, and sheet name.
2. Connect your OpenAI, HubSpot, Slack, and Google Sheets credentials in each respective node.
3. Copy the production webhook URL from the trigger node and add it to your Retell AI dashboard under Webhook Settings for the `call_analyzed` event.
4. Create a Google Sheet with columns: Date, Call ID, From Number, Duration, Sentiment, Lead Score, Summary, Action Items, Qualified.
5. Activate the workflow and make a test call to verify the full pipeline.

## Requirements

- Retell AI account with an active voice agent
- OpenAI API key (GPT-4o-mini or GPT-4o)
- HubSpot CRM account
- Slack workspace with a bot token
- Google Sheets

## How to customize

- Adjust the lead score threshold in the config node to control when hot lead alerts fire.
- Modify the AI analysis prompt to extract industry-specific fields (e.g., appointment booked, insurance type, budget range).
- Add a Twilio SMS branch for instant text follow-ups to hot leads.
- Connect additional CRM nodes if you use Pipedrive, Salesforce, or another platform instead of HubSpot.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, HubSpot, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
