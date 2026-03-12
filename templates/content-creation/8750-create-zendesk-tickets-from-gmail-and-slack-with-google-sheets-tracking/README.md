# 🎬 Create Zendesk tickets from Gmail and Slack with Google Sheets tracking

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

## Description

## Description
Automatically convert Gmail emails and Slack messages into Zendesk support tickets with intelligent priority detection, comprehensive Google Sheets tracking, and real-time team notifications. Streamlines support workflows with zero manual ticket creation. 🎫📧

## What This Template Does
- Monitors Gmail inbox for unread emails and Slack support channel for new messages. 📥
- Normalizes data from both sources with intelligent content processing and HTML cleanup. 🧼
- Creates structured Zendesk tickets with proper subject lines, descriptions, and priority tagging. 🎫
- Generates comprehensive tracking logs in Google Sheets with clickable ticket URLs. 📊
- Sends formatted Slack notifications for successful ticket creation or error alerts. 📢

## Key Benefits
- Eliminates manual ticket creation with automated processing. ⏱️
- Unified support workflow across Gmail and Slack channels. 🔄
- Complete audit trail with Google Sheets tracking. 🧾
- Real-time team notifications with ticket details and direct links. 📲
- Intelligent priority detection based on "urgent" keywords. 🚨
- Error handling with detailed failure notifications. 🛡️

## Features
- Gmail polling every minute for unread email detection. 📧
- Real-time Slack message monitoring in designated support channel. 💬
- Smart data normalization with HTML tag removal and urgency detection. 🧠
- Automatic Zendesk ticket creation with priority-based tagging. 🏷️
- Google Sheets logging with ticket URLs, timestamps, and metadata. 📈
- Formatted Slack notifications with emojis and clickable links. ✨
- Comprehensive error detection and team alerting system. 🚨

## Requirements
- n8n instance (cloud or self-hosted).
- Gmail OAuth2 credentials in n8n with inbox access permissions.
- Slack Bot API credentials with channels:history, chat:write, and webhook capabilities.
- Zendesk API credentials for ticket creation and management.
- Google Sheets OAuth2 credentials with spreadsheet write permissions.
- Designated Slack channel for support requests (e.g., "#post-ticket").

## Target Audience
- Customer support teams automating multi-channel ticket creation. 🎧
- Help desk operations seeking unified request processing. 🆘
- Small to medium businesses streamlining support workflows. 🏢
- IT support teams managing internal and external requests. 💻
- Service organizations requiring comprehensive audit trails. 📋
- Remote teams needing automated workflow notifications. 🌐

## Step-by-Step Setup Instructions
- Connect Gmail, Slack, Zendesk, and Google Sheets credentials in n8n. 🔑
- Configure Slack channel ID for support message monitoring (default: "#post-ticket"). 📱
- Set up Google Sheets document for ticket tracking and logging. 📊
- Import the workflow and assign all required credentials to respective nodes. 📦
- Configure Zendesk subdomain in the "Format Sheet Data" node for proper ticket URLs. 🔗
- Test with a sample email or Slack message to validate end-to-end automation. ✅

## 🔗 Nodes Used

Google Sheets, Slack, Zendesk, Gmail Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
