# 🤖 AI-powered lead email classification & auto-reply with GPT-4o and Gmail

> ⚡ **1,768 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## How it works
This workflow automatically responds to incoming emails identified as potential leads using AI-generated text.  
It connects to your email inbox via IMAP, classifies incoming messages with an AI model, filters out non-leads, and sends a personalized reply to relevant messages.

## Steps
1. **Email Trigger (IMAP):** Watches your inbox for new emails in real time.
2. **Is Lead? (Message Model):** Uses AI to determine whether the sender is a lead.
3. **Filter:** Passes only lead emails to the next step.
4. **Write Customized Reply (Message Model):** Generates a personalized response using AI.
5. **Get Message:** Retrieves original email details to ensure correct threading.
6. **Reply to Message:** Sends the AI-generated reply to the sender.

## Setup Instructions
- Connect your **IMAP Email** credentials to the first node and set the folder to watch (e.g., INBOX).
- In the "Filter leads" node, adjust the AI prompt to match your lead qualification criteria.
- In the "Reply with customized message" node, edit the AI prompt to reflect your product, service, or business tone.
- Connect your **Gmail** (or other email provider) credentials in the Get Message and Reply to Message nodes.
- Test with a few sample emails before activating.

## Requirements
- IMAP-enabled email account (for receiving messages)
- Gmail API access (or modify to your email provider)
- OpenAI or other AI model credentials for message analysis and reply generation

This template is ready to use, with all steps documented inside sticky notes for easy customization.

## 🔗 Nodes Used

Email Trigger (IMAP), Gmail, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
