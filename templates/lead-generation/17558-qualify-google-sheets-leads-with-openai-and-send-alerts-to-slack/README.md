# 🎣 Qualify Google Sheets leads with OpenAI and send alerts to Slack

> ⚡ **702 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow watches for new rows in Google Sheets, uses an OpenAI chat model to score and categorize lead intent with structured output, writes the results back to the same sheet, and posts only high-scoring relevant leads to a Slack channel.

## How it works
1. Triggers every minute when a new row is added to a selected Google Sheets worksheet.
2. Adds workflow configuration values like your business context and the minimum score threshold to the incoming row data.
3. Skips processing when the new row has an empty post_text field.
4. Sends the lead text and business context to an OpenAI chat model to return a structured result with relevant, score, category, and reason.
5. Updates the same Google Sheets row with the AI-generated score, category, reason, relevant flag, and a qualified status.
6. Posts a formatted Slack message with the lead details when the lead is marked relevant and the score meets or exceeds the configured threshold.

## Setup
1. Add Google Sheets credentials, then select the target document and sheet in both the Google Sheets trigger and the Google Sheets update action.
2. Create a worksheet with headers that match the workflow fields (at minimum: post_text, link, source, relevant, score, category, reason, status, and a row_number field for updates).
3. Add OpenAI credentials to the chat model node (or a compatible OpenAI connection) and keep the structured output schema aligned with the expected fields.
4. Add Slack credentials, select the channel to post to, and adjust the message text if you want different formatting.
5. Update the businessContext and minScore values to match your offer and the qualification threshold you want.

## 🔗 Nodes Used

Google Sheets, Slack, Google Sheets Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
