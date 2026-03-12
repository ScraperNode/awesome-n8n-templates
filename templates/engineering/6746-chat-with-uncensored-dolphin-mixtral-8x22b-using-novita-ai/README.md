# ⚒️ Chat with uncensored Dolphin Mixtral 8x22B using Novita AI

> ⚡ **1,298 views** · ⚒️ [Engineering](../)

## Description

This n8n workflow enables you to chat with the uncensored Dolphin Mixtral 8x22B large language model through the Novita AI inference. It provides a streamlined process for sending user messages to the model and returning its responses, making it easy to integrate into chatbots, automation, or internal tools.

### How It Works

- **User messages** are received from chat trigger
- The edit node **prepares and formats** the request for Novita AI's chat completion endpoint.
- The message is sent to **Dolphin Mixtral 8x22B** (uncensored) via the Novita API.
- The model's reply is **extracted and returned** as a clean string, ready for display or further automation.

### Set Up Steps

1. **Create a [Novita AI](https://novita.ai/?ref=mze5m2e&utm_source=affiliate) account**
   - Sign up at [Novita AI](https://novita.ai/?ref=mze5m2e&utm_source=affiliate) to access the API.

2. **Get your Novita API key**
   - Log into your Novita account and generate your API key.

3. **Configure the workflow in n8n**
   - Insert your Novita API key in the "Set fields" node, as well as additional endpoint parameters you might want to add to optimize your api

4. **(Optional) Customize or extend**
   - Add input triggers (chat, webhook, etc.), post-processing nodes, or error handling as needed.

### Useful links
- [Novita chat completion docs](https://novita.ai/docs/api-reference/model-apis-llm-create-chat-completion)
- [Novita Privacy Policy](https://novita.ai/legal/privacy-policy)


### Notes

- **Dolphin Mixtral 8x22B** is uncensored: The model is very permissive and does not have restrictive safety alignment, so ensure your use case is appropriate and consider adding your own safety checks, as well as reviewing Novita's privacy policy.
- You can review and adapt the workflow steps inside n8n to fit your requirements, such as saving chat logs, formatting responses, or integrating with other tools.

## 🔗 Nodes Used

HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
