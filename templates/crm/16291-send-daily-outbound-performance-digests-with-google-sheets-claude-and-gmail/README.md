# 🤝 Send daily outbound performance digests with Google Sheets, Claude and Gmail

> ⚡ **60 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every morning, pulls outbound campaign rows from Google Sheets, uses Anthropic Claude to generate a performance summary with sentiment counts and prioritized follow-ups, and sends the digest to a recipient via Gmail.

## How it works
1. Runs every morning at the scheduled hour.
2. Loads configuration values such as the digest recipient email and analysis focus.
3. Reads all rows from the specified Google Sheets campaign tab and aggregates them into a single payload.
4. Sends the aggregated campaign data and focus instructions to Anthropic Claude and parses the response into structured fields (summary, sentiment counts, and follow-ups).
5. Sends a plain-text digest email through Gmail with the summary, sentiment breakdown, and follow-ups list.

## Setup
1. Add an Anthropic API credential and select the Claude chat model you want to use.
2. Add Google Sheets OAuth credentials, set the Google Sheet document ID, and ensure the workflow points to the correct campaign tab name.
3. Add Gmail OAuth credentials and set the recipient email address in the configuration values.
4. Update the scheduled trigger time to match when you want the daily digest sent.

## Additional info
Step-by-step guides:
- Google (Sheets and Gmail) for n8n → https://winflowai.com/blog/get-google-api-key-n8n/
- Anthropic (Claude) API key → https://winflowai.com/blog/get-claude-api-key/

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
