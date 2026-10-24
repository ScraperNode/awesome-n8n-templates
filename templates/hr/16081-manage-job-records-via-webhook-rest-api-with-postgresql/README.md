# 👥 Manage job records via webhook REST API with PostgreSQL

> ⚡ **44 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow exposes a header-authenticated webhook REST API that performs CRUD operations on a PostgreSQL jobs table, letting you create, list, update, and delete job records and returning either JSON results or an error message to the caller.

## How it works
1. Receives a POST request via a webhook secured with HTTP header authentication.
2. Reads the request body’s `action` value and routes the request to the matching operation (list, create, update, or delete).
3. For `list`, queries PostgreSQL for up to 100 jobs ordered by `created_at` and returns the rows in the webhook response.
4. For `create`, inserts a new job (title, description, requirements) into PostgreSQL with status set to `open` and returns a 200 response.
5. For `update`, updates the specified job in PostgreSQL using the provided id, fields, and status, then returns a 200 response.
6. For `delete`, deletes the specified job by id in PostgreSQL and returns a 200 response.
7. If any database operation fails, returns a 500 response with an operation-specific error message.

## Setup
1. Create the required PostgreSQL `jobs` table (id, title, description, requirements, status, created_at) and ensure the database is reachable from n8n.
2. Add a PostgreSQL credential in n8n and select it in the PostgreSQL nodes.
3. Create an HTTP Header Auth credential (for example header name `x-api-key` with your secret value) and attach it to the webhook.
4. Set the webhook path to your desired endpoint and configure your client to send POST requests with the correct JSON body for `action` (and required fields like `id`, `title`, `status`).

## 🔗 Nodes Used

Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
