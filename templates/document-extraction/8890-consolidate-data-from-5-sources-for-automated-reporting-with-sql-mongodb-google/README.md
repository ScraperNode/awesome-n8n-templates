# 🔬 Consolidate data from 5 sources for automated reporting with SQL, MongoDB & Google tools

> ⚡ **1,109 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

This workflow consolidates data from five different systems — Google Sheets, PostgreSQL, MongoDB, Microsoft SQL Server, and Google Analytics — into a single master Google Sheet. It runs on a scheduled trigger three times a week. Each dataset is tagged with a unique source identifier before merging, ensuring data traceability. Finally, the merged dataset is cleaned, standardized, and written into the output Google Sheet for reporting and analysis.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Runs the workflow at set weekly intervals.  

**2. Collect data from sources**  
- **Google Sheets Source** – Retrieves records from a specific sheet.  
- **PostgreSQL Source** – Extracts customer data from the database.  
- **MongoDB Source** – Pulls documents from the defined collection.  
- **Microsoft SQL Server** – Executes a SQL query and returns results.  
- **Google Analytics** – Captures user activity and engagement metrics.  

**3. Tag each dataset**  
- **Add Sheets Source ID** – Marks data from Google Sheets.  
- **Add PostgreSQL Source ID** – Marks data from PostgreSQL.  
- **Add MongoDB Source ID** – Marks data from MongoDB.  
- **Add SQL Server Source ID** – Marks data from SQL Server.  
- **Add Analytics Source ID** – Marks data from Google Analytics.  

**4. Merge and process**  
- **Merge** – Combines all tagged datasets into a single structure.  
- **Process Merged Data** – Cleans, aligns schemas, and standardizes key fields.  

**5. Store consolidated output**  
- **Final Google Sheet** – Appends or updates the master sheet with the processed data.  

## Why use this?

- Centralizes multiple data sources into a single, consistent dataset.  
- Ensures data traceability by tagging each source.  
- Reduces manual effort in data cleaning and consolidation.  
- Provides a reliable reporting hub for business analysis.  
- Enables scheduled, automated updates for up-to-date visibility.

## 🔗 Nodes Used

Function, Google Sheets, Postgres, MongoDB, Microsoft SQL, Google Analytics

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
