# ⚙️ Convert DevOps Mattermost requests into Jira tasks with OpenRouter GPT and Gemini

> ⚡ **56 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
This is a sub-workflow that converts a free-form DevOps request posted in Mattermost into a properly formatted Jira task 

## Requirements
* OpenRouter/OpenAI/Anthropic API key
* Google Gemini API key — for embeddings
* Jira API credentials — Cloud or Server. 
* Mattermost API credentials — to post the reply back to the channel
* Qdrant instance
* Remote MCP servers  (see MCP section)
* A sub-workflow that analyses attachments 
* A [parent workflow](https://n8n.io/workflows/15051-classify-and-route-devops-chat-requests-with-mattermost-openrouter-and-google-calendar/) that triggers this one via "Execute Workflow" with a properly shaped payload

## How it works
1. The workflow is triggered by `Execute Workflow Trigger`
1. `ReadIncidentContext` logs the request and forwards the payload
1. Call '`attachmentsAnalyzer` invokes a vision sub-workflow with the file_ids
1. SetVars sets workflow-level constants
1.  `AI Agent` builds the Jira payload. The system prompt
1. `Parse Agent Output` safely parses the agent's output enriches the Jira description.
1. `Create an issue` creates a Task in the configured project with the chosen label and component.
1. `Post a message` replies in the original thread with a confirmation containing a clickable Jira link.

## How to use
* Index your infrastructure docs into Qdrant using
* Deploy the Mattermost MCP server and put its URL into the Mattermost MCP Client node
* Deploy / import the `attachmentsAnalyzer` sub-workflow 
* Configure credentials in the workflow
* Edit `SetVars`
* Edit `Create an issue` — pick your own Jira project, issue type and component.
* Tune the system prompt in `AI Agent` — adjust the direction labels and the few-shot examples to match your team's taxonomy.
* Wire this workflow into your [classifier](https://n8n.io/workflows/15051) ia an Execute `Workflow node`

## 🔗 Nodes Used

Mattermost, Jira Software, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
