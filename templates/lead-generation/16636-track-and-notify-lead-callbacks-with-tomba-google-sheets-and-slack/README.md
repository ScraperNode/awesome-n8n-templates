# 🎣 Track and notify lead callbacks with Tomba, Google Sheets, and Slack

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives new lead details via a webhook, looks up a company phone number with Tomba using the lead’s domain, updates a Google Sheets lead tracker, and sends a formatted callback alert to a Slack channel.

## How it works
1. Receives lead data in a POST webhook request.
2. Processes incoming leads in batches to handle multiple items safely.
3. Uses Tomba to find a phone number for each lead based on the provided company domain.
4. Formats the lead details and enrichment results into tracker fields and a Slack-ready message.
5. Updates the matching lead row in Google Sheets (matched by Domain) with the phone, status, and “Slack Notified” flag.
6. Posts the callback alert message to a selected Slack channel and continues until all leads in the batch are handled.

## Setup
1. Configure the source system to send lead payloads to the workflow’s webhook URL (path: `/GHL`) with fields like Full name, Email, Company name, and Company domain.
2. Add your Tomba API credentials to enable phone lookup by domain.
3. Connect your Google Sheets credentials and set the target spreadsheet and sheet, ensuring columns like Domain, Phone, Status, and Slack Notified exist.
4. Connect your Slack credentials and choose the channel ID where lead callback alerts should be posted.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
