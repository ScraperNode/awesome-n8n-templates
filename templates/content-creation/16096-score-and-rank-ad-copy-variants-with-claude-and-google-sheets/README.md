# 🎬 Score and rank ad copy variants with Claude and Google Sheets

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives ad copy variants via a webhook, uses Anthropic Claude to critique and then score and rank each variant, appends the results to Google Sheets, and returns the ranked list in the webhook response.

## How it works
1. Receives a POST request via a webhook containing a brief, ICP, brand voice, platform, and an array of ad copy variants.
2. Applies default values for missing brief/ICP/brand voice fields and normalizes each variant into a consistent structure.
3. Sends the brief, ICP, brand voice, and variants to Anthropic Claude to generate structured critique notes for each variant.
4. Sends the variants and critique notes to Anthropic Claude again to produce 0–100 scores across multiple dimensions plus an overall score and improvement suggestions.
5. Parses the Claude responses, merges scores with the original variants, sorts by overall score, and assigns a rank.
6. Appends each ranked variant (including scores, verdict, and strongest/weakest lines) to a Google Sheets tab and returns the full ranked list to the webhook caller.

## Setup
1. Create an Anthropic API key and add it as an HTTP Header Auth credential (x-api-key) used by both Claude HTTP requests.
2. Connect your Google Sheets credentials and replace the placeholder document ID with your target spreadsheet ID.
3. Create a Google Sheet tab named “Ad Copy Scores” with columns matching the fields the workflow appends (for example: submittedAt, platform, rank, id, headline, body, cta, hook, icp_fit, brand_voice, cta_clarity, overall, verdict, top_fix, strongest_line, weakest_line).
4. Copy the webhook URL from n8n and configure your source app to POST the variant payload to that endpoint.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
