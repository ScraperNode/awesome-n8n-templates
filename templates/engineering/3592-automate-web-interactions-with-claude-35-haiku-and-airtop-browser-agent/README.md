# ⚒️ Automate web interactions with Claude 3.5 Haiku and Airtop Browser Agent

> ⚡ **11,441 views** · ⚒️ [Engineering](../)

## Description

### About this AI Agent

This workflow is designed to automate web interactions by simulating a human user, using a combination of the Agent node and AI tools powered by Airtop.

### How does this workflow works?

**Form Submission Trigger**: The workflow starts with a form submission trigger node named "On form submission". This node collects user instructions for the web AI agent, including a prompt and an optional Airtop profile name for sites requiring authentication.

**AI Agent**: The core of the workflow is the "AI Agent" node, which uses a smart web agent to manage a remote web browser. It is designed to fulfill user requests by interacting with the browser through various tools.

#### Browser Session Management

**Start Browser**: The "Start browser" node initiates a new browser session and window. It is essential for obtaining the sessionId and windowId required for subsequent operations.
Session and Window Management: The workflow includes nodes for creating and managing browser sessions and windows, such as "Session" and "Window".
Web Interaction Tools:

**Load URL**: This node loads a specified URL into the browser window.
Query: The "Query" node allows the agent to ask questions and extract information from the current web page.
Click: This node simulates clicking on elements within the web page.
Type: The "Type" node types text into specified elements on the page.
Session Termination: The "End session" node is used to terminate the browser session once the tasks are completed.

#### Output Handling

**Structured Output Parser**: This node processes the agent's results into a structured format.

**Output**: The final results are set and prepared for output.
Slack Integration: Although currently disabled, there is a "Slack" node intended to send messages to a Slack channel, potentially for notifications or live view URLs.

### Seting up your agent

**Airtop API Credentials**:
Users must have valid Airtop API credentials to interact with the web browser tools. This includes nodes like "Click", "Query", "Load URL", "End session", "Type", "Session", and "Window".
Slack API Credentials (Optional):

If users want to enable Slack notifications, they need to configure Slack OAuth2 credentials. The Slack node is currently disabled but can be used to send messages to a Slack channel.
Anthropic API Credentials:

The "Claude 3.5 Haiku" node requires Anthropic API credentials. Users need to have access to this API to utilize the language model features.

## 🔗 Nodes Used

Slack, Execute Workflow Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
