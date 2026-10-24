# 📊 Search Belgian secondhand deals with Koopje.ai and OpenRouter models

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow provides a Dutch-language chat agent that searches Belgian secondhand listings and auction lots via the koopje.ai API, optionally fetching full listing details, using an OpenRouter chat model and conversation memory to refine results. Sources: 2dehands.be, markplaats.nl, vavato.com, troc.com, troostwijkauctions.com, zoekertjes.be, auctelia.com, vlavem.com, etc.

## How it works
1. Receives a message from the n8n Chat trigger.
2. Uses an OpenRouter chat model with a Dutch system prompt to interpret the request and form a focused Dutch search query.
3. Calls the koopje.ai `/v1/search` endpoint to return matching listings with title, price (or auction house), location, source, and URL, optionally applying a maximum price when provided.
4. When needed, calls the koopje.ai `/v1/contents` endpoint for up to five selected URLs to fetch the full listing text and details.
5. Uses conversation memory to keep context across messages and responds in Dutch with per-result price, place, and the original link.

## Setup
1. Create a koopje.ai account, generate an API key, and add it to n8n as a Bearer Auth credential used by both HTTP tool calls.
2. Add an OpenRouter credential in n8n and select it in the OpenRouter Chat Model node (choose a model you have access to).
3. Open the n8n Chat interface for this workflow and ask for deals (optionally including a maximum price and location) to start searching.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
