# 🎣 Qualify inbound leads from forms with Claude, Google Sheets, Slack and Gmail

> ⚡ **37 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures inbound leads via an n8n Form, scores each submission against a plain-English ICP using Anthropic Claude, logs results to Google Sheets, and alerts hot leads via Slack and Gmail based on a configurable score threshold.

## How it works
1. Receives a new submission from an n8n Form with lead details like name, email, website, budget, and needs.
2. Applies your configured ICP definition, hot-lead score threshold, Slack channel, and notification email to the incoming submission.
3. Sends the lead details and ICP to Anthropic Claude to return a structured fit score, tier, reasoning, and recommended next action.
4. Appends every scored lead to a Google Sheets “Leads” worksheet with the original form data and Claude’s outputs.
5. Checks whether the lead’s fit score meets or exceeds the configured threshold.
6. Posts a hot-lead alert to the specified Slack channel and sends a hot-lead email via Gmail when the threshold is met.

## Setup
1. Add credentials for Anthropic, Google Sheets OAuth2, Slack, and Gmail OAuth2.
2. Update the Google Sheets document ID and ensure the workbook has a “Leads” sheet with columns that match the fields being appended.
3. Edit the ICP definition and hot-lead threshold, then set your target Slack channel and notification email in the configuration values.
4. Publish the n8n Form and share the form link wherever you collect inbound leads.

## Additional info
Step-by-step guides:
- Google (Sheets and Gmail) for n8n → https://winflowai.com/blog/get-google-api-key-n8n/
- Anthropic (Claude) API key → https://winflowai.com/blog/get-claude-api-key/

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
