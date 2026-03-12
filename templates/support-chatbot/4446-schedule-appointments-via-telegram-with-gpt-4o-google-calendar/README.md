# 💬 Schedule appointments via Telegram with GPT-4o & Google Calendar

> ⚡ **3,453 views** · 💬 [Support Chatbots](../)

## Description

🔧 How It Works
Telegram Trigger – Listens for incoming messages from users via your Telegram bot.

Watch Full Step-by-step Guide Video here:
https://www.youtube.com/watch?v=GzWO7_1lyI8

AI Agent – Processes the message to determine the user's intent (booking or canceling) and extracts necessary details like date, time, and participant names.

Google Calendar Node – Depending on the intent:

Booking: Creates a new event in Google Calendar with the extracted details.

Canceling: Searches for the specified event and deletes it from the calendar.

Telegram Node – Sends a confirmation message back to the user, informing them of the successful booking or cancellation.

🧠 Why This is Useful
Managing appointments can be time-consuming. This workflow automates the process, allowing users to schedule or cancel meetings effortlessly through a simple chat interface. It's ideal for:

Solopreneurs managing their own schedules.

Small businesses coordinating meetings with clients.

Anyone looking to streamline their appointment management process.

🪜 Setup Instructions
Set Up Telegram Bot:

Create a new bot using BotFather on Telegram.
Obtain the API token and set up the Telegram Trigger node in n8n with this token.

OpenAI Platform API required for OpenAI Chat Model

Connect to Google Calendar

For the full video tutorial, watch here:
https://youtu.be/GzWO7_1lyI8

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
