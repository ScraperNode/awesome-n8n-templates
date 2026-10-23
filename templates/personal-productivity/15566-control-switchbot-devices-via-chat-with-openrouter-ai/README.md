# ⚡ Control SwitchBot devices via chat with OpenRouter AI

> ⚡ **25 views** · ⚡ [Personal Productivity](../)

## Description

## Control SwitchBot Devices with AI via Chat

**What this workflow does:**
This workflow lets you control your SwitchBot smart home devices using natural language chat. Tell the AI what you want to do (e.g. "turn off the living room light"), and it will look up your devices, generate the correct SwitchBot API command, and send it automatically.

**Workflow steps:**
1. **When chat message received** — triggered by a user message in the n8n chat interface
2. **Set Credentials** — stores your SwitchBot API token and secret
3. **Get Auth** — generates a signed authentication header using HMAC-SHA256
4. **Get Device List** — fetches all registered devices from the SwitchBot API
5. **Generate API Request with AI** — the AI reads the device list and user request, then generates the correct API URL and body
6. **Send Device Command** — sends the POST request to SwitchBot to execute the command

**Requirements:**
- SwitchBot account with API token and secret
- OpenRouter API credentials (or swap for any compatible LLM)

## 🔗 Nodes Used

HTTP Request, AI Agent, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
