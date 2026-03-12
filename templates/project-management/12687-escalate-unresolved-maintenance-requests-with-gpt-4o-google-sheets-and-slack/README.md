# 📋 Escalate unresolved maintenance requests with GPT-4o, Google Sheets and Slack

> ⚡ **7 views** · 📋 [Project Management](../)

## Description

## Who’s it for
Property managers and operations teams who want better visibility into unresolved maintenance requests.

## What this workflow does
This workflow logs incoming maintenance requests, classifies urgency using AI, and tracks whether issues are resolved within a defined SLA. If requests remain unresolved, it escalates them automatically based on priority and sends daily summary reports.

## How it works
Maintenance requests are received via a form or webhook and logged in Google Sheets. After a configurable delay, the workflow checks resolution status and routes unresolved issues through different escalation paths.

## How to set up
- Connect a form or webhook for maintenance intake
- Configure the OpenAI node for urgency classification
- Set your SLA delay window
- Connect Google Sheets for tracking
- Configure Slack and Email notifications

## Requirements
- Google Sheets
- Slack and Email credentials
- OpenAI API key

## How to customize
- Adjust SLA timing
- Add vendor notifications
- Expand escalation logic

Created by QuarterSmart — Hyrum Hurst

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
