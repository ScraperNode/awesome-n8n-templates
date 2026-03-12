# 💬 Build a multichannel customer support AI assistant with Chatwoot & OpenRouter

> ⚡ **4,275 views** · 💬 [Support Chatbots](../)

## Description

## Multichannel AI Assistant Demo for Chatwoot

### This simple n8n template demonstrates a Chatwoot integration that can:

* Receive new messages via a webhook.
* Retrieve conversation history.
* Process the message history into a format suitable for an LLM.
* Demonstrate an AI Assistant processing a user's query.
* Send the AI Assistant's response back to Chatwoot.

**Use Case:**
If you have multiple communication channels with your clients (e.g., Telegram, Instagram, WhatsApp, Facebook) integrated with Chatwoot, you can use this template as a starting point to build more sophisticated and tailored AI solutions that cover all channels at once.

### How it works
* A webhook receives the `message created` event from Chatwoot.
* The webhook data is then filtered to keep only the necessary information for a cleaner workflow.
* The workflow checks if the message is "incoming." This is crucial to prevent the assistant from replying to its own messages and creating endless loops.
* The conversation history is retrieved from Chatwoot via an API call using the HTTP Request node. This allows the assistant's interaction to be more natural and continuous without needing to store conversation history locally.
* A simple AI Assistant processes the conversation history and generates a response to the user based on its built-in knowledge base (see the prompt in the assistant node).
* The final HTTP Request node sends the AI-generated response back to the appropriate Chatwoot conversation.

### How to Use
1.  In Chatwoot, go to Settings → Integrations → Webhooks and add your n8n webhook URL. Be sure to select the `message created` event.
2.  In the HTTP Request nodes, replace the placeholder values:
    * `https://yourchatwooturl.com`
    * `api_access_token`
    You can find these values on your Chatwoot super admin page.
3.  The LLM node is configured to use OpenRouter. Add your OpenRouter credentials, or replace the node with your preferred LLM provider.

### Requirements
* An API key for OpenRouter or credentials for your preferred LLM provider.
* A Chatwoot account with at least one integrated channel and super admin access to obtain the `api_access_token`.

## Need Help Building Something More?

Contact me on:
* **Telegram:** @ninesfork
* **LinkedIn:** [George Zargaryan](https://www.linkedin.com/in/george-zargaryan-b65290367/)

Happy Hacking! 🚀

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
