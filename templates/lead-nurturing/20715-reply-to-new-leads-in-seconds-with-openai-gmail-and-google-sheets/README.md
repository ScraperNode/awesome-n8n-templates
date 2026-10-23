# 💬 Reply to new leads in seconds with OpenAI, Gmail and Google Sheets

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures new enquiries from an n8n Form or a website webhook, uses OpenAI to screen for spam and draft a short reply, then sends (or drafts) the response via Gmail, alerts the owner by email, and logs every enquiry and outcome to Google Sheets.

## How it works
1. Receives a new enquiry either from an n8n Form submission or a POST request to a webhook endpoint.
2. Normalizes the submitted fields (name, email, phone, service, message) into a single lead record and timestamps when it was received.
3. Sends the lead details to OpenAI to label the message as real or spam, then routes it to auto-reply, log-only, or “needs a person” if the check fails or the email is invalid.
4. For real enquiries, reads your Google Sheets log to detect whether this email address already received a reply within the configured time window and skips sending another reply if it is a repeat.
5. For new real enquiries, uses OpenAI to generate a short reply including your booking link and applies safety checks that replace risky content with a fixed fallback reply.
6. Creates a Gmail draft or sends the email (based on the DRAFT_ONLY setting), emails the owner a detailed alert (optionally via Twilio SMS and Telegram if enabled), and appends the lead and outcome to Google Sheets including seconds-to-reply.

## Setup
1. Add an OpenAI API key as an HTTP Header Auth credential (Authorization: Bearer <key>) and attach it to both OpenAI HTTP Request steps.
2. Connect your Gmail account for the reply and owner-alert email steps, and set the owner email address in the workflow settings.
3. Connect Google Sheets credentials, create a blank Google Sheet for logging, and paste its URL into the googleSheetUrl setting (the workflow writes headers on first run).
4. Update the Settings values (businessName, services, tone, bookingLink, duplicateWindowHours, and optionally DRAFT_ONLY) to match your business.
5. If using the website webhook, copy the production webhook URL and configure your site to POST the enquiry fields to it; enable Twilio/Telegram nodes and fill in ownerMobile/smsFromNumber/telegramChatId only if you want those alerts.

## Requirements
- An OpenAI API key (gpt-4o-mini, a fraction of a cent per lead)
- A Gmail account connected in n8n (sends the reply and the owner alert)
- A Google Sheets account and a blank sheet for the lead log
- Optional: Twilio for SMS alerts and a Telegram bot for chat alerts (both off by default)

## Customization
- DRAFT_ONLY is on by default, so replies are saved as Gmail drafts. Set it to false to send automatically once you trust the replies
- Edit businessName, services, tone and bookingLink in Settings so every reply sounds like your business
- Change duplicateWindowHours to set how long before the same email address gets another reply (24 hours by default)
- Point any website form at the webhook. It accepts JSON or a normal form post and matches name, email, phone, service and message fields loosely

## Additional info
Built and tested on n8n 2.40.6. Before any reply goes out, a safety check blocks prices, dates, times, free offers and web addresses and swaps in a fixed fallback reply. Full README and canvas image: https://github.com/jlebaynham/n8n-speed-to-lead

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
