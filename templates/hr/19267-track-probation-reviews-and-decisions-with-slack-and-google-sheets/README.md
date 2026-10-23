# 👥 Track probation reviews and decisions with Slack and Google Sheets

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
Demo Video: https://www.linkedin.com/feed/update/urn:li:activity:7501978993257148416/

This workflow tracks employee probation periods in Google Sheets, sends scheduled Slack reminders as deadlines approach, collects new-hire probation details via an n8n form, and records final probation outcomes from manager emoji reactions in Slack with email confirmations via Gmail.

## How it works
1. Runs daily on a schedule to pull all employee probation records from Google Sheets.
2. Calculates each employee’s probation deadline (using StartDate + Duration or ExtendedUntil) and posts the appropriate 30/15/0-day reminder message to Slack when due.
3. Updates the employee’s record in Google Sheets to mark that a reminder tier was sent.
4. Receives new employee probation details from an n8n Form trigger, validates the submission, and checks Google Sheets to prevent duplicate Employee IDs.
5. If accepted, appends/updates the employee entry in Google Sheets and sends a confirmation email to the manager via Gmail; if rejected, it emails the manager the rejection reason.
6. Triggers when a Slack reaction is added, extracts the Employee ID from the reacted reminder message, and looks up the matching employee row in Google Sheets.
7. Validates that the emoji maps to a decision and that the reactor matches the assigned manager, then updates Google Sheets with the decision (or a 30-day extension) and posts confirmations to Slack, including an offboarding alert if the employee is terminated.

## Setup
1. Connect Slack credentials and set the correct channel ID(s) for where reminders are posted and where reactions are monitored.
2. Connect a Google Sheets service account and ensure the target spreadsheet includes the required columns (EmployeeID, EmployeeName, ManagerName, ManagerEmail, ManagerSlackID, StartDate, Duration, Status, RemindersSent, ExtendedUntil, DecisionDate, DecidedBy, DecisionChannel, DecisionMessageTs).
3. Connect Gmail OAuth2 credentials for sending manager notification emails.
4. Update the default manager fields (Manager Name, Manager Email, Manager Slack ID) used during intake, or replace this step with a lookup to populate manager details automatically.
5. Share the n8n Form URL for “New Employee Probation Intake” with whoever submits new employee probation entries.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, n8n Form Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
