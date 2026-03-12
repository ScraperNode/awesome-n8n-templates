# 🔬 Route and review finance documents from Google Drive with AI, Notion, Gmail, Slack, and Google Sheets

> ⚡ **70 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Intelligent Multi-Source Document Orchestrator: AI Triage & Multi-Tier Routing

## 🎯 Description
This is an enterprise-grade **Intelligent Document Processing (IDP)** hub designed to handle high-volume document ingestion, classification, and departmental routing. It transforms monolithic bulk scans into actionable data streams by leveraging a "Split-Extract-Route" architecture.



### ✨ The Orchestration Lifecycle
1. **Intake Layer** - Aggregates document triggers from **Google Drive**, **Webhooks**, and **Scheduled Tasks**. It implements a strict file integrity check to ensure only healthy binaries enter the pipeline.
2. **Document Atomization** - Utilizes the **HTML to PDF (Split)** node to explode multi-page bulk scans into individual, manageable pages. This ensures that a single PDF containing an invoice, a contract, and a payroll slip is correctly decomposed for separate processing.
3. **AI Extraction & Intelligence** - A sophisticated Code Node acts as the "Brain," using regex and keyword logic to classify documents (Invoices, Payroll, Legal, POs) and extract structured metadata (Amounts, Vendors, Due Dates) with confidence scoring.
4. **Smart Routing Matrix** - Documents are contextually routed based on department and value:
    - **Invoices & POs:** High-value items (&gt;$5,000) trigger a priority escalation track.
    - **Legal & Payroll:** Grouped and logged for standard departmental audit.
5. **High-Value Escalation** - For critical financial items, the system creates an approval task in **Notion** and sends an urgent escalation email via **Gmail** to the CFO/Manager.
6. **Quality Assurance & Alerts** - Low-confidence extractions (&lt;85%) are automatically quarantined, triggering a **Slack** alert for immediate manual team review.
7. **Forensic Audit Logging** - Every action, confidence score, and routing decision is appended to a **Google Sheets** master audit log for total transparency and compliance.



### 💡 Key Technical Features
- **Conditional Gating:** Multi-tier IF nodes ensure that documents only proceed once they meet specific quality and value thresholds.
- **Binary Integrity Guard:** Prevents workflow crashes by validating file data before intensive AI processing.
- **Bi-Directional Governance:** Simultaneously updates Notion for task management and Google Sheets for historical reporting.

### 🚀 Benefits
✅ **Zero Manual Sorting** - Automates the transition from "Bulk Scan" to "Departmental Action."
✅ **Risk Mitigation** - High-value items and low-confidence data are surfaced immediately for human oversight.
✅ **Regulatory Compliance** - Every document lifecycle is tracked with a permanent, immutable audit trail.

---
**Tags:** #IDP #AI #document-intelligence #notion #slack #automation #fintech

**Category:** Finance & Operations | **Difficulty:** Advanced

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
