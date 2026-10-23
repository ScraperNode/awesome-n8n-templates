# 🔬 Upload documents with validation, deduplication and Postgres storage

> ⚡ **70 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
This workflow provides a reliable and secure system for uploading and managing documents.

It accepts files via form or webhook, validates file size and type, generates unique metadata, detects duplicates using file hashing, and stores records in Postgres. It ensures clean, consistent, and duplicate-free document intake.

---

## How It Works

1. **Document Upload**
   Users upload files through a form or webhook endpoint.

2. **Configuration**
   Defines:
   - Maximum file size  
   - Allowed file types  
   - Storage settings  

3. **File Validation**
   The workflow checks:
   - File size against limits  
   - MIME type against allowed formats  

   Invalid files are rejected with a clear error response.

4. **Metadata Generation**
   Generates:
   - Unique document ID (UUID)  
   - File hash (SHA-256)  
   - File name, size, and type  
   - Upload timestamp and source  

5. **Duplicate Detection**
   Uses the file hash to check if the document already exists in the database.

6. **Conditional Processing**
   - Duplicate found → returns existing document reference  
   - New document → proceeds to storage  

7. **Database Storage**
   Stores document metadata in Postgres with a `received` status.

8. **Response Handling**
   - Success → returns document ID  
   - Duplicate → returns existing document ID  
   - Error → returns validation details  

---

## Setup Instructions

1. Configure form trigger or webhook endpoint  
2. Set max file size and allowed MIME types in config node  
3. Connect Postgres credentials  
4. Create a `documents` table with required fields  
5. Update configuration values as needed  
6. Test with sample document uploads  
7. Activate the workflow  

---

## Use Cases

- Secure document upload systems  
- Preventing duplicate file storage  
- Building document intake APIs  
- Managing tax or financial documents  
- Creating audit-ready upload pipelines  

---

## Requirements

- n8n instance with form/webhook support  
- Postgres database  
- File upload handling enabled  

---

## Notes

- SHA-256 hashing ensures accurate duplicate detection.
- You can extend storage to cloud services like S3 or Google Cloud Storage.
- Add authentication to webhook endpoints for production use.
- Customize validation rules based on your business requirements.

## 🔗 Nodes Used

Postgres, Webhook, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
