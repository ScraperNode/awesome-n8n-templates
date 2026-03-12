# 💬 Create voice assistant interface with OpenAI GPT-4o-mini and text-to-speech

> ⚡ **4,676 views** · 💬 [Support Chatbots](../)

## Description

## Voice Assistant Interface with n8n and OpenAI

This workflow creates a voice-activated AI assistant interface that runs directly in your browser. Users can click on a glowing orb to speak with the AI, which responds with voice using OpenAI's text-to-speech capabilities.

## Who is it for?

This template is perfect for:
- Developers looking to add voice interfaces to their applications
- Customer service teams wanting to create voice-enabled support systems
- Content creators building interactive voice experiences
- Anyone interested in creating their own "Alexa-like" assistant

## How it works

The workflow consists of two main parts:

1. **Frontend Interface**: A beautiful animated orb that users click to activate voice recording
2. **Backend Processing**: Receives the audio transcription, processes it through an AI agent with memory, and returns voice responses

The system uses:
- Web Speech API for voice recognition (browser-based)
- OpenAI GPT-4o-mini for intelligent responses
- OpenAI Text-to-Speech for voice synthesis
- Session memory to maintain conversation context

## Setup requirements

- n8n instance (self-hosted or cloud)
- OpenAI API key with access to:
  - GPT-4o-mini model
  - Text-to-Speech API
- Modern web browser with Web Speech API support (Chrome, Edge, Safari)

## How to set up

1. Import the workflow into your n8n instance
2. Add your OpenAI credentials to both OpenAI nodes
3. Copy the webhook URL from the "Audio Processing Endpoint" node
4. Edit the "Voice Assistant UI" node and replace `YOUR_WEBHOOK_URL_HERE` with your webhook URL
5. Access the "Voice Interface Endpoint" webhook URL in your browser
6. Click the orb and start talking!

## How to customize the workflow

- **Change the AI personality**: Edit the system message in the "Process User Query" node
- **Modify the visual style**: Customize the CSS in the "Voice Assistant UI" node
- **Add more capabilities**: Connect additional tools to the AI Agent
- **Change the voice**: Select a different voice in the "Generate Voice Response" node
- **Adjust memory**: Modify the context window length in the "Conversation Memory" node

## Demo

Watch the template in action: https://youtu.be/0bMdJcRMnZY

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
