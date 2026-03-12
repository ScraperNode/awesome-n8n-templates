# 🔬 Secure and classify legal documents with OpenAI, Airtable and HTML to PDF

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Enterprise Legal Vault: AI Classification & Multi-Jurisdictional Security

## 🎯 Description
This enterprise-grade legal document management system provides end-to-end automation for securing, classifying, and managing the lifecycle of sensitive documents. It is designed to handle high-stakes data across multiple jurisdictions (GDPR, CCPA, HIPAA) with AI-powered intelligence.



### ✨ What This Workflow Does
1. **Intelligent Intake & Deduplication** - Monitors Google Drive, Email, and Webhooks. It uses SHA-256 fingerprinting to ensure every document is unique and to prevent redundant processing.
2. **AI-Powered Analysis Engine** - Utilizes OpenAI/Claude to classify documents (NDA, MSA, Employment Agreements), detect jurisdiction, and assign a composite Risk Score (1-100).
3. **Dynamic Security Enforcement** - Translates business rules from Airtable into technical enforcement using the **HTML to PDF (Lock)** node:
    - **Ultra-High Risk (90+):** AES-256 encryption with disabled Print, Copy, and Modify permissions.
    - **High Risk (50-89):** AES-128 encryption with dynamic recipient-specific watermarking.
    - **Public Filings:** Timestamped watermarking with no encryption.
4. **Lifecycle & Retention Automation** - Automatically calculates retention expiry dates based on legal requirements. It sets **Google Calendar** renewal reminders at 90, 60, and 30-day intervals.
5. **Intelligent Distribution Matrix** - 
    - **Verified:** Attached to **HubSpot Deals** and synced to **Dropbox** client folders.
    - **Review:** Flagged items are sent to a manual review queue with a **Slack** preview.
    - **Failed:** Isolated in a **Quarantine** folder with incident logging in **Airtable**.

### 💡 Key Features
- **Jurisdictional Logic:** Automatically adapts security and retention rules based on regional laws fetched from Airtable.
- **Forensic Watermarking:** Embeds tracking data (User ID, Timestamp) to deter and identify data leaks.
- **Fail-Safe Quarantine:** Prevents unverified or risky documents from ever entering the primary company storage.

### 📦 Requirements
- **HTML to PDF Node** - Essential for tiered **Lock** operations.
- **Airtable** - Acts as the central "Business Rules Engine."
- **Google Drive & HubSpot** - For storage and CRM synchronization.
- **OpenAI/Claude API** - For document classification and risk assessment.

### 🚀 Benefits
✅ **Zero Manual Security Setup** - Documents are locked according to corporate policy the moment they are uploaded.
✅ **Regulatory Compliance** - Meets strict GDPR "Right to be Forgotten" and data localization standards automatically.
✅ **Proactive Risk Management** - High-liability clauses and auto-renewals are flagged instantly to the legal team.

---
**Tags:** #legal #compliance #pdf-lock #encryption #gdpr #sec-ops #hubspot #airtable

**Category:** Legal & Compliance

**Difficulty:** Advanced

## 🔗 Nodes Used

Airtable, Google Drive, HubSpot, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
