# 💬 Automated lead response template using Google Forms, Sheets, and Gmail

> ⚡ **381 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 📋 What this workflow does

This automated workflow streamlines the process of responding to leads who submit a Google Form. It instantly sends a personalized confirmation email to the lead and notifies your internal team with the submission details — ensuring no lead goes unnoticed.

It’s perfect for freelancers, agencies, small businesses, or any team collecting lead information through Google Forms and looking to reduce response time while staying organized.

---

## ⚙️ Workflow Overview

- **Trigger**: A new row is added to a connected Google Sheet via Google Forms
- **Email to lead**: Sends a custom confirmation message using Gmail
- **Email to team**: Notifies internal staff with all the lead’s submitted details

The entire process happens instantly and automatically, creating a better user experience and improving lead management.

---

## 🛠️ Setup Instructions

1. **Connect your Google Form to a Sheet**
   - In Google Forms, click the green Sheets icon under “Responses”
2. **Create or connect Gmail & Google Sheets credentials in n8n**
3. **Update node field references if needed**
   - Your Google Sheet must include these columns:
     - `Timestamp`
     - `Full Name`
     - `Email`
     - `Phone Number (optional)`
     - `What are you interested in?`
     - `Additional message or query`
4. **Edit the Gmail nodes**
   - Replace the placeholder email `your@email.com` with your actual sending address
   - Personalize the subject and body text if desired
5. **Add your own notification recipient in the internal email node**

---

## 🗒️ Notes

- This workflow uses Spanish field labels — adapt field names if your form is in another language
- Sticky notes inside the workflow explain where to update text and variables
- All personal data has been removed from this public version

---

## ✅ Tools Used

- Google Forms
- Google Sheets
- Gmail
- n8n core nodes (no external APIs)

## 🔗 Nodes Used

Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
