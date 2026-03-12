# 🧾 Send Stripe expired charge recovery reminders with OpenAI

> ⚡ **54 views** · 🧾 [Invoice Processing](../)

## Description

## Stripe Invoice Reminder Workflow

### Who’s this for
Businesses using Stripe subscriptions or one-time payments who want to automatically follow up with customers after a failed payment.

### What this workflow does
- Detects expired or failed charges in Stripe
- Drafts AI-generated payment reminders for customers
- Creates a new Stripe invoice for the failed payment
- Optionally sends reminders via Email or Slack

### How it works
1. Stripe trigger listens for expired charges
2. Set node normalizes customer and payment information
3. OpenAI node drafts a friendly payment reminder
4. Stripe node creates a new invoice
5. Optional Email/Slack node sends the reminder

### How to set up
- Connect Stripe account and enable 'charge.expired' events
- Connect OpenAI API credentials
- Configure Email or Slack notifications if desired
- Optional: Customize AI prompt for company tone

### Requirements
- n8n account with Stripe integration
- OpenAI API key
- Optional Email/Slack integration

### How to customize
- Change AI prompt to fit brand voice
- Include dynamic invoice details or subscription links
- Add internal alerts for accounting teams
- Modify email templates or Slack messages

## 🔗 Nodes Used

Stripe Trigger, Gmail, Stripe, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
