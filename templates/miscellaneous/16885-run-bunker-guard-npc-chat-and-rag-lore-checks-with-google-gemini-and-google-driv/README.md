# 🔧 Run Bunker Guard NPC chat and RAG lore checks with Google Gemini and Google Drive

> ⚡ **23 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow powers dynamic character interactions for investigative games. It ingests lore from Google Drive into a vector database, using Google Gemini agents to generate daily briefings, spawn NPCs, and roleplay interrogations via a webhook.

## How it works
1. Runs on a manual trigger to download a lore PDF from Google Drive, split it into chunks, create Google Gemini embeddings, and store them in an in-memory vector store for retrieval.
2. Receives a POST webhook request from the game client containing game state and an `action` value (`briefing`, `init`, or `chat`).
3. Routes the request based on `action` to either generate a morale-based daily intel briefing, create a new NPC profile for the day, or generate an in-character reply to the player’s interrogation message.
4. When factual lore is needed (routes, locations, prices, rules, professions), the Gemini agent queries the `Database_Bunker` vector-search tool to ground the response in the ingested PDF.
5. Maintains short conversation context per player using a buffer memory keyed by `playerId` for ongoing chat and NPC interactions.
6. Returns the agent output to the caller as clean JSON via the webhook response.
7. Optionally, triggers on an n8n chat message to run a standalone Gemini testing agent that also uses `Database_Bunker` and returns a JSON reply.

## Setup
1. Add Google Gemini (PaLM) API credentials for both the chat model and embeddings nodes.
2. Add a Google Drive OAuth2 credential and update the Google Drive file URL/ID so the lore PDF is accessible.
3. Run the manual “Execute workflow” trigger once to ingest the PDF and populate the in-memory vector store before using the webhook/chat features.
4. Copy the webhook URL and configure your game/client to send POST requests with the required fields (including `action`, and for chat memory `playerId`).

## 🔗 Nodes Used

Webhook, Google Drive, AI Agent, Simple Memory, Recursive Character Text Splitter, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
