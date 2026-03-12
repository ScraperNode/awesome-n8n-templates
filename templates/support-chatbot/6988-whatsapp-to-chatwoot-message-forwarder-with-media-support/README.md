# 💬 WhatsApp to Chatwoot message forwarder with media support

> ⚡ **3,178 views** · 💬 [Support Chatbots](../)

## Description

## Description
Automates the forwarding of messages from WhatsApp (via Evolution API) to Chatwoot, enabling seamless integration between external WhatsApp users and internal Chatwoot agents. It supports both text and media messages, ensuring that customer conversations are centralized and accessible for support teams.

## What Problem Does This Solve?
Managing conversations across multiple platforms can lead to fragmented support and lost context. This subworkflow bridges the gap between WhatsApp and Chatwoot, automatically forwarding messages received via the Evolution API to a Chatwoot inbox. It simplifies communication flow, centralizes conversations, and enhances the support team's productivity.

### Features
 - Support for plain text messages
 - Support for media messages: images, videos, documents, and audio
 - Automatic media upload to Chatwoot with proper attachment rendering
 - Automatic contact association using WhatsApp number and Chatwoot API
 - Designed to work with Evolution API webhooks or any message source

## Prerequisites
Before using this automate, make sure you have:

 - Evolution API credentials with incoming message webhook configured
 - A Chatwoot instance with access token and API endpoint
 - An existing Chatwoot inbox (preferably API channel)
 - A configured HTTP Request node in n8n for Chatwoot API calls

## Suggested Usage
This subworkflow should be attached to a parent workflow that receives WhatsApp messages via the Evolution API webhook. Ideal for:

Centralized customer service operations

WhatsApp-to-CRM/chat routing

Hybrid automation workflows where human agents need to reply from Chatwoot

It ensures that all incoming WhatsApp messages are properly converted and forwarded to Chatwoot, preserving message content and structure.

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Execute Workflow Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
