# 🎫 Route Gmail emails to Slack by intent using OpenAI and log to Sheets

> ⚡ **10 views** · 🎫 [Ticket Management & Triage](../)

## Description

If your team shares an inbox and someone has to manually read every email to decide where it goes, this workflow takes that off your plate. Emails come in, AI reads them, and the right Slack channel gets notified with a summary and priority level.

## Who is this for

Teams that receive a mix of sales inquiries, support requests, and billing questions through a shared inbox. Instead of someone triaging emails by hand every morning, the AI handles it in real time.

## How it works

The workflow polls Gmail for new emails every minute. Each email gets sent to OpenAI (gpt-4o-mini by default) with a prompt that classifies it into one of four categories: sales, support, billing, or spam.

The AI also writes a short summary and assigns a priority level (low, medium, or high). A Switch node then routes the message to the correct Slack channel. Spam gets quietly dropped so your team never sees it.

Every email that comes through gets logged to a Google Sheet with its timestamp, sender, subject, category, priority, and AI summary. So you always have a record of what came in and how it was handled.

## How to set it up

1. Connect your Gmail, OpenAI, Slack, and Google Sheets credentials in n8n
2. Create a Google Sheet with these columns: Timestamp, From, Subject, Category, Priority, Summary
3. Open the "Configure Settings" node and fill in your Slack channel IDs for sales, support, and billing, plus your Google Sheet ID
4. Activate the workflow and send yourself a test email

## Requirements

- Gmail account with OAuth connected in n8n
- OpenAI API key (gpt-4o-mini costs roughly $0.15 per 1M input tokens, so classification is very cheap)
- Slack workspace with OAuth connected in n8n
- Google Sheets for logging

## Customizing the workflow

Want more categories? Edit the system prompt in the "Classify Email Intent" node to add new categories (e.g. "partnerships", "recruitment"), then add matching outputs to the Switch node and wire them to new Slack channels.

You can also change the polling interval on the Gmail trigger if every minute is too frequent. And if you want more accurate classification, swap gpt-4o-mini for gpt-4o in the OpenAI node, though it'll cost a bit more per email.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
