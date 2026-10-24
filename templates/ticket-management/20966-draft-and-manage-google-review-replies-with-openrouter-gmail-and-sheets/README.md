# 🎫 Draft and manage Google review replies with OpenRouter, Gmail and Sheets

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow checks for new Google Business Profile reviews hourly, uses OpenRouter to classify sentiment and draft on-brand public replies, logs reviews and drafts to Google Sheets, and emails the business owner for approval via Gmail, with optional auto-posting and error logging.

## How it works
1. Runs every hour on a schedule.
2. Loads your business settings and reads previously logged review IDs from a Google Sheets “Reviews” tab to avoid duplicates.
3. Calls the Google Business Profile (My Business) API to fetch the latest reviews for the configured account and location.
4. Filters to only reviews that are not yet logged and do not already have an owner reply.
5. Sends each new review to OpenRouter to generate JSON containing sentiment, urgency, a short summary, and a suggested public reply, then validates/parses the output with a safe fallback reply.
6. Appends the review details and drafted reply to the Google Sheets “Reviews” tab and emails the draft to the owner via Gmail, flagging 3-stars-or-lower reviews as urgent.
7. If auto-posting is enabled, publishes the drafted reply back to the review through the Google Business Profile API, and on any HTTP/Gmail/posting failure logs the error to the Google Sheets “Errors” tab and emails the owner.

## Setup
1. Create a Google Sheet with two tabs named “Reviews” and “Errors” and add the required headers (e.g. Reviews: Review ID, Date, Reviewer, Rating, Comment, Sentiment, Urgency, Draft Reply, Status; Errors: Timestamp, Node, Error, Execution ID).
2. Add a Google OAuth2 credential with the `https://www.googleapis.com/auth/business.manage` scope (used to read reviews and optionally post replies).
3. Add Google Sheets OAuth2 credentials for the spreadsheet and Gmail OAuth2 credentials for sending approval and error emails.
4. Add an OpenRouter API credential and select the model in the OpenRouter chat model node.
5. Fill in the Workflow Settings values (business name, owner email, account ID, location ID, sheet ID, brand voice) and only set `autoPostReplies` to true after you trust the generated drafts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
