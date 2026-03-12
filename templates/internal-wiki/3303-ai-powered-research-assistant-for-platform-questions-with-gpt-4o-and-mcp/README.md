# 📖 AI-powered research assistant for platform questions with GPT-4o and MCP

> ⚡ **18,211 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Description

This workflow empowers you to effortlessly get answers to your n8n platform questions through an AI-powered assistant. Simply send your query, and the assistant will search documentation, forum posts, and example workflows to provide comprehensive, accurate responses tailored to your specific needs.

&gt; **Note:** This workflow uses community nodes (n8n-nodes-mcp.mcpClientTool) and will only work on self-hosted n8n instances. You'll need to install the required community nodes before importing this workflow.


## What does this workflow do?

This workflow streamlines the information retrieval process by automatically researching n8n platform documentation, community forums, and example workflows, providing you with relevant answers to your questions.

## Who is this for?

- **New n8n Users**: Quickly get answers to basic platform questions and learn how to use n8n effectively
- **Experienced Developers**: Find solutions to specific technical issues or discover advanced workflows
- **Teams**: Boost productivity by automating the research process for n8n platform questions
- **Anyone** looking to leverage AI for efficient and accurate n8n platform knowledge retrieval

## Benefits

- **Effortless Research**: Automate the research process across n8n documentation, forum posts, and example workflows
- **AI-Powered Intelligence**: Leverage the power of LLMs to understand context and generate helpful responses
- **Increased Efficiency**: Save time and resources by automating the research process
- **Quick Solutions**: Get immediate answers to your n8n platform questions
- **Enhanced Learning**: Discover new workflows, features, and best practices to improve your n8n experience

## How It Works

1. **Receive Request**: The workflow starts when a chat message is received containing your n8n-related question
2. **AI Processing**: The AI agent powered by OpenAI GPT-4o analyzes your question
3. **Research and Information Gathering**: The system searches across multiple sources:
   - Official n8n documentation for general knowledge and how-to guides
   - Community forums for bug reports and specific issues
   - Example workflow repository for relevant implementations
4. **Response Generation**: The AI agent compiles the research and generates a clear, comprehensive answer
5. **Output**: The workflow provides you with the relevant information and step-by-step guidance when applicable

## n8n Nodes Used

- When chat message received (Chat Trigger)
- OpenAI Chat Model (GPT-4o mini)
- N8N AI Agent
- n8n-assistant tools (MCP Client Tool - Community Node)
- n8n-assistant execute (MCP Client Tool - Community Node)

## Prerequisites

- Self-hosted n8n instance
- OpenAI API credentials
- MCP client community node installed
- MCP server configured to search n8n resources

## Setup

1. Import the workflow JSON into your n8n instance
2. Configure the OpenAI credentials
3. Configure your MCP client API credentials
4. In the n8n-assistant execute node, ensure the parameter is set to "specific" (corrected from "spesific")
5. Test the workflow by sending a message with an n8n-related question

## MCP Server Connection

To connect to the MCP server that powers this assistant's research capabilities, you need to use the following URL:
https://smithery.ai/server/@onurpolat05/n8n-assistant

This MCP server is specifically designed to search across three types of n8n resources:
1. Official documentation for general platform information and workflow creation guidance
2. Community forums for bug-related issues and troubleshooting
3. Example workflow repositories for reference implementations

Configure this URL in your MCP client credentials to enable the assistant to retrieve relevant information based on user queries.

This workflow combines the convenience of chat with the power of AI to provide a seamless n8n platform research experience. Start getting instant answers to your n8n questions today!

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
