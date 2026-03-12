# 📊 News research and sentiment analysis AI agent with Gemini and SearXNG

> ⚡ **10,471 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow operates as a two-agent system where each agent has a specialized task. The process flows from initial user input to a final analysis, with a seamless handoff between the agents.

## How it works
1. The Chat Trigger
The entire process begins when you send a message using n8n's chat interface. This message serves as the initial prompt or query for the system.

2. The Research Agent Takes Over
The user's message is first sent to the Research Agent. This agent's job is to understand the query and gather relevant information. To do this, it has access to:
   * LLM: Google Gemini, which acts as the agent's "brain" to process language and make decisions.
Tools:
   * web_search: It uses this tool (powered by your self-hosted SearXNG instance) to perform live searches on the internet.
   * get_current_date: It can access the current date, which is useful for context-aware or time-sensitive research.

   The Research Agent uses these tools to find the most relevant information related to your query and then compiles it into a concise summary.

3. Handoff to the Sentiment Analysis Agent
Once the Research Agent has completed its task, it passes its findings directly to the Sentiment Analysis Agent.

4. The Final Analysis
The Sentiment Analysis Agent receives the text from the Research Agent. Its sole purpose, as defined by its system prompt, is to analyze the sentiment of the provided information. It determines if the content is positive, negative, or neutral and formulates a final response.

This final analysis is then sent back to you in the chat, completing the workflow.

## Set up steps
1.  **Select the Language Model (LLM):** This workflow is pre-configured with Google Gemini. You can select a different model for the agents as needed.
2.  **Configure LLM Credentials:** Ensure that valid credentials for your chosen LLM are correctly set up within your n8n instance.
3.  **Set Up the SearXNG Connection:** Configure the node to connect to your self-hosted SearXNG instance. This enables the agent's web search capabilities.
4.  **Define the Research Agent's Task:** Customize the system prompt for the "Research Agent" to define its role, instructions, and how it should conduct its research.
5.  **Define the Sentiment Analysis Agent's Task:** Adjust the system prompt for the "Sentiment Analysis Agent" to specify how it should analyze the information provided by the Research Agent.
6.  **Test the Workflow:** Use the built-in chat interface in the n8n canvas to send a message and verify that the agents are functioning correctly.

## 🔗 Nodes Used

AI Agent, Chat Trigger, Google Gemini Chat Model, SearXNG

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
