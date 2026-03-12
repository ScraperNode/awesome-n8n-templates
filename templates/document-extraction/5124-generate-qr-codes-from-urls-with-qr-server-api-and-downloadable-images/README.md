# 🔬 Generate QR codes from URLs with QR Server API and downloadable images

> ⚡ **880 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Easily generate QR codes from any URL! This workflow lets users submit a URL via a simple form and instantly receive a downloadable QR code image—perfect for quick sharing or promotions. Setup is fast and user-friendly, so you’ll be up and running in minutes!

---
🚀 How it works
- The end user submits a URL through a simple online form.
- The workflow automatically sends the submitted URL to a QR code generation API.
- The user receives a downloadable QR code image corresponding to their URL.

---
⚙️ Setup instruction
- Import Workflow: Click "Import from JSON" in your n8n environment and paste the provided workflow JSON.
- Click "Save" and activate the workflow.
- Double click the "On form submission" node to obtain the production URL.
- You may now use this URL to do QR code generation.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
