# ⚡ Multi-channel event countdown manager with Telegram, Slack and Email

> ⚡ **135 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow automates the creation and countdown notifications for events like product launches or birthdays via a Telegram bot, ensuring timely group alerts through multi-channel routing (e.g., Slack or email). It processes incoming event data from webhooks, stores it persistently, and triggers scheduled reminders to keep teams or groups informed.

### Key Features
- Handles event creation or updates via webhook from Telegram chats or external sources.
- Fetches and processes upcoming events on a customizable schedule for countdown notifications.
- Routes alerts dynamically to channels like Slack or email based on event settings.
- Validates incoming data, formats messages for optimal delivery, and confirms responses to initiators.

### Workflow Process
- The **Webhook Trigger** node starts the workflow when an external system (e.g., Telegram bot) sends a POST request with event details like date, description, and notification preferences.
- The **Process Webhook Event** node parses and validates incoming webhook data, ensuring required fields (e.g., event date, channel) are present before proceeding.
- The **Events Database** node fetches upcoming events (e.g., launches or birthdays) from a data source, either triggered by the webhook for updates or scheduled for notifications.
- The **Webhook Response** node sends a confirmation or status response back to the webhook sender (e.g., Telegram bot) in JSON format.
- The **Schedule Trigger** node runs the workflow automatically on a defined schedule (e.g., daily at 9AM) to check for countdown-eligible events.
- The **Is Slack?** node checks if the event's notification channel is set to Slack; if true, it routes to Slack-specific formatting.
- The **Format Slack Message** node formats the event countdown message in a Slack-friendly layout (e.g., with mentions or embeds).
- The **Send to Slack** node sends the formatted message to the target Slack channel for group notifications.
- The **Is Email?** node checks if the event's notification channel is set to email (fallback from Slack check); if true, it routes to email-specific formatting.
- The **Format Email** node formats the event countdown message in an email-friendly detail (e.g., with HTML for readability).
- The **Send Email** node sends the formatted email to the recipient list (e.g., group organizers or participants).

### Setup Instructions
- Import the workflow into n8n and configure the **Webhook Trigger** with your Telegram bot's webhook URL for event creation requests.
- Set up database credentials in the **Events Database** node (e.g., connect to PostgreSQL or Airtable for event storage).
- Configure channel integrations: Slack app token for **Send to Slack**, SMTP credentials for **Send Email**, and ensure **Schedule Trigger** aligns with your countdown frequency (e.g., hourly for real-time alerts).
- Test by sending a sample POST request to the webhook with event data and manually triggering the schedule to verify notifications.
- Monitor executions in the n8n dashboard and refine validation logic in **Process Webhook Event** for custom event fields.

### Prerequisites
- Telegram bot with webhook setup for incoming event creation messages.
- Database service (e.g., PostgreSQL or Google Sheets) for storing and querying events.
- Slack workspace and email provider (e.g., Gmail SMTP) for notifications.
- n8n instance with webhook and cron scheduling enabled.
- Basic API setup for Telegram bot token and channel routing.

### Modification Options
- Add a Telegram-specific check node (e.g., "Is Telegram?") branching from **Events Database** to integrate direct bot messaging.
- Customize the **Schedule Trigger** for dynamic timing, like event-specific intervals for countdowns (e.g., daily leading up to the date).
- Extend **Format Slack Message** or **Format Email** with dynamic templates, such as embedding countdown timers or images.
- Integrate additional channels (e.g., Discord) by duplicating the **Is Slack?** / **Is Email?** logic.
- Enhance **Process Webhook Event** to support recurring events or auto-populate recipient lists from Telegram group data.



**Explore More AI Workflows:** [Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
