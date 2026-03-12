# 🤖 Gmail assistant with Google Gemini classification & Telegram notifications

> ⚡ **329 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Who's it for

This template is designed for professionals, entrepreneurs, and busy individuals who receive high volumes of emails and want to automate their email management. Perfect for freelancers, small business owners, project managers, and anyone who struggles with email overload and wants AI-powered assistance for prioritizing and responding to messages.

## How it works

The workflow creates an intelligent email processing system that monitors your Gmail inbox in real-time and categorizes every incoming email using Google Gemini AI. Here's what happens:

**Real-time Processing**: Every minute, the system checks for new emails and uses AI to classify them into three categories:

- **Category 0 (Needs Reply)**: Questions, meeting requests, urgent business matters
- **Category 1 (Important Notifications)**: Bills, confirmations, system alerts, order updates  
- **Category 2 (Spam/Unimportant)**: Marketing emails, newsletters, promotional content

**Smart Response Generation**: For emails requiring replies, AI generates professional responses and sends them to your Telegram for approval. Once approved, the reply is automatically sent from your Gmail account.

**Instant Notifications**: Important emails get summarized and sent as quick Telegram notifications so you stay informed without checking email constantly.

**Daily Email Digest**: Every morning at 8 AM, you receive a comprehensive summary of the previous day's emails, including action items, issues requiring attention, and follow-up tasks.

## How to set up

**Step 1: Gmail Configuration**
- Connect your Gmail account using OAuth2 authentication
- Ensure Gmail API access is enabled in your Google Cloud Console

**Step 2: Telegram Setup**
- Create a new Telegram bot using @BotFather
- Get your bot token and personal chat ID
- Configure the Telegram credentials in n8n

**Step 3: AI Configuration**
- Set up Google Cloud account with Gemini API access
- Create API credentials for Google Palm/Gemini
- Add the credentials to your n8n instance

**Step 4: Workflow Customization**
- Update all Telegram chat IDs with your personal chat ID
- Configure the daily trigger schedule according to your timezone
- Test the workflow with sample emails

## Requirements

- **Gmail account** with API access enabled
- **Telegram bot** and personal chat ID  
- **Google Cloud account** with Gemini API access
- **n8n instance** (self-hosted or cloud)

All sensitive information like API keys, chat IDs, and email addresses should be configured using n8n's credential system rather than hardcoding them in the workflow.

## How to customize the workflow

**Modify Classification Logic**

Edit the AI Email Classifier node's system prompt to adjust how emails are categorized based on your specific industry or email patterns.

**Adjust Scheduling**

Change the Daily 8AM Trigger to your preferred time zone and schedule for receiving email summaries.

**Personalize Response Style**

Customize the AI reply generator's system prompt to match your communication style, tone, and professional voice.

**Enhance Filtering**

Add additional filtering logic to process emails from specific senders, domains, or with particular keywords differently.

**Extend Notifications**

Configure multiple Telegram chats for different types of notifications (personal vs work) or add other messaging platforms.

**Security Best Practices**

- Use n8n environment variables for sensitive configuration
- Store all credentials securely using n8n's credential management
- Avoid hardcoding personal information in node parameters
- Test thoroughly in a development environment before production use

The workflow is designed to be flexible and easily adaptable to different email management needs while maintaining security and privacy standards.

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
