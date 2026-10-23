# 🤝 Flag duplicate Clio contacts and email paralegals daily with dismissal links

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs daily to scan Clio contacts for likely duplicates, emails a digest of new high-confidence matches to a paralegal via SMTP, logs the scan to a separate audit workflow, and provides a webhook-based “Dismiss” link to suppress specific pairs from future alerts.

## How it works
1. Runs every morning at 6am on a schedule trigger.
2. Fetches up to 200 contacts from the Clio API and compares contacts of the same type to score potential duplicate pairs using email/phone matches and fuzzy name similarity.
3. Filters results to high-confidence pairs that have not been previously flagged or dismissed using workflow static data.
4. Builds an HTML digest email with Clio deep links for each contact pair and a one-click webhook “Dismiss” link per pair.
5. Calls a separate “Bar-Compliance Guardrail” workflow to log the scan outcome for audit/compliance tracking.
6. Sends the digest email to the configured paralegal address via SMTP.
7. When a recipient clicks a “Dismiss” link, receives the webhook request, records the pair as dismissed in static data, and returns an HTML confirmation page.

## Setup
1. Create a Clio OAuth2 app, add an OAuth2 credential in n8n, and set the CLIO_BASE_URL variable to your Clio region URL (for example, https://app.clio.com).
2. Add SMTP credentials for sending email and set the FIRM_FROM_EMAIL plus FIRM_PARALEGAL_EMAIL (or FIRM_EMAIL fallback) variables.
3. Activate the workflow, copy the production URL of the dismissal webhook, and save it as the DUPLICATE_DISMISS_WEBHOOK_URL variable.
4. Set the GUARDRAIL_WORKFLOW_ID variable to the workflow ID of your audit/guardrail workflow so scan events can be logged.
5. (Optional) Set DUPLICATE_CONFIDENCE_THRESHOLD to tune sensitivity, and increase the Clio contacts “limit” parameter if you have more than 200 contacts.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
