# 🔬 Detect and mask PII for GDPR-safe AI document analysis with Anthropic and PostgreSQL

> ⚡ **70 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This workflow enables GDPR-compliant document processing by detecting, masking, and securely handling personally identifiable information (PII) before AI analysis.

It ensures that sensitive data is never exposed to AI systems by replacing it with tokens, while still allowing controlled re-injection of original values when permitted. The workflow also maintains full audit logs for compliance and traceability.

---

## How It Works

1. **Document Upload & Configuration**  
   Receives documents via webhook and initializes configuration such as document ID, thresholds, and database tables.

2. **Text Extraction**  
   Extracts raw text from uploaded documents for processing.

3. **Multi-Detector PII Detection**  
   Detects emails, phone numbers, ID numbers, and addresses using regex and AI-based detection.

4. **PII Aggregation & Conflict Resolution**  
   Merges detections, resolves overlaps, removes duplicates, and builds a unified PII map.

5. **Tokenization & Vault Storage**  
   Replaces sensitive data with secure tokens and stores original values in a database vault.

6. **Masking & Validation**  
   Generates masked text and verifies that all PII has been successfully removed before AI processing.

7. **AI Processing (Masked Data)**  
   Processes the document using AI while preserving tokens to prevent exposure of sensitive information.

8. **Re-Injection Controller**  
   Determines which fields are allowed to restore original PII based on permissions.

9. **Secure Retrieval & Restoration**  
   Retrieves original values from the vault and restores them only where permitted.

10. **Audit Logging**  
   Stores metadata, detected PII types, and re-injection events for compliance tracking.

11. **Error Handling & Alerts**  
   Blocks processing and triggers alerts if masking fails or compliance rules are violated.

---

## Setup Instructions

1. Activate the webhook and upload a document (PDF or supported file)  
2. Configure AI credentials (Anthropic / OpenAI)  
3. Set database credentials for PII vault and audit logs  
4. Adjust detection thresholds and compliance settings if needed  
5. Execute the workflow and review outputs and logs  

---

## Use Cases

- GDPR-compliant document processing pipelines  
- Secure AI document analysis with PII protection  
- Automated redaction and tokenization systems  
- Financial, legal, or healthcare document processing  
- Privacy-first AI workflows for sensitive data  

---

## Requirements

- n8n (latest version recommended)  
- Anthropic or OpenAI API credentials  
- PostgreSQL (or compatible database) for vault and audit logs  
- Input documents (PDF or text-based files)

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
