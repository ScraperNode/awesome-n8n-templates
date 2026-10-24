# 🔬 Send PDF course certificates from Google Sheets with thirds.ai and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
When a learner is added to your sheet, this workflow fills a certificate design with their name, course and date, turns it into a PDF with thirds.ai and emails it to them with Gmail. No HTML to write.

## How it works
1. Triggers when a new row is added to your Google Sheets worksheet.
2. Sends the learner, course, date, and issuer data to the thirds.ai PDF API to start rendering a certificate, using an idempotency key based on the sheet row number and email.
3. Checks the thirds.ai render status and, if it is still queued or running, waits 3 seconds and polls the status again until it succeeds.
4. Downloads the completed certificate PDF from the download URL returned by thirds.ai.
5. Emails the PDF as an attachment to the learner using Gmail with a formatted subject and message.
6. Stops with an error if the thirds.ai job returns a non-success status that is not queued or running.

## Setup
1. Create a Google Sheet with columns for learner name, email, course, and date, and connect your Google Sheets account in n8n.
2. On thirds.ai, open the Portrait course certificate in the gallery, click Use this template, put your logo on it, and copy the Template ID (starts with tpl_). Paste it into the Make certificate PDF node and set your issuer name.
3. Create a thirds.ai API key and add it to n8n as an HTTP Header Auth credential with header name `Authorization` and value `Bearer YOUR_KEY`.
4. Connect your Gmail account in n8n and adjust the email subject/body text as needed.

## Requirements
- A thirds.ai account and API key. Each finished PDF uses one credit and a failed one costs nothing; a free account gets 50 credits a month. Google Sheets and Gmail accounts connected in n8n.

## Customization
- Self-hosted? You can use the thirds.ai community node instead of the HTTP Request nodes. Change the Gmail subject and body, or swap Gmail for another email node.

## Additional info
Guide: https://thirds.ai/integrations/n8n?utm_source=n8n&utm_medium=community&utm_campaign=own-content&utm_content=n8n-certificate-template

(Disclosure: I'm connected to thirds.ai.)

## 🔗 Nodes Used

HTTP Request, Gmail, Stop and Error, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
