# 💬 Recover failed Stripe payments with GPT-4o, Gmail, Sheets, and Slack

> ⚡ **4 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow triggers on failed Stripe invoice payments, uses OpenAI to draft an escalating dunning email, sends it via Gmail, logs the outreach to Google Sheets, and notifies the billing team in Slack when the final attempt threshold is reached.

## How it works
1. Triggers when Stripe emits an `invoice.payment_failed` event.
2. Extracts and normalizes invoice details like customer email, amount due, currency, attempt count, and hosted invoice URL.
3. Uses OpenAI (GPT-4o-mini) to generate a structured dunning email subject and body that escalates tone based on the attempt number.
4. Sends the generated dunning email to the customer through Gmail.
5. Appends the email/send details to a Google Sheets spreadsheet for dunning tracking.
6. Checks whether the attempt count is 3 or higher and, if so, posts an escalation message to a Slack channel (for example, #billing).

## Setup
1. Connect Stripe credentials and ensure your Stripe account sends `invoice.payment_failed` events to the workflow.
2. Add an OpenAI credential for the Chat model used to draft the dunning email.
3. Add Gmail credentials and confirm the sending account is allowed to email your customers.
4. Add Google Sheets credentials, replace the spreadsheet ID in the Google Sheets node, and ensure a sheet/tab named "Dunning" exists.
5. Add Slack credentials and set the target channel (for example, #billing) for final-attempt escalation messages.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
