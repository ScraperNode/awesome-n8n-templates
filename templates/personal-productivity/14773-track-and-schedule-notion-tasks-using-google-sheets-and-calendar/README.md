# ⚡ Track and schedule Notion tasks using Google Sheets and Calendar

> ⚡ **79 views** · ⚡ [Personal Productivity](../)

## Description

## How it works  
This workflow monitors a Notion database for new or updated tasks and checks if the scheduled time is available in Google Calendar. It logs every task into Google Sheets for tracking and auditing. Based on availability, it either creates a calendar event or sends a conflict notification email. The workflow also updates the task status in Sheets to reflect success or failure.

## Step-by-step  

- **Trigger task updates from Notion**  
  - **Get Task** – Watches for new or updated tasks in the Notion database.  
  - **Check Availability** – Queries Google Calendar to check if the selected time slot is free.  

- **Log data and evaluate availability**  
  - **Record** – Stores task details in Google Sheets for tracking.  
  - **If** – Checks whether the time slot is available based on calendar results.  

- **Create calendar event if available**  
  - **Create an event** – Adds the task as an event in Google Calendar.  
  - **Update Status** – Marks the task as successfully scheduled in Google Sheets.  

- **Handle scheduling conflicts**  
  - **Send Error** – Sends an email notification about the calendar conflict.  
  - **Update Status1** – Updates the task status as failed or unavailable in Google Sheets.  

## Why use this?  

- Prevents double-booking by checking calendar availability automatically  
- Keeps a centralized log of all tasks and their scheduling status  
- Sends instant alerts when scheduling conflicts occur  
- Reduces manual effort in managing tasks across tools  
- Improves visibility and reliability of task scheduling workflows

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
