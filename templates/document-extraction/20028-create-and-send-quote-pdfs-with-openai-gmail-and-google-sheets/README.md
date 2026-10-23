# 🔬 Create and send quote PDFs with OpenAI, Gmail and Google Sheets

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow uses Gmail, Google Sheets, Google Drive, and OpenAI to turn incoming customer quote requests into draft offers, generate and email approved offers as PDFs, create and send supplier price inquiries, and evaluate and compare supplier replies.

## How it works
1. Triggers every minute when a new Gmail message arrives matching the configured search and loads the full email content and attachments.
2. Extracts the customer and project details (and, if present, reads PDF text from an attachment) using OpenAI, then creates a new offer draft row in Google Sheets with a generated offer number.
3. Triggers every minute on Google Sheets changes and, when an offer row is marked as FREIGEGEBEN, validates required fields, calculates totals/dates, and uses OpenAI to generate a German offer text.
4. Updates the offer row in Google Sheets, creates a Google Docs offer document in Google Drive, exports it to PDF, stores the PDF, and writes the PDF link back to the sheet.
5. Downloads the stored PDF and sends it to the customer via Gmail, then updates the offer status in Google Sheets to VERSENDET.
6. If the extracted email indicates a Leistungsverzeichnis, creates a supplier price inquiry draft in a separate Google Sheets tab and, once marked as FREIGEGEBEN, emails it to the wholesaler via Gmail and sets the inquiry status to VERSENDET.
7. Triggers on wholesaler email replies, uses OpenAI to extract structured pricing details, stores them in Google Sheets, and when at least two offers exist for the same inquiry, compares them with OpenAI and updates the records with a best-offer recommendation.

## Setup
1. Create and connect OAuth2 credentials for Gmail, Google Sheets (including Google Sheets Trigger), and Google Drive in n8n.
2. Add an OpenAI API credential and confirm the selected model (gpt-5-mini) is available for your account.
3. Prepare the Google Sheets file with the required tabs and columns (offers sheet plus “Haendleranfragen”, “Haendlerangebote”, and “Haendlervergleiche”), and update the spreadsheet and sheet IDs if you use different ones.
4. Configure the Gmail trigger searches (customer inquiries and wholesaler replies) and ensure the sender account has permission to send emails to customers and wholesalers.
5. Set the target Google Drive folder (or keep root) where the generated Google Docs and PDFs should be created and stored.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
