# 🔧 Manage Etsy OAuth 2.0 tokens and API headers between workflows

> ⚡ **26 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow manages Etsy OAuth 2.0 (PKCE) authorization in n8n, stores access and refresh tokens in workflow static data, refreshes tokens when needed, and returns ready-to-use Etsy API request headers to other workflows via an Execute Workflow call.

## How it works
1. Runs either manually to start authorization, via a webhook callback from Etsy after consent, or when another workflow requests a token.
2. Loads the Etsy app configuration (client ID, shared secret, redirect URI, scopes) and routes the run to start authorization, handle the callback, or return an access token.
3. When starting authorization, generates a PKCE verifier/challenge and returns an Etsy authorization URL while storing the pending state for validation.
4. When Etsy redirects to the callback webhook, validates the returned state and authorization code and then exchanges the code for tokens using the Etsy OAuth token endpoint.
5. Stores the authorized access and refresh tokens (with expiry timestamps) in n8n workflow static data and returns a confirmation response to the callback request.
6. When another workflow requests a token, loads the stored refresh token, refreshes the access token with Etsy if it is missing or near expiry, and returns Authorization and x-api-key headers for Etsy API calls.

## Setup
1. Create an Etsy developer app and register this workflow’s webhook URL (the OAuth callback path) as an allowed redirect URI in Etsy.
2. Fill in the client ID, shared secret, redirect URI (production webhook URL), and required scopes in the Configuration step.
3. Activate the workflow and run the manual start to generate the authorization URL, then complete consent in Etsy so the callback can store the initial tokens.
4. In dependent workflows, use Execute Workflow to call this workflow with `action: get_token` to receive the Etsy API headers.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
