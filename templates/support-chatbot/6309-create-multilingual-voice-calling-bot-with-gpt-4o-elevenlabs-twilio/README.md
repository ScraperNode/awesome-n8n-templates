# 💬 Create multilingual voice calling bot with GPT-4o, ElevenLabs & Twilio

> ⚡ **7,402 views** · 💬 [Support Chatbots](../)

## Description

# AI Voice Calling Bot - OpenAI GPT-4o + ElevenLabs + Twilio Integration for Multilingual Appointment Booking & Service Orders

## Overview

Transform your business with an intelligent voice calling bot that handles customer calls automatically in 25+ languages. This N8n workflow integrates OpenAI GPT-4o, ElevenLabs text-to-speech, and Twilio for seamless appointment scheduling, pizza orders, and service bookings.

## Key Features

- **Multilingual Support**: Conversations in English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Arabic, and 20+ more languages
- **Natural AI Conversations**: GPT-4o powered responses with ElevenLabs realistic voice synthesis
- **Multi-Service Handling**: Appointments, orders, and service requests with automatic logging
- **Real-time Processing**: Instant speech-to-text and audio response generation

## Prerequisites

- N8n instance (self-hosted or cloud)
- Twilio account with phone number
- OpenAI API key (GPT-4o access)
- ElevenLabs API credentials
- Google Sheets access
- Cloud storage for audio files

## Setup Instructions

### Step 1: Configure Credentials
Add API keys for OpenAI, ElevenLabs, Twilio, and Google Sheets in N8n credentials manager.

### Step 2: Prepare Data Storage
Create Google Sheets for call logs and appointments with columns: timestamp, caller_id, speech_input, ai_response, language, call_sid.

### Step 3: Configure Twilio
Set webhook URL to your N8n endpoint: `https://your-n8n-instance.com/webhook/voice-webhook`

### Step 4: Update Sheet IDs
Replace placeholder Google Sheet IDs in workflow nodes with your actual sheet IDs.

## Customization Options

- **Voice Settings**: Adjust ElevenLabs multilingual voice models and parameters
- **AI Behavior**: Modify system prompts for specific business needs and languages
- **Service Types**: Add custom service handling logic
- **Business Hours**: Implement language-specific operating hours

## Monitoring

Track call analytics, language preferences, conversion rates, and customer satisfaction across all supported languages through automated Google Sheets logging.

Ready for production use with comprehensive error handling and scalability for global businesses.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
