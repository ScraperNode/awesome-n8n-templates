# 🎣 Validate leads email addresses with Hunter.io and Google Sheets

> ⚡ **315 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### **How it works:**

This project automatically verifies lead email addresses stored in Google Sheets using Hunter.io. It checks each email’s validity and writes back the results—including confidence scores, verification status, and metadata—so your outreach lists are always clean and reliable.

This workflow runs daily, reads from a source sheet, verifies emails via API, and writes results into another sheet. No manual checking. No wasted leads.

### **Step-by-step:**

- **Schedule Trigger:**
The workflow is scheduled to run automatically once per day, but you can also run it manually when needed.

- **Fetch Emails:**
Reads emails from a Google Sheet (named Sheet1) with columns like Email, FirstName, LastName, and Company.

- **Data Cleaning:**
Filters out blank or invalid email formats before verification to save API usage.

- **Hunter.io Verification:**
Each email is passed to Hunter.io’s /email-verifier API, returning status (valid, invalid, risky), SMTP check, score (0–100), and disposable flag.

- **Format Results:**
The API response is converted into a human-readable summary like:
✅ Valid (96% confidence) or ❌ Invalid / Risky

- **Write to Sheet:**
The verified results are written back into your output Google Sheet—either appending new rows or updating existing ones.

### **Setup instructions:**

- **Google Sheet:**
Use a sheet named Sheet1 and ensure it includes these columns:
Email, FirstName, LastName, Company.

- **Hunter.io Key:**
Sign up at hunter.io.

Go to Dashboard → API → Copy your key

In n8n, open the Email Verifier node → Create Credential → Paste your API key → Save

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
