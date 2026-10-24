# ⚡ Estimate meal calories from Telegram text and photos with Google Gemini

> ⚡ **127 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This Telegram bot workflow lets an authorized user send meal details as text or a photo, uses Google Gemini to describe images, then uses an n8n AI Agent to estimate calories and replies in Telegram.

## How it works
1. Triggers when your Telegram bot receives a message.
2. Checks the sender’s Telegram chat ID against an allowed chat ID and replies with an unauthorized message if it doesn’t match.
3. Routes authorized messages by type, handling photos and text while rejecting unsupported types (for example, voice messages).
4. For photos, downloads the image from Telegram and uses Google Gemini to generate a detailed text description of the meal.
5. Combines the user’s text (if present) with the Gemini image description and sends it to an n8n AI Agent that can use a calculator tool and conversation memory.
6. Sends the AI Agent’s calorie estimate back to the user in Telegram.

## Setup
1. Create a Telegram bot with BotFather and add a Telegram API credential in n8n for the Telegram Trigger and Telegram send/download actions.
2. Add Google Gemini credentials in n8n to power both the Gemini image analysis and the Gemini chat model used by the AI Agent.
3. Replace the placeholder value in the “Edit Fields” step with the Telegram chat ID you want to authorize.
4. If you want voice messages supported, add an audio transcription step and route the “Voice” path to it, otherwise keep the unsupported-message reply as-is.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Calculator, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
