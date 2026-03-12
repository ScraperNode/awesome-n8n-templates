# ⚡ Travel AI agent - AI-powered travel planner

> ⚡ **5,104 views** · ⚡ [Personal Productivity](../)

## Description

## Overview

An n8n workflow automating business travel planning via Telegram. Uses AI and APIs to find and book flights/hotels efficiently.

## Prerequisites

- **Telegram Bot** (BotFather)
- **API Keys**: OpenAI (transcription), SerpAPI (flights/hotels), DeepSeek (AI processing)
- **n8n Instance** with API access

## Setup Instructions

1. **Import Workflow**: Upload JSON to n8n.
2. **Configure API Credentials**: Set up Telegram, OpenAI, SerpAPI, and DeepSeek keys.
3. **Webhook Activation**: Ensure Telegram webhook is active with HTTPS.
4. **Test**: Send a Telegram message and verify execution.

## Workflow Operation

### 1. User Input Processing

- Telegram bot triggers workflow, extracts text/audio.
- OpenAI transcribes voice messages.
- AI (DeepSeek) extracts key travel details (locations, dates, accommodation needs).

### 2. Travel Search

- **Flights**: Uses SerpAPI for flight options (airlines, times, prices).
- **Hotels**: Fetches accommodations with dynamic check-out date.

### 3. AI Recommendations & Customization

- **DeepSeek** generates structured travel plans.
- Users can **modify prompts** to adjust AI responses for personalized results.
- Professional, well-structured responses with links.

### 4. Response Delivery

- Sends travel recommendations via Telegram with clear details.

## Use Cases

Ideal for business professionals, executive assistants, frequent travelers, and small businesses.

## Customization & Troubleshooting

- Adjust memory handling and API calls.
- Modify prompts to refine AI output.
- Ensure API keys are active and network is accessible.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
