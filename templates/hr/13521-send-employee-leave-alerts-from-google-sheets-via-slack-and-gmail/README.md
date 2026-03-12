# 👥 Send employee leave alerts from Google Sheets via Slack and Gmail

> ⚡ **72 views** · 👥 [HR & Recruitment](../)

## Description

## 📊 Description
Automate employee leave tracking and communication with structured notifications and reminders 📅📣. This workflow checks a centralized Google Sheet daily to detect when leave periods start or end. When leave begins, it notifies your HR Slack channel and reminds the employee to update their availability. When leave ends, it sends a return notification and follow-up reminder. All actions are reflected back in Google Sheets to maintain a single source of truth.
Ideal for growing teams that want a simple, reliable way to manage leave visibility without manual follow-ups or status tracking.

## What This Template Does
🌐 Runs automatically on a daily schedule
 📄 Reads employee leave data from Google Sheets
 🧮 Validates and evaluates leave start and end dates
 🔀 Routes employees into activation or reset flows
 📣 Sends Slack notifications to the HR or admin channel
 📧 Sends reminder emails to employees at the right time
 📊 Updates leave status in Google Sheets to prevent duplicates
 🔁 Processes employees sequentially for reliable execution

## Key Benefits
✅ Eliminates manual leave tracking
 ✅ Improves visibility for HR and leadership
 ✅ Ensures employees receive timely reminders
 ✅ Prevents duplicate notifications using status flags
 ✅ Keeps Google Sheets updated as the single source of truth
 ✅ Scales easily as your team grows

## Features
- Daily scheduled leave check
-  Google Sheets as centralized leave database
-  Smart activation and reset logic
-  Slack channel notifications
-  Automated employee reminder emails
-  Status tracking with idempotent processing
-  Sequential execution to avoid API rate limits
-  Configurable Slack channel settings

## Requirements
- Google Sheets OAuth2 credentials
-  Slack OAuth2 credentials
-  Gmail OAuth2 credentials
-  Google Sheet with the following columns:
-  Employee Email, Name, Start Date, End Date, Status, Last Updated

## Target Audience
🏢 HR and People Operations teams
 🚀 Growing startups managing distributed teams
 📊 Operations teams needing structured leave tracking
 🤖 Automation builders creating internal workflow systems

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
