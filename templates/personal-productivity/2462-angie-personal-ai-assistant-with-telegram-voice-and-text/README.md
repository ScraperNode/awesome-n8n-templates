# ⚡ Angie, personal AI assistant with Telegram voice and text

> ⚡ **300,650 views** · ⚡ [Personal Productivity](../)

## Description

**How it works:**

This project creates a personal AI assistant named Angie that operates through Telegram. Angie can summarize daily emails, look up calendar entries, remind users of upcoming tasks, and retrieve contact information. The assistant can interact with users via both voice and text inputs. 

**Step-by-step:**

Telegram Trigger: The workflow starts with a Telegram trigger that listens for incoming message events. The system determines if the incoming message is voice or text. If voice, the voice file is retrieved and transcribed to text using OpenAI's API Speech to Text

AI Assistant: The telegram request is passed to the AI assistant (Angie).

Tools Integration: The AI assistant is equipped with several tools:

- Get Email: Uses Gmail API to fetch recent emails, filtering by date.
- Get Calendar: Retrieves calendar entries for specified dates.
- Get Tasks: Connects to a Baserow (open-source Airtable alternative) database to fetch to-do list items.
- Get Contacts: Also uses Baserow to retrieve contact information.

Response Generation: The AI formulates a response based on the gathered information and sends back to the user on Telegram

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
