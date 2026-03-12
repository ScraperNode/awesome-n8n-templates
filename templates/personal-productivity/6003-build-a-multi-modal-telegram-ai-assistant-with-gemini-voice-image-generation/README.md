# ⚡ Build a multi-modal Telegram AI assistant with Gemini, voice & image generation

> ⚡ **3,490 views** · ⚡ [Personal Productivity](../)

## Description

## How it works

This workflow creates a multi-talented AI assistant named Simran that interacts with users via Telegram. It can handle text and voice messages, understand the user's intent, and perform various tasks.
Step 1: Receive & Transcribe Input
The workflow triggers on any new Telegram message. If it's a voice message, it uses AssemblyAI to transcribe it into text; otherwise, it processes the incoming text directly.
Step 2: Understand User Intent
Using a Large Language Model (LLM), the workflow analyzes the user's message to determine their goal, categorizing it as a general chat, a request to generate an image, a command to set a reminder, or a request to remember a specific piece of information.
Step 3: Fetch Context & Route
The assistant retrieves past conversation summaries from a MongoDB database to maintain context. Based on the user's intent, the workflow routes the task to the appropriate path.
Step 4: Execute the Task
Chat: Generates a response using an AI agent whose personality can be toggled between a standard assistant and a "Girlfriend Mode." It also analyzes the user's mood to tailor the response.
Generate Image: Creates a detailed prompt and uses an image generation API to create and send a picture.
Set Reminder: Parses the natural language request, creates an event in Google Calendar and a task in Google Tasks, and sends a confirmation.
Remember Info: Saves specific user-provided information to a dedicated memory collection in MongoDB.
Step 5: Respond and Save Memory
The final output (text, voice message, or image) is sent back to the user on Telegram. The workflow then summarizes the interaction and saves it to the database to ensure continuity in future conversations.
## Set up steps
Estimated Set up time: 20 - 30 minutes.
1. Configure Credentials: You will need to add credentials for several services in your n8n instance:
Telegram (Bot API Token)
AssemblyAI (API Key)
MongoDB
Google (for Calendar, Tasks, Sheets, and Natural Language API)
A Large Language Model (the workflow uses Google Gemini but can be adapted)
An image generation service (the workflow uses the Together.xyz API)
2. Set up External Services:
Ensure your MongoDB instance has two collections: user_memory and memory_auto.
Create a Google Sheet to manage the "Girlfriend Mode" status for different users.
Ensure edge-tts is installed on the machine running your n8n instance for the text-to-speech functionality.
3. Customize Nodes:
Review the nodes with hardcoded IDs, such as Google Tasks and Google Sheets, and update them with your specific Task List ID and Sheet ID.
The sticky notes inside the workflow provide more detailed instructions for specific nodes and segments.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read Binary File, Telegram, Telegram Trigger, MongoDB

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
