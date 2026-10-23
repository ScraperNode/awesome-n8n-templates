# 🎫 Triage Gmail messages with Jev via OpenRouter, Google Sheets, and Telegram

> ⚡ **132 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors unread Gmail messages, uses the Jev decision model via OpenRouter to classify each email (project, type, priority, and reply likelihood), logs the results to Google Sheets, applies a Gmail label, and sends a Telegram alert for high-priority messages.

## How it works
1. Triggers every minute when a new unread message arrives in Gmail.
2. Fetches the full email content and extracts key fields like sender, subject, date, and body text.
3. Sends the email content to the Jev decision model through the OpenRouter Decisions API to classify project, message type, priority, and whether it needs a reply.
4. Normalizes the classification output, flags low-confidence items for review, and prepares a Gmail label ID and optional urgent-alert text.
5. Appends a tracking row with the classification details (including a Gmail link and model cost) to a Google Sheets worksheet.
6. Applies the selected Gmail label to the message and sends a Telegram notification when the email is classified as high priority and does not require manual review.

## Setup
1. Connect Gmail OAuth2 credentials for both reading incoming mail and applying labels.
2. Add an HTTP Bearer credential for OpenRouter and ensure the workflow can call `https://openrouter.ai/api/alpha/decisions` with the Jev model specified in the request.
3. Replace the placeholder Gmail label IDs in the label-mapping code (including the needs_review label) with real label IDs from your Gmail account.
4. Connect Google Sheets OAuth2 credentials and select your target spreadsheet and worksheet (or copy the provided sheet and use its document and sheet IDs).
5. Connect Telegram credentials and replace `YOUR_TELEGRAM_ID` with the destination chat or channel ID for urgent alerts.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
