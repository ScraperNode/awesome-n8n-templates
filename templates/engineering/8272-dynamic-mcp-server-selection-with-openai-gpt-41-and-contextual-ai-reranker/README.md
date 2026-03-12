# ⚒️ Dynamic MCP server selection with OpenAI GPT-4.1 and contextual AI reranker

> ⚡ **361 views** · ⚒️ [Engineering](../)

## Description

## PROBLEM
Thousands of MCP Servers exist and many are updated daily, making server selection difficult for LLMs.
- Current approaches require manually downloading and configuring servers, limiting flexibility.
- When multiple servers are pre-configured, LLMs get overwhelmed and confused about which server to use for specific tasks.

### This template enables dynamic server selection from a live PulseMCP directory of 5000+ servers.

## How it works
- A user query goes to an LLM that decides whether to use MCP servers to fulfill a given query and provides reasoning for its decision.
- Next, we fetch MCP Servers from Pulse MCP API and format them as documents for reranking
- Now, we use Contextual AI's Reranker to score and rank all MCP Servers based on our query and instructions

## How to set up
- Sign up for a free trial of Contextual AI [here](https://app.contextual.ai/) to find CONTEXTUALAI_API_KEY.
- Click on variables option in left panel and add a new environment variable CONTEXTUALAI_API_KEY.
- For the baseline model, we have used GPT 4.1 mini, you can find your OpenAI API key[ here](https://platform.openai.com/api-keys)

## How to customize the workflow
- We use chat trigger to initate the workflow. Feel free to replace it with a webhook or other trigger as required.
- We use OpenAI's GPT 4.1 mini as the baseline model and reranker prompt generator. You can swap out this section to use the LLM of your choice.
- We fetch 5000 MCP Servers from the PulseMCP directory as a baseline number, feel free to adjust this parameter as required.
- We are using Contextual AI's ctxl-rerank-v2-instruct-multilingual reranker model, which can be swapped with any one of the following rerankers: 
  1) ctxl-rerank-v2-instruct-multilingual
  2) ctxl-rerank-v2-instruct-multilingual-mini
  3)  ctxl-rerank-v1-instruct
- You can checkout this [blog](https://contextual.ai/blog/context-engineering-for-your-mcp-client/) for more information about rerankers to learn more about them.

## Good to know:
- Contextual AI Reranker (with full MCP docs): ~$0.035/query
Includes 0.035 for reranking + ~$0.0001 for OpenAI instruction generation.
- OpenAI Baseline: ~$0.017/query

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
