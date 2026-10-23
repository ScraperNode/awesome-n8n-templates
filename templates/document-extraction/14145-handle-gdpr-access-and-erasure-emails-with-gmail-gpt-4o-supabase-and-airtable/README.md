# 🔬 Handle GDPR access and erasure emails with Gmail, GPT-4o, Supabase and Airtable

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🚀 How it works

  Handles GDPR Article 15 (access) and Article 17 (erasure) requests
  end-to-end — from inbound email to legally-compliant response — with
  zero manual intervention and a full audit trail.

  - 📬 Monitors Gmail inbox for incoming data subject requests
  - 🤖 AI Agent classifies the request (access or erasure), extracts the
    requester email and data subject email with structured JSON output
  - 🗄️  Queries Supabase for all personal data records matching the subject
  - 📋 Queries Airtable CRM for matching contact records
  - 📝 Second AI Agent compiles all found data into a GDPR-compliant HTML report
  - ✉️  **Access requests** — sends a full data report to the requester
  - 🗑️  **Erasure requests** — deletes records from both Supabase and Airtable,
    then sends a deletion confirmation
  - 🔒 Logs every request to Google Sheets with timestamp for your audit trail

  ## 🛠️  Set up steps

  **Estimated setup time: ~20 minutes**

  1. **Gmail Trigger** — connect Gmail OAuth2; point it at your DSR inbox
  2. **OpenAI** — connect OpenAI API credential (used by both AI Agent nodes)
  3. **Supabase** — connect Supabase API credential; update the table name from `users` to match your schema
  4. **Airtable** — connect Airtable Personal Access Token; replace `YOUR_BASE_ID` and `YOUR_TABLE_NAME`
  5. **Google Sheets** — connect Google Sheets OAuth2; replace `YOUR_AUDIT_SHEET_ID`; create a tab named `DSR Audit Log`
  6. Follow the sticky notes inside the workflow for per-node guidance

  ## 📋 Prerequisites

  - Gmail account receiving GDPR requests
  - OpenAI API key (GPT-4o)
  - Supabase project with a users/contacts table
  - Airtable base with a Contacts table containing an `Email` field
  - Google Sheets for audit log


## Custom Workflow Request with Personal Dashboard

kumar@smartflowcraft.com

https://www.smartflowcraft.com/contact

### More free templates
https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

Airtable, Google Sheets, Gmail, Supabase, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
