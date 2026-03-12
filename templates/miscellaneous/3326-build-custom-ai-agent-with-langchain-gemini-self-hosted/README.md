# 🔧 Build custom AI agent with LangChain & Gemini (self-hosted)

> ⚡ **5,873 views** · 🔧 [Miscellaneous](../)

## Description

## Overview  
This workflow leverages the LangChain code node to implement a fully customizable conversational agent. Ideal for users who need granular control over their agent's prompts while reducing unnecessary token consumption from reserved tool-calling functionality (compared to n8n's built-in Conversation Agent).  
![截屏20250327 17.53.50.png](fileId:1063)

## Setup Instructions  
1. **Configure Gemini Credentials**: Set up your Google Gemini API key ([Get API key here](https://ai.google.dev/) if needed). Alternatively, you may use other AI provider nodes.  
2. **Interaction Methods**:  
   - Test directly in the workflow editor using the "Chat" button  
   - Activate the workflow and access the chat interface via the URL provided by the `When Chat Message Received` node  

## Customization Options  
1. **Interface Settings**: Configure chat UI elements (e.g., title) in the `When Chat Message Received` node  
2. **Prompt Engineering**:  
   - Define agent personality and conversation structure in the `Construct & Execute LLM Prompt` node's template variable  
   - ⚠️ Template must preserve `{chat_history}` and `{input}` placeholders for proper LangChain operation  
3. **Model Selection**: Swap language models through the `language model` input field in `Construct & Execute LLM Prompt`  
4. **Memory Control**: Adjust conversation history length in the `Store Conversation History` node  

## Requirements:  
⚠️ This workflow uses the **LangChain Code node**, which only works on **self-hosted n8n**.  
*(Refer to [LangChain Code node docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code/))*

## 🔗 Nodes Used

LangChain Code, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
