# 📊 Monitor BOAMP IT tenders and score them with GPT-4o Mini to Supabase

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

• Fetches IT-related tenders from the French BOAMP API (filter: informatique)
• Scores each tender with OpenAI (pertinence, budget, stack, GO/NO-GO)
• Routes to Supabase as hot (≥75) or archived
• Run the SQL from the "Supabase Schema" sticky note in the workflow before use

## Set up steps

• Create a Supabase project and run the SQL from the "Supabase Schema" sticky note - ~5 min
• Add OpenAI and Supabase credentials in n8n
• Activate the workflow - runs every 4h, or trigger manually/webhook

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
