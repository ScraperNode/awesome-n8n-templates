# 🎣 Streamline lead intake and AI routing using Typeform, OpenAI & Gmail

> ⚡ **98 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works  
This workflow captures new form submissions, cleans the data, and stores it securely before applying AI-based lead qualification. It analyzes each message to assign category, score, and priority. Based on this classification, leads are routed to the appropriate response path. The system ensures every lead is saved first, then enriched and responded to automatically.

## Step-by-step  

- **Capture and clean lead data**  
  - **Typeform Trigger** – Listens for new submissions in real time.  
  - **Sanitize Lead Data** – Cleans names, formats emails, and extracts domain.  

- **Store lead in database**  
  - **Create a record** – Saves lead details in Airtable with status “New”.  

- **Analyze and enrich with AI**  
  - **AI Lead Analyzer** – Uses OpenAI to classify, score, and prioritize leads.  
  - **Merge** – Combines original lead data with AI-generated insights.  

- **Route and respond automatically**  
  - **Route by Category** – Directs leads based on AI classification.  
  - **Send a message** – Sends tailored email for sales inquiries.  
  - **Send a message1** – Sends confirmation email for support requests.  
  - **Send a message2** – Sends response for partnership inquiries.  
  - **Send a message3** – Sends fallback response for other categories.  
  - **Send a message4** – Sends Discord alert for high-priority leads.  

## Why use this?  

- Ensures no lead is lost by storing data before processing  
- Automatically prioritizes high-value opportunities using AI  
- Reduces manual lead qualification and response time  
- Provides personalized responses based on intent  
- Enables real-time team alerts for important leads

## 🔗 Nodes Used

Airtable, Typeform Trigger, Discord, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
