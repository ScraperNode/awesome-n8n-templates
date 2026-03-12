# ⚒️ OAuth token management system with Airtable storage

> ⚡ **111 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## OAuth Token Generator and Validator

This **n8n template** helps you generate, validate, and store tokens for your customers securely using:

- **n8n** as your backend automation engine  
- **Airtable** as your lightweight client and token store

---

### 🚀 What It Does

- Accepts `client_id` and `client_secret` via **POST webhook**.
- Validates client credentials against Airtable.
- Generates a **long token** on success.
- Stores the generated token in Airtable with metadata.
- Responds with a JSON containing the token, expiry, and type.
- Returns clear error messages if validation fails.

---

### How It Works

1. **Webhook node** receives `client_id` and `client_secret`.
2. **Validator (Code node)** checks:
   - Body contains only `client_id` and `client_secret`.
   - Rejects missing or extra fields.
3. **Airtable search**:
   - Looks up the `client_id`.
   - Rejects if not found.
4. **Secret validation (If node)**:
   - Compares provided `client_secret` with stored value.
   - Rejects if incorrect.
5. **Token generation (Code node)**:
   - Generates a 128-character secure token.
6. **Airtable create**:
   - Stores token, client ID, creation date, and type.
7. **Webhook response**:
   - Returns JSON `{ access_token, expires_in, token_type }` on success.
   - Returns appropriate JSON error messages on failure.

---

### Related Workflow

You can also use it with the published **Bearer Token Validation** workflow:

👉 [Validate API Requests with Bearer Token Authentication and Airtable](https://n8n.io/workflows/6184-validate-api-requests-with-bearer-token-authentication-and-airtable)

to securely validate tokens you generate with this workflow across your protected endpoints.

---

### Why Use This

- Provides **OAuth-like flows** without a complex backend.
- Uses **n8n + Airtable** for client management and token storage.
- Clean, modular, and ready for your SaaS or internal API automations.
- Extendable for token expiry, refresh, and rotation handling.

---

Enjoy building secure token-based APIs using **n8n + Airtable**! 🚀

### Built by:
[Nazmy](https://n8n.io/creators/islamnazmi/)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
