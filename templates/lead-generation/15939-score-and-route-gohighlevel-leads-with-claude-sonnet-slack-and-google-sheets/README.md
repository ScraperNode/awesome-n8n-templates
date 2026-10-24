# 🎣 Score and route GoHighLevel leads with Claude Sonnet, Slack, and Google Sheets

> ⚡ **43 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives new GoHighLevel contacts via webhook, uses Anthropic Claude Sonnet to score and classify them as Hot/Warm/Cold, tags the contact in GoHighLevel accordingly, alerts your team in Slack for hot leads, and logs every lead with reasoning and next steps to Google Sheets.

## How it works
1. Receives a webhook request from GoHighLevel when a new contact is created.
2. Loads your lead qualification settings (ICP details, keywords, thresholds) and normalizes the incoming contact fields.
3. Sends the contact details and ICP to Anthropic Claude Sonnet to return a JSON score, tier, reasoning, next action, and recommended GoHighLevel tag.
4. Parses and validates the Claude response, then routes the lead based on the tier (Hot, Warm, or Cold).
5. For Hot leads, posts an alert to a Slack channel and updates the contact in GoHighLevel via the REST API.
6. For Warm and Cold leads, updates the contact in GoHighLevel via the REST API with the appropriate tier tagging.
7. Appends the lead details, score, tier, reasoning, next action, and timestamp to a Google Sheets log.

## Setup
1. Create a GoHighLevel “Contact Created” webhook that points to this workflow’s webhook URL, and provide your GoHighLevel API key and Location ID in the configuration step.
2. Add an Anthropic credential (API key) for the Claude Sonnet model used to score and classify leads.
3. Connect Slack credentials and set the target channel for hot-lead alerts, or disable the Slack step if you don’t use Slack.
4. Connect Google Sheets credentials, set the spreadsheet ID and sheet name, and ensure the sheet has columns for timestamp, contact info, score, tier, reasoning, and next action.
5. Review the ICP settings and tier thresholds (hot/warm cutoffs) to match your qualification criteria, then activate the workflow and test by creating a contact in GoHighLevel.

## Customization
- No customizations needed beyond the standard setup. The only node users need to edit is Configure ICP and Settings, where they add their GHL API key, Location ID, and describe their ideal customer profile in plain text. The scoring logic, Claude prompt, and all three branches work out of the box. Users can optionally adjust the Hot and Warm score thresholds in the Route by Tier switch node if they want to change how selective the classifier is.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
