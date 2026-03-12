# 📋 Automate Jira backlog hygiene and reporting with Slack, Gmail and GPT-4

> ⚡ **170 views** · 📋 [Project Management](../)

## Description

## Description
Automate Jira backlog management with intelligent cleanup, prioritization, and AI-powered reporting. This workflow scans daily to identify stale issues, missing priorities, and overdue tasks — auto-updates Jira with corrective labels, logs everything into Google Sheets for tracking, and notifies teams via Slack. Every Friday, it sends an AI-generated backlog summary email to project leads for visibility and planning. 🚀📅

## What This Template Does
- Step 1: Triggers automatically every weekday at 7:00 AM to fetch backlog issues from Jira. ⏰
- Step 2: Filters issues missing estimates, assignees, or priority values for cleanup. 🧹
- Step 3: Applies corrective labels (e.g., “Needs Estimation,” “Unassigned,” “Overdue”). 🏷️
- Step 4: Logs all flagged issues into Google Sheets with timestamps for audit tracking. 📊
- Step 5: Sends real-time Slack alerts summarizing key backlog insights. 💬
- Step 6: Every Friday, uses GPT-4 to generate a summarized backlog health report. 🤖
- Step 7: Delivers weekly summary emails to leads and project managers via Gmail. 📧

## Key Benefits
✅ Eliminates manual backlog reviews and prioritization.
 ✅ Ensures consistent Jira hygiene and task visibility.
 ✅ Provides centralized backlog tracking via Google Sheets.
 ✅ Sends real-time alerts for overdue and unassigned tasks.
 ✅ Offers AI-driven insights for better sprint planning.

## Features
- Automated daily trigger (Mon–Fri, 7 AM)
- Jira issue fetching and filtering by priority and assignment
- Smart labeling for hygiene tracking
- Slack alerts for backlog anomalies
- Weekly GPT-4 generated summary reporting
- Google Sheets integration for historical logging
- Gmail integration for summary email delivery

## Requirements
- Jira API credentials with read/write issue permissions
- Google Sheets OAuth2 credentials for data logging
- Slack Bot token with chat:write permissions
- Gmail OAuth2 credentials for email delivery
- OpenAI or Azure OpenAI API key for GPT-4 summarization

## Target Audience
- Agile and Scrum teams maintaining large backlogs 🧩
- Product managers ensuring backlog quality and consistency 📋
- Engineering leads seeking proactive backlog hygiene 🛠️
- Organizations needing visibility across project tasks 🏢
- Remote teams using Slack for daily syncs 🌐

## Step-by-Step Setup Instructions
- Connect Jira credentials and specify your project key(s). 🔑
- Link your Google Sheet and replace YOUR_SHEET_ID for backlog tracking. 📊
- Configure Slack and replace YOUR_CHANNEL_ID for alert delivery. 💬
- Add Gmail credentials and define recipient emails for weekly reports. 📧
- Add your GPT-4 API key (OpenAI or Azure) for AI summarization. 🤖
- Adjust cron expression (0 7 * * 1-5) to match your local timezone. ⏰
- Run manually once to validate all connections, then enable automation. ✅

## 🔗 Nodes Used

Google Sheets, Slack, Jira Software, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
