# 🔬 Mask PII in documents for GDPR-safe AI processing with Postgres and Claude

> ⚡ **140 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This workflow implements a **privacy-preserving AI document processing pipeline** that detects, masks, and securely manages Personally Identifiable Information (PII) before any AI processing occurs.

Organizations often need to analyze documents such as invoices, forms, contracts, or reports using AI. However, sending documents containing personal data directly to AI models can create serious **privacy, compliance, and security risks**.

This workflow solves that problem by automatically **detecting sensitive information**, replacing it with secure tokens, and storing the original values in a **protected vault database**.

Only the **masked version of the document** is sent to the AI model for analysis. If required, a controlled **PII re-injection mechanism** can restore original values after processing.

The workflow also records all operations in an **audit log**, making it suitable for environments requiring strong compliance such as **GDPR, financial services, healthcare, or enterprise document processing systems**.

---

## How It Works

### 1. Document Upload
A webhook receives a document (typically a PDF) and triggers the workflow.

### 2. OCR Text Extraction
The **OCR Extract** node extracts the text content from the document so it can be analyzed for sensitive information.

### 3. PII Detection
Multiple detectors analyze the text to identify different types of sensitive data:

- Email addresses (regex detection)
- Phone numbers (multi-pattern detection)
- Identification numbers such as PAN, SSN, or bank accounts
- Physical addresses detected using an AI model

Each detection includes:
- detected value
- location in the text
- confidence score

### 4. Detection Consolidation
All detected PII results are merged into a single dataset.  
The workflow resolves overlapping detections and removes duplicates to produce a clean list of sensitive values.

### 5. Tokenization and Secure Vault Storage
Each detected PII value is replaced with a secure token, for example:

```
&lt;&lt;EMAIL_7F3A&gt;&gt;
&lt;&lt;PHONE_A12B&gt;&gt;
```

The original values are securely stored in a **Postgres vault table**.

This ensures sensitive data is **never exposed to AI models**.

### 6. Masked AI Processing
The masked document is sent to an AI model for structured analysis.

Possible AI tasks include:

- Document classification
- Data extraction
- Document summarization
- Entity extraction

Since all sensitive data has been tokenized, the AI processes the document **without seeing any real personal data**.

### 7. Controlled PII Re-Injection
After AI processing, the workflow can optionally restore original values from the vault.

The **Re-Injection Controller** determines which fields are allowed to restore PII based on defined permissions.

### 8. Compliance Audit Logging
All events are recorded in an audit table, including:

- PII detection
- token generation
- AI processing
- PII restoration

This provides **traceability and compliance reporting**.

---

## Setup Instructions

### 1. Configure Postgres Database

Create two tables in your database.

#### PII Vault Table

Example structure:

```
token
original_value
type
document_id
created_at
```

This table securely stores original PII values mapped to tokens.

#### Audit Log Table

Example structure:

```
document_id
pii_types_detected
token_count
ai_access_confirmed
re_injection_events
timestamp
actor
```

This table records workflow activity for compliance tracking.

---

### 2. Configure AI Model Credentials

This workflow supports multiple AI models:

- Anthropic Claude (used for AI document processing)
- Ollama local models (used for address detection)

Configure credentials in n8n before running the workflow.

---

### 3. Configure Webhook Trigger

The workflow starts when a document is sent to the webhook:

```
POST /webhook/gdpr-document-upload
```

Upload a PDF file to this endpoint to trigger processing.

---

### 4. Configure Alert Notifications (Optional)

Replace the placeholder alert webhook URL with your monitoring or alerting system.

Example use cases:

- Slack alert
- monitoring system
- incident notification

Alerts are triggered if masking fails.

---

## Use Cases

This workflow is useful for many privacy-sensitive automation scenarios.

### GDPR-Compliant Document Processing
Safely process documents containing personal data without exposing PII to AI models.

### AI-Powered Document Analysis
Use AI to summarize or extract data from documents while maintaining privacy.

### Enterprise Data Redaction Pipelines
Automatically detect and tokenize sensitive data before sending documents to downstream systems.

### Financial Document Processing
Process invoices, contracts, and financial reports securely.

### Healthcare Document Automation
Analyze patient documents while ensuring sensitive data is protected.

---

## Requirements

To run this workflow you need:

- **n8n**
- **Postgres database**
- **Anthropic Claude API access**
- **Ollama (optional for local AI address detection)**
- **Webhook endpoint for document uploads**

Optional integrations:

- Monitoring or alert system
- Compliance audit database

---

## Key Features

- Automated **PII detection and tokenization**
- **AI-safe document processing**
- Secure **vault storage for sensitive data**
- Controlled **PII restoration**
- Full **audit logging**
- Works with **multiple AI models**
- Designed for **GDPR and enterprise compliance**

---

## Summary

This workflow creates a **secure bridge between sensitive documents and AI systems**.

By automatically detecting, masking, and securely storing personal data, it enables organizations to safely apply AI to document processing tasks without exposing sensitive information.

The combination of **tokenization, secure vault storage, controlled re-injection, and audit logging** makes this workflow suitable for privacy-sensitive industries and enterprise automation pipelines.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, AI Agent, Anthropic Chat Model, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
