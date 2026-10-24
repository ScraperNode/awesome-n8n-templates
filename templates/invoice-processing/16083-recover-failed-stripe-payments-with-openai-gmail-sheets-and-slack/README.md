# 🧾 Recover failed Stripe payments with OpenAI, Gmail, Sheets and Slack

> ⚡ **24 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow triggers on failed Stripe invoice payments, uses OpenAI to generate an escalating dunning email, sends it through Gmail, logs the attempt to Google Sheets, and notifies the owner in Slack when the final reminder threshold is reached.

## How it works
1. Triggers when Stripe emits an `invoice.payment_failed` event.
2. Extracts and normalizes key invoice fields like customer email/name, amount due, currency, attempt count, and hosted invoice URL.
3. Uses OpenAI (GPT-4o-mini) to draft a structured dunning email with a subject and body that escalates tone based on the attempt number.
4. Sends the generated email to the customer via Gmail with the AI-produced subject and message.
5. Appends the email attempt details to a Google Sheets spreadsheet for tracking.
6. If the attempt count is 3 or higher, posts an escalation message to a designated Slack channel.

## Setup
1. Connect your Stripe account in the Stripe Trigger node so it can receive `invoice.payment_failed` events.
2. Add OpenAI credentials for the GPT-4o-mini chat model used to generate the dunning email content.
3. Add Gmail credentials and confirm the sending mailbox used by the Gmail node.
4. Add Google Sheets credentials and replace the placeholder spreadsheet URL/ID, ensuring a sheet named “Dunning” exists.
5. Add Slack credentials and set the target channel (for example, `#billing`) for final-attempt escalation messages.

## 🔗 Nodes Used

Google Sheets, Slack, Stripe Trigger, Gmail, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
