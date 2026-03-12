# 🎣 Vet Jotform leads with ZeroBounce and sync qualified contacts to ActiveCampaign

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Jotform to ActiveCampaign: Advanced ZeroBounce Lead Vetting

**This workflow automates the transition of new Jotform submissions into ActiveCampaign, using [ZeroBounce](https://www.zerobounce.net) for multi-layer validation (Validation + Scoring).**

**Results are also output to Google Sheets for review.**

![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zb-logo-purple.svg)

### 🚀 How it Works
1. **⚡ Trigger & Verification:** Activates on new **Jotform** submissions and first checks if an email address is provided.
    - **Email present:** Proceeds to credit check and validation
    - **Email missing:** Customer details are added to *Rejected* output for review with reason `'Email missing'`.
2. **💳 Credit Management:** Before each ZeroBounce call, the workflow checks your account for sufficient credits to prevent node failures.
    - **Success:** Proceeds to Stage 1 (Validation).
    - **Failure:** Customer details are added to *Rejected* output for retry with reason `'Not enough credits'`.
3. **✔️ Stage 1: Email Validation:** Validates the email address with ZeroBounce.
    - **Valid:** Adds the result to *Accepted* output and creates a person in **ActiveCampaign**.
    - **Invalid:** Logs to a **Google Sheet** with the validation results and a reason for rejection for review.
    - **Catch-all:** Proceeds to Stage 2 (Scoring).
4.  **🎯 Stage 2: Email Scoring:** For "Catch-all" emails, the workflow requests **ZeroBounce Scoring**.
    - **High Score (&gt;=9):** Syncs to **ActiveCampaign**.
    - **Medium/Low Score:** Suppressed and added to a **Google Sheet** with the assigned score for review.
5. **📤 Output Results:**
    - **Accepted:** Output validation and scoring results to *Accepted* and **ActiveCampaign**
    - **Rejected** Output validation and scoring results to *Rejected*.

### 💡 Key Benefits
- **✨ Zero-Waste Sync:** Only "Valid" or "High-Scoring" leads reach your CRM.
- **🛡️ Credit Safety:** Internal checks ensure you never trigger an API call without credits.
- **📊 Detailed Suppressions:** Every rejected lead is categorized by reason (e.g. Email Missing, Invalid, Low Score, or Insufficient credits).

### 🧩 Nodes used in this workflow
- [ZeroBounce](https://n8n.io/integrations/zerobounce)
- [Jotform Trigger](https://n8n.io/integrations/jotform-trigger)
- [ActiveCampaign](https://n8n.io/integrations/activecampaign)
- [Google Sheets](https://n8n.io/integrations/google-sheets) (or alternative e.g. [Data Table](https://n8n.io/integrations/data-table))

### 📋 Setup Requirements
- **Jotform:** Connect via API Key to receive "Form Submission" events.
- **ZeroBounce:** Connect via API Key. *[Create one here](https://www.zerobounce.net/members/API)*.
- **ActiveCampaign:** Connect via API Key to create/update people for high-quality leads.
- **Google Sheets:** Connect via OAuth2 to append/update rows in a Google Sheets worksheet. Alternatively, swap these nodes out with any other data storage node e.g. **n8n Data Table** or **Microsoft Excel**. The sheets/tables can be created with the headers:
    - *Accepted* columns:
      `Email,First Name,Last Name,Accepted At,Accepted Reason,ZB Status,ZB Sub Status,ZB Free Email,ZB Did You Mean,ZB Account,ZB Domain,ZB Domain Age Days,ZB SMTP Provider,ZB MX Found,ZB MX Record,ZB Score`
    - *Rejected* columns
      `Email,First Name,Last Name,Rejected At,Rejected Reason,ZB Status,ZB Sub Status,ZB Free Email,ZB Did You Mean,ZB Account,ZB Domain,ZB Domain Age Days,ZB SMTP Provider,ZB MX Found,ZB MX Record,ZB Score`

## 🔗 Nodes Used

ActiveCampaign, Google Sheets, Jotform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
