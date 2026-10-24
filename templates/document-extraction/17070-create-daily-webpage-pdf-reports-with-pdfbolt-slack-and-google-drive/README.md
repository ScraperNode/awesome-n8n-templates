# 🔬 Create daily webpage PDF reports with PDFBolt, Slack and Google Drive

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow creates a daily PDF report from a webpage URL with PDFBolt, posts it to Slack, and archives the same PDF in Google Drive.

## How it works
1. Runs every day at 08:00 on a scheduled trigger.
2. Sets the report date, webpage URL, report title, Slack message, and a dated PDF filename.
3. Converts the configured webpage URL into an A4 PDF with PDFBolt, using Network Idle so charts, images, and async content can finish loading.
4. Uploads the generated PDF to Slack with a title, filename, and initial comment.
5. Uploads the same PDF file to a selected Google Drive folder for storage.

## Setup
1. Add your PDFBolt API key from https://app.pdfbolt.com/api-keys in n8n.
2. Add a Slack OAuth2 connection and replace the Slack channel ID with your target channel.
3. Add a Google Drive OAuth2 connection and choose the destination Drive and folder for archived reports.
4. Update the report URL and report name values in the report settings code so they match the page you want to capture.

## Requirements
- PDFBolt account and API key
- Slack account connected in n8n
- Google Drive account connected in n8n

## Customization
- Change the report URL, report name, and PDF filename
- Choose a different Slack channel
- Choose a different Google Drive folder
- Adjust PDF options such as page format, landscape mode, or wait condition

## Additional info
PDFBolt returns the generated PDF as binary field data. Slack and Google Drive use that field for the file upload and archive, so keep the field name unchanged unless you also update those nodes.

## 🔗 Nodes Used

Slack, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
