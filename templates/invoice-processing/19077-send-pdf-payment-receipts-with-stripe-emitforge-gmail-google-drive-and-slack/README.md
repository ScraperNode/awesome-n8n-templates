# 🧾 Send PDF payment receipts with Stripe, EmitForge, Gmail, Google Drive and Slack

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens for successful Stripe charges, generates a branded PDF receipt via EmitForge, then emails it to the customer with Gmail while optionally archiving the PDF to Google Drive and posting a confirmation message to Slack.

## How it works
1. Triggers when Stripe emits a `charge.succeeded` event.
2. Adds your company name, address, support email, and locale to the incoming charge data.
3. Converts the Stripe charge into receipt-ready fields (customer details, payment method label, formatted totals, and optional line items from `metadata.items`).
4. Stops processing if no customer email address is available on the charge.
5. Sends an HTML receipt template and data to EmitForge to render a PDF and then downloads the generated PDF file.
6. Emails the PDF receipt to the customer using Gmail and, in parallel, saves the same PDF to Google Drive.
7. Posts a one-line receipt sent confirmation to a Slack channel.

## Setup
1. Connect your Stripe account in the Stripe Trigger and ensure Stripe can deliver `charge.succeeded` events to your n8n instance.
2. Add a Gmail OAuth credential for sending email, and connect Google Drive and Slack credentials if you want archiving and notifications.
3. Create an HTTP Header Auth credential for the EmitForge PDF endpoint (for example, `Authorization: Bearer <API_KEY>`) and attach it to the PDF render request.
4. Update the company details (name, address, support email, and locale) used on the receipt.
5. Select the target Google Drive folder and Slack channel (or remove those steps if you don’t need them).

## Requirements
- Stripe and Gmail credentials (Google Drive and Slack are optional and can be removed)
- An API key for the PDF rendering endpoint (emitforge.com; free tier of 100 renders a month, no card)

## Customization
- Itemised receipts: set metadata.items on the Stripe charge as desc|qty|unit;desc|qty|unit and the Code node turns it into table rows
- React to payment_intent.succeeded instead: change the event in the Stripe Trigger; the Code node reads data.object the same way
- Use your own typeface: embed it as a data URI in the template; the renderer has one font installed (Open Sans) and any other family falls back to it

## Additional info
Uses only native nodes (Stripe Trigger, Set, Code, If, HTTP Request, Gmail, Google Drive, Slack), so it runs on n8n Cloud without installing anything. The receipt template sets thead { display: table-header-group } and tr { break-inside: avoid }, verified on a rendered three-page receipt with 55 lines: the column header repeats on every page and no line is split. Zero-decimal currencies such as JPY are formatted correctly. Charges without a customer email are stopped by the If node instead of failing in Gmail. The renderer has a single font installed (Open Sans); to use another typeface, embed it as a data URI.

## 🔗 Nodes Used

HTTP Request, Slack, Stripe Trigger, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
