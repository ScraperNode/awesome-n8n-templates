# 🎫 Create Notion helpdesk tickets from shared IMAP support inbox emails

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a shared support inbox over IMAP and turns new emails into tickets in Notion, creating or reusing a requester record in a Contacts database, uploading attachments to Notion, and adding same-thread replies as comments on the original ticket.

## How it works
1. Triggers when a new email arrives in the configured IMAP inbox.
2. Cleans and normalizes the email subject, body, sender details, and extracts thread headers to support deduplication and follow-up detection.
3. Queries the Notion Tickets database to skip emails whose Message-ID is already stored on an existing ticket.
4. If the email is a reply, searches Notion for a ticket matching the email’s In-Reply-To/References and prepares to add the message as a comment on that ticket.
5. Uploads any email attachments to Notion using the File Upload API, keeping successful uploads and recording failures.
6. For follow-ups, posts one or more Notion comments (including uploaded attachments) and appends the new Message-ID to the ticket’s stored Message-IDs.
7. For new requests, finds or creates the requester in the Notion Contacts database, creates a ticket (using the database default template when available), inserts the cleaned email content at the top, and then stores the Message-ID on the ticket.

## Setup
1. Create a Notion integration, share your Tickets and Contacts databases with it, and grant it permission to create pages, upload files, and insert comments.
2. Add a Notion API credential in n8n and select it for all Notion HTTP requests.
3. Add an IMAP credential for your support mailbox (for Gmail, use an app password) and select it in the IMAP email trigger.
4. Replace PASTE_TICKETS_DATABASE_ID and PASTE_CONTACTS_DATABASE_ID in the Settings step with your Notion database IDs.
5. Ensure your Tickets database includes properties named Title, Requester (relation), Message-IDs (rich text), and Attachments (files), and your Contacts database includes Email and Name (plus optional First name/Last name) to match the workflow queries.

## Requirements
- A Notion account

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
