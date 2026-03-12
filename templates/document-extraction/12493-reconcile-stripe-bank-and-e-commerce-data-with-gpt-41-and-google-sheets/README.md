# 🔬 Reconcile Stripe, bank, and e-commerce data with GPT-4.1 and Google Sheets

> ⚡ **53 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates financial reconciliation by orchestrating multiple AI agents to detect mismatches, analyze root causes, and apply corrections across bank statements, invoices, and e-commerce platforms. Designed for finance teams, accountants, and business owners managing high transaction volumes, it eliminates manual reconciliation tedious work that typically consumes hours weekly. The system retrieves financial data from Stripe, banking APIs, and e-commerce platforms, then feeds it to specialized AI agents: one detects discrepancies using pattern recognition, another performs root cause analysis, and a third generates ledger corrections. An orchestrator agent coordinates these specialists, ensuring systematic processing. Results are logged to Google Sheets and trigger email notifications for critical issues, creating an audit trail while reducing reconciliation time from hours to minutes with 95%+ accuracy.

## Setup Steps
1. Configure Stripe API credentials in "Get Stripe Transactions" node
2. Add banking API authentication for "Get Bank Feed Data" node
3. Connect e-commerce platform (Shopify/WooCommerce) credentials  
4. Input NVIDIA API key for all OpenAI Model nodes
5. Set OpenAI API key in Orchestrator Agent
6. Configure Gmail credentials for notification node

## Prerequisites
NVIDIA API access, OpenAI API key, Stripe account
## Use Cases
Monthly financial close automation, daily transaction reconciliation
## Customization
Modify detection thresholds, add custom financial data sources
## Benefits
Reduces reconciliation time by 90%, eliminates manual data entry errors

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stripe, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
