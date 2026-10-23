# 💬 Handle LINE support in Slack with Claude and Google Gemini embeddings

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow routes LINE customer inquiries into Slack threads, uses Anthropic Claude plus an in-memory vector store (Google Gemini embeddings) to suggest or send replies, and learns from staff replies tagged #learn after masking personal data, with Data Tables tracking threads, learning logs, and reminders.

## How it works
1. Receives incoming LINE Messaging API webhook events, validates the x-line-signature, deduplicates redelivered events, and keeps only text messages.
2. Masks personal data in the inquiry with regex, searches a learned Q&A knowledge base in an in-memory vector store using Google Gemini embeddings, and builds reference snippets above a similarity threshold.
3. Uses Anthropic Claude to draft a reply using only the retrieved reference Q&A and marks whether the draft is safe to use.
4. If auto-reply is enabled and the draft is answerable, replies to the customer on LINE; otherwise it sends an acknowledgment on LINE and posts the inquiry plus an AI suggestion (or “staff reply needed”) into the customer’s Slack thread.
5. When staff post a human reply in the Slack thread, sends the reply to the customer on LINE, reacts with a ✅ on success (or reports the failure in the thread), and marks the thread as replied.
6. If the staff reply includes #learn, masks remaining personal data with regex and Anthropic Claude, validates the masking, and then stores the masked Q&A in the vector store and logs the result in a Data Table with a note back in Slack.
7. On workflow start/activation/update, reloads learned Q&A from the Data Table into the in-memory vector store, and every 15 minutes during business hours posts Slack thread reminders for customers still waiting for a staff reply.

## Setup
1. Create and select three n8n Data Tables for thread tracking, learned Q&A logging, and reminder tracking, and ensure the thread table includes line_user_id, slack_ts, status, last_inquiry, customer_name, and pending_inquiries columns.
2. Add credentials for Slack, Anthropic (Claude), Google Gemini embeddings, and LINE Messaging API (HTTP Header Auth bearer token), and set the LINE channel secret used to validate the webhook signature.
3. Configure the LINE webhook URL in the LINE Developers console to point to the workflow webhook path, and enable Slack Events to trigger on messages for the selected Slack channel.
4. Select your target Slack channel in all Slack nodes and set the Data Table IDs used by the workflow.
5. Review and adjust the Config values (auto_reply, similarity_threshold, acknowledgment) and the reminder business hours settings, and update “keep_contacts” with any shop-owned phone numbers/emails you don’t want masked.

## Requirements
- LINE Official Account with the Messaging API (channel access token and channel secret)
- Slack workspace and a Slack app with the bot scopes chat:write, channels:read, channels:history and reactions:write
- Anthropic API key
- Google AI Studio (Gemini) API key for the embeddings
- n8n reachable over HTTPS, for the LINE and Slack webhooks
- Three Data Tables: line_slack_threads, learned_qa, followup_reminders (columns are listed in the sticky note)

## Customization
- Turn auto_reply on and tune similarity_threshold in the Config node
- List your shop's own phone numbers and emails in Learning settings so they are not masked
- Edit the draft rules in the AI: Draft the reply node, and the acknowledgment text in Config
- Change the waiting times in Reminder settings, or remove the reminder section
- Replace the in-memory vector store with Qdrant, Pinecone or Supabase (three nodes)
- Move the masking function, which is copied into several Code nodes, into a sub-workflow

## Additional info
Learning is opt-in: only staff replies that contain #learn are learned, and auto-reply is off by default. Masking is best-effort. The final check looks for patterns (email, phone, card, postal code, IDs after words like "order number") and cannot tell whether the AI missed a name. Test with your own data before using real customer data.

On the Gemini free tier, Google may use your content to improve its products. Check the current terms and use a paid key for real customer data.

Costs to know: push messages count against your monthly LINE quota (200 on the free plan). Slack also triggers the workflow for the bot's own posts, so one customer message used several executions in testing. The reminder runs every 15 minutes even when nobody is waiting (about 2,900 executions a month); lower the frequency or remove it if you pay per execution.

Text messages only; images and stickers are ignored. In my small tests, related questions scored about 0.80 to 0.85 and an unrelated one 0.51 with the Gemini embedding model, so tune the threshold with your own data.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, n8n Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
