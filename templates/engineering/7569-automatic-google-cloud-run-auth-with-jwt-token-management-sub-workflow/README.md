# ⚒️ Automatic Google Cloud Run auth with JWT token management (sub-workflow)

> ⚡ **445 views** · ⚒️ [Engineering](../)

## Description

## Who it’s for? 
Anyone calling a **Google Cloud Run** service from n8n who wants a small, reusable auth layer instead of wiring tokens in every workflow.

## What it does / How it works
This sub-workflow checks whether an incoming `id_token` exists and is still valid (with a 5-minute buffer). If it’s good, it reuses it. If not, it signs a short-lived JWT with your service account, exchanges it at Google’s token endpoint, and returns a fresh `id_token`. It also passes through `service_url` and an optional `service_path` so the caller can hit the endpoint right away. (Designed to be called via **Execute Workflow** from your main flow.)

## How to set up
- Add your **JWT (PEM)** credential using the service account **private_key**.
- In **Vars**, set `client_email` (from your key) and confirm `token_uri` is `https://oauth2.googleapis.com/token`.
- Call this sub-workflow with `service_url` (and optional `service_path`). Optionally include a prior `id_token` to enable reuse.

## Inputs / Outputs
**Inputs:** `id_token` (optional), `service_url`, `service_path`  
**Outputs:** `id_token`, `service_url`, `service_path`

## Notes
- Built for loops: pair with a Merge/Split strategy to attach `id_token` to each item.
- Keep credentials in n8n **Credentials** (no keys in nodes).
- Full write-up and context: 
 **[Build a Secure Google Cloud Run API, Then Call It from n8n (Free Tier)](https://medium.com/@marcocodes/build-a-secure-google-cloud-run-api-then-call-it-from-n8n-88c03291a95f)** 
— by Marco Cassar

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, JWT

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
