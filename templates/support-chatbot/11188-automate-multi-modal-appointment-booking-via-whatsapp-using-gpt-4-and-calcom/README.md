# 💬 Automate multi-modal appointment booking via WhatsApp using GPT-4 and Cal.com

> ⚡ **1,870 views** · 💬 [Support Chatbots](../)

## Description

## Who is this for?

This workflow is for **healthcare professionals, consultants, coaches, and service businesses** who want to completely automate their appointment booking system via WhatsApp — without manual intervention for reservations, availability checks, or cancellation management.

## What problem is this workflow solving? / Use case

Managing appointments manually via WhatsApp is extremely time-consuming: checking availability, confirmations, rescheduling, cancellations. This workflow **automates the entire process** — from initial request to final confirmation — allowing your clients to book, modify, or cancel appointments 24/7, in natural language, directly via WhatsApp.

## What this workflow does

* Processes multi-modal messages (text, audio, images) from WhatsApp Business API
* Detects message type and routes to appropriate processing (Whisper for audio, GPT-4 Vision for images)
* Uses AI Agent with 5 Cal.com tools to manage complete appointment lifecycle
* Checks real-time availability in your Cal.com calendar
* Books appointments autonomously without human intervention
* Handles cancellations and rescheduling requests
* Maintains conversation context with Simple Memory for natural exchanges
* Formats responses with Unicode bold for better WhatsApp readability
* Sends automated replies directly to the client

**The result:** a fully automated 24/7 appointment management system via WhatsApp.

## Setup

### 1. WhatsApp Business API
* Connect your WhatsApp Business API account in n8n.
* Set up the webhook in Facebook Developer Console (Webhook → Messages → Subscribe).
* Add your phone_number_id and access token credentials.

### 2. Cal.com
* Create a Cal.com account and configure your calendar.
* Generate an API Key from Cal.com settings.
* Set up your event types (duration, availability, pricing).
* Add your Cal.com API credentials in n8n.

### 3. OpenAI
* Get an OpenAI API key (for GPT-4, Whisper, and Vision).
* Add your OpenAI credentials in n8n.
* The workflow uses GPT-4 for conversation, Whisper for audio transcription, and GPT-4 Vision for image analysis.

### 4. Customize the AI Agent
* Edit the System Message to define your agent's personality, tone, and business context.
* Adjust timezone in tool parameters (default: Europe/Paris).
* Configure event type IDs for different appointment types.

### 5. Test & activate
* Test with different message types (text, audio, image) from WhatsApp.
* Verify appointments are created correctly in Cal.com.
* Switch to production mode and activate the workflow.


This workflow helps you build a **fully autonomous AI booking assistant**, transforming WhatsApp into a 24/7 appointment management system.

---

## Need help customizing?

Contact me for consulting and support: **[LinkedIn](https://www.linkedin.com/in/st%C3%A9phane-bordas-3439b4179/)** / **[Youtube](https://www.youtube.com/@stephane_bordas)**

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
