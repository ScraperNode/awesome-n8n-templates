# 🧾 Process and log Gmail invoices with GPT-4.1-mini, Google Sheets, and Drive

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily, fetches unread Gmail messages, uses OpenAI (GPT-4.1-mini) to classify and extract invoice/receipt fields (including PDF text), saves PDF attachments to Google Drive, logs invoices/receipts to Google Sheets, and emails a daily digest summary.

## How it works
1. Runs every day at 7 AM on a schedule.
2. Reads existing invoice rows from Google Sheets and fetches unread messages from Gmail.
3. Converts each email body to plain text, extracts text from the first attached PDF (when present), and merges it into a single analysis text.
4. Sends the combined email/PDF text to OpenAI (GPT-4.1-mini) to classify the message as invoice/receipt/other and extract structured fields.
5. Deduplicates invoices against existing Google Sheets entries, matches receipt emails to unpaid invoices, and decides whether to append new rows or update paid status.
6. Uploads PDF attachments to Google Drive (when required) and records the resulting file links.
7. Marks processed Gmail messages as read, applies a processed label, updates Google Sheets (append invoices/receipts or mark invoices paid), and sends a formatted daily digest email via Gmail.

## Setup
1. Add credentials for Gmail, Google Sheets, and Google Drive, and ensure the workflow has access to the mailbox, spreadsheet, and Drive folder you want to use.
2. Add an OpenAI credential for the OpenAI Chat Model node and confirm the AI model is connected to the extraction chain after importing.
3. Update the configuration values (digest recipient email, Google Sheets spreadsheet ID and sheet names, Google Drive folder ID/URL, and the Gmail processed label ID) in the configuration step before activating the workflow.

## Requirements
- Google account with access to Gmail, Google Sheets, and Google Drive
- OpenAI API key
- n8n self-hosted instance (not available on n8n cloud)
- LangChain/community nodes enabled
- Credentials for Google and OpenAI services
- Basic familiarity with n8n workflows

## Customization
- Change invoice field extraction model: Update the “AI Invoice Field Extraction” or GPT model node.
- Modify parsing logic for specific invoice formats: Edit the “Prepare Invoice Text” or “Parse Invoice JSON” code nodes.
- Adjust Google Sheets structure: Update sheet/tab name fields in configuration nodes.
- Change where files are uploaded: Alter “Build Upload Path for PDFs” and Drive ID configuration.
- Customize email digest contents: Edit the “Build Digest Email” code node.
- Switch invoice/receipt routing logic: Modify the “Route by Sheets Action” node logic.
- Localize labels or notifications: Modify Gmail label action and digest email formatting.

## Additional info
This workflow uses LangChain/community nodes and requires self-hosted n8n. For support, contact support@ais.email (AI Solutions, Inc.).

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
