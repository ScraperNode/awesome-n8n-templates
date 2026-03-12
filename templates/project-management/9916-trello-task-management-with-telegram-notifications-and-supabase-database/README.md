# 📋 Trello task management with Telegram notifications and Supabase database

> ⚡ **433 views** · 📋 [Project Management](../)

## Description

# Trello Task-Sync Assistant

## Description

This n8n workflow automates task management by integrating Trello, Supabase, and Telegram to streamline card creation, user assignment, and due date notifications. It ensures seamless synchronization of Trello card data with a Supabase database and sends timely Telegram notifications to keep team members informed about task assignments and deadlines.

### Key Features
- **Trello Card Syncing**: Automatically registers new Trello cards in Supabase and keeps card details (e.g., due dates, URLs) updated.
- **User Management**: Tracks Trello user assignments in Supabase, creating new user entries and linking them to cards as needed.
- **Real-Time Notifications**: Sends Telegram messages when users are added to or removed from Trello cards, using dynamic, engaging message templates.
- **Due Date Reminders**: Schedules daily checks to notify users via Telegram about tasks due on the current day.

### Workflow Structure

1. **Trello Trigger Flow**:
   - **Trigger**: Activates when a new Trello card is created.
   - **Actions**:
     - Registers the card in Supabase (`cards` table) with details like ID, name, and board.
     - Sets up a Trello webhook for real-time updates on the card.
     - Syncs due date changes to Supabase.
     - Detects member additions/removals, checks for existing users in Supabase, creates new user entries if needed, and links users to cards in the `card_user` table.

2. **Webhook Event Flow**:
   - **Trigger**: Processes Trello webhook events (e.g., member changes, due date updates).
   - **Actions**:
     - Validates event types (add/remove member).
     - Maps Trello usernames to Telegram handles.
     - Sends formatted Telegram notifications with card details and playful, randomized messages for engagement.

3. **Due-Date Notification Flow**:
   - **Trigger**: Runs twice daily (every 12 hours) via a scheduled trigger.
   - **Actions**:
     - Fetches cards due on the current day from Supabase.
     - Retrieves assigned users for each card.
     - Sends Telegram reminders with urgent, formatted messages including card name, board, URL, and due date.

### Technical Details
- **Tools Used**:
  - **Trello**: Triggers on card creation and updates via webhooks.
  - **Supabase**: Stores card, user, and card-user relationship data in `cards`, `users`, and `card_user` tables.
  - **Telegram**: Sends notifications using a bot.
- **Credentials Required**:
  - Trello API key and token.
  - Supabase URL and key.
  - Telegram bot token and chat ID.
- **Scheduling**: Due date checks run every 12 hours (adjustable).
- **Error Handling**: Includes checks for user existence and conditional logic to manage add/remove events.

### Use Case
Ideal for teams using Trello for project management, this workflow ensures real-time data syncing with Supabase and keeps members informed via Telegram, reducing manual oversight and improving task accountability. It’s particularly useful for remote or distributed teams needing automated task tracking and reminders.

### Setup Requirements
- Configure Trello webhooks to point to the n8n webhook URL.
- Set up Supabase with the required tables (`cards`, `users`, `card_user`).
- Provide Telegram bot token and chat IDs
- Test the workflow by creating a Trello card, assigning a member, and setting a due date to verify Supabase entries and Telegram notifications.

This workflow enhances productivity by automating task synchronization and communication, ensuring no deadline is missed.

## 🔗 Nodes Used

HTTP Request, Trello Trigger, Webhook, Telegram, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
