# ⚡ All-in-one Telegram/Baserow AI assistant 🤖🧠 Voice/Photo/Save notes/Long term mem

> ⚡ **28,107 views** · ⚡ [Personal Productivity](../)

## Description

# Telegram Personal Assistant with Long-Term Memory & Note-Taking

This n8n workflow transforms your Telegram bot into a powerful personal assistant that handles **voice, photo, and text messages**. The assistant uses AI to interpret messages, save important details as long-term memories or notes in a Baserow database, and recall information for future interactions.

---

## 🌟 How It Works

1. **Message Reception & Routing**  
   - **Telegram Integration:** The workflow is triggered by incoming messages on your Telegram bot.  
   - **Dynamic Routing:** A switch node inspects the message to determine whether it's voice, text, or photo (with captions) and routes it for the appropriate processing.

2. **Content Processing**  
   - **Voice Messages:** Audio files are retrieved and sent to an AI transcription node to convert spoken words into text.  
   - **Text Messages:** Text is directly captured and prepared for analysis.  
   - **Photos:** If an image is received, the bot fetches the file (and caption, if provided) and uses an AI-powered image analysis node to extract relevant details.

3. **AI-Powered Agent & Memory Management**  
   - The core AI agent (powered by GPT-4o-mini) processes the incoming message along with any previous conversation history stored in PostgreSQL memory buffers.  
   - **Long-Term Memory:** When a message contains personal or noteworthy information, the assistant uses a dedicated tool to save this data as a long-term memory in Baserow.  
   - **Note-Taking:** For specific instructions or reminders, the assistant saves concise notes in a separate Baserow table.  
   - The AI agent follows defined rules to decide which details are saved as memories and which are saved as notes.

4. **Response Generation**  
   - After processing the message and updating memory/notes as needed, the AI agent crafts a contextual and personalized response.  
   - The response is sent back to the user via Telegram, ensuring smooth and natural conversation flow.

---

## 🚀 Key Features

- **Multimodal Input:**  
  Seamlessly handles voice, photo (with captions), and text messages.

- **Long-Term Memory & Note-Taking:**  
  Uses a Baserow database to store personal details and notes, enhancing conversational context over time.

- **AI-Driven Contextual Responses:**  
  Leverages an AI agent to generate personalized, context-aware replies based on current input and past interactions.

- **User Security & Validation:**  
  Incorporates validation steps to verify the user's Telegram ID before processing, ensuring secure and personalized interactions.

- **Easy Baserow Setup:**  
  Comes with a clear setup guide and sample configurations to quickly integrate Baserow for managing memories and notes.

---

## 🔧 Setup Guide

1. **Telegram Bot Setup:**  
   - Create your bot via [BotFather](https://t.me/BotFather) and obtain the Bot Token.  
   - Configure the Telegram webhook in n8n with your bot's token and URL.

2. **Baserow Database Configuration:**  
   - **Memory Table:**  
     - Create a workspace titled "Memories and Notes".  
     - Set up a table (e.g., "Memory Table") with at least two fields:  
       - **Memory** (long text)  
       - **Date Added** (US date format with time)  
   - **Notes Table:**  
     - Duplicate the Memory Table and rename it to "Notes Table".  
     - Change the first field's name from "Memory" to "Notes".

3. **n8n Workflow Import & Configuration:**  
   - Import the workflow JSON into your n8n instance.  
   - Update credentials for Telegram, Baserow, OpenAI, and PostgreSQL (for memory buffering) as needed.
   - Adjust node settings if you need to customize AI agent prompts or memory management rules.

4. **Testing & Deployment:**  
   - Test your bot by sending various message types (text, voice, photo) to confirm that the workflow processes them correctly, updates Baserow, and returns the appropriate response.  
   - Monitor logs to ensure that memory and note entries are correctly stored and retrieved.

---

## ✨ Example Interactions

- **Voice Message Processing:**  
  - *User sends a voice note requesting a reminder.*  
  - **Bot Response:** "Thanks for your message! I've noted your reminder and saved it for future reference."

- **Photo with Caption:**  
  - *User sends a photo with the caption "Save this recipe for dinner ideas."*  
  - **Bot Response:** "Got it! I've saved this recipe along with the caption for you."

- **Text Message for Memory Saving:**  
  - *User: "I love hiking on weekends."*  
  - **Bot Response:** "Noted! I’ll remember your interest in hiking."

- **Retrieving Information:**  
  - *User asks: "What notes do I have?"*  
  - **Bot Response:** "Here are your latest notes: [list of saved notes]."

---

## 🛠️ Resources & Next Steps

- **Telegram Bot Configuration:** [Telegram BotFather Guide](https://t.me/BotFather)  
- **n8n Documentation:** [n8n Docs](https://docs.n8n.io/)  
- **Community Forums:** Join discussions and share your customizations!

---

This workflow not only streamlines message processing but also empowers users with a personal AI assistant that remembers details over time. Customize the rules and responses further to fit your unique requirements and enjoy a more engaging, intelligent conversation experience on Telegram!

---

## 🔗 Nodes Used

Webhook, Telegram, Baserow, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
