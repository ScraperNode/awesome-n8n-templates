# 🎣 Capture website form leads in Google Sheets and send Gmail auto-replies

> ⚡ **22 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Freelancers and small businesses that collect leads through a website form can capture each submission via a webhook, save valid leads to Google Sheets and send an instant auto-reply email.

## How it works
1. Webhook receives the POST request from the website form.
2. Normalizes the incoming fields (name, email, phone, message, source) and timestamps the submission.
3. Validates name/email/message (invalid → HTTP 400 with reasons).
4. Appends the lead to Google Sheets.
5. Sends the person a friendly confirmation email within seconds.
6. Returns HTTP 200 to the form.

## Setup
1. Connect Google Sheets + Gmail (or SMTP) credentials.
2. Create a sheet with the header row: received_at, name, email, phone, message, source, valid, errors
3. Paste the webhook URL into your form.
4. Customize the Gmail auto-reply content (for example, replace `YOUR BUSINESS NAME`) and subject if needed.
5. Activate the workflow and configure your form to POST to the production webhook URL for `/lead-intake`.

## Customization
- Change the email text in the "Send auto-reply" node; add a Slack/Telegram node for team notification.

## Additional info
Tested on n8n 1.97.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
