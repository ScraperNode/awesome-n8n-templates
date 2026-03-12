# 🎫 Send verified building visitor entry passes with Gmail, Slack and VerifiEmail

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

# **Verified Building Visitor Entry Pass & Security Notification System**

---

## **Description**

Automate building visitor management with secure verification, digital entry passes, and real-time security notifications.

This workflow replaces manual visitor logs, email back-and-forth, and paper badges with a **fully automated, QR-based visitor entry system**. From registration to verification, pass generation, and security alerts — everything runs seamlessly with minimal human intervention.

Ideal for corporate offices, co-working spaces, secure facilities, and events that require **controlled access and audit-ready visitor records**.

---

## **What This Workflow Does**

Transforms visitor registration into a secure, professional access flow:

📝 **Visitor Registration Intake** – Receives visitor details (name, email, host, visit date, location, purpose) via webhook.

📧 **Email Verification** – Validates visitor email deliverability to prevent fake or disposable entries.

🆔 **Unique Entry Pass Generation** – Creates a secure visitor pass ID with timestamp tracking.

🔳 **QR Code Creation** – Generates a scannable QR code tied to the visitor’s entry pass.

📄 **Professional Entry Pass PDF** – Builds a branded, printable digital entry pass with visitor details and QR code.

📧 **Visitor Notification** – Emails the verified entry pass directly to the visitor.

🔔 **Security Team Alert** – Sends a detailed Slack notification to reception/security with visit details and QR preview.

⚠️ **Error Handling** – Returns clean error responses for invalid or unverified entries.

---

## **Key Features**

🔐 **Secure Visitor Verification** – Email validation before pass creation
🔳 **QR-Based Entry Passes** – Fast scan-and-verify at reception
📄 **Professional PDF Badges** – Mobile-friendly and print-ready
🔔 **Real-Time Security Alerts** – Instant Slack notifications
⚙️ **End-to-End Automation** – No manual follow-ups required
📊 **Audit-Friendly Records** – Clear visitor tracking with timestamps

---

## **Perfect For**

🏢 Corporate Offices & IT Parks
🏬 Co-Working Spaces
🏭 Secure Facilities & Campuses
🎤 Events, Conferences & Meetups
🧾 Reception & Security Teams

---

## **What You’ll Need**

### **Required Integrations**

📧 **VerifiEmail** – Visitor email validation
📄 **HTML to PDF** – Entry pass generation
📧 **Gmail** – Sending visitor passes
💬 **Slack** – Security/reception notifications

---

## **Optional Enhancements**

☁️ **Google Drive** – Store visitor passes
📊 **Sheets / Database** – Visitor logging & analytics
📍 **QR Scan Validation** – Check-in confirmation workflow
🌍 **Multi-Location Support** – Dynamic building routing
🪪 **Photo Uploads** – Add visitor photo to pass

---

## **Quick Start**

1️⃣ Import the workflow into your n8n workspace
2️⃣ Connect VerifiEmail, Gmail, HTML-to-PDF, and Slack credentials
3️⃣ Update email templates, branding, and Slack channel
4️⃣ Copy the webhook URL and connect it to your visitor form
5️⃣ Test with a real email address
6️⃣ Activate the workflow

---

## **Expected Results**

⚡ Faster visitor onboarding
🔐 Improved building security
📉 Reduced manual reception workload
📄 Professional, digital-first visitor passes
🔔 Better coordination between hosts and security

---

## **Workflow Structure Visualization**

📝 Visitor Registration
↓
📧 Email Verification
↓
🆔 Pass ID Generation
↓
🔳 QR Code Creation
↓
📄 Entry Pass PDF
↓
📧 Visitor Email
↓
🔔 Security Notification

---

## 🔗 Nodes Used

Function, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
