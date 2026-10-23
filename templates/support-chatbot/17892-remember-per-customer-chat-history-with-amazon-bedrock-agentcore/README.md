# 💬 Remember per-customer chat history with Amazon Bedrock AgentCore

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow uses the n8n chat trigger and Amazon Bedrock AgentCore to run a support assistant that keeps long-term, per-customer memory across separate chat sessions, then formats the agent response into a safe plain-text reply.

## How it works
1. Receives each incoming message from the n8n chat interface as a separate execution.
2. Sets the agent name, resolves a customer identifier (defaulting to the chat session ID), and passes through the user’s message.
3. Sends the message to Amazon Bedrock AgentCore with managed memory enabled, scoping long-term memory by actor ID (customer) and continuity by session ID.
4. Parses and normalizes the AgentCore response (including optionally fenced JSON) and returns a plain-text output for the chat.

## Setup
1. Create and select an Amazon Bedrock AgentCore API credential (AWS access key, secret, region, and execution role ARN).
2. Update the customer identifier mapping so `customerId` matches your real user ID (or keep the default chat session ID for testing).
3. Optionally customize the AgentCore system prompt and agent name to match your support policy and tone.

## 🔗 Nodes Used

Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
