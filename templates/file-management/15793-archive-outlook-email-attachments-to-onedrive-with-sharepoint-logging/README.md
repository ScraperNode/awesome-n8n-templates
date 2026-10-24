# 📁 Archive Outlook email attachments to OneDrive with SharePoint logging

> ⚡ **261 views** · 📁 [File Management](../)

## Description

**Stop letting email attachments pile up in your inbox. Let automation file every document the moment it arrives.**

Manually downloading and organising email attachments is repetitive, inconsistent, and easy to forget. This workflow checks your Outlook inbox every hour, extracts every valid attachment, uploads it to OneDrive in a structured folder hierarchy, logs the archive record to SharePoint, and marks the email as read, with zero manual intervention.

---

### How it works

The workflow runs in five sequential stages:

**1. Ingestion**
Checks Outlook every hour for unread emails. If the inbox is empty, the workflow exits cleanly with no further execution. If emails are found, they are queued for processing.

**2. Per-Email Processing**
Emails are split and processed one at a time using a batch loop. For each email, all attachments are fetched from Outlook, 0-byte items are dropped, binary data is decoded, and a structured OneDrive folder path is computed automatically from the sender's domain and the email's received date:
`/Archives/{year}/{month}/{sender-domain}/`

**3. Upload & Aggregation**
Emails with valid file attachments are uploaded to OneDrive into the computed folder path. Emails with no real attachments skip the upload step entirely and go directly to aggregation. Results are collected into a summary item containing the sender, file names, upload count, and folder path.

**4. Audit Logging**
The upload summary is appended to a SharePoint list as a compliance audit record. Every archived email produces one row with full traceability, sender address, file names, destination folder, and timestamp.

**5. Completion**
The email is marked as read in Outlook and tagged with the `Archived` category. The batch loop then moves to the next email until all emails in the current run are processed.

---

### Key benefits

- **Automatic folder structure:** No manual folder creation needed, the archive path is derived from the sender domain and received date on every run
- **0-byte guard:** Inline images and empty attachment objects are filtered out before upload, so only real files reach OneDrive
- **Audit-ready:** Every processed email produces a SharePoint list record for compliance tracking, regardless of whether attachments were found
- **Batch loop:** Emails are processed one at a time to avoid API throttling and keep execution predictable
- **Global error handling:** A dedicated Error Trigger catches any execution failure, sends an alert email with the execution ID and failed node name, and logs upload failures separately to the SharePoint audit list

---

### Setup

1. **Microsoft Outlook:** Connect your Outlook OAuth2 credential to the Get Unread Emails, Get Email Attachments, Mark Email as Read, and Send Error Email nodes
2. **Microsoft OneDrive:** Connect your OneDrive OAuth2 credential to the Upload to OneDrive node and set your target drive ID and folder path expression to `{{ $json.folderPath }}`
3. **Microsoft SharePoint:** Connect your SharePoint OAuth2 credential to the Log to SharePoint Audit List and Log Failed Upload to SharePoint nodes, and set your Site ID and List ID
4. **Error email:** Update the recipient address in the Send Error Email node (`it-admin@company.fi`)
5. **Activate:** Turn the workflow on and run it manually once to verify the folder structure is created correctly in OneDrive

---

### Who this is for

- **Operations and admin teams** receiving high volumes of emailed documents, invoices, contracts, and reports. that need consistent filing
- **Finance departments** archiving supplier invoices and statements automatically without manual download and upload
- **Compliance teams** that need a timestamped audit trail of every document received and where it was stored
- **IT teams at SMEs** replacing manual file management with a lightweight, credential-based Microsoft 365 automation

---

### Required credentials

- Microsoft Outlook OAuth2
- Microsoft OneDrive OAuth2
- Microsoft SharePoint OAuth2

---

### Folder structure

Attachments are organized automatically:
`/Archives/{year}/{month}/{sender-domain}/filename.ext`

---

### How to customize it

- **Change the folder structure:** Modify the path logic in the `Build Folder Path + Decode Attachment` node to organise by department, document type, or any other field available on the email
- **Filter by sender:** Add an IF node after `Get Unread Emails` to only process emails from specific domains or addresses
- **Add more destinations:** Fan out from `Has File Attachments?` to also copy files to SharePoint document libraries or Azure Blob Storage
- **Adjust the schedule:** Change the trigger interval from hourly to every 15 minutes or once per day depending on your email volume
- **Extend the audit log:** Add columns to the SharePoint list for file size, content type, or a generated document ID for downstream reference

## 🔗 Nodes Used

Microsoft OneDrive, Microsoft Outlook, Schedule Trigger, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
