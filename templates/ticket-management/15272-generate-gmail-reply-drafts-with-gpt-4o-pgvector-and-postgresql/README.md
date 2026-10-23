# 🎫 Generate Gmail reply drafts with GPT-4o, pgvector, and PostgreSQL

> ⚡ **20 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Email Automation — AI Draft Generator
### n8n Workflow Template

---

## 📘 Description

This workflow is the core of a three-part email automation system. It monitors your Gmail inbox in real time, classifies every inbound customer email with AI, retrieves contextually relevant data from your Knowledge Base and transaction records, and generates a personalised, ready-to-send draft reply — deposited directly into Gmail Drafts for one-click human review and send.

No more opening each email, reading the context, checking the transaction status, and writing a reply from scratch. The workflow does all of that automatically. Your support team only reviews and sends.

The draft quality comes from three sources working together: a Knowledge Base built from your own historical support emails, real correction examples showing how your team has responded to similar situations in the past, and live transaction data pulled for the specific customer who wrote in. The result is a draft that reflects your team's actual tone, references accurate order details, and follows the correct resolution path based on the customer's transaction status.

This is the main production workflow. It depends on two companion workflows that must be set up first:

**Workflow 1 — KB Builder: Historical Emails** (free) seeds the Knowledge Base from your existing Gmail inbox. Run it once before activating this workflow.

**Workflow 2 — Self-Learning Loop** (free) continuously improves draft quality by recording the difference between AI-generated drafts and what your team actually sent. Over time, the AI learns your team's preferred phrasing and corrections.

---

## ⚙️ What This Workflow Does (Step-by-Step)

**📬 Gmail Trigger** — Polls your inbox for new unread emails matching a configured label. Fires once per new message automatically.

**🔍 Parse & Validate** — Extracts all email fields and applies a multi-signal filter. Drops marketing emails, no-reply senders, bounce notifications, spam, automated financial alerts (Razorpay, NSDL, Digio, etc.), and OTP/transaction alert subjects. Only genuine customer emails proceed.

**🤖 AI Agent — Classify** — Sends the email to GPT-4o-mini, which returns a structured JSON classification: category, subcategory, urgency, sentiment, language, summary, key entities, and a confidence score.

**🔗 Merge + Parse Classification** — Merges the AI output back with the original email fields and parses the JSON into clean structured data for all downstream nodes.

**🔢 Generate & Extract Embedding** — Calls the OpenAI Embeddings API to generate a 1536-dimension vector of the email content. Used to run semantic similarity searches across all three KB tables simultaneously.

**🗄️ Four Parallel DB Fetches** — Triggered simultaneously from the embedding node:
- **DB - Fetch KB Data** — Top 5 semantically similar Q&A pairs from kb_data
- **DB - Fetch Similar Corrections** — Top 3 real customer-reply pairs from corrections
- **DB - Fetch Similar Scenarios** — Top 3 matching handling patterns from scenario_patterns
- **DB - Fetch Customer Transactions** — Last 5 transactions for this customer's email address from the transactions table

**⚡ Resolve Scenario** — The intelligence core of the workflow. Analyses the customer's transactions and email content together to determine the exact scenario and pre-compose the transaction status message. Handles 12+ distinct scenarios including: NSDL transferred, payment failed, payment pending, accepted but shares pending, refunded, rejected, multiple unresolved transactions, missing shares queries, order ID mentioned but not found, and no transaction on record. Each scenario has a precise templated response that is passed to the AI for tone-matching — not free generation.

**📝 Assemble Draft Prompt** — Builds the full system prompt and user prompt for the draft generation step. Injects KB context, correction examples, scenario patterns, and the transaction-specific message as hard constraints the AI must follow.

**✍️ Generate Draft (GPT-4o)** — GPT-4o drafts the reply at temperature 0.3. It follows the injected transaction message precisely, matches the customer's detected language, applies tone and formatting rules, and signs off as your team. Constrained generation — not open-ended.

**📄 Extract Draft Text** — Parses the AI response, fixes formatting (paragraph spacing, sign-off placement, line breaks), and converts to HTML for Gmail compatibility.

**📥 Create Gmail Draft** — Saves the formatted reply as a Gmail Draft, threaded directly under the original customer email. Your team opens Gmail, sees the draft pre-populated, reviews, edits if needed, and sends.

**💾 DB - Save AI Draft** — Writes the full draft to the ai_drafts table: thread ID, message ID, sender, subject, original body, classification, and draft text. Used by the Self-Learning Loop to capture what the AI produced.

**✅ DB - Log Success** — Writes a success record to email_logs with category, urgency, confidence score, and draft ID. Creates a full audit trail of every email processed.

**🚫 DB - Log Skipped** — For emails that fail the Parse & Validate filter, a skipped record is written to email_logs with the skip reason. Nothing is lost — every email is accounted for.

---

## 🧩 Prerequisites

- **Gmail account** — OAuth2 credential. Must be the support inbox. Create a Gmail label for incoming support emails and configure it in the Get Many Messages node.
- **OpenAI API key** — Used for GPT-4o-mini classification, text-embedding-3-small for vector search, and GPT-4o for draft generation.
- **PostgreSQL database** — With pgvector extension enabled. Requires five tables as described in the schema below.
- **KB Builder workflow** — Run at least once before activating this workflow to seed the Knowledge Base. Without KB data, the AI will still generate drafts but without contextual grounding.
- **n8n instance** — Self-hosted or cloud. Requires PostgreSQL, Gmail, OpenAI, and HTTP Request nodes.

---

## 🗄️ Database Schema

### Table: `transactions`
| Field | Type | Notes |
|---|---|---|
| customer_email | TEXT | Used to match inbound email sender |
| buyer_name | TEXT | Customer display name |
| order_id | TEXT | Unique order identifier |
| transaction_type | TEXT | Buy / Sell |
| user_amount | NUMERIC | Amount paid |
| units | NUMERIC | Shares purchased |
| unit_price | NUMERIC | Per-share price |
| isin | TEXT | Share ISIN code |
| demat_number | TEXT | Customer demat account |
| payment_method | TEXT | NEFT / UPI / etc. |
| payment_status | TEXT | success / failed / created |
| admin_action | TEXT | pending / accepted / refunded / rejected |
| nsdl_checked | BOOLEAN | Whether shares have been transferred |
| nsdl_timestamp | TIMESTAMP | Date of NSDL transfer |
| transaction_date | TIMESTAMP | Transaction date |

### Table: `ai_drafts`
| Field | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | |
| gmail_thread_id | TEXT | Gmail thread ID |
| gmail_message_id | TEXT | Gmail message ID |
| sender_email | TEXT | Customer email address |
| subject | TEXT | Email subject |
| original_email_body | TEXT | Customer's original message |
| classification | TEXT | AI-assigned category |
| ai_draft_text | TEXT | The generated draft |
| draft_saved | BOOLEAN | Whether draft was saved to Gmail |
| created_at | TIMESTAMP | |

### Table: `email_logs`
| Field | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | |
| gmail_thread_id | TEXT | |
| gmail_message_id | TEXT | |
| sender_email | TEXT | |
| subject | TEXT | |
| classification | TEXT | |
| status | TEXT | draft_saved / skipped |
| draft_id | INTEGER | Reference to ai_drafts |
| notes | TEXT | Category, urgency, confidence |
| processed_at | TIMESTAMP | |

### Tables: `kb_data`, `scenario_patterns`, `corrections`
Populated by the KB Builder workflow. See that workflow's README for full schema.

---

## 💰 Cost Estimate

| Item | Estimated Cost |
|---|---|
| GPT-4o-mini classification | ~$0.002–0.005 per email |
| text-embedding-3-small | ~$0.0001 per email |
| GPT-4o draft generation | ~$0.01–0.03 per email |
| **Total per email** | **~$0.012–0.035** |
| 100 emails/day | ~$1.20–3.50/day |
| PostgreSQL + pgvector (self-hosted) | ~$5–15/mo |
| n8n self-hosted (AWS t3.small) | ~$10–15/mo |

---

## ⚙️ Setup Instructions

1. **Run KB Builder first** — Import at least 50–100 historical emails before activating this workflow. The richer the KB, the better the draft quality from day one.

2. **Gmail** — Connect Gmail OAuth2 in n8n. Create a dedicated label for support emails (e.g. "Support Inbox"). Set that label ID in the Get Many Messages node filters.

3. **OpenAI** — Add your OpenAI API key as an n8n credential. Used by three nodes: AI Agent - Classify, Generate Email Embedding, and Generate Draft.

4. **PostgreSQL** — Connect your database. Enable pgvector (`CREATE EXTENSION IF NOT EXISTS vector`). Ensure all five tables exist.

5. **Customise Parse & Validate** — Update the `automatedSenders` and `automatedSubjects` arrays to match the automated senders specific to your business. Update `internalDomains` with your support team's email domain.

6. **Customise the AI prompt** — Open Assemble Draft Prompt and update the company name, tone rules, sign-off, and language instructions to match your brand and team style.

7. **Customise Resolve Scenario** — Update the scenario logic and templated responses in the Resolve Scenario node to match your actual transaction statuses, products, and resolution paths.

8. **Activate the workflow** — Click Activate. The Gmail trigger will begin polling for new unread emails automatically.

---

## 💡 Key Benefits

✔ **Fully automated draft generation** — every inbound email gets a contextual, accurate reply draft without any manual effort  
✔ **Transaction-aware** — pulls live order data and applies the correct resolution template based on payment status, admin action, and NSDL transfer status  
✔ **KB-grounded** — drafts are informed by your own historical support knowledge, not generic AI outputs  
✔ **Self-improving** — the Self-Learning Loop workflow captures human edits and feeds them back into the corrections table, continuously improving future drafts  
✔ **Human stays in control** — every draft lands in Gmail Drafts for review. Nothing is sent automatically  
✔ **Full audit trail** — every email processed, skipped, or drafted is logged to the database with classification and confidence data  
✔ **Language-aware** — detects customer language and instructs the AI to match it in the reply  
✔ **Modular** — swap GPT-4o for Claude or any other model with minimal changes to the Generate Draft node  

---

## 👥 Perfect For

- Customer support teams handling high volumes of transaction-related emails
- Fintech and investment platforms where reply accuracy and transaction context are critical
- Small support teams who want AI assistance without losing human oversight
- Any business running Gmail-based support that wants to cut reply time without cutting quality

---

## 🔗 Part of a Three-Workflow System

**Workflow 1 — KB Builder: Historical Emails** *(free, run once)* — Seeds the Knowledge Base from your existing inbox  
**Workflow 2 — Self-Learning Loop** *(free, always-on)* — Captures human edits to improve future drafts  
**Workflow 3 — Email Automation: AI Draft Generator** *(this workflow)* — The live production workflow

## 🔗 Nodes Used

HTTP Request, Postgres, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
