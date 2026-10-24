# 🎫 Draft AI-powered Help Scout replies with HubSpot and SMS customer 360 context

> ⚡ **45 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description  
**Categories**  
Customer Support Automation, AI Agents, CRM Integration, SaaS Operations

---

## Build an AI-Driven Cross-Platform Support Context Engine with n8n

This workflow creates an AI-powered middleware layer that unifies customer context across Help Scout, HubSpot, and SMS platforms. 

When a new support ticket or reply is received, it fetches the customer's CRM deal stage, onboarding status, and recent text messages. It then generates an AI response, runs it through a secondary QA audit for brand safety, and routes it as a human-reviewed draft in Help Scout. 

The result is a highly contextual, zero-blind-spot support system that protects brand voice without sacrificing efficiency.

---

## Benefits

### 100% Contextual Replies  
Agents (and AI) see the full customer journey across all three platforms before responding.

### Built-in Brand Protection  
Dual-LLM QA gate prevents off-brand, hallucinated, or inappropriate auto-responses.

### Human-in-the-Loop Safety  
AI drafts are saved, never auto-sent, keeping humans in complete control of final delivery.

### Smart Escalation Routing  
High-value accounts or angry customers are instantly routed to senior agents with sentiment tags.

### Zero Platform Lock-in  
Uses standard webhooks and APIs, easily adaptable to other CRMs or ticketing tools.

---

## How It Works

### Help Scout Webhook Listener  
- Triggered via webhook when a new conversation or customer reply is created in Help Scout  
- Filters out noise (e.g., internal notes, tag changes) to save API calls  

### Cross-Platform Data Fetching  
- Simultaneously pulls CRM data from HubSpot (deal value, stage)  
- Pulls recent message history from SMS platforms (e.g., Sales Messenger)  

### Shared Context Layer Construction  
- Merges ticket payload with CRM and SMS data  
- Formats into a structured "Customer 360" prompt string  

### AI Draft Generation (LLM 1)  
- Uses GPT-4o to draft a highly empathetic, context-aware reply  
- Restricted to using ONLY the provided shared context to prevent hallucinations  

### AI QA & Sentiment Audit (LLM 2)  
- Uses a lightweight model (GPT-4o-mini) to evaluate the draft for brand safety  
- Extracts a strict JSON sentiment score (positive/neutral/negative/angry)  

### Smart Routing & Action  
- If angry/negative → Escalates to a human agent and tags the ticket  
- If high-value but approved → Saves as a draft for an Account Manager  
- Otherwise → Saves as a standard draft for fast agent review  

---

## Required Setup

### Help Scout  
- API credentials (OAuth2 or App ID/Secret)  
- Webhooks configured in Help Scout (subscribed to `convo.created`)  
- Permissions to create drafts and assign conversations  

### HubSpot  
- Private App Token  
- Permissions to search contacts and read deal/custom properties  

### SMS Platform  
- API access (Sales Messenger, Twilio, or similar)  
- Ability to fetch message history by email or contact ID  

### AI Model  
- OpenAI API key  
- Configured for GPT-4o (Draft) and GPT-4o-mini (QA)  

### n8n  
- Self-hosted or cloud  
- Environment variables configured for `highValueThreshold` and `humanAgentId`  

---

## Business Use Cases

### B2B SaaS Support Teams  
- Eliminate the "tell me your account email" friction by arming agents with immediate context  

### Customer Success Managers  
- Proactively handle onboarding stalls or high-value renewals with full history visibility  

### Founders & COOs  
- Scale support quality across 1M+ users without risking brand reputation via careless AI auto-replies  

### Agencies & Consultants  
- Deliver high-end "AI-powered unified inbox" architectures to enterprise clients  

---

## Difficulty Level  
Advanced

---

## Estimated Build Time  
60–90 minutes

---

## Monthly Operating Cost  
- Help Scout: Existing plan  
- HubSpot: Existing plan  
- SMS API: Existing plan  
- AI Model: Usage-based (typically very low for QA/Generation)  
- n8n: Self-hosted or cloud  

Typical range: $5–$50/month (highly dependent on ticket volume)

---

## Why This Workflow Works

- Merging API data into a single context string solves the "disconnected tools" problem natively  
- The two-step LLM approach (Draft + QA) makes AI safe for front-line customer communication  
- Help Scout drafts provide the perfect human-in-the-loop UI without custom frontend builds  
- Sentiment-based routing ensures high-churn-risk tickets get immediate human empathy  

---

## Possible Extensions

- Auto-pause HubSpot email sequences when a negative Help Scout ticket is detected  
- Trigger proactive SMS outreach if a HubSpot onboarding status stalls for X days  
- Log all AI drafts and QA scores to a PostgreSQL database for monthly brand-audit reporting  
- Auto-translate drafts based on the contact's locale before saving the Help Scout draft  
- Use Slack to ping the assigned agent with a summary of the generated draft  

---

## Details

**Nodes used in workflow**
- Webhook  
- Code (Parse Event & Extract Data)  
- HTTP Request (Fetch HubSpot Context)  
- HTTP Request (Fetch SMS History)  
- Merge  
- Code (Build Shared Context Layer)  
- OpenAI (AI Draft Generator)  
- OpenAI (AI QA & Sentiment Check)  
- Code (Parse QA Output)  
- Switch (Sentiment Router)  
- If (High Value + Approved?)  
- HTTP Request (Save Draft)  
- HTTP Request (Escalate to Human)  
- Respond to Webhook  
- Error Trigger  
- Sticky Note
```

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
