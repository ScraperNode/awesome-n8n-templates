# 💬 Weekly client re-engagement system with GoHighLevel, Gmail, Sheets, and Slack

> ⚡ **299 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description
Automatically identify clients who haven’t been contacted in 14+ days and re-engage them with personalized Gmail follow-up emails, Google Sheets tracking, and Slack notifications for account managers. Prevents churn by ensuring no client goes unnoticed. 💌📊💬

## What This Template Does
- Triggers every Monday at 9:00 AM to check client activity. ⏰
- Fetches all contacts from GoHighLevel CRM. 🔗
- Filters clients with no updates in the last 14+ days. 🔍
- Sends personalized Gmail re-engagement emails. 📧
- Logs all inactive clients in Google Sheets for tracking. 📊
- Sends Slack notifications summarizing inactive clients for account managers. 💬
- Handles workflow errors and alerts the team via Slack. 🚨

## Key Benefits
✅ Automated client re-engagement — no more missed follow-ups.
 ✅ Reduces churn by maintaining regular touchpoints.
 ✅ Centralized Google Sheets audit trail for visibility.
 ✅ Real-time Slack alerts keep teams informed.
 ✅ Fully customizable inactivity threshold (default: 14 days).
 ✅ Built-in error handling with instant Slack error alerts.

## Features
- Weekly cron trigger (default: Monday 9 AM). ⏰
- GoHighLevel CRM integration to fetch contacts. 🔗
- Dynamic filter for “inactive 14+ days” clients. 🕒
- Personalized HTML re-engagement email via Gmail. 💌
- Automatic Google Sheets logging with client metadata. 📊
- Slack notification summarizing inactive clients. 💬
- Error Trigger node for reliable monitoring. 🚨

## Requirements
- n8n instance (cloud or self-hosted)
- Gmail OAuth2 credentials for sending emails
- Slack API credentials with chat:write and channels:read
- GoHighLevel OAuth2 credentials for CRM data access
- Google Sheets OAuth2 credentials for logging

## Target Audience
- Agencies and consultants managing multiple client relationships. 👩‍💼
- Account managers preventing client churn. 🔄
- Service businesses needing systematic client check-ins. 🏢
- Remote teams requiring Slack alerts for client engagement. 🌐

## Step-by-Step Setup Instructions
- Connect Gmail, Slack, Google Sheets, and HighLevel credentials in n8n. 🔑
- Replace placeholder values (YOUR_GOOGLE_SHEET_ID, YOUR_SLACK_CHANNEL_ID) with environment variables. ⚙️
- Customize inactivity threshold (default: 14 days). 🕒
- Import the workflow JSON into n8n. 📦
- Test manually with sample client records. ✅
- Enable the workflow for weekly automated execution. 🚀

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, HighLevel, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
