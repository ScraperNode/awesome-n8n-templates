# 🔬 Analyze contract risk from Google Drive with OpenAI and log to Gmail & Sheets

> ⚡ **178 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
This workflow automates end-to-end contract analysis when a new file is uploaded to Google Drive. It downloads the contract, extracts its content, and uses AI to analyze legal terms, obligations, and risks. Based on the assessed risk level, it notifies stakeholders and logs structured results into Google Sheets for audit and compliance.

## Step-by-step
- **Step 1: Contract ingestion and AI analysis**
  - **Google Drive Trigger** – Monitors a specific folder for newly uploaded contract files.
  - **Download file** – Downloads the uploaded contract from Google Drive.
  - **Extract Text From Downloaded File** – Extracts readable text or prepares raw content for complex files.
  - **AI Contract Analysis** – Analyzes legal, commercial, and financial clauses using AI.
  - **Format AI Output** – Parses and structures the AI response into clean, usable fields.

- **Step 2: Risk alerts and audit logging**
  - **Alert Teams Automatically** – Evaluates risk level and checks for significant risks.
  - **Send a message (Risk Alert)** – Sends a detailed alert email for medium-risk contracts.
  - **Send a message (Info Only)** – Sends an informational email when no action is required.
  - **Get The Data To Save In Google Sheet (Alert Path)** – Prepares alert-related contract data.
  - **Get The Data To Save In Google Sheet (Info Path)** – Prepares non-alert contract data.
  - **Append row in sheet** – Stores contract details, risks, and timestamps in Google Sheets.

## Why use this?
- Eliminates manual contract screening and repetitive reviews.
- Detects explicit and inferred risks consistently using AI.
- Automatically alerts teams only when attention is required.
- Creates a centralized audit log for compliance and reporting.
- Scales contract analysis without increasing legal workload.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
