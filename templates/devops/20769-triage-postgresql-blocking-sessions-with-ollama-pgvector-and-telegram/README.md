# ⚙️ Triage PostgreSQL blocking sessions with Ollama, pgvector and Telegram

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every 5 minutes to detect blocking PostgreSQL sessions, retrieves a severity criterion from a pgvector knowledge base, uses Ollama to propose an action, and sends the recommendation to Telegram for approval before optionally terminating the blocking session.

## How it works
1. Runs every 5 minutes on a schedule.
2. Queries PostgreSQL to find blocking/blocked sessions, skipping blockers that already have a recent proposal in the audit log.
3. Groups results by blocking session (PID) to create one triage item per blocker and summarizes wait time and affected sessions.
4. Generates an embedding with Ollama and searches a PostgreSQL pgvector knowledge base to select the applicable severity criterion and supporting context.
5. Sends the situation and retrieved criterion to Ollama to return a JSON proposal (severity, action, and motivation) and formats a Telegram-ready message.
6. Logs the proposal to PostgreSQL and sends a Telegram approval message that waits for an approve/reject response.
7. If approved, calls a PostgreSQL function to terminate the blocking session and posts the outcome to Telegram; if rejected, logs the rejection to PostgreSQL.

## Setup
1. Create and configure two PostgreSQL credentials: one with read/log permissions (for pg_stat_activity, kb.documenti, and ops.log_event) and one with permission to execute ops.terminate_session.
2. Set up the PostgreSQL schema objects used by the workflow (ops.audit_log and ops.log_event, ops.terminate_session, and kb.documenti with pgvector embeddings and the expected metadata fields).
3. Provide access to an Ollama instance and update the Ollama base URL plus the generation and embedding model names in the configuration values.
4. Create a Telegram bot credential, set the target Telegram chat ID, and enter the approver name used for audit logging.

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
