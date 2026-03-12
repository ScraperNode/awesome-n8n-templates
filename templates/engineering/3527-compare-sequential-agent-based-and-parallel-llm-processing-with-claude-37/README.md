# ⚒️ Compare sequential, agent-based, and parallel LLM processing with Claude 3.7

> ⚡ **1,899 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates three distinct approaches to chaining LLM operations using Claude 3.7 Sonnet. Connect to any section to experience the differences in implementation, performance, and capabilities.

## What you'll find:

### 1️⃣ Naive Sequential Chaining
The simplest but least efficient approach - connecting LLM nodes in a direct sequence. Easy to set up for beginners but becomes unwieldy and slow as your chain grows.

### 2️⃣ Agent-Based Processing with Memory
Process a list of instructions through a single AI Agent that maintains conversation history. This structured approach provides better context management while keeping your workflow organized.

### 3️⃣ Parallel Processing for Maximum Speed
Split your prompts and process them simultaneously for much faster results. Ideal when you need to run multiple independent tasks without shared context.

## Setup Instructions:

1. **API Credentials**: Configure your Anthropic API key in the credentials manager. This workflow uses Claude 3.7 Sonnet, but you can modify the model in each Anthropic Chat Model node, or pick an entirely different LLM.

2. **For Cloud Users**: If using the parallel processing method (section 3), replace `{{ $env.WEBHOOK_URL }}` in the "LLM steps - parallel" HTTP Request node with your n8n instance URL.

3. **Test Data**: The workflow fetches content from the n8n blog by default. You can modify this part to use a different content or a data source.

4. **Customization**: Each section contains a set of example prompts. Modify the "Initial prompts" nodes to change the questions asked to the LLM.

Compare these methods to understand the trade-offs between simplicity, speed, and context management in your AI workflows!

---

Follow me on [LinkedIn](https://www.linkedin.com/in/parsadanyan/) for more tips on AI automation and n8n workflows!

## 🔗 Nodes Used

HTTP Request, Webhook, Markdown, AI Agent, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
