# ⚙️ Multi-channel website downtime alerts with UptimeRobot, Slack, WhatsApp & Notion

> ⚡ **247 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Description
- Automates website downtime detection and notifications using UptimeRobot.
- Triggers alerts via Slack, WhatsApp, or Email when a website goes down.
- Creates a task in Notion and tags the responsible engineer for resolution.

## Essential Information
- Monitors website status via UptimeRobot webhook.
- Sends immediate alerts to multiple channels (Slack, WhatsApp, Email).
- Generates a Notion task to track and assign downtime resolution.

## System Architecture
- **Downtime Detection Pipeline**:
  - **UptimeRobot Webhook Trigger**: Detects website status changes (triggers on "down" status).
- **Alert Generation Flow**:
  - **Send Slack Alert**: Notifies the team via Slack.
  - **Send WhatsApp Alert**: Sends a message via WhatsApp.
  - **Send Email Alert**: Emails the team about the downtime.
- **Task Management**:
  - **Create Notion Task**: Creates a task in Notion and tags the responsible engineer.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure UptimeRobot webhook with the workflow URL (trigger on "down" status).
- Set up Slack, WhatsApp, and Email credentials.
- Configure Notion integration and specify the responsible engineer tag.
- Test with a simulated downtime event.
- Monitor alert delivery and task creation accuracy.

## Technical Dependencies
- UptimeRobot API for website monitoring and webhook triggers.
- Slack API for team notifications.
- WhatsApp API (e.g., Twilio) for messaging.
- Email service (e.g., SMTP) for email alerts.
- Notion API for task management.
- n8n for workflow automation.

## Customization Possibilities
- Adjust UptimeRobot trigger to include additional status conditions (e.g., "paused").
- Customize alert messages in Slack, WhatsApp, and Email nodes.
- Modify Notion task template to include more details (e.g., downtime duration).
- Add escalation logic for unresolved issues.
- Integrate with additional tools (e.g., PagerDuty) for alerts.

## 🔗 Nodes Used

Send Email, Slack, Webhook, Notion, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
