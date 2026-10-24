# ⚙️ Investigate CI/CD incidents in Mattermost with an OpenRouter AI agent

> ⚡ **43 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
It is a sub-workflow that investigates CI/CD failures reported by engineers in Mattermost. It is invoked by a parent classifier and it runs an autonomous AI Agent that diagnoses the failing pipeline, job, or
deployment without making any changes.

## Requirements
* OpenRouter/OpenAI/Anthropic API key — for the chat model .
* MCP servers (see MCP section) .
* Mattermost credentials (native n8n node) — used to post the final reply back into the thread.
* `attachmentsAnalyzer` sub-workflow — must be present in the same n8n instance; analyzes files attached to the originating Mattermost message and returns a textual context.
* `httpProbeTool` sub-workflow — provides the probe_url tool that the agent uses to verify reachability of external dependencies; must return structured
* [Parent workflow](https://n8n.io/workflows/15051-classify-and-route-devops-chat-requests-with-mattermost-openrouter-and-google-calendar) — a classifier  that calls this workflow via Execute Workflow 

## How it works
* The workflow is invoked by another workflow via `Execute Workflow Trigger`
* Call 'attachmentsAnalyzer' invokes a separate sub-workflow that fetches and analyzes any files the user attached to the originating Mattermost post
* The successful branch returns enriched attachment context; the error branch goes through
* `SetVars` materializes the runtime configuration
* The agent is instructed to call `get_thread` so it can read the conversation history before pulling
logs from anywhere else
* `Post a message` sends the final answer back into theoriginal channel


## How to use
* Deploy MCP servers
* Configure the `SetVars` node with your environment
* Edit the `AI Agent` system prompt to match your organization
* Import sibling sub-workflows:
  * [attachmentsAnalyzer](https://n8n.io/workflows/15612)
  * `httpProbeTool` - for `probe_url` node tool
* Connect a [parent classifier](https://n8n.io/workflows/15051-classify-and-route-devops-chat-requests-with-mattermost-openrouter-and-google-calendar) that calls this workflow via `Execute Workflow`

## 🔗 Nodes Used

Mattermost, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Call n8n Workflow Tool, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
