# 🎫 Triage emails and build a morning digest with a local Ollama LLM

> ⚡ **34 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow triages emails with a local Ollama LLM (gemma4:e4b), flags urgent messages for immediate alerting, and compiles a morning digest grouped by urgency categories.

## How it works
1. Runs manually and generates a sample set of incoming emails.
2. Sends each email to Ollama (gemma4:e4b) with a prompt that classifies it as URGENT, REPLY_TODAY, FYI, or JUNK and returns structured JSON.
3. Parses the LLM output into JSON and falls back to a safe default classification if the response is malformed.
4. Separates emails marked URGENT and formats an urgent alert message for each one.
5. Aggregates all classified emails into a single morning digest text grouped by category with suggested actions and totals.
6. If the workflow errors, captures the failure details and outputs a structured error record.

## Setup
1. Set up an Ollama API credential in n8n that points to your Ollama server (for example, http://host.docker.internal:11434).
2. Ensure the specified Ollama model (gemma4:e4b) is available locally, or update the model name in the Ollama Chat Model configuration.
3. Replace the sample email generator with your real email source (for example, Gmail or Microsoft Outlook) and add a delivery step for urgent alerts and the digest (for example, Slack or email).

## Requirements
- n8n 1.19.4 or later (LangChain nodes required)
- Ollama running locally with a chat model (tested with gemma4:e4b)

## Customization
- Edit the classification prompt in the Classify Email node to add or change urgency categories
- Swap the Ollama Chat Model for OpenAI or Anthropic by replacing the LLM sub-node
- Connect Slack, Telegram, or email after the Format Urgent Alert node for instant notifications

## 🔗 Nodes Used

Basic LLM Chain, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
