# ⚒️ AI agent with charts capabilities using OpenAI structured output and Quickchart

> ⚡ **18,624 views** · ⚒️ [Engineering](../)

## Description

This workflow is an experiment to integrate charts in AI Agents, using the new [Structured Output from OpenAI](https://openai.com/index/introducing-structured-outputs-in-the-api/) and [Quickchart.io](https://quickchart.io/).

## How it works
- Users chat with an AI Agent.
- Anytime the AI Agent considers a chart is needed, it calls a tool to generate a chart
- OpenAI generates a chart using the Quickchart definition
- This object is added at the end of a Quickchart.io URL ([see documentation](https://quickchart.io/documentation/usage/parameters/))
- The url is added in the conversation via the AI Agent as markdown.


## Set up steps
- Create an [OpenAI API Key](https://platform.openai.com/api-keys)
- Create the OpenAI credentials
- Use the credentials for the HTTP Request node (as Predefined Credential type)
- Activate your workflow
- Start chatting
- For example, you can ask the AI Agent to generate a chart about the top 5 movies at the box office
- Start exploring the limits

**Shout-out**
[Quickchart.io](https://quickchart.io) is an amazing open source project that provides a free API to test. Go check them out!


**Example of chart**
![Screenshot 20240904 at 14.08.29.png](fileId:836)

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
