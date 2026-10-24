# 🔧 Plan Telegram trip itineraries with Google Gemini and SerpAPI

> ⚡ **8 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow polls Telegram every minute for new user messages, uses Google Gemini to extract trip details, calculates a budget split, and then generates and sends a grounded day-by-day itinerary using SerpAPI search results back to the same Telegram chat.

## How it works
1. Runs every minute on a schedule and calls the Telegram Bot API getUpdates endpoint to fetch recent messages.
2. Selects one valid new text message, captures the chat context, and acknowledges updates back to Telegram using an offset so they are not reprocessed.
3. Uses Google Gemini to parse the message into structured trip parameters (destination, days, budget, currency, style, interests, travellers).
4. Computes a per-category budget breakdown and builds a planning prompt, then checks whether required details are present.
5. If details are missing, sends a Telegram message asking the user for the specific missing fields.
6. If details are complete, uses Google Gemini with SerpAPI web search to find real places and generate a structured itinerary with cost estimates and tips.
7. Formats the itinerary into an HTML Telegram message with a budget summary and sends it back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with BotFather, replace REPLACE_WITH_BOT_TOKEN in both Telegram Bot API request URLs, and add Telegram API credentials for the send-message steps.
2. Add Google Gemini (Google PaLM/Gemini) API credentials and select the desired Gemini chat model for both Gemini model nodes.
3. Add a SerpAPI key for the SerpAPI tool so the planner can search for real hotels, restaurants, and attractions.
4. Start a chat with your bot (or add it to a group) so it can receive messages via polling, then activate the workflow and keep n8n running continuously.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, SerpApi (Google Search), Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
