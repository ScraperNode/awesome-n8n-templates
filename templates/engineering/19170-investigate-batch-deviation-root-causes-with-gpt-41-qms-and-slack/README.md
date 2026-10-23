# ⚒️ Investigate batch deviation root causes with GPT-4.1, QMS, and Slack

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives batch deviation submissions via webhook, uses OpenAI with tool-calling and a vector store RAG search to investigate likely root causes from MES/eBR/EMS data, logs results to Postgres, and routes higher-confidence findings to Slack for QA approval before updating the QMS and optionally drafting a CAPA.

## How it works
1. Receives a POST webhook with deviation details such as deviation ID, batch ID, product, description, and detection metadata.
2. Normalizes the input fields, derives a session ID for follow-up continuity, and starts an OpenAI-powered investigator with conversation memory.
3. The AI agent pulls supporting context as needed from MES/historian equipment events, eBR operator action logs, EMS environmental readings, and a vector store RAG search over historical closed CAPAs.
4. Parses the agent’s JSON output into a structured investigation result including ranked hypotheses, evidence, confidence score, and recommended immediate actions.
5. Writes the investigation record to a Postgres table as a GxP-oriented audit trail.
6. If the confidence is low, posts a manual-investigation notice to Slack and returns an “investigation logged” response to the webhook caller.
7. If the confidence meets the threshold, posts the hypotheses to Slack for QA review, waits for an approve/reject decision, and notifies Slack if QA rejects.
8. When QA approves, updates the deviation in the QMS with the approved root cause and actions, optionally creates a draft CAPA via the QMS API, and posts a completion summary to Slack.

## Setup
1. Configure the inbound webhook in your deviation intake source (QMS or form) to send the required fields to the workflow’s webhook URL.
2. Add OpenAI credentials for the GPT-4.1 chat model and configure a vector store connection for the RAG search over closed CAPA records.
3. Provide API access (base URLs and auth) for the MES/historian, eBR system, and EMS endpoints used by the agent’s HTTP tools.
4. Add a Postgres credential and create a `public.deviation_investigations` table matching the columns inserted by the workflow.
5. Add Slack credentials and set the target channel (for QA review, low-confidence notices, and completion/rejection notifications).
6. Update the QMS API endpoints and credentials for the deviation PATCH write-back and optional CAPA creation, and configure the wait/resume webhook in your QA approval UI or process.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
