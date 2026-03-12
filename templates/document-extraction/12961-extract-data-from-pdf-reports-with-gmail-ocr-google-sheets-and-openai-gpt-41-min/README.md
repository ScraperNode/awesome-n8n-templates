# 🔬 Extract data from PDF reports with Gmail, OCR, Google Sheets and OpenAI GPT-4.1-mini

> ⚡ **33 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who’s it for
Consultants, agencies, financial analysts, and project managers who regularly receive client PDFs, invoices, or reports.

## How it works / What it does
This n8n workflow automates PDF and report data extraction:
1. Triggers when a new PDF is uploaded to Google Drive, Dropbox, or received via email.
2. Uses OCR (PDF.co or Cloud OCR) to extract text from PDFs.
3. Parses key data fields using OpenAI or Regex:
   - Client Name
   - Project/Report Name
   - Dates
   - Financials / Metrics
4. Normalizes extracted data with a Set node for consistency.
5. Classifies document type (invoice, report, contract).
6. Routes data based on type:
   - Invoice → Update Google Sheets / QuickBooks / Xero
   - Report → Summarize metrics using AI
   - Contract → Notify relevant team members
7. Logs extracted data in Google Sheets.
8. Optional: Sends notifications via Slack or email.
9. Error handling included for unreadable or incomplete PDFs.
10. Includes logging for audit and tracking purposes.

## How to set up
1. Connect Google Drive, Dropbox, or Gmail for PDF input.
2. Configure OCR node for accurate text extraction.
3. Connect OpenAI API for parsing and summarizing key metrics.
4. Set up Google Sheets or accounting software to store extracted data.
5. Optional: Configure Slack or email notifications for summaries.
6. Test workflow with sample PDFs to ensure data extraction and routing works correctly.

## Requirements
- n8n account with integrations for Google Drive, Dropbox, Gmail, Sheets.
- OCR service (PDF.co or Cloud OCR).
- OpenAI API key for data parsing.

## How to customize
- Adjust AI parsing rules for your specific fields.
- Customize routing to different software (QuickBooks, Xero, Sheets).
- Add additional notifications or automation steps as needed.

---

**Created by Hyrum Hurst / QuarterSmart**  
**Keywords:** AI PDF extraction, report parsing automation, n8n workflow, invoice extraction, consultant workflow, QuarterSmart

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
