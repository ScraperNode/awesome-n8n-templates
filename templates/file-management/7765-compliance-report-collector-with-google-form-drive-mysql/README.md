# 📁 Compliance report collector with Google Form → Drive + MySQL

> ⚡ **353 views** · 📁 [File Management](../)

## Description

# 📝 Compliance Report Collector (Google Form → Drive + MySQL)

This n8n workflow automates the collection and archival of compliance reports submitted via Google Forms. Uploaded documents (PDF, DOCX, etc.) are archived into Google Drive and submission metadata is logged into a MySQL database. It ensures compliance documentation is properly stored, searchable and auditable without manual effort.

## ⚡ Quick Implementation Steps
1. Import the JSON file into n8n.
2. Set up a Google Form to POST file + metadata (reporter, category, etc.) to the `/submit-report` webhook.
3. Update the `Set Config` node with your:
   - MySQL connection details
   - Google Drive folder ID
4. Deploy and test a form submission with a file upload.
5. Each report is stored in Drive and logged to your DB.

## 🎯 Who’s It For
- Compliance officers handling environmental or safety reports.
- Admins managing documentation for inspections.
- Renewable energy companies required to maintain audit-ready records.
- Any org needing structured report archival & metadata logging.

## 🛠 Requirements
| Tool | Purpose |
|------|---------|
| n8n Instance | Workflow automation |
| Google Drive | To archive uploaded reports |
| MySQL Database | To log submission metadata |
| Google Forms / HTML Form | Report submission source |

## 🧠 What It Does
- Listens for incoming POST requests with a file and metadata.
- Uploads the file to a specified Google Drive folder.
- Extracts metadata like:
  - Reporter name
  - Category/type
  - Timestamp
  - File name, MIME type
- Logs that metadata into a MySQL table for auditing or reporting.

## 🧾 Sample MySQL Table Schema
```sql
CREATE TABLE report_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reporter VARCHAR(100),
  category VARCHAR(100),
  timestamp DATETIME,
  file_name VARCHAR(255),
  mime_type VARCHAR(50),
  folder_id VARCHAR(100)
);
```

## 🔧 How To Set Up – Step-by-Step
1. **Import the JSON** into n8n.
2. Configure the following in the **Set Config** node:
   - MySQL: `dbHost`, `dbUser`, `dbPassword`, `dbName`, `dbTable`
   - Google Drive: `driveFolderId`
3. **Update the webhook URL** in your Google Form (via Apps Script or middleware).
4. Test submission with a file upload.
5. Confirm:
   - File lands in your Drive folder
   - Log entry appears in your database

## ✨ How To Customize
| Customization | How |
|---------------|-----|
| Add more form fields | Extend the metadata mapping in the Function node |
| Rename files before upload | Modify filename in Google Drive node |
| Add email confirmation | Add an Email Send node after DB insert |
| Filter file types | Add IF node before upload to validate MIME type |

## ➕ Add‑ons (Optional Extensions)
| Add-on | Description |
|--------|-------------|
| 📤 Email Acknowledgment | Email sender a confirmation with Drive link |
| 🧾 PDF Parser | Auto-parse content using PDF.co or OpenAI |
| 📊 Admin Dashboard | Display logs in Supabase or Metabase |
| 🗃 File Backup | Copy files to Dropbox or S3 after Drive upload |

## 📈 Use Case Examples
1. Collect monthly safety audits from plant staff into a Drive archive.
2. Accept vendor compliance declarations via Google Form and auto-log to DB.
3. Capture field inspection reports and tag by category for audit.
4. Store weekly environmental reports for long-term access.

## 🧯 Troubleshooting Guide
| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| File not uploaded | Drive ID is invalid | Check permissions and folder ID |
| DB not logging | Connection or table issue | Verify DB credentials and schema |
| Webhook not triggered | Form not integrated correctly | Ensure form POSTs file to n8n webhook |
| Wrong file type | MIME mismatch | Validate acceptable types via Function/IF node |

## 📞 Need Help?
Want to integrate this with audit dashboards or add Google Sheet exports?

👉 Contact WeblineIndia — Experts in compliance automation and renewable energy workflows.

## 🔗 Nodes Used

Function, Google Drive, MySQL, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
