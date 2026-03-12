# 💬 AI chatbot call center: demo call back (production-ready, part 6)

> ⚡ **460 views** · 💬 [Support Chatbots](../)

## Description

### Workflow Name: 💬 Demo Call Back

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Execute Sub-workflow Trigger node
- Chat Trigger node
- Redis node
- Postgres node
- Telegram node
- HTTP Request node
- If node, Code node, Edit Fields (Set)

### Prerequisite

- Execute Sub-workflow Trigger: your own node
- MiniMax Account (https://www.minimax.io/)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Optional **Provider Data** from **external Database** with **Caching Mechanism**.
- Optional **AI Clone Voice Message** response via MiniMax API with **Multi-Languages** support.
- Optional **Backup Chat Log** to Database, so you can use in APP/API building.
- **Testing Flow** with or without dependance on other workflow.
- **Multi Chatbot** (This is a demo for Telegram, you can add WhatsApp, Line, etc)
- **Error Management**

# What this workflow does?

This is a n8n **Telegram Output Workflow**. It will receive message from other Sub-workflow then output to Telegram for **Message**, or **Replay Message** and extra **Voice Message**.

# **How it works**

- The **Flow Trigger** node will wait for the message from other Sub-workflow.
- When message is received, it will first check for the matching **Provider** from the PostgreSQL database.
- Then determine if it is a Voice message to Text message.
- OPTIONAL. For voice message, use the **MiniMax API** to generate a voice message, then send it to Telegram.
- Finally, send the text to Telegram.

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Provider Cache** and **Save Provider Cache**.
4. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Load Member Data, Create Chat Log Input,** and **Create Chat Log Output.**
6. Create you **Telegram credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
7. Select your Credentials in **Telegram Voice Output**, **Telegram Reply Output**, and **Telegram Output**.

# AI Clone Voice setup instructions (Optional)

You can clone any voice with MiniMax

1. Go to https://www.minimax.io/ and create a MiniMax account
2. Setup the Database with the required variables found in the **MiniMax TTS** node
3. That’s it

# How to adjust it to your needs

1. By default, this template will use the **sys_provider** table provider information, you could change it for your own design.
2. The demo use **MiniMax API** for AI voice cloning, you could implement any other AI your choice.
3. The **Backup Chat Log** will backup all chat conversion line by line. You can use it for you own APP/API development.

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Telegram, Execute Workflow Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
