# 🔬 Manage catering event quotes and countdowns with Postgres, Gmail, OpenAI and Telegram

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Catering quotes, invoices, and reminders that run themselves. This workflow takes catering inquiries through webhooks, has OpenAI (gpt-5.6-terra) draft the quote and invoice emails, stores every event in Postgres, and keeps clients and the owner in the loop with Gmail emails and Telegram alerts, including daily countdown reminders.

*Last updated: September 2026.*

## Quick Overview
This workflow manages catering events end to end by receiving intake, update, and completion webhooks, generating quote and invoice emails with OpenAI, storing event data in Postgres, and sending client emails via Gmail plus owner alerts and daily countdown reminders via Telegram.

## How it works
1. Receives a catering inquiry via a webhook, validates required fields, and notifies ops via Gmail and Telegram if the payload is invalid.
2. For valid inquiries, OpenAI drafts a quote email from the event details and predefined package options, then the workflow stores the event in Postgres, emails the client via Gmail, and alerts the owner via Telegram.
3. Receives event updates via a second webhook, validates the payload, checks the event exists in Postgres, and emails/Telegram-notifies ops if the update is invalid or references an unknown event.
4. For valid updates, the workflow updates the Postgres record (including handling a “deposit received” update), emails the client confirmation via Gmail, logs the communication, and alerts the owner via Telegram.
5. Receives event completion via a third webhook, validates the final headcount, checks the event exists in Postgres, and alerts ops via Gmail and Telegram if the completion payload is invalid or unknown.
6. For valid completions, OpenAI drafts a final invoice email and a short review request, the workflow updates the Postgres event, emails both messages via Gmail, logs them, and sends a Telegram completion alert.
7. Runs daily at 08:00 (or via a sweep probe webhook) to fetch open events from Postgres, send T-7/T-3 client reminders and deposit nudges by Gmail, post all sweep actions to Telegram, and stamp “last nudged” dates for overdue-deposit events.

## Setup
1. Create Postgres tables for `catering_events` and `comms_log`, then add a Postgres credential and confirm the workflow queries match your schema.
2. Add Gmail OAuth2 credentials and replace `ops@yourcatering.com` with your real operations email address.
3. Add a Telegram credential and replace the hard-coded `chatId` values with your Telegram chat ID for owner/ops alerts.
4. Add an OpenAI API credential (used by the gpt-5.6-terra chat model) for generating the quote, invoice, and review emails.
5. Copy the three webhook URLs (`/catering/intake`, `/catering/update`, `/catering/done`) and configure your intake form/CRM/payment process to POST the expected fields, and optionally use `/catering/sweep-probe` to trigger the daily sweep on demand.

### Quick Answers
**What actually starts a catering event?**
The `/catering/intake` webhook. It validates the inquiry, has OpenAI draft the quote email, stores the event in Postgres, and emails the client.

**Which emails does the AI write?**
OpenAI writes the opening quote from your package options, plus the final invoice and a short review request at completion. Everything else is a fixed template.

**When do client reminders go out?**
A daily sweep at 08:00 sends T-7/T-3 reminders and deposit nudges, and stamps a “last nudged” date so overdue deposits are not chased twice.

**Where is everything stored?**
Events live in the `catering_events` table and every email and alert is recorded in `comms_log`.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Postgres, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
