# 📋 Generate ClickUp weekly assignment & performance reports with Gmail

> ⚡ **66 views** · 📋 [Project Management](../)

## Description

**Description**

Automate your weekly task tracking with this n8n workflow that generates professional HTML reports of upcoming assignments and team performance. Fetches tasks from ClickUp, filters by current week, organizes by assignee, and delivers via Gmail.

Features: Upcoming assignments with due dates 
• Urgent/overdue task alerts 
• Per-assignee breakdown with sprint points 
• Priority/status badges 
• Weekly team statistics 
• Automated Gmail delivery

Perfect for project managers and team leads who need weekly visibility without manual reporting.

**Prerequisites Required:**

- n8n instance (v1.0+) and ClickUp workspace with API access
- Gmail account with app-specific password
- ClickUp tasks with assignees, due dates, and priority levels

**Setup Instructions**

- ClickUp Connection: Create ClickUp credential in n8n using API token from ClickUp Settings &gt; Apps
- Gmail Setup: Add Gmail credentials with app-specific password (enable 2FA first)
- Import Workflow: Import JSON and update ClickUp workspace IDs and email recipients
- Customize: Adjust date filters, priority mapping, and HTML styling as needed
- Schedule: Test manually, then set recurring schedule (recommended: Monday 9 AM)

Perfect for sales teams, project managers, and leads who want full visibility on weekly task pipelines without manual reporting.

Keywords: n8n ClickUp automation, weekly task report, performance tracking, upcoming assignments report, ClickUp to Gmail workflow, sprint points tracking, overdue task alerts, sales team productivity monitoring.

## 🔗 Nodes Used

Function, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
