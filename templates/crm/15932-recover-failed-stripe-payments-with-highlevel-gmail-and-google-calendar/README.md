# 🤝 Recover failed Stripe payments with HighLevel, Gmail and Google Calendar

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow listens for Stripe payment failures, looks up the customer in HighLevel, logs or updates the failure in an n8n Data Table, and—when not recently automated—creates a Stripe coupon and emails it via Gmail while also creating HighLevel follow-up tasks and Google Calendar events.

## How it works
1. Triggers when Stripe reports an `invoice.payment_failed` or `payment_intent.payment_failed` event.
2. Searches HighLevel for a contact matching the Stripe receipt email and stops if no contact is found.
3. Looks up the customer’s record in an n8n Data Table by email, then either updates the existing row (including recalculating the 30-day failure count) or creates a new failure row.
4. Checks the Data Table flag to avoid repeating automation if the customer has been handled in the last 30 days.
5. For customers whose HighLevel custom field value is above the LTV threshold, creates a 5% off coupon in Stripe and sends the coupon code to the customer via Gmail, then marks the Data Table row as automated.
6. In parallel, fetches the customer’s existing HighLevel tasks and, if no recent incomplete task exists, creates a new HighLevel task for an account manager, schedules a Google Calendar event, and marks the Data Table row as automated.

## Setup
1. Connect your Stripe account credentials and ensure the Stripe trigger is enabled for `invoice.payment_failed` and `payment_intent.payment_failed` events.
2. Connect your HighLevel OAuth2 account, confirm contacts have an email address, and update the LTV custom field reference and threshold used to classify “high LTV” customers.
3. Create or select an n8n Data Table for payment failures and ensure it includes fields like Email, ContactID, FailureCount, StripePaymentIntentID, and `automated_in_last_30_days`, then update the Data Table ID in the workflow if needed.
4. Connect your Gmail OAuth2 credentials and adjust the recipient, subject, and email HTML template (including any links) to match your brand.
5. Connect your Google Calendar OAuth2 credentials, select the target calendar, and replace the placeholder account manager email and HighLevel assignee ID used for task assignment and event attendees.

## 🔗 Nodes Used

Stripe Trigger, Google Calendar, Gmail, Stripe, HighLevel, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
