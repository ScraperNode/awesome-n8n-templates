# 💬 Telegram AI chatbot

> ⚡ **221,673 views** · 💬 [Support Chatbots](../)

## Description

The workflow starts by listening for messages from Telegram users. The message is then processed, and based on its content, different actions are taken. If it's a regular chat message, the workflow generates a response using the OpenAI API and sends it back to the user. If it's a command to create an image, the workflow generates an image using the OpenAI API and sends the image to the user. If the command is unsupported, an error message is sent. Throughout the workflow, there are additional nodes for displaying notes and simulating typing actions.

![bot_workflow_annotated.png](fileId:711)

## 🔗 Nodes Used

Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
