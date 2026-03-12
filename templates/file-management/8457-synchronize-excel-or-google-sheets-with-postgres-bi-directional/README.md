# 📁 Synchronize Excel or Google Sheets with Postgres (bi-directional)

> ⚡ **720 views** · 📁 [File Management](../)

## Description

## Synchronize Excel or Google Sheets with Postgres (bi-directional)

### Who’s it for
This workflow is perfect for companies that have always managed their operations in Excel or Google Sheets and want to gradually transition to using a database or custom software. It ensures business continuity while modernizing data management.

### How it works / What it does
1. **Trigger options** → Run the sync manually, on schedule, or as part of another workflow.  
2. **Get data from Excel** → Reads rows from an Excel or Google Sheet table.  
3. **Sanitize data** → Cleans up formats (e.g., converting Excel serial dates into proper date strings).  
4. **Upsert into Postgres** → Inserts or updates rows in the database, ensuring no duplicates.  
   - For **auto-mapping** to work, the column names in Excel/Sheets and the DB **must match exactly**.  
   - If you want different names, you can **manually map columns** in the Postgres node.  
5. **(Optional)** → Can be extended to push DB updates back to Excel, creating a true **two-way sync**.  

This way, your team can continue working in Excel/Sheets while data is safely persisted in a database—ideal for scaling into dashboards, SaaS, or ERP systems later.

### How to set up
1. Import the workflow JSON into your n8n instance.  
2. Connect your credentials:  
   - **Microsoft Excel / Google Sheets OAuth2**  
   - **Postgres database**  
3. Point the Excel node to the right workbook, worksheet, and table.  
4. Make sure column names match between the Excel sheet and DB table (or map manually if they differ).  
5. Run manually or configure the schedule trigger for automated syncs.  

### Requirements
- n8n self-hosted or cloud account.  
- Either Microsoft Excel Online or Google Sheets access.  
- Postgres database (or replace with MySQL, MariaDB, or any supported DB).  

### How to customize the workflow
- Replace Excel with **Google Sheets** by swapping the node.  
- Replace Postgres with **any preferred database** node.  
- Add validation steps (e.g., check for missing emails, duplicate IDs).  
- Extend with **reporting workflows** (e.g., sync DB data to BI dashboards).  
- Use this as a stepping stone to migrate from spreadsheets into software-driven processes.

## 🔗 Nodes Used

Postgres, Microsoft Excel 365, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
