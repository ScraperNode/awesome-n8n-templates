# 🔬 Automate school trip consent forms with email verification, PDF generation & Google Drive

> ⚡ **138 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Verified Parent Consent Form Automation for School Trips

---

## 🎯 **Description**

This workflow automates the **entire parent consent process for school field trips**, replacing manual paper forms with a secure, verified, and legally compliant digital system.

When a parent submits consent data via **POST request (from Postman or any form)**, the workflow:

1. **Receives parent & trip details** through a Webhook trigger.
2. **Verifies the parent’s email** using the **VerifiEmail API** to prevent fake or disposable entries.
3. **Generates a unique Consent ID** and timestamps for tracking and legal validation.
4. **Creates a professional HTML-based digital consent form**, including child details, trip information, and a parent signature section.
5. **Converts the HTML document to a PDF** using the **HTMLCSSToPDF API** (ready for printing or archiving).
6. **Uploads the PDF to Google Drive** automatically, organizing it under a designated folder (e.g., `/School_Consents/2025/November`).
7. **Sends an automated Gmail notification** to the respective class teacher, including all verified details and the Drive reference.
8. **Responds instantly** to the original POST request with a success confirmation and all metadata (Consent ID, verification status, storage location, timestamp).
9. **Handles invalid emails gracefully**, returning a 400 error response for unauthorized or unverified submissions.
10. **Provides complete traceability**, digital audit, and tamper-proof documentation for school compliance.

**Use Case:**
Ideal for schools, institutions, or organizations that need **paperless consent workflows** with **email verification**, **cloud storage**, and **automated staff alerts** — ensuring authenticity, security, and compliance.

---

## 🧩 **Features**

* Email verification (VerifiEmail)
* Auto-generated unique Consent ID
* HTML-to-PDF conversion (HTMLCSSToPDF)
* Google Drive cloud storage integration
* Automated Gmail teacher notification
* API-friendly POST-based trigger
* Real-time error handling & response
* Legally formatted consent slip

---
                                                                                     

## 🧪 **Test Input Example (Postman)**

Use this JSON in Postman when testing the webhook:

```json
{
  "parent_name": "Ritu Sharma",
  "parent_email": "ritu.sharma@gmail.com",
  "child_name": "Aarav Sharma",
  "child_class": "Grade 5-A",
  "trip_name": "Science Museum Visit",
  "trip_date": "2025-11-10",
  "teacher_email": "teacher@school.edu"
}
```

---

## ✅ **Expected Output**

**Success Response (200):**

```json
{
  "status": "success",
  "message": "Parent consent form verified and stored successfully",
  "data": {
    "consent_id": "CONSENT-1699123456789",
    "child_name": "Aarav Sharma",
    "trip_name": "Science Museum Visit",
    "email_verified": true,
    "stored_at": "Google Drive",
    "teacher_notified": true
  }
}
```

**Error Response (400):**

```json
{
  "status": "error",
  "message": "Invalid email address provided. Please use a valid email.",
  "reason": "Email verification failed"
}
```

---

## 🌐 **Workflow Tags for n8n Creators**

`#Education #Automation #EmailVerification #PDFGeneration #GoogleDrive #Webhook #SchoolAdmin #PaperlessWorkflow #Compliance`

---

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
