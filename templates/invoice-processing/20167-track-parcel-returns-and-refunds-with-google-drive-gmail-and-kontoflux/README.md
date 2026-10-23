# 🧾 Track parcel returns and refunds with Google Drive, Gmail, and Kontoflux

> ⚡ **19 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow tracks return shipments and refunds by extracting data from scanned return receipts in Google Drive, enriching it via Gmail and Kontoflux, storing everything in an n8n Data Table, and then monitoring DHL delivery status and refund payments with daily follow-ups and approval-based reminder emails.

## How it works
1. Triggers when a new receipt scan file is created in a specific Google Drive folder.
2. Downloads the file, runs Mistral OCR to extract text, and uses an LLM to parse the carrier, tracking ID, recipient/shop name, and drop-off date.
3. Uses Gmail and the Kontoflux transactions API (via an LLM agent) to find the matching order confirmation, determine the expected refund amount and payment method split (bank vs PayPal balance), and creates a tracking row in an n8n Data Table with expected delivery and refund dates.
4. Every day at 08:00, reads overdue (not yet delivered) shipments from the Data Table and, for DHL/Deutsche Post tracking IDs, queries the DHL Tracking API and updates the Data Table and emails you a delivery notification when a shipment becomes delivered.
5. Every day at 08:00, reads overdue (not yet refunded) returns from the Data Table, searches for matching incoming credits in Kontoflux (bank and PayPal), and records any received amounts back to the Data Table.
6. If the refund fully matches what was originally paid (by channel), it requests approval by email to mark the return as refunded; otherwise it looks for refund announcements in Gmail, postpones the next check date, or drafts a friendly reminder (optionally using Firecrawl to find a service email address) and sends it after approval.

## Setup
1. Create an n8n Data Table with the required columns (carrier, tracking_id, recipient, amount, handed_over, expected_delivered_date, expected_refund_date, shipment_delivered, delivered_date, refunded, refund_status, friendly_reminder_sent_date, paid_paypal_balance, paid_bank, refunded_paypal_balance_amount, refunded_bank_amount) and set its ID in all Data Table nodes currently using `YOUR_DATA_TABLE_ID`.
2. Add credentials for Google Drive OAuth2, Gmail OAuth2 (for searching, approvals, and sending emails), and Mistral Cloud (OCR).
3. Provide API access for the DHL Tracking API (replace `YOUR_DHL_API_KEY`), Kontoflux (HTTP Header Auth plus `YOUR_KONTOFLUX_WORKSPACE_ID`), and Firecrawl API (for finding contact emails when needed).
4. Add an OpenAI-compatible LLM credential (used by the agents) and, if desired, an Anthropic-compatible credential for fallback models.
5. Replace placeholders such as `YOUR_GOOGLE_DRIVE_FOLDER_ID`, `your.email@example.com`, `YOUR-N8N-INSTANCE`, and the prompt variables like `[YOUR_NAME]`, `[YOUR_BANK]`, and `[YOUR_BANK_ACCOUNT_NAME]`.

## 🔗 Nodes Used

Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
