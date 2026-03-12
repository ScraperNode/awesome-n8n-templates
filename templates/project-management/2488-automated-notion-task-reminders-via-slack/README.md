# 📋 Automated notion task reminders via Slack

> ⚡ **3,197 views** · 📋 [Project Management](../)

## Description

This workflow is designed to automate task reminders by retrieving tasks from a Notion database and sending reminders to Slack users. It checks for incomplete tasks from a Notion database and sends a Slack message to the relevant users with the task details and due dates. The automation is scheduled to run every weekday at 9:00 AM, ensuring that users are always reminded of pending tasks.

### Who is this for?
This workflow is ideal for teams or individuals who manage their tasks using Notion but rely on Slack for communication. It provides an automated solution for ensuring that tasks in Notion are followed up on, reducing the risk of missing deadlines.

### What problem is this workflow solving?
Often, team members need to be reminded of tasks from various platforms. This workflow bridges the gap between task management in Notion and communication in Slack by automatically sending task reminders. It ensures that team members are informed of their pending tasks each morning, helping them stay organized and on top of their work.

### What this workflow does
1. **Triggers every weekday at 9:00 AM**: The workflow runs at 9:00 AM, Monday through Friday.
2. **Fetches tasks from Notion**: It retrieves tasks from a Notion database.
3. **Filters incomplete tasks**: The workflow filters tasks that are not marked as "Done."
4. **Fetches Slack users**: It retrieves all Slack users to ensure that the reminders are sent to the correct user.
5. **Matches tasks to the correct user**: It checks the Notion task assignee and matches it with the appropriate Slack user.
6. **Sends Slack reminders**: Sends a Slack direct message to each user with their incomplete tasks and due dates.

## Setup
1. **Connect Notion**: You will need to connect your Notion account and specify the database containing tasks.
2. **Connect Slack**: Authenticate with Slack using OAuth to allow the workflow to send messages on your behalf.
3. **Notion user email mapping**: Ensure that the Notion users’ email addresses are correctly mapped to their corresponding Notion user profiles.
4. **Slack user full name mapping**: Ensure that the Slack users’ full names are correctly mapped to their corresponding Slack user profiles.
5. **Adjust schedule**: If needed, modify the schedule node to run at a different time or frequency.

### How to customize this workflow
- **Change the database**: You can adjust the workflow to pull tasks from a different Notion database by modifying the "Get To Dos from Tasks Database" node.
- **Add more users**: The workflow currently supports two users, but you can expand it to support more by adding additional logic in the "Switch for Notion Users Emails" node.
- **Modify the message format**: The Slack message content can be customized further to include more task details or change the message format.

### Workflow Summary
This workflow automates sending task reminders from a Notion database to Slack users. By running every weekday morning, it ensures that users receive timely reminders of their incomplete tasks, helping them stay organized and efficient.

## 🔗 Nodes Used

Cron, Slack, Notion, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
