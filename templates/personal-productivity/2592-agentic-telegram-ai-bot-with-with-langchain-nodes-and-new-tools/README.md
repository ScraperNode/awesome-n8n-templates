# ⚡ Agentic Telegram AI bot with with LangChain nodes and new tools

> ⚡ **28,085 views** · ⚡ [Personal Productivity](../)

## Description

Create a Telegram bot that combines advanced AI functionalities with LangChain nodes and new tools.

[Nodes as tools](https://community.n8n.io/t/review-node-as-tools-is-finally-here/57539) and the [HTTP request tool](https://community.n8n.io/t/using-the-http-request-tool-with-ai-agents/50616/3) are a new n8n feature that extend [custom workflow tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) and simplify your setup. We used the workflow tool in the [previous Telegram template](https://n8n.io/workflows/2035-telegram-ai-bot-with-langchain-nodes/) to call the Dalle-3 model.

In the new version, we've achieved similar results using the HTTP Request tool and the Telegram node tool instead. The main difference is that Telegram bot becomes more flexible. The LangChain Agent node can decide which tool to use and when. In the previous version, all steps inside the custom workflow tool were executed sequentially.

⚠️ Note that you'd need to select the Tools Agent to work with new tools. 

Before launching the template, make sure to set up your OpenAI and Telegram credentials.

Here’s how the new Telegram bot works:

1. Telegram Trigger listens for new messages in a specified Telegram chat. This node activates the rest of the workflow after receiving a message.

2. AI Tool Agent receives input text, processes it using the OpenAI model and replies to a user. It addresses users by name and sends image links when an image is requested.

3. The OpenAI GPT-4o model generates context-aware responses. You can configure the model parameters or swap this node entirely. 

4.  Window buffer memory helps maintain context across conversations. It stores the last 10 interactions and ensures that the agent can access previous messages within a session. Conversations from different users are stored in different buffers.

5. The HTTP request tool connects with OpenAI's DALL-E-3 API to generate images based on user prompts. The tool is called when the user asks for an image.

6. Telegram node tool sends generated images back to the user in a Telegram chat. It retrieves the image from the URL returned by the DALL-E-3 model. This does not happen directly, however. The response from the HTTP request tool is first stored in the Agent’s scratchpad (think of it as a short-term memory). In the next iteration, the Agent sends the updated response to the GPT model once again. The GPT model will then create a new tool request to send the image back to the user. To pass the image URL, the tool uses the [new $fromAI() expression](https://docs.n8n.io/advanced-ai/examples/using-the-fromai-function/). 

7. Send final reply node sends the final response message created by the agent back to the user on Telegram. Even though the image was already passed to the user, the Agent always stops with the final response that comes from dedicated output.

⚠️ Note, that the Agent may not adhere to the same sequence of actions in 100% of situations. For example, sometimes it could skip sending the file via the Telegram node tool and instead just send an URL in the final reply. If you have a longer series of predefined steps, it may be better to use the “old” custom workflow tool.

This template is perfect as a starting point for building AI agentic workflow. Take a look at another agentic [Telegram AI template that can handle both text and voice messages](https://n8n.io/workflows/2534-telegram-ai-bot-assistant-ready-made-template-for-voice-and-text-messages/).

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
