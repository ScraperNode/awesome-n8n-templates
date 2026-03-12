# 📋 Automate medical rep visit workflow with Google Sheets, Gmail & OpenAI summaries

> ⚡ **180 views** · 📋 [Project Management](../)

## Description

# MR Daily Visit Assignment, Reminder & AI Summary Reporting (Google Sheets + Gmail + OpenAI)

This workflow automates the entire daily reporting cycle for field representatives. It assigns daily visits from Google Sheets, emails each MR their task details, sends reminders to those who haven't submitted updates and uses an AI agent to convert form responses into structured summaries. Finally, it sends a clear end-of-day report to the manager, reducing manual coordination and ensuring consistent reporting.

### Quick Implementation Steps

1. Connect Google Sheets credentials in all relevant nodes.  
2. Update `documentId` and `sheetName (gid)` for MR Plan and Form Responses sheets.  
3. Add Gmail OAuth credentials for sending emails.  
4. Ensure your Google Form link is present in the MR plan sheet.  
5. Add OpenAI credentials for the AI Agent and Chat Model nodes.  
6. Adjust all three Schedule Trigger nodes to your preferred timings.  
7. Run a complete test execution.


## What This Workflow Does

This workflow handles work assignment, reminders and summary reporting for daily field activities. Every morning, it reads Google Sheets data to determine which MRs have pending assignments and sends them their visit details along with the reporting form link. In the evening, it sends reminder emails to those who have not yet completed their visit updates.

At night, the workflow collects all form responses and uses the built-in AI agent to convert raw entries into structured summaries. These summaries are automatically emailed to the manager, giving a clear overview of each MR’s activity and outcomes.

This workflow minimizes manual follow-up, improves reporting consistency, and ensures managers always receive timely and organized updates.


## Who’s It For

- Pharma field-force teams such as Medical Representatives (MRs), ASMs and RSMs.
- Organizations with daily client visits, service calls or appointment-based work.
- Automation teams using Google Sheets, Gmail and AI for workflow optimization.


## Requirements to Use This Workflow

- A Google Sheet containing MR visit assignments.
- A Google Sheet capturing Google Form responses.
- Valid Gmail OAuth credentials.
- Google Sheets OAuth credentials in n8n.
- OpenAI credentials for AI summarization.
- A working Google Form for visit reporting.
- Configured schedule triggers for morning, evening and night automation.


## How It Works & How To Set Up

### 1. Daily Visit Assignment (Morning)
- A Schedule Trigger runs at the configured hour (e.g., 9 AM).  
- The workflow reads the MR Plan sheet and filters rows marked as `Status = Pending`.  
- For each pending entry:
  - The MR receives an email containing their doctor visit details and reporting link.
  - The workflow updates the row in the sheet and sets `Status = Assigned`.

### 2. Reminder Flow (Evening)
- A second Schedule Trigger starts the reminder process at the configured evening time.  
- The workflow reads all records where `Status = Pending`.  
- A reminder email is sent to each MR who has not yet submitted their update.  
- The row is updated with `Reminder = Yes` and `Status = Assigned` (as per your sheet mapping).

### 3. Reporting and Summary (Night)
- A third scheduled trigger activates at night.  
- The workflow reads all form responses from the "Form Responses 1" sheet.  
- Each response is passed to the AI Agent node, which:
  - Normalizes the data
  - Extracts key points
  - Creates a structured summary JSON output  
- The "Send Summary to Manager" node then formats these into a final daily summary email.


## How To Customize Nodes

### Google Sheets Nodes
- Change filters (e.g., by date, MR, region).
- Adjust column mapping directly in the node settings.
- Replace `Status` logic if your sheet uses different labels.

### Gmail Nodes
- Update subject, message formatting or add conditional messaging.
- Add CC/BCC fields using Gmail node options.

### AI Agent Node
- Modify the built-in instructions to customize:
  - Summary style  
  - Bullet points  
  - Action items  
  - Urgency logic  
- Extend prompt rules based on your form structure.

### Schedule Triggers
- Set specific hours (e.g., 08:45, 17:30, 23:00) based on your time zone and reporting schedules.


## Add-Ons (Optional Extensions)
- Add Slack or Microsoft Teams notifications for managers.  
- Auto-export daily summaries to another Google Sheet or a shared folder.  
- Add WhatsApp/SMS reminders via Twilio or other integrations.  
- Push AI-generated summaries into CRM systems.  
- Add automatic daily backups of MR plan and responses.


## Use Case Examples
1. Pharma field-force visit planning and daily reporting.  
2. Sales teams performing client visits and follow-ups.  
3. Service engineers logging on-site work with daily summaries.  
4. Outreach teams conducting school, hospital or community visits.  
5. Real estate agents performing property visit updates.  

Many additional use cases are possible with slight adjustments to sheets and form fields.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|----------------|----------|
| Emails not sending | Gmail OAuth expired or not connected | Reconnect Gmail credentials in n8n |
| Sheet data not loading | Wrong Sheet ID or GID | Confirm IDs directly from Google Sheets URL |
| Rows not updating | Sheet column names differ from workflow mapping | Align column names exactly as defined in Google Sheets node |
| AI summary missing | OpenAI credentials missing OR unexpected form structure | Check OpenAI credentials and ensure forms produce expected fields |
| Summary email blank | Parsed output may not include expected fields | Inspect AI Agent output in execution logs |


## Need Help?

If you would like assistance setting up, testing or extending this workflow — including adapting it to your organization, enhancing AI summaries or connecting it with external systems, our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia can help.

Contact WeblineIndia for expert automation support, customizations and add-on development.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
