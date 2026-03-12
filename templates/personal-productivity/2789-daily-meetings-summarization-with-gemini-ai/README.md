# ⚡ Daily meetings summarization with Gemini AI

> ⚡ **4,393 views** · ⚡ [Personal Productivity](../)

## Description

This workflow implements the Gemini AI chat model to summarize your daily meetings and send the summary to a Slack channel daily at 9 AM (or any other time you choose).

It automatically retrieves your Google Calendar events and feeds them to the model.

The workflow uses Google’s Gemini AI for response generation.

**How it works**
- The workflow uses a Scheduled Trigger Node as the main trigger.
- The AI Agent Node uses the Google Calendar action to retrieve relevant meeting data.
- The AI Agent sends the retrieved information to the Google Gemini Chat Model (gemini-flash).
- The Google Gemini Chat Model generates a summary and informative response based on today’s meetings.

**++Setup Steps++**
1. Google Cloud Project and Vertex AI API:

	- Create a Google Cloud project.
	- Enable the Vertex AI API for your project.

1. Google AI API Key:
	- Obtain a Google AI API key from Google AI Studio.
1. Credentials in n8n:
	- Configure credentials in your n8n environment for:
		- Google Gemini (PaLM) API (using your Google AI API key).
1. Import the Workflow:
	- Import this workflow into your n8n instance.
1. Configure the Workflow:
	- Update both Slack and Gemini nodes with your credentials.

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
