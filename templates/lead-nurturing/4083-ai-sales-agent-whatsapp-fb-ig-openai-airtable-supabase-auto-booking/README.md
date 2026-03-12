# 💬 AI sales agent: WhatsApp, FB, IG, OpenAI, Airtable, Supabase auto-booking

> ⚡ **8,017 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**This workflow automates multi-channel AI-driven sales engagement for lead qualification, service information delivery, and consultation booking. It integrates WhatsApp, Facebook Messenger, Instagram DM, and an n8n chat interface with a backend CRM (Airtable), a knowledge base (Supabase), and conversational AI (OpenAI), all orchestrated by n8n.**

# Tools & Services Used

Messaging Platforms: WhatsApp, Facebook Messenger, Instagram DM, n8n Built-in Chat

AI Core & Processing: OpenAI (GPT-4o for main agent logic, Whisper for audio transcription)

CRM & Data Management: Airtable (for initial WhatsApp lead lookup, lead form submissions, and as the backend for the crmAgent sub-workflow operations)

Knowledge Base: Supabase (Vector Store for technical_and_sales_knowledge tool)

Chat Memory: PostgreSQL (for the main AI Agent's conversation history)

Orchestration & Automation: n8n (Self-hosted, utilizing Langchain community nodes)

Calendar Service: Integrated via the calendarAgent sub-workflow

CRM Service: Integrated via the crmAgent sub-workflow (interacting with Airtable)

# Workflow Overview

## This automation performs the following steps:

Trigger: A new interaction is initiated through one of the following channels:

A new message is received via the WhatsApp Trigger.

A new message is received via the Facebook Trigger (Webhook).

A new message is received via the Instagram Trigger (Webhook).

A new message is received via the n8n Chat Trigger.

Alternatively, a new lead is submitted via the Airtable Form Submitted Webhook.

Channel-Specific Ingestion & Pre-processing:

## For WhatsApp:

The system attempts to find an existing lead in Airtable using the sender's phone number.

Incoming messages are routed by the Handle Message Types switch:

Text messages are passed to the Edit Fields - chat1 node to prepare input for the AI Agent, including any found lead information.

Audio messages are processed: the WhatsApp Business Cloud node gets the media URL, the HTTP Request node downloads the audio, OpenAI transcribes it to text, and Edit Fields - chat2 prepares this transcribed text and lead information for the AI Agent.

Unsupported message types trigger the Reply To User1 node to send a notification that the message type cannot be processed.

## For Facebook Messenger:

The system responds to webhook verification (Respond to Webhook - facebook get) and acknowledges new messages (Respond to Webhook - facebook post).

The If is not echo - facebook node filters out messages sent by the page.

The Sales Agent Demo - typing_on node sends a typing indicator.

The Edit Fields - facebook node prepares the message text, sender ID, and Facebook-specific context for the AI Agent.

## For Instagram DM:

The system responds to webhook verification (Respond to Webhook - instagram get) and acknowledges new messages (Respond to Webhook - instagram post).

The If is not echo - instagram node filters out messages sent by the business account.

The Edit Fields - instagram node prepares the message text, sender ID, and Instagram-specific context for the AI Agent.

## For n8n Chat:

The Edit Fields - chat node prepares the user's input and session information for the AI Agent.

## Input Aggregation for AI Agent:

Processed data from all active messaging channels (WhatsApp text/audio, Facebook, Instagram, n8n Chat) is funneled through the No Operation, do nothing node to the main AI Agent.

## AI Sales Conversation & Tool Utilization:

The AI Agent (using OpenAI Chat Model - GPT-4o, and Postgres Chat Memory) engages the user according to its system prompt, aiming to qualify them for Paint Protection Film (PPF), Ceramic Coating, or Window Tint.

The AI Agent uses the technical_and_sales_knowledge tool (which queries the Demo Supabase vector store via Embeddings OpenAI and OpenAI Chat Model1) to provide service details and answer questions.

The AI Agent uses the crmAgent tool (a sub-workflow) to log contact details (Name, Email, service interest) and update opportunity statuses in Airtable.

The AI Agent uses the calendarAgent tool (a sub-workflow) to book consultation appointments once preferred dates/times are provided. This occurs after contact details are logged in the CRM.

## Response Delivery:

The AI Agent's final textual response is passed to the Switch node.

The Switch node routes the response to the appropriate node for delivery on the original channel:

Reply To User for WhatsApp.

Facebook Graph API - Sales Agent Demo for Facebook Messenger.

Instagram Graph API - smb.sales.agent.demo for Instagram DM.

Output - chat for the n8n Chat interface.

## Airtable Form Submission Processing (Separate Branch):

When the Airtable Form Submitted webhook receives data, the Airtable node fetches the full record.

The Create Contact node creates a new contact in the Airtable 'Contacts' table.

The Edit Fields - form node prepares data for a notification.

The WhatsApp Business Cloud2 node sends a templated WhatsApp message to the lead, confirming their form submission.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Facebook Graph API, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
