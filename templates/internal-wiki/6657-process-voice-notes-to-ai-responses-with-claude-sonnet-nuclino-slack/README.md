# 📖 Process Voice Notes to AI Responses with Claude Sonnet, Nuclino & Slack

> ⚡ **450 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow provides a way to capture detailed AI prompts using a voice note transcription service and then passes them on for completion to an AI agent.

To preserve outputs in a knowledge management system, the AI response and the prompt are combined into one document that is created in a Nuclino collection (note: the Nuclino step is configured manually with a HTTP request node).

### How it works

- A webhook receives voice note data from Voicenotes.com containing the title and transcript
- The transcript is extracted and sent to an AI Agent powered by OpenRouter's Claude Sonnet model
- The AI generates a structured response in markdown format with Summary, Prompt, and Response sections
- The original prompt and AI response are merged and prepared for multiple outputs
- A Nuclino document is created via HTTP Request with the structured content
- A Slack notification is sent with the prompt, response, and Nuclino note URL
- Both the original prompt and AI response are archived in NocoDB for future reference

### How to use

- The webhook trigger can be configured to receive data from Voicenotes.com or any service that provides title and transcript data
- Replace the manual trigger with webhook, form, or other triggers as needed
- Customize the AI system message to change response format and behavior
- Configure Nuclino workspace and collection IDs for proper document organization

### Requirements

- **OpenRouter account** for AI model access (Claude Sonnet)
- **Nuclino account** and API token for document creation
- **Slack workspace** with bot permissions for notifications
- **NocoDB instance** for archiving (optional)
- **Voicenotes.com account** for voice input (or alternative webhook source)

### Customising this workflow

- **AI Models**: Switch between different OpenRouter models by changing the model parameter
- **Response Format**: Modify the AI Agent system message to change output structure
- **Documentation Platforms**: Replace Nuclino HTTP Request with other documentation APIs
- **Notification Channels**: Add multiple Slack channels or other notification services
- **Archive Storage**: Replace NocoDB with other database solutions
- **Input Sources**: Adapt webhook to accept data from different voice note or transcription services

### Nuclino API 

The Nuclino API is documented [here](https://www.nuclino.com/api).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, NocoDB, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
