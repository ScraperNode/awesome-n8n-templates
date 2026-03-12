# 🎯 Fireflies transcripts to meeting summaries & task extractor to Slack & ClickUp

> ⚡ **1,211 views** · 🎯 [AI Summarization & Classification](../)

## Description

# AI-powered Meeting Summaries and Action Items to Slack and ClickUp

## How it Works  
1. **Webhook Trigger**: The workflow starts when Fireflies notifies that a transcription has finished.  
2. **Transcript Retrieval**: The transcript is pulled from Fireflies based on the meeting ID.  
3. **Pre-processing**: The transcript is split into sentences and then aggregated into a raw text block.  
4. **AI Summarization**: The aggregated transcript is sent to Google Gemini, which generates a short summary and a structured list of action items.  
5. **Post-processing**: The AI response is cleaned and formatted into JSON. Action items are mapped to titles and descriptions.  
6. **Distribution**:  
   - The meeting summary is posted to Slack.  
   - Action items are created as tasks in ClickUp.  

---

## Use Case  
This workflow is designed for teams that want to reduce the manual effort of writing meeting notes and extracting action items.  

- Automatically generate a clear and concise meeting summary  
- Share the summary instantly with your team on Slack  
- Ensure action items are not lost by automatically creating tasks in ClickUp  
- Ideal for distributed teams, project managers, and product teams managing recurring meetings  

---

## Requirements  
- **n8n instance** set up and running  
- **Fireflies.ai account** with API access to meeting transcripts  
- **Google Gemini API (via PaLM credentials)** for AI-powered summarization  
- **Slack account** with OAuth2 credentials connected in n8n  
- **ClickUp account** with OAuth2 credentials connected in n8n

## 🔗 Nodes Used

Slack, Webhook, ClickUp, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
