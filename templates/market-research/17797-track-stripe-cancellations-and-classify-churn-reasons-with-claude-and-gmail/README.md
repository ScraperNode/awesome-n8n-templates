# 📊 Track Stripe cancellations and classify churn reasons with Claude and Gmail

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow tracks Stripe subscription cancellations, emails a one-question exit survey when no cancellation reason is available, categorizes the stated reason with Anthropic Claude, then notifies you via Gmail and logs each churn record to Google Sheets.

## How it works
1. Triggers when a Stripe subscription is cancelled and looks up the customer to capture email and any Stripe billing-portal cancellation feedback.
2. If Stripe already contains a cancellation reason, it skips the survey and proceeds with that reason; otherwise it sends the customer a Gmail message linking to an n8n Form exit survey.
3. Triggers again when the customer submits the n8n Form, and normalizes the survey response into the same churn record format.
4. Sends the captured reason text and account context to Anthropic Claude (via HTTP request) to classify the churn into a fixed category and decide if it is preventable and worth a human follow-up.
5. Emails you a structured churn note via Gmail, flagged by urgency based on the AI assessment.
6. Appends the churn details and category to a Google Sheets spreadsheet for ongoing reporting.

## Setup
1. Connect Stripe credentials and ensure the Stripe Trigger listens for the customer.subscription.deleted event.
2. Set an Anthropic API key as an environment variable named ANTHROPIC_API_KEY for the Claude HTTP request.
3. Connect Gmail credentials for sending the customer survey email and sending internal notifications.
4. Connect Google Sheets credentials and select the target spreadsheet and sheet for the churn log.
5. Update the configuration values for brand name, sender name, notification recipient, and paste the n8n Form Trigger production URL into the survey link field.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stripe Trigger, Gmail, Stripe, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
