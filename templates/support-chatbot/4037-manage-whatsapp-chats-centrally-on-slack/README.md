# 💬 Manage WhatsApp chats centrally on Slack

> ⚡ **1,859 views** · 💬 [Support Chatbots](../)

## Description

This workflow enables seamless, bidirectional communication between WhatsApp and Slack using n8n. It automates the reception, processing, and forwarding of messages (text, media, and documents) between users on WhatsApp and private Slack channels.

**Key Features & Flow:**

**1. WhatsApp to Slack Flow**
- Trigger: The workflow starts with a WhatsApp Trigger node that listens for new incoming messages via a webhook.
- Channel Handling: It checks if a Slack channel with the WhatsApp sender’s number exists
- If not, it creates a private Slack channel with the sender's number as the name.
- Message Type Routing: A Switch Node (Message Type) inspects the message type (text, image, audio, document).
- Based on type: Text: Sends the message directly to Slack.
- Image/Audio/Document: Retrieves media URL via WhatsApp API → downloads the media → uploads it to the appropriate Slack channel.

**2. Slack to WhatsApp Flow**
- Trigger: A Slack Trigger listens for new messages or file uploads in Slack.
- Message Type Routing: A second Switch Node (Checking Message Type) checks if the message is text or media.
- Routing Logic: Text Message: Extracts and forwards it to the WhatsApp contact (identified by the Slack channel name).
- Media/File Message: Retrieves media file URL from Slack → downloads it → sends it as a document via WhatsApp API.

**Key Integrations:** 
- WhatsApp Cloud API: For receiving messages, downloading media, and sending messages.
- Slack API: For creating/getting channels, posting messages, and uploading files.
- HTTP Request Node: Used to securely download media from Slack and WhatsApp servers with proper authentication.

**Automation Use Case:**
This workflow is ideal for businesses that handle customer support or conversations over WhatsApp and wish to log, respond, and collaborate using Slack as their internal communication tool.

## 🔗 Nodes Used

HTTP Request, Slack, WhatsApp Business Cloud, Filter, WhatsApp Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
