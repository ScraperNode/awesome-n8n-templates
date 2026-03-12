# 🔬 Archive HR and legal documents with UploadToURL, Google Drive and Airtable

> ⚡ **226 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Eliminate the manual chaos of HR and legal document management. This workflow automates the transition from a raw document upload to a structured, audit-ready archive by combining **UploadToURL** for instant CDN hosting, **Google Drive** for long-term storage, and **Airtable** for status tracking and database management.

## 🎯 What This Workflow Does

Transforms loose document scans into a structured corporate filing system:

1. **📝 Captures Legal Assets** - Receives signed contracts or IDs via mobile scan (binary) or remote URL.
2. **🛡️ Duplicate Prevention** - Checks Airtable first to ensure a contract isn't already filed for that specific Employee ID.
3. **☁️ Instant CDN Hosting** - **UploadToURL** hosts the document to provide a high-speed link for immediate HR review.
4. **📁 Smart Folder Logic** - Automatically navigates or creates a structured Google Drive path: `HR/Contracts/{Year}/{Department}/{EmployeeName}/`.
5. **🗃️ Database Synchronization** - Updates (or creates) an Airtable record to tick "Contract Received," logging both the Drive URL and the CDN backup.
6. **📧 Automated Confirmation** - Sends a professional HTML email to HR and the employee with access links and filing metadata.

## ✨ Key Features

- **UploadToURL Integration**: Provides a redundant, accessible CDN link stored alongside your primary Drive storage for total data reliability.
- **Auto-Nomenclature**: Renames files using a strict audit-ready format: `{EmployeeID}_{LastName}_{Type}_{Date}.pdf`.
- **Intelligent Folder Creation**: Never manually create a folder again; the workflow builds the entire hierarchy on the fly.
- **Audit Trail Generation**: Captures "Filed By," "Filed At," and unique "Upload IDs" for every document.
- **Conflict Handling**: Built-in `409 Conflict` logic prevents accidental overwrites or double-filing of critical legal papers.

## 💼 Perfect For

- **HR Teams**: Managing onboarding documents and employment contracts at scale.
- **Legal Departments**: Archiving NDAs, vendor agreements, and compliance certifications.
- **Small Businesses**: Moving away from "loose files in folders" to a searchable, automated database.
- **Remote Teams**: Enabling employees to "upload and forget" their paperwork via a simple link.

## 🔧 What You'll Need

### Required Integrations
- **[UploadToURL](https://uploadtourl.com)** - To host documents and provide public CDN backup links.
- **n8n Community Node** - `n8n-nodes-uploadtourl` must be installed.
- **Google Drive** - OAuth2 credentials for secure document storage.
- **Airtable** - Personal Access Token to manage your employee/document database.
- **Gmail / SMTP** - To send automated filing confirmations.

### Configuration Variables
- `GDRIVE_ROOT_FOLDER_ID`: The ID of your main HR folder in Google Drive.
- `AIRTABLE_BASE_ID`: Your specific Airtable base for HR/Legal tracking.

## 🚀 Quick Start

1. **Import Template** - Copy the JSON and import it into your n8n workspace.
2. **Install Node** - Ensure the **UploadToURL** community node is active.
3. **Set Credentials** - Link your UploadToURL, Google Drive, Airtable, and Gmail accounts.
4. **Define Variables** - Set your Root Folder ID and Airtable Base details in n8n variables.
5. **Test the Pipeline** - Send a test `POST` with a sample PDF to the Webhook URL.
6. **Activate** - Enable the workflow to begin hands-free archiving.

## 🎨 Customization Options

- **Expiration Alerts**: Add a node to calculate 1-year expiry dates and set an automated reminder in Slack.
- **OCR Processing**: Integrate an OCR step to read the content of scans and verify names automatically.
- **Watermarking**: Add a "Confidential" or "Draft" watermark to documents before they are uploaded to the CDN.
- **Multi-Base Routing**: Route documents to different Airtable bases depending on the "Department" field.

## 📈 Expected Results

- **100% Consistency** in file naming and folder structures across the entire organization.
- **Zero manual data entry**—employee records and checkboxes update automatically.
- **Audit-ready in minutes**: Every file has a timestamped trail and redundant storage links.
- **Instant Accessibility**: HR can view documents via the CDN link before Drive permissions even propagate.

## 🏆 Use Cases

### High-Growth Onboarding
A startup hiring 20 people a month can automate all contract filings, ensuring the "Contract Received" flag is always accurate for payroll.

### Compliance Audits
When auditors ask for specific contracts, use the Airtable "Structured Filename" column to find and share the relevant Drive or CDN links in seconds.

### Field Service Scans
Technicians in the field can upload signed site reports via a mobile app; the workflow handles the filing and notifies the office immediately.

## 💡 Pro Tips

- **Folder IDs**: You can find your `GDRIVE_ROOT_FOLDER_ID` by looking at the last string in the URL when you are inside that folder in your browser.
- **Structured JSON**: Use the returned `auditTrail` object to build a log of all uploads in a separate "Master Audit" spreadsheet.
- **Employee IDs**: If no ID is provided, the workflow generates a temporary one using a timestamp to ensure the archive never breaks.

---

**Ready to secure your document pipeline?** Import this template and connect **UploadToURL** to build a world-class archiving system in under 20 minutes.

**Need help with Airtable field mapping?** The workflow includes detailed sticky notes explaining the exact field names required for the automation to run.

## 🔗 Nodes Used

Airtable, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
