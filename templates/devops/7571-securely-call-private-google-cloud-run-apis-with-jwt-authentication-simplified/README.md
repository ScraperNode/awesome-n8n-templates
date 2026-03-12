# ⚙️ Securely call private Google Cloud Run APIs with JWT authentication (simplified)

> ⚡ **257 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who it’s for? 
Anyone who wants a dead-simple, free-tier friendly way to run custom API logic on **Google Cloud Run** and call it securely from n8n—no public exposure, no local hosting.

## What it does 
Minimal flow: **Set** → **JWT (sign)** → **HTTP (token exchange)** → **HTTP (call Cloud Run with `Authorization: Bearer &lt;id_token&gt;` )**. No caching, no extras—just enough to authenticate and hit your endpoint.

## How to set up 
General instructions below—see my detailed guide for more info: 

**[Build a Secure Google Cloud Run API, Then Call It from n8n (Free Tier)](https://medium.com/@marcocodes/build-a-secure-google-cloud-run-api-then-call-it-from-n8n-88c03291a95f)**

Setup:
1. Create a Cloud Run service and enable **Require authentication (Cloud IAM)**.  
2. Create a Google **Service Account** with **Cloud Run Invoker** on that service.  
3. In n8n, set `service_url`, `client_email`, `token_uri` (`https://oauth2.googleapis.com/token`) in **Set**.  
4. Create a **JWT (PEM)** credential from your service account key (paste the full BEGIN/END block).  
5. Run the workflow; the second HTTP node calls your Cloud Run URL with the ID token.

## Requirements
- Cloud Run service URL (auth required)  
- Google Service Account with **Cloud Run Invoker**  
- Private key JSON fields downloaded from Service Account | needed to generate JWT credentials

## More details
Full write-up (minimal + modular versions):  

**[Build a Secure Google Cloud Run API, Then Call It from n8n (Free Tier)](https://medium.com/@marcocodes/build-a-secure-google-cloud-run-api-then-call-it-from-n8n-88c03291a95f)**

## 🔗 Nodes Used

HTTP Request, JWT

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
