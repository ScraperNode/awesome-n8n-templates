# 💬 Debounce Telegram support messages and aggregate replies with OpenAI

> ⚡ **40 views** · 💬 [Support Chatbots](../)

## Description

This workflow prevents your AI support bot from responding to every single message by intelligently aggregating rapid-fire messages from users before generating a comprehensive response.

## Who's it for

Support teams and bot developers who want to provide better AI responses by letting users fully explain their issue before the bot responds, reducing unnecessary back-and-forth and improving response quality.

## How it works

When a user sends a message to your Telegram bot, the workflow:
- Checks if the user has an active session within the last 60 seconds
- If no session exists, creates a new one and starts a 60-second timer
- If a session is active, appends the new message to the existing conversation
- After 60 seconds of the first message, fetches all aggregated messages
- Sends the complete conversation to OpenAI for a comprehensive response
- Delivers the AI-generated answer back to the user via Telegram
- Clears the session for the next interaction

## Requirements

- Telegram bot token (set up via BotFather)
- OpenAI API key
- PostgreSQL database with a `user_sessions` table containing columns: `user_id`, `session_id`, `messages` (jsonb array), `first_message_at`, `wait_expires_at`, `status`, and `resume_url`
- n8n instance (self-hosted or cloud)

## How to set up

1. Configure your Telegram credentials in the Telegram Trigger node
2. Add your OpenAI API key to the OpenAI Chat Model node
3. Set up PostgreSQL credentials and create the required database table
4. Adjust the wait time (default 60 seconds) in the Wait node if needed
5. Activate the workflow and test with your Telegram bot

## How to customize

- Modify the aggregation window by changing the wait duration
- Customize the AI prompt in the AI Agent node for different response styles
- Add additional logic to handle specific keywords or commands
- Integrate other AI models or add context from external sources

## 🔗 Nodes Used

Postgres, Webhook, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
