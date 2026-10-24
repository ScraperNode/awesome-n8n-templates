# 💬 Send cold outreach from lead files and classify Gmail replies with OpenRouter

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow imports leads from an uploaded file into an n8n Data Table, sends a first-touch cold email through Gmail on a schedule or manually, then watches Gmail for replies and uses an OpenRouter LLM to classify interest and flag leads for human handoff.

## How it works
1. Receives an uploaded lead file via an n8n Form trigger and extracts rows from the file.
2. Upserts each lead (name and email) into an n8n Data Table and sets the lead status to `new_leads`.
3. Runs on a schedule (or on-demand) to load the outreach subject and body, fetch leads with status `new_leads`, and send each email via Gmail with the recipient’s name merged into the message.
4. Records each sent email in a separate n8n Data Table with Gmail message/thread IDs and updates the lead’s status to `first_offer` to prevent re-sending.
5. Triggers when a new Gmail message arrives, matches the sender to a lead by email address, and stores the reply in the email inbox Data Table.
6. Fetches the full thread history for that lead, keeps only the prospect’s received messages, and sends them to an OpenRouter-powered LLM to classify whether the prospect is already interested.
7. If the classification indicates interest, updates the lead record to `handoff` and sets a handoff destination value.

## Setup
1. Connect a Gmail OAuth2 credential for both sending emails and triggering on incoming replies.
2. Add an OpenRouter API credential and select the model you want to use for reply classification.
3. Create (or select) the two n8n Data Tables used by the workflow: one for leads and one for sent/received inbox messages, ensuring they include the referenced columns (email, name, status, thread IDs, and history IDs).
4. Update the outreach copy in the offer configuration (subject and body) and ensure your lead file includes `name` and `email` fields that match the extraction output.
5. If using the form upload in production, copy the form URL and share it with whoever imports lead files.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Schedule Trigger, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
