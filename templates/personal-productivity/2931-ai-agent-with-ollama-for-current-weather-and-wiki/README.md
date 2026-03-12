# ⚡ Ai agent with Ollama for current weather and wiki

> ⚡ **17,752 views** · ⚡ [Personal Productivity](../)

## Description

This workflow template demonstrates how to create an AI-powered agent that provides users with current weather information and Wikipedia summaries. By integrating n8n with Ollama's local Large Language Models (LLMs), this template offers a seamless and privacy-conscious solution for real-time data retrieval and summarization.

### Who is this for?

**Developers and Enthusiasts:** Individuals interested in building AI-driven workflows without relying on external APIs.
**Privacy-Conscious Users**: Those who prefer processing data locally to maintain control over their information.
**Educators and Students:** Learners seeking hands-on experience with AI integrations and workflow automation.

### What problem does this workflow solve?

Accessing up-to-date weather information and concise Wikipedia summaries typically requires multiple API calls to external services, which can raise privacy concerns and incur costs. This workflow addresses these issues by utilizing Ollama's self-hosted LLMs within n8n, enabling users to retrieve and process information locally.

### What this workflow does:

**User Input Capture**: Begins with a chat interface where users can input queries.
AI Processing: The input is sent to an AI Agent node configured with Ollama's LLMs, which interprets the query and determines the required actions.
**Weather Retrieval:** For weather-related queries, the workflow fetches current weather data from a specified source.
**Wikipedia Summarization:** For queries seeking information, it retrieves relevant Wikipedia content and generates concise summaries.

### Setup:

**Install Required Tools:**
Ollama: Install and run Ollama to manage local LLMs.
**Configure n8n Workflow:**
Import the provided workflow template into your n8n instance.
Set up the AI Agent node to connect with Ollama's API.
Ensure nodes responsible for fetching weather data and Wikipedia content are correctly configured.
**Run the Workflow:**
Start the workflow and interact with the chat interface to test various queries.

### How to customize this workflow to your needs:

**Automate Triggers:** Set up scheduled triggers to provide users with regular updates, such as daily weather forecasts or featured Wikipedia articles.

## 🔗 Nodes Used

AI Agent, Ollama Chat Model, Simple Memory, Wikipedia, Manual Chat Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
