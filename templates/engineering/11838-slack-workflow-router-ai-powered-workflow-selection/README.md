# ⚒️ Slack workflow router: AI-powered workflow selection

> ⚡ **59 views** · ⚒️ [Engineering](../)

## Description

### Slack Workflow Router: AI-Powered Workflow Selection

#### Problem Statement
Slack only allows one webhook per Slack app, and n8n generates a unique webhook for each workflow. This limitation means you typically need to create multiple Slack apps to trigger multiple n8n workflows from Slack. This workflow solves that problem by acting as a gateway for a single Slack app, enabling it to trigger multiple n8n workflows.

#### How It Works
When a message is received from Slack, an AI agent analyzes the message and selects the most suitable workflow to execute. The available workflows are stored in a data table, including their ID, name, and description, which the agent uses to make its decision. This approach allows you to manage and trigger multiple workflows from a single Slack app, making your Slack-to-n8n integration much more scalable and maintainable.

#### Key Features
* Trigger multiple n8n workflows from a single Slack app mention.
* AI-powered workflow selection based on user message and workflow descriptions.
* Centralized management of available workflows via a data table.
* Scalable and easy to maintain—no need to create multiple Slack apps.

#### Setup Instructions
* Create a data table in your n8n project with these columns: workflow_id, workflow_name, and workflow_description.
* Add your workflows to the table.
* Connect your Slack and OpenAI accounts.
* Deploy the workflow and mention your Slack app to trigger automations.


This template is ideal for teams who want to centralize and scale their Slack automation without creating multiple Slack apps.

## 🔗 Nodes Used

Slack, Execute Sub-workflow, AI Agent, OpenAI Chat Model, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
