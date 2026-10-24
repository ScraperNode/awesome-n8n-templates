# 🔬 Log tamper-evident append-only audit trails with Supabase Postgres

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow logs append-only audit events to a Supabase Postgres table with database-enforced sequencing and hash chaining, then verifies the chain integrity on demand or on a schedule, with an optional test form that confirms UPDATE and DELETE operations are blocked.

## How it works
1. Runs either manually to generate demo events, on a schedule to verify integrity, or when called from another workflow via Execute Workflow to receive an audit event.
2. For the demo path, creates five fictional events, hashes each original payload with SHA-256, and prepares the audit fields (workflow and execution context, actor, reason, and details).
3. Validates incoming audit events, enforcing required fields and allowed values, normalizing optional fields, and deriving a correlation ID when one is not provided.
4. Inserts the validated event into the Supabase Postgres audit_log table and returns the assigned sequence number, timestamp, and record hash.
5. For demo runs, queries Supabase to recompute and verify the full hash chain and reports whether the chain is intact or identifies the first broken sequence.
6. For optional functional tests, accepts a confirmation form submission and attempts an UPDATE and DELETE in Supabase, reporting PASS when the database rejects both operations.

## Setup
1. Create a Supabase project and run the provided SQL in the Supabase SQL Editor to create the audit_log table plus triggers and verification functions.
2. Create a Postgres credential in n8n using your Supabase connection details (use the Session Pooler string if needed) and select it in the nodes that write, verify, and run the optional UPDATE/DELETE tests.
3. If you use this as a shared logger, call it from your other workflows with an Execute Workflow node and pass action, status, and the source workflow/execution fields (and any optional actor, reason, details, correlation_id, or payload_hash).
4. Set the integrity-check schedule interval to your needs and, before production use, remove the optional functional test section since it intentionally tries to update and delete audit records.

## 🔗 Nodes Used

Postgres, Execute Workflow Trigger, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
