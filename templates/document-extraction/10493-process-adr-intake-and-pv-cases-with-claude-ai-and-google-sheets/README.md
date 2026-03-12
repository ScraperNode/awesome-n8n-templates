# 🔬 Process ADR intake and PV cases with Claude AI and Google Sheets

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates end-to-end pharmacovigilance (PV) case processing. It ingests ADR reports from web forms or emails, extracts and classifies events using Claude AI against MedDRA terminology, enriches with historical signal data, persists to a PV database, and triggers expedited regulatory alerts for serious/unexpected events.

### How it works

1. **Ingest ADR Report** - Webhook receives ADR submission from patient/HCP portal or email parser
2. **Validate & Normalize** - Checks ICH E2B(R3) required fields, assigns case ID, classifies reporter
3. **Wait — Deduplication Window** - 10-minute hold to catch duplicate submissions from the same reporter
4. **Claude AI Medical Coding** - Extracts MedDRA PTs, classifies seriousness, causality, and expectedness
5. **Signal Detection Enrichment** - Queries historical PV database for disproportionality signals (PRR/ROR)
6. **Wait — Regulatory Clock** - Holds until expedited report window (7-day/15-day) deadline check
7. **Persist PV Case Record** - Writes structured E2B-compliant case to Google Sheets PV database
8. **Expedited Alert & Reporting** - Notifies PV team, triggers regulatory submission for serious/unexpected cases
9. **Audit & Compliance Log** - Full chain of custody for EMA/FDA inspection readiness

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for medical coding and causality assessment
   - **Google Sheets** - PV case database and audit log
   - **SMTP / Gmail** - Alerts to PV team and regulatory affairs
3. Set your product name, MAH name, and regulatory contact email
4. Configure signal detection thresholds (PRR, ROR) in enrichment node
5. Activate workflow

### Sample ADR Payload
```json
{
  "productName": "DrugX 50mg",
  "reporterType": "physician",
  "reporterEmail": "dr.smith@hospital.com",
  "patientAge": 54,
  "patientSex": "female",
  "adverseEvent": "severe chest pain and shortness of breath",
  "eventOnsetDate": "2025-02-20",
  "drugStartDate": "2025-01-10",
  "doseStrength": "50mg",
  "dosageFrequency": "once daily",
  "outcome": "hospitalized",
  "dechallenge": true,
  "rechallenge": false
}
```

### Regulatory Framework
- **ICH E2B(R3)** — Electronic transmission of ICSRs
- **ICH E2A** — Expedited reporting (7-day fatal/life-threatening, 15-day serious unexpected)
- **FDA 21 CFR 314.81** — NDA post-marketing reporting
- **EMA GVP Module VI** — Management and reporting of adverse reactions

**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
