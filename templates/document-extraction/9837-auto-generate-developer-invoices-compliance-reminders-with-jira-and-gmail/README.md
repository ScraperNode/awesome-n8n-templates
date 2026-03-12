# 🔬 Auto-generate developer invoices & compliance reminders with Jira and Gmail

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📘 Description
This automation streamlines developer billing and compliance tracking by integrating Jira, Gmail, and n8n into a single intelligent workflow.
 It fetches all project issues from Jira, calculates logged hours per team member, identifies missing time entries, and automatically generates professional invoice summaries — complete with text attachments — which are then emailed to each developer.
The system ensures no time logs are missed, billing remains accurate, and finance teams receive transparent, auditable records — all without manual follow-ups.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 When Clicking ‘Execute Workflow’
Starts the entire billing and compliance cycle manually or on schedule.

📋 Fetch All Project Issues with Time Data
Retrieves all Jira issues across projects, including:
- Time spent (seconds → hours)
- Assignee, project, sprint, and status info
- Priority and issue summaries
-  This serves as the foundation for billing calculations and compliance checks.

📊 Aggregate Hours by Team Member
Groups issues by assignee and calculates total hours logged per person.
 Outputs per-user data with:
- Name & email
- Total logged hours
- Full issue breakdown (status, sprint, priority)
-  Forms the core dataset for both invoice creation and reminder logic.

⚠️ Identify Issues with Missing Time Logs
Scans aggregated data to find issues where time = 0 hours.
 Generates HTML reminders with:
- Table of unlogged issues (key, summary, sprint, status)
- Personalized note urging time entry completion
-  Only sends reminders to users who actually missed logs.
-  Prevents manual follow-up and ensures billing accuracy.

💰 Generate Invoice Summary with Text Attachment
Creates text-based invoice documents for each user with logged hours.
 Includes:
- Itemized issue breakdowns
- Hourly rate (default: $50/hr)
- Total hours & billing amount
- Auto-generated timestamp
-  Exports invoices as text attachments (Invoice_{Assignee}.txt) in base64.

🔗 Combine Reminder & Invoice Data Streams
Merges invoice data and reminder data into one unified stream, ensuring:
- All users (with or without logged hours) are processed
- Emails contain correct context and attachments
-  Enables complete communication coverage in a single workflow.

🔧 Reconcile JSON & Binary Attachments
- Smartly merges JSON email metadata and binary invoice files post-merge.
-  Handles complex data cases (missing binary or JSON) using fallback logic.
-  Guarantees each email has a valid recipient and invoice attachment.

📧 Send Invoices & Reminders to Team
Sends personalized emails to each developer with:
- Subject: project name
- Body: hours summary & reminder message
- Attachment: invoice text file (if available)
-  Emails are automatically delivered via Gmail with audit trails.

## 🧩 Prerequisites
Jira Software Cloud API credentials
Gmail OAuth2 connection
Configured hourly billing rate (default: $50/hr)
Active n8n instance (self-hosted or cloud)

## 💡 Key Benefits
 ✅ Eliminates manual invoice generation
 ✅ Ensures accurate time tracking & compliance
 ✅ Sends automated reminders for missing hours
 ✅ Provides transparent, auditable billing communication
 ✅ Saves finance & project teams hours of manual effort

## 👥 Perfect For
- Tech & IT service companies billing by developer hours
- Project managers tracking time compliance
- Finance teams ensuring timely invoicing
- Agencies managing multiple sprint-based projects

## 🔗 Nodes Used

Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
