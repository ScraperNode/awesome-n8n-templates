# 💬 Transcribe voice messages and classify intent with OpenAI Whisper and GPT-4o-mini

> ⚡ **48 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow downloads an audio file, transcribes it with OpenAI Whisper, classifies the transcript intent using OpenAI GPT-4o-mini, and returns a simple response message based on the detected category.

## How it works
1. Runs when you manually execute the workflow.
2. Sets a sample audio URL (JFK .flac) and downloads the audio file via an HTTP request.
3. Sends the audio file to OpenAI Whisper to generate a text transcription.
4. Passes the transcript to OpenAI GPT-4o-mini to classify it as GREETING, QUESTION, REQUEST, or OTHER.
5. Normalizes the model output to an uppercase intent value and routes execution based on the intent.
6. Returns a predefined response message for the matched intent branch.

## Setup
1. Add OpenAI API credentials for both the Whisper transcription step and the GPT-4o-mini intent classification step.
2. Replace the sample audio URL with your own audio source, or swap the manual trigger for a webhook that provides an audio URL.
3. If you use a different audio format, ensure the downloaded file is a supported type for OpenAI transcription (and adjust the MIME type/value if you rely on it elsewhere).

## Customization
- Connect to any WhatsApp gateway — Evolution API, Twilio, or WhatsApp Cloud API
- Add custom intent categories to match your business (COMPLAINT, APPOINTMENT, PRICING)
- Route each intent to a different workflow — CRM update, human escalation, auto-reply
- Swap GPT-4o-mini for Claude Haiku to reduce costs on high-volume deployments
- Extend with RAG to give context-aware responses based on your knowledge base

## Additional info
This workflow is a simplified extract from a production multi-tenant 
WhatsApp AI system handling real customer conversations.

Built with: n8n · OpenAI Whisper · GPT-4o-mini · Evolution API · Docker · Oracle Cloud

Tags: whatsapp, voice, audio, transcription, whisper, intent, classification, 
chatbot, ai-agent, automation, openai, gpt4o-mini, customer-support, nlp

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
