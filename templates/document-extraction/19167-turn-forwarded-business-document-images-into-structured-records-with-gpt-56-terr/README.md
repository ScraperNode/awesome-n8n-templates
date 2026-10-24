# 🔬 Turn forwarded business document images into structured records with gpt-5.6-terra Vision, Postgres, and Gmail

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Forwarded documents, handled. This workflow takes business document photos sent to a webhook, reads them with AI vision, stores structured records in Postgres, and emails your ops team a summary. Unreadable files get flagged, open items get daily reminders.

*Last updated: September 2026.*

## Quick overview
This workflow accepts forwarded business document images via a webhook, uses OpenAI gpt-5.6-terra Vision to classify and extract key fields, stores the result in Postgres, and emails operations a summary or an error notice, plus a daily reminder email for any documents still marked open.

## How it works
1. Receives a POST webhook submission containing an image URL or base64 image along with optional metadata like document type and sender note.
2. Validates that an image is present and, if so, sends it to OpenAI gpt-5.6-terra Vision with instructions to return a structured JSON record and summary.
3. Parses the OpenAI response into normalized fields such as document type, title, summary, extracted data, amount, currency, dates, and a confidence score.
4. If the document is recognized, upserts the structured record into a Postgres `biz_documents` table and emails the extracted summary to the operations inbox via Gmail.
5. If the document is missing or unrecognized, emails an “unreadable document” notice to the operations inbox via Gmail.
6. Runs daily at 08:00 (Asia/Jakarta), queries Postgres for documents not marked `done` and older than 24 hours, and emails a follow-up list to operations via Gmail.

## Setup
1. Add an OpenAI API credential for the Chat Completions endpoint and ensure the workflow can access the `gpt-5.6-terra` model.
2. Add a Postgres credential and create a `biz_documents` table with columns used by the INSERT/UPSERT query (including a unique `doc_id` and a `status` field).
3. Add a Gmail OAuth2 credential, then update the recipient address in the three Gmail send steps to your operations inbox.
4. Copy the webhook URL for the `docintake` path and configure your intake source to POST `image_url` or `image_base64` (and optional `doc_type`, `note`, `submitter`) to it.
5. Confirm the schedule trigger timing and timezone (Asia/Jakarta) match your business hours before activating the workflow.

### Quick Answers
**What if a document can't be read?**  
Operations gets an "unreadable document" notice by email instead of silence.  
**How are open items chased?**  
Every day at 08:00, documents still open after 24 hours land in a follow-up email.  
**Where is data stored?**  
A Postgres `biz_documents` table with a unique `doc_id` per record.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
