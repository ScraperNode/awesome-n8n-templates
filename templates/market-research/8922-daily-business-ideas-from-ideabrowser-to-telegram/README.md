# 📊 Daily business ideas from IdeaBrowser to Telegram

> ⚡ **821 views** · 📊 [Market Research & Insights](../)

## Description

Transform your daily business inspiration routine by automatically receiving curated business ideas from IdeaBrowser directly in Telegram. This workflow scrapes the "Idea of the Day" content and delivers it to your Telegram chat with beautiful formatting and smart content handling.

## Description
This n8n workflow template automates the process of fetching and delivering daily business ideas from IdeaBrowser's "Idea of the Day" page to your Telegram chat. Perfect for entrepreneurs, business analysts, and innovation teams who want to stay updated with fresh business concepts without manual checking.

## Key Features:

Automated Daily Delivery: Runs every day at 9:00 AM to fetch the latest business idea

Smart Content Extraction: Uses advanced HTML parsing to extract title, description, pricing model, target market, and key features

Intelligent Message Formatting: Creates beautifully formatted Telegram messages with emojis and structured content

Message Length Handling: Automatically truncates long content to fit Telegram's character limits

Manual Testing: Includes a manual trigger for testing before scheduling

Error Resilience: Built-in error handling to ensure reliable operation

What Gets Delivered:

🚀 Daily business idea title with date

💡 Business description and concept

💰 Revenue model and pricing strategy

🎯 Target market analysis

⚡ Key features and benefits

## 🔗 Direct link to full details

## Prerequisites
Before using this template, ensure you have:

Telegram Bot: Create a bot using @BotFather on Telegram

Chat ID: Obtain your Telegram chat ID (use @userinfobot)

n8n Instance: Running n8n installation (cloud or self-hosted)

## Setup Instructions
Import the Workflow: Copy the JSON below and import it into your n8n instance

Configure Telegram Credentials:

Add your Telegram bot token in n8n credentials

Update the chat ID in both Telegram nodes

Test the Workflow: Use the "Manual Test Trigger" to verify everything works

Activate: Enable the workflow to start receiving daily ideas at 9:00 AM

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
