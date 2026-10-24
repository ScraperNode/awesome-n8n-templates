# 📈 Manage SMC Screener analyses with n8n forms and HTTP API

> ⚡ **23 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow uses an n8n Form (or manual test payload) to call the SMC Screener Analysis API, letting you list, fetch, create, update, reanalyze, clear, delete analyses, and check runtime status, returning a structured response summary for each action.

## How it works
1. Receives inputs from an n8n Form submission (or a manual run) including the user’s SMC Screener API key and the requested action.
2. Normalizes and validates the inputs (for example, parses booleans, converts timeframe labels to minutes, and checks required fields like analysis_id for detail/edit actions).
3. If required fields are missing, returns a validation error payload describing what needs to be fixed.
4. If an example/test API key is detected, returns an example-mode response that shows the selected endpoint and expected error cases without calling SMC Screener.
5. Routes the request to the matching SMC Screener endpoint (GET /analyses/, GET /analyses/{id}/, POST /analyses/, PATCH /analyses/{id}/, POST /analyses/{id}/reanalyze/, POST /analyses/{id}/clear/, DELETE /analyses/{id}/, or GET /analyses/runtime-status/).
6. Sends the HTTP request to api.smcscreener.com with the API key in a Bearer Authorization header and includes query parameters or JSON body fields as needed.
7. Builds a consistent summary object containing the action, endpoint, request details, and the full SMC Screener API response.

## Setup
1. Create an SMC Screener API key with the needed permissions (analyses_read, analyses_create, analyses_edit, analyses_reanalyze, analyses_clear, analyses_delete).
2. Use the n8n Form trigger and share its URL with users, or run the workflow manually and replace api_key in the “Manual Test Payload”.
3. For actions that modify a specific record (get/update/reanalyze/clear/delete), provide a valid analysis_id that belongs to the API-key owner.
4. For clear and delete actions, set confirm=true (and optionally dry_run=true for clear) to satisfy the workflow’s safety checks and API requirements.
5. If using runtime status, provide ids and/or dbs and choose the view mode (auto/byid/bydb) to shape the status lookup.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
