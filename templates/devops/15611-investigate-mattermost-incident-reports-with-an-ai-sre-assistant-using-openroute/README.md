# ⚙️ Investigate Mattermost incident reports with an AI SRE assistant using OpenRouter

> ⚡ **85 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
AI-powered SRE sub-workflow that investigates user-reported incidents coming from a Mattermost channel and posts a structured diagnostic report back into the same thread.
The result is a four-section incident report:
* What happened — a concise summary of the symptoms
* Event timeline — what was happening in the 10+ minutes before the incident
* Root cause — up to two probable causes
* Troubleshooting tips — step-by-step remediation for each root cause

## Requirements
* OpenRouter/OpenAI/Anthropic API key
* Google Gemini API key — for embeddings
* Mattermost API credentials — to post the reply back to the channel
* Qdrant instance
* Remote MCP servers  (see MCP section)
* A sub-workflow that analyses attachments 
* A [parent workflow](https://n8n.io/workflows/15051-classify-and-route-devops-chat-requests-with-mattermost-openrouter-and-google-calendar/) that triggers this one via "Execute Workflow" with a properly shaped payload

## How it works
1. The workflow is triggered by another workflow (When Executed by Another Workflow)
1. `ReadIncidentContext` logs the incoming classification for debugging and forwards the payload downstream
1. Call '`attachmentsAnalyzer` invokes a vision sub-workflow with the file_ids
1. `SetVars` defines the configuration used by the AI Agent prompt
1. `AI Agent` runs the investigation 
1. Post a message` sends the agent's final output back to the originating channel

## How to use
* Prepare the knowledge base — upload your infrastructure description, service map, naming conventions and runbooks into a Qdrant collection
* Deploy the MCP servers and put their URLs into the corresponding tool
* Configure credentials
* Adjust the configuration in `SetVars`
* Plug in the attachments [sub-workflow](https://n8n.io/workflows/15612) — replace the workflow reference in Call 'attachmentsAnalyzer' with your own vision-analysis workflow that maps file_ids[]
* Tune the system prompt in the AI Agent — add project-specific naming conventions, ownership info, escalation rules and any quirks of your infrastructure
- Connect [classification workflow](https://n8n.io/workflows/15051-classify-and-route-devops-chat-requests-with-mattermost/) as parent

## 🔗 Nodes Used

Mattermost, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Qdrant Vector Store, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
