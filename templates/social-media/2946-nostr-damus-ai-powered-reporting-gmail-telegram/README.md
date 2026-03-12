# 📱 #️⃣Nostr #damus AI powered reporting + Gmail + Telegram

> ⚡ **2,641 views** · 📱 [Social Media & Email Marketing](../)

## Description

The n8n Nostr Community Node is a tool that integrates Nostr functionality into n8n workflows, allowing users to interact with the Nostr protocol seamlessly. It provides both read and write capabilities and can be used for various automation tasks.

**Disclaimer**
This node is ideal for self-hosted n8n setups, as ++community nodes are not supported on n8n cloud++. It opens up exciting possibilities for integrating workflows with the decentralized Nostr protocol.

![image.png](fileId:961)

## n8n Community Node for Nostr 
[n8n-nodes-nostrobots](https://github.com/ocknamo/n8n-nodes-nostrobots)

![image.png](fileId:960)

## Features
- **Write Operations**: Send notes and events (kind1) to the Nostr network.
- **Read Operations**: Fetch events based on criteria such as event ID, public key, hashtags, mentions, or search terms.
- **Utility Functions**: Convert events into different formats like naddr or nevent and handle key transformations between bech32 and hex formats.
- **Trigger Events**: Monitor the Nostr network for specific mentions or events and trigger workflows automatically.

## Use Cases
- Automating note posting without exposing private keys.
- Setting up notifications for mentions or specific events.
- Creating bots or AI assistants that respond to mentions on Nostr.

## Installation
1. Install n8n on your system.
2. Add the Nostr Community Node to your instance.
3. Configure your credentials using a Nostr secret key (supports bech32 or hex formats).

## 🔗 Nodes Used

Telegram, Gmail, Markdown, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
