# 💬 Handle Tamil real estate voice inquiries with OpenAI, Sarvam AI and Google Sheets

> ⚡ **203 views** · 💬 [Support Chatbots](../)

## Description

## Description
This workflow builds a Tamil voice AI assistant for real estate inquiries. It handles incoming calls or messages, converts speech to text, generates AI responses, converts them back to speech, and logs lead data into Google Sheets.

## What this template demonstrates
- Voice-based AI assistant using STT and TTS  
- Conversation handling with memory  
- AI response generation with structured prompts  
- Lead capture and logging  
- Escalation to human agents  

## Use cases
- Real estate enquiry automation  
- Voice-based customer support  
- Lead qualification systems  
- AI call assistant for small businesses  

## How it works
• Receives input via webhook  
• Converts audio to text using STT  
• Detects intent and escalation conditions  
• Generates response using AI  
• Converts response to speech and returns it  
• Logs lead data into Google Sheets  

## How to use
- Deploy the workflow  
- Configure webhook endpoint  
- Connect OpenAI, Sarvam STT/TTS, and Google Sheets  
- Send audio or text requests to the webhook  

## Requirements
- OpenAI API access  
- Sarvam STT and TTS API access  
- Google Sheets account  
- Public webhook endpoint  

## Customising this workflow
- Modify AI prompt for different industries  
- Add CRM integration instead of Google Sheets  
- Adjust escalation rules  
- Support multiple languages  
- Use this [Voice Call HTML File For Testing](https://drive.google.com/drive/u/1/folders/18LoW0wVI6TFJiBb6mV1e85DbrxoZuYsG), Download it and test the agent by live conversation.

## Good to know
- Handles both audio and text input  
- Includes fallback for failed speech recognition  
- Maintains conversation history  
- Supports real-time response generation  

## Who this is for
- Automation engineers  
- Real estate agencies  
- AI chatbot builders  
- Businesses needing voice assistants

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
