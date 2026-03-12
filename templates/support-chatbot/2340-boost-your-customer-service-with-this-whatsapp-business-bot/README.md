# 💬 🚀 Boost your customer service with this WhatsApp Business bot!

> ⚡ **52,311 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow demonstrates how to automate customer interactions and appointment management via WhatsApp Business bot.

1. After submitting a Google Form, the user receives a notification via WhatsApp. These notifications are sent via a template message.
2. In case user sends a message to the bot, the text and user data is stored in [Google Sheets](https://docs.google.com/spreadsheets/d/1T-B0yepcrCHxQpn7Sj6QjTa0VqwwVBQhO5ZcIUSxWJE/edit?resourcekey=&gid=1621824221#gid=1621824221).
3. To reply back to the user, fill in the `ReplyText` column and change the Status to 'Ready'. In a few seconds n8n will fetch the unsent replies and deliver them one by one via WhatsApp Business node.

Customize this workflow to fit your specific needs, connect different online services and enhance your customer communication! 🎉

## Setup Instructions

To get this workflow up and running, you'll need to:

1. 👇 Create a WhatsApp template message on the Meta Business portal. <details>![messagetemplate.png](fileId:817)</details>

2. Obtain an Access Token and WhatsApp Business Account ID from the Meta Developers Portal. This is needed for the **WhatsApp Business Node** to send messages.
![credentialssetup.png](fileId:815)

3. Set up a **WhatsApp Trigger** node with App ID and App Secret from the Meta Developers Portal.
![credentialswebhook.png](fileId:814)

4. Right after that copy the **WhatsApp Trigger** URL and add it as a Callback URL in the Meta Developers Portal. This trigger is needed to receive incoming messages and their status updates.
![credentialstrigger.png](fileId:816)

5. Connect your Google Sheets account for data storage and management. Check out the [documentation page](https://docs.n8n.io/integrations/builtin/credentials/google/).

## ⚠️ Important Notes

- WhatsApp allows automatic *custom text* messages only within 24 hours of the last user message. Outside with time frame only *approved template messages* can be sent.
- The workflow uses a Google Sheet to manage form submissions, incoming messages and prepare responses. You can replace these nodes and connect the WhatsApp bot with other systems.

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Schedule Trigger, Google Sheets Trigger, Filter, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
