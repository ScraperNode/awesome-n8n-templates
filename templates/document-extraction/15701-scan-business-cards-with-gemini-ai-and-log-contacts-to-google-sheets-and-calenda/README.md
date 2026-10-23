# 🔬 Scan business cards with Gemini AI and log contacts to Google Sheets and Calendar

> ⚡ **99 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

Small to medium businesses in Japan using a LINE Official Account for customer support. Ideal for retail shops, restaurants, salons, and service providers who want to reduce response times without hiring additional staff.

## What this workflow does

Receives customer messages from a LINE Official Account via webhook, classifies each inquiry into four categories (FAQ, product, complaint, or other) using Google Gemini AI, sends an appropriate auto-reply in Japanese through the LINE Reply API, escalates complaints via Gmail to a staff member, and logs every interaction to Google Sheets for tracking and analysis.

## How to set up

1. Create a LINE Official Account and enable the Messaging API
2. Set the webhook URL to your n8n endpoint shown in the trigger node
3. Create a Header Auth credential with your LINE Channel Access Token
4. Add your Google Gemini API key credential
5. Connect Google Sheets and Gmail OAuth2 credentials
6. Update the escalation email and business name in the Config Settings node

## Requirements

- LINE Official Account with Messaging API enabled
- Google Gemini API key (free tier available)
- Google Sheets and Gmail credentials

## How to customize

Edit the classification prompt to match your business type and common inquiries. Add more categories by extending the Switch node rules.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Calendar, Gmail, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
