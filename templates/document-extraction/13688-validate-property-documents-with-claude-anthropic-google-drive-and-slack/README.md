# 🔬 Validate property documents with Claude (Anthropic), Google Drive and Slack

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow ingests property document packages submitted via webhook or monitored cloud storage, extracts text from each file, runs Claude AI to verify legal compliance, detect missing or expired documents, flag invalid clauses, and produces a structured validation report with remediation guidance.

### How it works

1. **Trigger** — Webhook submission or Google Drive folder watch
2. **Intake & Register** — Logs submission, assigns case ID, normalises metadata
3. **Download Documents** — Fetches each file from Drive / S3 / URL
4. **Extract Text** — Reads PDF/DOCX content via parser node
5. **Classify Document Type** — Identifies contract, title, disclosure, certificate, etc.
6. **AI Legal Compliance Check** — Claude AI validates each document against jurisdiction rules
7. **Aggregate Validation Results** — Merges per-document findings into a case report
8. **Check Required Doc Checklist** — Detects missing mandatory documents
9. **Route by Compliance Status** — Branches on PASS / FAIL / REQUIRES_REVIEW
10. **Notify Submitter** — Email with full validation report and remediation steps
11. **Alert Legal Team on Slack** — Flags FAIL or critical issues to legal channel
12. **Create Audit Record** — Writes full report to Google Sheets compliance log
13. **Generate PDF Report** — Stores formatted report back to Drive
14. **Return Validation Response** — Sends structured JSON result to caller

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** — Claude AI for legal document analysis
   - **Google Drive OAuth** — Document intake and report storage
   - **Google Sheets OAuth** — Compliance audit log
   - **Slack OAuth** — Legal team alerts
   - **SendGrid / SMTP** — Submitter notification emails
3. Set your Google Drive folder IDs for intake and output
4. Configure jurisdiction rules in the AI prompt node
5. Set mandatory document checklist in the Checklist node
6. Activate the workflow

### Sample Webhook Payload
```json
{
  "caseId": "CASE-2025-0871",
  "submitterEmail": "agent@realty.com",
  "propertyAddress": "42 Oak Street, Sydney NSW 2000",
  "transactionType": "sale",
  "jurisdiction": "NSW",
  "documents": [
    {
      "name": "Contract of Sale",
      "type": "contract",
      "driveFileId": "1aBcDeFgHiJkL"
    },
    {
      "name": "Title Search",
      "type": "title",
      "driveFileId": "2mNoPqRsTuVwX"
    }
  ]
}
```

### Document Types Supported
- Contract of Sale / Purchase Agreement
- Certificate of Title / Title Search
- Vendor Disclosure Statement
- Section 32 / Vendor Statement
- Building & Pest Inspection Report
- Strata Report / Body Corporate Docs
- Zoning Certificate / Planning Certificate
- Land Tax Certificate
- Mortgage / Discharge of Mortgage
- Lease Agreement / Tenancy Documents
- Council Rates Notice
- Smoke Alarm / Safety Certificates

### Features
- Multi-document batch validation per submission
- Jurisdiction-aware compliance rules (AU/UK/US configurable)
- Missing document detection against mandatory checklist
- Expiry date validation for time-sensitive certificates
- Critical clause and red-flag detection
- Automated remediation guidance per issue
- Full audit trail in Google Sheets
- PDF validation report stored to Drive

---

**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
