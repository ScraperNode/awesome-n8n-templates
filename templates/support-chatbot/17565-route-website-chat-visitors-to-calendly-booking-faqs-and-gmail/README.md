# 💬 Route website chat visitors to Calendly booking, FAQs, and Gmail

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers a rule-based website chat that routes visitors to a Calendly booking link, answers basic service FAQs, or collects a contact method and message, then emails the lead to your inbox via Gmail.

## How it works
1. Receives an incoming website chat message via an n8n Chat trigger.
2. Sends a welcome message with a link to your privacy policy and shows a numbered main menu.
3. Routes the visitor to either a Calendly scheduling link, a services information submenu, or a direct message flow based on their reply.
4. In the direct message flow, asks for an email address or phone number and extracts it from the visitor’s reply.
5. Prompts the visitor to write a message, then asks them to confirm whether to send or replace it.
6. Emails the captured contact details and message to your configured inbox using Gmail and confirms receipt in the chat.

## Setup
1. Add a Gmail OAuth2 credential and select it in the Gmail step that sends the notification email.
2. Update the Workflow Configuration values for your email inbox address, Calendly link, and privacy-policy URL.
3. (Optional) Edit the service descriptions to match your own offerings
4. (Optional) Edit the menu points to add/remove options in the navigation

## Requirements
- A Gmail account with OAuth2 credentials configured in n8n
- A Calendly account (or similar scheduling tool) with a bookable link

## Customization
- You can change/update the service information
- You can add additional menu points by adding them to the chat messages and configuring new Routes for those options

## 🔗 Nodes Used

Gmail, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
