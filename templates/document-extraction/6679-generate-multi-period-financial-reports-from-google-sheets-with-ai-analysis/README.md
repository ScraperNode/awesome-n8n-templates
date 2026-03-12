# 🔬 Generate multi-period financial reports from Google Sheets with AI analysis

> ⚡ **1,072 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Description:
1. Overview
This workflow generates automated revenue and expense comparison reports from a structured Google Sheet. It enables users to compare financial data across the current period, last month, and last year, then uses an AI agent to analyze and summarize the results for business reporting.

2. Prerequisites
A connected Google Sheets OAuth2 credential.

A valid DeepSeek AI API (or replaceable with another Chat Model).

A sub-workflow (child workflow) that handles processing logic.

Properly structured Google Sheets data (see below).

3. Required Google Sheet Structure
Column headers must include at least: Date, Amount, Type.

4. Setup Steps
Import the workflow into your n8n instance.

Connect your Google Sheets and DeepSeek API credentials.

Update:

Sheet ID and Tab Name (already embedded in node: Get revenual from google sheet).

Custom sub-workflow ID (in the Call n8n Workflow Tool node).

Optionally configure chatbot webhook in the When chat message received node.

5. What the Workflow Does
Accepts date inputs via AI chat interface (ChatTrigger + AI Agent).

Fetches raw transaction data from Google Sheets.

Segments and pivots revenue by classification for:

Current period

Last month

Last year

Aggregates totals and applies custom titles for comparison.

Merges all summaries into a final unified JSON report.

6. Customization Options
Replace DeepSeek with OpenAI or other LLMs.

Change the date fields or cycle comparisons (e.g., quarterly, weekly).

Add more AI analysis steps such as sentiment scoring or forecasting.

Modify the pivot logic to suit specific KPI tags or labels.

7. Troubleshooting Tips
If Google Sheets fetch fails: ensure the document is shared with your n8n Google credential.

If parsing errors: verify that all dates follow the expected format.

Sub-workflow must be active and configured to accept the correct inputs (6 dates).

8. SEO Keywords:
Google Sheets report, AI financial report, compare revenue by month, expense analysis automation, chatbot n8n report generator, n8n Google Sheet integration

More template: https://aitool.wiki/

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
