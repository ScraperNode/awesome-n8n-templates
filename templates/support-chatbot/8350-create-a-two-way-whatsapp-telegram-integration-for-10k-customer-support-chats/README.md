# 💬 Create a two-way WhatsApp + Telegram integration for 10k+ customer support chats

> ⚡ **1,183 views** · 💬 [Support Chatbots](../)

## Description

# ⚡ Next-Gen Customer Support: Two-Way WhatsApp + Telegram Integration for 10k+ Clients
------------------------------------------------------------------------

## Who is this workflow for

This workflow is designed for **customer support teams, e-commerce
founders, and operations managers** who want to handle thousands of
customer queries seamlessly. Instead of building a brand-new chat
application, it leverages **WhatsApp (where customers already are)** and
**Telegram (where your support team operates)** to create a scalable,
topic-based support system.

If you are a brand handling 1000s of daily WhatsApp customer messages
and need a structured way to map each customer into a dedicated support
thread without chaos, this workflow is for you.

------------------------------------------------------------------------

## What it does / How it works

This **two-way n8n automation** bridges WhatsApp and Telegram by
creating **one Telegram forum topic per customer** and syncing messages
both ways:

1.  **Incoming WhatsApp → Telegram**
    -   When a new WhatsApp message arrives, the workflow checks if the
        customer already has a topic in Telegram.
    -   If yes → The message is forwarded into that existing topic.
    -   If no → A new topic is created automatically, the mapping is
        saved in the database, and the message is posted there.
    -   Result: every customer has a dedicated thread in your Telegram
        supergroup.
2.  **Outgoing Telegram → WhatsApp**
    -   When a support agent replies in a Telegram topic, the workflow
        looks up the linked WhatsApp number.
    -   The reply is sent back to the customer on WhatsApp, preserving
        context.
    -   Result: two-way synced conversations without building a custom
        app.

------------------------------------------------------------------------

## How to set it up

1.  **Configure WhatsApp Cloud API**
    -   Create a Meta Developer account and register a WhatsApp Business
        number.
    -   Generate an access token and phone number ID.
2.  **Configure Telegram Bot**
    -   Use BotFather to create a bot and enable it in a **Telegram
        Supergroup with Topics**.
    -   Get the `chat_id` and allow the bot to create/send messages in
        topics.
3.  **Database (Supabase/Postgres)**
    -   Create a table `wa_tg_threads` to map `phone_e164` ↔
        `telegram_topic_id` ↔ `supergroup_id`.
4.  **n8n Workflows**
    -   Workflow A: WhatsApp → Telegram
        -   Trigger: WhatsApp Webhook
        -   Steps: Lookup customer → If exists send to topic, else
            create topic → Save mapping → Forward message.
    -   Workflow B: Telegram → WhatsApp
        -   Trigger: Telegram Webhook
        -   Steps: Filter only topic replies → Lookup mapping → Send
            WhatsApp message.
5.  **Testing**
    -   Send a WhatsApp message → Check Telegram topic created.
    -   Reply in Telegram topic → Ensure customer receives WhatsApp
        reply.

------------------------------------------------------------------------

## Requirements

-   A free or paid **n8n instance** (self-hosted or cloud).
-   **WhatsApp Cloud API credentials** (phone number ID + access
    token).
-   **Telegram Bot token** with access to a **Supergroup with Topics**
    enabled.
-   A **Postgres/Supabase database** to store thread mappings.
-   Basic familiarity with editing HTTP Request nodes in n8n.

------------------------------------------------------------------------

## How to customize the workflow

-   **Brand personalization:** Pre-populate first message templates
    (thank you, order status, delivery updates).
-   **Routing rules:** Assign specific agents to certain topics by ID
    ranges.
-   **Integrations:** Extend to CRMs (HubSpot, Zoho) or support
    platforms (Freshdesk, Zendesk).
-   **Notifications:** Push high-priority WhatsApp queries into
    Slack/Teams for instant alerts.
-   **Archival:** Auto-close inactive topics after N days and mark
    customers as dormant.

------------------------------------------------------------------------

## Why Telegram instead of building a new App

The client's requirement was clear: **use an existing, reliable, and
scalable chat platform** instead of building a new app from scratch.

-   **Telegram Supergroups with Topics** scale to 100,000+ members and
    millions of messages, making them ideal for managing 10k+ customer
    threads.
-   Agents don't need to install or learn a new tool---they continue
    inside Telegram, which is fast, free, and mobile-friendly.
-   Building a custom chat app would require authentication, push
    notifications, scaling infra, and UX---all solved instantly by
    Telegram.

This decision **saves development cost, accelerates deployment, and
provides proven scalability**.

------------------------------------------------------------------------

## Why this improves support productivity

-   **Organized by customer:** Each WhatsApp number has its own Telegram
    topic.
-   **No missed messages:** Agents can quickly scroll topics without
    drowning in one endless chat.
-   **Two-way sync:** Replies flow back to WhatsApp seamlessly.
-   **Scales automatically:** Handle 10k+ conversations without losing
    track.
-   **Leverages existing tools:** WhatsApp (customers) + Telegram
    (agents).

Result: **faster responses, better tracking, and zero need to reinvent
chat software.**

------------------------------------------------------------------------

## 🔗 Nodes Used

HTTP Request, Telegram Trigger, Supabase, WhatsApp Business Cloud, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
