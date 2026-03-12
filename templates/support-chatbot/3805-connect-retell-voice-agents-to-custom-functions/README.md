# 💬 Connect Retell Voice Agents to custom functions

> ⚡ **3,455 views** · 💬 [Support Chatbots](../)

## Description

## Overview
- This workflow allows you to **trigger custom logic in n8n directly from Retell's Voice Agent** using [Custom Functions](https://docs.retellai.com/build/conversation-flow/custom-function#custom-function).
- It captures a POST webhook from Retell every time a Voice Agent reaches a Custom Function node.
- You can plug in any logic—call an external API, book a meeting, update a CRM, or even return a dynamic response back to the agent.

## Who is it for
For builders using [Retell](https://www.retellai.com/) who want to **extend Voice Agent functionality** with real-time custom workflows or AI-generated responses.

## Prerequisites
- Have a [Retell AI Account](https://www.retellai.com/)
- A Retell agent with a Custom Function node in its conversation flow (see template below)
- Set your n8n webhook URL in the Custom Function configuration (see "How to use it" below)
- (Optional) Familiarity with [Retell's Custom Function docs](https://docs.retellai.com/build/conversation-flow/custom-function#custom-function)
- Start a conversation with the agent (text or voice)

## Retell Agent Example
To get you started, **[we've prepared a Retell Agent](https://drive.google.com/file/d/1rAcsNz-f8SyuOxO0VJ_84oPscYFpir4-/view?usp=sharing)** ready to be imported, that includes the call to this template.
- Import the agent to your Retell workspace (top-right button [on your agent's page](https://dashboard.retellai.com/agents))
- You will need to modify the function URL in order to call your own instance.
- This template is a simple hotel agent that calls the custom function to confirm a booking, passing basic formatted data.

## How it works
- Retell sends a webhook to n8n whenever a Custom Function is triggered during a call (or test chat).
- The webhook includes:
    - Full call context (transcript, call ID, etc.)
    - Parameters defined in the Retell function node
- You can process this data and return a response string back to the Voice Agent in real-time.

## How to use it
1. Copy the webhook URL (e.g. `https://your-instance.app.n8n.cloud/webhook/hotel-retell-template`)
2. Modify the Retell Custom Function webhook URL (see template description for screenshots)
    - Edit the function
    ![retell_functions.png](fileId:1211)
    - Modify the URL
    ![retell_function_config.png](fileId:1212)
3. Modify the logic in the Set node or replace it with your own custom flow
4. Deploy and test: Retell will hit your n8n workflow during the conversation

## Extension Ideas
- Call a third-party API to fetch data (e.g. hotel availability, CRM records)
- Use an LLM node to generate dynamic responses
- Trigger a parallel automation (Slack message, calendar invite, etc.)

#### 👉 [Reach out to us](mailto:hello@agentstudio.io) if you're interested in **analyzing your Retell Agent conversations**.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
