# 🔬 Classify contracts and track renewals with easybits, Google Drive and Sheets

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## **What this workflow does**
Drop a contract (PDF, JPG, PNG) into a watched Google Drive folder. **easybits Extractor** classifies it (SaaS / Lease / Service / Insurance / Other) and pulls every renewal-relevant field in a single call. A Set node calculates the contract's end date and the cancellation deadline. The classified contract is appended to the matching tab in a single Google Sheet – your source of truth for every renewal in the company.

---

### Setup guide

**1. Install the easybits Extractor node**
- **n8n Cloud:** Already available, no install needed.
- **Self-hosted:** Settings → Community Nodes → install `@easybits/n8n-nodes-extractor`.

**2. Create your easybits pipeline**
Go to [extractor.easybits.tech](https://extractor.easybits.tech) and create a pipeline with these fields:

- `contract_class` (string) – enum: `saas_subscription`, `lease_agreement`, `service_contract`, `insurance_policy`, `other`. Returns `null` if not a contract.
- `client_name` (string)
- `provider_name` (string)
- `start_date` (string, ISO format YYYY-MM-DD)
- `initial_term_months` (number)
- `renewal_term_months` (number)
- `auto_renew` (string – "true"/"false")
- `notice_period_days` (number)
- `contract_value` (number)
- `client_signatory_name` (string)
- `provider_signatory_name` (string)

Paste your Pipeline ID and connect your credentials in the **easybits: Classify & Extract Contract** node.

**3. Create your Google Drive folder**
Create a folder (e.g. "Incoming Contracts") and paste its ID into the **Watch Contract Folder** node.

**4. Create your Google Sheet**
Create one Google Sheet with five tabs: `SaaS`, `Leases`, `Services`, `Insurance`, `Other`.

Header row on every tab:
`Start Date | Client Name | Provider Name | Contract Value | Initial Term Months | Renewal Term Months | Auto Renew | Notice Period Days | End Date | Cancellation Deadline | Contract Class | Client Signatory Name | Provider Signatory Name`

Paste the Sheet ID into all 5 Google Sheets nodes.

**5. Connect credentials**
- easybits Extractor → your easybits API key
- Google Drive → OAuth (used by both trigger and download)
- Google Sheets → OAuth

**6. Activate and test**
Turn the workflow on, drop a contract PDF into the watched folder, and watch the correct tab fill up.

---

### Field notes

- `auto_renew` stays as a string ("true"/"false") because the easybits Extractor doesn't yet expose a boolean type. Part 2 handles the conversion.
- `notice_period_days` is critical – without it, the cancellation deadline defaults to the end date, which is usually too late for contracts with 60–90 day notice clauses.
- Supports PDF, JPG, and PNG only. Dropping other file types (Word, ODS, etc.) will error – add a mime-type filter before the Extractor if that's a real concern for your setup.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
