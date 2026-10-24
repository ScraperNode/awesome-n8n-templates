# 🎣 Qualify and route B2B leads with GPT-4o-mini, Hunter.io, Slack, Gmail and Sheets

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# AI-Powered B2B Lead Qualifier with BANT Scoring, Enrichment & Auto-Routing

Automatically qualify, score, and route inbound B2B leads using GPT-4o-mini — no manual review needed.

---

## What This Workflow Does

This workflow turns any inbound lead into a qualified, scored, and routed contact in seconds. It captures leads via webhook (or any trigger like HubSpot, Typeform, or Pipedrive), normalises the data regardless of field naming conventions, enriches it with company intelligence, scores it using the BANT framework via GPT-4o-mini, and routes it into three automated pipelines — all without human intervention.

---

## How It Works

**Stage 1 — Lead Entry**
Leads enter through a webhook POST endpoint. Swap for any trigger: HubSpot, Pipedrive, Typeform, Google Sheets, or a native CRM node.

**Stage 2 — Normalise + AI Field Extraction**
Incoming data is mapped to a standard schema regardless of field naming. A secondary GPT-4o-mini extraction step intelligently detects and maps values from any payload structure — even if the source uses completely non-standard field names.

**Stage 3 — Enrich**
The email domain is analysed to detect personal vs. work email, infer seniority from job title, and derive company information. An optional Hunter.io step adds industry, employee count, and country data.

**Stage 4 — AI BANT Scoring**
The enriched lead is sent to a structured GPT-4o-mini prompt that returns a score out of 100, a tier label, individual BANT component scores (Budget / Authority / Need / Timeline), a one-sentence reasoning summary, and a recommended next action — all as structured JSON.

**Stage 5 — Route by Tier**
- 🔥 **Hot (score ≥ 70)** — Instant Slack alert to `#sales-alerts` + personalised outreach email via Gmail
- 🌤️ **Warm (score 40–69)** — Automated soft nurture email via Gmail
- ❄️ **Cold (score &lt; 40)** — CRM tagging with a 90-day follow-up flag

**Stage 6 — Log to Google Sheets**
All three tiers are logged to a single Google Spreadsheet with dynamic tab routing (Hot Leads / Warm Leads / Cold Leads).

---

## Key Features

- Works with any lead source — web forms, CRMs, Typeform, HubSpot, Pipedrive, or raw HTTP POST
- AI field extraction handles messy or non-standard payloads automatically
- BANT scoring is fully customisable via the system prompt (adjust weights, thresholds, and tier boundaries)
- Hunter.io enrichment is optional — the workflow degrades gracefully without it
- All three tiers log to a single Google Sheet with dynamic tab routing
- Easily swap Gmail for any email node; swap Google Sheets for Airtable, HubSpot, or any CRM

---

## Setup Requirements

| Requirement | Notes |
|---|---|
| OpenRouter API key | Used for AI field extraction (Stage 2) and BANT scoring (Stage 4) |
| Gmail OAuth2 | Sends outreach and nurture emails |
| Slack OAuth2 | Posts hot lead alerts to `#sales-alerts` |
| Google Sheets OAuth2 | Logs all leads; replace `YOUR_SPREADSHEET_ID_HERE` |
| Hunter.io API key | Optional — free plan includes 25 requests/month |
| Booking URL | Your Cal.com or Calendly link for email CTAs |

---

## Who This Is For

Solo founders, sales teams, and RevOps professionals who receive inbound leads and want instant prioritisation, enrichment, and follow-up — without manual triage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
