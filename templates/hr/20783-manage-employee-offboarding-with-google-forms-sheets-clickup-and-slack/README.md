# 👥 Manage employee offboarding with Google Forms, Sheets, ClickUp and Slack

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow captures employee exit details via an n8n form, looks up the employee in Google Sheets, creates IT and HR offboarding tasks in ClickUp, and posts notifications to Slack, then runs on a schedule to check ClickUp task completion and escalates any pending tasks to management.

## How it works
1. Receives an employee offboarding request from an n8n form submission.
2. Validates that the submitted Last Working Date is today or later before continuing.
3. Looks up the employee record in Google Sheets using the submitted Employee ID and builds IT and HR task checklists from the employee details.
4. Creates the IT and HR offboarding tasks in ClickUp from the generated checklists.
5. Posts offboarding kickoff notifications to dedicated Slack channels for IT and HR.
6. Runs weekly to fetch all related tasks from ClickUp, calculates completed vs. pending tasks, and sends a Slack escalation to the management channel when pending work remains.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet document ID, sheet tab, and Employee ID lookup column/value to match your employee master sheet.
2. Connect ClickUp credentials and set the correct team, space, and list IDs where offboarding tasks should be created and tracked.
3. Connect Slack credentials and select the IT, HR, and management channel IDs for the three Slack notifications.
4. Review and customize the predefined IT/HR task checklists and any department-based task rules in the workflow’s JavaScript logic.
5. Adjust the weekly schedule interval and ensure the ClickUp task statuses used in the completion check match your ClickUp workspace status names.

## Additional info
## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Send email notifications in addition to Slack
*   Automatically disable user accounts through company APIs
*   Integrate with Microsoft 365 or Google Workspace
*   Automatically revoke GitHub or GitLab access
*   Create an employee asset return checklist
*   Add manager approval before creating offboarding tasks
*   Send reminders before the Last Working Date
*   Escalate tasks based on how long they remain pending
*   Store completed offboarding records in Google Sheets
*   Generate monthly offboarding reports
*   Create dashboards showing completed and pending exits
*   Add an AI-generated summary of pending offboarding risks


## Use Case Examples

### 1. Employee Resignation

An employee submits their resignation and HR starts the workflow. The system automatically creates IT and HR tasks, including account access removal, asset collection, exit interviews, and final settlement activities.

### 2. Engineering Employee Exit

An Engineering employee leaves the company. In addition to common IT tasks, the workflow can create tasks to remove GitLab, development environment, server, and VPN access.

### 3. Pending Asset Return

The employee's laptop has not been returned. The scheduled workflow identifies the task as pending and includes it in one management escalation message.

### 4. Incomplete HR Activities

The exit interview and final settlement are still incomplete. The workflow identifies these tasks and sends them together in a single Slack message instead of sending separate alerts.

### 5. Daily Offboarding Monitoring

The Schedule Trigger runs every morning and checks active offboarding tasks. Management receives an escalation only when pending tasks exist.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Invalid exit date | Date format or comparison is incorrect | Ensure both dates use a compatible format, such as `YYYY-MM-DD` |
| Employee not found | Employee ID does not exist in Google Sheets | Check the Employee ID and Google Sheets lookup column |
| ClickUp tasks not created | Incorrect ClickUp credentials or List ID | Reconnect ClickUp and verify the selected list |
| Only one task created | Task array was not split | Use the Split Out node before ClickUp Create Task |
| Slack notification sent multiple times | Slack receives multiple task items | Send the notification before Split Out or aggregate items into one item |
| IT tasks routed incorrectly | Switch condition checks the wrong field | Route using the task department/type, such as IT or HR |
| Pending task count is incorrect | ClickUp status format is different | Normalize the status value in the Code node |
| Code node error: `toLowerCase is not a function` | Status is returned as an object | Convert the status safely to a string before calling `toLowerCase()` |
| Escalation sent multiple times | Multiple items reach the Slack node | Aggregate all pending tasks into one item before Slack |
| No management alert | Pending task count is 0 or IF condition is incorrect | Check that the IF condition uses `pending_tasks > 0` |
| Scheduled workflow not running | Schedule Trigger is inactive | Activate the second workflow |


## Need Help?

If you need help customizing or extending this workflow, adding department-specific checklists, automatic account removal, employee asset tracking, email notifications, approval processes, dashboards or more advanced escalation rules, then **WeblineIndia team** can assist you with advanced automation and production-ready workflow improvements.

## 🔗 Nodes Used

Google Sheets, Slack, ClickUp, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
