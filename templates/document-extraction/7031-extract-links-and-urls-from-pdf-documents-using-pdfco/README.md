# 🔬 Extract links and URLs from PDF documents using PDF.co

> ⚡ **339 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📝 Description

This workflow allows you to **extract all links (URLs) contained in a PDF file** by converting it to HTML via **PDF.co** and then extracting the URLs present in the resulting HTML.

Unlike the traditional `Read PDF` node, which only returns visible link text, this flow provides the **full active URLs**, making further processing and analysis easier.

---

## 📌 Use Cases

* Extract all hyperlinks from PDF documents.
* Automate URL verification and monitoring within documents.
* Extract links from reports, contracts, catalogs, newsletters, or manuals.
* Prepare URLs for validation, classification, or storage.

---

## 🔗 Workflow Overview

1. User uploads a PDF file via a web form.
2. The PDF is uploaded to PDF.co.
3. The PDF is converted to HTML (preserving links).
4. The converted HTML is downloaded.
5. URLs are extracted from the HTML using a custom code node.

---

## ⚙️ Node Breakdown

### 1. **Load PDF** (`formTrigger`)

* Uploads a `.pdf` file.
* Single file upload.

### 2. **Upload** (`PDF.co API`)

* Uploads the PDF file to PDF.co using binary data.

### 3. **PDF to HTML** (`PDF.co API`)

* Converts the uploaded PDF to HTML using its URL.

### 4. **Get HTML** (`HTTP Request`)

* Downloads the converted HTML from PDF.co.

### 5. **Code1** (`Function / Code`)

* Parses the HTML content to extract all URLs (http, https, www).
* Uses a regex to identify URLs within the HTML text.
* Outputs an array of objects containing the extracted URLs.

---

## 📎 Requirements

* Active **[PDF.co](https://pdf.co/)** account with API key.
* Set up PDF.co credentials in n8n (`PDF.co account`).
* Enable webhook to expose the upload form.

---

## 🛠️ Suggested Next Steps

* Add nodes to validate extracted URLs (e.g., HTTP requests to check status).
* Store URLs in a database, spreadsheet, or send via email.
* Extend the flow to filter URLs by domain, type, or pattern.

---

## 📤 Importing the Template

Import this workflow into n8n via **Import workflow** and paste the provided JSON.

---

If you want help adding extra steps or optimizing the URL extraction, just ask!

---

If you want, I can also prepare this as a Canva visual template for you. Would you like that?

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
