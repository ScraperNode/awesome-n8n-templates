# 📖 Generate and deploy Notion chat assistants with OpenAI and n8n API

> ⚡ **37 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow takes a Notion database URL via n8n Chat, uses Notion and OpenAI to generate a tailored Notion-search chat assistant workflow, validates the generated n8n JSON, and then deploys the new workflow to your n8n instance via the n8n REST API (or returns JSON if deployment fails).

## How it works
1. Receives a chat message containing a Notion database URL.
2. Uses the Notion API to fetch the target database schema and simplifies the property list for prompting.
3. Sends the schema to OpenAI to generate a customized n8n chat-assistant workflow JSON that queries and reads pages from that specific Notion database.
4. Checks the generated workflow for a known Notion query jsonBody placeholder issue and for overall n8n workflow JSON validity, retrying generation with feedback up to the configured limit.
5. Builds a deployment payload from the generated nodes and connections and calls the n8n REST API to create the new workflow.
6. Replies in chat with a direct link to the deployed workflow, or returns the generated workflow JSON for manual import if the API deployment fails.

## Setup
1. Add Notion API credentials and share the target Notion databases with the connected Notion integration.
2. Add an OpenAI API credential with access to the configured models used for generation and validation.
3. Create an n8n API key and configure an HTTP Header Auth credential (X-N8N-API-KEY) for the workflow creation request.
4. Set your n8n instance base URL (no trailing slash) in the Configuration node’s n8n_instance_url field.
5. Publish/copy the chat trigger URL as needed if you want to expose the public chat entry point.

## Additional info
# Generate and deploy an AI chat assistant for any Notion database
# 📥  [Open full documentation on Notion](https://app.notion.com/p/automatisation/Course-Generate-and-deploy-an-AI-chat-assistant-for-any-Notion-database-39e3d6550fd98123817cec0b54ce6aa0)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Notion, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
