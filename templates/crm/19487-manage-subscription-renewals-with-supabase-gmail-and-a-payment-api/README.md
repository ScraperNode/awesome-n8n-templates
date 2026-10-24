# 🤝 Manage subscription renewals with Supabase, Gmail, and a payment API

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to check subscription records in Supabase, email renewal reminders via Gmail for subscriptions expiring within three days, post payment details to an HTTP API, and then update the subscription and send either a renewal confirmation or a payment failure email.

## How it works
1. Runs every day at 09:00 using a schedule trigger.
2. Gets the current date/time and fetches all records from the Supabase `subscriptions` table.
3. Filters to subscriptions with `status` set to `active` and whose `end_date` falls between now and the next three days.
4. Sends a renewal reminder email to the subscription owner using Gmail.
5. Sends the subscription and payment identifiers to an external HTTP endpoint for payment processing and flags the response as successful when an `id` is present.
6. If the payment response indicates success, updates the Supabase subscription record with `active` status, a new start/end date, and `last_payment_date`, then emails a renewal confirmation via Gmail.
7. If the payment response indicates failure, emails the customer a payment failure notice via Gmail.

## Setup
1. Add a Supabase credential and ensure the `subscriptions` table exists with fields used by the workflow (for example `subscription_id`, `user_id`, `email`, `status`, `start_date`, `end_date`, `last_payment_date`, and any payment ID fields).
2. Add a Gmail credential that has permission to send emails from your account.
3. Replace the HTTP Request URL with your real payment processing endpoint and adjust the JSON payload fields to match your API contract.
4. Confirm the schedule trigger time (09:00) and adjust it to your desired timezone and run time.

## Additional info
## How To Customize Nodes  

You can easily customize this workflow based on your business requirements:

- **Schedule Trigger**: Change execution frequency.
- **Subscription Expiry Logic**: Adjust the expiry window from 3 days to any custom duration.
- **Payment API**: Replace the placeholder API with Stripe, PayPal, Razorpay, or custom gateways.
- **Email Templates**: Customize reminder, success, and failure email designs.
- **Renewal Duration**: Change renewal logic from monthly to yearly subscriptions.
- **Supabase Schema**: Add custom fields like plan type, billing cycle, or payment status.


## Add-ons (Extend the Workflow)  

You can enhance this workflow with:
- Stripe or PayPal direct integration
- SMS notifications using Twilio
- WhatsApp renewal reminders
- Subscription analytics dashboard
- Google Sheets logging
- Failed payment retry mechanism
- Auto-cancel expired subscriptions
- Webhook integrations for CRM systems


## Use Case Examples  

Primary use cases include:
1. SaaS subscription renewal automation
2. Membership expiration management
3. Automated recurring billing reminders
4. Subscription lifecycle tracking
5. Reducing churn through proactive notifications
6. Automating payment follow-ups


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|---|---|---|
| No emails sent | Gmail credentials disconnected | Reconnect Gmail OAuth2 |
| Payment API fails | Invalid API endpoint or payload | Verify API URL and request body |
| Subscriptions not updating | Supabase permissions issue | Check API roles and table access |
| Workflow not triggering | Schedule disabled | Activate workflow |
| Incorrect expiry filtering | Date format mismatch | Ensure timestamps use ISO format |


## Need Help?  

**WeblineIndia** specializes in building advanced n8n automations, WooCommerce integrations and end-to-end business process workflows. If you need enhancements, add-ons or a completely custom automation solution, our n8n experts at WeblineIndia are happy to help.

👉 [**Contact WeblineIndia**](https://www.weblineindia.com/contact-us.html) to get started with smarter automation today.

## 🔗 Nodes Used

HTTP Request, Gmail, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
