# 🔧 Play RPG with Groq Dungeon Master via Telegram voice messages

> ⚡ **293 views** · 🔧 [Miscellaneous](../)

## Description

## Dungeons and Goblins — AI Telegram Voice Adventure with Persistent Memory

This n8n template demonstrates how to use an AI agent with persistent memory to run a structured, rules-driven fantasy role-playing game entirely through Telegram voice messages. The workflow acts as a Dungeon Master, narrating scenes, resolving mechanics, performing dice rolls when authorized, and explicitly saving game state between turns.

## How it works

- A player actions are provided to Telegram bot via voice messages.

- The AI agent loads the current game state from n8n memory.

- A strict system prompt enforces rules, turn flow, and narration.

- When an action requires a dice roll, the agent waits for player authorization.

- Once authorized, the AI rolls, resolves the outcome, and applies changes.

- All state updates are emitted as structured data and saved to memory.

- The request and response are processed in Groq's STT and TTS.

## Use cases

- Solo text-based fantasy campaigns

- Persistent AI-driven adventures

- Testing stateful AI agents in n8n

- Educational examples of memory-aware workflows

## Requirements

- Groq API token (free tier supported)

- Telegram bot API token

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
