# 💬 Route secure SaaS helpdesk chats with SoterAI, Groq, Pinecone and Cohere

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs a chat-based SaaS helpdesk that protects against prompt injection and redacts sensitive data using SoterAI, then routes requests to Groq-powered agents for knowledge-base answers, bug triage, or human handoff, and returns a guarded response.

## How it works
1. Receives a chat message via an n8n Chat Trigger and forwards the user text and session ID to SoterAI Input Guard.
2. If SoterAI flags the message as unsafe, it formats a security incident event and replies that the request was blocked.
3. If the message is allowed, it normalizes the request text (using the guarded/redacted version when available) and classifies intent as bug report, human escalation, or general support.
4. For bug reports, it uses a Groq chat model to summarize and severity-tag the issue, generates a simple bug ticket ID, and prepares a confirmation message.
5. For escalation requests, it uses a Groq chat model to draft an acknowledgement, generates a handoff ticket ID, and prepares a human-follow-up message.
6. For general support questions, it uses a Groq chat model and forces a Pinecone vector-store tool lookup to answer from the knowledge base.
7. It sends the drafted response through SoterAI Output Guard for redaction and returns the final message to the chat.

## Setup
1. Create and connect credentials for SoterAI and Groq, and ensure the Chat Trigger is configured with your preferred authentication method.
2. Set up a Pinecone index and credentials, then update the Pinecone index selection in the vector store tool to match your environment.
3. Provide an embeddings provider credential (Cohere, as configured) and ensure your knowledge base content is ingested into the same Pinecone index before expecting KB answers.
4. Review and adjust the SoterAI allowed topics and system context to match your support scope, and add a real destination (e.g. Slack, database, Google Sheets) after the security incident output if you need an audit log.

## Requirements
- • n8n version 1.0.0 or higher
- • n8n-nodes-soterai community node installed (`npm i n8n-nodes-soterai`)
- • Groq API Key (for LLM inference)
- • Pinecone API Key & Index (for knowledge base vector search)
- • Cohere API Key (for embeddings / reranking)

## Customization
- • You can switch the LLM from Groq to OpenAI (GPT-4o) or Anthropic Claude in the Agent model node.
- • Adjust SoterAI risk thresholds or enable local in-process detection engine for zero external API latency.
- • Connect your own CRM, Slack, or Zendesk nodes to route escalated tickets.

## Additional info
This workflow integrates SoterAI's multi-layer AI security framework to protect SaaS customer support pipelines against Prompt Injection (OWASP LLM01), Data Exfiltration, and PII leakage.

## 🔗 Nodes Used

AI Agent, Embeddings Cohere, OpenAI Chat Model, Simple Memory, Pinecone Vector Store, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
