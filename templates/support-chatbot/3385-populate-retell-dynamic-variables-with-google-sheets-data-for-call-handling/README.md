# 💬 Populate Retell dynamic variables with Google Sheets data for call handling

> ⚡ **1,264 views** · 💬 [Support Chatbots](../)

## Description

## Overview
- This workflow provides Retell agent builders with a simple way to populate [dynamic variables](https://docs.retellai.com/build/dynamic-variables) using n8n.
- The workflow fetches user information from a Google Sheet based on the phone number and sends it back to Retell.
- It is based on Retell's [Inbound Webhook Call](https://docs.retellai.com/features/inbound-call-webhook).
- Retell is a service that lets you create Voice Agents that handle voice calls simply, based on a prompt or using a conversational flow builder.

## Who is it for
For builders of [Retell's](https://www.retellai.com/) Voice Agents who want to make their agents more personalized.


## Prerequisites
- Have a [Retell AI Account](https://www.retellai.com/)
- [Create a Retell agent](https://docs.retellai.com/get-started/quick-start)
- [Purchase a phone number](https://docs.retellai.com/deploy/purchase-number) and associate it with your agent
- Create a Google Sheets - for example, [make a copy of this one](https://docs.google.com/spreadsheets/d/1TYgk8PK5w2l8Q5NtepdyLvgtuHXBHcODy-2hXOPP6AU/edit?usp=sharing).
- Your Google Sheet must have at least one column with the phone number. The remaining columns will be used to populate your Retell agent’s dynamic variables.
- All fields are returned as strings to Retell (variables are replaced as text)

## How it works
- The webhook call is received from Retell. We filter the call using their whitelisted IP address.
- It extracts data from the webhook call and uses it to retrieve the user from Google Sheets.
- It formats the data in the response to match Retell's expected format.
- Retell uses this data to replace [dynamic variables](https://docs.retellai.com/build/dynamic-variables#dynamic-variables) in the prompts.


## How to use it
See the description for screenshots!
- Set the webhook name (keep it as POST).
- Copy the Webhook URL (e.g., `https://your-instance.app.n8n.cloud/webhook/retell-dynamic-variables`) and paste it into Retell's interface. Navigate to "Phone Numbers", click on the phone number, and enable "Add an inbound webhook".
![Screenshot 20250331 at 16.38.06.png](fileId:1075)

- In your prompt (e.g., "welcome message"), use the variable with this syntax: `{{variable_name}}` (see [Retell's documentation](https://docs.retellai.com/build/dynamic-variables)).
![image.png](fileId:1074)

- These variables will be dynamically replaced by the data in your Google Sheet.


## Notes
- In Google Sheets, the phone number must start with `'+`.
- Phone numbers must be formatted like the example: with the `+`, extension, and no spaces.
- You can use any database—just replace Google Sheets with your own, making sure to keep the phone number formatting consistent.

#### 👉 [Reach out to us](mailto:hello@agentstudio.io) if you're interested in **analysing your Retell Agent conversations**.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
