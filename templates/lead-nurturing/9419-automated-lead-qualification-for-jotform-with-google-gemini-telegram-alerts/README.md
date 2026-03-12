# 💬 Automated lead qualification for JotForm with Google Gemini & Telegram alerts

> ⚡ **64 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Smart Lead Qualification for JotForm Contact Forms

Automatically classify and manage contact form submissions using AI-powered lead scoring. This workflow analyzes JotForm submissions in real-time, categorizes them as hot leads, cold leads, or spam, and takes intelligent actions—sending Telegram notifications for hot leads, ignoring irrelevant inquiries, and automatically deleting spam.

## Who's It For

This template is perfect for:
- **Businesses receiving high volumes of contact form submissions** who need to prioritize responses
- **Marketing and sales teams** wanting to focus on qualified leads immediately
- **Agencies and consultants** offering AI/automation services who want to filter out noise
- **Anyone struggling with spam** or low-quality form submissions

## What It Does

The workflow uses Google Gemini AI to intelligently classify each JotForm submission into three categories:

- **Hot Lead (1)**: Genuine inquiries about your services, collaboration requests, or project proposals → Sends Telegram notification + Flags in JotForm
- **Cold Lead (0)**: Legitimate but irrelevant inquiries (job applications, unrelated business queries) → No action taken
- **Garbage/Spam (2)**: Test submissions, bots, gibberish, or fake data → Automatically deleted from JotForm

## How It Works

1. JotForm trigger captures new contact form submissions
2. Submission data is extracted and formatted
3. Google Gemini AI analyzes the content and classifies the lead
4. A switch routes the submission based on classification:
   - Hot leads trigger Telegram notifications and get flagged
   - Cold leads are ignored
   - Spam submissions are automatically deleted

## Requirements

- **n8n instance** (cloud or self-hosted)
- **JotForm account** with a contact form ([Get JotForm here](https://www.jotform.com/?partner=roshanramanidev))
- **Google Gemini API key** (free tier available)
- **Telegram account** for notifications

## How to Set Up

**📋 Detailed setup instructions are included inside the workflow in sticky notes.**

Quick setup overview:
1. Create your contact form in JotForm using the "Contact Form with Fancy Header and Footer" template
2. Get your JotForm API key and form ID
3. Obtain a Google Gemini API key from Google AI Studio
4. Create a Telegram bot via @BotFather and get your chat ID
5. Configure all credentials in the respective nodes
6. Update the HTTP request nodes with your JotForm API key
7. Test the workflow with sample submissions

The workflow includes comprehensive sticky notes with step-by-step instructions, including how to get your Telegram chat ID and configure all integrations.

## How to Customize

- **Adjust classification criteria**: Modify the AI Agent's system prompt to match your business type and lead qualification criteria
- **Change notification format**: Edit the Telegram message template to include/exclude specific fields
- **Add more actions**: Extend hot lead handling with additional nodes (e.g., add to CRM, send email, create task)
- **Modify form fields**: Update field references if your JotForm uses different field names
- **Multi-channel notifications**: Add Slack, Discord, or email notifications alongside Telegram

## Note

All API keys and credentials shown in the workflow are placeholders. You'll need to replace them with your own credentials during setup.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Jotform Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
