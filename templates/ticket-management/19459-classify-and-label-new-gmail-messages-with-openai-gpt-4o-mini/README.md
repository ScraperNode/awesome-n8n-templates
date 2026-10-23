# 🎫 Classify and label new Gmail messages with OpenAI GPT-4o-mini

> ⚡ **23 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow triggers on new Gmail messages, sends key email details to OpenAI for classification, parses the JSON result, and applies a matching Gmail label to each email based on the predicted category.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Sets the OpenAI model, a classification prompt, and a mapping of categories to Gmail label IDs.
3. Calls the OpenAI Chat Completions API with the email subject, sender, and a truncated body to classify the message.
4. Parses the JSON response to extract category, urgency, and a short summary, defaulting to “noise” if parsing fails.
5. Adds the corresponding Gmail label to the original email message based on the returned category.

## Setup
1. Connect your Gmail account credentials for both the Gmail trigger and the Gmail label action.
2. Add an OpenAI API key using HTTP Header Auth for the OpenAI Chat Completions request.
3. Create the target labels in Gmail, copy their label IDs, and replace the placeholder values in the category-to-label mapping.

## Additional info
This is the lite version. A fuller build adds a Google Sheets log of every email, AI-drafted replies to new enquiries, and instant alerts when something urgent lands, along with a step by step setup guide. Available at baynhams.gumroad.com/l/inbox-triage

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
