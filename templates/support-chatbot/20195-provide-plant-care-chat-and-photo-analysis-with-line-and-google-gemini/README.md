# 💬 Provide plant care chat and photo analysis with LINE and Google Gemini

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a LINE Official Account into a plant care assistant that can analyze plant photos and answer follow-up questions, using Google Gemini for AI responses and n8n Data Tables to store plant profiles, observations, conversation history, and the user’s language preference.

## How it works
1. Receives an incoming LINE Messaging API webhook event and routes it based on whether the message is an image or text.
2. For image messages, downloads the image from the LINE content API and loads the user’s active plant, preferred language, and recent conversation history from n8n Data Tables.
3. Sends the image and context to Google Gemini to identify the plant (or defer when uncertain) and assess visible health symptoms, possible causes, and care advice.
4. If the image matches the active plant, keeps the existing plant identity; if it is a new plant, upserts a plant profile and updates the user’s active plant; if uncertain, asks for a better diagnostic photo without changing the active plant.
5. Stores the image-based analysis as a plant observation in an n8n Data Table and replies to the user in LINE with a formatted summary and confidence.
6. For text messages, loads the user’s active plant, recent observations, and conversation history, then asks Google Gemini to generate a contextual reply.
7. Saves the user and assistant messages to conversation history, updates the saved preferred language only when the user explicitly requests a language change, and replies in LINE.

## Setup
1. Create a LINE Official Account, enable the Messaging API, and configure the webhook URL to point to the workflow’s production webhook path (plantcare-line-webhook).
2. Add a LINE Messaging API channel access token as an HTTP Header Auth credential in n8n and use it for the LINE content download and reply requests.
3. Add a Google Gemini (Google PaLM) API credential for the two Gemini nodes used for image analysis and chat responses.
4. Create four n8n Data Tables named plant_users, plants, plant_observations, and conversations with the columns used in the workflow, and select the correct table IDs in each Data Table node.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
