# 💬 AI chatbot call center: Demo call center (production-ready, part 2)

> ⚡ **2,063 views** · 💬 [Support Chatbots](../)

## Description

### Workflow Name: ☎️ Demo Call Center

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

- Execute Sub-workflow Trigger: **Telegram Call In Workflow** (or your own node)
- Sub-workflow: **Taxi Service** (or your own node)
- Sub-workflow: **Taxi Booking Worker** (or your own node)
- Sub-workflow: **Demo Call Back** (or your own node)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Optional **Rate Limit** design to prevent overused
- Optional **Long Terms Memory** design
- **Multi-Service** design
- **Testing Flow** with or without dependance on other workflow.
- **Error Management**

# What this workflow does?

This is a n8n **Demo Call Center Workflow** demo. It is the main entry node for a **Multiple Services Chatbot**. It will receive message from the **Call In Workflow**, and decide which service should be use, or which service provider should be process the selected result.

# **How it works**

- The **Flow Trigger** node will wait for the message from the **Call In** **Workflow** or other Sub-workflow.
- When message is received, it will first check for the **Rate Limit.**
- If ok, load the **Session Data** from Cache.
- Next, check the current Session for the **channel_no** (default is **chat**).
- if channel_no is **chat**, continue to the AI Agent for chit-chat.
- if channel_no is **taxi** or others, pass to the Service Input (i.e. **Taxi Service**) or Service Worker (i.e. **Taxi Booking Worker**) to handle it directly.
- The **AI Agent** should decide which service (i.e. **taxi**) will be used at some point and update the **channel_no** in **Session,** and pass to the Service Node (i.e. **Taxi Service**) at once.
- In case of any error, reply the error in **Call Back**.

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Rate Limit, Session, Provider** and **New Session**.
4. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Postgres Chat Memory, Load User Memory** and **Save User Memory.**
6. Modify the **AI Agent** prompt to fit your need

# How to adjust it to your needs

1. In Session, we have a timestamp fields which is created at the **Input node.** The usage of this is combined to use with the session id to create a unique session, since some media, such as Telegram, do not have a unique session along with the chat.
2. You can use any **AI Model** for the **AI Agent** node
3. Learn we use the prompt for the **Load/Save User Memory** on demand.
4. Include is our prompt for the taxi service. You can add more service similar to this.

## 🔗 Nodes Used

Redis, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
