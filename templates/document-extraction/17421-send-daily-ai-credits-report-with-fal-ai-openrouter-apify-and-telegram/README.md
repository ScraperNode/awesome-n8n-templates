# 🔬 Send daily AI credits report with FAL AI, OpenRouter, Apify, and Telegram

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs twice daily to fetch remaining credits and usage from FAL AI, OpenRouter, and Apify, then compiles a formatted spend report and sends it to a Telegram chat.

## How it works
1. Runs on a schedule at two specific times each day using a Schedule Trigger node configured for 10:30 and 20:02 IST.
2. Requests your current credit balance from the FAL AI billing endpoint with authorization headers.
3. Fetches total credits and total usage from the OpenRouter credits API with bearer authentication.
4. Retrieves your monthly usage details from the Apify usage API, including used and plan limits in USD, via a token query parameter.
5. Passes all API responses into a JavaScript Code node that safely extracts balances, computes available amounts, and assembles a structured HTML report string.
6. Sends the final report as a Telegram message to your chosen chat ID, using HTML parse mode and a link to a Google Sheets expense log.

## Setup
1. Add your FAL AI, OpenRouter, and Apify API keys by updating the Authorization headers and token query parameter in the three HTTP Request nodes.
2. Connect a Telegram account credential in n8n and set the target Telegram chat ID in the Telegram node.
3. Adjust the scheduled run times (and the report timezone, if needed) so the daily spend report arrives when you want it.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
