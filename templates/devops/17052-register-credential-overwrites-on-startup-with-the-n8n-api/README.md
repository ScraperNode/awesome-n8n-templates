# ⚙️ Register credential overwrites on startup with the n8n API

> ⚡ **279 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow helps you set and maintain n8n credential overwrites by fetching credential schemas via the n8n REST API and registering overwrite values on every n8n startup using the credential overwrite endpoint.

## How it works
1. Runs manually to collect your target credential type and n8n base URL for testing.
2. Calls the n8n REST API to fetch the schema for the specified credential type so you can see which fields are available to overwrite.
3. Triggers when n8n starts and sends a POST request to the credential overwrite endpoint to register the overwrite payload.
4. Stores the overwrite JSON securely inside an HTTP custom auth credential and uses it as the request body to apply defaults that users cannot change in the UI.

## Setup
1. Self-host n8n and set `CREDENTIALS_OVERWRITE_ENDPOINT=creds-overwrite` (and `CREDENTIALS_OVERWRITE_PERSISTENCE=true` if you run queue mode).
2. Create an n8n API key with at least read permissions, add it as an n8n API credential, and set the correct base URL in the schema request.
3. Enter the credential type name you want to overwrite (for example `googleOAuth2Api`) in the input fields used by the manual test.
4. Create an HTTP Custom Auth credential that contains the overwrite JSON payload and use it in the overwrite registration request (including the correct `/creds-overwrite` URL for your instance).
5. Publish the workflow and restart n8n so it runs on init and re-applies overwrites on every startup.

## 🔗 Nodes Used

HTTP Request, n8n Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
