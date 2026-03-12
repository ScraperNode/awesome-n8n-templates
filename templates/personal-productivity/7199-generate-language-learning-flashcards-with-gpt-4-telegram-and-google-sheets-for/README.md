# ⚡ Generate language learning flashcards with GPT-4, Telegram and Google Sheets for Anki

> ⚡ **931 views** · ⚡ [Personal Productivity](../)

## Description

## How it works
- Use Telegram to send in new phrases (`flashcard front`)
- You can also manually input phrase in the workflow itself
- ChatGPT generates provided phrase description (in English but you can change it) including multiple meanings & generates  examples of using the phrase in a sample sentence (`flashcard back`)

## Steps to setup
- Provide your Telegram bot API key (optional)
- Provide your OpenAI key
- Provide Google Sheets credentials

## How to import flashcards from Google Sheets into Anki
- Use Google Sheets to Anki add-on: [1871608121](https://ankiweb.net/shared/info/1871608121)
- In Anki simply click `Sync Decks` and you're done :)

Enjoy

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
