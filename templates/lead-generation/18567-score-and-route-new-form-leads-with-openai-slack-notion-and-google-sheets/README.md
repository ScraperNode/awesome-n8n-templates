# 🎣 Score and route new form leads with OpenAI, Slack, Notion and Google Sheets

> ⚡ **19 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead form submissions via webhook, classifies the email domain locally, scores the lead with OpenAI, assigns hot leads to SDRs in a round-robin rotation, and then logs the result to Notion and Google Sheets while sending Slack alerts and a Gmail confirmation.

## How it works
1. Receives a new lead submission as a POST request to an n8n webhook.
2. Loads workflow configuration (Slack channels, Notion database, Google Sheet, and SDR email list) and classifies the lead’s email domain as business or personal.
3. Sends the lead details to OpenAI to return a JSON lead score, tier (hot/warm/cold), reasoning, and suggested next step.
4. If the OpenAI response cannot be parsed, posts a Slack message to a review channel so the lead can be scored manually.
5. If the lead is hot, assigns the next SDR using round-robin rotation and posts a Slack alert with the score and assignment; otherwise marks the lead for the nurture queue.
6. Creates a lead record in Notion, sends a tailored confirmation email via Gmail, and appends the lead data (tier, score, timestamp, and assignment) to Google Sheets.

## Setup
1. Add credentials for OpenAI, Slack, Notion, Gmail, and Google Sheets.
2. Update the Config values for slackAlertChannelId, slackReviewChannelId, notionDatabaseId, googleSheetId, and the sdrEmails list used for round-robin assignment.
3. Create a Notion database with properties that match the workflow’s mapped fields (Status, Email, Lead Score, Assigned SDR, and Reasoning).
4. Create (or select) a Google Sheet and ensure the target sheet has columns for name, tier, email, company, leadScore, receivedAt, and assignedSdr.
5. Copy the webhook production URL and configure your form to POST JSON with at least name, email, company, and message.

## Requirements
- OpenAI API key
- Slack workspace with two channels (alerts and review)
- Notion database for lead records
- Gmail account with OAuth2 access
- Google Sheet for lead logging
- A lead form that can POST JSON to a webhook URL

## Customization
- Adjust the AI prompt's scoring criteria (add industry, budget, or company size signals)
- Change the round-robin logic to weighted assignment if needed
- Swap Notion for a real CRM

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
