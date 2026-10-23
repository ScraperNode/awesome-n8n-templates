# 🔬 Assess visa eligibility and send PDF checklists with Claude and SendGrid

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives visa eligibility requests via webhook, uses Anthropic Claude to extract passport details and assess visa requirements, generates a purpose-specific document checklist, converts it to a PDF via PDFShift, logs each request to Google Sheets, and emails the PDF to the applicant using SendGrid.

## How it works
1. Receives a webhook POST with applicant details, travel plan, and raw passport OCR text.
2. Uses Anthropic Claude to extract and validate passport data (name, nationality, passport number, expiry) and scores whether the passport text is readable.
3. If passport data is insufficient, immediately returns a webhook response asking the applicant to resubmit a clearer passport scan.
4. If passport data is sufficient, waits briefly and uses Anthropic Claude again to determine whether a visa is required, the visa category, a recommended visa type, processing time, risks, and confidence.
5. Builds a document checklist from a standard base list plus purpose-specific items and any AI-flagged eligibility risks, then renders it into HTML.
6. Sends the HTML to PDFShift to generate a PDF, formats a summary row, and appends the application record to a Google Sheets tab.
7. Emails the applicant the assessment with the checklist PDF attached via SendGrid and returns the full assessment as JSON in the webhook response.

## Setup
1. Add an Anthropic API credential (Claude Sonnet) and connect it to both AI steps for passport extraction and visa rules assessment.
2. Configure an HTML-to-PDF provider by setting the PDFShift (or equivalent) API URL and replacing `YOUR_PDF_API_KEY` in the PDF generation request.
3. Configure SendGrid by replacing `YOUR_SENDGRID_API_KEY` and updating the sender email/name and any email content as needed.
4. Set up Google Sheets OAuth2 access and replace `YOUR_SHEET_ID`, then create a `VisaApplications` sheet/tab with columns matching the appended summary row.
5. Copy the webhook URL for `visa-eligibility-inbound` and send test POST requests that include `applicantName`, `applicantEmail`, `destinationCountry`, `travelPurpose`, `intendedArrivalDate`, `intendedStayDays`, and `passportOcrText`.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
