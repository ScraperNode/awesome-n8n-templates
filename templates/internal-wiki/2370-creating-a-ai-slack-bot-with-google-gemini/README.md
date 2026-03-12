# 📖 Creating a AI Slack bot with Google Gemini

> ⚡ **10,046 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This is an example of how we can build a slack bot in a few easy steps

Before you can start, you need to o a few things

1. Create a copy of this workflow
2. Create a slack bot
3. Create a slash command on slack and paste the webhook url to the slack command

## Note
Make sure to configure this webhook using a https:// wrapper and don't use the default http://localhost:5678 as that will not be recognized by your slack webhook.


Once the data has been sent to your webhook, the next step will be passing it via an AI Agent to process data based on the queries we pass to our agent.

To have some sort of a memory, be sure to set the slack token to the memory node. This way you can refer to other chats from the history.

The final message is relayed back to slack as a new message. Since we can not wait longer than 3000 ms for slack response, we will create a new message with reference to the input we passed.

We can advance this using the tools or data sources for it to be more custom tailored for your company.

## Usage
To use the slackbot, go to slack and click on your set slash command eg /Bob and send your desired message.

This will send the message to your endpoint and get return the processed results as the message.

If you would like help setting this up, feel free to reach out to zacharia@effibotics.com

## 🔗 Nodes Used

Slack, Webhook, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
