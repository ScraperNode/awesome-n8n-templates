# 🔒 Secure AI agent webhook with HMAC, replay protection, and OpenAI GPT-5

> ⚡ **142 views** · 🔒 [SecOps & Security Automation](../)

## Description

## **⚠️ Disclaimer:** 
&gt; I am **not a cybersecurity expert**. 
This workflow was built through research and with the assistance of an LLM (Claude Opus 4.6). 
While it implements well-established security patterns (HMAC-SHA256, timing-safe comparison, replay protection, strict payload validation), please review the logic carefully and ensure it meets your own security requirements before deploying it in production.

## Who is this for?

This template is for anyone exposing an n8n workflow via webhook and wanting to ensure that only authenticated, untampered requests are processed.

## What problem does this solve?
Public webhooks are vulnerable by default. Without proper verification, anyone who discovers your URL can send forged requests, replay old ones, or inject unexpected parameters. 
While n8n's built-in Webhook authentication modes (Basic Auth, Header Auth, JWT) verify who is calling, they don't verify that the payload hasn't been altered, that the request is fresh, or that the data structure matches what you expect. 
This template adds those missing layers:

- **Authentication** — Verifies the sender's identity through HMAC-SHA256 signature validation
- **Integrity** — Ensures the payload hasn't been modified by signing the raw body byte-for-byte
- **Replay protection** — Rejects requests with expired timestamps (configurable, default: 5 minutes)
- **Payload sanitization** — Strict whitelist filtering blocks unauthorized fields before they reach your logic

## What this workflow does

The workflow chains six security layers before any business logic runs:

1. **Webhook** receives the request with Header Auth + Raw Body enabled to preserve the original payload
2. **Extract rawBody** (Code node) decodes the binary into a UTF-8 string and extracts the security headers
3. **Crypto** computes the HMAC-SHA256 signature of `{timestamp}.{rawBody}` using your HMAC secret
4. **Timing-Safe HMAC Check** (Code node) validates the timestamp freshness and compares signatures using `crypto.timingSafeEqual()`
5. **Strict Payload Validation** (Code node) parses the JSON, checks required fields, and rejects any unexpected keys
6. **AI Agent** processes the prompt only after all checks pass

Invalid requests are immediately rejected with `403 Forbidden` (signature/timestamp failure) or `400 Bad Request` (payload validation failure), with no response body to avoid leaking internal logic.

## Example use case

The included example protects an AI Agent endpoint that expects a simple `{"prompt": "..."}` payload. But this is just a **starting point** — replace the AI Agent with any node and adapt the payload validation to your own schema.

**Common adaptations:**
* CRM or SaaS event callbacks
* CRUD operations on a database
* Third-party API integrations

## Setup

### Prerequisites
- An n8n instance (Cloud or Self-hosted)
- A shared HMAC secret between the sender and this workflow — **keep it safe and never expose it in workflow logs or execution data**


## Going further


This workflow is a solid starting point — it's more secure than a raw exposed webhook.

However, it focuses on application-level security (authentication, integrity, replay protection, payload sanitization).

For a production-grade setup, consider adding layers at the **infrastructure level** :

- **Rate limiting** 
- **IP whitelisting** 
- **Reverse proxy hardening**

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
