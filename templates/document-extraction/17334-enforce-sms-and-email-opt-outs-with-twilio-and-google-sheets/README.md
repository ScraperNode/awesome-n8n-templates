# 🔬 Enforce SMS and email opt-outs with Twilio and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow adds a reusable compliance layer for outbound SMS/email by checking a Google Sheets opt-out list, appending TCPA opt-out language, and writing an audit log, and it also receives inbound Twilio SMS STOP/UNSTOP messages to maintain the same opt-out list.

## How it works
1. Receives a compliance-check request from a parent n8n workflow via an Execute Sub-workflow trigger.
2. Loads firm settings from n8n Variables, validates the required inputs (channel, recipient, message, template ID), and reads the Opt-Outs tab from Google Sheets.
3. Checks whether the recipient phone number or email address is present in the opt-out list.
4. If the recipient is opted out, logs the suppression to the Audit Log tab in Google Sheets and returns `{ approved: false, message_out: '' }` to the caller.
5. If the recipient is not opted out, appends the appropriate SMS or email opt-out disclaimer, logs the approved message to the Audit Log tab in Google Sheets, and returns `{ approved: true, message_out }` to the caller.
6. Separately, receives inbound SMS via a Twilio webhook, classifies the message as STOP/UNSTOP/other, and updates the Opt-Outs tab by adding the sender on STOP, removing the sender on UNSTOP, or doing nothing for unrelated replies.

## Setup
1. Create a Google Sheet with two tabs named exactly `Opt-Outs` (phone, email, opted_out_at, source) and `Audit Log` (logged_at, template_id, matter_id, recipient, channel, message_preview, status).
2. Add Google Sheets OAuth2 credentials in n8n and ensure they have access to the compliance sheet.
3. Set n8n Variables for `OPS1_SHEET_ID` (the spreadsheet ID) and `FIRM_NAME` (used in the email footer).
4. In each outbound template workflow, add an Execute Sub-workflow step before sending and use the returned `approved` flag and `message_out` text.
5. Activate this workflow and configure your Twilio phone number’s “When a message comes in” webhook URL to point to the workflow’s production webhook endpoint.

## 🔗 Nodes Used

Google Sheets, Webhook, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
