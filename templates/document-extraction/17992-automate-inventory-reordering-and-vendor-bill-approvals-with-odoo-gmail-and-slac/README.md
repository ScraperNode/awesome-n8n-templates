# 🔬 Automate inventory reordering and vendor bill approvals with Odoo, Gmail, and Slack

> ⚡ **51 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow automates two Odoo processes: a daily low-stock check that drafts purchase orders and emails vendors via Gmail, and an email-driven vendor bill intake flow that routes draft bills to Slack for approval before posting them in Odoo.

## How it works
1. Runs daily at 8:00 AM and fetches product records from Odoo to identify items that fall below the configured stock threshold.
2. If at least one low-stock product is returned, it looks up the product’s preferred vendor and vendor contact details in Odoo.
3. Creates a draft purchase order in Odoo for a fixed reorder quantity (20 units) and emails the vendor the draft PO details using Gmail.
4. Posts a Slack message to the #procurement channel with the drafted PO information, or posts a “no reorder needed” update when nothing is low.
5. Separately, polls Gmail every 5 minutes for unread emails with subjects matching “vendor bill” or “invoice” and extracts vendor name, amount, and reference from the subject line.
6. If the vendor matches an Odoo partner, it creates a draft vendor bill in Odoo and sends a Slack approval request to #finance-approvals that pauses until someone approves or declines.
7. When approved, it posts the vendor bill in Odoo; when declined or when the vendor is not recognized, it emails the submitter via Gmail with next steps.

## Setup
1. Add an Odoo API credential with permissions to read products/vendors and create purchase orders (purchase.order) and vendor bills (account.move).
2. Add a Gmail credential for both polling incoming vendor-bill emails and sending vendor/submitter notifications.
3. Add a Slack credential and ensure the channels #procurement, #finance-approvals, and #procurement-alerts exist (or update the channel selections).
4. Update the Odoo “low-stock” logic in the product query and adjust the reorder quantity (currently fixed at 20) and pricing fields to match your purchasing rules.
5. Standardize vendor-bill email subject lines to include fields like “Vendor: … | Amount: … | Ref: …” (or update the regex parsing rules accordingly).

## 🔗 Nodes Used

Slack, Gmail, Odoo, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
