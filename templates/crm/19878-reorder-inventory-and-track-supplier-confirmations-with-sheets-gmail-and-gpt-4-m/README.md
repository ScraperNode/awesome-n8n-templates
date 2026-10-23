# 🤝 Reorder inventory and track supplier confirmations with Sheets, Gmail and GPT-4 Mini

> ⚡ **16 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow audits inventory and open purchase orders in Google Sheets, calculates reorder quantities based on measured demand and lead times, and emails purchase orders via Gmail with optional buyer approval; it also uses OpenAI to extract supplier confirmations from Gmail replies and updates the order pipeline.

## How it works
1. Runs every weekday morning on a schedule to start a replenishment run.
2. Reads Products, Stockouts, Sales, Purchase orders, Suppliers, and Reorder log tabs from Google Sheets and audits them to flag late deliveries, short receipts, and stock records that don’t reconcile.
3. Emails suppliers via Gmail to chase overdue/short deliveries and emails operations to investigate any stock discrepancies, while logging these actions back to the Reorder log in Google Sheets.
4. Calculates demand (excluding stockout days and sales spikes), measures supplier lead times from receipt history (or uses quoted lead time when history is thin), and builds one proposed purchase order per supplier.
5. Routes each proposed order to either send immediately, hold until a later run, or request buyer approval by email, and then logs the decision to the Reorder log.
6. When an order is sent, emails the supplier the purchase order and writes each order line into the Purchase orders tab in Google Sheets for tracking.
7. Polls Gmail for supplier replies, uses OpenAI to extract confirmed quantities/dates/prices from the new reply text only, reconciles the confirmation against the open order lines in Google Sheets, and either updates the order as confirmed or escalates at-risk changes to the buyer.

## Setup
1. Add credentials for Google Sheets, Gmail, and OpenAI (for the confirmation extraction step).
2. Create a Google Sheets file with tabs named Products, Sales, Stockouts, Purchase orders, Suppliers, and Reorder log, and ensure the columns used in the workflow (for example sku, supplier_name, on_hand, expected_on, ordered_on, received_on, unit_cost, and line_key) exist.
3. Update the sheet ID and the buyer/operations email addresses in both configuration steps (the replenishment policy and the confirmation rules).
4. Review and adjust replenishment thresholds (for example service level, cover targets, approval limit, late/price tolerances, and date format order) to match your inventory policy and locale.
5. Ensure supplier contact emails and ordering constraints (for example pack size, MOQ, minimum order value, order days, and quoted lead time) are populated in the Suppliers/Products tabs so orders can be generated and sent.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
