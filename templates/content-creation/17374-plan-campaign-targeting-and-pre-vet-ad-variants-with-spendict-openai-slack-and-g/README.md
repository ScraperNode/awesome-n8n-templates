# 🎬 Plan campaign targeting and pre-vet ad variants with Spendict, OpenAI, Slack and Google Sheets

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a campaign brief via an n8n form, uses Spendict to generate a targeting strategy, uses OpenAI to draft platform-specific ad variants, then has Spendict score and gate each draft before logging vetted variants to Google Sheets and posting updates to Slack.

## How it works
1. Receives a campaign brief (product, platform, budget, objective, and optional funnel stage/vertical) via an n8n form submission.
2. Sends the brief to Spendict’s strategize-targeting API to generate a targeting plan with segments, budget split, setup notes, and key risks.
3. Formats the strategy into a readable message and posts the targeting plan to Slack.
4. Sends the strategy summary and audience approach to the OpenAI Chat Completions API to generate three ad variants (headline + primary text) for the selected platform.
5. Assesses each ad variant with Spendict’s assess API to get a score and a deterministic verdict (run, fix_first, or kill).
6. Logs non-killed variants (including score and top recommended fix) to Google Sheets and posts a Slack message summarizing how many vetted variants were added.

## Setup
1. Add a Spendict API key and configure HTTP Header Auth (Authorization: Bearer …) for both Spendict HTTP requests.
2. Add an OpenAI API key and configure HTTP Header Auth (Authorization: Bearer …) for the OpenAI HTTP request.
3. Connect Google Sheets credentials and select the target spreadsheet and sheet in the append step where variants are logged.
4. Create or choose a Slack Incoming Webhook and replace the webhook URL in both Slack webhook requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
