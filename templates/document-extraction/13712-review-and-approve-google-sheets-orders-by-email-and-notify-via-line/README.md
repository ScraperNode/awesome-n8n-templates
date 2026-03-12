# 🔬 Review and approve Google Sheets orders by email and notify via LINE

> ⚡ **38 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically processes new orders added to Google Sheets. Small orders are approved instantly; large orders trigger an HTML email with one-click Approve / Reject links — each handled by an independent webhook, so multiple orders can be reviewed simultaneously without blocking each other.

**What makes this different**
Unlike Wait-node designs that block when multiple orders queue up, this workflow uses a stateless token pattern: each order gets a unique token written back to the sheet. Approval links carry the token; the handler validates it on every click — safe, idempotent, and fully concurrent.

**Key features**
- Google Sheets Trigger polls for new rows automatically — no external caller needed
- Configurable approval threshold (default: 500)
- Duplicate-processing guard: skips rows that already have a status
- One-click Approve / Reject email with styled HTML buttons
- Token validation: tampered or expired links return a 403 error page
- Already-processed guard: clicking the same link twice shows a friendly message
- LINE push notification for every outcome (auto-approved, approved, rejected)
- All results written back to Google Sheets with a reviewedAt timestamp

**Integrations**
Google Sheets · Gmail · LINE Messaging API · n8n Webhook

**Required sheet columns**
orderId · customerName · amount · approvalToken · status

---
💡 Want more automation templates?
👉 https://jasonchuang0818.gumroad.com/l/n8n-content-automation-bundle

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
