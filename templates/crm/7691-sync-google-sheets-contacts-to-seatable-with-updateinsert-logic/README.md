# 🤝 Sync Google Sheets contacts to SeaTable with update/insert logic

> ⚡ **149 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Keep your Google Sheets contacts in sync with SeaTable 
Update or Insert records in SeaTable

## How it works  
- Use a Google Sheet as your central contact list.  
- For each contact in the sheet:
  - Check if the record already exists in **SeaTable** (based on email).  
  - If it exists → update the record.  
  - If it doesn’t → insert the new contact.  

## How to use  
1. Copy the Google Sheet [Template Link](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing).  
   - Get the **Google Sheet ID** (the string between `d/` and `/edit`).  
2. In the workflow, set the Sheet ID in the `settings` node.  
3. In SeaTable, create or update a base with a **Table1** containing these fields:  
   - `email`  
   - `firstname`  
   - `lastname`  
   - `company`  
4. Configure your **Google Sheets** and **SeaTable credentials** in n8n.  
5. Add your own contacts to the Google Sheet & run the workflow 

## Requirements  
- Google credentials (for Sheets access)  
- SeaTable account (Cloud)  
- n8n (tested on version **1.105.2**, Ubuntu)  

## Example use cases  
- Maintain a **central CRM-like database** in SeaTable.  
- Ensure consistent contact data when collecting leads in Google Sheets.  
- Automate **record deduplication** (prevent duplicate entries).  

## Need Help?  
- Join the discussion [here](https://www.linkedin.com/posts/n8n-about_n8n-seatable-airtable-activity-7363129613465571332-Scun/) or contact me directly on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/).  
- Ask the community in the [n8n Forum](https://community.n8n.io/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, SeaTable

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
