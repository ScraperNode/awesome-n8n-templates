# ⚒️ Track OpenAI token usage and AI agent metrics with Google Sheets dashboard

> ⚡ **1,105 views** · ⚒️ [Engineering](../)

## Description

**What it does**
Captures token usage and cost from your AI Agent/LLM. Logs model, tokens, cost, tool use, and conversation I/O to Google Sheets for simple observability and billing.

**Perfect for**
Developers adding usage monitoring to AI agents.
Teams needing cost transparency in prototypes.

**How it works**

1. Chat Trigger collects user input for the AI Agent.
2. A Set node injects metadata like workflow, execution, and client IDs.
3. LangChain Code node returns a configured Chat model with a callback that reads usage metadata.
4. The callback computes input, output, and total costs based on per‑million token prices you define.
5. It appends token metrics to a Google Sheet via the Google Sheets Tool.
6. The Agent records intermediate tool calls.
7. An If node checks whether a tool was used.
8. When tools are used, the workflow logs input, output, tool name, and metadata to an Observability sheet.

**How to use**
SELF-HOSTED N8N ONLY - the Langchain Code node is only available in the self-hosted version of n8n. It is not available in n8n cloud.

**Requirements**
Self-hosted version of n8n


**If you have any questions in running the workflow, see the attached video:** https://youtu.be/JSulRS128MA

## 🔗 Nodes Used

Google Sheets, AI Agent, LangChain Code, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
