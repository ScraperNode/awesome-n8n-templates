# 💬 Draft and review grounded support email replies with Gmail, OpenAI and Claude

> ⚡ **52 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow ingests a Google Drive knowledge base into Postgres/pgvector, then drafts and quality-checks support email replies using OpenRouter LLMs and OpenAI embeddings, automatically replying in Gmail only when citations and critic scores pass, and otherwise routing tickets to a human reviewer with weekly metrics emailed.

## How it works
1. Runs nightly (or manually) to list files in a Google Drive folder, compare versions to a Postgres ingest ledger, and select only new or changed documents.
2. Downloads each changed file, deletes any existing chunks for that document in Postgres/pgvector, splits the text, embeds it with OpenAI embeddings, and stores the vectors with doc metadata.
3. Triggers on new unread Gmail messages with a support label or receives helpdesk tickets via a header-authenticated webhook, then normalizes the payload into a single ticket format.
4. Masks PII in the ticket body, classifies the request with an OpenRouter chat model, logs the ticket to Postgres, and applies policy routing to drop noise, restrict sensitive categories, or allow auto-answering.
5. For auto-answerable tickets, an OpenRouter drafting agent searches the pgvector knowledge base and produces a cited reply plus confidence and unsupported-claims metadata.
6. A second OpenRouter model critiques the draft and the workflow gates delivery based on critic score/verdict, drafter confidence, presence of citations, and zero unsupported claims.
7. If the gate passes (or a human approves by email), the workflow unmasks PII and replies via Gmail (in-thread or as a new email) and logs the outcome to Postgres; otherwise it escalates the ticket to a human by email with the draft and objections attached.
8. Every Monday morning, it queries Postgres for last-week outcomes and KB gaps and emails a metrics digest via Gmail.

## Setup
1. Create the required Postgres tables (including pgvector) by running the provided schema SQL and ensure the vector table matches the embedding dimension (1536 for the configured OpenAI model).
2. Add credentials for Google Drive OAuth2, Gmail OAuth2, Postgres, OpenAI (embeddings), and OpenRouter (chat models).
3. Replace KB_FOLDER_ID with your Google Drive folder ID and set SUPPORT_LEAD_EMAIL in the approval, escalation, and metrics email steps.
4. Configure your helpdesk to POST tickets to the workflow’s /support-ticket webhook URL with the required header authentication.
5. Ensure Gmail has a label (e.g. “support”) applied to incoming tickets and adjust the Gmail trigger query if your labeling differs.
6. Run the knowledge base ingest once before enabling automated replies so the vector store has content to cite.

## 🔗 Nodes Used

Postgres, Webhook, Google Drive, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
