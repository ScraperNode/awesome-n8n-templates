# 💬 Score customer churn risk and send save-play emails with Claude and Gmail

> ⚡ **188 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Catch at-risk paying customers before they cancel. This workflow receives customer health signals through a webhook, scores churn risk from 0–100 with Claude, logs every account to a data table, and automatically sends a personalized save-play email to the customers who are quietly slipping away.

## How it works
1. A Webhook receives customer health signals — last login, usage change, email open rate, support sentiment, days to renewal, open tickets and plan value — as JSON, one customer per call.
2. A Set node normalizes the payload and applies safe defaults, so missing fields never break the run.
3. Claude (Anthropic Chat Model + structured output parser) scores churn risk 0–100, assigns a RED / YELLOW / GREEN tier, lists the top signals, and drafts a personalized HTML save-play email.
4. A Shape node flattens the AI output and the original data into one clean health record.
5. The record is logged to a data table for tracking and reporting.
6. A Switch routes by risk: RED triggers a save-play email, YELLOW a lighter nurture email, GREEN is logged and monitored. Email nodes retry automatically 3×.

## Setup
1. Connect your Anthropic credential on the AI Churn Score model node, and your Gmail (OAuth2) credential on the two email nodes.
2. Make sure the customer_health_log data table exists with the mapped columns (customer_id, churn_score, risk_tier, action_taken, logged_at and more); create it if you are importing into a fresh instance.
3. Activate the workflow and POST customer signals to the webhook URL. Test with the sample payload, then connect your CRM, billing or product-analytics tool to send real signals.

## Requirements
- n8n instance with the Data Table feature enabled
Anthropic API key (Claude)
Gmail account connected via OAuth2

## Customization
- Swap the Anthropic model for OpenAI or any other chat model without touching the flow
Adjust the RED / YELLOW / GREEN thresholds or scoring weights directly in the system prompt
Replace Gmail with Slack, Outlook or your CRM to change how alerts are delivered
Add a Schedule trigger to batch-scan your whole customer list instead of pushing signals one by one

## Additional info
Every downstream node references the Shape node explicitly, so fields never arrive null after the data-table insert — a common failure point in AI + data-table workflows.
Fits any recurring-revenue business: SaaS, agencies, coaching, subscription e-commerce, and paid communities.

## 🔗 Nodes Used

Webhook, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
