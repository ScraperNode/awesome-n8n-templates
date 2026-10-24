# 🎣 Verify form leads in real time with NeverBounce before adding to your CRM

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Stop lead pollution at the source. 
This workflow creates a "Gatekeeper" for your web forms, ensuring that only **100% valid email addresses ever reach your CRM**.

**How it works:**

1. Instant Verification: As soon as a user submits your n8n form, their email is sent to NeverBounce for a real-time health check.
2. The "Clean" Path: If the email is valid, the lead is automatically created/updated in your CRM (HubSpot, Salesforce, etc.) and the user sees a "Success" page.
3. The "Gatekeeper" Loop: If the email is invalid or disposable, the workflow blocks the entry, shows a custom error message, and allows the user to re-enter a valid address without losing their place.

**Why use this?**

- Protect Domain Reputation: Stop your sales team from sending to "undeliverable" addresses.
- Save CRM Costs: Keep your contact database lean by only paying for real, reachable humans.
- Better UX: Instead of a generic failure, users get immediate feedback to fix typos in real-time.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
