# ⚒️ Log AI agent runs in hash-chained receipts with OpenAI and Data Tables

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Keep a tamper-evident log of what your AI agent did: every run becomes an entry in a SHA-256 hash chain in an n8n Data Table, with daily integrity reports and a verification endpoint clients can query. Made by Keelstamp (keelstamp.com): verifiable receipts for agencies running AI automations.

## How it works
1. Your app POSTs client_id and prompt to the Agent request webhook. Bad requests get 400 (or 403 for clients not in allowed_clients) and are not logged; paused clients and empty or too-long prompts are refused and logged.
2. The AI Agent runs with Max Iterations and a token limit from Settings. Agent errors are logged too.
3. Every run, whether answered, failed or refused, becomes one entry in that client's chain in the agent_run_log Data table: SHA-256 of prompt and answer, model, model and tool calls, outcome, prev_hash and entry_hash. Raw text is stored only if you turn on store_text.
4. The entry is read back to confirm its position. If a parallel run took the same seq, this run removes its attempt and retries after a short wait.
5. The caller gets the answer plus a receipt (seq, entry_hash). If the entry cannot be written, the answer is withheld (503) and the owner gets an email.
6. Every night the whole log is checked again. You get an email naming the first break per client, or a daily anchor (the last hash per client) to keep outside n8n.
7. A GET verify endpoint returns one client's chain status with hashes and counts only, never text, so it is safe to show that client.

## Setup
1. Create two n8n Data Tables named `agent_run_log` and `agent_run_anchors` with the columns and data types expected by the workflow (keeping `logged_at` and `anchored_at` as strings).
2. Add an OpenAI credential for the OpenAI Chat model used by the LangChain agent.
3. Configure Header Auth for both webhooks and update your calling app to send the required header and payload/query parameters.
4. Add SMTP/Email credentials for the email send steps and set `owner_email` and `sender_email` in both Settings sections.
5. Review and adjust logging and guardrail settings (allowed/paused clients, prompt length, retries, and whether to store prompt/answer text) before activating the workflow.

## Requirements
- n8n with Data tables, an OpenAI API key and SMTP.

## Customization
- Swap the Calculator tool for your own tools; every run is still logged the same way.

## Additional info
Who it's for: agencies and freelancers who run an AI agent for clients and need to show, later, what the agent did and that the log was not changed. Each client's log is a SHA-256 hash chain: changing or deleting an entry breaks every hash after it, and the daily check emails you the result. The GET endpoint lets a client check their own chain without seeing other clients' data. The log shows that entries were not changed after they were written; it does not prove they were complete when written.

Made by the team building Keelstamp (keelstamp.com/founding). Keelstamp v1 is not available yet: your workflow will call Keelstamp's API before a risky step, and Keelstamp will ask your client and return approved or rejected. This template works on its own.

Keelstamp (https://keelstamp.com) is in development; the Founding Partner pre-order is open at https://keelstamp.com/founding. Questions: contact@keelstamp.com
Prepared with AI assistance. Editorial responsibility: PowerQuant ApS.

## 🔗 Nodes Used

Send Email, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
