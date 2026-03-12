# 🎫 Multilingual email auto-replies with DeepL, GPT-4o and Slack human approval

> ⚡ **57 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who's it for

Customer support teams, sales representatives, and international business professionals who need to handle multilingual email communication efficiently while maintaining quality control through human approval.

## How it works

This workflow automates email responses by:
1. **Monitoring Gmail** for emails with a specific label (e.g., "To_Process")
2. **Translating** the email content using DeepL to your preferred language
3. **Generating** an AI-powered summary and draft reply using OpenAI
4. **Requesting approval** via Slack with a summary and one-click approval link
5. **Sending the reply** only after human approval is received
6. **Removing the label** to prevent reprocessing

## Set up steps

Setup takes approximately 15-20 minutes:
1. Configure credentials for Gmail, DeepL, OpenAI, and Slack
2. Create a Gmail label for emails to process
3. Update the Slack channel ID in the configuration node
4. Ensure n8n is accessible via webhook (tunnel or production mode required)

## Requirements

- Gmail account with OAuth2 authentication
- DeepL API key (free tier available)
- OpenAI API key
- Slack workspace with OAuth2 app configured
- n8n instance accessible via webhook URL

## How to customize the workflow

- **Change translation language**: Modify the DeepL node's target language
- **Adjust AI model**: Switch between GPT-4 or GPT-3.5 in the OpenAI node
- **Customize approval message**: Edit the Slack message format
- **Add multiple languages**: Duplicate the translation node for multi-language support
- **Filter specific senders**: Add conditions to process only certain email addresses

## 🔗 Nodes Used

Slack, Gmail, DeepL, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
