# 🎣 Vet new Shopify leads with ZeroBounce and sync qualified contacts to HubSpot

> ⚡ **27 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Shopify to HubSpot: Advanced ZeroBounce Lead Vetting

**This workflow automates the transition of new Shopify customers into HubSpot, using [ZeroBounce](https://www.zerobounce.net) for multi-layer validation (Validation + AI Scoring).**

**Results are also output to Google Sheets for review.**

![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zb-logo-purple.svg)

### 🧩 Nodes used in this workflow
- [ZeroBounce](https://n8n.io/integrations/zerobounce)
- [Shopify](https://n8n.io/integrations/shopify)
- [Hubspot](https://n8n.io/integrations/hubspot)
- [Google Sheets](https://n8n.io/integrations/google-sheets) (or alternative e.g. [Data Table](https://n8n.io/integrations/data-table))

### 💡 Key Benefits
- **✨ Zero-Waste Sync:** Only "Valid" or "High-Scoring" leads reach your CRM.
- **🛡️ Credit Safety:** Internal checks ensure you never trigger an API call without credits.
- **📊 Detailed Suppressions:** Every rejected lead is categorized by reason (e.g. Email Missing, Invalid, Low Score, or Insufficient credits).

### 🚀 How it Works
1. **⚡ Trigger & Verification:** Activates on new **Shopify** customers and first checks if an email address is provided.
    - **Email present:** Proceeds to credit check and validation
    - **Email missing:** Customer details are added to *Rejected* output for review with reason `'Email missing'`.
2. **💳 Credit Management:** Before each ZeroBounce call, the workflow checks your account for sufficient credits to prevent node failures.
    - **Success:** Proceeds to Stage 1 (Validation).
    - **Failure:** Customer details are added to *Rejected* output for retry with reason `'Not enough credits'`.
3. **✔️ Stage 1: Email Validation:** Validates the email address with ZeroBounce.
    - **Valid:** Adds the result to *Accepted* output and creates a contact in **HubSpot**.
    - **Invalid:** Logs to an **n8n Data Table** with the validation results and a reason for rejection for review.
    - **Catch-all:** Proceeds to Stage 2 (Scoring).
4.  **🎯 Stage 2: AI Email Scoring:** For "Catch-all" emails, the workflow requests **ZeroBounce AI Scoring**.
    - **High Score (&gt;=9):** Syncs to **HubSpot**.
    - **Medium/Low Score:** Suppressed and added to an **n8n Data Table** with the assigned score for review.
5. **📤 Output Results:**
    - **Accepted:** Output validation and scoring results to *Accepted* and **Hubspot**
    - **Rejected** Output validation and scoring results to *Rejected*.

### 📋 Setup Requirements
- **Shopify:** Connect via OAuth2 to watch for "Customer Created" events (Topic: `customers/create`).
- **ZeroBounce:** Connect via API Key. *[Create one here](https://www.zerobounce.net/members/API)*.
- **HubSpot:** Connect via OAuth2 to create/update contacts for high-quality leads.
- **Google Sheets:** Connect via OAuth2 to append/update rows in a Google Sheets worksheet. Alternatively, swap these nodes out with any other data storage node e.g. **n8n Data Table** or **Microsoft Excel**. The sheets/tables can be created with the headers:
    - *Accepted* columns:
      `ID,Email,First Name,Last Name,Accepted At,Accepted Reason,ZB Status,ZB Sub Status,ZB Free Email,ZB Did You Mean,ZB Account,ZB Domain,ZB Domain Age Days,ZB SMTP Provider,ZB MX Found,ZB MX Record,ZB Score`
    - *Rejected* columns
      `ID,Email,First Name,Last Name,Rejected At,Rejected Reason,ZB Status,ZB Sub Status,ZB Free Email,ZB Did You Mean,ZB Account,ZB Domain,ZB Domain Age Days,ZB SMTP Provider,ZB MX Found,ZB MX Record,ZB Score`

## 🔗 Nodes Used

Google Sheets, HubSpot, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
