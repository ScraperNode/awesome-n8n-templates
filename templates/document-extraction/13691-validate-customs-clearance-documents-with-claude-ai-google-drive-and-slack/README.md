# 🔬 Validate customs clearance documents with Claude AI, Google Drive and Slack

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates pre-dispatch customs document validation for international shipments. It ingests shipping document packages, extracts content from each file, uses Claude AI to cross-validate all documents for consistency, regulatory compliance, and HS code accuracy, then flags errors before goods are dispatched — preventing costly delays, fines, and rejected shipments at the border.

### How it works

1. **Trigger** — Webhook submission or watched Drive/S3 folder when new shipment docs are uploaded
2. **Register Shipment** — Assigns shipment case ID, normalises metadata from payload
3. **Fetch Document Files** — Downloads each document from Google Drive or URL
4. **Extract Text Content** — Parses PDF/DOCX text from all documents
5. **Classify Document Types** — Identifies invoice, packing list, bill of lading, COO, etc.
6. **Cross-Document Consistency Check** — Detects mismatches across documents (values, weights, quantities)
7. **AI Compliance Validation** — Claude AI validates each doc against destination country rules
8. **Aggregate Findings** — Merges per-document results into a shipment-level report
9. **Route by Risk Level** — Branches on CLEAR / HOLD / REJECT
10. **Notify Logistics Team** — Slack alert with error summary and action items
11. **Email Exporter Report** — Detailed validation report with fix instructions
12. **Update Shipment Tracker** — Writes status back to Airtable / Google Sheets
13. **Create Compliance Ticket** — Opens Jira issue for HOLD or REJECT shipments
14. **Return API Response** — Structured JSON result to caller or TMS integration

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** — Claude AI for compliance validation
   - **Google Drive OAuth** — Document intake and storage
   - **Google Sheets OAuth** — Shipment compliance audit log
   - **Airtable** — Shipment tracker CRM
   - **Slack OAuth** — Logistics team alerts
   - **SendGrid / SMTP** — Exporter notification emails
   - **Jira API** — Compliance issue tracking
3. Set your Google Drive intake folder ID
4. Configure destination country rules in the AI prompt node
5. Set your Airtable base and shipment table IDs
6. Activate the workflow

### Sample Webhook Payload
```json
{
  "shipmentId": "SHP-2025-00392",
  "exporterEmail": "logistics@exportco.com",
  "originCountry": "CN",
  "destinationCountry": "AU",
  "incoterms": "FOB",
  "declaredValue": 48500,
  "currency": "USD",
  "goodsDescription": "Electronic Components",
  "documents": [
    { "name": "Commercial Invoice", "type": "commercial_invoice", "driveFileId": "1aBcD" },
    { "name": "Packing List",       "type": "packing_list",       "driveFileId": "2eFgH" },
    { "name": "Bill of Lading",     "type": "bill_of_lading",     "driveFileId": "3iJkL" },
    { "name": "Certificate of Origin", "type": "certificate_of_origin", "driveFileId": "4mNoP" }
  ]
}
```

### Documents Supported
- Commercial Invoice
- Packing List
- Bill of Lading (B/L) / Airway Bill (AWB)
- Certificate of Origin (COO / Form D / EUR.1)
- Customs Entry / Import Declaration
- Dangerous Goods Declaration (DGD)
- Phytosanitary / Health Certificate
- Insurance Certificate
- Letter of Credit (L/C)
- Export Licence / Permit
- Material Safety Data Sheet (MSDS)
- Fumigation Certificate

### AI Validation Checks
- **Field Completeness** — All mandatory fields present and populated
- **Cross-Document Consistency** — Values, weights, quantities, HS codes match across docs
- **HS Code Validation** — Correct classification for declared goods and destination
- **Incoterms Compliance** — Terms correctly applied across invoice and B/L
- **Valuation Rules** — Customs value method correct, currency declared
- **Country of Origin** — COO criteria met, preferential rates applicable
- **Restricted / Prohibited Goods** — Flags potential dual-use, CITES, or embargoed items
- **Sanction Screening** — Party names checked against common red flags
- **Date & Validity** — Document dates consistent, certificates not expired

### Features
- Multi-document cross-validation in a single run
- AI-powered HS code verification and suggestion
- Destination-country–specific compliance rules
- Automatic HOLD/REJECT routing for high-risk findings
- Detailed error report with fix instructions per field
- Full audit trail in Google Sheets
- Jira ticket creation for escalated compliance issues

**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
