# 🤖 Subscription tracker & reminders with GPT-4 nano, Telegram & Google Sheets

> ⚡ **637 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This workflow manages subscription billing reminders and data updates via Telegram. It runs daily at 8:00 AM to check for upcoming due subscriptions, formats relevant information, and sends reminders to users. It also processes user messages for subscription management—adding, updating, or retrieving billing info—using AI-powered natural language understanding.

Main outcomes include automated subscription tracking, timely reminders, and conversational interaction through Telegram, reducing manual tracking efforts and improving billing accuracy.

Automation Benefits
Time & Cost Savings
Manual Process: Several hours/week spent managing subscriptions and reminders manually.
Automated Process: Workflow completes checks, reminders, and data updates in under a minute.
Time Savings: Saves approximately 5 hours weekly, translating to significant productivity gains and cost reduction.

ROI: Automation pays for itself within the first month due to saved labor.
Error Reduction: Minimized manual entry errors, ensuring accurate billing records and timely reminders.

Business Impact
Solves the problem of manual subscription tracking and reminders.
Scales effortlessly as subscription list grows.
Opens new opportunities for proactive customer engagement, personalized messaging, and integrated billing insights.

Setup Guide

Prerequisites
Google Sheets account with subscription data sheet.
OpenAI API key with access to GPT-4.
Telegram bot token with messaging permissions.
Email SMTP setup if email reminders are used.

API Configuration
Google Sheets: Generate OAuth2 credentials, enable Sheets API, and authorize access.
OpenAI: Create API key, set model to GPT-4, and test connectivity.
Telegram: Create bot via BotFather, retrieve token, and set webhook URL.
Webhook URL: Use the provided URL in the Telegram bot settings.

Node-by-Node Setup
OpenAI Chat Model: Enter API credentials, select GPT-4 model.
Google Sheets: Input spreadsheet ID, sheet name, and ensure correct permissions.
Telegram Nodes: Insert chat ID, message parsing, and response formatting.
Schedule Trigger: Confirm cron expression for daily execution.
For AI nodes, test with sample messages to verify formatting and extraction.

Testing & Validation
Run workflow manually.
Confirm data is retrieved, processed, and responses sent.
Verify subscription updates in Google Sheets.
Check Telegram chats for correct message flow.

N8N Documentation References
Google Sheets Node
OpenAI Node
Telegram Node
Schedule Trigger

Maintenance & Troubleshooting

Regular Maintenance (Monthly)
Check API credentials and renew tokens if expired.
Monitor workflow logs for errors.
Review Google Sheets data for consistency.
Update API keys when new versions or permissions are granted.
Verify currency conversion accuracy periodically.

Common Issues & Solutions
Workflow not triggering: check schedule settings and webhook URLs.
Data not updating: verify Google Sheets credentials and permissions.
Incorrect responses: test AI prompt inputs and outputs.
API failures: regenerate API keys or check quota limits.
Reconfigure nodes if external API changes.
Monitoring & Alerts
Set up email or Slack alerts for failures.
Regularly review execution logs.
Track key metrics like successful runs, error rates, and response times.
Support & Escalation
Check n8n logs first for errors.
Export workflow for support if needed.
Use n8n community forums for common issues.
Contact API providers for account-specific problems.
Emergency procedures: restart workflow, regenerate tokens.

Updates & Improvements
Review workflow performance quarterly.
Optimize AI prompts for better accuracy.
Backup workflow configurations before major changes.
Incorporate user feedback for feature enhancements.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
