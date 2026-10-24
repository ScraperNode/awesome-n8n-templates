# 🧾 Log invoice approval decisions from Slack to Google Sheets

> ⚡ **23 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Listens for button clicks from the **Invoice → Slack Approval** workflow. When someone clicks Approve, Reject, or Flag on an invoice in Slack, this workflow captures that decision, logs it to **Google Sheets**, and sends a confirmation notification.

## How It Works
1. **Webhook Trigger** – Receives POST request from Slack when a button is clicked
2. **Parse Payload** – Extracts the JSON payload from Slack's request body
3. **Extract Decision Data** – Pulls decision, user info, and invoice details from the message
4. **Route by Decision** – Branches to Approved, Rejected, or Flagged path
5. **Log to Sheets** – Appends invoice data to the appropriate sheet tab
6. **Notify via Slack** – Sends confirmation DM to the approver

## Decision Routes
- ✅ **Approved** → Logs to "Approved" sheet → DM confirmation
- ❌ **Rejected** → Logs to "Rejected" sheet → DM confirmation
- 🚩 **Flagged** → Logs to "Flagged" sheet → DM for manual review

---

## Setup Guide

### 1. Create Google Sheet
1. Create a new Google Sheet with 3 tabs: `Approved`, `Rejected`, `Flagged`
2. Add these column headers to each tab:
   - Supplier Name
   - Invoice Number
   - Amount
   - Date
3. Copy the **Sheet ID** from the URL

### 2. Connect the Nodes in n8n
1. Add your **Google Sheets OAuth2** credential to all three logging nodes
2. Update the **Document ID** in each Google Sheets node to your Sheet ID
3. Add your **Slack API** credential to all three notification nodes
4. Update the **User ID** in the notification nodes (or change to channel)

### 3. Configure Slack Interactivity
1. Go to **api.slack.com/apps** → your app → **Interactivity & Shortcuts**
2. Set the Request URL to this workflow's webhook URL
3. Save Changes

### 4. Activate & Test
1. Click **Active** in the top-right corner of n8n
2. Trigger the Invoice Approval workflow to send a Slack message
3. Click a button in Slack
4. Check Google Sheets and Slack for results

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
