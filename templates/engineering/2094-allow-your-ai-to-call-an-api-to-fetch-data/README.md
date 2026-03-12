# ⚒️ Allow your AI to call an API to fetch data

> ⚡ **23,149 views** · ⚒️ [Engineering](../)

## Description

Use n8n to bring data from any API to your AI. This workflow uses the [Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/) to provide the chat interface, and the [Custom n8n Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) to call a second workflow that calls the API. 

The second workflow uses AI functionality to refine the API request based on the user's query. It then makes an API call, and returns the response to the main workflow.

This workflow is used in [Advanced AI examples | Call an API to fetch data](https://docs.n8n.io/advanced-ai/examples/api-workflow-tool/) in the documentation.

To use this workflow:

1. Load it into your n8n instance.
2. Add your credentials as prompted by the notes.

**Requires n8n 1.28.0 or above**

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
