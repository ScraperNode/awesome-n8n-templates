# 💬 Sync two-way support conversations between Telegram and Zoho Desk

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow syncs Telegram bot conversations with Zoho Desk by creating or reusing contacts and tickets for incoming Telegram messages, and sending public Zoho Desk ticket comments back to the original Telegram chat using an n8n Data Table for user mapping.

## How it works
1. Triggers when a Telegram bot receives a new or edited message.
2. Normalizes the Telegram payload (message text, user ID, chat ID, and department ID) and upserts a Telegram↔Zoho Desk mapping in an n8n Data Table.
3. Creates a Zoho Desk contact when no contact is linked yet, then saves the Zoho Desk contact ID back to the Data Table.
4. Fetches the contact’s Zoho Desk tickets, selects an existing open ticket when available, otherwise creates a new ticket in the specified Zoho Desk department.
5. Appends the Telegram message to the Zoho Desk ticket as a private plain-text comment, marking edited messages as updates.
6. Receives Zoho Desk Ticket Comment Add/Update webhook events, looks up the related Telegram chat via the contact mapping, and ignores non-public comments or unknown contacts.
7. Retrieves the comment plain text from Zoho Desk and sends it to the user via Telegram.

## Setup
1. Create and connect Zoho Desk OAuth2 API credentials with scopes for contacts, tickets, and webhooks, and ensure all Zoho Desk API URLs use your correct data center domain (for example, .com vs .eu).
2. Create a Telegram bot with BotFather and add Telegram API credentials to both the Telegram Trigger and the “Send Agent Reply to Telegram” step.
3. Set your target Zoho Desk department ID in the input-normalization step so new tickets are created in the correct department.
4. Publish the workflow, then run the manual “Initial Setup” once to create the n8n Data Table and register the Zoho Desk webhook pointing to your workflow’s webhook URL.
5. In Zoho Desk, optionally disable email notifications for public comments if you don’t want contacts to receive email replies in addition to Telegram messages.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Telegram Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
