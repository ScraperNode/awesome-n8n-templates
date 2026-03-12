# 🎬 Translate audio using AI

> ⚡ **10,900 views** · 🎬 [Content Creation & Video](../)

## Description

### Overview

This workflow takes some French text, and translates it into spoken audio.

It then transcribes that audio back into text, translates it into English and generates an audio file of the English text.

To do so, it uses ElevenLabs (which has a free tier) and OpenAI.

### Setup

These steps should only take a few minutes:

1. In ElevenLabs, add a voice to your [voice lab](https://elevenlabs.io/voice-lab) and copy its ID. Add it to the 'Set voice ID' node
2. Get your ElevenLabs API key (click your name in the bottom-left of [ElevenLabs](https://elevenlabs.io/voice-lab) and choose ‘profile’)
3. In the 'Generate French audio' node, create a new header auth cred. Set the name to `xi-api-key` and the value to your API key
4. In the 'credential' field of the 'Transcribe audio' node, create a new OpenAI cred with your [OpenAI API key](https://platform.openai.com/api-keys)
5. Run the workflow by clicking the orange button at the bottom of the canvas

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
