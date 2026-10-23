# ⚡ Look up English vocabulary via Telegram and save results to Notion

> ⚡ **742 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
A personal Telegram bot that looks up English words and saves every entry to Notion. Send a word by typing it, as a voice message, or as a photo, and get its definition, translation, part of speech, and an example sentence.

## How it works
1. You send a word to your Telegram bot as text, a voice message, or a photo.
2. The workflow detects the input type. Voice messages are transcribed with Whisper, and photos are scanned with GPT-4o-mini Vision OCR. Voice and photo files are downloaded through the Telegram file API.
3. A GPT-4.1-mini agent checks the spelling and returns the word's definition, translation, part of speech, and an example sentence. A Structured Output Parser keeps the result in the same shape every time.
4. The entry is saved to Notion.

## Setup
1. Create a Telegram bot and add its token to n8n as a Telegram credential.
2. Add an OpenAI credential with your API key.
3. Add a Notion credential, give it access to the place in Notion where entries should go, and select that location in the Notion node.
4. Open the Config node and set TARGET_LANGUAGE to the language you want translations in.
5. Check that each Telegram, OpenAI, and Notion node uses the right credential.
6. Activate the workflow and send your bot a word to test it.

## Requirements
- A Telegram bot token
- An OpenAI API key (used for Whisper, GPT-4o-mini Vision, and GPT-4.1-mini)
- A Notion account

## Customization
- Change TARGET_LANGUAGE in the Config node to translate into any language, for example Traditional Chinese, Japanese, or Spanish.

## Additional info
Built by Jason Chuang (AI process automation consultant) — https://jasonchuang.com

Want more AI automation templates? Check out the Content Automation Bundle: https://jasonchuang0818.gumroad.com/l/n8n-content-automation-bundle

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
