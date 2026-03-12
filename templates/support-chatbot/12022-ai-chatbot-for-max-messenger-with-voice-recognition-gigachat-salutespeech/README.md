# 💬 AI chatbot for Max Messenger with voice recognition (GigaChat +SaluteSpeech)

> ⚡ **805 views** · 💬 [Support Chatbots](../)

## Description

**Name:** AI Chatbot for Max Messenger with Voice Recognition (GigaChat + Sber)

**Description:**

### How it works
This workflow powers an intelligent, conversational AI bot for Max messenger that can understand and respond to both **text and voice messages**. The bot uses GigaChat AI with built-in memory, allowing it to remember the conversation history for each unique user and answer follow-up questions. Voice messages are transcribed using Sber SmartSpeech. It's a complete solution for creating an engaging, automated assistant within your Max bot, using Russian AI services.

### Step-by-step
* **Max Trigger:** The workflow starts when the **Max Trigger** node receives a new message sent to your Max bot.
* **Access Control:** The **Check User** node verifies the sender's user ID against an allowed list. This prevents unauthorized users from accessing your bot.
* **Access Denied Response:** If the user is not authorized, the **Access Denied** node sends a polite rejection message.
* **Message Type Routing:** The **Text/Attachment** (Switch) node checks if the message contains plain text or has attachments (voice, photo, file).
* **Attachment Processing:** If an attachment is detected, the **Download Attachment** (HTTP Request) node retrieves it, and the **Attachment Router** (Switch) node determines its type (voice, photo, or file).
* **Voice Transcription:** For voice messages, the workflow gets a Sber access token via **Get Access Token** (HTTP Request), merges it with the audio file, and sends it to **Get Response** (HTTP Request) which uses Sber SmartSpeech API to transcribe the audio to text.
* **Input Unification:** The **Voice to Prompt** node converts transcribed text into a prompt, while **Text to Prompt** does the same for plain text messages. Both paths merge at the **Combine** node.
* **AI Agent Processing:** The unified prompt is passed to the **AI Agent**, powered by **GigaChat Model** and using **Simple Memory** to retain the last 10 messages per user (using Max `user_id` as the session key).
* **Response Delivery:** The AI-generated response is sent back to the user via the **Send Message** node.

### Set up steps
Estimated set up time: 15 minutes

1. **Get Max bot credentials:** Visit https://business.max.ru/ to create a bot and obtain API credentials. Add these credentials to **Max Trigger**, **Send Message**, and **Access Denied** nodes.
2. **Add GigaChat credentials:** Register for GigaChat API access and add your credentials to the **GigaChat Model** node.
3. **Add Sber credentials:** Obtain Sber SmartSpeech API credentials and add them to **Get Access Token** and **Get Response** nodes (HTTP Header Auth).
4. **Configure access control:** Open the **Check User** node and change the `user_id` value (currently 50488534) to your own Max user ID. This ensures only you can use the bot during testing.
5. **Customize bot personality:** Open the **AI Agent** node and edit the system message to change the bot's name, behavior, and add your own contact information or links.
6. **Test the bot:** Activate the workflow and send a text or voice message to your Max bot to verify it responds correctly.

### Notes
This workflow is specifically designed for Russian-speaking users and uses Russian AI services (GigaChat and Sber SmartSpeech) as alternatives to OpenAI. Make sure you have valid API access to both services before setting up this workflow.

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
