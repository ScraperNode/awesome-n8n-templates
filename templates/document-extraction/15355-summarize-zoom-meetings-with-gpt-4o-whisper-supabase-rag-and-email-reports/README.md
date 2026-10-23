# 🔬 Summarize Zoom meetings with GPT-4o, Whisper, Supabase RAG and email reports

> ⚡ **94 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# AI Meeting Intelligence System 

&gt; Zoom + n8n + GPT-4o + Supabase RAG

---

This n8n workflow automates Zoom meeting intelligence by capturing recordings via webhook, transcribing audio using OpenAI Whisper, analyzing it with GPT-4o and storing structured insights in Supabase vector database. It detects summaries, decisions, action items and contradictions, then sends an email report to stakeholders.


### Quick Implementation Steps

- [Import workflow json in your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Connect Zoom webhook for recording events  
- Configure OpenAI API (Whisper + GPT-4o)  
- Set up Supabase `meeting_memories` table with vector support  
- Add embeddings credentials in n8n  
- Activate workflow and test with a Zoom recording  


## What It Does

This workflow automatically processes Zoom meeting recordings and converts them into structured intelligence. It extracts transcript text, analyzes it using GPT-4o and generates structured insights like decisions, summaries and action items.

It also compares new meetings with historical data using Supabase vector search to detect contradictions or repeated decisions.

Finally, it stores everything in a semantic memory database and sends a clean email report to stakeholders.


## Who It's For

- Product Managers  
- Engineering Teams  
- Startup Founders  
- Project Managers  
- AI Automation Engineers  
- Remote teams using Zoom  


## Requirements to Use This Workflow

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Zoom account with webhook access  
- OpenAI API key (Whisper + GPT-4o)  
- Supabase project with vector enabled  
- Gmail OAuth credentials  
- Public webhook URL  


## How It Works & Setup Guide

### 1. Zoom Ingestion Layer

Zoom webhook captures meeting recording events and sends metadata like recording URL and meeting title to n8n.

### 2. Data Extraction Layer

The workflow extracts recording URL and metadata using a set node.

### 3. Audio Processing Layer

Audio is downloaded from Zoom cloud and sent to OpenAI Whisper for transcription into text.

### 4. Transcript Normalization Layer

The raw transcript is cleaned and formatted into a structured format for AI processing.

### 5. AI Intelligence Layer (GPT-4o)

GPT-4o analyzes the transcript and extracts:

- Summary  
- Decision  
- Action items  
- Contradiction report  

Structured output parser ensures valid JSON format.

### 6. Deduplication Layer

A hash is generated from the transcript and checked in Supabase:

- If duplicate exists → stop workflow  
- If not → continue processing  

### 7. RAG Memory Layer

Embeddings are created and stored in Supabase vector DB. Past meetings are retrieved to compare decisions and detect contradictions.

### 8. Notification Layer

Final structured output is stored and emailed to stakeholders with insights.


## How To Customize Nodes

- Modify GPT prompt for domain-specific intelligence  
- Extend metadata with project/client IDs  
- Replace Gmail with Slack or Teams integration  
- Add Jira task creation for action items  
- Customize Supabase schema for multi-team support  


## Add-ons

- Slack real-time meeting alerts  
- Jira auto task creation  
- Dashboard using Supabase + Next.js  
- Multi-language transcription support  
- Speaker identification using Whisper timestamps  


## Use Case Examples

- Automated meeting minutes generation  
- Engineering decision tracking system  
- Product requirement documentation automation  
- Client meeting summaries  
- Compliance audit trail generation  

More use cases can be built depending on customization.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| No transcript generated | Invalid Zoom recording URL | Check webhook payload |
| Duplicate not detected | Incorrect Supabase query path | Fix metadata filter |
| Empty AI response | Weak prompt structure | Improve prompt clarity |
| Email not sent | Gmail auth expired | Reconnect Gmail OAuth |
| Supabase returns empty | Wrong filter syntax | Validate JSON column query |


## Need Help

If you need help customizing or scaling this workflow into production-grade automation, you can get expert assistance from [n8n developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**. They specialize in building [AI-powered automation systems](https://www.weblineindia.com/process-automation-solutions.html) using n8n, OpenAI and vector databases.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
