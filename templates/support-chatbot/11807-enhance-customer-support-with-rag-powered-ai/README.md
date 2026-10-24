# 💬 Answer multi-channel support queries with OpenAI RAG and Supabase

> ⚡ **8,326 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Answers customer questions on Email, Live Chat, WhatsApp, Slack and Discord from your own documentation, retrieved through a Supabase vector store. Ungrounded answers, negative sentiment and explicit handover requests escalate to a human with a Zendesk ticket. Every conversation is categorised, logged and reported weekly.

## How it works
1. A message arrives on Email, Live Chat, WhatsApp, Slack or Discord and is normalised into one schema, with an explicit branch per channel.
2. Five guards run before a single model call is paid for: auto-replies and bounces, empty bodies, duplicate deliveries, oversized messages, and an explicit request for a human matched in six languages. Live chat receives an HTTP response on each of those paths, so a caller never waits on an open connection.
3. The agent answers from your documentation, retrieved from a Supabase vector store wired as a tool, with Postgres-backed chat memory so history survives restarts.
4. Confidence is scored on grounding rather than on answer length: did the agent search the knowledge base, and did the knowledge base return anything. A long, fluent answer with no retrieval behind it scores low.
5. Greetings and thank-yous short circuit that test instead of failing it, so ordinary politeness does not open a support ticket.
6. At or above the threshold, and without negative sentiment, the answer goes back on the originating channel. Email keeps the customer's own subject, Slack replies in thread.
7. Otherwise the case escalates. The reason is derived from what already happened rather than re-decided, an AI step writes a short note for the human agent into the ticket body, and Zendesk gets a priority derived from sentiment. The chain keeps going if a step fails, so one outage cannot delete an entire escalation.
8. Every conversation, answered or escalated, is categorised and logged to Google Sheets. A weekly job posts real figures to Slack, then archives them and purges old chat memory. A manual branch ingests your documentation, clearing the previous run first so re-running never duplicates anything.

## Setup
1. Run the Supabase SQL from the note beside the ingestion branch. It creates the pgvector extension, three tables, the retrieval function and the indexes. Nothing retrieves anything before it exists, and chat memory has no retention before it exists.
2. Set four workflow settings by hand: timezone, a 180 second execution timeout, successful production executions set to not save, failed ones set to save. n8n does not carry timezone, timeout or the execution-saving options across an import, so no template can ship them. Two minutes of work, and it keeps customer messages out of your execution history.
3. Create the 12 n8n Variables listed in the Global Configuration note on the canvas. Four of them are specific to your instance and have no sensible default, so they show SET_ in the field until you fill them in. The other eight resolve on their own. Set SUPPORT_EMAIL before you go live: its default is a placeholder, and it is the From address on every reply.
4. Connect credentials: IMAP, SMTP, WhatsApp, Slack for both trigger and API, a Discord bot, Zendesk, a Google Sheets service account, Supabase, OpenAI, Postgres on the same Supabase project, and Header Auth for both webhooks.
5. Replace the Load Source Documents node with your real documentation source, keeping its output shape of title, url and content. It ships with three sample articles so the pipeline runs end to end straight after import.
6. Create the Google Sheet with these columns, in order: userId, channel, message, category, sentiment, timestamp, aiResponse, confidence, escalated, escalationReason.
7. Run the manual ingestion trigger once. It populates the knowledge base, and until it has, grounding scores zero and everything routes to a human, which is the intended fallback. Then test three paths: a question your documentation answers, a message asking for a human, and the same message sent twice.
8. Delete any channel branch you do not use.

## Requirements
- Built and verified on n8n 2.32.7. It uses AI Agent 3.1, Postgres 2.7, Google Sheets 4.7 and Remove Duplicates 2, so an older release may not carry every node version used here.
- Supabase with pgvector enabled, plus direct Postgres access to the same project for chat memory and the metrics archive.
- OpenAI for the chat model and the embedding model.
- Zendesk, or another ticketing system if you swap that one node.
- A Google Sheet and a Google service account.
- Discord needs a relay bot. n8n has no native Discord trigger and Discord cannot send custom headers, so the endpoint cannot be a Discord Interactions URL. The relay must post a JSON body with four fields: id, content, channel_id and author.id. All four are used, and without channel_id the reply has nowhere to go. The exact body is in the Discord note on the canvas.
- Live chat callers should send message_id. Without it, deduplication falls back to a content hash bucketed per minute: enough for a provider retry, not a guarantee.

## Customization
- Confidence threshold and maximum message length live in the Workflow Configuration node. Chat memory retention lives in Weekly Configuration and defaults to 30 days.
- The chat model and embedding model are variables. Changing the embedding model also means changing the vector dimension in the setup SQL and recreating the knowledge base table.
- The knowledge base table name is a variable and is also hardcoded inside the retrieval function. Change one without the other and retrieval reads a table nothing writes to, with no error at all.
- Keyword gates cover English, Romanian, German, French, Spanish and Italian across handover detection, escalation reasons, categorisation and small talk. Keyword matching, not language detection: extend per market.
- Zendesk can be replaced by swapping a single node. The reason, the AI note, the priority and the Slack alert are all built upstream of it.

## Additional info
- Email replies carry the customer's own subject, prefixed with Re:, which is how Gmail and Outlook group a conversation. The SMTP node cannot set In-Reply-To or References, so grouping is by subject rather than by header: reliable in practice, not guaranteed by the standard. If you need strict RFC threading, swap the send step for an email API call.

- The three escalation steps continue on error, so a Zendesk or Slack outage cannot take the alert, the log row and the customer's HTTP response down with the ticket. The cost is that the Error Trigger stays quiet for those three, so a Zendesk failure is written into the Slack alert instead, in the channel a human is already watching.

- Chat memory is purged weekly, on a schedule you set in Weekly Configuration. The Google Sheets log is left to you on purpose: it holds message text and user identifiers, and the right retention depends on your jurisdiction rather than on a default someone else picked.

- Every identifier on the Slack, Discord and Google Sheets nodes is an expression resolved at runtime, which is what lets you move this template between environments by changing variables instead of editing nodes. The dropdowns show "Choose…" as a result.

Anything else worth knowing is written into the notes on the canvas, beside the nodes it applies to.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, Postgres, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
