# 🔬 Generate professional email signatures in HTML & PDF with Gmail delivery

> ⚡ **177 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **Dynamic Email Signature Creator (PDF + HTML)**

Create gorgeous, branded, professional email signatures automatically — from a simple POST request. This workflow turns user details into a **premium HTML signature**, converts it into **PDF**, and delivers it instantly via **Gmail**, along with a clean JSON response.

---

## **✨ What This Template Does**

This workflow automatically:

* Receives user details (name, role, email, phone, links) via Webhook
* Extracts & validates inputs
* Generates a **modern, premium HTML signature** with icons + layout
* Converts HTML → **high-quality PDF** using HTMLCSS → PDF service
* Emails both the **HTML signature preview** + **PDF attachment** to the user
* Returns a clean JSON success response with the `pdf_url`
* Works 100% automated — no manual designing needed

Perfect for:

* HR onboarding
* Corporate identity management
* Personal branding
* Team signature standardization
* Automated client signature setup

---

## **🔥 Features**

* **Beautiful modern design**
* Clean branding layout with icons (LinkedIn, Instagram, Website)
* Professional color palette + typography
* Auto-generated PDF (print-ready)
* Mobile-friendly & email-safe HTML
* Supports any social links
* Extremely easy to integrate with forms, portals, CRMs
* Fast: Signature generated in &lt; 3 seconds

---

## **🧩 How It Works**

1. Webhook receives user information
2. Input extractor formats the fields
3. HTML template dynamically inserts user values
4. HTML → PDF generator creates high-resolution output
5. Email node sends signature + PDF
6. Workflow responds with JSON (`pdf_url`, `status`, etc.)

---

## **⚙️ Setup Needed**

Connect these credentials in n8n:

* **HTML → PDF** (PDFMunk account)
* **Gmail** (for sending the final signature email)

Update inside the HTML template:

* Brand colors
* Logo URL (optional)
* Social icon colors / links (optional)

That’s it — your automated signature generator is live.

---

## **🏷️ Tags**

email-signature, branding, pdf-generator, html-template, gmail, automation, onboarding, corporate

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
