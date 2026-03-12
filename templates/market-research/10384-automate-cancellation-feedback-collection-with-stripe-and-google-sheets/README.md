# 📊 Automate cancellation feedback collection with Stripe and Google Sheets

> ⚡ **56 views** · 📊 [Market Research & Insights](../)

## Description

Who's it for
This template is perfect for any SaaS business or subscription service using Stripe. Product managers, customer success teams, and founders can use this to automatically collect cancellation feedback without manual follow-up. Ideal for companies looking to reduce churn by understanding why customers leave.
What it does
When a customer cancels their Stripe subscription, this workflow instantly:

Detects the cancellation via Stripe webhook
Fetches customer details from Stripe API
Sends a personalized feedback survey email with embedded customer information
Logs all cancellations to Google Sheets for tracking
Receives survey responses via webhook
Automatically routes feedback to different Google Sheets based on reason (pricing concerns, feature requests, or other feedback)

This organized approach helps you identify patterns in cancellations and prioritize improvements that matter most.
How it works

Stripe triggers the workflow when a subscription is canceled
Customer data is fetched from the Stripe API (email, name, plan details)
Personalized email is sent with a survey link containing customer data as URL parameters
Cancellation is logged to a Google Sheets "Cancellations" tab
When the customer submits the survey, a webhook receives the response
Feedback is routed to dedicated sheets based on cancellation reason:

Price Concerns → for pricing-related issues
Feature Requests → for missing functionality
Other Feedback → for everything else



Set up steps
Setup time: ~20 minutes
Prerequisites

Stripe account (test mode recommended for initial setup)
Google account with Google Sheets
Email service (Gmail, Outlook, or SMTP)
Survey tool with webhook support (Tally or Typeform recommended)

Configuration

Stripe webhook: Copy the webhook URL from the "Stripe Subscription Canceled" node and add it to your Stripe Dashboard → Webhooks. Select the customer.subscription.deleted event.
Email credentials: Configure Gmail, Outlook, or SMTP credentials in the "Send Feedback Survey Email" node. Update the fromEmail parameter.
Survey form: Create a survey form with these fields:

Hidden fields (auto-populated from URL): email, customer_id, name, plan
Visible fields: reason dropdown ("Too Expensive", "Missing Features", "Other"), comments textarea
Configure webhook to POST responses to the "Survey Response Webhook" URL


Google Sheets: Create a spreadsheet with 4 sheets: "Cancellations", "Price Concerns", "Feature Requests", and "Other Feedback". Connect your Google account in the Google Sheets nodes.
Survey URL: Replace [SURVEY_URL] in the email template with your actual survey form URL.
Test: Use Stripe test mode to trigger a test cancellation and verify the workflow executes correctly.

Requirements

Stripe account with API access
Google Sheets (free)
Email service: Gmail, Outlook, or SMTP server
Survey tool: Tally (free), Typeform (paid), or custom form with webhook capability
n8n instance: Cloud or self-hosted

How to customize

Different surveys by plan: Add an IF node after getting customer details to send different survey links based on subscription tier
Slack notifications: Add a Slack node after "Route by Feedback Type" to alert your team about price concerns in real-time
Delayed email: Insert a Wait node before sending the email to give customers a 24-hour cooldown period
CRM integration: Add nodes to sync cancellation data with your CRM (HubSpot, Salesforce, etc.)
Follow-up workflow: Create a separate workflow that triggers when feedback is received to send personalized follow-up offers
Custom routing logic: Modify the Switch node conditions to match your specific survey options or add more categories

Tips for success

Use Stripe test mode initially to avoid sending emails to real customers during setup
Customize the email tone to match your brand voice
Keep the survey short (2-3 questions max) for higher response rates
Review feedback weekly to identify patterns and prioritize improvements
Consider offering a discount or incentive for completing the survey

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Stripe Trigger, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
