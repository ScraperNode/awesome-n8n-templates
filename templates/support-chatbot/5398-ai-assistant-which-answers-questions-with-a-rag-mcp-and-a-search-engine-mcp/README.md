# 💬 AI Assistant which answers questions with a RAG MCP and a Search Engine MCP

> ⚡ **14,431 views** · 💬 [Support Chatbots](../)

## Description

## Build an AI Agent which accesses two MCP Servers: a RAG MCP Server and a Search Engine API MCP Server.

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Tutorial
![thumbnail.png](fileId:1877)
[Click here to watch the full tutorial on YouTube!](https://youtu.be/GB2RZ25HTD8)

## How it works
We build an AI Agent which has access to two MCP servers:
- An MCP Server with a RAG database ([click here for the RAG MCP Server](https://n8n.partnerlinks.io/5403-build-an-mcp-server-which-answers-questions-with-retrieval-augmented-generation)
- An MCP Server which can access a Search Engine, so the AI Agent also has access to data about more current events

## Installation
1. In order to use the MCP Client, you also have to use [MCP Server Template](https://n8n.partnerlinks.io/5403-build-an-mcp-server-which-answers-questions-with-retrieval-augmented-generation).

2. Open the MCP Client "MCP Client: RAG" node and update the SSE Endpoint to the MCP Server workflow

3. Install the "n8n-nodes-mcp" community node via settings &gt; community nodes
![InstalltheMCPCommunityNodewithnpm.png](fileId:1598)

4. ONLY FOR SELF-HOSTING: In Docker, click on your n8n container. Navigate to "Exec" and execute the below command to allow community nodes:

N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true

![docker allow community nodes.png](fileId:1597)

5. Navigate to [Bright Data](https://brdta.com/tomstechacademy) and create a new  "Web Unlocker API" with the name "mcp_unlocker".

6. Open the "MCP Client" and add the following credentials:

![AddingTheMCPCredentials.png](fileId:1599)


## How to use it
1. Run the Chat node and start asking questions

## More detailed instructions
Missed a step? Find more detailed instructions here: [Personal Newsfeed With Bright Data and n8n](https://brightdata.com/blog/ai/news-feed-n8n-openai-bright-data)

## What is Retrievel Augmented Generation (RAG)?
Large Language Models (LLM's) are trained on data until a specific cutoff date. Imagine a model is trained in December 2023 based data until September 2023. This means the model doesn't have any knowledge about events which happened in 2024. So if you ask the LLM who was the Formula 1 World Champion of 2024, it doesn't know the answer.

The solution? Retrieval Augmented Generation. When using Retrieval Augmented Generation, a user's question is being sent to a semantic database. The LLM will use the information retrieved from the semantic database to answer the user's question.

![rag.png](fileId:1764)


## What is Model Context Protocol (MCP)?
MCP is a communication protocol which is used by AI agents to call tools hosted on external servers.

When an MCP client communicates with an MCP server, the server will provide an overview of all its tools, prompts and resources. The MCP server can then choose which tools to execute (based on the user's request) and execute the tools.

An MCP client can communicate with multiple MCP servers, which can all host multiple tools.

![MCP servers with multiple tools.png](fileId:1765)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
