# 🧾 Flag duplicate and risky AP invoices with Gmail, OpenAI and Supabase

> ⚡ **50 views** · 🧾 [Invoice Processing](../)

## Description

## 🚀 How it works

  Monitors your AP inbox for incoming invoices, extracts structured data
  with AI, runs duplicate and vendor history checks against Supabase, then
  scores each invoice for fraud risk — routing suspicious ones to Slack
  and your AP team before any payment is processed.

  - 📬 Gmail Trigger monitors your accounts payable inbox in real time
  - 🤖 AI Agent extracts invoice number, vendor, amount, currency, dates
    and line items into structured JSON — no manual data entry
  - 🔍 Checks Supabase for duplicate invoice numbers already in the system
  - 🏢 Checks vendor payment history — flags unknown vendors and amount
    deviations above 50% from the vendor's historical average
  - 🧠 Second AI Agent scores fraud risk: **low / medium / high / critical**
    with specific fraud indicators and a recommended action
  - 🚨 **High/critical risk** — posts a detailed Slack alert to `#invoice-alerts`
    and emails your AP manager with a hold notice
  - 🗄️  Logs every processed invoice to Supabase with risk score and status

  ## 🛠️  Set up steps

  **Estimated setup time: ~20 minutes**

  1. **Gmail Trigger** — connect Gmail OAuth2; point it at your AP inbox
  2. **OpenAI** — connect OpenAI API credential (used by both AI Agent nodes)
  3. **Supabase** — connect Supabase API credential; create two tables:
     `invoices` (invoice_number, vendor_name, amount, status, risk_level, created_at)
     and `vendors` (vendor_name, avg_amount, total_invoices, flagged)
  4. **Slack** — connect Slack OAuth2; update the channel name `#invoice-alerts`
  5. **Gmail (Send)** — connect Gmail OAuth2; replace `ap-manager@example.com`
  6. Follow the sticky notes inside the workflow for per-node guidance

  ## 📋 Prerequisites

  - Gmail account receiving invoices
  - OpenAI API key (GPT-4o)
  - Supabase project with `invoices` and `vendors` tables
  - Slack workspace with an alerts channel
## Custom Workflow Request with Personal Dashboard

kumar@smartflowcraft.com

https://www.smartflowcraft.com/contact

### More free templates
https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

Slack, Gmail, Supabase, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
