# 🎣 Qualify event venue leads from Gmail with Gemini, HighLevel, Sheets and Slack

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/T1e7SoVQfbs

My Linkedin Profie: https://www.linkedin.com/in/iamvaar/ 

This workflow monitors a Gmail inbox for new unread enquiries, uses Google Gemini to extract and score venue lead details, syncs qualified leads to GoHighLevel, logs them in Google Sheets, and notifies a Slack channel while preventing duplicate notifications.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Normalizes key email fields and sends the subject/body to Google Gemini to extract structured event details and an ICP score.
3. Filters to only continue when the email is an ICP-matched lead with an ICP score of at least 70.
4. Searches GoHighLevel for an existing contact by the sender’s email and creates/updates the contact if none is found.
5. Looks up the sender in Google Sheets and either waits briefly if the lead already exists or logs/updates the lead details in the sheet.
6. Checks whether the lead has already been marked as notified and, if not, posts the lead details to Slack.
7. Updates the Google Sheets row to set the notified flag to true to avoid repeat alerts.

## Setup
1. Connect your Gmail OAuth2 credential and adjust the Gmail search query/labels if you want to monitor a different mailbox or filter.
2. Add a Google Gemini (Google PaLM) API credential and confirm the selected model name matches what you want to use.
3. Connect your GoHighLevel OAuth2 credential and replace the locationId and any contact fields in the upsert request to match your GoHighLevel account.
4. Connect a Google Sheets service account, and update the spreadsheet ID, sheet name, and column headers to match your “Event Venue Enquiries” tracker (including a notified column).
5. Connect your Slack credential and choose the channel where new lead notifications should be posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail Trigger, HighLevel, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
