# 🤖 Multi-tool personal assistant with Telegram, Grok-4, Gmail, Calendar & Memory

> ⚡ **1,700 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Summary
Chat with your AI agent in Telegram. It remembers important facts about you in Airtable, can transcribe your voice messages, search the web, read and manage Google Calendar, fetch Gmail, and query Notion. Responses are grounded in your recent memories and tool outputs, then sent back to Telegram.

## What this workflow does
-  Listens to your Telegram messages (text or voice)
-  Maintains short-term chat memory per user and long-term memory in Airtable
-  Decides when to save new facts about you (auto “Save Memory” without telling you)
-  Uses tools on demand:
  	- Web search via SerpAPI
  	- Google Calendar: list/create/update/delete events
  	- Gmail: list and read messages
  	- Notion: fetch database info
-  Transcribes Telegram voice notes with OpenAI and feeds them to the agent
-  Combines live tool results + recent memories and replies in Telegram

## Apps and credentials
-  Telegram Bot API: personal_bot
-  xAI Grok: Grok-4 model for chat
-  OpenAI: speech-to-text (transcribe audio)
-  Airtable: store long-term memories
-  Google Calendar: calendar actions
-  Gmail: email actions
-  Notion: knowledge and reading lists
-  SerpAPI: web search

## Typical use cases
-  Personal assistant that remembers preferences, decisions, and tasks
-  Create/update meetings by chatting, and get upcoming events
-  Ask “what did I say I’m reading?” or “what’s our plan from last week?”
-  Voice-first capture: send a voice note → get a transcribed, actionable reply
-  Fetch recent emails or look up info on the web without leaving Telegram
-  Query a Notion database (e.g., “show me the Neurocracy entries”)

## How it works (node-by-node)
-  Telegram Trigger
  	- Receives messages from your Telegram chat (text and optional voice).
-  Text vs Message Router
  	- Routes based on message contents:
    		- Text path → goes directly to the Agent (AI).
    		- Voice path → downloads the file and transcribes before AI.
    		- Always also fetches recent Airtable memories for context.
-  Get a file (Telegram)
  	- Downloads the voice file (voice.file_id) when present.
-  Transcribe a recording (OpenAI)
  	- Converts audio to text so the agent can use it like a normal message.
-  Get memories (Airtable)
  	- Searches your “Agent Memories” base/table, filtered by user, sorted by Created.
-  Aggregate (Aggregate)
  	- Bundles recent memory records into a single array “Memories” with text + timestamp.
-  Merge (Merge)
  	- Combines current input (text or transcript) with the memory bundle before the agent.
-  Simple Memory (Agent memory window)
  	- Short-term session memory keyed by Telegram chat ID; keeps the recent 30 turns.
-  Tools wired into the agent
  	- SerpAPI
  	- Google Calendar tools:
    		- Get many events in Google Calendar
    		- Create an event in Google Calendar
    		- Update an event in Google Calendar
    		- Delete an event in Google Calendar
  	- Gmail tools:
    		- Get many messages in Gmail
    		- Get a message in Gmail
  	- Notion tool:
   		- Get a database in Notion
  		- Airtable tool:
    	- Save Memory (stores distilled facts about the user)
-  Agent
  	- System prompt defines role, tone, and rules:
    		- Be a friendly assistant.
    		- On each message, decide if it contains user info worth saving.
    		- If yes, call “Save Memory” to persist a short summary in Airtable.
    		- Don’t announce memory saves—just continue helping.
    		- Use tools when needed (web, calendar, Gmail, Notion).
    		- Think with the provided memory context block.
  		- Uses xAI Grok Chat Model for reasoning and tool-calling.
  		- Can call Save Memory, Calendar, Gmail, Notion, and SerpAPI tools as needed.
-  Save Memory (Airtable)
  	- Persists Memory and User fields to “Agent Memories” base; auto timestamp by Airtable.
-  Send a text message (Telegram)
  	- Sends the agent’s final answer back to the same Telegram chat ID.

## Node map
| Node | Type | Purpose |
|---|---|---|
| Telegram Trigger | Trigger | Receive text/voice from Telegram |
| Text vs voice router | Flow control | Route text vs voice; also trigger memories fetch |
| Get a file | Telegram | Download voice audio |
| Transcribe a recording | OpenAI | Speech-to-text for voice notes |
| Get memories | Airtable | Load recent user memories |
| Aggregate | Aggregate | Pack memory records into “Memories” array |
| Merge | Merge | Combine input and memories before agent call |
| Simple Memory | Agent memory | Short-term chat memory per chat ID |
| xAI Grok Chat Model | LLM | Core reasoning model for the Agent |
| Search Web with SerpAPI | Tool | Web search |
| Google Calendar tools | Tool | List/create/update/delete events |
| Gmail tools | Tool | Search and read email |
| Notion tool | Tool | Query a Notion database |
| Save Memory | Airtable Tool | Persist distilled user facts |
| AI Agent | Agent | Orchestrates tools + memory, produces the answer |
| Send a text message | Telegram | Reply to the user in Telegram |

## Before you start
-  Create a Telegram bot and get your token (via @BotFather).
-  Put your Telegram user ID into the Telegram Trigger node (chatIds).
-  Connect credentials:
  	- xAI Grok (model: grok-4-0709)
  	- OpenAI (for audio transcription)
  	- Airtable (Agent Memories base and table)
  	- Google Calendar OAuth
  	- Gmail OAuth
  	- Notion API
  	- SerpAPI key
-  Adjust the Airtable “User” value and the filterByFormula to match your name or account.

## Setup instructions
1) Telegram
-  Telegram Trigger:
  	- additionalFields.chatIds = your_telegram_id
  	- download = true to allow voice handling
-  Send a text message:
  	- chatId = {{ $('Telegram Trigger').item.json.message.chat.id }}

2) Memory
-  Airtable base/table must exist with fields: Memory, User, Created (Created auto-managed).
-  In Save Memory and Get memories nodes, align Base, Table, and filterByFormula with your setup.
-  Simple Memory:
  	- sessionKey = {{ $('If').item.json.message.chat.id }}
  	- contextWindowLength = 30 (adjust as needed)

3) Tools
-  Google Calendar: choose your calendar, test get/create/update/delete.
-  Gmail: set “returnAll/simplify/messageId” via $fromAI or static defaults.
-  Notion: set your databaseId.
-  SerpAPI: ensure the key is valid.

4) Agent (AI node)
-  SystemMessage: customize role, name, and any constraints.
-  Text input: concatenates transcript or text into one prompt: {{ $json.text }}{{ $json.message.text }}

## How to use
-  Send a text or voice message to your bot in Telegram.
-  The agent replies in the same chat, optionally performing tool actions.
-  New personal facts you mention are silently summarized and stored in Airtable for future context.

## Customization ideas
-  Replace Grok with another LLM if desired.
-  Add more tools: Google Drive, Slack, Jira, GitHub, etc.
-  Expand memory schema (e.g., tags, categories, confidence).
-  Add guardrails: profanity filters, domain limits, or cost control.
-  Multi-user support: store chat-to-user mapping and separate memories by user.
-  Add summaries: a daily recap message created from new memories.

## Limits and notes
-  Tool latency: calls to Calendar, Gmail, Notion, and SerpAPI add response time.
-  Audio size/format: OpenAI transcription works best with common formats and short clips.
-  Memory growth: periodically archive old Airtable entries, or change Aggregate window.
-  Timezone awareness: Calendar operations depend on your Google Calendar settings.

## Privacy and safety
-  Sensitive info may be saved to Airtable; restrict access to the base.
-  Tool actions operate under your connected accounts; review scopes and permissions.
-  The agent may call external APIs (SerpAPI, OpenAI); ensure this aligns with your policies.

## Example interactions
-  “Schedule a 30‑min catch‑up with Alex next Tuesday afternoon.”
-  “What meetings do I have in the next 4 weeks?”
-  “Summarize my latest emails from Product Updates.”
-  “What did I say I’m reading?” (agent recalls from memories)
-  Voice note: “Remind me to call the dentist this Friday morning.” → agent transcribes and creates an event.

## Tags
-  telegram, agent, memory, grok, openai, airtable, google-calendar, gmail, notion, serpapi, voice, automation

## Changelog
-  v1: First release with Telegram agent, short/long-term memory, voice transcription, and tool integrations for web, calendar, email, and Notion.

## 🔗 Nodes Used

Airtable, Telegram, Telegram Trigger, AI Agent, Simple Memory, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
