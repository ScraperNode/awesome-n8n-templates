# 🔬 Summarize portfolio reviews, flag compliance risk with GPT-4o and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives advisor portfolio review meeting notes via a webhook, uses OpenAI GPT-4o to generate a structured summary and compliance-risk flags, logs the results to Google Sheets, and then notifies the advisor via Gmail, escalating high-risk items to Telegram.

## How it works
1. Receives a POST request on a webhook containing client/advisor details, risk tolerance on file, and raw meeting notes.
2. Normalizes the incoming fields and adds a submission timestamp.
3. Sends the notes to OpenAI GPT-4o to produce a structured output with a summary, flagged issues, recommended follow-up, and a high/medium/low complianceRisk rating.
4. Logs the structured review record to a Google Sheets compliance tracker tab.
5. Routes the result by complianceRisk, sending high-risk cases to Gmail for immediate review and also posting a high-risk alert to Telegram.
6. Sends medium- and low-risk cases to the advisor via Gmail with the summary and recommended follow-up.

## Setup
1. Add an OpenAI API credential for the GPT-4o chat model used to summarize and classify compliance risk.
2. Add a Google Sheets credential, create (or select) a spreadsheet tab named “Portfolio Reviews,” and replace REPLACE_WITH_YOUR_SHEET_ID with your document ID.
3. Add a Gmail OAuth2 credential and ensure the workflow receives a valid advisorEmail value to use as the notification recipient.
4. Add a Telegram credential, replace REPLACE_WITH_YOUR_CHAT_ID with your compliance channel chat ID, and ensure a bot is present in that chat.
5. Copy the production webhook URL for /portfolio-review-intake and configure your meeting-notes form or CRM to POST the expected fields (clientName, advisorName, advisorEmail, meetingNotes, riskToleranceOnFile).

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
