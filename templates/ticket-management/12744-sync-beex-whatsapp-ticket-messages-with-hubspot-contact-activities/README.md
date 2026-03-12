# 🎫 Sync Beex WhatsApp ticket messages with HubSpot contact activities

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Summary
This workflow detects ticket classification events in Beex where the communication channel was WhatsApp, extracts the messages from the interaction, and logs them as activity in the corresponding HubSpot contact.

### How it works
1. **Beex Trigger**
Receives the ticket classification event `On Managment Create` via a pre-configured callback.

2. **Filter by Channel**
The automation only considers classification events where the communication channel was a WhatsApp message.

3. **Get Phone**
The phone number is used to find the contact to whom the activity should be assigned in HubSpot. The country code must be configured manually.

4. **Search Contact**
Finds the contact in HubSpot using the phone number.

5. **Get Messages**
When a ticket is categorized, its ID and all messages from the interaction can be retrieved from trigger node.

6. **Routing, Formatting, and Consolidation**
We route messages based on their content, whether text, image, or audio. Each message is formatted in HTML, compatible with HubSpot activities.

7. **Sort Messages**
Messages are sorted according to their `created_at` field.

8. **Consolidate Chats**
Individual messages are consolidated into a single record (all in HTML format). Send all chat content to hs_communication_body in API HubSpot.

## Setup Instructions
1. **Install Beex Nodes**: Before importing the template, install the Beex trigger and node packages using the following package names:
```
n8n-beex-nodes
```
2. **Configure HubSpot Credentials**: Configure your HubSpot connection with the following:
- Access token (typically from a private application)
- Read and write permissions for the **Contacts** objects

![hubspot_token.png](fileId:3999)

3. **Configure Beex Credentials**: For Beex users with platform access (for testing requests, contact frank@beexcc.com):
- Go to **Platform Settings** → **API Key and Callback**.

- Copy your API key and paste it into the Beex node (Get Messages) in n8n.

- Activate `Typing Registry` in Callback Integration option

![beex_api_key_2.png](fileId:4001)

![imagen12_f046f11157.png](fileId:3998)

4. **Configure the Webhook URL**: Copy the Webhook URL (Test/Production) from the Beex activation node and paste it into the Callback Integration section in Beex. Save your changes.

![imagen11_d6cac8dcb7.png](fileId:4000)

## Requirements

- **HubSpot**: An account with a private application token and read/write permissions for **Contacts** objects.

- **Beex**: An account with permissions to receive **Typing Registry** events in Callback Integration.

## Customization Options
- You can customize the HTML format provided to text, audio, or image messages.

## 🔗 Nodes Used

HTTP Request, HubSpot, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
