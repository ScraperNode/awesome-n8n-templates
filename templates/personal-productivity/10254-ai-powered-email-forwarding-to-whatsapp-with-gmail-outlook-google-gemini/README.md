# ⚡ AI-powered email forwarding to WhatsApp with Gmail, Outlook & Google Gemini

> ⚡ **1,067 views** · ⚡ [Personal Productivity](../)

## Description

## Overview

Intelligent email-to-WhatsApp automation that monitors Gmail and Outlook accounts, uses Google Gemini AI to filter important emails, and forwards them to WhatsApp via Evolution API.

## Key Features

- Multi-account support (Gmail + 2 Outlook accounts)
- AI-powered email classification with Google Gemini
- Automatic Arabic translation for foreign emails
- Approved sender whitelist
- Security email prioritization (2FA, activations, passwords)
- Spam and promotion filtering
- Automatic mark-as-read
- Link extraction from emails

## Setup Requirements

**Services Needed:**
- n8n instance
- Gmail account with API access
- Microsoft Outlook account(s)
- Google Gemini API key (free tier available)
- Evolution API (self-hosted WhatsApp API)

**Credentials to Add:**
- Gmail OAuth2
- Microsoft Outlook OAuth2
- Google Gemini API
- Evolution API

## Configuration Steps

1. Import workflow
2. Add all credentials in n8n
3. Update WhatsApp numbers in all "Send" nodes (format: `number@s.whatsapp.net`)
4. Replace "YourInstanceName" with your Evolution API instance
5. Customize approved sender emails in AI Agent system prompts
6. Test and activate

## How It Works

Workflow monitors emails every minute, parses content with JavaScript, classifies importance with Google Gemini AI, extracts links, translates non-Arabic content, and sends formatted messages to WhatsApp.

## Use Cases

Perfect for professionals needing instant mobile notifications for critical emails while filtering spam and promotions.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger, AI Agent, Microsoft Outlook Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
