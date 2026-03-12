# ⚡ Multi-channel task reminder system with Telegram, Email and Slack

> ⚡ **203 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow automates task creation and scheduled reminders for users via a Telegram bot, ensuring timely notifications across multiple channels like email and Slack. It streamlines task management by validating inputs, storing tasks securely, and delivering reminders while updating statuses for seamless follow-up.

### Key Features
- Enables users to create tasks directly in chat via webhook integration.
- Triggers periodic checks for due tasks and processes them individually for accurate reminders.
- Routes reminders to preferred channels (Telegram, email, or Slack) based on user settings.
- Validates inputs, handles errors gracefully, and logs task data for persistence and auditing.

### Workflow Process
- The **Webhook Entry Point** node receives task creation requests from users via chat (e.g., Telegram bot), including details like user ID, task description, and channel preferences.
- The **Input Validation** node checks for required fields (e.g., user ID, task description); if validation fails, it routes to the **Error Response** node.
- The **Save to Database** node stores validated task data securely in a database (e.g., PostgreSQL, MongoDB, or MySQL) for persistence.
- The **Success Response** node (part of Response Handlers) returns a confirmation message to the user in JSON format.
- The **Schedule Trigger** node runs every 3 minutes to check for pending reminders (with a 5-minute buffer for every hour to avoid duplicates).
- The **Fetch Due Tasks** node queries the database for tasks due within the check window (e.g., reminders set for within 3 minutes).
- The **Tasks Check** node verifies if fetched tasks exist and are eligible for processing.
- The **Split Items** node processes each due task individually to handle them in parallel without conflicts.
- The **Channel Router** node directs reminders to the appropriate channel based on task settings (e.g., email, Slack, or Telegram).
- The **Email Sender** node sends HTML-formatted reminder emails with task details and setup instructions.
- The **Slack Sender** node delivers Slack messages using webhooks, including task formatting and user mentions.
- The **Telegram Sender** node sends Telegram messages via bot API, including task ID, bot setup, and conversation starters.
- The **Update Task Status** node marks the task as reminded in the database (e.g., updating status to "sent" with timestamp).
- The **Workflow Complete!** node finalizes the process, logging completion and preparing for the next cycle.

### Setup Instructions
- Import the workflow into n8n and configure the **Webhook Entry Point** with your Telegram bot's webhook URL and authentication.
- Set up database credentials in the **Save to Database** and **Fetch Due Tasks** nodes (e.g., connect to PostgreSQL or MongoDB).
- Configure channel-specific credentials: Telegram bot token for **Telegram Sender**, email SMTP for **Email Sender**, and Slack webhook for **Slack Sender**.
- Adjust the **Schedule Trigger** interval (e.g., every 3 minutes) and add any custom due-time logic in **Fetch Due Tasks**.
- Test the workflow by sending a sample task creation request via the webhook and simulating due tasks to verify reminders and status updates.
- Monitor executions in n8n dashboard and tweak validation rules or response formats as needed for your use case.

### Prerequisites
- Telegram bot setup with webhook integration for task creation and messaging.
- Database service (e.g., PostgreSQL, MongoDB, or MySQL) for task storage and querying.
- Email service (e.g., SMTP provider) and Slack workspace for multi-channel reminders.
- n8n instance with webhook and scheduling enabled.
- Basic API knowledge for bot configuration and channel routing.

### Modification Options
- Customize the **Input Validation** node to add fields like priority levels or recurring task flags.
- Extend the **Channel Router** to include additional channels (e.g., Microsoft Teams or SMS via Twilio).
- Modify the **Schedule Trigger** to use dynamic intervals based on task urgency or user preferences.
- Enhance the **Update Task Status** node to trigger follow-up actions, like archiving completed tasks.
- Adjust the **Telegram Sender** node for richer interactions, such as inline keyboards for task rescheduling.



**Explore More AI Workflows: [Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!**

## 🔗 Nodes Used

Send Email, Postgres, Slack, Webhook, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
