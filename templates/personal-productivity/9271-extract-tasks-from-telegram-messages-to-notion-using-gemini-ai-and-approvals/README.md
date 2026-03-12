# ⚡ Extract tasks from Telegram messages to Notion using Gemini AI and Approvals

> ⚡ **264 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Summary  
This workflow connects **Telegram**, **Google Gemini AI**, and **Notion** to make task creation effortless.  

Whenever you send a message to your Telegram bot, Gemini AI reads your message, understands what task you meant, and automatically creates it in your Notion database - complete with the **task name** and **due date**.  

If you **approve**, the task is added to Notion and you’ll get a confirmation in Telegram.  
If you **decline**, it simply replies that ❌ no task was created.  

Perfect for anyone who wants to capture ideas or to-dos directly from Telegram without opening Notion every time.

---

## Detailed Use Cases

1. **Quick task capture from Telegram**  
   - Send a message like “Buy milk 25 May” to your Telegram bot.  
   - The AI extracts the task name and date, asks you to approve, and creates a Notion task once approved.

2. **Turn reminders into Notion tasks**  
   - Message: “Pay rent next Monday” → Approve → Task added to Notion with the correct due date.  
   - Perfect for quickly saving reminders while on the go.

**Tip:** For best results, include clear dates in your messages like `25 May` or `May 25, 2025` so the AI can extract them accurately.

---

## Prerequisites / Requirements

Before using this workflow, make sure you have the following ready:

1. **Telegram Bot Setup**  
   - Go to [@BotFather](https://t.me/BotFather) on Telegram.  
   - Create a new bot using the `/newbot` command.  
   - Copy the **Bot Token** — you’ll need it to connect in the **Telegram Trigger** and **Telegram** nodes in n8n.

2. **Google Gemini API Key**  
   - Sign up for a free Google AI Studio account.  
   - Create an API key and connect it in your n8n credentials under **Google Gemini**.  
   - This workflow uses the `models/gemini-2.5-flash-lite` model, which works perfectly on the free tier.

3. **Notion Database Setup**  
   - Create a Notion database for storing tasks.  
   - It must have:
     - A **Title** property — set this as the *Task Name* (type: `Title` / text).  
     - A **Date** property — set this as the *Due Date* (type: `Date`).  
   - Copy your Notion database ID and connect your **Notion API credentials** in n8n.

4. **Optional Security Note**  
   - In the Telegram Trigger node, restrict the `chatId` to your own Telegram user ID if this workflow is for personal use.

---

## Customization Guide

You can easily extend this workflow to capture more details from your Telegram messages using the AI Extract node.  
Here are a few simple ways to customize it:

1. **Add more extracted fields**  
   - In the **AI Extract: TaskName & TaskDue** node, open the **Attributes** section.  
   - Add new fields like:
     - **Priority** → text (e.g., High, Medium, Low)  
     - **Duration** → number or text (e.g., 30 mins, 1 hour)  
     - **Notes** → text (optional extra info)  
   - The Gemini model will automatically try to extract these from your message.

2. **Example messages you can send**  
   - “Finish report by Friday — high priority, 2 hours.”  
   - “Workout tomorrow evening — medium priority.”

3. **Map extra fields to Notion**  
   - In the **Notion: Create Task (Page)** node, scroll to the **Properties** section.  
   - Add matching Notion properties for each new field (e.g., Priority, Duration).  
   - Map the AI outputs (like `output.Priority`) to their respective fields.

4. **Send confirmation with extra data**  
   - In the **Send and Wait for Response (Approve/Decline)** node, include the new extracted details in the Telegram message before approval.  
   - Example confirmation message:
     ```
     Task: {{ $json.output.TaskName }}
     Due: {{ $json.output.TaskDue }}
     Priority: {{ $json.output.Priority }}
     Duration: {{ $json.output.Duration }}
     ```

By doing this, you can build a smarter task capture system that includes priority, time estimation, and other useful details, all directly from your Telegram chat.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
