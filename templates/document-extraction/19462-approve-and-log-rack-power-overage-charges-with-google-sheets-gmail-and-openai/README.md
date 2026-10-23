# 🔬 Approve and log rack power overage charges with Google Sheets, Gmail and OpenAI

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives DCIM rack power alerts via webhook, looks up contracted kW allocations in Google Sheets, calculates tiered overage charges, drafts an explanation with OpenAI, and routes the charge through Gmail approval before committing it to a billing API and logging outcomes to Data Tables, Sheets, and Telegram.

## How it works
1. Receives a POST webhook alert from the DCIM system with customerId, rackId, and measured power usage.
2. Normalizes the incoming payload and looks up the customer’s contracted kW allocation in Google Sheets.
3. Calculates overage kW, applies a 5% grace band, and computes a tiered overage amount and rate.
4. If usage is within the grace band, records a no-charge outcome and continues to centralized logging.
5. If usage is billable, uses OpenAI to draft a factual invoice line-item explanation and emails it via Gmail for ops manager approval with approve/edit/reject options.
6. On approval, posts the charge to the billing API; on edit, applies the manager’s override amount and then posts; on rejection, logs a waiver and emails the customer that no charge applies.
7. Merges all outcomes, logs the final decision to an n8n Data Table and a Google Sheets ledger, and notifies finance in Telegram.

## Setup
1. Configure your DCIM/power monitoring system to send POST alerts to this workflow’s webhook URL at the /dcim-power-alert path.
2. Add Google Sheets OAuth credentials and ensure the “Colocation Contract Ledger” spreadsheet contains the customer allocation lookup data and an “Overage Billing Log” sheet for appends.
3. Add OpenAI API credentials for the gpt-4o-mini model used to draft the overage explanation.
4. Add Gmail OAuth credentials and update the ops manager recipient address and the customer billing-contact email pattern if needed.
5. Configure HTTP header authentication and replace the example billing API endpoint (https://api.billing.example.com/v1/charges) with your real billing system URL.
6. Add Telegram credentials and set the correct finance chat ID for the final notification.

## Requirements
- DCIM Webhook Access: Ability to send HTTP POST alerts from your DCIM/power monitoring software when a rack exceeds baseline kW.
- Credentials: Valid credentials for Google Sheets, Gmail, OpenAI API, and Telegram (or your chosen notification tool).
- Billing System API: An HTTP endpoint configured to accept and process approved charge payloads.

## Customization
- Alternative Alerts: Swap out the Telegram node for Slack, Teams, or an email digest if your finance team prefers a different channel.
- Multi-Tier Approval: Insert a secondary dollar-threshold check after the manager approval step to require Director sign-off on high-value overages.
- Adjustable Tariff Logic: Update the grace band percentage and tiered $/kW pricing inside the Compute Overage Amount & Billing Tier code node to match your customer contracts.
- Direct ERP Integration: Connect Commit Overage Charge directly to your accounting platform (like NetSuite or SAP) to automatically post billing adjustments.

## Additional info
Fault Tolerant: Safe fallback values prevent payload structure variations from breaking the execution, while 3x retries handle brief network drops.

Human-in-the-Loop Control: Charges are only billed after explicit approval; pending requests remain on hold without auto-charging.

Cost Efficient: The AI model uses a low temperature (0.2) to prevent hallucinations, firing only once per billable event (grace-period passes skip AI entirely).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
