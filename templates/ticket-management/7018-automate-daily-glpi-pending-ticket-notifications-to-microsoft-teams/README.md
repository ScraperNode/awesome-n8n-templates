# 🎫 Automate daily GLPI pending ticket notifications to Microsoft Teams

> ⚡ **1,094 views** · 🎫 [Ticket Management & Triage](../)

## Description

GLPI Pending Tickets Notification to Microsoft Teams

📋 Overview
Automate daily notifications for pending GLPI tickets directly to Microsoft Teams. Never miss critical support cases with this workflow that monitors assigned tickets and sends personal alerts.

🔧 How It Works

Connect to GLPI - Authenticates and searches for your assigned tickets
Filter Results - Finds tickets in "In Progress" status within your entity
Send Notifications - Delivers formatted alerts to your Teams chat
Clean Up - Properly closes GLPI session for security

📊 What Gets Monitored

Tickets assigned to specific technician (configurable)
Status: "In Progress/Assigned"
Entity: Your organization (customizable)
Date range: Tickets after specified date

⚡ Key Benefits

Never Miss Deadlines - Daily automated reminders
Personal Focus - Only your assigned tickets
Time Savings - Eliminates manual checking (15-30 min daily)
Rich Details - Shows ticket title, ID, and due date

⚙️ Setup Steps
Time Required: ~30 minutes

Import Template - Add workflow to your n8n instance
Configure GLPI - Set server URL, credentials, and app token
Set Technician ID - Update to your GLPI user ID
Connect Teams - Link your Microsoft Teams account
Customize Filters - Adjust entity name and date range
Test & Schedule - Verify notifications and set daily trigger

🎨 Easy Customization

Change technician ID for different users
Adjust notification schedule (default: 8 AM daily)
Modify entity filters for your organization
Add multiple technicians by duplicating workflow

📋 Prerequisites

GLPI instance with API enabled
GLPI user account with ticket read permissions
Microsoft Teams account (basic license)
n8n with Microsoft Teams integration

Perfect for support technicians who want automated reminders about their pending GLPI tickets without manual daily checks.

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
