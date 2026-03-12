# 🔧 Fetch Squarespace Blog & Event Collections to Google Sheets

> ⚡ **655 views** · 🔧 [Miscellaneous](../)

## Description

## Overview  
This workflow retrieves all blog and event collection items from a Squarespace site and saves them into a Google Sheets spreadsheet. It uses pagination to fetch 20 items per request, ensuring all content is collected efficiently.  

## How It Works  
1. The workflow queries your Squarespace blog and event collections.  
2. It fetches data in paginated batches (20 items per page).  
3. The retrieved data is formatted and inserted into Google Sheets.  
4. The workflow runs on demand or on a schedule, ensuring your data stays up to date.  

## Requirements  
### Credentials  
To use this template, you need:  
- Your Squarespace collection URL  
- Google Sheets API credentials  

### Google Sheets Setup  
Use [this sample Google Sheets template](https://docs.google.com/spreadsheets/d/1HGc7o4mqMY1t9fXT6LBhmZixjJYr0eapSUosXMA9v8E/edit?gid=0#gid=0) to get started quickly.  

## Who Is This For?  
This template is designed for:  
- Bloggers looking to manage and analyze content externally.  
- Businesses and marketers tracking content performance.  
- Anyone who needs an automated way to extract Squarespace blog and event data.  

## Explore More Templates  
Check out my other n8n templates:  
👉 [n8n.io/creators/bangank36](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
