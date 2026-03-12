# 💬 WhatsApp Starter Workflow

> ⚡ **29,773 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow is designed for working with the WhatsApp Business platform. It allows to send custom replies via WhatsApp in response to incoming user messages. 

💡 Take a look at the step-by-step tutorial on [how to create a WhatsApp bot](https://blog.n8n.io/whatsapp-bot/).

The workflow consists of two parts:
 
1. The first Verify webhook sends back verification challenge string. You will need this part during the setup process on the Meta for Developers portal:

 ![wf_explain.png](fileId:775)

- Select your App
- Go to WhatsApp Configuration
- Click on the Edit button in the Webhook session
- Enter your production webhook URL, provide Verify token (can be any text string)
- Remember to activate the n8n workflow!
- Finally press "Verify and save"

![wf_explain2.png](fileId:774)

2. Once the webhook is verified, the Respond webhook receives various POST requests from Meta regarding WhatsApp messages (user messages and status notifications). 

The workflow checks whether the incoming JSON contains a user message. If this is the case, it sends the text message back to the user. This is a custom message, not a WhatsApp Business template.

## 🔗 Nodes Used

Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
