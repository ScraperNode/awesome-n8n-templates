# 🧾 Send 80G receipts and CSR proposals with Razorpay, GPT-4o-mini, and Google

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow verifies Razorpay donation webhooks, generates sequential 80G receipt PDFs, and sends AI-written thank-you messages via Gmail and WhatsApp while logging donors in Google Sheets and alerting Slack, then drafts quarterly impact updates and CSR proposals using OpenAI, Google Drive, and Gotenberg.

## How it works
1. Receives a Razorpay `payment.captured` webhook, normalizes donor details from the payload, and ignores non-captured events.
2. Re-verifies the payment against the Razorpay Payments API, checks Google Sheets to deduplicate by payment ID, and computes the financial-year receipt number plus donor tier and flags.
3. If verification fails, posts a payment mismatch alert to Slack for manual review.
4. If the donation is valid, uses OpenAI (gpt-4o-mini) to write a personalized thank-you and builds an HTML 80G receipt that Gotenberg converts into a PDF.
5. Archives the receipt PDF to Google Drive, emails the thank-you and receipt via Gmail, and sends a WhatsApp thank-you message.
6. Appends the donation to a Google Sheets Donations ledger, upserts the donor record in a Donors sheet, and alerts Slack when a donor upgrades tiers or makes a major gift.
7. On a quarterly schedule (Jan/Apr/Jul/Oct), aggregates donation and Impact Metrics data from Google Sheets, uses OpenAI to draft an impact story, creates one Gmail draft per donor tier, and notifies Slack when the drafts are ready.
8. When a CSR enquiry form is submitted, matches the brief to programs in Google Sheets, uses OpenAI to generate a tailored CSR proposal, renders it to PDF with Gotenberg, archives it to Google Drive, creates a Gmail draft with the PDF attached, logs the lead to a CSR Pipeline sheet, and announces the lead in Slack.

## Setup
1. Configure Razorpay to send `payment.captured` webhooks to the workflow webhook URL and add Razorpay HTTP Basic Auth credentials (key ID and secret) in n8n.
2. Create and connect Google Sheets credentials, then replace `REPLACE_WITH_GOOGLE_SHEET_ID` and ensure the sheets named Donations, Donors, Impact Metrics, Programs, and CSR Pipeline exist with the expected columns.
3. Set up and connect Gmail, Slack, WhatsApp, and Google Drive credentials, then replace the Slack channel ID and the Drive folder IDs for receipts and CSR proposals.
4. Provide an OpenAI API credential and keep the model selection (gpt-4o-mini) or change it to your preferred model.
5. Run a reachable Gotenberg instance (and update the Gotenberg URL/host if needed) so the workflow can convert HTML to PDF.
6. Update NGO-specific details (80G/12A/CSR-1, PAN, address, signatory, impact unit examples) and the quarterly comms email address in the workflow’s code steps before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
