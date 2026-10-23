# ⚡ Create a dead man’s switch for solo founders with Google Sheets and Gmail

> ⚡ **25 views** · ⚡ [Personal Productivity](../)

## Description

## Dead Man's Switch for Solo Founders

### Who is this for
Solo founders, freelancers, and one-person businesses who need a safety net — an automated system that alerts trusted contacts if something happens and they stop checking in.

### What it does
This workflow creates a personal "dead man's switch" that requires you to check in regularly. If you miss your check-in window, it escalates through two levels of alerts.

- **Check-in via webhook**: Visit a simple URL (bookmark it) to record your check-in to Google Sheets
- **Daily monitoring**: Every day at 9 AM, the workflow checks how long since your last check-in
- **Two-tier escalation**: After your threshold (default 24 hours), you get a reminder email. After double the threshold (48 hours), your emergency contacts are alerted
- **Full audit trail**: Every alert is logged to a separate Google Sheet tab

### How to set up
1. Create a Google Sheet with two tabs: **CheckIns** (columns: timestamp, source, founder_name, founder_email, emergency_contact_1, emergency_contact_2, emergency_message, threshold_hours) and **AlertLog** (columns: timestamp, status, hours_since_checkin)
2. Add one seed row in CheckIns with your name, email, emergency contacts, a custom emergency message, and your threshold in hours (e.g. 24)
3. Paste your Google Sheet URL into all three Google Sheets nodes (Read Check-in Log, Record Check-in, Log Alert to Sheet)
4. Connect your Gmail OAuth2 credentials on the three Gmail nodes
5. Connect your Google Sheets credentials on the three Sheets nodes
6. Activate the workflow and bookmark the webhook URL — that's your daily check-in link

### Requirements
- n8n account (cloud or self-hosted)
- Google Sheets (one sheet with two tabs)
- Gmail account with OAuth2 configured

### How to customize
- Change the check-in threshold by editing the `threshold_hours` value in your Google Sheet (default: 24 hours)
- Adjust the schedule trigger to check more or less frequently
- Add more emergency contacts by extending the Code node logic
- Replace Gmail with Slack, Telegram, or SMS for different alert channels
- Add a second webhook for a "snooze" function that extends the timer temporarily

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
