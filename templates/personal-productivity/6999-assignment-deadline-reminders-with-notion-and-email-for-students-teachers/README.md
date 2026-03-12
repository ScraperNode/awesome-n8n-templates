# ⚡ Assignment deadline reminders with Notion and email for students & teachers

> ⚡ **483 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow automatically tracks assignment deadlines and sends reminders to students and teachers. It checks for upcoming assignments daily, organizes the data, and sends email notifications to ensure deadlines are met.

## Good to Know
- **Fully Automated**: Runs daily at 9 AM on weekdays to check assignments.
- **Regular Updates**: Sends reminders for upcoming deadlines.
- **Clear Notifications**: Emails a list of assignments to students and teachers.
- **Error Handling**: Skips execution if no assignments are due.
- **Scalable**: Works for multiple assignments and users.

## How It Works
### Reminder and Tracking Flow
1. **Set Schedule for Trigger**: Starts the workflow daily at 9 AM on weekdays.
2. **Get Assignments**: Retrieves assignment data from Notion database.
3. **IF Assignments Exist**: Checks if there are any upcoming assignments.
4. **Split Items**: Breaks down the assignment list for individual processing.
5. **Send Email Reminder**: Emails reminders to students and teachers.
6. **No Assignments**: Stops the workflow if no assignments are found.

## Example Database Columns
- **Assignment ID**: Unique identifier for each assignment.
- **Title**: Name of the assignment.
- **Due Date**: Deadline for submission.
- **Student ID**: Unique identifier for the student.
- **Teacher ID**: Unique identifier for the teacher.
- **Status**: Current status (e.g., Pending, Completed).

## How to Use
1. **Import Workflow**: Add the workflow to n8n using the “Import Workflow” option.
2. **Set Up Notion**: Configure n8n with Notion API credentials to fetch assignments.
3. **Configure Email**: Add student and teacher email addresses and set up an email service (e.g., Gmail).
4. **Activate Workflow**: Save and turn on the workflow in n8n.
5. **Check Logs**: Verify reminders are sent and tracked.

## Requirements
- **n8n Instance**: Self-hosted or cloud-based n8n setup.
- **Notion Database**: API access with assignment data.
- **Email Service**: SMTP setup (e.g., Gmail) for sending reminders.
- **Admin Oversight**: Someone to monitor and adjust as needed.

## Customizing This Workflow
- **Change Schedule**: Adjust the trigger to run at a different time or frequency.
- **Add More Data**: Include additional fields like priority or notes.
- **Custom Email**: Modify the email template for specific details.

## 🔗 Nodes Used

Send Email, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
