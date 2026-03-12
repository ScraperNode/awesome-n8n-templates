# 📋 Automate cross-project dependency tracking between Jira and Monday

> ⚡ **100 views** · 📋 [Project Management](../)

## Description

## Description
Keep your product and project teams perfectly aligned by automatically syncing task dependencies between Jira and Monday.com. This workflow ensures real-time visibility into cross-platform blockers and dependencies, allowing smoother delivery across multiple teams and tools. 🔄📅💼

## What This Template Does
- Step 1: Trigger the workflow on a schedule or manual run.
- Step 2: Fetch project tasks and dependencies from Jira.
- Step 3: Retrieve matching items from Monday.com based on linked project IDs or issue keys.
- Step 4: Compare dependencies between both systems.
- Step 5: Identify mismatched or missing dependencies across platforms.
- Step 6: Send summarized reports to Slack or Gmail for team visibility.
- Step 7: Optionally update Monday.com or Jira items with dependency status tags.

## Key Benefits
✅ Maintain alignment across multiple projects and teams.
 ✅ Detect and resolve dependency conflicts before they cause delays.
 ✅ Automate visibility — no more manual cross-checking.
 ✅ Simplify multi-tool management for product and engineering leads.

## Features
- Integration between Jira Cloud and Monday.com API
- Cross-dependency comparison logic
- Scheduled or manual execution
- Slack/Gmail notifications for updates or conflicts
- Custom mapping for project and issue identifiers

## Requirements
- Jira Cloud account with API credentials
- Monday.com API key or OAuth2 token
- Optional: Slack or Gmail credentials for notifications
- n8n instance (cloud or self-hosted)

## Target Audience
- Product and Project Managers coordinating across tools 🧩
- Engineering Leads overseeing multi-platform sprints ⚙️
- PMOs managing dependencies across cross-functional teams 📊
- Operations teams aiming for unified delivery visibility 📈

## Step-by-Step Setup Instructions
- Connect your Jira and Monday.com credentials in n8n.
- Map project identifiers or keys between Jira and Monday.com.
- (Optional) Configure Slack or Gmail for daily status alerts.
- Adjust the cron expression to match your monitoring schedule.
- Run the workflow once manually to validate mappings.
- Activate the workflow for ongoing dependency tracking. ✅

## 🔗 Nodes Used

Cron, Function, Slack, Jira Software, Monday.com, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
