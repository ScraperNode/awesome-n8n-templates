# ⚒️ Process multiple requests in FIFO using OpenAI Batch API and Supabase/Postgres

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

# How it works
You provide a list of prompts and a system instruction, the workflow batches them into a single OpenAI Batch API request.
The batch job is tracked in a Supabase openai_batches table.
A cron job polls OpenAI every 5 minutes, and once the batch completes, the results are decoded and stored back in Supabase.
# Set up steps
Create the openai_batches table in Supabase. Schema is in the yellow sticky note.
Add your OpenAI and Supabase/Postgres credentials to the workflow.
Replace the mock data with your actual prompts and you're ready to go!

## 🔗 Nodes Used

HTTP Request, Postgres, Supabase, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
