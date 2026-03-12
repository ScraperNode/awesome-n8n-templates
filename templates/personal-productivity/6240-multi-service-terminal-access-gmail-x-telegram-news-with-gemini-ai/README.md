# ⚡ Multi-service terminal: Access Gmail, X, Telegram & news with Gemini AI

> ⚡ **660 views** · ⚡ [Personal Productivity](../)

## Description

This workflow receives plain English instructions from a retro console via a webhook. Using an AI agent, it can combine multiple tools to read general RSS news headlines, stock market updates, emails, calendar events, search X, send Telegram messages, and run Linux commands. The idea is to avoid using smartphones or regular laptops in the morning, and instead use a retro console installed on an old notebook or netbook. You will need to copy a Python script onto the notebook, configure the webhook URL, and set up all the required credentials.

Steps: 
1. Setup Gemini API key, Google Gmail and Calendar credentials from console.google.com
2. Setup X credentials, RSS URL, etc
3. Obtain the webhook URL and paste into the Python code to be executed at the Linux machine
4. Run the python script with python3 console.py

Note: if you ask for a Linux command, the command will not only be returned but also executed.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
