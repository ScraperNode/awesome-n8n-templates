# 💬 Build a multi-agent support triage system with Amazon Bedrock AgentCore and Slack

> ⚡ **57 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow receives an n8n Chat message, uses Amazon Bedrock AgentCore to triage it and route it to one of three specialist agents that share customer memory, then posts the specialist’s reply to a Slack channel.

## How it works
1. Receives a new message in n8n Chat and starts a run for that chat input.
2. Sets customer context values including the agent name, the customer/actor ID derived from the chat session, the question text, and the target Slack channel.
3. Sends the question to an Amazon Bedrock AgentCore triage agent that classifies the request as analysis, advice, or research and provisions a shared harness with managed memory if needed.
4. Parses and validates the triage agent’s JSON output, falls back to the research category when parsing fails, and passes along the shared harness ARN.
5. Routes the request to the matching Amazon Bedrock AgentCore specialist (Analysis with code interpreter, Architecture with AWS skills, or Research) using the same harness ARN and actor ID so the team shares per-customer memory.
6. Cleans up the specialist response and posts a formatted message to Slack indicating which specialist answered and the customer ID.

## Setup
1. Create an Amazon Bedrock AgentCore API credential and select it on the triage and all three specialist AgentCore nodes.
2. Create a Slack OAuth credential, set the Slack channel name in the customer context (for example, `#support`), and invite the Slack app/bot to that channel.
3. Open the n8n Chat for this workflow (hosted chat) and send a message to generate a triage decision and a specialist reply.

## 🔗 Nodes Used

Slack, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
