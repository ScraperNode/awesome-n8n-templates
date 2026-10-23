# 🔬 Label incoming Gmail messages with Google Gemini and Telegram alerts

> ⚡ **141 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls Gmail for new emails, uses Google Gemini via an n8n AI text classifier to categorize each message by subject and snippet, and automatically applies the matching Gmail label, sending a Telegram alert if classification errors occur.

## How it works
1. Checks Gmail every minute for new emails using the Gmail Trigger.
2. Sends the email subject and snippet to a Google Gemini-powered text classifier to assign a category (Personal, Job, Study Related, Bank, Social, OTP, or Misc).
3. Adds the corresponding Gmail label to the message in Gmail based on the predicted category.
4. Sends a Telegram message to the configured chat ID if the classifier step produces an error.

## Setup
1. Connect your Gmail account using Gmail OAuth2 and ensure the trigger has access to the mailbox you want to label.
2. Add a Google Gemini (PaLM) API key credential for the AI classification step.
3. Create (or choose) the target Gmail labels and replace the label IDs in each “addLabels” action with your own.
4. Add Telegram bot credentials and set the correct chat ID in the Telegram message step (or disable it if you don’t want error alerts).

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, Google Gemini Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
