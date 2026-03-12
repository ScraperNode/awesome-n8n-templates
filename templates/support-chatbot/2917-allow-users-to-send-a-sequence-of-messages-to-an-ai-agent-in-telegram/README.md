# 💬 Allow users to send a sequence of messages to an AI agent in Telegram

> ⚡ **14,038 views** · 💬 [Support Chatbots](../)

## Description

### Use Case
When creating chatbots that interface through applications such as **Telegram** and **WhatsApp**, users can often sends multiple shorter messages in quick succession, in place of a single, longer message. This workflow accounts for this behaviour.
### What it Does
This workflow allows users to send several messages in quick succession, treating them as one coherent conversation instead of separate messages requiring individual responses. 
### How it Works
1. When messages arrive, they are stored in a **Supabase PostgreSQL** table
2. The system waits briefly to see if additional messages arrive
3. If no new messages arrive within the waiting period, all queued messages are:
   - Combined and processed as a single conversation
   - Responded to with one unified reply
   - Deleted from the queue
### Setup
1. Create a table in Supabase called **message_queue**. It needs to have the following columns: **user_id** (`uint8`), **message** (`text`), and **message_id** (`uint8`)
2. Add your **Telegram**, **Supabase**, **OpenAI**, and **PostgreSQL** credentials
3. Activate the workflow and test by sending multiple messages the Telegram bot in one go
4. Wait ten seconds after which you will receive a single reply to all of your messages
### How to Modify it to Your Needs
- Change the value of **Wait Amount** in the **Wait 10 Seconds** node in order to to modify the buffering window 
- Add a **System Message** to the **AI Agent** to tailor it to your specific use case
- Replace the **OpenAI** sub-node to use a different language model

## 🔗 Nodes Used

Telegram, Telegram Trigger, Supabase, AI Agent, OpenAI Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
