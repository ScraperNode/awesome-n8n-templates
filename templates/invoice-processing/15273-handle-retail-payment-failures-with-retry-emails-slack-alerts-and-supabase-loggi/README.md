# 🧾 Handle retail payment failures with retry emails, Slack alerts and Supabase logging

> ⚡ **27 views** · 🧾 [Invoice Processing](../)

## Description

# Retail Payment Failure Alerts with Retry Emails, Slack & Supabase

This n8n workflow automatically handles failed payment events from payment gateways such as Stripe, Shopify, PayPal or WooCommerce. It receives payment failure webhooks, standardizes the incoming data, identifies the reason for failure and classifies each case into:

- **Soft Failure** (temporary / retryable)
- **Hard Failure** (permanent / non-retryable)
- **Fraudulent Failure** (high-risk / suspicious)

Based on the classification, the workflow automatically:

- Sends internal Slack alerts
- Emails customers to retry failed payments
- Applies retry limits with wait delays
- Flags fraud cases instantly
- Stores all payment failures in Supabase

It helps businesses recover lost revenue, reduce manual payment support work and detect suspicious transactions early.

### Quick Implementation Steps

1. [Import this JSON workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Connect your payment provider webhook endpoint.
3. Add Slack API credentials.
4. Add Gmail credentials for customer retry emails.
5. Add Supabase credentials for failure logging.
6. Enable the workflow — done!

## What It Does

1. **Receives Payment Failure Events**
   - Accepts POST webhook requests when a payment fails.
   - Supports providers such as Stripe, Shopify, PayPal, WooCommerce or custom gateways.

2. **Normalizes Payment Data**
   - Extracts consistent fields such as:
     - `order_id`
     - `customer_email`
     - `customer_name`
     - `order_value`
     - `currency`
     - `failure_reason`
     - `retry_url`

3. **Classifies Failure Type**
   - Soft Failure → insufficient funds, timeout, temporary processor issues
   - Hard Failure → expired card, invalid card, permanent decline
   - Fraud Failure → stolen card, restricted card, suspicious activity

4. **Soft Failure Recovery Flow**
   - Sends Slack alert to internal team
   - Checks if order is high-value
   - Sends retry email to customer
   - Waits before next retry
   - Counts retry attempts
   - Stops after retry limit

5. **Hard Failure Handling**
   - Sends internal Slack notification
   - Logs failure for support / reporting

6. **Fraud Handling**
   - Sends urgent Slack fraud alert
   - Prevents retry flow
   - Logs suspicious payment event

7. **Supabase Logging**
   - Stores all failures with timestamp, customer email, retry count, order value, status and reason.

## Who It's For

This workflow is ideal for:

- Ecommerce stores handling online payments
- Subscription SaaS businesses
- Finance and billing teams
- Operations teams reducing payment support workload
- Businesses wanting failed payment recovery automation
- Teams using Slack + Gmail + Supabase + n8n

## Requirements

- [n8n account (Self-Hosted or Cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Payment provider capable of sending webhooks
- Slack Bot credentials
- Gmail OAuth credentials
- Supabase account + database table
- Basic understanding of payment failure events


## How It Works

1. **Webhook Trigger**
   - Workflow starts when a payment failure event is sent to the webhook endpoint.

2. **Normalize Data**
   - Extracts payment details from webhook payload.
   - Converts provider-specific fields into a unified structure.

3. **Failure Detection Logic**
   - Function node checks decline codes and error messages.
   - Categorizes failure into:
     - `soft`
     - `hard`
     - `fraud`

4. **Routing**
   - Soft failures go to retry recovery flow.
   - Fraud and hard failures go to separate alerting branches.

5. **Retry Recovery**
   - Slack notification sent.
   - High-value order check performed.
   - Customer receives retry payment email.
   - Wait timer delays repeated reminders.
   - Retry count increases.
   - Stops after 3 attempts.

6. **Fraud Handling**
   - Immediate Slack fraud alert.
   - Logs case in database.

7. **Hard Failure Handling**
   - Team notified.
   - Case logged in database.

8. **Database Logging**
   - All outcomes saved into Supabase.


## Setup Instructions

1. **Import Workflow** → Workflows → Import from File in n8n.
2. **Webhook Setup** → copy URL from Receive Payment Failure node.
3. **Payment Gateway Setup** → configure Stripe / Shopify / PayPal webhook to send failed payment events.
4. **Slack Credentials** → connect Slack account and choose alert channel.
5. **Gmail Credentials** → connect Gmail account for customer notifications.
6. **Supabase Setup** → connect Supabase and create `payment_failure` table.
7. **Configure Thresholds**
   - High-value order threshold = 500
   - Retry limit = 3
   - Wait delay = 2 minutes
8. **Test Workflow** using sample failed payments.
9. **Enable Workflow** once validated.

## Logic Overview

| Step | Node | Description |
|---|---|---|
| 1 | Webhook Trigger | Starts workflow on failed payment webhook |
| 2 | Normalize Data | Creates standard payment fields |
| 3 | Classify Failure | Detects soft, hard or fraud |
| 4 | Route by Type | Branches logic by failure category |
| 5 | Soft Alert | Sends internal Slack notification |
| 6 | High Value Check | Checks order amount ≥ threshold |
| 7 | Customer Retry Email | Emails payment retry link |
| 8 | Delay | Prevents excessive reminders |
| 9 | Increase Counter | Tracks retry attempts |
| 10 | Limit Check | Stops after max retries |
| 11 | Fraud Alert | Urgent suspicious payment alert |
| 12 | Hard Failure Alert | Standard non-retryable alert |
| 13 | Database Logging | Stores all results in Supabase |

## Customization Options

- **Webhook Node** → change endpoint path.
- **Failure Detection Logic** → add new decline codes from your payment provider.
- **Retry Limits** → increase or decrease retry attempts.
- **Wait Node** → modify delay between reminders.
- **High Value Threshold** → change 500 to your preferred value.
- **Slack Nodes** → route alerts by severity or department.
- **Email Template** → customize customer retry message.
- **Supabase Table** → add columns like gateway, country, payment method.

## Optional Enhancements

- SMS payment retry reminders
- Auto-create CRM support tickets
- Dashboard reporting
- Customer segmentation by payment risk
- AI fraud scoring
- Revenue recovery analytics
- Retry using alternate payment gateway

## Use Case Examples

1. Recover failed subscription renewals automatically.
2. Detect stolen card attempts in real time.
3. Notify customers when cards have insufficient funds.
4. Reduce abandoned orders caused by temporary payment issues.
5. Track failed payment trends across gateways.
6. Alert finance teams for high-value payment failures.

## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Workflow not receiving events | Webhook misconfigured | Verify webhook URL and provider settings |
| Customer email not sent | Gmail credentials expired | Reconnect Gmail OAuth |
| Slack alerts missing | Wrong channel ID or token | Update Slack credentials |
| Soft failures not classified | Missing decline codes | Update Identify Failure Type logic |
| Retry loop not stopping | Retry limit condition incorrect | Verify IF node logic |
| Supabase insert fails | Wrong table/credentials | Check database schema and credentials |
| Order value incorrect | Currency conversion issue | Review amount /100 logic |
| Fraud cases not flagged | New fraud codes missing | Add provider fraud decline codes |

## Need Help?

If you need help setting up, customizing or extending this workflow, WeblineIndia can assist with full [n8n workflow development](https://www.weblineindia.com/n8n-automation/), payment automation, revenue recovery systems, fraud monitoring, Slack integrations and custom business process automation.

## 🔗 Nodes Used

Function, Slack, Webhook, Gmail, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
