# 🔬 Track purchase order delivery status and amount variances with GoHighLevel

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives GoHighLevel Purchase Order update webhooks, calculates a delivery status and amount variance from the record’s dates, billing status, and amounts, writes the results back to the Purchase Order custom object, and sends a finance email alert when the variance is positive.

## How it works
1. Receives a POST webhook from GoHighLevel when a Purchase Order custom object record is updated.
2. Extracts the Purchase Order record ID plus delivery confirmation date, put-away date, financial billing status, PO amount, and bill invoice amount from the webhook payload.
3. Calculates the delivery status based on which dates are present and whether the financial billing status is set to `authorised`, and calculates the amount variance from the PO and bill amounts.
4. Updates the GoHighLevel Purchase Order custom object record with the calculated `delivery_status` and `amount_variance` values via the LeadConnector API.
5. If the amount variance is greater than 0, sends an email message to the finance address via the GoHighLevel Conversations API including the PO ID, PO amount, bill amount, and variance.

## Setup
1. In GoHighLevel, configure your automation/workflow to POST Purchase Order updates to this n8n webhook URL.
2. Replace `YOUR_GHL_API_TOKEN` with a GoHighLevel Private Integration Token in both HTTP request steps.
3. Replace `YOUR_GHL_LOCATION_ID` in the Purchase Order update request body with your GoHighLevel location ID.
4. Update the finance recipient details in the notification request (for example, replace `finance@yourcompany.com` with your real finance email address).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
