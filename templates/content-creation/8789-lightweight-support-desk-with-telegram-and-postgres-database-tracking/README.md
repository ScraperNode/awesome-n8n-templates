# 🎬 Lightweight support desk with Telegram and Postgres database tracking

> ⚡ **166 views** · 🎬 [Content Creation & Video](../)

## Description

## Telegram ticket intake and status tracking with Postgres

### Who’s it for
Anyone running support requests through Telegram, Email, Webhooks, and so on who needs a lightweight ticketing system without paying Zendesk prices. Ideal for small teams, freelancers, or businesses that want tickets logged in a structured database (Postgres) and tracked automatically. I'm using Telegram since it's the most convenient one.

### How it works / What it does
This workflow turns (Telegram) into a support desk:
1. **Receives new requests** via a Telegram bot command.  
2. **Creates a ticket** in a Postgres database with a correlation ID, requester details, and status.  
3. **Auto-confirms back to the requester** with the ticket ID.  
4. **Provides ticket updates** (status changes, resolutions) when queried.  
5. **Keeps data clean** using dedupe keys and controlled input handling.  

### How to set up
1. Create a Telegram bot using [@BotFather](https://core.telegram.org/bots#botfather) and grab the token.  
2. Connect your Postgres database to n8n and create a `tickets` table:  

```sql
CREATE TABLE tickets (
  id BIGSERIAL PRIMARY KEY,
  correlation_id UUID,
  source TEXT,
  external_id TEXT,
  requester_name TEXT,
  requester_email TEXT,
  requester_phone TEXT,
  subject TEXT,
  description TEXT,
  status TEXT,
  priority TEXT,
  dedupe_key TEXT,
  chat_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

3. Add your Telegram and Postgres credentials in n8n (via the **Credentials** tab, not hardcoded).  
4. Import the workflow JSON and replace the placeholder credentials with yours.  
5. Test by sending `/new` in Telegram and follow the prompts.

### Requirements
- n8n (latest version recommended)  
- Telegram bot token  
- Postgres instance (local, Docker, or cloud)  

### How to customize the workflow
- Change database fields if you need more requester info.  
- Tweak the **Switch node** and **Comands** for multiple status types.  
- Extend with Slack, Discord, or email nodes for broader notifications.  
- Integrate with external systems (CRM, project management) by adding more branches.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
