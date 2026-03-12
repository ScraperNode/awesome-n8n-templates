# 📱 Bulk WhatsApp & Gmail messenger with Google Sheets status tracking via InboxPlus

> ⚡ **187 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
This workflow sends WhatsApp messages and emails in bulk using contact data stored in Google Sheets. Contacts are processed in small batches to control throughput and avoid API rate limits. WhatsApp and email are treated as independent channels and are sent only when their status is marked as pending. All success and failure results are written back to Google Sheets to enable tracking, retries, and safe re-runs.

## Step-by-step
- **Step 1: Fetch contacts & batch processing**
  - **Manual Trigger** – Starts the workflow manually.
  - **Get Contacts** – Reads contact data from Google Sheets.
  - **Split In Batches** – Processes contacts in controlled batch sizes.

- **Step 2: Email preparation & sending**
  - **Has Email Address** – Checks whether the contact has an email address.
  - **IF Mail Pending** – Ensures the email is still marked as pending.
  - **PrepareEmail email** – Loads the selected InboxPlus email template.
  - **Build HTML Email** – Builds the final HTML email body.
  - **Fetch Email Image** – Downloads images for inline or attachment usage.
  - **Send Gmail** – Sends the email via Gmail.
  - **Delivered** – Confirms successful email delivery.

- **Step 3: WhatsApp message sending**
  - **Has Phone Number** – Checks whether the contact has a phone number.
  - **IF WhatsApp Pending** – Ensures the WhatsApp message is still pending.
  - **Send template** – Sends the approved WhatsApp template message.
  - **Sent** – Confirms message acceptance by WhatsApp.

- **Step 4: Delivery status updates**
  - **Update Sheet** – Writes successful delivery results back to Google Sheets.
  - **Mail Failure** – Updates Google Sheets if email delivery fails.
  - **Whatsapp Failure** – Updates Google Sheets if WhatsApp delivery fails.

## Why use this?
- Prevents duplicate messages with channel-level pending checks  
- Handles WhatsApp and email independently in one workflow  
- Supports safe retries without resending completed messages  
- Keeps Google Sheets as the single source of truth  
- Scales bulk outreach safely using batch-based execution

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
