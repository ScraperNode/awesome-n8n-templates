# 🤝 Sync La Growth Machine messages and contacts with Attio people records

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow triggers on each La Growth Machine inbox message and syncs it to Attio by finding or creating the matching person record, updating key fields, and logging the message content as a dated note in Attio.

## How it works
1. Triggers when a message is sent or received in La Growth Machine.
2. Queries the Attio People object to find a matching person by email address, full name, or LinkedIn URL.
3. If no match is found, creates a new Attio person record using the lead’s name, email, and job title.
4. Uses the existing or newly created Attio record ID and updates the person with the latest job title and short bio from La Growth Machine.
5. Creates an Attio note on the person record containing the message body and a timestamped title indicating channel and direction (sent/received).

## Setup
1. Add La Growth Machine API credentials for the trigger.
2. Create an Attio API credential using HTTP Header Auth with `Authorization: Bearer <your Attio key>`.
3. Verify and, if needed, update the Attio attribute slugs used in the API bodies and filter (`job_title`, `email_addresses`, `linkedin`, `description`) to match your workspace, or remove the LinkedIn filter if you don’t have that field.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
