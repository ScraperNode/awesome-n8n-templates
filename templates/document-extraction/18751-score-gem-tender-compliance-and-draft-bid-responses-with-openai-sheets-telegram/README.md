# 🔬 Score GeM tender compliance and draft bid responses with OpenAI, Sheets, Telegram, Slack and Gmail

> ⚡ **57 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects GeM tender details via an n8n Form, validates the submission deadline, checks Google Sheets for duplicates, and uses OpenAI (gpt-4o-mini) to score technical compliance and draft a GeM technical bid response, then delivers it via Telegram, Slack, and Gmail and logs it to Google Sheets.

## How it works
1. Receives a GeM tender response request from an n8n Form submission.
2. Parses the bid submission deadline to stop and alert via Telegram if it appears expired, or sends an urgent Telegram warning when the deadline is close.
3. Reads existing entries from Google Sheets and skips processing with a Telegram notice if the tender ID is already logged.
4. Builds a structured tender context and sends it to OpenAI (gpt-4o-mini) to generate a per-requirement compliance JSON and overall compliance percentage.
5. Flags low compliance (or unparseable AI output) and sends a Telegram “review needed” alert while continuing to draft the response.
6. Sends the tender context and the pre-computed compliance results to OpenAI (gpt-4o-mini) to draft a structured GeM technical bid response as plain text.
7. Logs the drafted response and metadata to Google Sheets, then sends the final package to Telegram, Slack, and Gmail.

## Setup
1. Add OpenAI credentials and ensure the model selection is available for both the compliance analysis and response drafting steps.
2. Connect Google Sheets OAuth2 credentials and replace YOUR_GEM_RESPONSES_SHEET_ID and YOUR_TENDERS_LOG_SHEET_ID with your spreadsheet IDs for the “GeM Tender Responses” and “Tenders Log” documents.
3. Connect a Telegram Bot API credential and replace YOUR_TELEGRAM_CHAT_ID anywhere Telegram messages are sent.
4. Connect Slack OAuth2 credentials and set the target Slack channel ID for both the final response message and the workflow error alert.
5. Connect Gmail OAuth2 credentials and update the recipient address (for example, procurement@yourcompany.com) in the email step.
6. Activate the form trigger and share the generated form URL with your procurement/bid team.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
