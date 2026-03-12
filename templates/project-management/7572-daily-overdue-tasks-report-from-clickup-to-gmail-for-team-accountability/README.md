# 📋 Daily overdue tasks report from ClickUp to Gmail for team accountability

> ⚡ **98 views** · 📋 [Project Management](../)

## Description

**Description**

Stay on top of missed deadlines with this automated workflow that generates daily HTML reports of overdue tasks from ClickUp. This automation runs daily, fetching all tasks with past due dates, organizing them by assignee, and delivering professional reports to keep teams accountable.

Perfect for sales and business development managers who need real-time visibility on overdue ClickUp tasks to drive accountability and timely completion.

**Features**

🚨 Complete Overdue Task List - All tasks with past due dates, status, and sprint points
👤 Assignee Breakdown - Organized by team member for quick follow-ups
🏷 Priority Tagging - Visual urgency assessment with priority indicators
📊 Summary Statistics - Total overdue tasks per user and team-wide metrics
📅 Daily Automation - Ensures no overdue task slips through the cracks
📧 Professional Reports - Polished HTML emails delivered via Gmail

**Setup Instructions**

- Prerequisites: Ensure you have n8n (v1.0+), ClickUp workspace access, and Gmail account with app-specific password
- ClickUp API: Generate API token in ClickUp Settings &gt; Apps and add to n8n credentials
- Gmail Configuration: Set up Gmail credentials using app-specific password (enable 2FA first)
- Import Workflow: Load the JSON template and update ClickUp workspace/list IDs
- Configure Recipients: Update email recipient list in the Gmail node
- Test Run: Execute manually to verify data retrieval and email delivery
- Schedule: Set daily schedule (recommended: 8 AM on weekdays)

The polished HTML report is sent automatically via Gmail, keeping managers, team leads, and stakeholders informed without manual task tracking.

Perfect for sales and business development managers who need real-time visibility on overdue ClickUp tasks to drive accountability and timely completion.

Keywords: n8n ClickUp automation, overdue task report, overdue assignments, ClickUp to Gmail workflow, missed deadline tracker, sales task monitoring, overdue sprint points report.

## 🔗 Nodes Used

Function, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
