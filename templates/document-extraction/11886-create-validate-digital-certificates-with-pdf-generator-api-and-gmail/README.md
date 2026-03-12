# 🔬 Create & validate digital certificates with PDF Generator API and Gmail

> ⚡ **189 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Automated Certificate Creation & Verification (PDF Template-based)

## 🔍 Overview

This n8n workflow provides a **complete end-to-end system for creating, distributing, and verifying digital certificates**, using **PDF Generator API templates** instead of raw HTML.

It is designed as a **production-ready MVP**, fully functional and tested, that can be imported and adapted with minimal configuration.

The workflow exposes public endpoints to:

* generate personalized certificates as PDFs
* assign unique Certification IDs
* email certificates automatically
* verify certificate authenticity via API

---

## 🎯 Typical use cases

This workflow is ideal for:

* training providers and academies
* online courses and bootcamps
* internal company certifications
* workshops and events
* proof-of-completion documents

Any scenario where certificates must be **generated automatically and verified reliably**.

---

## ⚙️ What this workflow does

### 1️⃣ Certificate creation (Webhook)

**Endpoint**

```
POST /certifications2
```

When triggered, the workflow:

1. Receives candidate data (name, surname, course, email)
2. Generates a **unique Certification ID**
3. Ensures the ID does not already exist
4. Stores certificate data in an n8n Data Table
5. Generates a PDF using a **PDF Generator API template**
6. Sends the certificate via email as a PDF attachment

---

### 2️⃣ PDF generation (Template-based)

Instead of HTML, the workflow sends a **JSON payload** to a predefined PDF template.

Example payload:

```json
{
  "Candidate": "John Doe",
  "CourseName": "Advanced n8n Automation",
  "DueDate": "2025-01-10",
  "ID": "LQ4Z5H8R2A1F"
}
```

The PDF layout (fonts, colors, logos, formatting) is fully managed via the **PDF Generator API Template UI**, keeping the workflow clean and maintainable.

---

### 3️⃣ Email delivery

* Uses Gmail OAuth2
* Sends a customizable email
* Attaches the generated certificate PDF automatically

---

### 4️⃣ Certificate verification

**Endpoint**

```
GET /certificationscheck?id=CERTIFICATION-ID
```

This endpoint:

* checks if the Certification ID exists
* returns validation status and candidate info

Example response (valid):

```json
{
  "ok": true,
  "name": "John",
  "surname": "Doe"
}
```

This enables **public, API-based certificate verification**.

---

## 🛠 Requirements

Before importing the workflow, you need:

1. **n8n instance** (cloud or self-hosted)
2. **n8n Data Table** with the following fields:

   * `Name` (string)
   * `Surname` (string)
   * `CertificationID` (string)
3. **PDF Generator API account**
4. **Gmail OAuth2 credentials**
5. Ability to expose webhook endpoints publicly

---

## 🚀 Setup guide

### Step 1 – Import the workflow

* Open **n8n**
* Go to **Workflows → Import**
* Paste the provided workflow JSON

---

### Step 2 – Configure the Data Table

Create (or reuse) an n8n Data Table with these fields:

| Field           | Type   |
| --------------- | ------ |
| Name            | string |
| Surname         | string |
| CertificationID | string |

Update the following nodes to reference your Data Table:

* `Insert_Certification`
* `Find_Certification_By_ID`
* `Find_Certification_By_ID1`

---

### Step 3 – Configure PDF Generator API

* Create a **PDF template** in PDF Generator API
* Add placeholders such as:

  * `{Candidate}`
  * `{CourseName}`
  * `{DueDate}`
  * `{ID}`
* In n8n, set credentials on the **Generate a PDF document** node

⚠️ Placeholder names **must exactly match** the JSON keys used in the workflow.

---

### Step 4 – Configure email credentials

* Open the **Email Certificate** node
* Set Gmail OAuth2 credentials
* Customize subject and message body if needed

---

### Step 5 – Activate the workflow

* Click **Activate**
* Your endpoints are now live:

  * `/certifications2`
  * `/certificationscheck`

---

## 🧪 Status & notes

* This workflow is an **MVP**, but already production-ready
* Designed to be:

  * modular
  * reusable
  * easy to extend
* Recommended version for new implementations
* HTML-based version is kept only for reference/backward compatibility

---

## 💡 Customization ideas

You can easily extend this workflow by:

* adding QR codes to certificates
* storing additional metadata
* integrating with LMS platforms
* adding a public verification webpage
* switching email provider

## 🔗 Nodes Used

Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
