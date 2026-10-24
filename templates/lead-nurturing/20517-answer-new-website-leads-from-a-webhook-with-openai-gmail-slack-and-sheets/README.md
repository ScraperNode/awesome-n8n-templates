# 💬 Answer new website leads from a webhook with OpenAI, Gmail, Slack and Sheets

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives new website leads via a webhook, uses OpenAI to classify urgency and draft an email reply, sends the reply with Gmail, notifies your team in Slack, logs the lead in Google Sheets, and sends a single follow-up email after two days if the lead is still marked New.

## How it works
1. Receives a POST request from your website form via a webhook containing the lead’s name, email, phone, and message.
2. Sends the lead details plus your business settings to OpenAI to label the request type and urgency and generate a reply subject/body and follow-up text.
3. Sends the drafted reply email to the lead using Gmail.
4. Posts a notification to a Slack channel with the lead details, detected urgency/type, and confirmation that an initial reply was sent.
5. Appends the lead record to a Google Sheets “Leads” tab with Status set to New.
6. Waits two days, looks up the lead by email in Google Sheets, and sends one Gmail follow-up email only if the Status is still New.

## Setup
1. Configure your website form to POST to the workflow webhook URL and include the fields name, email, phone, and message.
2. Add credentials for OpenAI, Gmail, Slack, and Google Sheets in their respective nodes.
3. Create a Google Sheet with a tab named Leads and columns Date, Name, Email, Phone, Message, Type, Urgency, Status, then paste the Sheet ID and set your business details, reply-to address, and Slack channel in the Settings values.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
