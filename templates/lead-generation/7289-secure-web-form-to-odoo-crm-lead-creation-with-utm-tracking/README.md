# 🎣 Secure web form to Odoo CRM lead creation with UTM tracking

> ⚡ **2,310 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Web-to-Odoo Lead Funnel (UTM-ready)

Create `crm.lead` records in Odoo from any webform via a secure webhook.  
The workflow validates required fields, resolves UTMs **by name** (source, medium, campaign) and writes standard lead fields in Odoo. Clean, portable, and production-ready.

## Key features
- ✅ **Secure Webhook** with Header Auth (`x-webhook-token`)
- ✅ **Required fields validation** (`firstname`, `lastname`, `email`)
- ✅ **UTM lookup by name** (`utm.source`, `utm.medium`, `utm.campaign`)
- ✅ **Clean consolidation** before create (`name`, `contact_name`, `email_from`, `phone`, `description`, `type`, UTM IDs)
- ✅ **Clear HTTP responses**: `200` success / `400` bad request

## Prerequisites
- Odoo with **Leads** enabled (CRM → Settings → Leads)
- **Odoo API Key** for your user (use it as the password)
- n8n **Odoo credentials**: URL, DB name, Login, API Key
- **Public URL** for the webhook (ngrok/Cloudflare/reverse proxy). Ensure `WEBHOOK_URL` / `N8N_HOST` / `N8N_PROTOCOL` / `N8N_PORT` are consistent
- **Header Auth secret** (e.g., `x-webhook-token: &lt;your-secret&gt;`)

## How it works
1. **Ingest** – The Webhook receives a POST at `/webhook(-test)/lead-webform` with Header Auth.  
2. **Validate** – An IF node checks required fields; if missing → respond with `400 Bad Request`.  
3. **UTM lookup** – Three Odoo `getAll` queries fetch IDs by `name`:
   - `utm.source` → `source_id`
   - `utm.medium` → `medium_id`
   - `utm.campaign` → `campaign_id`  
   If a record is not found, the corresponding ID remains `null`.
4. **Consolidate** – Merge + Code nodes produce a single clean object:  
   `{ name, contact_name, email_from, phone, description, type: "lead", campaign_id, source_id, medium_id }`
5. **Create in Odoo** – Odoo node (`crm.lead → create`) writes the lead with standard fields + UTM Many2one IDs.
6. **Respond** – Success node returns `200` with `{ status: "ok", lead_id }`.

## Payload (JSON)
**Required:** `firstname`, `lastname`, `email`  
**Optional:** `phone`, `notes`, `source`, `medium`, `campaign`

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "phone": "+393331234567",
  "notes": "Wants a demo",
  "source": "Ads",
  "medium": "Website",
  "campaign": "Spring 2025"
}
```

## Quick test
```bash
curl -X POST "https://&lt;host&gt;/webhook-test/lead-webform" \
  -H "Content-Type: application/json" \
  -H "x-webhook-token: &lt;secret&gt;" \
  -d '{"firstname":"John","lastname":"Doe","email":"john@ex.com",
       "phone":"+39333...", "notes":"Demo",
       "source":"Ads","medium":"Website","campaign":"Spring 2025"}'
```

## Notes
- Recent Odoo versions do not use the `mobile` field on leads/partners: use `phone` instead.
- Keep **secrets and credentials** out of the template; the user will set their own after import.
- If you want to **auto-create** missing UTM records, add an IF after each `getAll` and a `create` on `utm.*`.

## 🔗 Nodes Used

Webhook, Odoo, Execution Data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
