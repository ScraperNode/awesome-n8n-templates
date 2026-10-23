# 📋 Log and report construction punch list items with OpenAI, Google Sheets, Gmail and Telegram

> ⚡ **9 views** · 📋 [Project Management](../)

## Description

Construction chaos, organized. Site teams send punch list messages via webhook and this workflow structures each item with AI, routes it to the right subcontractor from a trade roster, logs it to Sheets, and follows up weekly. Critical issues ping the project manager instantly.

*Last updated: September 2026.*

## Quick Overview
This workflow accepts construction punch list messages via a webhook, uses OpenAI plus a Google Sheets trade roster to structure and route each item, logs it to Google Sheets, emails the responsible subcontractor via Gmail, and sends confirmations and weekly status updates through Telegram.

## How it works
1. Receives a POST request via a webhook containing a punch list message, sender, and Telegram chat ID.
2. Validates the message text and, if missing, sends usage instructions back to the sender via Telegram.
3. Uses OpenAI to extract location, trade, severity, and description, and looks up the responsible company and email from a Google Sheets TradeRoster.
4. Validates the parsed result and, if key fields are missing, replies in Telegram asking for a clearer message and a roster-mapped trade.
5. Appends the punch item to a Google Sheets PunchLog, emails the assigned subcontractor via Gmail, and confirms logging back to the sender on Telegram.
6. If the severity is Critical or High, sends an alert to the project manager via Telegram.
7. Every Monday at 09:00, pulls open items from PunchLog, generates a concise weekly report with OpenAI, and sends it via Gmail and Telegram.

## Setup
1. Create a Google Sheets spreadsheet with two tabs named PunchLog and TradeRoster, and populate TradeRoster with columns for trade, company name, and contact email.
2. Add credentials for OpenAI, Google Sheets (OAuth2), Gmail (OAuth2), and Telegram Bot API in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin).
3. Update the Google Sheets document ID and sheet names if your spreadsheet differs from PunchLog/TradeRoster, and ensure PunchLog has columns matching the fields the workflow appends (punch_id, received_at, sender, location, trade, severity, description, assigned_company, status).
4. Copy the webhook URL for the punch intake endpoint and configure your message source (for example, a Telegram bot relay) to POST the punch text, chat_id, and sender to it.
5. Set the project manager Telegram chat ID for high-severity alerts and the weekly report email recipient address to your preferred targets.

### Quick Answers
**What happens on Critical or High severity?**  
The project manager gets an instant Telegram alert on top of the normal routing.  
**Is there a weekly roundup?**  
Yes. Every Monday at 09:00, open items become a concise report via Gmail and Telegram.  
**What sheets do I need?**  
PunchLog for items and TradeRoster mapping trades to companies and emails.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
