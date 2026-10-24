# 👥 Manage HR offboarding and archival with Odoo, Google Calendar, Gmail, and Slack

> ⚡ **32 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow accepts HR offboarding requests via webhook, updates the employee’s departure details in Odoo, then schedules an exit interview in Google Calendar, sends a confirmation email with Gmail, notifies Slack channels, and creates Odoo checklist tasks, with a daily scheduled run that archives employees after their last day.

## How it works
1. Receives a POST webhook request with employee details (name/email), last working day, departure reason, and optional manager email.
2. Validates and normalizes the input, returning a 400 response if required fields are missing.
3. Looks up the employee in Odoo (hr.employee) by work email when provided, otherwise by name, returning 404 if no match is found or 502 if the Odoo lookup fails.
4. Resolves the manager email from the employee’s Odoo parent_id record when available (falling back to the submitted manager email if not), finds or creates the matching Odoo departure reason (hr.departure.reason), and updates the employee with departure_date and departure_reason_id.
5. Responds 200 OK to the caller as soon as the Odoo employee departure update succeeds.
6. In parallel, creates a Google Calendar exit interview invite, sends a departure confirmation via Gmail, posts offboarding notifications to two Slack channels, and creates four Odoo project.task checklist items, while treating any delivery errors as non-blocking.
7. Runs daily on a schedule to find Odoo employees whose departure_date has passed and archives them by setting active=false.

## Setup
1. Create an Odoo API credential with access to hr.employee, hr.departure.reason, and project.task, and confirm the Odoo base URL/database/user settings used by your n8n Odoo credential.
2. Add a Google Calendar connection (and ensure the target calendar, such as primary, is available) for creating the exit interview event.
3. Add a Gmail OAuth2 connection for sending the departure confirmation email.
4. Add a Slack credential and ensure the it-security and team-updates channels (or update the channel names in the workflow).
5. Copy the webhook URL from the Offboarding Webhook trigger and configure your HR system/form to POST the expected fields (employeeName/employeeEmail, lastWorkingDay, reason, and optional managerEmail).

## 🔗 Nodes Used

Slack, Webhook, Google Calendar, Gmail, Odoo, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
