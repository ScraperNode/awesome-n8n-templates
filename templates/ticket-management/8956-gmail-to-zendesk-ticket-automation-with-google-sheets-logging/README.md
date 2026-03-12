# 🎫 Gmail to Zendesk ticket automation with Google Sheets logging

> ⚡ **98 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description

Turn incoming Gmail messages into Zendesk tickets and keep a synchronized log in Google Sheets. Uses Gmail as the trigger, creates Zendesk tickets, and appends or updates a central sheet for tracking. Gain a clean, auditable pipeline from inbox to support queue. ✨

## What This Template Does
- Fetches new emails via Gmail Trigger. ✉️
- Normalizes Gmail payload for consistent fields. 🧹
- Creates a Zendesk ticket from the email content. 🎫
- Formats data for Sheets and appends or updates a row. 📊
- Executes helper sub-workflows and writes logs for traceability. 🔁🧾

## Key Benefits
- Converts emails to actionable support tickets automatically. ⚡
- Maintains a single source of truth in Google Sheets. 📒
- Reduces manual triage and data entry. 🕒
- Improves accountability with structured logs. ✅

## Features
- Gmail Trigger for real-time intake. ⏱️
- Normalize Gmail Data for consistent fields. 🧩
- Create Zendesk Ticket (create: ticket). 🎟️
- Format Sheet Data for clean columns. 🧱
- Log to Google Sheets with appendOrUpdate. 🔄
- Execute workflow (sub-workflow) steps for modularity. 🧩

## Requirements
- n8n instance (cloud or self-hosted). 🛠️
- Gmail credentials configured in n8n (with read access to the monitored inbox). ✉️
- Zendesk credentials (API token or OAuth) with permission to create tickets. 🔐
- Google Sheets credentials with access to the target spreadsheet for append/update. 📊
- Access to any sub-workflows referenced by the Execute workflow nodes. 🔁

## Target Audience
- IT support and helpdesk teams managing email-based requests. 🖥️
- Ops teams needing auditable intake logs. 🧾
- Agencies and service providers converting client emails to tickets. 🤝
- Small teams standardizing email-to-ticket flows. 🧑‍💼

## Step-by-Step Setup Instructions 
- Connect Gmail, Zendesk, and Google Sheets in n8n Credentials. 🔑
- Set the Gmail Trigger to watch the desired label/inbox. 📨
- Map Zendesk fields (description) from normalized Gmail data. 🧭
- Point the Google Sheets node to your spreadsheet and confirm appendOrUpdate mode. 📄
- Assign credentials to all nodes, including any Execute workflow steps. 🔁
- Run once to test end-to-end; then activate the workflow. ✅

## 🔗 Nodes Used

Google Sheets, Zendesk, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
