# 💬 AI voice chat using webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs

> ⚡ **40,083 views** · 💬 [Support Chatbots](../)

## Description

## Who is this for?
This workflow is designed for businesses or developers looking to integrate voice-based chat applications with dynamic responses and conversational memory.

## What problem does this solve?
It automates AI-powered voice conversations, maintaining context between sessions and converting speech-to-text and text-to-speech.

## What this workflow does:
The workflow receives audio input, transcribes it using OpenAI, and processes the conversation using Google Gemini Chat Model (you can use OpenAI Chat Model). Responses are converted back to speech using ElevenLabs.

## Prerequisites:
You'll need API keys for:
* OpenAI (you can obtain it from OpenAI website)
* ElevenLabs (you can obtain it from their website)
* Google Gemini (You can obtain it from `Google AI Studio`)

## Setup:
* Configure you API keys
* Ensure that the value `(voice_message)` in the `"Path"` parameter  in the Webhook node is used as the name of the parameter that will contain the voice message you are sending via the HTTP Post request.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Simple Memory, Chat Memory Manager, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
