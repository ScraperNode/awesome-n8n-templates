# 🔬 Manage Strapi CMS v5 content types via webhook using HTTP requests

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# n8n workflow template: Strapi CMS v5 content API

An importable [n8n](https://n8n.io/) workflow that **creates**, **updates**, and **lists** entries on **Strapi v5** through a single webhook. It talks to Strapi’s REST API with **HTTP Request** nodes and a **Strapi Token API** credential, so it stays compatible with v5 even though n8n’s built-in Strapi node targets older Strapi versions.

## What’s in this repo

| File | Purpose |
|------|---------|
| [`strapi-v5-content-n8n-workflow.json`](./strapi-v5-content-n8n-workflow.json) | Workflow export — use for **Import from File** / **Import from URL** in n8n or when submitting to the n8n template gallery |

## Features

- **One webhook, three actions** — `action_type` routes to `create`, `update`, or `get_all`.
- **Any content type** — pass the plural API ID (`content_type_plural`) per request; no workflow fork per collection.
- **Strapi v5** — uses `documentId` on update and REST URLs shaped for the v5 API.
- **List with options** — `get_all` supports `status`, `page_size`, `page_number`, and `populate=*` in the workflow.
- **Clear failures** — checks Strapi error responses and can mark the execution failed via **Stop and Error**.
- **Extra documentation** — after import, open the large sticky note on the canvas for full payload examples and security notes.

## Requirements

- n8n (self-hosted or cloud)
- Strapi **v5** with a valid **API token** (Settings → API Tokens) and permissions for the collections you automate

## Quick start

1. In n8n, choose **Import workflow** → **From File** and select `strapi-v5-content-n8n-workflow.json` (or import from this repo’s raw URL).
2. Create a **Strapi Token API** credential in n8n and attach it to all **HTTP Request** nodes (**Create**, **Update**, **Get all**).
3. **Activate** the workflow and copy the webhook’s **Production URL** (default path segment: `strapi-v5-content`). Change the path in the **Webhook** node if it clashes with another active workflow on the same instance.
4. Send **POST** requests with a JSON **body** as below. Do **not** include a trailing slash on `strapi_base_url`.

### Webhook security (recommended before production)

The template ships with **no** webhook authentication so you can test quickly. Before exposing the URL publicly, add authentication on the **Webhook** node (for example **Header Auth** with `X-API-Key` and a long random secret) and send that header on every call. The workflow intentionally does not hardcode your Strapi host: callers supply `strapi_base_url` in the body, so only trusted clients should be allowed.

## Request body reference

All actions expect a JSON object (typically the webhook body). Common fields:

| Field | Required | Description |
|-------|----------|-------------|
| `action_type` | Yes | `"create"` \| `"update"` \| `"get_all"` |
| `strapi_base_url` | Yes | Strapi origin, no trailing slash (e.g. `https://your-project.strapiapp.com`) |
| `content_type_plural` | Yes | Plural API ID from Content-Type Builder (e.g. `articles`) |

### `get_all`

Optional: `status` (`published` / `draft`), `page_size`, `page_number`.

### `create`

Required: `data` — object of field names and values matching your Strapi schema.

### `update`

Required: `documentId` (Strapi v5), and `data` with fields to patch.

Example shapes:

```json
{
  "action_type": "get_all",
  "strapi_base_url": "https://your-strapi.example.com",
  "content_type_plural": "articles",
  "status": "published",
  "page_size": 10,
  "page_number": 1
}
```

```json
{
  "action_type": "create",
  "strapi_base_url": "https://your-strapi.example.com",
  "content_type_plural": "articles",
  "data": { "title": "Hello", "slug": "hello" }
}
```

```json
{
  "action_type": "update",
  "strapi_base_url": "https://your-strapi.example.com",
  "content_type_plural": "articles",
  "documentId": "&lt;from get_all or Strapi admin&gt;",
  "data": { "title": "Updated title" }
}
```

For full parameter notes, pagination examples, and **MCP / AI agent** usage, see the sticky note inside the imported workflow.


## License

This project is released under the [MIT License](./LICENSE) (Copyright © 2026 IBSolutions.dev).

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
