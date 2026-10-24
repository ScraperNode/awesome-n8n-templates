# 🎫 Triage and label Gmail emails with OpenAI GPT-5.6 Terra

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Gmail for unread emails, uses an OpenAI Chat Model to classify each message by category and priority, then automatically applies the corresponding Gmail label (or moves it to spam) to keep a professional inbox organized.

## How it works
1. Checks Gmail every minute for unread emails.
2. Extracts key fields from each email (message ID, sender, subject, and plain-text body).
3. Sends the email content to an OpenAI Chat Model with instructions to return a strict JSON classification (category, priority, summary, and action flag).
4. Parses and validates the AI JSON response, falling back to a safe default classification if parsing fails.
5. Routes the email based on the chosen category.
6. Adds the matching Gmail label to the message, or applies Gmail’s SPAM label to move it to spam.

## Setup
1. Add a Gmail OAuth credential and select it for the Gmail Trigger and each Gmail action node.
2. Add an OpenAI credential and select it in the OpenAI Chat Model node.
3. Create the required Gmail labels (Urgent, Client, Prospect, Facture, Administration, Newsletter) and copy their label IDs.
4. Replace each `YOUR_GMAIL_LABEL_ID_...` placeholder with the real Gmail label ID for that category.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
