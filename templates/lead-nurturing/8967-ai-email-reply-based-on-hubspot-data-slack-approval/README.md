# 💬 AI email reply based on HubSpot data + Slack approval

> ⚡ **2,376 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template drafts customer-ready email replies using Google Gemini, enriched with HubSpot context (contact, deals, companies, tickets). Each draft is routed to Slack for one-click approval before it’s sent from Gmail—so you move fast without losing control.

Ideal for support and sales teams that want speedy, personalized responses while keeping humans in the loop.

---

## How it works

* **Gmail Trigger** watches for new inbound emails.
* **Sender filter** excludes internal domains (e.g., `n8n.io`) to avoid auto-replying to teammates.
* **HubSpot contact lookup** finds the sender and fetches associated **deals/companies/tickets** via association + batch read.
* **CRM context is normalized** into clean, LLM-friendly fields (no IDs or sensitive noise).
* **Gemini (Google AI Studio)** generates a concise, friendly reply using:

  * Sender name, subject, and message snippet
  * Safe, relevant HubSpot context (e.g., top 1–2 deals or an open ticket)
  * Style constraints (≤ \~150 words, single CTA, optional clarifying question)
* **Slack approval** posts the draft to a channel; if **approved**, n8n **replies via Gmail** in the original thread.

---

## How to use

1. **Gmail:** Connect the same account for the trigger and reply nodes.
2. **HubSpot:** Connect OAuth on the search + HTTP request nodes.
3. **Gemini:** Add your **Google AI Studio** API key to the **Google Gemini Chat Model** node.
4. **Slack:** Connect and select the channel for draft approvals.
5. (Optional) **Filter:** Adjust the Allowed Sender filter before going live.
6. (Optional) **Prompt:** Edit “Draft Reply (AI Agent)” tone/length or how much CRM detail to include.
7. Activate the workflow. New emails will produce Slack-approved replies automatically.

---

## Requirements

* **Gmail** (trigger + send)
* **HubSpot** (OAuth2) for contact + associations
* **Slack** for approval step
* **Google Gemini** (Google AI Studio API key)

---

## Notes & customization

* **Safety rails:** The prompt avoids exposing IDs/raw JSON and caps CRM details to what’s useful.
* **Auto-send mode:** Skip Slack if you want fully automated replies for specific senders/labels.
* **Richer context:** Extend the batch read to pull more properties (e.g., next step, renewal date).
* **Triage:** Branch on subject/labels to route billing vs. technical requests to different prompts.
* **QA queue:** If the model asks a clarifying question, keep it to **one**—the node enforces that.

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, Gmail, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
