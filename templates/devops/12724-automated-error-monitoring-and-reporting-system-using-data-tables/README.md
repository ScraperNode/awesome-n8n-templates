# ⚙️ Automated error monitoring and reporting system using data tables

> ⚡ **72 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**Automated error monitoring and reporting system using data tables**

This template helps you monitor workflow failures by automatically logging every error to a data table, then sending periodic summaries via email, Slack, Microsoft Teams, or Discord—so you catch issues before they impact your operations.

## What This Workflow Does

The template uses two synchronized workflows to create a complete error monitoring system:

1. **Error Capture Workflow** - Uses n8n's native error handling to intercept every workflow failure, extract key details (workflow name, error message, timestamp, node information, execution ID), and store them in your data table or database
2. **Report Scheduler Workflow** - Runs on your configured schedule (daily, weekly, or custom) to query stored errors, aggregate insights, and send formatted summaries through your notification channel

## How to Use It

**Capture errors from all workflows** → **Store them in one centralized table** → **Get daily/weekly summaries in Slack, email, or Teams**

## ✨ Key Features

- **Zero-touch error logging** - No modifications needed to existing workflows; errors are captured automatically
- **Flexible storage** - Configure any data table, PostgreSQL, MySQL, MongoDB, or cloud database as your error repository
- **Multiple notification channels** - Send reports via email, Slack, Microsoft Teams, Discord, or custom HTTP endpoints
- **Customizable schedules** - Daily, weekly, or custom-interval reporting to match your team's needs
- **Rich error context** - Every logged error includes workflow name, error message, affected node, timestamp, and execution ID for quick troubleshooting
- **Historical database** - Build a searchable error archive for pattern analysis and long-term debugging

## 🚀 Use Cases

- **Monitor production workflows** - DevOps and platform teams tracking system health across multiple automated processes
- **Debug ETL failures** - Data engineers identifying where pipelines break and why
- **Oversee complex automation** - Teams managing dozens of interconnected workflows without manual checks
- **Stay informed as a solo developer** - Get notified of issues without constantly logging into n8n

## 📋 Prerequisites

- n8n instance (self-hosted or n8n Cloud)
- Data storage (PostgreSQL, MySQL, MongoDB, n8n's built-in tables, or similar)
- Notification service configured (Gmail, Slack, Teams, Discord, or custom webhook)

## ⚙️ Configuration Steps

1. **Connect your data storage** - Point the error capture workflow to your chosen database or data table
2. **Enable error monitoring** - Activate the error handling trigger for workflows you want to monitor
3. **Set reporting schedule** - Choose daily, weekly, or custom intervals for your summary reports
4. **Configure notifications** - Add your Slack webhook, email address, Teams channel, or Discord endpoint
5. **Customize report format** - Optionally adjust which error metrics and insights appear in summaries

## 💡 Customization Ideas

- Add error severity levels (critical, warning, info) to prioritize failures
- Set up real-time critical error alerts in addition to scheduled reports
- Create workflow-specific error thresholds and escalation rules
- Integrate with PagerDuty or Opsgenie for incident management
- Add visualizations or charts to your error summaries
- Implement automatic retry logic for specific error types

## 📊 Sample Error Summary Output

Your reports will include:
- Total errors in the reporting period
- Error count breakdown by workflow
- Most frequently occurring error types
- Error timeline and trends
- Direct links to failed executions for quick debugging

## 🔧 Maintenance Tips

- Review error patterns monthly to identify workflows that need optimization
- Archive or delete old error logs periodically to keep your database performant
- Adjust reporting frequency as your workflow volume grows
- Update notification recipients when team members join or leave

## 🔗 Nodes Used

Gmail, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
