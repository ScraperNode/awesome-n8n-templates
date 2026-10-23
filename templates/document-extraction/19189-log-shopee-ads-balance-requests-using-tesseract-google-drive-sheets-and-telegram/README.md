# 🔬 Log Shopee ads balance requests using Tesseract, Google Drive, Sheets, and Telegram

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Shopee ad top-ups without the screenshot chaos. This workflow collects Shopee Ads funding requests through a form, reads the payment proof with Tesseract OCR, stores it in Google Drive, logs everything in Google Sheets, and pings the admin on Telegram.

*Last updated: September 2026.*

## Quick overview
This workflow collects Shopee Ads funding requests via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, uses Tesseract OCR to extract payment details from an uploaded screenshot, stores the proof in Google Drive, logs the request in Google Sheets, and sends a Telegram notification to an admin chat.

## How it works
1. Receives a new submission from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form that includes brand, requester, and an uploaded screenshot.
2. Uses Tesseract OCR to read text from the uploaded screenshot.
3. Extracts and formats key fields (date, brand, requester, amount, and VA/bank account number) from the OCR text and flags the result for manual review when validation fails.
4. Uploads the screenshot proof to a specified Google Drive folder and captures the shareable file link.
5. Appends a new row to a Google Sheets log with the request details and the Google Drive proof link.
6. Sends a Telegram message to an admin chat with the channel, brand, requester, amount, VA/account number, and proof link.

## Setup
1. Configure the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form Trigger fields (brand, requester, channel, and file upload) to match your internal request process.
2. Set up Google Drive OAuth2 credentials and select the target Drive and folder ID where proofs should be uploaded.
3. Set up Google Sheets OAuth2 credentials and update the spreadsheet document ID and sheet tab where requests should be appended.
4. Set up Telegram bot credentials and update the target chat ID for admin notifications.

### Quick Answers
**What does the requester need to submit?**
Brand, requester name, channel, and the payment screenshot through the form.

**What happens if the screenshot cannot be read?**
The request is flagged for manual review instead of being logged silently.

**Where is the proof stored?**
The screenshot goes to Google Drive, and its shareable link is logged in Google Sheets and sent to Telegram.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Google Drive, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
