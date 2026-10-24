# 💬 Run a Telegram hotel search bot with OpenAI and WinWin MCP

> ⚡ **17 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers a Telegram hotel demo bot that uses OpenAI and the WinWin MCP to search live hotel offers, send rich offer cards with booking links, and store/retrieve validated hotel and room photo galleries via an n8n Data Table.

## How it works
1. Triggers on incoming Telegram messages and button taps (callback queries) and routes them by type (start, free-text search, gallery request, or other actions).
2. Sends a welcome message for "/start" or acknowledges a search request with a “searching” message.
3. Uses an OpenAI-powered agent with Postgres chat memory to interpret the user’s request and call the WinWin MCP search (and filters when needed) while validating photo URLs via the Photo Validation tool.
4. Parses the agent’s structured output into a list of up to three offers and, if none are returned, sends the search summary as a “no results” Telegram message.
5. Formats each offer into a Telegram card with photos, pricing, dates, highlights, a Google Maps link, and inline buttons for a photo gallery and the booking URL.
6. Stores all hotel- and room-level photo URLs for the displayed offers in an n8n Data Table so galleries can be shown later without re-running the WinWin search.
7. When the user taps “View Gallery”, lets them choose hotel or room photos, loads the matching rows from the Data Table, validates reachable URLs, and sends the photos back to Telegram in appropriately sized media groups.

## Setup
1. Create and select a Telegram Bot credential (BotFather token) for the Telegram Trigger and all Telegram send nodes.
2. Add an OpenAI API credential and confirm the selected chat model is available for tool calling.
3. Add a WinWin MCP Bearer token credential and keep the MCP endpoint URL as configured.
4. Add Postgres credentials for the chat memory node and ensure the database is reachable from your n8n instance.
5. Create an n8n Data Table (for example, `OfferPhotos`) with the required columns and select its Data Table ID in both the “Insert Offer Photos” and “Get Gallery Photos” nodes.

## Requirements
- Requirements: Access to the WinWin MCP, OpenAI (or any other tool-calling LLM) API key, Telegram bot token, and Postgres database for chat memory and photo data table.

## Additional info
As a demo, this workflow is focused more on clarity than on production hardening – its purpose is to demonstrate an example of a full agent pattern (free-text parsing, tool-driven filtering, photo validation, batch pagination, stateful gallery lookup) based on the WinWin MCP.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
