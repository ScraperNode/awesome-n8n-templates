# ⚡ Manage Google Calendar and Gmail from Telegram with a Claude AI assistant

> ⚡ **435 views** · ⚡ [Personal Productivity](../)

## Description

## Telegram AI Personal Assistant — Calendar & Email Manager

This workflow turns a Telegram bot into a fully functional personal AI assistant capable of handling your schedule and inbox through natural conversation. Send it a text message, record a voice note, or snap a photo — it understands all three and responds intelligently.

The assistant is powered by Claude Haiku (via OpenRouter) and comes with a built-in 30-message memory buffer, so it remembers context across a conversation just like a real assistant would. It has full read/write access to Google Calendar and Gmail, meaning it can book meetings, check your availability, send emails, reply to threads, and clean up your inbox — all from a single Telegram chat.

---

### What this workflow does

**Multi-modal input handling**
- Text messages are processed directly
- Voice notes are downloaded from Telegram and transcribed using OpenAI Whisper
- Photos are downloaded and analyzed using GPT-4o vision, with any caption included as additional context

All three input types are normalized into a unified context object before reaching the agent, so the AI always receives clean, structured input regardless of how the user communicated.

**Authorization layer**
Only the allowlisted Telegram User ID can interact with the assistant. Any unauthorized message receives an instant rejection and the workflow stops — no agent calls are made.

**AI agent with tools**
The LangChain agent receives the full context and decides autonomously whether to reply conversationally or invoke one of the connected tools. It uses the current date/time from n8n to handle scheduling requests accurately.

Google Calendar tools: check availability, create events, list upcoming events, fetch a specific event, update event details, delete events.

Gmail tools: send new emails, search the inbox, read a specific email, reply to a thread, delete messages.

**Persistent memory**
Each user's conversation is tracked using a sliding window of the last 30 messages, keyed by their Telegram User ID. The assistant remembers what was said earlier in the same session without needing reminders.

---

### Example use cases

- "What do I have on Thursday?" → fetches and summarizes calendar events
- "Schedule a call with Ahmed tomorrow at 3pm" → creates a calendar event
- "Any emails from the client today?" → searches Gmail and summarizes results
- "Reply to John's last email and say I'll confirm by Friday" → reads the thread and sends a reply
- [sends a photo of a meeting invite] → extracts details from the image and creates a calendar event

---

### Setup instructions

1. **Telegram API** — create a bot via @BotFather and connect the token to the Telegram Trigger node and both send nodes.
2. **OpenAI API** — required for Whisper voice transcription and GPT-4o image analysis.
3. **OpenRouter API** — used to run Claude Haiku as the agent's language model. You can swap this for any OpenRouter-compatible model.
4. **Google Calendar OAuth2** — authorize your Google account and update the calendar ID (currently set to an example address) in all six calendar tool nodes.
5. **Gmail OAuth2** — authorize your Gmail account in all five Gmail tool nodes.
6. **User authorization** — open the `If` node and replace the placeholder value with your own Telegram numeric User ID. You can find this by messaging @userinfobot on Telegram.

---

### Customization tips

- To support multiple authorized users, replace the `If` node with a list-based check or a Code node that checks against an array of allowed IDs.
- To change the AI model, swap the OpenRouter Chat Model node — the agent prompt and all tools remain fully compatible.
- To adjust memory length, change the `contextWindowLength` value in the Simple Memory node (currently 30 messages).
- To modify the assistant's personality or add new instructions, edit the system prompt inside the MainAgent node.
- Additional tools (e.g. Notion, Slack, Airtable) can be connected to the MainAgent node as sub-nodes without changing any other part of the workflow.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
