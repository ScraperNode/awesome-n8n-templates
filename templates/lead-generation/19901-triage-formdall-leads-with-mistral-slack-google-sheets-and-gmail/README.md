# 🎣 Triage Formdall leads with Mistral, Slack, Google Sheets, and Gmail

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives Formdall contact-form submissions via webhook, uses the Mistral Cloud chat model to score each lead as hot, warm, or junk, then routes hot leads to Slack and Google Sheets, warm leads to a Gmail draft reply, and drops junk.

## How it works
1. Receives a POST request from Formdall via a webhook (optionally verifying the request signature).
2. Sends the lead details to a Mistral Cloud chat model to generate a structured score (hot/warm/junk), category, summary, and optional reply draft.
3. Routes the lead based on the AI score.
4. Posts hot leads to a Slack channel and appends the lead details to a Google Sheets spreadsheet.
5. Creates a Gmail draft reply to the submitter for warm leads using the AI-generated text.
6. Drops junk leads without taking further action.

## Setup
1. Configure Header Auth on the Formdall webhook action and add the matching Header Auth credential in the n8n webhook node.
2. Add Mistral Cloud credentials for the Mistral Cloud Chat Model used by the lead-triage agent.
3. Add Slack, Google Sheets, and Gmail credentials, or remove the branches you don’t plan to use.
4. Replace YOUR_SHEET_ID in the Google Sheets append step, ensure a sheet named “Leads” exists, and update the Slack channel (for example, #sales) as needed.
5. (Optional) If you enable signature verification, set the FORMDALL_SIGNING_SECRET environment variable and configure the same secret in Formdall’s signing settings.
6. Activate the workflow and paste the production webhook URL into your Formdall form’s webhook action.

## Requirements
- An n8n instance reachable from the internet
- A Formdall form with a webhook action
- A Mistral Cloud API key (swap in another chat model if you prefer)

## Customization
- Swap the Mistral Cloud Chat Model for any other chat model node and keep the prompt and schema.
- Delete branches you do not need, or add more outcomes to the Switch node for additional scores.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
