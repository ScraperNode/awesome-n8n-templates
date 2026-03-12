# 💬 Send automated appointment reminders via SMS with Twilio webhook

> ⚡ **788 views** · 💬 [Support Chatbots](../)

## Description

## How It Works

The workflow  is an automated appointment reminder system built on n8n. Here is a step-by-step breakdown of its process:

### Reminder Webhook
This node acts as the entry point for the workflow. It's a unique URL that waits for data to be sent to it from an external application, such as a booking or scheduling platform. When a new appointment is created in that system, it sends a JSON payload to this webhook.

### Extract Appointment Data
This is a **Code** node that processes the incoming data. It's a critical step that:

- Extracts the customer's name, phone number, appointment time, and service from the webhook's JSON payload.
- Includes validation to ensure a phone number is present, throwing an error if it's missing.
- Formats the raw appointment time into a human-readable string for the SMS message.

### Send SMS Reminder
This node uses your Twilio credentials to send an SMS message. It dynamically constructs the message using the data extracted in the previous step. The message is personalized with the customer's name and includes the formatted appointment details.

---

## Setup Instructions

1. **Import the Workflow**  
Copy the JSON code from the Canvas and import it into your n8n instance.

2. **Connect Your Twilio Account**  
Click on the "Send SMS Reminder" node. In the "Credentials" section, you will need to either select your existing Twilio account or add new credentials by providing your Account SID and Auth Token from your Twilio console.

3. **Find the Webhook URL**  
Click on the "Reminder Webhook" node. The unique URL for this workflow will be displayed. Copy this URL.

4. **Configure Your Booking System**  
Go to your booking or scheduling platform (e.g., Calendly, Acuity). In the settings or integrations section, find where you can add a new webhook. Paste the URL you copied from n8n here. You'll need to map the data fields from your booking system (like customer name, phone, etc.) to match the expected format shown in the comments of the "Extract Appointment Data" node.

---

Once these steps are complete, your workflow will be ready to automatically send SMS reminders whenever a new appointment is created.

## 🔗 Nodes Used

Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
