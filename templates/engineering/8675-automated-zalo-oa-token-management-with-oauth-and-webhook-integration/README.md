# ⚒️ Automated Zalo OA token management with OAuth and webhook integration

> ⚡ **742 views** · ⚒️ [Engineering](../)

## Description

# Description (How it works)
This workflow keeps your Zalo Official Account access token valid and easy to reuse across other flows—no external server required.

**High-level steps**
1. **Scheduled refresh** runs on an interval to renew the access token before it expires.  
2. **Static Data cache** (global) stores access/refresh tokens + expiries for reuse by any downstream node.  
3. **OAuth exchange** calls Zalo OAuth v4 with your `app_id` and `secret_key` to get a fresh access token.  
4. **Immediate output** returns the current access token to the next nodes after each refresh.  
5. **Operational webhooks** include:
   - A **reset** webhook to clear the cache when rotating credentials or testing.
   - A **token peek** webhook to read the currently cached token for other services.

# Setup steps (estimated time ~8–15 minutes)
1. **Collect Zalo credentials (2–3 min):** Obtain `app_id`, `secret_key`, and a valid `refresh_token`.  
2. **Import & activate workflow (1–2 min):** Import the JSON into n8n and activate it.  
3. **Wire inputs (2–3 min):** Point the “Set Refresh Token and App ID” node to your env vars (or paste values for a quick test).  
4. **Adjust schedule & secure webhooks (2–3 min):** Tune the run interval to your token TTL; protect the reset/peek endpoints (e.g., secret param or IP allowlist).  
5. **Test (1–2 min):** Execute once to populate Static Data; optionally try the token peek and reset webhooks to confirm behavior.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
