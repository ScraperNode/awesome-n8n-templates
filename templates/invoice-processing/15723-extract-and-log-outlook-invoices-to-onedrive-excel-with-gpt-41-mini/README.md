# 🧾 Extract and log Outlook invoices to OneDrive Excel with GPT-4.1-mini

> ⚡ **62 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Automatically extract, log, and archive emailed invoices using GPT-4.1-mini, OneDrive, and Excel. Designed for small business owners, finance teams, and operations managers, this Microsoft 365 workflow eliminates manual data entry while keeping invoices organized and easy to track.



## How it works
1. Runs daily at 7:00 AM and retrieves unread emails from a selected Outlook folder.
2. Converts each email to plain text and uses GPT-4.1-mini to extract invoice details.
3. Downloads PDF attachments and saves them in dated OneDrive folders.
4. Renames each invoice using the vendor and invoice month.
5. Adds the extracted data and file link to an Excel table.

## Setup
1. Add your Microsoft Outlook OAuth2 credential — used to fetch emails and send the digest.
2. Add your Microsoft Graph OAuth2 credential — used for OneDrive folder creation, PDF upload, and Excel append.
3. In Outlook — Get Unread Emails, update foldersToInclude to your target Outlook folder ID (find it via Graph Explorer).
4. In Excel — Append Invoice Row, update the workbook, worksheet, and table IDs to match your tblInvoices tracker file in OneDrive.
5. In Code — Build Digest Email, replace YOUR_ONEDRIVE_FOLDER_URL with a direct link to your Invoices folder.
6. In Outlook — Send Daily Digest, replace YOUR_EMAIL@example.com with your recipient address.

## Requirements
- Microsoft Outlook OAuth2 credential
- Microsoft Graph OAuth2 credential (Generic OAuth2 with https://graph.microsoft.com/.default scope)
- OpenAI API credential (GPT-4.1-mini)
- An Excel workbook in OneDrive with a table named tblInvoices containing columns matching the field list
- A PDF Link column added to your tblInvoices table

## Customization
- Change the schedule: Adjust the cron expression in Schedule — Daily Trigger to run more or less frequently.
- Add more fields: Extend the extraction prompt in AI — Extract Invoice Fields with additional fields and add matching columns to your Excel table.
- Modify the folder structure: Edit Code — Build Upload Path to change how PDF subfolders are named or organized in OneDrive.
- Filter by sender or subject: Add a Filter node after Outlook — Get Unread Emails to process only emails matching specific criteria.

## Additional info
Support: support@ais.email | Automated Intelligent Solutions

## 🔗 Nodes Used

HTTP Request, Microsoft Excel 365, Microsoft Outlook, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
