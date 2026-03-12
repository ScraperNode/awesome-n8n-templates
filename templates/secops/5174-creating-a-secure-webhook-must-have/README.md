# 🔒 🗲 Creating a Secure Webhook - MUST HAVE

> ⚡ **5,599 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How it works

This workflow demonstrates a fundamental pattern for securing a webhook by requiring an API key. It acts as a gatekeeper, checking for a valid key in the request header before allowing the request to proceed.

1.  **Incoming Request:** The `Secured Webhook` node receives an incoming `POST` request. It expects an API key to be sent in the `x-api-key` header.
2.  **API Key Verification:**
    *   The `Check API Key` node takes the key from the incoming request's header.
    *   It then makes an internal HTTP request to a *second* webhook (`Get API Key`) which acts as a mock database.
    *   This second webhook retrieves a list of registered API keys (from the `Registered API Keys` node) and filters it to find a match for the key that was provided.
3.  **Conditional Response:**
    *   **If a match is found**, the `API Key Identified` node routes the execution to the "success" path, returning a `200 OK` response with the identified user's ID.
    *   **If no match is found**, it routes to the "unauthorized" path, returning a `401 Unauthorized` error.

This pattern separates the public-facing endpoint from the data source, which is a good security practice.

## Set up steps

**Setup time: ~2 minutes**

This workflow is designed to be a self-contained example.

1.  **Set up Credentials:** This workflow uses "Header Auth" for its internal communication. Go to **Credentials** and create a new **Header Auth** credential. You can use any name and value (e.g., Name: `X-N8N-Auth`, Value: `my-secret-password`). Select this credential in all four webhook/HTTP Request nodes.
2.  **Add Your API Keys:** Open the **`Registered API Keys`** node. This is your mock database. Edit the array to include the `user_id` and `api_key` pairs you want to authorize.
3.  **Activate the workflow.**
4.  **Test it:** Use the **`Test Secure Webhook`** node to send a request.
    *   Try it with a valid key from your list to see the success response.
    *   Change the `x-api-key` header to an invalid key to see the `401 Unauthorized` error.

**For Production:** Replace the mock database part of this workflow (the `Get API Key` webhook and `Registered API Keys` node) with a real database node like Supabase, Postgres, or Baserow to look up keys.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
