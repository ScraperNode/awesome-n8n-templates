# 🎫 Classify and label new Gmail emails with OpenAI GPT-4.1 mini

> ⚡ **43 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow polls Gmail for new messages, uses OpenAI to classify each email into a category and priority with a short summary, and then applies matching Gmail labels (for example, AI/Urgent or AI/Sales Lead) when the labels exist in your account.

## How it works
1. Checks Gmail for new emails every minute.
2. Normalizes each email (sender, subject, truncated body, message ID) and prepares it for classification.
3. Sends the email content to OpenAI and receives a strict JSON result with category, priority, summary, whether a reply is needed, and a short reason.
4. Validates and parses the OpenAI output, falling back to the “other” category if the response is invalid.
5. Fetches all existing Gmail labels and maps each classified category (and optional priority) to a label ID using your configured prefix.
6. Adds the resolved label(s) to the Gmail message when the target label exists, and skips emails where the expected label is missing.

## Setup
1. Add a Gmail OAuth2 credential and connect it to the Gmail Trigger and Gmail nodes.
2. Add an OpenAI credential and connect it to the OpenAI classification node.
3. Create the Gmail labels the workflow expects (for example, AI/Urgent, AI/Sales Lead, AI/Support, AI/Billing, AI/Newsletter-Spam, and AI/Other) or update the label prefix and mappings to match your labels.
4. Update the Settings values (business name, OpenAI model, optional classification notes, and maximum body length) and optionally enable priority labels if you also create AI/Priority-High, AI/Priority-Medium, and AI/Priority-Low.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
