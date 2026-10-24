# 🧾 Send invoice approval requests to Slack using easybits Extractor

> ⚡ **11 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Upload an invoice (PDF, PNG, or JPEG) via a hosted web form. The file is sent to **easybits Extractor**, which extracts key invoice data (supplier, amount, date, etc.). Based on the amount, an approval tier is assigned. The invoice details are then posted to **Slack** with interactive Approve / Reject / Flag buttons.

## How It Works
1. **Form Upload** – A user uploads an invoice through the n8n web form
2. **Extraction via easybits** – The data URI is POSTed to the easybits Extractor, which returns structured invoice data
3. **Field Mapping** – Extracted fields are mapped + approval tier is calculated based on amount
4. **Slack Notification** – A message is posted to Slack with invoice details and interactive buttons

## Approval Tiers
- 🟢 **Standard:** &lt; €1,000
- 🟡 **Medium:** €1,000 – €5,000
- 🔴 **High:** &gt; €5,000

---

## Setup Guide

### 1. Create Your easybits Extractor Pipeline
1. Go to **extractor.easybits.tech** and create a new pipeline
2. Add the following fields to the mapping:
   - `vendor_name` – The supplier/company name on the invoice
   - `invoice_number` – The invoice reference number
   - `invoice_date` – The date on the invoice
   - `total_amount` – The total amount due (number only)
   - `customer_name` – The recipient/customer name
3. Copy your **Pipeline ID** and **API Key**

### 2. Connect the Nodes in n8n
1. Add the **easybits Extractor** node from the n8n community nodes
2. Enter your **Pipeline ID** and **API Key** as credentials
3. Create a **Slack API** credential using your Slack Bot Token and assign it to the Slack node
4. Update the Slack channel ID in the **Send to Slack for Approval** node to your target channel

### 3. Set Up the Slack App
1. Go to **api.slack.com/apps** and create a new app
2. Add Bot Token Scopes: `chat:write`, `chat:write.public`
3. Install the app to your workspace
4. Copy the **Bot User OAuth Token** (starts with `xoxb-`)
5. Enable **Interactivity** and set the Request URL to your approval handler webhook

### 4. Activate & Test
1. Click **Active** in the top-right corner of n8n
2. Open the form URL and upload a test invoice
3. Check Slack – you should see the approval message with buttons

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
