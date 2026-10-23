# 🎣 Score and route website leads with Google Sheets and Gmail

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives website lead submissions via a webhook, normalizes inconsistent form fields, validates contact details, scores intent to assign an SLA and priority, logs every lead to Google Sheets, and routes hot and review leads to the right team via Gmail.

## How it works
1. Receives a POST request from a website form via a webhook endpoint.
2. Normalizes common lead fields (name, email, phone, company, message, budget, timeline, page URL, and source) into a consistent structure.
3. Rejects submissions missing a valid email address or phone number and returns a 400 JSON response explaining what’s required.
4. Scores the lead based on intent keywords and contact completeness, then assigns a priority (hot/review/normal) and an SLA bucket.
5. Generates a daily dedupe key and routing owner, then appends the lead and scoring metadata to a Google Sheets “Lead audit” tab.
6. Sends hot leads (score ≥ 70) to a sales inbox via Gmail or sends medium leads (score ≥ 40) to an ops review inbox via Gmail.
7. Returns a JSON webhook response containing the lead’s priority, score, SLA, and routing owner.

## Setup
1. Copy the webhook URL from n8n and configure your website/form tool to POST lead payloads to it.
2. Add Google Sheets credentials and replace `YOUR_SPREADSHEET_ID`, ensuring a sheet/tab named “Lead audit” exists with columns matching the fields being appended.
3. Add Gmail credentials and replace the placeholder recipient addresses (for example, `sales@example.com` and `ops-review@example.com`) with your real routing inboxes.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
