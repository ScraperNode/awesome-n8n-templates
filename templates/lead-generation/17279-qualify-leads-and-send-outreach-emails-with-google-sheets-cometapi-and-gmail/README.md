# 🎣 Qualify leads and send outreach emails with Google Sheets, CometAPI, and Gmail

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow watches a Google Sheets lead intake sheet for new rows, uses CometAPI to score and summarize each lead, and for high-scoring leads drafts and sends a personalized outreach email via Gmail, then saves the score, summary, and email draft back to a Google Sheets results sheet.

## How it works
1. Triggers every minute when a new row is added to a Google Sheets spreadsheet.
2. Sends the lead’s name, company, and message to CometAPI to generate a 1–10 purchase-likelihood score.
3. Extracts the numeric score from CometAPI’s response and checks whether the score is 7 or higher.
4. For leads scoring 7+, uses CometAPI to create a short lead summary and generate a personalized outreach email draft.
5. Sends the outreach email to the lead using Gmail with a personalized subject line.
6. Appends or updates a Google Sheets results spreadsheet (matched by email) with the lead details, score, summary, and email draft.

## Setup
1. Connect Google Sheets credentials and set the correct spreadsheet and sheet for both the lead intake trigger and the results sheet update.
2. Configure CometAPI credentials (or required API key settings) for the scoring, summarization, and email-drafting steps.
3. Connect a Gmail account and confirm the workflow is allowed to send email to the lead’s address from your sheet.
4. Ensure your source sheet includes Name, Email, Company, and Message columns, and your results sheet includes columns for Score, Summary, and Email Draft (or adjust the column mappings).

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
