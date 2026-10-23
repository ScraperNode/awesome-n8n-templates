# 📊 Monitor Austrian public tenders daily with easybits PDF extraction and Slack alerts

> ⚡ **168 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

Every morning, this n8n workflow automatically monitors all new Austrian public 
procurement notices from official EU sources. easybits.tech extracts structured 
data from each tender PDF: title, contracting authority, federal state, contract 
value, submission deadline, CPV code and contact email — same JSON schema every 
time, regardless of document layout or language. Relevant opportunities arrive 
as formatted Slack alerts within minutes of publication.

Austria's public sector awards over €50 billion in contracts annually across 
construction, IT, consulting and healthcare. Finding relevant tenders manually 
means checking multiple portals and reading through PDFs every day. This 
workflow eliminates that entirely.

## What makes this different

Extraction runs on the actual tender PDF via easybits.tech — not just portal 
metadata. Every Slack alert includes title, contracting authority, federal 
state, contract value, deadline, CPV code, contact email and a direct PDF link.

The contract value filter is fully adjustable. Change the €100k minimum in the 
filter node and all future alerts update automatically.

## Extend this workflow

This workflow is the data foundation for a full AI tender intelligence system:

- **Vector database** (Qdrant, Pinecone, Supabase) — store all extracted 
  tenders as searchable vectors for semantic retrieval
- **Q&A bot via Slack slash command** — ask "Which IT tenders are open in Vienna 
  over €500k?" and get AI-generated answers with citations from the original PDFs
- **Any messaging platform** — replace Slack with Telegram, WhatsApp, Microsoft 
  Teams, Discord or Email in one node swap
- **Automatic application drafting** — use extracted tender fields to pre-fill 
  bid templates and submission documents automatically

For advisory on extending this workflow contact [easybits.tech](https://easybits.tech)

## Set up steps

- Create a free [easybits.tech](https://easybits.tech) account and add your 
  API key as a credential in n8n
- Replace the Slack Webhook URL in the **Send Slack Alert** node with your own
- Adjust the €100k contract value threshold in the **Filter: Min. €100k Value** 
  node to match your needs
- Activate the workflow — it runs automatically every morning at 7am

## Prerequisites

- easybits.tech account (free tier available) — for PDF data extraction
- Slack workspace with incoming webhooks enabled
- n8n instance running as a service

**Works for any EU country** — contact easybits.tech for setup support.

**Setup time**: approximately 15 minutes

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
