# 🔧 Give AI astrology readings via chat and Telegram with RoxyAPI, Gemini, OpenAI and Claude

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
A multi-agent AI astrology reader for n8n web chat and Telegram. A reader agent hands each question to six specialist agents with live RoxyAPI calculations, saves every birth profile, writes cross-system compatibility reports and sends Telegram subscribers a daily forecast. Runs on Gemini, OpenAI or Claude.

## How it works
1. A message from the hosted chat or Telegram, or the 7:00 schedule, enters one Workflow settings node that picks the AI provider.
2. Chat and Telegram messages become one session, and the saved birth profile loads from the astrology_profiles Data Table.
3. The AI astrology reader, with conversation memory, finds the birth city, asks for missing birth details one at a time and saves the profile.
4. It hands each question to the specialist agent that owns it: Western astrology, Vedic astrology, numerology, tarot and I Ching, Human Design or Chinese BaZi. Each specialist has its own RoxyAPI tools, so every chart, number and card comes from a live calculation.
5. A compatibility request goes to four specialists (synastry, gun milan, numerology and BaZi compatibility) and comes back as one report: a verdict, the result from each system, and where they agree and differ.
6. The answer goes back on the channel the message came from.
7. Every morning at 7:00, each Telegram subscriber gets a forecast built from their personal forecast digest, personal day number and the Moon phase, with a sky alert on days with a major transit or a new or full Moon.

## Setup
1. Install the RoxyAPI node from the nodes panel. It is verified, so it works on n8n Cloud and self-hosted.
2. Run "Run once to create the profile table" to create the astrology_profiles Data Table.
3. Open any RoxyAPI node and add your RoxyAPI key. n8n applies it to every RoxyAPI node.
4. Add a key to the Google Gemini, OpenAI or Anthropic model node and set aiProvider in Workflow settings to gemini, openai or anthropic. With one key, delete the other two model nodes and connect yours to all three Model inputs of the Model selector.
5. For Telegram, add a bot token from BotFather to the three Telegram nodes. 
6. For web chat only, delete them. Activate the workflow and press Open chat.

## Requirements
- n8n 2.x with Data Tables, on Cloud or self-hosted
- The RoxyAPI node and a RoxyAPI key
- A Google Gemini, OpenAI or Anthropic API key
- Optional: a Telegram bot token

## Customization
- Add any RoxyAPI operation to a specialist, such as Vedic divisional charts, solar returns or astrocartography
- Add a specialist for another domain, such as dreams, angel numbers, crystals or feng shui
- Edit a specialist system message to change its voice
- Change the morning hour on Every morning at 7
- Set the Language option on any RoxyAPI tool for answers in 10+ languages

## Additional info
Walkthrough video: https://youtu.be/QYLg9g_YrzE
Source and README: https://github.com/RoxyAPI/n8n-ai-astrology-chatbot

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
