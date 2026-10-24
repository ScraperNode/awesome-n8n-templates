# 🎫 Label incoming Gmail emails with GPT-5 and Gmail labels

> ⚡ **45 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches for new Gmail messages, uses OpenAI to classify each email into a category, maps that category to a Gmail label ID, and then applies the matching label to the message automatically.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Sends the email sender, subject, and snippet to OpenAI and asks for exactly one category from the predefined list.
3. Maps the returned category to the corresponding Gmail label ID, falling back to a default label if the category is missing or unexpected.
4. Applies the selected label to the original Gmail message.

## Setup
1. Connect your Gmail OAuth2 credentials for the Gmail trigger and the Gmail label action.
2. Add your OpenAI API credentials and ensure the OpenAI Chat Model is set to the model you want to use.
3. Replace the placeholder values in the label taxonomy with your real Gmail label IDs (not label names), including a default label ID, and optionally update the category list to match your labeling scheme.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
