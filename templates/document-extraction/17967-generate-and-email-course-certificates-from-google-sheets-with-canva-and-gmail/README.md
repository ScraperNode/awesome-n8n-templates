# 🔬 Generate and email course certificates from Google Sheets with Canva and Gmail

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Sheet for rows marked ready, generates a personalized certificate in Canva using a brand template, exports and downloads it as a PDF, then emails it to the recipient via Gmail and updates the sheet with the delivery status.

## How it works
1. Triggers when the `ready` column changes in the specified Google Sheets worksheet.
2. Checks whether the updated row has `ready` set to `YES` and ignores all other updates.
3. Formats configuration values (including normalizing the date) and uses Canva Data Autofill to create a certificate design from a Canva brand template.
4. Exports the generated Canva design as a PDF and downloads the file so it can be attached to an email.
5. Sends the PDF certificate to the recipient using Gmail, using the email address and course details from the sheet row.
6. Updates the Google Sheets row to `DONE`/`SENT` with the Canva design URL on success, or marks it as `ERROR` with the failure message if any step fails.

## Setup
1. Install and configure the community node `@canva/n8n-nodes-canva`, and ensure your Canva account is on Canva Enterprise with access to Data Autofill.
2. Create a Google Sheet with columns such as `ready`, `certificate_id`, `full_name`, `full_date`, `course_name`, `instructor_name`, `email`, `design_url`, and `status`, and set the trigger to watch the correct spreadsheet and sheet.
3. Create a Canva brand template that contains dataset fields matching `full_name`, `full_date`, `course_name`, and `instructor_name`, then paste the template ID into the workflow configuration.
4. Add Google Sheets and Gmail credentials in n8n, and confirm the Gmail node’s sender account is allowed to email your recipients.
5. Ensure `certificate_id` uniquely identifies each row so the workflow can update the correct record when writing back status and links.

## Requirements
- Canva Enterprise account (Data Autofill is Enterprise-only)
- The verified community node `@canva/n8n-nodes-canva` (officially provided by Canva)
- Gmail credentials

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
