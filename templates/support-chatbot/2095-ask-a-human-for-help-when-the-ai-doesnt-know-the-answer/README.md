# 💬 Ask a human for help when the AI doesn't know the answer

> ⚡ **9,765 views** · 💬 [Support Chatbots](../)

## Description

This is a workflow that tries to answer user queries using the standard GPT-4 model. If it can't answer, it sends a message to Slack to ask for human help. It prompts the user to supply an email address.

This workflow is used in [Advanced AI examples | Ask a human](https://docs.n8n.io/advanced-ai/examples/human-fallback/) in the documentation.

To use this workflow:

1. Load it into your n8n instance.
2. Add your credentials as prompted by the notes.
3. Configure the Slack node to use your Slack details, or swap out Slack for a different service.

## 🔗 Nodes Used

Slack, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
