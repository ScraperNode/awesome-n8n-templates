# 🎫 Triage and reply to email threads with GPT-5.2, IMAP, Gmail, and ESP suppression

> ⚡ **107 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Automatically read inbound email replies, use AI to detect intent and sentiment, and send natural in-thread responses. Opt-out requests are confirmed, pushed to your ESP suppression list, and logged. A hands-off reply layer that keeps your sender reputation clean while every conversation gets fast, human-sounding answer.

## How it works
1. An IMAP trigger watches your inbox and picks up new reply emails as they arrive.
2. A filter keeps only genuine replies, and a code node strips quoted history and signatures, then parses the sender name, email, and threading headers.
3. A code node builds a strict AI prompt with the cleaned message and your trigger-word hints.
4. The OpenAI node classifies intent and sentiment and drafts a reply, returning strict JSON.
5. A code node normalizes the response, enforces a clean email structure, and adds your CTA once.
6. A switch routes on the unsubscribe flag: normal replies go back in-thread through Gmail, opt-outs get a neutral confirmation.
7. Opt-outs are posted to your ESP suppression list, every action is logged to a data table, and Gmail labels are updated to mark the thread handled.
8. Setup (5 steps):
9. Add your IMAP credentials to the email trigger and set the folder to monitor.
10. Connect your OpenAI credentials and confirm the model and prompt match your brand voice and CTA.
11. Add Gmail OAuth credentials for thread lookup, replies, and label changes, and set your label IDs.
12. Update the suppression HTTP request with your ESP API host, key, and endpoint.
13. Create the data-table columns used for logging, then test with a real reply before going live.
14. Requirements (optional):
15. IMAP mailbox, Gmail account, OpenAI API key, and an ESP with a suppression-list API.
16. Customization (optional):
17. Edit the system prompt to set your tone, rules, and CTA. Adjust the switch conditions to add more reply categories, change the data-table schema, or swap the ESP suppression call for your provider.
18. On their AI feedback: they offered auto-generated sticky notes. Your notes are already clean and correct, so you don't need theirs, but there's no harm in using their improved version if it reads well, your call. The one thing I'd do before uploading is clear those two cached internal references (the data-table name and errorWorkflow ID) so nothing of your instance's internal naming ships.
19. Opt-outs are posted to your ESP suppression list, every action is logged to a data table, and Gmail labels are updated to mark the thread handled.

## Setup
1. Add IMAP credentials for the mailbox you want to monitor and confirm the IMAP search filter matches your reply detection needs.
2. Add a Gmail credential with permission to search threads, reply to messages, and manage labels in the target account.
3. Add an OpenAI credential and update any model/prompt placeholders such as YOUR_COMPANY and YOUR_PHONE_NUMBER.
4. Replace the ESP suppression API URL and API key placeholders (your-esp-api-host.com and YOUR_ESP_API_KEY) with your provider’s endpoint and parameters.
5. Select or create the n8n Data Table used for logging, and update the Gmail label IDs to labels that exist in your Gmail account.

## Requirements
- IMAP mailbox, Gmail account, OpenAI API key, and an ESP with a suppression-list API

## Customization
- Edit the system prompt to set your tone, rules, and CTA. Adjust the switch conditions to add more reply categories, change the data-table schema, or swap the ESP suppression call for your provider.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Gmail, Filter, Execution Data, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
