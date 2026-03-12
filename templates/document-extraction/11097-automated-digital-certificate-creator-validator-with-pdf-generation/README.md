# 🔬 Automated digital certificate creator & validator with PDF generation

> ⚡ **201 views** · 🔬 [Document Extraction & Analysis](../)

## Description

A complete workflow to **create, send, and verify digital certificates** fully automated with n8n.Perfect for courses, events, onboarding, internal training, or product education.

![image.png](fileId:3413)

Visit my website for the: [full deploy guide]((https://paoloronco.it/n8n-template-certification-creator-checker/))

See my Templates on Github: [paoloronco/n8n-templates](https://github.com/paoloronco/n8n-templates))

[Example-certificate](./Assets/Example-Certificate.pdf)

### ✔ 1. Certificate Generation

When a **POST webhook** request arrives, the workflow:

* reads name, surname, course, and email
  
* generates a **unique Certification ID**
  
* saves everything in the Data Table
  

### ✔ 2. Data Storage

Every issued certificate is recorded in an **n8n Data Table** containing:

* Name
  
* Surname
  
* CertificationID
  

This creates a permanent, searchable certificate registry.

### ✔ 3. PDF Creation

Uses **PDF Generator API** to create a professional PDF certificate from an HTML template:

* fully customizable (layout, colors, branding)
  
* includes candidate data, course, ID, and date
  

### ✔ 4. Email Delivery

The workflow automatically sends the certificate to the recipient using Gmail OAuth2 with:

* a predefined subject
  
* the PDF attached
  
* a customizable message
  

### ✔ 5. Verification System

A public endpoint `/certificationscheck` allows:

* validation of Certification IDs
  
* returning the candidate’s name and surname if valid
  
* responding with `ok: true/false`
  

### ✔ 6. Included Mini Verification Website

A ready-to-use HTML file allows users to:

* enter a Certification ID
  
* verify its authenticity
  
* view name and surname if the certificate exists
  
* Fully customizable (CSS, texts, branding).
  

* * *

## 🛠 Requirements

Before using this workflow, you must have:

1. **n8n Data Table** with ID fields:
  
  * `Name` (string)
    
  * `Surname` (string)
    
  * `CertificationID` (string)
    
2. **PDF Generator API account**Credentials set in n8n as `pdfGeneratorApi`.
  
3. **Gmail OAuth2 credentials**Configured in n8n as `gmailOAuth2`.
  
4. Ability to call **HTTP POST endpoints** from your website, backend, forms, etc.
  

* * *

## 🚀 Installation

### **1. Import workflow**

In n8n:

* Go to **Workflows → Import**
  
* Paste the JSON provided in this repository
  

### **2. Configure Data Table**

Update the following nodes to point to your Data Table:

* `Insert_Certificaton`
  
* `Find_Certification_By_ID`
  
* `Find_Certification_By_ID1`
  

Make sure the Data Table has the fields:

| Field | Type |
| --- | --- |
| Name | string |
| Surname | string |
| CertificationID | string |

### **3. Configure Credentials**

In the workflow:

* Node **Generate_PDF** → set PDF Generator API credentials
  
* Node **Email_Certification** → set Gmail OAuth2 credentials
  

### **4. Activate Workflow**

Click **Activate** in n8n.

* * *

## 🔧 How the Workflow Works

### 🧩 1. Webhook `/certifications`

Receives candidate data and triggers the workflow.

`POST https://YOUR-N8N-DOMAIN.com/webhook/certification Headers: name: John surname: Doe course: email: john.doe@example.com`

### 🧩 2. Unique ID Generation

A Code node creates a random alphanumeric ID.If it already exists, a new one is generated.

### 🧩 3. Data Table Insert

Stores the certificate data for future lookup.

### 🧩 4. PDF Generation

Builds a PDF from the (fully editable) HTML template.

### 🧩 5. Email Sending

Delivers the certificate to the candidate.

* * *

## 🔍 Certificate Verification (`/certificationscheck`)

### API Behavior

Send a `POST` request `https://YOUR-N8N-DOMAIN.com/webhook/certificationcheck with header` `id: CERTIFICATION-ID`.

**Valid ID:**

`{ "ok": "true", "name": "John", "surname": "Doe" }`

**Invalid ID:**

`{ "ok": "false" }`

This request can be made **manually** (from tools like Postman, cURL, or your backend), **or automatically through the HTML verification page** included in the GitHub repository (the `Cerification_Check.html` template) found in your project files

## 🔗 Nodes Used

Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
