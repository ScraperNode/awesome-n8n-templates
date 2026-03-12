# 🔬 Multi-platform revenue reconciliation across Stripe, PayPal & bank with tax archive

> ⚡ **88 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates monthly revenue reconciliation across Stripe, PayPal, and bank statements by standardizing data formats, detecting discrepancies, and producing audit-ready reports. It concurrently retrieves revenue data from multiple sources, normalizes datasets into consistent structures, consolidates records, and reconciles transactions against bank statements with intelligent mismatch detection. The system aggregates monthly totals, generates detailed audit reports with clearly flagged discrepancies, archives finalized outputs to Google Drive, and notifies tax agents. Designed for accounting firms, finance teams, and businesses, it enables automated revenue verification, multi-channel reconciliation, discrepancy identification, and compliance audit documentation without manual record matching or error-prone spreadsheet workflows.

## Setup Steps
1. Configure Stripe, PayPal.
2. Set up normalization rules for date, currency, and transaction ID mappings.
3. Connect Google Drive for report archiving and Gmail for agent notifications.
4. Define mismatch thresholds and reconciliation tolerance parameters.

## Prerequisites
Stripe, PayPal, and bank statement accounts

## Use Cases
Accounting firms automating client revenue verification; multi-channel e-commerce businesses  

## Customization
Add additional payment sources (Square, Shopify), adjust normalization rules for regional formats 

## Benefits
Eliminates manual reconciliation, detects discrepancies automatically

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
