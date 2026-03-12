# ⚡ Send AI-prioritized follow-up reminders with GPT-4.1-mini, Gmail and Slack

> ⚡ **6 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for
Consultants, agencies, freelancers, and project managers who want to ensure proposals, emails, and tasks are followed up on time.

## How it works / What it does
This n8n workflow automates follow-up reminders:
1. Triggers when a new proposal, task, or client email is logged in Google Sheets, CRM, or project management tool.
2. Normalizes data for client name, email, task, and due date.
3. Uses OpenAI AI to classify urgency (high, medium, low).
4. Routes reminders based on urgency:
   - High → Immediate email and Slack alert
   - Medium → Scheduled email reminder
   - Low → Weekly summary reminder
5. Logs follow-up status in Google Sheets.
6. Sends daily Slack summary of all pending reminders.
7. Optional: SMS notifications for VIP clients via Twilio.
8. Includes error handling and retry logic for reliability.

## How to set up
1. Connect Google Sheets, CRM, or project tool.
2. Configure Gmail/Outlook for emails.
3. Connect Slack for notifications.
4. Optional: Connect Twilio for SMS.
5. Connect OpenAI API for AI urgency classification.
6. Adjust decision nodes to match your priority workflow.
7. Test workflow with sample data to confirm routing works.

## Requirements
- n8n account with Gmail/Outlook, Slack, Twilio integrations.
- OpenAI API key for urgency classification.

## How to customize
- Adjust AI prompt to classify urgency per your business rules.
- Customize Slack channels and email templates.
- Add new routes (e.g., CRM updates, calendar scheduling) for additional automation.

---

**Created by Hyrum Hurst / QuarterSmart**  
**Keywords:** AI follow-up automation, task reminders, proposal follow-up, consulting workflow, n8n workflow, QuarterSmart

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Gmail, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
