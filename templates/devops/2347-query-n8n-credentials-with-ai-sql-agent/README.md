# ⚙️ Query n8n credentials with AI SQL agent

> ⚡ **5,429 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow is a fun way to query and search over your credentials on your n8n instance.

**Good to know**
Your credentials should remain safe as this workflow does not decrypt or use any decrypted data.

## Example Usage
* "Which workflows are using Slack and Google Calendar?"
* "Which workflows have AI in their name but are not using openAI?"

## How it works
* Using the n8n API, it fetches all workflow data on the instance. Workflow data contains references to credentials used so this will be extracted.
* With some necessary reformatting, the workflows and their credentials metadata are stored to a SQLite database.
* Next, an AI agent is used with a custom SQL tool that reads the SQLite database created in the previous step. 
* The AI agent is instructed to perform SQL queries against our workflow credential table when asked about credentials by the user.

## Requirements
* You'll need an n8n API key. Please note that only workflows will be scoped to your API key.

## Customising the workflow

Add extra table fields to the SQLite database to answer even more complex queries such as:
* workflow status to differentiate between active and inactive workflows.

## 🔗 Nodes Used

n8n, AI Agent, OpenAI Chat Model, Simple Memory, Code Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
