# 🎫 Triage support tickets into SLA queues via webhook, Gmail and Google Sheets

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives support tickets via a webhook, classifies them into a category and priority using simple keyword rules, calculates an SLA target, and returns a structured triage payload (including a reply draft) as a JSON response.

## How it works
1. Receives a POST request on a webhook endpoint containing a support ticket (for example, subject, message, requester, and account).
2. Parses the incoming ticket content and uses keyword matching to classify it as billing, technical issue, sales question, or general support.
3. Assigns a priority (high/medium/normal), calculates an SLA in hours, and generates a recommended next step and reply draft.
4. Returns the triage fields as a JSON response to the original webhook request.

## Setup
1. Activate the workflow and copy the production webhook URL.
2. Configure your support form or ticketing source to send a POST request to the webhook URL with fields like subject and message (and optionally requester/email and account/company).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
