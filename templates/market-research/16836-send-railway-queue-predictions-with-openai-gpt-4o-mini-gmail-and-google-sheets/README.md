# 📊 Send railway queue predictions with OpenAI GPT-4o-mini, Gmail, and Google Sheets

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects train trip details via an n8n Form, predicts station crowding and queue times with a rule-based algorithm, generates a short advisory with OpenAI, then emails a color-coded HTML alert via Gmail and logs each prediction to Google Sheets.

## How it works
1. Receives a submission from an n8n Form containing the traveler’s train, station, date/time, class, e-ticket status, passenger count, and email.
2. Calculates a crowd score, alert level, queue-time breakdown (platform, ticket counter, security, walking), and an optimal station arrival time using an in-workflow rules engine.
3. Sends the prediction context to OpenAI Chat Completions (gpt-4o-mini) to generate a plain-text, under-120-word travel advisory.
4. Combines the advisory with the prediction results and assigns alert colors and text based on the computed alert level.
5. Builds a color-coded HTML email summarizing the recommended arrival time and queue breakdown.
6. Appends the prediction details to a Google Sheets tab and sends the HTML alert email to the traveler via Gmail.

## Setup
1. Add an OpenAI API credential for the HTTP request to `https://api.openai.com/v1/chat/completions`.
2. Connect Google Sheets OAuth2 and replace `YOUR_QUEUE_LOG_SHEET_ID` with your spreadsheet ID, ensuring a tab named `Predictions` exists with matching column headers.
3. Connect Gmail OAuth2 so the workflow can send emails to the address collected in the form.
4. Activate the workflow and share the Form URL (`railway-queue-predictor`) with travelers who will submit requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
