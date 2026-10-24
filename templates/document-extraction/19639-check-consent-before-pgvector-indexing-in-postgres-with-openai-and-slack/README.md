# 🔬 Check consent before pgvector indexing in Postgres with OpenAI and Slack

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs nightly to read unindexed knowledge base records from Postgres, checks each record against a Postgres consent register, and only embeds eligible text with OpenAI into a pgvector index while logging decisions to a manifest and notifying a Slack channel when anything is refused or held.

## How it works
1. Runs every night on a schedule.
2. Reads unindexed documents from Postgres and separately reads the consent register from Postgres.
3. Matches each document to its subject’s consent entry and evaluates eligibility for the required purpose, retention window, withdrawal status, profiling objections, and special category flags.
4. Splits eligible documents into chunks, generates embeddings with OpenAI, and inserts vectors plus metadata into a Postgres pgvector table.
5. Marks embedded documents as indexed in Postgres and writes an inclusion manifest entry recording the decision and lawful ground.
6. Writes refused and held decisions to the same manifest table with the specific refusal/hold ground.
7. Aggregates outcomes into a single run report and posts it to Slack if any records are refused or held.

## Setup
1. Add Postgres credentials, ensure the pgvector extension is enabled, and create the required tables/columns (kb_documents with indexed_at, consent_register, the pgvector index table, and index_manifest).
2. Add an OpenAI API credential for the embeddings model and confirm the model name matches your account access.
3. Add Slack OAuth2 credentials and select the channel where the data protection owner should receive refusal/hold reports.
4. Update the SQL queries, required_purpose value, and target index table name in the workflow’s configuration to match your schema and consent purpose strings.

## Requirements
- PostgreSQL with the pgvector extension enabled. Neon, Supabase, RDS or self-hosted all work.
- An embeddings credential. The shipped version uses OpenAI text-embedding-3-small, and any embeddings node can replace it.
- A Slack workspace, and a channel for the refusal report. The template ships with the channel empty, so pick yours before the first run.
- A consent register that already exists as data. This workflow reads consent, it does not collect it.
- Four tables: your documents table with an indexed_at column, plus consent_register, index_manifest and the pgvector index table.

## Customization
- The grounds are data, not code. required_purpose lives in the Consent Rules node, and the register column names the decision reads can be changed in one place.
- Add a refusal ground by adding one block to the decision node. Each ground is independent, so a record can fail one while passing the rest, and the manifest still names which one stopped it.
- Swap the vector store. Pinecone, Qdrant or Supabase drop in where the pgvector node sits, and the gate in front of it does not change.
- Swap Slack for email or Teams. The report node reads one field, report_text.
- Change the batch size on Embed In Batches if your embedding provider rate-limits you.
- Keep refused records in the queue, as shipped, so they are re-checked every night and stay on the report until someone resolves them. Only embedded records are marked as indexed.

## Additional info
In plain language, with a worked example

The problem. Teams put documents into a vector index so an AI assistant can search them: support notes, emails, CRM records. The usual pipeline reads everything, turns it into vectors and stores it. It never asks whether it was allowed to use any particular record. Most of the time nobody notices, until somebody does.

What this adds. A gate in front of the index. Before anything is turned into vectors, each record is looked up in a consent register, which is the list your privacy team already keeps of who agreed to what, and for which purpose.

One night's run, with nine documents waiting:

1. Refund policy note, customer S-OK. Consented to AI training, still in date. EMBEDDED.
2. Published price list. No person involved at all. EMBEDDED, on the ground not_personal.
3. Newsletter signup note, S-PURPOSE. Consented to support and marketing, not to AI training. REFUSED, purpose limitation.
4. Accessibility request, S-SPECIAL. Special category data. REFUSED, because it needs its own Article 9 condition rather than ordinary consent.
5. Old support thread, S-EXPIRED. Consent expired. REFUSED, retention ran out.
6. Churn risk comment, S-OBJECTED. Objected to profiling. REFUSED, even though consent exists.
7. Unknown contact note, S-NOROW. Not in the register at all. REFUSED, no consent record.
8. Historic chat log, S-WITHDRAWN. Consent withdrawn. REFUSED.
9. Partial record, S-INCOMPLETE. The register entry is missing fields. HELD for a person to decide.

Two documents go into the index. Seven do not. The data protection owner gets one Slack message:

  2 of 9 record(s) were embedded. 6 refused, 1 held for a human.
  Why:
  - consent withdrawn: 1
  - incomplete record: 1
  - no consent record: 1
  - objection to profiling: 1
  - purpose limitation: 1
  - retention expired: 1
  - special category: 1

Why the grouping matters. A bare count of 6 refused tells nobody anything. Purpose limitation: 1 tells them their consent wording does not cover AI training, and that is a fix they can actually make.

Why held is a separate answer from refused. If the register entry is incomplete, the honest answer is that nobody knows, and both guesses are bad. Embed it and you may have used data you should not have. Refuse it and you quietly lose a record that was probably fine. So it is parked for a person instead of guessed at.

What you can prove afterwards. All nine records get a row in the inclusion manifest saying what was decided and why. Six months later, when someone asks what was in the index on a given night and on what basis, the answer is a query rather than a reconstruction.

Scope, stated plainly. This stops new records being indexed without a lawful basis. It does not delete vectors that are already in the index, so if consent is withdrawn after a record was embedded, removing it is a separate erasure job. Refused records deliberately stay in the queue and are re-checked every night, because consent can be granted tomorrow. It is a workflow, not legal advice: the point is that a refusal is recorded with its reason instead of happening silently or not at all.

## 🔗 Nodes Used

Postgres, Slack, Schedule Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
