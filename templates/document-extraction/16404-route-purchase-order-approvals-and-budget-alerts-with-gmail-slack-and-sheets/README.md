# 🔬 Route purchase order approvals and budget alerts with Gmail, Slack and Sheets

> ⚡ **43 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives purchase order requests via webhook, validates and enriches them, emails the correct approver through Gmail based on spend tier, checks department budgets in Google Sheets, sends budget warnings to Slack, logs each PO to a tracker sheet, and confirms submission to the requester.

## How it works
1. Receives a purchase order submission via a POST webhook endpoint.
2. Parses the incoming payload, extracts key fields (vendor, amount, department, requester details), and rejects invalid submissions with a Slack message to the finance channel.
3. Generates a PO ID, classifies urgency and approval tier, and selects the appropriate approver and SLA based on the PO amount.
4. Sends an approval request email through Gmail to the assigned approver (low, mid, or high tier).
5. Looks up the submitting department’s current spend and monthly cap in Google Sheets and checks whether the PO would push usage to 80% or more.
6. Posts a Slack budget-breach warning when the threshold is exceeded, then appends the PO details to a Google Sheets “PO Tracker” sheet and emails a confirmation to the requester via Gmail.

## Setup
1. Configure your source form or internal system to POST to the workflow’s webhook URL at `finance/purchase-order`.
2. Add Gmail credentials and confirm the sender account used for approver emails and requester confirmations.
3. Add Google Sheets credentials, replace `YOUR_GOOGLE_SHEET_ID`, and ensure the “PO Tracker” sheet has columns matching the fields the workflow appends (for example PO ID, Amount, Department, Status, Approver, and SLA).
4. Ensure the budget sheet used by the Google Sheets lookup contains department rows with at least `Monthly Cap` and `Current Spend` fields and that the lookup is configured to match your department value.
5. Add Slack credentials, replace `YOUR_FINANCE_SLACK_CHANNEL_ID`, and select the channel that should receive invalid-submission and budget-breach alerts.
6. Update the hardcoded approver emails, names, and amount thresholds in the classification step to match your organization’s approval policy.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
