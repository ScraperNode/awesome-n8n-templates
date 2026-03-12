# 🔬 Hackathon participant badge generator with QR code, PDF & email delivery

> ⚡ **69 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **Title**

**Hackathon Participant Badge Generator with QR Code & Email Delivery**

---

# **Description**

A fast, reliable, and fully automated workflow that generates **professional participant badges** for hackathons, tech events, and workshops — complete with **unique Badge ID, QR verification, PDF output, and email delivery**.

This workflow takes any simple registration input and transforms it into a **verified, branded participant badge** in under 10 seconds.

---

## **What this workflow does**

* Accepts event registrations via a **POST Webhook** (name, email, event, team, role).
* Performs **input validation** and **disposable/fake email detection** using VerifiEmail.
* Creates a **unique Badge ID** (e.g., `HACK-2025-1763560499-AB3XYF`).
* Generates a **public verification URL** and **QR code** for check-in.
* Builds a **high-resolution badge** (1056×816px) with event branding, logo, gradient background, and QR code.
* Converts the HTML badge design into a **print-ready PDF** using PDFMunk (htmlcsstopdf).
* Sends a **beautiful HTML email** via Gmail that includes:

  * Inline badge preview (visible immediately)
  * Attached PDF badge
  * Verification URL + Badge ID
* Logs all badge metadata to **Google Sheets** for audit and check-in tracking.
* Returns a clean **JSON success response** to the caller.

---

## **Use Cases**

Ideal for:

* Hackathons & tech conferences
* Engineering fests & competitions
* Workshops, meetups, bootcamps
* Any event requiring verified digital badges with QR check-in

---

## **Key Features**

* **Real-time email verification** blocks fake/disposable registrations.
* **QR code check-in** powered by a reliable public QR API.
* **Fully customizable badge design** — swap logos, colors, fonts easily.
* **Inline email preview** means participants see their badge instantly.
* **Complete event log** stored in Google Sheets with timestamps, PDF links, and verification URLs.
* **Extendable** (add Slack alerts, Drive uploads, role-based templates, etc.)

---

## **Setup Instructions (5 Minutes)**

1. Add your credentials:

   * VerifiEmail
   * PDFMunk (HTML → PDF)
   * Gmail
   * Google Sheets
2. Update your:

   * Logo URL
   * Verification domain
3. Activate the workflow and start sending POST requests to the Webhook.
4. Badges will be generated and emailed automatically — no manual work needed.

---

## **Why this workflow is special**

It’s built for **speed, reliability, visual quality, and zero manual overhead**.
Participants receive a sleek, branded badge instantly, organizers get automated logs, and your event gets a professional identity.

Perfect for teams who want **enterprise-grade badge automation** without writing a single line of code.

---

## **Tags**

hackathon, badge, qr-code, pdf, email, gmail, automation, participant, event, check-in, google-sheets

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
