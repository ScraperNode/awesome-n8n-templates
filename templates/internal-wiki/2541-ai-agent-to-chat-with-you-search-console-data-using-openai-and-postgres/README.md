# 📖 AI agent to chat with you Search Console data, using OpenAI and Postgres

> ⚡ **9,168 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

**Edit 19/11/2024**: As explained on the workflow, the **AI Agent with the original system prompt was not effective when using `gpt4-o-mini`**.

To address this, I **optimized the prompt to work better with this model.** You can find the prompts I’ve tested on this **[Notion Page](https://dataki.notion.site/Prompts-for-n8n-Workflow-AI-Agent-to-Chat-with-Your-Search-Console-Data-143a162bd9cd8000b4d6dc8750a0d83f)**. And yes, there is one that **works well with `gpt4-o-mini`**.

## AI Agent to chat with you Search Console Data, using OpenAI and Postgres



This **AI Agent enables you to interact with your Search Console data** through a **chat interface**. Each node is **documented within the template**, providing sufficient information for setup and usage. You will also need to **configure Search Console OAuth credentials**.

Follow this **[n8n documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#configure-your-oauth-consent-screen)** to set up the OAuth credentials.

## Important Notes

### Correctly Configure Scopes for Search Console API Calls
- It’s essential to **configure the scopes correctly** in your Google Search Console API OAuth2 credentials. Incorrect **configuration can cause issues with the refresh token**, requiring frequent reconnections. Below is the configuration I use to **avoid constant re-authentication**:
![Search Console API oAuth2 config 1](https://i.imgur.com/vVLM7gG.png)
![Search Console API oAuth2 config 2](https://i.imgur.com/naT1NaX.png)

Of course, you'll need to add your **client_id** and **client_secret** from the **Google Cloud Platform app** you created to access your Search Console data.

### Configure Authentication for the Webhook

Since the **webhook will be publicly accessible**, don’t forget to **set up authentication**. I’ve used **Basic Auth**, but feel free to **choose the method that best meets your security requirements**.

## 🤩💖 Example of awesome things you can do with this AI Agent
![Example of chat with this AI Agent](https://i.imgur.com/jbfsYvT.png)

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
