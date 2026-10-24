# 📊 Monitor weekly LLM share of voice with OpenRouter, Google Sheets, and email reports

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to query multiple LLMs via OpenRouter with prompts from Google Sheets, analyzes brand mentions and domain citations, aggregates weekly Share of Voice metrics, and emails an HTML visibility report.

## How it works
1. Runs every week on a schedule trigger.
2. Reads active prompts from a Google Sheets “prompts” tab and expands them into multiple model runs (including repeated runs per model) to create OpenRouter chat completion requests.
3. Sends each request to OpenRouter, normalizes the response into answer text and extracted citation URLs, and appends the results to the Google Sheets “runs” tab.
4. Loads brand definitions from the Google Sheets “brands” tab, scans the latest successful runs for brand mentions and matching citation domains, and writes one mention/citation record per brand-run to the “mentions” tab.
5. Aggregates the mention and citation results into weekly metrics per model (and an “all models” total), including mention rate, citation rate, Share of Voice, and average first-mention position, and appends them to the “weekly_agg” tab.
6. Builds an HTML report that compares the current week to the previous week, flags alerts (SoV drop > 5pp or citation rate falling to 0), and sends the report by email.

## Setup
1. Create a Google Sheets spreadsheet with five tabs named prompts, brands, runs, mentions, and weekly_agg using the exact header columns expected by the workflow, and replace PASTE_SHEET_ID with your spreadsheet ID in all Google Sheets nodes.
2. Add a Google Sheets OAuth2 credential and assign it to every Google Sheets node.
3. Add an HTTP Header Auth credential for OpenRouter with header name Authorization and value Bearer <your OpenRouter key>, and assign it to the OpenRouter HTTP Request node.
4. Configure the model list and N_RUNS value in the code step that expands runs to match your desired providers and sampling depth.
5. Add SMTP credentials for the Email Send node and set the from/to email addresses (replace the PASTE_* placeholders).

## Requirements
- Funded OpenRouter account

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
