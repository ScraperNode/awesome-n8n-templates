# 🎯 Daily Gmail inbox digest to Discord with GPT-4.1-mini and PDF conversion

> ⚡ **267 views** · 🎯 [AI Summarization & Classification](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Overview
Automate your email management with this n8n workflow that fetches, summarizes, and shares critical emails from your Gmail inbox. Designed for busy professionals, this workflow runs daily to extract important emails from the past 24 hours, summarizes key details (like credentials, OTPs, deadlines, and action items), converts the summary into a PDF, and sends it to your Discord channel for quick access.

## Key Features
- **Scheduled Automation**: Triggers daily at 8 PM to process emails from the last 24 hours.
- **Gmail Integration**: Retrieves emails labeled "INBOX" and "IMPORTANT" using secure OAuth2 authentication (no hardcoded API keys).
- **Smart Email Parsing**: Extracts essential fields (subject, sender, and plain text) while cleaning up URLs, extra lines, and formatting for clarity.
- **AI-Powered Summarization**: Uses OpenAI's GPT-4.1-mini to create concise plain text and markdown summaries, highlighting urgent actions with "[Action Required]".
- **PDF Conversion**: Converts the markdown summary into a professional PDF using PDF.co API.
- **Discord Notifications**: Shares the PDF via a Discord webhook for seamless team communication.

## Why Use This Workflow?
- Save time by automating email triage and focusing on what matters.
- Stay organized with clear, actionable summaries delivered to Discord.
- Securely handle sensitive data with proper credential management.
- Perfect for teams, freelancers, or anyone managing high email volumes.

## Setup Instructions
1. Configure Gmail OAuth2 credentials for secure access.
2. Set up PDF.co API and Discord webhook credentials.
3. Customize the schedule or filters as needed.
4. Activate and let the workflow handle your daily email summaries!

## 🔗 Nodes Used

HTTP Request, Discord, Gmail, Markdown, Schedule Trigger, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
