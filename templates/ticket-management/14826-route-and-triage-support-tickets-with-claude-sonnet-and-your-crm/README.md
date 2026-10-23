# 🎫 Route and triage support tickets with Claude Sonnet and your CRM

> ⚡ **211 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Overview
This workflow automates customer support ticket processing using AI-powered analysis, classification, and intelligent routing.

It processes incoming tickets from email or webhook, translates messages when needed, analyzes sentiment and urgency, and routes tickets to auto-reply or escalation flows. The system also updates CRM platforms and logs observability metrics for monitoring.

This enables faster response times, improved customer experience, and scalable support operations.

---

## How It Works

1. **Input Sources**
   - Receives tickets via:
     - IMAP Email Trigger
     - Webhook endpoint

2. **Workflow Configuration**
   - Defines:
     - CRM/Helpdesk API endpoint
     - Escalation webhook URL
     - Observability logging endpoint

3. **Data Cleaning & Normalization**
   - Extracts and cleans HTML content
   - Normalizes ticket data:
     - Ticket ID
     - User email
     - Message content
     - Timestamp
     - Source channel

4. **Language Detection & Translation**
   - Detects the original language
   - Translates message into English if needed
   - Returns confidence score

5. **AI Support Intelligence**
   - Classifies ticket into:
     - Sentiment (positive/neutral/negative)
     - Urgency (low → critical)
     - Category (billing, bug, technical, etc.)
   - Generates:
     - Short summary
     - Churn risk score (0–1)
     - Recommended action path

6. **Decision Routing**
   - Routes tickets based on AI output:
     - **Auto Reply** → Generate response
     - **Escalate / Critical** → Send to team

---

### Auto Reply Flow

7. **AI Reply Generation**
   - Drafts professional response using ticket context
   - Keeps tone empathetic and actionable

8. **CRM/Helpdesk Update**
   - Sends structured ticket data to CRM:
     - Priority
     - Category
     - Sentiment
     - Churn risk
     - Draft reply

---

###  Escalation Flow

9. **Escalation Handling**
   - Sends high-priority tickets to support team
   - Includes full ticket context and analysis

---

###  Observability & Monitoring

10. **Metrics Logging**
   - Tracks:
     - Response time
     - Escalation status
     - Category & urgency
     - Sentiment & churn risk
   - Sends data to observability endpoint (optional)

---

## Setup Instructions

1. **Email / Webhook Setup**
   - Configure IMAP credentials OR webhook endpoint (`support-ticket`)

2. **AI Model Setup**
   - Add Anthropic or OpenAI credentials
   - Connect models to:
     - Translation agent
     - Intelligence agent
     - Reply generator

3. **CRM / Helpdesk Integration**
   - Set API endpoint URL
   - Configure headers and authentication

4. **Escalation Setup**
   - Add webhook URL for team notifications (Slack, internal API, etc.)

5. **Observability (Optional)**
   - Configure logging endpoint for metrics tracking

6. **Customize Prompts**
   - Adjust system messages for:
     - Translation
     - Classification
     - Reply generation

---

## Use Cases

- AI-powered customer support automation  
- SaaS support ticket triaging  
- Multi-language support systems  
- Helpdesk automation with CRM integration  
- Customer churn risk detection workflows  

---

## Requirements

- Anthropic or OpenAI API key  
- Email (IMAP) or webhook source  
- CRM/helpdesk system API  
- Optional observability/logging service  
- n8n instance  

---

## Key Features

- Multi-channel ticket ingestion (email + webhook)  
- Automatic language detection and translation  
- AI-based sentiment, urgency, and category classification  
- Intelligent routing (auto-reply vs escalation)  
- AI-generated support replies  
- CRM integration for structured ticket updates  
- Observability and performance tracking  

---

## Summary

A powerful AI-driven support automation workflow that processes, analyzes, and routes customer tickets intelligently. It reduces manual workload, improves response speed, and enables scalable, data-driven support operations.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
