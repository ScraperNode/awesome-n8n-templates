# 📋 Coordinate move-out cleaning and repair tasks with Sheets, Slack, email & Claude

> ⚡ **37 views** · 📋 [Project Management](../)

## Description

## Who this is for

Property management companies managing frequent tenant move-outs across multiple units.

## What this workflow does

Automatically schedules and coordinates move-out cleaning and repair tasks, sends vendor instructions, notifies internal teams, tracks completions, and logs everything for reporting.

## How it works

1. Cron triggers workflow before lease end.
2. AI generates personalized move-out instructions and checklists.
3. Vendors and property management teams are notified.
4. Completion updates logged in Google Sheets.
5. Optional AI suggests follow-up actions for delays.

## How to set up

Connect tenant data, configure Cron, Slack, Email, and Task Manager credentials. Customize AI prompts and verify notification flows.

## Requirements

- Google Sheets
- Email & Slack credentials
- AI Node access
- Task Manager (Trello/Asana/etc.)

Built by QuarterSmart. Created by Hyrum Hurst.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
