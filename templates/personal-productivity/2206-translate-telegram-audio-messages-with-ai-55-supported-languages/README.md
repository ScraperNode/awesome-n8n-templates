# ⚡ Translate Telegram audio messages with AI (55 supported languages)

> ⚡ **13,644 views** · ⚡ [Personal Productivity](../)

## Description

### Use case

This workflow enables a Telegram bot that can:

- Accept speech input in one of 55 supported languages
- Automatically detect the language spoken and translate the speech to another language 
- Responds back with the translated speech output.

This allows users to communicate across language barriers by simply speaking to the bot, which will handle the translation seamlessly.

### How does it work?

#### Translation
In the translation step the workflow converts the user's speech input to text and detects the language of the input text. 

If it's English, it will translate to French. If it's French, it will translate to English.

To change the default translation languages, you can update the prompt in the AI node.

#### Output
In the output step, we provide the translated text output back to the user and speech output is generated in the translated language.

### Setup steps
1. Obtain Telegram API Token
- Start a chat with the BotFather.
- Enter /newbot and reply with your new bot's display name and username.
- Copy the bot token and use it in the Telegram node credentials in n8n.

2. Update the Settings node to customize the desired languages

3.  Activate the flow 

### Full list of supported languages
All supported [languages](languages):

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
