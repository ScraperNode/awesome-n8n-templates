# 🎣 Qualify and route real estate leads with Gmail and Google Sheets

> ⚡ **91 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures real estate inquiries via an n8n form, checks Google Sheets for duplicates, scores and routes new leads to the right agent, and uses Gmail to send customer confirmations, team notifications, timed follow-ups, and escalations when leads remain uncontacted.

## How it works
1. Receives a new submission from an n8n Form Trigger for a property inquiry.
2. Standardizes the submission fields and searches Google Sheets for an existing lead that matches the phone number.
3. If a matching phone number exists, sends a repeat-inquiry notification via Gmail and stops.
4. If the lead is new, calculates a lead score and priority from the budget range and project timeline, then assigns an agent and agent email based on priority and service type.
5. Appends the full lead record (including assignment and score) to a Google Sheets Leads worksheet, sends a confirmation email to the customer via Gmail, and notifies the assigned agent via Gmail.
6. Waits 1 hour, re-reads the lead in Google Sheets by Lead ID, and if the Status is still “New Lead” sends a follow-up reminder to the assigned agent via Gmail.
7. Waits another hour, re-checks the Status in Google Sheets, and if it is still “New Lead” updates the record to “Escalated” in Google Sheets and emails an escalation alert to the sales manager via Gmail.

## Setup
1. Connect Gmail OAuth2 credentials for sending the customer confirmation, agent notifications, follow-up reminders, and manager escalation emails.
2. Connect Google Sheets OAuth2 credentials and set the target spreadsheet and Leads worksheet for searching, appending, and updating lead records.
3. Update the agent, manager, and repeat-inquiry notification email addresses in the workflow configuration values.
4. Ensure your Google Sheet includes the required columns used by the workflow (for example: Phone, Lead ID, Status, Lead Score, Lead Priority, Assigned Agent, Agent Email, Assigned At, Escalation Level, Escalated At).

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
