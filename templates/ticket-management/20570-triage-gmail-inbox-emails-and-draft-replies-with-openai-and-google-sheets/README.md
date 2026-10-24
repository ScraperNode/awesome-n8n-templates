# 🎫 Triage Gmail inbox emails and draft replies with OpenAI and Google Sheets

> ⚡ **15 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every 10 minutes to triage new Gmail inbox emails with OpenAI, apply Gmail labels, create reply drafts for messages that need a response, optionally send urgent alert emails, and log the triage results to Google Sheets.

## How it works
1. Runs every 10 minutes and loads configuration values such as the Gmail search query, label names, OpenAI model, and Google Sheets destination.
2. Reads existing Gmail labels and, if enabled, creates any missing AI-related labels used for triage and categorization.
3. Fetches a limited batch of untriaged Gmail inbox messages matching the configured search query and cleans the body text (removing HTML and quoted history).
4. Sends each email to the OpenAI Chat Completions API to return structured JSON with category, priority, sentiment, summary, next steps, and an optional reply draft.
5. Validates the AI output and decides whether to apply labels, flag the email for review, create a Gmail reply draft, and/or trigger an urgent owner alert.
6. When not in dry-run mode, applies the selected Gmail labels (as the “processed” lock), creates a threaded Gmail draft reply when allowed, and sends an urgent alert email via Gmail when configured.
7. Appends or updates a row in Google Sheets for each processed email with the triage results, draft content, applied labels, and status/error details.

## Setup
1. Add credentials for Gmail OAuth2 (read/label/draft/send), an OpenAI API credential, and Google Sheets OAuth2 with access to the target spreadsheet.
2. Create a Google Sheets spreadsheet with a tab named “Inbox Log” (or update the sheet name) and ensure the header columns match what the workflow writes.
3. In the configuration step, set the Google Sheet ID, your business context/knowledge base, your signature, and (optionally) an owner alert email address, and review the Gmail search query and label names.
4. Run in dry-run mode first to verify classifications and the Google Sheets log, then set dry_run to false to enable Gmail label changes, draft creation, and alert emails.

## Requirements
- n8n (cloud or self-hosted)
- Gmail account with OAuth2 credentials
- OpenAI API key (gpt-4.1-mini or any model with Structured Outputs)
- Google Sheets account with a sheet named "Inbox Log"

## Customization
- Edit categories, labels, tone, signature and knowledge base in the Setup Configuration node
- Change the schedule, Gmail search query or confidence threshold
- Replace the urgent alert email with Slack or Telegram

## Additional info
Nothing is sent to your contacts automatically: replies are saved as Gmail drafts for review. Email content is sent to OpenAI for analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
