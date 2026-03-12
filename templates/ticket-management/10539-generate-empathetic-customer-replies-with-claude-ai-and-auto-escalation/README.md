# 🎫 Generate empathetic customer replies with Claude AI and auto-escalation

> ⚡ **39 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 🧠 Overview
Generate empathetic, professional reply drafts for customer or user messages.  
The workflow detects **sentiment**, **tone**, and **risk level**, drafts a concise response, sanitizes PII/links/emojis, and **auto-escalates** risky or low-confidence cases to human review.

---

## ⚙️ How It Works
1. **Input** — Manual Test or Webhook Trigger  
2. **AI Agent (Empathy)** — returns `{ sentiment, tone, reply, confidence, needs_handover }`  
3. **Post-Process & Sanitize** — removes URLs/hashtags, masks PII, caps length  
4. **Risk & Handover Rules** — checks confidence threshold, risk words, and negativity  
5. **Routing** — auto-send safe replies or flag to **Needs Review**

---

## 🧩 Setup Instructions (3–5 min)
- Open **Set Config1** and adjust:
  - `MAX_LEN` (default 600)
  - `ADD_FOLLOWUP_QUESTION` (true/false)
  - `FORMALITY` (`auto | casual | polite`)
  - `EMOJI_ALLOWED` (true/false), `BLOCK_LINKS` (true/false)
  - `RISK_WORDS` (e.g., `refund, lawsuit, self-harm`)
- Connect **Anthropic credential** to **Anthropic Chat Model**
- *(Optional)* Replace **Manual Trigger** with **Webhook Trigger** for real-time use

&gt; Tip: If you need to show literal angle brackets in messages, use backticks like ``&lt;example&gt;`` (no HTML entities needed).

---

## 📚 Use Cases
### 1) SaaS Billing Complaints
- **Input:** “I was billed after canceling. This is unacceptable.”  
- **Output:** Calm, apologetic reply with refund steps; escalates if `refund` is in `RISK_WORDS` or `confidence &lt; 0.45`.

### 2) Product Bug Reports
- **Input:** “Upload fails on large files since yesterday.”  
- **Output:** Acknowledges impact, requests logs, offers workaround; routes to auto-send if low risk and high confidence.

### 3) Delivery/Logistics Delays
- **Input:** “My order is late again. Should I file a complaint?”  
- **Output:** Empathetic apology, ETA guidance, partial credit policy note; escalates if language indicates legal action.

### 4) Community Moderation / Abuse
- **Input:** “Support is useless—you’re all scammers.”  
- **Output:** De-escalating, policy-aligned response; auto-flags due to negative sentiment + risk keyword match.

### 5) Safety / Self-harm Mentions
- **Input:** “I feel like hurting myself if this isn’t fixed.”  
- **Output:** **Immediate escalation**, inserts approved resources; never auto-sends.

---

## 🚨 Auto-Escalation Rules (defaults)
- **Negative** sentiment
- Message matches any `RISK_WORDS`
- `confidence &lt; 0.45`
- Mentions of **legal**, **harassment**, or **self-harm** context

---

## 🧪 Notes & Best Practices
- 🔐 No hardcoded API keys — use **n8n Credentials**
- 🧭 Tune thresholds and `RISK_WORDS` to your org policy
- 🧩 Works on self-hosted or cloud n8n
- ✅ Treat outputs as **drafts**; ship after human/policy review

---

## 🔗 Resources
- **GitHub (template JSON):** https://github.com/yskmtb0714/n8n-workflows/blob/main/empathy-reply-assistant.json

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
