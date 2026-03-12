# 📖 Chat with Gemini AI through local CLI via SSH

> ⚡ **807 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow allows you to integrate the Google Gemini CLI into your n8n AI Agents. It is designed for self-hosted n8n instances and enables you to chat with the Gemini CLI running on your local machine or server via SSH.

This is powerful for users who want to utilize the free tier of Gemini via Google's CLI tools or need the AI to interact with local files on the host server.

## How it works
* **AI Agent**: The main workflow uses a LangChain AI Agent with a custom tool.
* **Custom Tool**: When the agent needs to answer, it calls a sub-workflow ("Gemini CLI Worker").
* **SSH Execution**: The sub-workflow connects to your host machine via SSH, executes the `gemini` command with your prompt, and returns the CLI's standard output to the chat.

## Set up steps
1. **Prerequisites**: You must have [Node.js](https://nodejs.org/) (v20+) and the `gemini-chat-cli` installed on your host machine.
2. **Split the Workflows**:
   * Copy the bottom section (Sub-workflow).
   * Paste it into a new workflow, name it "Gemini CLI Worker", and **Save** it.
   * Note the ID of this new workflow.
3. **Configure the Main Workflow**:
   * Open the **Call 'Gemini CLI'** node.
   * In the "Workflow ID" field, select the "Gemini CLI Worker" workflow you just saved.
4. **Configure SSH**:
   * Open the **Execute a command** node in the sub-workflow.
   * Configure your SSH credentials (IP, Username, Password/Key) to allow n8n to connect to the host where Gemini CLI is installed.

## 🔗 Nodes Used

SSH, Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
