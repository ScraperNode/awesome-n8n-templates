# 💬 Analyze sales calls with GPT-4, Supabase RAG, Slack and multi-CRM

> ⚡ **77 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Categories
Sales Automation, Artificial Intelligence, CRM Operations, Coaching & Training, AI Agents (RAG)

### Build an Autonomous AI Sales Coach with Fathom, CRMs, and Supabase RAG
This workflow creates an end-to-end, autonomous Sales Coaching pipeline that automatically captures live sales meeting transcripts, analyzes the rep's performance using an advanced AI Agent, and delivers highly specific, actionable feedback directly to your team. 

Instead of generic AI summaries, this system acts as a personalized Sales Director. It dynamically checks your CRM (HubSpot, Salesforce, or Pipedrive) to understand the deal's value and stage, then uses a Supabase Vector Store (RAG) to grade the transcript against your company's actual, proprietary objection-handling scripts and playbooks. 

The result is a zero-touch, highly scalable coaching system that turns every client call into a training opportunity, ensuring your reps adhere to your winning sales methodology.

### Benefits
* **Scalable, Instant Coaching:** Provide 1-on-1 feedback to every sales rep within seconds of a call ending, while the details are still fresh.
* **Context-Aware Analysis:** The AI doesn't just read the transcript; it checks the CRM to see if the rep is talking to a $500 lead or a $50,000 enterprise prospect, adjusting its grading criteria accordingly.
* **Proprietary Playbook Adherence:** By utilizing a Vector Store, the AI coaches your team using your specific battlecards, pricing logic, and scripts, rather than generic internet advice.
* **No Manual Data Entry:** Fully autonomous data capture, context gathering, and feedback delivery.

### How It Works
* **Meeting Data Ingestion (Fathom)**
  * Captures live meeting payloads via Webhook.
  * Extracts the raw transcript and critical meeting metadata.
* **Data Pre-processing**
  * A code node cleans the JSON payload.
  * Dynamically maps speaker roles (Sales Rep vs. Prospect) based on your specific company email domain.
* **Autonomous AI Evaluation (OpenAI Agent)**
  * **CRM Tool Routing:** The Agent searches HubSpot, Salesforce, or Pipedrive by the client's email to fetch Deal Stage and Value.
  * **Knowledge Retrieval (Supabase RAG):** The Agent searches your custom Supabase Vector database to find the approved company rebuttals for any objections raised on the call.
  * Grades the rep on BANT (or custom criteria), objection handling, and next steps.
* **Parallel Coaching Delivery**
  * Outputs a beautifully formatted Markdown coaching report.
  * Routes the feedback instantly to the rep via Slack and Email simultaneously for guaranteed delivery.

### Required Setup
* **Fathom:** Active account with Webhook access.
* **OpenAI:** API key for the Chat Model (Agent brain) and Embeddings Model (Vector translation).
* **Supabase:** Active project with a populated Vector Store table containing your sales playbook.
* **CRMs (HubSpot / Salesforce / Pipedrive):** OAuth or API access to search contacts and deals.
* **Slack & Email:** Configured nodes for message delivery.

### Business Use Cases
* **Sales Directors & Managers:** Automate call QA and ensure your playbook is actually being used on the front lines.
* **Account Executives:** Get immediate, actionable advice on how to handle specific objections in the follow-up email.
* **RevOps Teams:** Ensure CRM data hygiene by having an AI automatically cross-reference call transcripts with pipeline stages.
* **B2B Agencies:** Offer "Automated Sales Coaching" as a high-ticket, value-add service to your clients.

### Difficulty Level
Advanced

### Estimated Build Time
60–90 minutes (Includes configuring Supabase and mapping CRM credentials)

### Monthly Operating Cost
* **Fathom:** Existing subscription
* **OpenAI:** Usage-based (Typically $10–$30/month depending on call volume and transcript length)
* **Supabase:** Free tier is usually sufficient for text playbooks
* **n8n:** Self-hosted or cloud

### Why This Workflow Works
* **Autonomous Decision Making:** Unlike rigid, linear workflows, the AI Agent dynamically decides *which* CRM to check and *when* to search the playbook based on the context of the conversation.
* **High Signal, Low Noise:** RAG integration ensures the AI grounds its advice in your actual company truth, preventing hallucinations.
* **Immediate ROI:** Reps get exact scripts on how to save at-risk deals before the follow-up.

### Possible Extensions
* **Auto-Update CRM:** Give the AI Agent "Update" tools to automatically move Deal Stages based on the call outcome.
* **Manager Escalation:** Add a Switch node to route calls scoring below a 60/100 directly to a human Sales Manager via a separate Slack channel.
* **Follow-Up Generator:** Have the AI automatically draft the post-call follow-up email and save it as a draft in the rep's Gmail.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
