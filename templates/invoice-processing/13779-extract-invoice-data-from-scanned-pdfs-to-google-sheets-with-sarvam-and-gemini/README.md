# 🧾 Extract invoice data from scanned PDFs to Google Sheets with Sarvam and Gemini

> ⚡ **72 views** · 🧾 [Invoice Processing](../)

## Description

### This template is designed for operations, finance, and accounting teams that need to automatically process scanned invoices and extract structured data without manual entry.

It is ideal for businesses handling vendor invoices, reimbursement forms, or bulk document intake.

### What this workflow does
This workflow uses Sarvam AI Vision model to perform OCR on scanned invoices and extract raw text. The extracted content is then processed using an LLM to identify key invoice fields such as:

* Vendor name
* Invoice number
* Invoice date
* Total amount
* GST / Tax amount

The structured data is automatically appended to Google Sheets for tracking, reconciliation, or downstream accounting automation.


### Requirements
* Sarvam Vision API key (configured using HTTP Header credentials)-(https://dashboard.sarvam.ai/key-management)
* Google Gemini API key (configured via Google Gemini credentials in n8n)
* Google Sheets OAuth credentials

### How to set up
1.) Add your Sarvam API key in Credentials.
2.) Connect your Google Sheets account.
3.) Update the target Sheet ID.
4.)Test with a sample invoice PDF.

### Need Help?
ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
