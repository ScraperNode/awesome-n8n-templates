# 🤝 Forecast stockouts and draft purchase orders with Gemini, Sheets, Slack and Gmail

> ⚡ **58 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every morning to read inventory from Google Sheets, calculate days of cover and reorder suggestions, and use Google Gemini to draft a purchase recommendation. It alerts Slack and creates Gmail drafts for stockout risks, emails the buyer for low stock, and writes status fields back to Sheets.

## How it works
1. Runs daily at 7:00 to start an inventory check.
2. Reads the Inventory sheet from Google Sheets.
3. Calculates daily sales velocity, days of cover, a lead-time-based reorder point, and a suggested order quantity, and skips items alerted in the last three days.
4. Uses Google Gemini to generate a short, plain-language purchase recommendation for each item that needs attention.
5. Routes items by status, sending stockout risks to Slack and drafting a supplier purchase-order email in Gmail.
6. Emails the buyer for low-stock items using the generated recommendation text.
7. Appends or updates the Inventory sheet in Google Sheets with the latest cover, reorder point, suggested quantity, and status.

## Setup
1. Connect credentials for Google Sheets, Google Gemini (PaLM) API, Gmail, and Slack.
2. In Google Sheets, create/select an Inventory sheet with columns: SKU, Product, Stock On Hand, Weekly Sales, Lead Time Days, Unit Cost, Supplier, Supplier Email, and Last Alert.
3. Select the correct spreadsheet and sheet in the Google Sheets nodes, choose the target Slack channel, and update the buyer email address in the Gmail low-stock email action.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
