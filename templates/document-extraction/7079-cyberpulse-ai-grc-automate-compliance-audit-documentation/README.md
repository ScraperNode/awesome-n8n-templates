# 🔬 CYBERPULSE AI GRC: automate compliance audit documentation

> ⚡ **114 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Description
Automatically packages audit-ready evidence files matched to control IDs from ISO 42001 or other frameworks.
Fetches logs from Google Sheets, finds corresponding files in Google Drive, compresses them into a ZIP archive, and sends via email — no manual formatting required.

Who’s It For:

Compliance teams preparing audit documentation

GRC consultants managing multiple clients

Internal auditors requiring traceable evidence

How It Works:

Trigger manually or on schedule (e.g., daily)

Reads audit logs from Google Sheets

Searches Google Drive for files matching control_id

Downloads matched files

Zips them into an archive

Sends the archive via email (Gmail or SMTP)

Requirements:

Gmail or SMTP node for email delivery

Google Sheets connected (OAuth2)

Google Drive connected (OAuth2)

Google Sheet Requirements:

Columns: control_id, description, evidence_status, last_updated

One row per control ID or log entry

Headers must be in the first row

Log sheet must be shared with your service account or n8n-connected user

File Templates:

Audit_AutoPack_Sheet_Template.xlsx

Evidence files in Google Drive named using control ID (e.g., ISO42001-5.1.pdf)

Customization Tips:

Adjust ZIP archive name in the “Zip Files” node

Customize email subject, body, and recipient

Use a different Drive folder per client or audit phase

Ethics & Compliance:

Ensures audit trail and evidence traceability

Prevents unauthorized edits or file mismatches

Setup Instructions

Copy the provided Google Sheet template (linked in File Templates).

Fill in your audit logs (columns: control_id, description, status, last_updated).

Connect Google Sheets node using OAuth credentials.

In the Gmail node:

Set recipient email (e.g., your_email@example.com)

Choose “Send binary data” and attach ZIP

Trigger via Cron node (e.g., daily) or manually

(Optional) Connect Drive or S3 node to store a backup copy

Supports:

ISO 42001 AI Governance

PCI DSS v4.0

NIST CSF / SOCI Act

ACSC Essential Eight


https://cyberpulsesolutions.com

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
