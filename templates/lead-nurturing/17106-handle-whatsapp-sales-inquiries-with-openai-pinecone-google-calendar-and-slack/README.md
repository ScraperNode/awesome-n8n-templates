# 💬 Handle WhatsApp sales inquiries with OpenAI, Pinecone, Google Calendar, and Slack

> ⚡ **94 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow handles inbound WhatsApp Business messages with an OpenAI-powered sales agent that uses Pinecone RAG for product answers and Google Calendar tools for scheduling, then either replies on WhatsApp or hands the conversation to Slack, with Slack-based error alerts.

## How it works
1. Triggers on every inbound WhatsApp Business message and checks whether the payload contains a text body.
2. Drops non-text messages (such as images or voice notes) and continues only with text conversations.
3. Uses an OpenAI chat model with per-customer session memory to generate a concise sales reply and decide whether a human handoff is needed.
4. Lets the agent query a Pinecone-backed product catalog via OpenAI embeddings to answer pricing, specs, and availability questions.
5. Lets the agent check availability and book appointments in Google Calendar when the customer requests scheduling.
6. Parses the agent’s HANDOFF flag and either posts the customer message plus draft reply to a Slack channel or sends the reply back to the customer on WhatsApp.
7. Sends a Slack alert to an ops channel if any step in the workflow fails.

## Setup
1. Connect WhatsApp Business Cloud credentials and set the WhatsApp Phone Number ID used to send replies.
2. Add OpenAI API credentials for both the chat model and embeddings.
3. Configure Pinecone credentials and replace the Pinecone index name used by the product catalog tool.
4. Connect Google Calendar credentials and replace the target calendar ID used for availability checks and bookings.
5. Connect Slack credentials and set the channel IDs for both the handoff channel and the ops/alerts channel.

## 🔗 Nodes Used

Slack, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
