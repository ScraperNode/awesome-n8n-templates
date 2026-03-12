# 📁 📂 Automatically update stock portfolio from OneDrive to Excel

> ⚡ **7,700 views** · 📁 [File Management](../)

## Description

## Seamlessly Sync and Update Data from a csv in OneDrive to Excel with n8n

This workflow is perfect for users who need a reliable, automated way to transfer and organize data from OneDrive into Excel—especially for tasks like portfolio tracking, inventory management, and record-keeping. By monitoring your OneDrive folder for new CSV files, it performs data cleaning, transformation, and real-time updates in an Excel sheet, ensuring only new or changed records are added.

---

## How it Works

1. **Automated Monitoring**: Every minute, the workflow scans a designated OneDrive folder for new files.
2. **File Verification**: It checks if the detected file is in CSV format; if not, the process stops with an error message.
3. **Data Extraction and Cleaning**: CSV data is loaded, and irrelevant headers are removed before mapping to specified columns in Excel.
4. **Excel Update**: The workflow maps data to your Excel sheet, updating only new or modified entries based on a unique identifier ("Ticker/ISIN").
5. **Cleanup**: To keep your OneDrive organized, processed files are deleted after updating Excel.

---

## Setup Steps

1. **Connect OneDrive and Excel Accounts**: Link your Microsoft OneDrive and Excel accounts in n8n.
2. **Designate Folder and Worksheet**: Specify the OneDrive folder for monitoring and the Excel sheet for data updates.
3. **Configure Sync Frequency and CSV Validation**: Set the monitoring frequency to every minute and ensure the workflow identifies CSV files accurately.

Once configured, this workflow offers a hands-free, efficient solution to keep your OneDrive and Excel data synchronized effortlessly.

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft OneDrive, Stop and Error, Extract from File, Microsoft OneDrive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
