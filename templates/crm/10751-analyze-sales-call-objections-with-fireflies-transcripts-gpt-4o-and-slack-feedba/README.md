# 🤝 Analyze sales call objections with Fireflies transcripts, GPT-4o, and Slack feedback

> ⚡ **135 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works

When a meeting ends in Fireflies, the transcript is automatically retrieved and sent to OpenAI for analysis. The AI evaluates objection handling, call effectiveness, and extracts key objections raised during the conversation. It then generates specific objection handlers for future calls. The analysis is formatted into a structured report and sent to both Slack for immediate visibility and Google Drive for centralized storage.

## Set up steps

**Prerequisites:**
- Fireflies account with API access
- OpenAI API key
- Slack workspace
- Google Drive connected to n8n

**Configuration:**
1. Connect Fireflies webhook to trigger on meeting completion
2. Add OpenAI API key in the AI analysis nodes
3. Configure Slack channel destination for feedback delivery
4. Set Google Drive folder path for report storage
5. Adjust AI prompts in sticky notes to match your objection categories and sales methodology

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
