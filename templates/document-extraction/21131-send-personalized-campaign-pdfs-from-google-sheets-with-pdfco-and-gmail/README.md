# 🔬 Send personalized campaign PDFs from Google Sheets with PDF.co and Gmail

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches for new rows in Google Sheets, uses PDF.co to render a personalized PDF from an HTML template and stamp a company logo, then downloads the finished file and emails it to the recipient via Gmail.

## How it works
1. Triggers every minute when a new row is added to a selected Google Sheets worksheet.
2. Sends the row values to PDF.co to generate a PDF from a saved HTML template using the row fields as template data.
3. Uses PDF.co to stamp a logo image onto the generated PDF at configured coordinates.
4. Downloads the finalized PDF file from the returned PDF.co URL as a binary attachment.
5. Sends the PDF as an email attachment via Gmail to the address in the row, using the row fields to compose the subject and message.

## Setup
1. Connect Google Sheets credentials and select the target spreadsheet and worksheet in the trigger.
2. Create the required header columns in your sheet (for example: customer_name, customer_email, campaign_title, campaign_subtitle, brand_color, hero_image, headline, body_text, cta_link, cta_text, footer_text, year, company_name).
3. Create and save an HTML template in PDF.co, then add your PDF.co credentials and paste the template ID into the PDF generation step.
4. In PDF.co logo stamping, provide a public HTTPS logo URL or a PDF.co filetoken:// reference and keep/adjust the stamp coordinates to match your template layout.
5. Connect Gmail credentials and confirm the email recipient mapping (customer_email) and attachment field before enabling automatic runs.

## 🔗 Nodes Used

HTTP Request, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
