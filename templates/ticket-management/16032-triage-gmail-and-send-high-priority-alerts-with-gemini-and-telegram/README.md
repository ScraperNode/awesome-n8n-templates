# 🎫 Triage Gmail and send high-priority alerts with Gemini and Telegram

> ⚡ **59 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow checks Gmail every hour, filters out automated senders, uses Google Gemini to summarize and classify each new email, logs the analysis to an n8n Data Table, and sends a Telegram alert when an email is marked as high priority.

## How it works
1. Runs every hour and pulls new emails from Gmail.
2. Normalizes the email fields (sender, subject, received time, body text) and truncates long content while filtering out senders that match blocked “no-reply/newsletter” keywords.
3. Checks an n8n Data Table for the email’s message ID to skip messages that were already processed.
4. Sends the cleaned email content to Google Gemini, which returns a structured JSON with summary, category, priority, action items, deadline, sentiment, and key entities.
5. Upserts the email metadata and Gemini analysis into the n8n Data Table for tracking and search.
6. If Gemini rates the email as High priority, sends a formatted Telegram message with the summary, required action, and deadline.

## Setup
1. Connect a Gmail credential (service account as configured) and ensure the Gmail Trigger has access to the mailbox you want to monitor.
2. Add a Google Gemini (Google PaLM) API credential for the Gemini chat model used by the email analysis step.
3. Create an n8n Data Table with the expected columns and paste its ID into the `data_table_id` value in the Set Context step.
4. Connect a Telegram Bot credential and set the correct Telegram chat ID in the Telegram alert step (replace the current value if needed).
5. Review and update the Set Context values (owner name/email, blocked sender keywords, and max content length) to match your preferences.

## Requirements
- **n8n Version:** Built and tested on **n8n 2.20.0+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
- **Google Gemini** API key credential.
- **Gmail OAuth2** credential.
- **Telegram Bot** API credential and Chat ID.
- Built-in **n8n Data Table** feature enabled.

## Customization
- **Switch the Input Source:** You don't have to use Gmail. Swap the trigger for an **IMAP**, **Outlook**, or **Zoho Mail** node if you use a different provider.
- **Refine the AI Persona:** Modify the system prompt inside the AI Agent node to fine-tune how it categorizes emails specific to your industry (e.g., adding a "Lead", "Support Ticket", or "Invoice" category).
- **Change the Alert Channel:** Prefer team visibility? Replace the Telegram node with a **Slack** or **Discord** node to notify an entire channel when a high-priority email arrives.

## Additional info
## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)  
**Email:** me@nguyenthieutoan.com  
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)  
**Company:** GenStaff ([genstaff.net](https://genstaff.net))  
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan  
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

Telegram, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
