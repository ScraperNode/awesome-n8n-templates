# 📊 Automate funding insights with Crunchbase, Google Sheets & Airtable

> ⚡ **197 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
This workflow runs daily to collect the latest funding round data from Crunchbase. It retrieves up to 100 recent funding events, including company, investors, funding amount, and industry details. The data is cleaned and filtered to only include rounds announced in the last 30 days. Finally, the results are saved into both Google Sheets for reporting and Airtable for structured database management.

## Step-by-step
1. **Trigger & Data Fetching**  
   - **Schedule Trigger node** – Runs the workflow once a day.  
   - **HTTP Request node** – Calls the Crunchbase API to fetch the latest 100 funding rounds with relevant details.  

2. **Data Processing**  
   - **Code node** – Parses the raw API response into clean fields such as company name, funding type, funding amount, investors, industry, and Crunchbase URL.  
   - **Filter node** – Keeps only funding rounds from the last 30 days to ensure the dataset remains fresh and relevant.  

3. **Storage & Outputs**  
   - **Google Sheets node** – Appends or updates the filtered funding records in a Google Sheet for easy sharing and reporting.  
   - **Airtable node** – Stores the same records in Airtable for more structured, database-style organization and management.  

## Why use this?
- Automates daily collection of startup funding data from Crunchbase.  
- Keeps only the most recent and relevant records for faster insights.  
- Ensures data is consistently stored in both Google Sheets and Airtable.  
- Supports reporting, collaboration, and database management in one flow.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
