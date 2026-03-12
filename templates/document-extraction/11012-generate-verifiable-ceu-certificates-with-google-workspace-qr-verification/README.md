# 🔬 Generate verifiable CEU certificates with Google Workspace & QR verification

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Verified Corporate Training Certificate with CEUs – Fully Automated & Verifiable**

A production-ready, secure, and professional automation that instantly issues accredited CEU certificates the moment a training is completed.

**What it does**
- Accepts form/webhook submissions (name, email, course, CEUs, hours, etc.)
- Validates all required fields and checks email deliverability (blocks disposable/temporary emails)
- Generates a unique Certificate ID + scannable QR code for lifelong verification
- Renders a beautiful, branded PDF certificate using HTML → PDF
- Automatically uploads the certificate to Google Drive
- Sends a polished, personalized email with the PDF attached
- Notifies your team in Slack
- Logs every issuance in Google Sheets (perfect for audits & accreditation)
- Returns instant success/failure response to the caller

**Key Features**
- Real-time email validation via Verif.Email API
- Unique, tamper-proof Certificate ID (e.g., CERT-CEU-1739981234567-AB3XF9)
- Embedded QR code linking to public verification page
- High-resolution, print-ready PDF with custom branding
- Full audit trail in Google Sheets
- Slack notification for organizers
- Zero manual work – 100% automated

**Ideal for**
- Corporate training departments
- Continuing Education (CEU) providers
- Professional certification bodies
- Compliance & accreditation teams

**Required Credentials (one-time setup)**
- verifi.email API
- https://pdfmunk.com
- Google Drive + Gmail
- Google Sheets
- Slack (optional)

Deploy in under 5 minutes and start issuing trusted, verifiable certificates instantly.

Tags: certificate, CEU, training, verification, QR code, PDF, automation, compliance, education, corporate

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Slack, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
