# 🤝 Schedule and confirm revenue ops meetings with Pipedrive, Google Calendar and Slack

> ⚡ **13 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Categories  
**CRM Automation, Revenue Operations, Sales Operations, Meeting Automation**

---

## Build a Revenue Ops Meeting Pipeline with Pipedrive, Calendar, Slack

This workflow creates a **CRM-driven revenue operations meeting pipeline** that automatically coordinates meetings once a deal reaches a specific stage in **Pipedrive**.

When a deal moves into the *Meeting Booking* stage, the workflow waits for the SDR to complete the meeting details, creates the event in **Google Calendar**, sends a confirmation email to the client, and notifies the internal team in **Slack**.

The result is a reliable, no-manual-work system that ensures meetings are scheduled, confirmed, and communicated without human follow-up.

---

## Benefits

- **CRM as the Single Source of Truth**  
  All automation is triggered directly from deal stage changes.

- **Reduced No-Shows**  
  Clients receive timely meeting confirmations with correct links and times.

- **Zero Manual Coordination**  
  No copying links, sending reminders, or checking calendars.

- **Internal Visibility**  
  Sales teams receive Slack reminders automatically.

- **Time-Zone Safe Scheduling**  
  Meeting times are calculated and normalized automatically.

---

## How It Works

### Deal Stage Trigger (Pipedrive)

- Listens for deal updates in Pipedrive  
- Runs only when the deal enters the *Meeting Booking* stage  
- Prevents execution on irrelevant pipeline changes

---

### Controlled Wait Logic

- Pauses execution to allow the SDR to:
  - Add the meeting link
  - Set date, time, and duration
- Ensures data completeness before scheduling

---

### Data Extraction & Enrichment

- Fetches full deal details
- Extracts:
  - Client name and email
  - Company name
  - Meeting link
  - Meeting date and time
- Calculates ISO start and end times with time-zone handling

---

### Calendar Event Creation (Google Calendar)

- Creates a calendar event automatically
- Adds the client as an attendee
- Inserts the meeting link as the event location

---

### Client Email Confirmation

- Sends a personalized confirmation email
- Includes meeting date, time, and context
- Reduces rescheduling and confusion

---

### Internal Slack Notification

- Sends a reminder to a selected Slack channel
- Notifies SDRs and sales managers of upcoming meetings
- Keeps teams aligned without CRM checking

---

## Required Setup

### Pipedrive
- Deal pipeline with a defined *Meeting Booking* stage  
- Meeting details stored in deal activities  

### Google Calendar
- OAuth access enabled  
- Permission to create events  

### Gmail
- OAuth access enabled  
- Email sending permissions  

### Slack
- OAuth access enabled  
- Target channel selected  

---

## Business Use Cases

### Sales Teams
- Eliminate missed meetings and manual reminders  
- Reduce admin work for SDRs  

### Revenue Operations
- Standardize meeting execution across pipelines  
- Improve forecasting reliability  

### Founders & Managers
- Increase meeting attendance without micromanagement  

### Agencies & Consultants
- Deliver CRM-based RevOps automation to clients  

---

## Difficulty Level  
**Intermediate**

---

## Estimated Build Time  
**45–60 minutes**

---

## Monthly Operating Cost

- Pipedrive: Existing plan  
- Google Calendar: Free  
- Gmail: Free  
- Slack: Free or paid workspace  
- n8n: Self-hosted or cloud  

Typical range: **$0–20/month**

---

## Why This Workflow Works

- Deal stage changes represent real sales intent  
- Waiting logic prevents broken automations  
- Calendar-first execution ensures reliability  
- Multi-channel notifications reduce human error  

---

## Possible Extensions

- Add SMS or WhatsApp reminders  
- Auto-cancel meetings on stage rollback  
- Log meeting outcomes back to Pipedrive  
- Trigger post-meeting follow-ups  
- Add AI-generated meeting summaries

## 🔗 Nodes Used

Pipedrive, Pipedrive Trigger, Slack, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
