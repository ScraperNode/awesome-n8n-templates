# 🧾 Extract invoice data from Google Drive to Sheets with Mistral OCR and Gemini

> ⚡ **14,588 views** · 🧾 [Invoice Processing](../)

## Description

Extract data from any PDF or image invoice dropped in Google Drive directly into Google Sheets – powered by AI OCR. Free, fully modifiable n8n workflow. Optional add-ons for pro features.

🚀 What this template does

Stop typing invoice data by hand. Drop a PDF or phone-snapshot into your Invoices Inbox folder in Google Drive and this n8n workflow will:





Auto-OCR the document with the Mistral OCR API



Match any fields you list in Row 1 of your Google Sheet (totally schema-agnostic)



Append a clean, structured row – every time

Works with both PDFs and images, in any language supported by Mistral.

Template JSON included, ready to import into self-hosted or n8n Cloud

👀 Who’s this for?





Freelancers & agencies processing client invoices



Small finance teams on Google Workspace



Anyone self-hosting n8n who wants an AI OCR flow without glue-code

No coding skills required – but flow tweaking is possible for power users.

🛠 Upcoming PRO Add-Ons
I am also working on PRO add-ons for this template: 

Add-On #1 – Error Handling & Alerts (ships Jul 2025)• Flags missing fields, branches to Email/Slack notification; prevents silent failures



Add-On #2 – Auto-Currency Converter (ships Jul 2025)• Detects invoice currency symbol/code → converts Total into your base currency via a free FX API



Add-On #3 – VAT / GST Breakdown (ships Jul 2025)• Extracts VAT number, net, tax rate, tax amount, gross – ready for EU/UK/AU filings

To pre-order these please see: https://ysqander.gumroad.com/l/N8N-AI-Workflow-Invoice-Data-Extraction-LITE

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
