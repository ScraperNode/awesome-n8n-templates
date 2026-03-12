# 📖 IT ops AI SlackBot workflow - chat with your knowledge base

> ⚡ **40,753 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

![ogimageaiwf14x8 1.png](fileId:840)

## Video Demo:

[Click here to see a video of this workflow in action](https://www.loom.com/share/bbeaa4b9295d4746b2cbab38a40f6f4b?sid=8326242c-3848-47db-872a-116a4b795ca9).


## Summary Description:

The "IT Department Q&A Workflow" is designed to streamline and automate the process of handling IT-related inquiries from employees through Slack. When an employee sends a direct message (DM) to the IT department's Slack channel, the workflow is triggered. The initial step involves the "Receive DMs" node, which listens for new messages. Upon receiving a message, the workflow verifies the webhook by responding to Slack's challenge request, ensuring that the communication channel is active and secure.

Once the webhook is verified, the workflow checks if the message sender is a bot using the "Check if Bot" node. If the sender is identified as a bot, the workflow terminates the process to avoid unnecessary actions. If the sender is a human, the workflow sends an acknowledgment message back to the user, confirming that their query is being processed. This is achieved through the "Send Initial Message" node, which posts a simple message like "On it!" to the user's Slack channel.

The core functionality of the workflow is powered by the "AI Agent" node, which utilizes the OpenAI GPT-4 model to interpret and respond to the user's query. This AI-driven node processes the text of the received message, generating an appropriate response based on the context and information available. To maintain conversation context, the "Window Buffer Memory" node stores the last five messages from each user, ensuring that the AI agent can provide coherent and contextually relevant answers.

Additionally, the workflow includes a custom Knowledge Base (KB) tool ([see that tool template here](https://n8n.io/workflows/2398-kb-tool-confluence-knowledge-base/)) that integrates with the AI agent, allowing it to search the company's internal KB for relevant information. After generating the response, the workflow cleans up the initial acknowledgment message using the "Delete Initial Message" node to keep the conversation thread clean. Finally, the generated response is sent back to the user via the "Send Message" node, providing them with the information or assistance they requested. This workflow effectively automates the IT support process, reducing response times and improving efficiency.

To quickly deploy the Knowledge Ninja app in Slack, use the app manifest below and don't forget to replace the two sample urls:

```
{
    "display_information": {
        "name": "Knowledge Ninja",
        "description": "IT Department Q&A Workflow",
        "background_color": "#005e5e"
    },
    "features": {
        "bot_user": {
            "display_name": "IT Ops AI SlackBot Workflow",
            "always_online": true
        }
    },
    "oauth_config": {
        "redirect_urls": [
            "Replace everything inside the double quotes with your slack redirect oauth url, for example: https://n8n.domain.com/rest/oauth2-credential/callback"
        ],
        "scopes": {
            "user": [
                "search:read"
            ],
            "bot": [
                "chat:write",
                "chat:write.customize",
                "groups:history",
                "groups:read",
                "groups:write",
                "groups:write.invites",
                "groups:write.topic",
                "im:history",
                "im:read",
                "im:write",
                "mpim:history",
                "mpim:read",
                "mpim:write",
                "mpim:write.topic",
                "usergroups:read",
                "usergroups:write",
                "users:write",
                "channels:history"
            ]
        }
    },
    "settings": {
        "event_subscriptions": {
            "request_url": "Replace everything inside the double quotes with your workflow webhook url, for example: https://n8n.domain.com/webhook/99db3e73-57d8-4107-ab02-5b7e713894ad",
            "bot_events": [
                "message.im"
            ]
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": false,
        "token_rotation_enabled": false
    }
}

```

## 🔗 Nodes Used

Slack, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
