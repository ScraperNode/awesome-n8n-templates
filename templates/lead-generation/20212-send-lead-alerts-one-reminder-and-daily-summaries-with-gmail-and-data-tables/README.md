# 🎣 Send lead alerts, one reminder and daily summaries with Gmail and Data Tables

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow accepts website leads via a webhook, deduplicates and stores them in an n8n Data Table, emails the owner a Gmail alert with an “answered” link, sends a single reminder after 30 minutes if not marked answered, and delivers a daily Gmail summary.

## How it works
1. Receives a new lead via a POST webhook (only if an email or phone number is present) or runs nightly on a schedule.
2. Normalizes the lead fields, generates a SHA-256 lead key from email/phone, and checks an n8n Data Table for a recent matching lead.
3. If the lead is new (not seen within the repeat window), inserts it into the Data Table and sends a Gmail alert to the owner containing a private “mark as answered” resume link.
4. Waits until the owner opens the “answered” link or until the reminder time limit expires.
5. If marked answered, updates the Data Table row with an answered timestamp; otherwise, sends one Gmail reminder and records the reminder timestamp.
6. Every evening, pulls today’s Data Table rows, calculates received/answered-in-time/open/reminded counts, and emails the daily summary via Gmail.

## Setup
1. Create an n8n Data Table with columns lead_key, name, email, phone, source (text) and received_at, answered_at, reminded_at (date/time), then select it in all Data Table nodes.
2. Add a Gmail OAuth2 credential for the Gmail nodes used to send the alert, reminder, and daily summary.
3. Update the “Your settings” values (owner email, reminder minutes, repeat window days, and timezone) to match your team’s requirements.
4. Copy the webhook production URL from the lead webhook and configure your form tool to send a POST request with lead fields (name, email, phone, message, source).

## Requirements
- A Gmail account and n8n with Data Tables

## Customization
- Swap the Gmail nodes for Slack, Telegram or Outlook, change the evening summary time and timezone, or add Header Auth to the webhook if your form can send a header.

## Additional info
Made by Betterlane. Step-by-step guide: https://betterlaneagency.com/learn/n8n-workflow-runs-twice

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
