# 🎣 Deduplicate lead data with Google Sheets: automated email alerts & log management

> ⚡ **144 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Description:**

Keep your databases clean and reliable with this intelligent n8n workflow template! Effortlessly detect duplicate records, generate structured logs, and receive instant email updates—no manual review needed.

This automation retrieves records from Google Sheets, runs a custom deduplication engine to detect duplicate entries (based on email and phone), saves detailed logs to Google Drive, and notifies your team via email. Perfect for businesses, analysts, and data teams who need to maintain clean datasets and ensure accuracy in customer or lead management systems.

**What This Template Does:**

 📊 Fetches data from Google Sheets for duplicate analysis
 🧠 Identifies duplicate entries using email + phone logic
 📂 Generates detailed duplication logs and saves them in Google Drive
 📧 Sends automated email notifications to your team with process details
 🌟 100% automated: just run the workflow and get instant results

**Built-in Logic Ensures:**

 ✔️ Duplicate detection is accurate and structured
 ✔️ Logs are organized for easy access and auditing
 ✔️ Team members stay informed with timely notifications

**Requirements:**

- Google Sheets containing your dataset
- Google Drive account for log storage
- SMTP/Gmail account for notifications
- n8n instance (self-hosted or cloud)

**Perfect For:**

- Data teams maintaining large customer or lead databases
- Businesses ensuring accuracy in CRM records
- Analysts and operations teams wanting hands-free duplicate management

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
