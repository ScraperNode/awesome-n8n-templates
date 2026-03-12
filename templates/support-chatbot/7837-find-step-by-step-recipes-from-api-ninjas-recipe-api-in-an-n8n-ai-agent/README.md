# 💬 Find step-by-step recipes from API Ninjas Recipe API in an n8n AI agent

> ⚡ **192 views** · 💬 [Support Chatbots](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recux4gNImLpzqvyd.jpg)](https://youtu.be/mMEX4Zsz4XY)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow creates an intelligent AI chatbot that retrieves recipes from an external API through natural conversation. When users ask for recipes, the AI agent automatically determines when to use the recipe lookup tool, fetches real-time data from the API Ninjas Recipe API, and provides helpful, conversational responses. This demonstrates the powerful capability of API-to-API integration within n8n, allowing AI agents to access external data sources on demand.

## Key Features

- **Intelligent Tool Calling:** The AI agent automatically decides when to use the HTTP Request Tool based on user queries
- **External API Integration:** Connects to API Ninjas Recipe API using Header Authentication for secure access
- **Conversational Memory:** Maintains context across multiple turns for natural dialogue
- **Dynamic Query Generation:** The AI model automatically generates the appropriate search query parameters based on user input

## Common Use Cases

- Build AI assistants that need access to real-time external data
- Create chatbots with specialized knowledge from third-party APIs
- Demonstrate API-to-API integration patterns for custom automation
- Prototype AI agents with tool-calling capabilities

## Setup & Configuration

**Required Credentials:**

1. **OpenAI API:** Sign up at OpenAI and obtain an API key for the language model. Configure this in n8n's credential manager.
2. **API Ninjas:** Register at API Ninjas to get your free API key for the Recipe API (supports 400+ calls/day). This API uses Header Authentication with the header name "X-Api-Key".

**Agent Configuration:**

The AI Agent includes a system message instructing it to "Always use the recipe tool if i ask you for recipe." This ensures the agent leverages the external API when appropriate. The HTTP Request Tool is configured with the API endpoint (https://api.api-ninjas.com/v1/recipe) and set to accept query parameters automatically from the AI model. The tool description "Use the query parameter to specify the food, and it will return a recipe" helps the AI understand when and how to use it.

**Language Model:** Currently configured to use OpenAI's gpt-5-mini, but you can change this to other compatible models based on your needs and budget.

**Memory:** Uses a window buffer to maintain conversation context, enabling natural multi-turn conversations where users can ask follow-up questions.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
