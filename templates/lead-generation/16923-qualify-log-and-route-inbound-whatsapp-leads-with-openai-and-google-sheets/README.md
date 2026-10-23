# 🎣 Qualify, log, and route inbound WhatsApp leads with OpenAI and Google Sheets

> ⚡ **124 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound WhatsApp lead messages via a webhook, uses OpenAI to classify each sender's intent (buyer, job seeker, or spam), logs the enriched lead to Google Sheets — and then acts on the classification: buyers get an instant Hebrew reply while a hot-lead alert lands on your own WhatsApp, spam is silently logged, and everyone else receives a polite neutral answer. Low-confidence classifications are flagged for human review.

## How it works
- A webhook receives the WhatsApp message payload (WAHA, Cloud API or any provider — field mapping is one Set node).
- OpenAI classifies the message into buyer / job_seeker / spam with an intent summary, confidence score and one-line reasoning, enforced by a structured output schema.
- The lead is appended or updated in a Google Sheets "Leads" tab, matched on the phone number; classifications with confidence below 0.6 are flagged NeedsReview.
- A routing layer then branches by segment: buyer → instant Hebrew auto-reply + hot-lead alert to the owner's WhatsApp; spam → no reply; anything else → polite neutral reply.
- Every branch returns a JSON response with the detected segment, so the calling platform can chain further logic.

## Setup
1. Point your WhatsApp provider's inbound webhook at the Webhook node (POST) and adjust the three field expressions in *Extract Message* if your payload differs.
2. Add an OpenAI credential on the *OpenAI Chat Model* node.
3. Add a Google Sheets OAuth credential and pick your spreadsheet — columns: Phone, Name, Message, Segment, Intent, Confidence, Reasoning, ReceivedAt, NeedsReview.
4. In the three WAHA send nodes: replace YOUR-WAHA-SERVER with your WAHA base URL, attach a Header Auth credential (X-Api-Key), and put your own number in *Notify Owner* (replace OWNER-PHONE).
5. Edit the two Hebrew reply texts to match your business tone, then activate.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
