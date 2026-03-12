# 💬 Telegram chatbot with voice recognition and message batching using OpenAI

> ⚡ **816 views** · 💬 [Support Chatbots](../)

## Description

This Telegram workflow batches rapid-fire messages from the same user into one prompt (20–30s debounce), then sends a single AI reply.

It uses **two Google Sheets**:
- **Message Retention** (`date | user_id | message`) — queues incoming messages.
- **Message  Checkup** (`user_id | is_waiting | last_updated`) — debounces per user.

Flow per message:
1. Log to **Message Retention**.
2. Read **Message  Checkup** for that `user_id`. If empty, synthesize `{ is_waiting:false }`.
3. IF (**OR**):
   - `last_updated` is **older than 30s**, **or**
   - `is_waiting` is **false**  
   → Start wait window: set `is_waiting=true`, update `last_updated`, **Wait** (e.g., 30s).
4. After Wait: fetch all queued messages for the user, merge them, delete those rows, send one AI answer to Telegram, then clear the Waiting row.
5. If a new message arrives while waiting, we only refresh `last_updated` (extend the window) — we do **not** start another wait.

Copy/paste:
- Older-than-30s: `{{ new Date(Date.now() - 30000).toISOString() }}`
- “No Rows” normalizer (Code node) ensures the IF always has data to check.

Supports text and voice (voice via Whisper). Works reliably on Telegram once the webhook is registered and Sheets are shared with the service account.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
