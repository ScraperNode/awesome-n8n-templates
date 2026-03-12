# 🤝 Automated Slack-to-Jira issue creation with attachments

> ⚡ **352 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description
Automatically convert structured Slack messages into Jira issues with parsed titles, descriptions, and priorities. This workflow also downloads file attachments from Slack (e.g., screenshots, logs, or documents) and uploads them directly into the created Jira issue. It then confirms success back to the Slack channel, ensuring transparency and seamless collaboration. 📋💬📎

## What This Template Does
- Monitors a designated Slack channel for new issue reports. 🔔
- Parses Slack message text with regex to extract title, description, priority, and type. 🧠
- Creates a new Jira issue with the structured data. 🎫
- Detects and processes attachments, splitting multiple files into batches. 📂
- Downloads files from Slack using secure URLs and Slack bot authentication. 🔑
- Uploads attachments directly into the created Jira issue. 📎
- Sends a Slack confirmation with Jira issue key, link, and summary details. ✅

## Key Benefits
- Eliminates manual Jira ticket creation from Slack messages. ⏱️
- Preserves critical context by attaching screenshots, logs, and documentation. 📎
- Ensures structured, standardized issue reporting across teams. 🔄
- Provides instant Slack confirmation with direct Jira links. 📲
- Handles multiple attachments gracefully with batch processing. ⚡

## Features
- Slack Trigger – Monitors specific channels for new issue messages. 💬
- Message Parsing Engine – Extracts title, description, priority, and type using regex + fallback logic. 📝
- Jira Integration – Creates structured Jira issues with proper fields (summary, description, priority, type). 🎫
- Attachment Handling – Splits, downloads, and uploads Slack files into Jira automatically. 📂
- Slack Confirmation – Sends formatted success messages with clickable Jira links. 🔗
- Robust Data Handling – Supports rich text, multiple files, and smart mappings of Slack priorities to Jira. 🧠

## Requirements
- n8n instance (cloud or self-hosted).
- Slack Bot API credentials with channels:history, files:read, and chat:write permissions.
- Jira Software Cloud API credentials with project and issue creation permissions.
- Pre-configured Slack channel for reporting issues.
- Jira project set up with supported issue types (bug, task, feature, etc.).

## Target Audience
- Software development teams managing issue intake from Slack. 👩‍💻
- QA and testing teams reporting bugs directly from Slack. 🧪
- IT support teams needing structured Jira issues with attachments. 🛠️
- Agile teams looking for seamless Slack → Jira integration. 🚀
- Remote teams requiring real-time visibility into Jira issue creation. 🌐

## Step-by-Step Setup Instructions
- Connect Slack and Jira credentials in n8n. 🔑
- Configure the Slack channel ID to listen for issue reports. 💬
- Map Jira project and issue type IDs in the “Create Jira Issue” node. 🎫
- Customize parsing logic for message formats (default: Title: X, Description: Y, Priority: Z). 📝
- Ensure Slack files can be downloaded with your bot token (files:read scope). 📂
- Test with a sample message containing a title, description, and attachment. ✅
- Deploy and monitor Slack → Jira issue creation in real-time. ⚡

## 🔗 Nodes Used

HTTP Request, Slack, Jira Software, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
