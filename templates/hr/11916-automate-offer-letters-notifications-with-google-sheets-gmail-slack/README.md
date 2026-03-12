# 👥 Automate offer letters & notifications with Google Sheets, Gmail & Slack

> ⚡ **56 views** · 👥 [HR & Recruitment](../)

## Description

## ✅ What problem does this workflow solve?

Hiring teams often struggle with document follow-ups, offer letter generation, and stakeholder communication. Manual checks, email back-and-forth, and missing files slow down hiring and create chaos during onboarding.

This workflow automates the **entire offer letter lifecycle**-from document validation to offer delivery-so HR teams can move faster with zero manual chasing.

---

## ⚙️ What does this workflow do?

- Monitors candidate records in Google Sheets.
- Detects pending onboarding documents automatically.
- Sends reminder emails for missing documents.
- Generates professional offer letters (HTML → PDF).
- Emails offer letters to candidates automatically.
- Notifies hiring managers on Slack.
- Stores offer letters securely in Google Drive.
- Tracks onboarding status and document links in Google Sheets.

---

## 💡 Main Use Cases

- Automate offer letter creation and delivery.
- Eliminate manual follow-ups for missing documents.
- Keep hiring managers informed in real time.
- Maintain a clean onboarding audit trail.
- Improve candidate experience with faster responses.

---

## 🧠 How It Works – Step by Step

### 1. Candidate Data Trigger
The workflow monitors Google Sheets for candidate records containing:
- Name, email, phone
- Profession and offered salary
- Document submission status

---

### 2. Pending Document Check
If **documents are pending**:
- A reminder email is sent to the candidate listing missing documents.
- Candidate status is updated to **Documents_Pending**.
- Workflow stops until documents are submitted.

---

### 3. Offer Letter Generation
If **no documents are pending**:
- A customized offer letter is generated dynamically using candidate data.
- The offer letter is converted from HTML to a professional PDF.
- The PDF is prepared for distribution and storage.

---

### 4. Notifications & Delivery
- Offer letter PDF is emailed to the candidate.
- Hiring manager receives a Slack notification about the new joining.

---

### 5. Storage & Status Tracking
- Offer letter PDF is uploaded to Google Drive.
- Google Sheets is updated with:
  - Offer letter link
  - Candidate status set to **Offer_Sent**
- Creates a complete onboarding audit trail.

---

## 🗂 Integrations Used

- **Google Sheets** – Candidate tracking and onboarding status
- **Gmail** – Candidate communication and reminders
- **Slack** – Hiring manager notifications
- **Google Drive** – Secure offer letter storage
- **ConvertAPI** – HTML to PDF generation
- **n8n Code Nodes** – Dynamic offer letter creation

---

## 👤 Who can use this?

This workflow is ideal for:
- 🏢 HR teams
- 🚀 Startups and growing companies
- 🧑‍💼 Recruitment agencies
- 📋 Operations teams handling onboarding

If your hiring process involves repetitive checks and emails, this automation saves **hours per hire**.

---

## 🚀 Benefits

- ✅ Zero manual document chasing
- ✅ Consistent, branded offer letters
- ✅ Faster hiring cycles
- ✅ Centralized document storage
- ✅ Clear onboarding visibility

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
