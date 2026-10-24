# ⚡ Track expenses from phone notifications with Google Gemini and Google Sheets

> ⚡ **25 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow receives phone push notification through FlowTrigger mobile app, extracts the transaction amount and date, uses Google Gemini to categorize the expense and adds it to a Google Sheets transactions log.

## How it works
1. Receives a POST webhook request containing a captured notification payload from FlowTrigger mobile app.
2. Parses the notification data and skips the flow if no amount is detected in the notification payload.
3. Sends the notification title and body to Google Gemini and parses a structured response with cleaned merchant name, expense category, reasoning, and ISO currency code.
4. Appends the date, amount, category, currency, and merchant to a selected Google Sheets tab.
5. Returns a success response with the saved fields, or an error response if the AI categorization or Google Sheets write fails.

## Setup
1. Create and connect a Google Gemini API key credential for the Google Gemini Chat Model.
2. Create and connect a Google Sheets OAuth2 credential, then set the Google Sheets Document ID and Sheet Tab Name in the Google Sheets append step.
3. Activate the workflow, copy the Webhook production URL from the Webhook trigger, and paste it into FlowTrigger’s Notification Trigger configuration for your banking app notifications.

## Requirements
- Google Gemini API key - can be replaced with any other AI tool

## 🔗 Nodes Used

Google Sheets, Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
