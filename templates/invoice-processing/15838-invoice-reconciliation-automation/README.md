# 🧾 Invoice Reconciliation Automation

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

How it works

Watches a Google Drive folder and triggers automatically when a new invoice PDF is uploaded
Extracts raw text from the PDF and passes each invoice through an OpenAI powered agent that returns structured fields like vendor, amount, due date, and line items
Fans the enriched data to three parallel outputs: a Google Sheets log, a Slack alert for overdue invoices, and a weekly summary email to Finance via Gmail

Set up steps

Connect Google Drive, Google Sheets, Gmail, Slack, and OpenAI credentials (~15 minutes total)
Works best with text based PDFs; scanned invoices need OCR upstream of the extraction step
Keep full setup details and prompt tuning tips in the sticky notes inside the workflow![inv.png](1)

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
