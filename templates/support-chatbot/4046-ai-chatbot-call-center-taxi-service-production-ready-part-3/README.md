# 💬 AI chatbot call center: Taxi service (Production-ready, part 3)

> ⚡ **436 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

### Workflow Name: 🛎️ Taxi Service

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Execute Sub-workflow Trigger node
- Chat Trigger node
- Redis node
- Postgres node
- AI Agent node
- If node, Switch node, Code node, Edit Fields (Set)

### Prerequisite

- Execute Sub-workflow Trigger: **Taxi Service Workflow** (or your own node)
- Sub-workflow: **Taxi Service Provider** (or your own node)
- Sub-workflow: **Demo Call Back** (or your own node)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- **Service Data** from **external Database** with **Caching Mechanism**
- Optional **Long Terms Memory** design
- **Find Route Distance** using **Google Map API**
- Optional **Multi-Language** Wait Output example
- **Error Management**

# What this workflow does?

This is a n8n **Taxi Service Workflow** demo. It is the core node for Taxi Service. It will receive message from the **Call Center Workflow**, handling the QA from the caller, and pass to each of the **Taxi Service Provider Workflow** to process the estimation.

# **How it works**

- The **Flow Trigger** node will wait for the message from **Call Center** or other Sub-workflow.
- When message is received, it will first check for the matching **Service** from the PostgreSQL database.
- If no service or service is inactive, output Error.
- Next, always reset the **Session Data** in Cache, with channel_no set to taxi
- Next, delete the previous **Route Data** in Cache
- Trigger a **AI Agent** to process the fare estimation question to create the **Route Data**
- Use the **Google Map Route API** to calculate the distance.
- Repeat until created the route data, then pass to all the **Taxi Service Provider** for an estimation.

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Service Cache,** **Save Service Cache, Reset Session, Delete Route Data, Route Data, Update User Session** and **Create Route Data**.
4. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Load Service Data, Postgres Chat Memory, Load User Memory** and **Save User Memory.**
6. Modify the **AI Agent** prompt to fit your need
7. Set you Google Map API key in **Find Route Distance**

# How to adjust it to your needs

1. By default, this template will use the **sys_service** table provider information, you could change it for your own design.
2. You can use any **AI Model** for the **AI Agent** node
3. Learn we use the prompt for the **Load/Save User Memory** on demand.
4. Include is our prompt for the taxi service. It is a flexible design which use the data from the **Service** node to customize the prompt, so you could duplicate this workflow as another service.
5. Create difference **Taxi Providers** to process the and feedback the estimate.

## 🔗 Nodes Used

Postgres, Redis, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
