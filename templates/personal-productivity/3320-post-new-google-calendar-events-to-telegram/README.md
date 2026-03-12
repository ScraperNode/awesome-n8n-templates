# ⚡ Post new Google Calendar events to Telegram

> ⚡ **3,656 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow automatically sends a Telegram message whenever a new event is added to Google Calendar. It extracts key event details such as event name, description, event creator, start date, end date, and location and forwards them to a specified Telegram chat. This ensures you stay updated on all newly scheduled events directly from Telegram.

## Prerequisites
Before setting up the workflow, ensure the following:
- Google Account with Google Calendar Access: The Google Calendar API must be enabled.
- Telegram Bot: Create a bot using BotFather on Telegram.
- Telegram Chat ID: Retrieve the Chat ID (personal chat or group).
- Use OAuth2 for Google Calendar and a Bot Token for Telegram.

## Steps

### Step 1: Google Calendar Trigger Node (Event Created Event)

- Click "Add Node" and search for Google Calendar.
- Select "Google Calendar Trigger" and add it to the workflow.
- Authenticate with your Google Account.
- Select "Event Created" as the trigger type.
- Choose the specific calendar to monitor.
- Click "Execute Node" to test the connection.
- Click "Save".

### Step 2: Telegram Node (Send Message Action)

- Click "Add Node" and search for Telegram.
- Select "Send Message" as the action.
- Authenticate using your Telegram Bot Token.
- Set the Chat ID (personal or group chat).
- Format the message using details from Google Calendar Trigger and  set the message in text.
- Click "Execute Node" to test.
- Click "Save".

### Step 3: Connect & Test the Workflow

- Link Google Calendar Trigger → Telegram Send Message.
- Execute the workflow manually.
- Create a test event in Google Calendar.
- Check Telegram to see if the event details appear.

## n8n Workflow Created by WeblineIndia

This workflow is built by the [AI development](https://www.weblineindia.com/ai-development.html) team at WeblineIndia. We help businesses automate processes, reduce repetitive work, and scale faster. 

Need something custom? You can [hire AI developers](https://www.weblineindia.com/hire-ai-developers.html) to build workflows tailored to your needs.

## 🔗 Nodes Used

Telegram, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
