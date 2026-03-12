# 💬 Automate Telegram message processing - separate text and files 💬📁

> ⚡ **1,582 views** · 💬 [Support Chatbots](../)

## Description

## **Introduction**
Tired of manually downloading a file through different Telegram messages? This workflow acts as a smart receptionist for your Telegram bot, automatically processing incoming messages to cleanly separate text from file attachments, getting them ready for any automation you can dream up! 📥

---
## 🎯 **What This Does**
This workflow solves the challenge of handling varied Telegram messages within a single automation workflow. Incoming messages can be just text, just a file, or a file with a caption. This template intelligently identifies the message type and routes it down the correct path, isolating the text content and downloading the file attachment. It's perfect for community managers, support teams, or anyone building a Telegram-powered chatbot.

---
## 🔄 **How It Works**
1. **Listens for New Messages:** The workflow starts the moment a new message is sent to your connected Telegram bot.
2. **Checks Message Content:** A Switch node instantly determines if the message contains:
    - Text only
    - Attachment only
    - Attachment with a message (text caption)
3. **Separates Message and File:** Based on the content, the workflow isolates the text (from the message or caption) and the file's metadata (`file_id`, `file_name`).
4. **Downloads the Attachment:** For any message containing a file, the workflow automatically downloads it, making the binary data available for the next steps in your automation.
## 🧩 **Nodes Used**
- Telegram Trigger
- Telegram
- Switch
- Set
- Split Out
- No Operation - NoOp (as a placeholder for your next steps)
---
## 🚀 **Setup Requirements**
- **Credentials:** You'll need a Telegram Bot API Token (Key) and Chat ID.
- **Accounts:** A Telegram account.
- **Setup Time:** Less than 5 minutes.
### Set up steps
1. **Create a Telegram Bot:** 
	- First, you need a bot. Open Telegram and send a message to the official `@BotFather`.
    - Send the command `/newbot`.
    - Follow the prompts to choose a name and username for your bot.
    - BotFather will provide you with a unique **API Token**. Copy this token, it's what you'll need for the next step.
2. **Add Credentials to n8n:**
    - In your n8n workflow, navigate to the **Credentials** section in the left panel.
    - Click **Add credential**, search for "Telegram," and select it.
    - Paste the API Token you copied from BotFather into the **Access Token** field.
    - Click **Save** to create your credential.
3. **Connect Your Bot to the Workflow:**
    - Back on the canvas, open the **Waiting For Message (Telegram Trigger)** node.
    - In the **Credential for Telegram API** dropdown, select the credential you just created.
    - Open the **Get & Download Attachment (Telegram)** node and select the same credential.
4. **Activate and Test!**
    - Click the **Activate** toggle in the top right corner of your screen.
    - Now, send a few different messages to your new bot on Telegram to test all the paths:
        - A simple text message (e.g., "Hello!").
        - A file (like a PDF or Notepad) with no text.
        - A file with a caption(message).
    - You can check the **Executions** tab in n8n to see each test run successfully! The `NoOp` nodes at the end of each path show you the final, cleanly separated data.
---
## 💎 **Benefits / Why It Matters**
This template provides a robust and reliable foundation for any Telegram automation. By neatly separating text from files, you can seamlessly connect Telegram to any other service whether you're archiving documents to Google Drive, analyzing feedback with Gemini, or logging support requests in a database. It saves development time and ensures your automations run smoothly

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
