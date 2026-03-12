# 📁 Automatic Microsoft Outlook attachment storage to OneDrive with Excel logging

> ⚡ **252 views** · 📁 [File Management](../)

## Description

# 📥 Save Email Attachments to OneDrive & Log Them in Excel

This workflow watches your Outlook inbox, automatically downloads file attachments (for example invoices), saves them into a specific OneDrive folder, and logs each file name into an Excel table. Optionally, it also posts a Microsoft Teams message to let you know that a new attachment has been processed.

---

## ✨ What this workflow does

- Monitors a Microsoft Outlook mailbox for new emails.
- Fetches **all attachments** from each incoming message.
- Processes attachments one by one so every file is handled cleanly.
- Downloads each attachment as binary data.
- Uploads the file into a OneDrive folder (looked up by name).
- Appends a new row with the filename to an Excel table for tracking.
- Sends a Teams chat notification once an attachment has been uploaded (optional).

---

## 🧑‍💼 Who this is for

This workflow is ideal for:

- Finance / accounting teams who receive invoices by email and want them stored centrally.
- Anyone who wants an **“email → OneDrive → Excel log”** pipeline without manual downloading and renaming.
- n8n users who work in a Microsoft 365 environment (Outlook, OneDrive, Excel, Teams).

---

## ✅ Requirements

Before you run the workflow, you’ll need:

- A **Microsoft Outlook** account with permissions to read emails and attachments.
- A **OneDrive / SharePoint** drive with a target folder (the example uses a folder whose name matches the search in the `Get Folder ID` node, e.g. `Testn8n`).
- An **Excel workbook** stored in OneDrive with:
  - A worksheet and table already created.
  - A column named `Filename` (or adjust the `Set Filename` + Excel node to match your column name).
- n8n credentials set up for:
  - Microsoft Outlook
  - Microsoft OneDrive
  - Microsoft Excel
  - Microsoft Teams (optional but used in this template)

---

## 🛠️ Setup steps

1. **Import the workflow JSON** into your n8n instance.
2. **Configure credentials**:
   - Set your Outlook, OneDrive, Excel, and Teams credentials on the respective nodes.
3. **Adjust the mail trigger** (`On Mail Received`):
   - Optionally add filters (subject, sender, folder) if you only want to process invoices or a specific mailbox/folder.
4. **Set the OneDrive folder search** (`Get Folder ID`):
   - Update the `query` parameter to the exact name of the folder where attachments should be stored.
5. **Point the Excel node to your workbook** (`Append to Excel Log`):
   - Use the dropdowns to select your workbook, worksheet and table.
   - Ensure there’s a `Filename` column (or rename the field in `Set Filename` to match your actual column).
6. **Activate the workflow**:
   - Once active, every new email that hits the trigger will have its attachments stored in OneDrive and logged in Excel.

---

## 🔗 Integrations used

- **Microsoft Outlook** – trigger on incoming emails and download attachments.
- **Microsoft OneDrive** – search for folders and upload files.
- **Microsoft Excel** – append rows to a table in a workbook.
- **Microsoft Teams** – send notifications when attachments are processed.

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft OneDrive, Microsoft Teams, Microsoft Outlook, Microsoft Outlook Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
