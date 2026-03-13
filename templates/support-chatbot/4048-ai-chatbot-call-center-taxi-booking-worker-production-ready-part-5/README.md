# 💬 AI chatbot call center: Taxi booking worker (production-ready, part 5)

> ⚡ **483 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

### Workflow Name: 👷‍♂️ Taxi Booking Worker

Template was created in n8n v1.90.2

### Skill Level: High

### Categories: n8n, Chatbot

### Stacks

- Execute Sub-workflow Trigger node
- Chat Trigger node
- Redis node
- Postgres node
- Google Calendar node
- Execute Sub-workflow
- If node, Switch node, Code node, Edit Fields (Set)

### Prerequisite

- Execute Sub-workflow Trigger: **Call In Center** (or your own node)
- Sub-workflow: **Demo Call Back** (or your own node)

# Production Features

- **Scaling Design** for n8n **Queue mode** in production environment
- Customize **Open Booking Action**
- Integrate  with **Long Term Memory** backup.
- **Error Management**

# What this workflow does?

This is a n8n **Taxi Booking Worker**, the worker node to process the job. It will wait for message from the Call Center node and handle the real process here. In this particular case, it will check the input number for the selected provider, then update the booking from NEW to OPEN, then clean up the orphan data.

# **How it works**

- The **Form Trigger** node will wait for the message from any node with the input in number.
- First check for NEW booking under the same chat session
- For input 0, which is cancel
    - Reset the user session in Redis memory
- For input 1 or above, which is the provider selection number
    - Set the booking status to OPEN in database
    - OPTIONAL Save the summary to **User Memory** database
    - OPTIONAL Create a new Event in **Google Calendar** and sync to the database
    - Reset the user session in Redis memory
- Afterward, process data clean up
    - Delete the provider selection number queue in Redis
    - Delete the route data in Redis
    - OPTIONAL Delete the chat memory with current session
- Finally, output the response to the **Call Back** node

# **Set up instructions**

1. Pull and Set up the required SQL from our [Github repository](https://github.com/ChatPayLabs/n8n-chatbot-core).
2. Create you **Postgres credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
3. Select your Credentials in **Booking, Set Open Booking, Sync Booking Google Cal**, and **Save User Memory.**
4. Create you **Redis credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
5. Select your Credentials in **Reset Session, Reset Session 2**, **Delete Provider Number** and **Delete Route Data**.
6. Create your **Google Calendar credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.googleCalendar) for more information.
7. Create a Google Calendar, e.g. DEMO
8. Select your Credentials in **Create Event**, and select the above Calendar
9. FOR TEST ONLY. Enable the **Telegram Test Output** for testing from the **Test Input**.

# How to adjust it to your needs

1. You can specific a number to trigger the specific action based on your needs.
2. The current action only create a event in Google Calendar, you can do more based on your needs.
3. You can replace the sub-workflow trigger **Flow Trigger** and **Call Back** to another flow as needs.

## 🔗 Nodes Used

Postgres, Redis, Execute Sub-workflow, Google Calendar, Execute Workflow Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
