# 💬 Chatbot appointment scheduler with Google Calendar for dental assistant

> ⚡ **24,389 views** · 💬 [Support Chatbots](../)

## Description

This workflow template is designed for dental assistants and anyone looking to automate appointment scheduling. It integrates Google Calendar for booking appointments and Google Sheets as a database to store patient information.

# How It Works

The user interacts with the chatbot to schedule an appointment.

The chatbot collects necessary details and checks availability via Google Calendar.
If the requested time is available, the AI books the appointment.

If unavailable, the AI suggests alternative time slots.

Once booked, the AI logs the appointment details into Google Sheets for record-keeping.

# Setup Instructions

📌 Watch this 🎥 [Setup Video](https://youtu.be/FKCmGhdP8oE) for detailed instructions on running and customizing this workflow.

### Step 1: Set Up Credentials

OpenAI API Key (for chatbot functionality).
Google Account (for Google Sheets & Google Calendar integration).

### Step 2: Choose the Right Tools

Select the correct Google Calendar in the Google Calendar tool.
Choose the appropriate Google Sheets file in the Google Sheets tool.

### Step 3: Test 

Run a test to ensure everything works correctly.
Once tested.

#### Example Templates

Below are sample Google Sheets template to help you get started.

![Google sheets TMP.JPG](fileId:1002)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
