# 🎬 Generate and vet ad creative with OpenAI, Spendict, Google Sheets, and Slack

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a product brief via an n8n form, uses OpenAI to generate ad variants, gates each one with Spendict run/fix/kill scoring, auto-rewrites fixable ads, logs approved results to Google Sheets, and posts an approval count to Slack.

## How it works
1. Receives a product brief from an n8n form submission with product, platform, audience, and desired variant count.
2. Sends the brief to OpenAI Chat Completions to generate multiple ad variants (headline + primary text) in JSON.
3. Splits the OpenAI response into individual variants and submits each one to Spendict’s /assess endpoint for a launch recommendation and score.
4. Routes variants by Spendict verdict: “run” is accepted, “fix_first” is rewritten with the prioritized fixes and re-scored by Spendict, and “kill” is collected as rejected output.
5. Combines accepted and auto-fixed variants and appends them as rows in Google Sheets with status, copy, platform, verdict, and score.
6. Aggregates the logged approved variants and posts a summary message to Slack via an incoming webhook.

## Setup
1. Add HTTP Header Auth credentials for OpenAI (Authorization: Bearer <OpenAI API key>) in both OpenAI HTTP Request steps.
2. Add HTTP Header Auth credentials for Spendict (Authorization: Bearer <Spendict API key>) in both Spendict HTTP Request steps.
3. Connect Google Sheets credentials and select the target spreadsheet and sheet to append approved rows (ensure headers like status, headline, primary_text, platform, verdict, score, top_fix exist).
4. Replace the Slack incoming webhook URL in the Slack POST request with your own Slack webhook endpoint.
5. Optionally remove the Google Sheets and Slack steps if you only want the gated/ad-rewrite outputs inside n8n.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
