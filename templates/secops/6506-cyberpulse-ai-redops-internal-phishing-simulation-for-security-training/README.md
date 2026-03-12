# 🔒 CYBERPULSE AI RedOps: internal phishing simulation for security training

> ⚡ **123 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Description:

Simulate phishing awareness campaigns using OpenAI-generated emails. Send to target lists, log clicks with a webhook, and store results in Google Sheets. Built for internal testing and cyber awareness training.

## Who’s it for:

- Security teams conducting internal simulations
- GRC teams doing phishing awareness
- Red Teams wanting modular test setups

## How it works / What it does:

- Loads targets from Google Sheets
- Uses OpenAI to write realistic phishing emails
- Sends them via Gmail
- Tracks who clicked via webhook
- Logs actions in Sheets

## Requirements:

- Gmail or SMTP credentials
- Google Sheets OAuth2
- OpenAI API Key
- Self-hosted webhook or tunnel for /phishlink tracking

## How to customize:

- Replace email template with your own LLM prompt
- Swap Gmail for SendGrid, SES, etc.
- Edit domain in tracking link
- Use Cron or manual start

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
