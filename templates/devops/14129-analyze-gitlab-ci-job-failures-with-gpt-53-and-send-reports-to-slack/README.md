# ⚙️ Analyze GitLab CI job failures with GPT-5.3 and send reports to Slack

> ⚡ **145 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Overview
This workflow helps automatically analyze the causes of build failures in Gitlab CI and propose solutions without involving DevOps engineers.
See [detailed setup guide](https://dev.to/javdet/ai-alert-assistant-how-n8n-llm-replace-routine-diagnostics-a9b)


## How it work
1. Checks whether a job crashed.
1. Gets logs of the crashed job and a description of the pipeline.
1. The agent analyzes this data according to its system prompt.
1. During the process, the agent can retrieve additional data from Gitlab and check the availability of endpoints.
1. A report on the causes and solutions is sent to the selected Slack channel
1. Works good with Openai, Anthropic, Google last models 

## How to use
1. Generate webhook credentials and use it in Gitlab
1. Add your own Rules and recommendations to system prompt
1. Run MCP servers
1. Choose Slack channel

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
