# 📊 Review business ideas as a virtual board with Anthropic Claude

> ⚡ **76 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This chat-driven workflow uses Anthropic Claude to act as a virtual Board of Directors, sending your business idea to five executive agents (CMO, CFO, CPO, COO, and CLO) and then synthesizing their feedback into final board meeting minutes with a verdict.

## How it works
1. Receives a business idea from an n8n Chat trigger session.
2. Packages the chat input with shared output rules so each executive responds in a consistent rating/pros/cons/action format.
3. Sends the idea in parallel to five Anthropic Claude agents acting as CMO, CFO, CPO, COO, and CLO for domain-specific critiques.
4. Merges the five executive responses and formats them into a single Markdown document grouped by role.
5. Sends the consolidated opinions to a Chairman/CEO Anthropic Claude agent that mediates disagreements and produces final board meeting minutes with priorities, risks, and a GO/NO-GO/PIVOT verdict.
6. Uses a buffer window memory keyed to the chat session ID to keep the Chairman’s responses aware of recent conversation context.

## Setup
1. Add an Anthropic API credential and select the Claude model for each executive agent and the Chairman/CEO agent.
2. Use the Chat trigger in an n8n chat interface and copy the generated chat/webhook URL into the client that initiates the conversation.
3. Optionally edit the output rules text to change the required response schema or level of detail.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
