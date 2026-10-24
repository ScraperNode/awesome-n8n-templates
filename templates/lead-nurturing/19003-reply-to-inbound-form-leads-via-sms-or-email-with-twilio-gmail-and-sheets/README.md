# 💬 Reply to inbound form leads via SMS or email with Twilio, Gmail and Sheets

> ⚡ **38 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow captures inbound leads from an n8n Form, instantly replies via Twilio SMS (or Gmail email if no phone is provided), alerts a sales rep by SMS, and logs every submission to Google Sheets with the received time and first contact method.

## How it works
1. Receives a new lead submission from an n8n Form with name, email, phone, and request details.
2. Loads configurable values like your business name, Twilio sending number, rep phone number, and the lead reply message.
3. Checks whether the submitted lead includes a phone number.
4. If a phone number is present, sends the lead an automated SMS reply via Twilio and texts the rep the lead details via Twilio.
5. If no phone number is present, sends the lead a confirmation email via Gmail.
6. Appends the lead details to a Google Sheets worksheet, including whether the first touch was SMS or email and the timestamp the lead was received.

## Setup
1. Add Twilio credentials, ensure you have a Twilio phone number capable of SMS, and set it as the sending number.
2. Add a Gmail credential for sending emails from the inbox you want to use.
3. Add a Google Sheets OAuth credential, replace the Google Sheet ID, and ensure a worksheet named “Leads” exists with columns matching the appended fields.
4. Update the configuration values for business name, rep phone number, and the SMS reply text to match your process.
5. Publish the n8n Form and embed or link it on your website so leads can submit it.

## 🔗 Nodes Used

Google Sheets, Twilio, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
