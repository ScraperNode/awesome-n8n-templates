# 🤝 Sales CRM chatbot with GPT-4o-mini, Google Sheets lookup & memory

> ⚡ **452 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📘 Description:
 This workflow creates a fully interactive AI-powered Sales CRM Chatbot inside n8n, capable of understanding user queries, searching Google Sheets for CRM data, and responding intelligently based on real records.
 It integrates GPT-4o-mini with two live data sources—Outreach Automation Sheet and GHL Opportunity Database—allowing the bot to answer questions about leads, contact details, proposal links, outreach status, and opportunity information.
 The bot follows strict rules: it never guesses data, always performs lookups before answering, and remembers short-term conversation history for multi-turn chats.
 Every interaction is logged into a “chat_memory” sheet, while invalid responses are captured separately for debugging.
 The result is a real-time Sales Assistant Chat Interface that combines AI reasoning, structured tool calls, CRM lookups, and persistent memory.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ When Chat Message Received (Chat Trigger)
 Starts the workflow whenever a user sends a message in the n8n Chat UI.
 Captures chatInput, session ID, and context for the conversation.

🧠 OpenAI Chat Model (GPT-4o-mini)
 Provides the AI reasoning engine used by the Sales CRM Router.
 Handles intent detection, tool-call planning, data interpretation, and conversational flow.

🤖 AI Sales CRM Router (Agent Node)
 The brain of the system.
 Responsibilities:
Understand user intent
Identify if a lookup is required
Automatically call the correct Google Sheets tool
Enforce strict “lookup before answer” rules
Produce structured, helpful responses
Ask for missing details when lookup fails
Uses JSON-formatted tool-calls exactly as defined in the system prompt.

📂 Google Sheets Tool — Outreach Sheet
 Queries the outreach automation sheet.
 Used when user asks about:
Lead status
Outreach progress
Proposal links
Contact email/name lookup
Follow-up details

📂 Google Sheets Tool — Opportunity Sheet
 Queries the ghl database sheet.
 Used for:
GHL opportunity details
Pipeline stage
Deal value
Assigned representative
Company details

🧠 Conversation Memory Buffer (Short-Term Memory)
 Stores the last 7 conversational turns.
 Allows multi-turn interactions where the AI remembers previous questions and context within a session.

🔍 Validate AI Output Payload (IF Node)
 Ensures the AI produced a valid output.
 ✅ If valid → saved to chat memory + returned to user
 ❌ If invalid → logged for review in error sheet

🗂️ Write Chat Memory to Google Sheets
 Appends:
Timestamp
Session ID
User message
AI response
 to the chat_memory sheet.
Creates a complete audit trail for every conversation.

⚠️ Log Invalid Chat Records to Google Sheets
 Captures failed or empty responses.
 Helps debug incorrect tool calls or malformed AI outputs.

💬 Send Chat Response
 Delivers the AI’s final message back to the user instantly in the n8n chat window.

## 🧩 Prerequisites
OpenAI GPT-4o-mini API key
Google Sheets OAuth (Techdome account)
Structured Outreach Automation & GHL Opportunity sheets
n8n Chat UI enabled

## 💡 Key Benefits
 ✅ Real-time lead + opportunity lookup directly inside chat
 ✅ Fail-safe, rule-driven AI that never “hallucinates” data
 ✅ Multi-turn memory for natural conversation
 ✅ All chats logged for training and QA
 ✅ Perfect internal CRM companion for sales teams

## 👥 Perfect For
Sales teams needing instant CRM insights
Outreach teams checking proposal status
SDRs handling lead follow-ups
Anyone wanting AI-assisted CRM conversations inside n8n

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
