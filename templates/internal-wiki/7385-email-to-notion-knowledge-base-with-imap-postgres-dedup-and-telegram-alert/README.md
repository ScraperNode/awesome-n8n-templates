# 📖 Email to Notion knowledge base with IMAP, Postgres dedup and Telegram alert

> ⚡ **496 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Filter incoming emails via IMAP, extract & clean the body into plain text, normalize (title/slug/snippet/date/from/url), check for duplicates in Postgres, store as a row in a Notion database, then send a Telegram notification.
Perfect for building a knowledge base or inbox triage automation without duplicate noise.

Key Features

IMAP polling (Only UNSEEN).

Extract & clean HTML → plain text.

Normalization: title, snippet, bodyText, slug, messageId, sentAt, fromAddress, sourceUrl.

Deduplication via Postgres (SELECT EXISTS).

Create page in Notion database (property mapping).

Telegram success notification.

Tags: email, imap, notion, postgres, deduplication, telegram, automation, knowledge-base

Prerequisites

IMAP access (Gmail/Outlook/Custom).

Gmail: enable IMAP + App Password if using 2FA.

Notion Integration Token & Database ID (database must be shared with the integration).

PostgreSQL accessible from n8n.

(Optional) Telegram Bot Token & Chat ID.

## 🔗 Nodes Used

Email Trigger (IMAP), Postgres, Telegram, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
