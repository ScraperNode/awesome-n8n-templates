# 🎫 Draft Gmail reply drafts automatically with Google Gemini

> ⚡ **70 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches for new Gmail messages, uses Google Gemini to draft a concise reply based on the email content, and saves the response as a Gmail draft in the original thread for you to review before sending.

## How it works
1. Triggers every minute when a new email is received in Gmail.
2. Sends the email subject, sender, and snippet to Google Gemini with instructions to write a professional reply under 100 words matching the sender’s tone.
3. Creates a Gmail draft containing the generated reply and sets the subject to “Re:” while attaching it to the original email thread.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the trigger has access to the inbox you want to monitor.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model.
3. Review the reply prompt and the Gmail trigger polling interval, then activate the workflow. No additional setup is required the workflow is ready to run as soon as both credentials are connected.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
