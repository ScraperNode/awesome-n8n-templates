# 🎫 Triage tickets by ranking next actions with VectorPrime via webhook

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## What this template does (in 1 sentence)

Ranks “best next actions” for an incoming ticket/incident using the VectorPrime Decision Kernel (deterministic + auditable), then returns a clean JSON result you can route to Slack, a backlog tool, or email.

Pricing note: Template is free. VectorPrime API requires a user-provided API key (free usage up to a limit; paid plans beyond that).

---

## When you should use this

Use this workflow when you already have a ticket/incident AND a short list of candidate actions, and you want a consistent, explainable “what should we do first?” ranking.

Examples:
- IT Ops incidents (restart vs rollback vs escalate)
- Support tickets (refund vs troubleshoot vs escalate)
- On-call triage (wake someone up vs wait)

---

## What you get (outputs)

A structured JSON response including:
- ok (true/false)
- the original request payload
- VectorPrime ranking + probabilities (when ok=true)
- an audit timestamp

---

## How it works

1) Webhook receives JSON payload
2) Normalize step validates and builds `vp_payload`
3) VectorPrime Rank (HTTP Request) calls VectorPrime `/v1/kernel/rank`
4) Parse step validates the response
5) If OK → builds optional payloads + writes audit log → responds success
6) If not OK → responds with a safe error JSON

---

## Setup (IMPORTANT)

### Step 1 — Get your webhook URL (required)
After importing this template, your webhook URL will be different for each workspace:

- Open **Webhook1**
- Copy **Production URL** (real usage)
- (Test URL is only for editor debugging)

### Step 2 — Add your VectorPrime API key (required)

In n8n → Credentials → create/select **Header Auth**:

- Header Name: `Authorization`
- Header Value: `Bearer YOUR_VECTORPRIME_API_KEY`

Then open **VectorPrime Rank (HTTP)** and select that credential.

✅ Secrets are NOT stored in this template. Each user supplies their own key via Credentials.

---

## Input payload this workflow expects

This workflow expects:

- `decision_id` (string)
- `prompt` (string)
- `options` (array of objects)

`options` must be a REAL JSON array, like:

[
  { "id": "a", "label": "Option A" },
  { "id": "b", "label": "Option B" }
]

If you send fewer than 2 options, the workflow responds with:
- ok:false
- error:not_enough_options

---

## Example JSON payload (copy/paste)

```json
{
  "decision_id": "REQ-1007",
  "prompt": "Customer cannot login",
  "options": [
    { "id": "restart", "label": "Restart auth service" },
    { "id": "rollback", "label": "Rollback last deploy" }
  ]
}

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
