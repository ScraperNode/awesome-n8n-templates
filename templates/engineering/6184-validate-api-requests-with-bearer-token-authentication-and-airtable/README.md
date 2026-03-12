# ⚒️ Validate API requests with Bearer Token Authentication and Airtable

> ⚡ **217 views** · ⚒️ [Engineering](../)

## Description

## Bearer Token Validation


This n8n template helps you manage and validate tokens easily using:

- n8n as your backend workflow engine  
- Airtable as your lightweight token store

---

### 🚀 What It Does

- Stores user tokens securely in Airtable with expiry or usage metadata.
- Validates incoming tokens in your workflows (e.g., webhook APIs).
- Rejects invalid or expired tokens automatically for security.
- Can be extended to generate, rotate, or revoke tokens for user management.

---

### How It Works

1. **Webhook node** receives requests with a `Bearer` header.
2. **Airtable Query** looks up the provided token.
3. **Validation Logic (Code node)**:
   - Checks if the token exists.
   - Verifies expiry or usage limits if configured.
4. Returns **success** if valid, or **error** if error with describing the issue.

---

- Note: This is the simplest way to do auth, just for simplification

---

### Why Use This

- No need for a full backend to manage secure token validation.
- Clean, modular, and ready for your SaaS workflows.

---

Enjoy building secure automations with **n8n + Airtable**! 🚀

### Built by:
[Nazmy](https://n8n.io/creators/islamnazmi/)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
