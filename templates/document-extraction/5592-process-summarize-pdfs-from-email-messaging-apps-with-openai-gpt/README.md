# 🔬 Process & summarize PDFs from email & messaging apps with OpenAI GPT

> ⚡ **527 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Process PDFs from Gmail, Outlook, Telegram and WhatsApp with OpenAI

Transform PDF documents into actionable insights automatically across multiple platforms. This workflow monitors emails and messaging platforms for PDF attachments, extracts content, and delivers AI-powered summaries.

## Who's it for

Business professionals, teams, and organizations needing automated PDF analysis from emails and messaging platforms. Perfect for processing contracts, reports, invoices, and documents requiring quick review.

## How it works

Monitors Gmail and Outlook for PDF attachments while receiving PDFs via Telegram bot and WhatsApp Business API. Uses OpenAI to extract text and generate structured summaries with executive overviews, key points, important details, insights, and document type identification. Automatically routes summaries back to original senders.

## Requirements

- Gmail/Outlook OAuth2 credentials
- Telegram Bot API token via @BotFather  
- WhatsApp Business API account
- OpenAI API key

## How to set up

Configure API credentials in respective nodes, update configuration variables for phone numbers and notification settings, then test with sample PDFs.

## How to customize

Modify AI models, customize prompts, adjust response formatting, extend file support, add notification channels, or integrate with external systems.

Perfect for automating document workflows across communication channels.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, Microsoft Outlook, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
