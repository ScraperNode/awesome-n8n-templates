# 📋 Manage ClickUp Tasks with Natural Language via Telegram Bot and GPT-4.1

> ⚡ **771 views** · 📋 [Project Management](../)

## Description

## 📌 What It Does  
This workflow connects a Telegram bot with your ClickUp workspace, allowing you to **create**, **read**, **update**, and **delete** tasks just by sending a message. The AI agent interprets natural language commands and takes the appropriate action — all without needing to open ClickUp.

It’s like having a personal assistant inside Telegram that manages your task list for you.

## ✅ Prerequisites  
To use this workflow, you'll need the following credentials set up in n8n:
- **Telegram Bot API Credential** (used in all Telegram nodes)  
- **ClickUp OAuth2 Credential** (for task operations)  
- **OpenAI Credential** (to power the AI agent that parses your commands)

## ⚠️ Before First Use  
Make sure to **add your bot's user ID** to the `Ignore Bot Messages` node.  
This prevents infinite loops caused by the bot responding to its own messages.

If you're unsure of your bot's ID:
1. Temporarily disable the two Telegram tool nodes connected to the AI Agent.
2. Send a test message from the bot and capture its ID.
3. Add that ID to the ignore filter, then re-enable the nodes.

## ⚙️ How It Works  
1. **Trigger:** The workflow starts when your Telegram bot receives a message.  
2. **Ignore Self:** If the message was sent by the bot itself, the workflow stops.  
3. **AI Analysis:** The message is passed to an AI agent (OpenAI) that determines what action to take.  
4. **Decision Tree:**
   - 📌 Create a new task in ClickUp  
   - ✏️ Update an existing task  
   - 🔍 Find a task and return its details  
   - 🗑️ Delete a task  
   - ❓ Ask for more details if input is unclear  
   - ✅ Send confirmation or feedback to the user  

## 💡 Example Use Cases  
- “Add a task called ‘Follow up with supplier’ for tomorrow.”  
- “What tasks are due this week?”  
- “Update the task ‘Website Launch’ to ‘in progress’.”  
- “Delete the task ‘Old client notes’.”  

This workflow is ideal for solo operators, remote teams, or anyone who wants to manage ClickUp while on the go — without switching apps.

## 🛠️ Setup Instructions  
1. **Telegram Bot:**
   - Create a Telegram bot using BotFather  
   - Add your **Telegram credential** to all Telegram nodes in this workflow  
2. **Bot ID Filter:**
   - Add your **bot’s Telegram user ID** to the `Ignore Bot Messages` node  
3. **OpenAI Setup:**
   - Add your **OpenAI credential** to the AI Agent node  
4. **ClickUp Integration:**
   - Connect your **ClickUp credential**  
   - Set your **workspace, list, and folder IDs** in the task creation and search nodes  

## 🚀 How to Use  
1. Save the Telegram bot to your contacts  
2. Open the Telegram chat with your bot and send a message like:  
   `"Add a task to follow up with invoices every Friday"`  
3. The bot will reply with confirmation or ask for clarification  
4. The task will appear in your ClickUp workspace within seconds  

## 🔧 Customization Options  
- Add new intents to the AI agent to support more actions (e.g., time tracking or comments)  
- Customize the bot’s responses for branding or tone  
- Add notifications or reminders using additional Telegram nodes  

## ✨ Why It's Useful  
This workflow eliminates the friction of switching between Telegram and your task manager. It reduces manual data entry, saves time, and gives you a simple way to manage your to-do list using natural language — even on mobile.

Perfect for freelancers, managers, or team leads who want a faster, more intuitive way to stay organized.

## 🔗 Nodes Used

Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
