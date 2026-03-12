# 💬 Taxi service provider (production-ready, part 4)

> ⚡ **334 views** · 💬 [Support Chatbots](../)

## Description

### Workflow Name: 🤖 Taxi Service Provider

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Execute Sub-workflow Trigger node
- Chat Trigger node
- Redis node
- Postgres node
- AI Agent node
- Calculator node
- If node, Switch node, Code node, Edit Fields (Set)

### Prerequisite

- Execute Sub-workflow Trigger: **Taxi Service Workflow** (or your own node)
- Sub-workflow: **Demo Call Back** (or your own node)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- **Provider Data** from **external Database** with **Caching Mechanism**
- Optional **Score** design output
- Optimize **Taxi Provider Prompt** from database
- **Error Management**

# What this workflow does?

This is a n8n **Taxi Provider Workflow** demo. It will receive message from the **Taxi Service Workflow**, process the estimation and return to the caller.

# **How it works**

- The **Flow Trigger** node will wait for the message from other Sub-workflow.
- When message is received, it will first check for the matching **Provider** from the PostgreSQL database.
- Then it will increase a **Provider Number** in Redis for selection later
- Trigger a **AI Agent** to process the fare estimation and create a **NEW booking**
- Finally, send the AI response to the **Call Output**
- Note: if the **Provider** is set to inactive, it will do nothing

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Provider Cache,** **Save Provider Cache** and **Provider Number**.
4. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Load Provider Data** and **Create Booking Data.**
6. Modify the **AI Agent** prompt to fit your need

# How to adjust it to your needs

1. By default, this template will use the **sys_provider** table provider information, you could change it for your own design.
2. You can use any **AI Model** for the **AI Agent** node
3. Include is our prompt for the taxi service provider. It is a flexible design which use the data from the **Provider Cache** to customize the prompt, so you could create more **Taxi Service Providers** by duplicate this workflow in the **Taxi Service** node.

## 🔗 Nodes Used

Postgres, Redis, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
