# ⚙️ Investigate CI/CD incidents in Slack with a GPT-5.5 AI agent

> ⚡ **58 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
It is a sub-workflow that investigates CI/CD failures reported by engineers in Slack. It is invoked by a parent classifier and it runs an autonomous AI Agent that diagnoses the failing pipeline, job, or
deployment without making any changes.

## Requirements
* OpenRouter/OpenAI/Anthropic API key — for the chat model .
* MCP servers (see MCP section) .
* Slack credentials .
* `attachmentsAnalyzer` sub-workflow — must be present in the same n8n instance; analyzes files attached to the originating Mattermost message and returns a textual context.
* `httpProbeTool` sub-workflow — provides the probe_url tool that the agent uses to verify reachability of external dependencies; must return structured
* [Parent workflow]() — a classifier  that calls this workflow via Execute Workflow 

## How it works
* The workflow is invoked by another workflow via `Execute Workflow Trigger`
* Call 'attachmentsAnalyzer' invokes a separate sub-workflow that fetches and analyzes any files the user attached to the originating Slack post
* The successful branch returns enriched attachment context; the error branch goes through
* `SetVars` materializes the runtime configuration
* The agent is instructed to  read the conversation history before pulling
logs from anywhere else
* `Post a message` sends the final answer back into theoriginal channel

## How to use
* Deploy MCP servers
* Configure the `SetVars` node with your environment
* Edit the `AI Agent` system prompt to match your organization
* Import sibling sub-workflows:
  * `attachmentsAnalyzer`
  * `httpProbeTool` - for `probe_url` node tool
* Connect a [parent classifier]() that calls this workflow via `Execute Workflow`

## 🔗 Nodes Used

Slack, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
