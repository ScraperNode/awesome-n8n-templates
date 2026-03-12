# 🎫 Smart email triage with Gmail, GPT-4, Slack and Google Sheets

> ⚡ **146 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description
This workflow intelligently analyzes incoming Gmail emails, classifies intent using GPT-4, and sends real-time Slack notifications while logging structured data into Google Sheets. It provides a smart, AI-assisted communication workflow that saves time and ensures no important email is overlooked. 🤖💌📊

## What This Template Does
- Monitors Gmail for unread or new incoming emails. 📥
- Extracts sender, subject, and body content for processing. ✉️
- Uses GPT-4 to analyze email intent and determine priority. 🧠
- Formats key insights (sender, summary, intent, urgency). 🧾
- Posts structured summaries and priority alerts in Slack. 💬
- Logs all processed emails with classification results in Google Sheets. 📊
- Sends error notifications in case of API or parsing failures. 🚨

## Key Benefits
✅ AI-driven email intent classification for smarter response handling.
 ✅ Seamless Slack notifications for high-priority or urgent emails.
 ✅ Maintains a centralized record of email insights in Google Sheets.
 ✅ Reduces response time by surfacing critical messages instantly.
 ✅ Minimizes manual email triage and improves team productivity.

## Features
- Real-time Gmail monitoring for unread emails.
- AI-based classification using GPT-4.
- Slack notifications with rich formatting and urgency tagging.
- Google Sheets logging for tracking and analytics.
- Built-in error handling with notification alerts.
- Modular setup for easy credential reuse across projects.

## Requirements
- Gmail OAuth2 credentials with inbox read access.
- Slack Bot token with chat:write and channels:history scopes.
- Google Sheets OAuth2 credentials for data logging.
- Azure OpenAI (or OpenAI GPT-4) API credentials.
- n8n instance (cloud or self-hosted).

## Target Audience
- Customer support teams managing shared inboxes.
- Operations teams tracking email-based requests.
- Sales or marketing teams prioritizing inbound leads.
- AI automation enthusiasts optimizing email workflows.
- Remote teams using Slack for real-time updates.

## Step-by-Step Setup Instructions
- Connect your Gmail, Slack, Google Sheets, and GPT-4 credentials in n8n. 🔑
- Specify the Gmail search filter (e.g., is:unread) for tracking new emails. 📬
- Add your Slack channel ID in the notification node. 💬
- Set your Google Sheet ID and tab name for logging results. 📊
- Run once manually to verify connection and output structure. ✅
- Enable the workflow for continuous, real-time execution. 🚀

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
