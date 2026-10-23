# 🎣 Route and validate B2B form leads with webhook firewall and SMTP emails

> ⚡ **12 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Stop losing high-ticket leads to noisy Slack channels and unpredictable AI intent scoring. Route them with enterprise precision. 

For specialized B2B agencies, consultancies, and MSPs, lead routing isn't about guessing "purchasing temperature" it’s about distinct operational tracks. An "Infrastructure Audit" requires vastly different triage than a "Managed Services" request. This workflow acts as a production-ready, deterministic routing engine. It scrubs incoming payloads through a strict validation firewall and utilizes parallel execution to instantly notify your team's ticketing system while delivering tailored, service-specific confirmations to your prospect.

## How it works
The workflow operates in four synchronized stages:
* **Ingestion & Payload Flattening:** Triggers via a Webhook (optimized for Tally or Typeform). A custom JavaScript node instantly flattens complex, deeply nested multi-choice form arrays into clean, accessible root-level variables.
* **Pre-Routing Spam Firewall:** Rather than immediately hitting your CRM, the data passes through a strict IF node configured with Regex. Malformed emails are instantly rejected, sending an error response back to the form and protecting your downstream systems from "junk" data pollution.
* **Deterministic Service Routing:** Validated leads hit a Switch node configured with rigid operational deliverables (Audit, Implementation, Managed Services). It includes an impermeable `.*` Regex Fallback branch to catch any unexpected or deprecated form inputs, ensuring zero leads are ever dropped due to unmapped values.
* **Asynchronous Parallel Communications:** The workflow fans out to execute dual email flows concurrently. It dispatches a dynamic HTML confirmation to the prospect based on their specific tier, while simultaneously sending a fully formatted data payload to a dedicated internal inbox.
* **Webhook Stability & Closure:** Every external SMTP node is configured with *Continue on Fail*. If an email server times out, the workflow gracefully completes, successfully responding to the originating webhook with a 200 OK to prevent infinite, lagging retry loops from your form builder.

## Key Benefits
* **Subverts the "Chat-Ops" Bias:** Built for professional RevOps teams using Zendesk, Jira Service Management, or shared Outlook inboxes. It relies on robust SMTP formatting rather than transient Slack pings.
* **Zero-Drop Failsafe:** The catch-all routing branch ensures that even if someone submits a broken value, they still receive a branded acknowledgment while your team investigates the anomaly.
* **Node-Level Resilience:** Designed with "Continue on Fail" logic. Temporary network blips won't crash the pipeline or break the user's frontend experience.
* **Zero-Latency Fan-Out:** Internal triage alerts and external customer emails fire at the exact same time, eliminating the gap between capture and engagement.

## Setup
1. **Credentials:** Add your standard SMTP or dedicated Email API credentials (e.g., SendGrid, Mailgun, Gmail) in n8n.
2. **Environment Config:** Open the `Notify Internal Team` and customer `Email` nodes to replace `hello@yourdomain.com` and `admin@yourdomain.com` with your actual sending and routing addresses.
3. **Template Polish:** Update the HTML payloads in the Email nodes to match your company’s specific branding and service level agreements.
4. **Activate:** Turn the workflow on, copy the Production Webhook URL, and paste it into your Tally.so or Typeform integration settings.

## Who this is for
* **B2B Service Providers & Consultancies** that require distinct operational tracks for different service offerings.
* **Managed Service Providers (MSPs)** establishing highly auditable intake systems.
* **Revenue Operations (RevOps) Architects** looking to replace probabilistic AI scoring with rigid, rule-based infrastructure.

## Required APIs & Credentials
* **Inbound:** Generic Webhook (Native to n8n)
* **Outbound:** Standard SMTP or equivalent Email Provider

## How to customise it
* **Implement the Orchestrator Pattern:** As your logic scales, replace the 4 customer `Email` nodes with `Execute Workflow` nodes. This allows individual departments to build complex, 10-step onboarding sequences without cluttering the primary routing firewall.
* **Add a Dead Letter Queue (DLQ):** Connect a database node (like Notion, Supabase, or Airtable) to the `false` branch of the Validation node to permanently log malformed submissions for compliance auditing.
* **Advanced Verification:** Add an HTTP request node before the Switch to run the email through Hunter.io or VerifiEmail to check live MX records and prevent hard bounces.

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
