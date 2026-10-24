# 🎣 Capture, score and route Gmail leads with Groq Llama 3.3, Supabase and Slack

> ⚡ **25 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works  
This workflow captures incoming leads from Gmail, validates and stores them in Supabase, then uses AI to score and classify each lead. Based on the classification, leads are automatically routed to the appropriate Slack channel. It runs continuously with a wait cycle to process new and updated leads. The result is a fully automated lead qualification and routing system.

## Step-by-step  

- **Lead capture and validation**  
  - **Gmail Trigger** – Monitors inbox for new lead emails.  
  - **Get a message** – Retrieves full email content.  
  - **Normalize Incoming Lead Data** – Extracts name, message, email, and source.  
  - **Validate Lead Data** – Ensures required fields are present.  

- **Lead storage and notification**  
  - **Notify New Lead (Slack)** – Sends alert to Slack channel.  
  - **Store Lead in Database** – Saves lead data in Supabase.  

- **AI lead scoring pipeline**  
  - **Wait** – Delays execution before next cycle.  
  - **Fetch Unscored Leads** – Retrieves leads with score = 0.  
  - **AI Lead Scoring Engine** – Generates score and summary.  
    - **LLM (Scoring)** – Provides AI model for scoring.  
    - **Structured Output Parser** – Formats AI response.  
  - **Map AI Score Output** – Prepares score data fields.  
  - **Update Lead Score** – Updates score and status in database.  


- **Lead qualification and classification**  
  - **Fetch Scored Leads** – Gets leads ready for routing.  
  - **Check Message Exists** – Filters valid messages.  
  - **AI Lead Classification Engine** – Categorizes lead type.  
    - **LLM (Classification)** – Provides classification logic.  

- **Smart routing and notifications**  
  - **Route Lead by Category** – Splits leads by category.  
  - **Send to Sales Channel** – Sends sales leads to Slack.  
  - **Send to Support Channel** – Sends support leads.  
  - **Send to Billing Channel** – Sends billing-related leads.  
  - **End** – Stops workflow for unmatched cases.  

## Why use this?  
- Automatically prioritizes high-quality leads using AI scoring  
- Eliminates manual lead sorting and routing effort  
- Ensures faster response by notifying the right team instantly  
- Centralizes lead data in a structured database  
- Scales easily for high-volume inbound lead processing

## 🔗 Nodes Used

Slack, Gmail, Supabase, Gmail Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
