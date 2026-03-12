# 🤝 CSV to HubSpot Uploader with Dynamic Field Mapping and Google Sheets Integration

> ⚡ **574 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who is this for?  
This n8n workflow is designed for **Customer Success Managers (CSM)**, **marketers, sales teams, and data administrators** who need to **automate the process of uploading and processing CSV data in HubSpot**. It is ideal for users who regularly import contact lists, update CRM records, or sync data between systems.  

## What problem does this workflow solve?  
Manually uploading and processing CSV files in HubSpot can be **time-consuming and error-prone**, especially when dealing with large datasets or complex field mappings. This workflow **automates data validation, indexing, and field mapping**, reducing manual effort and ensuring data consistency.  

## What this workflow does  
1. **Generating** the list of the fields directly from Hubspot API
2. **Indexing**: Organizes and prepares CSV data for HubSpot import.  
3. **Data Processing**: Cleanses and transforms data.
4. **Field Mapping**: Maps CSV columns to HubSpot fields dynamically.  
5. **Import Execution**: Uploads processed data to HubSpot

## Setup  
1. **Prerequisites**:  
   - HubSpot API credentials (Private App token).  
   - Google sheets credentials.
   - n8n instance (cloud or self-hosted).  
2. **Installation**:  
   - Import the workflow JSON into n8n.  
   - Configure the **HubSpot nodes** and the **Google Sheets** nodes with your API credentials.  
   - Upload your CSV file to the workflow via the form.  

## Customization   
- **Data Filters**: Add nodes to filter/transform data (e.g., deduplication, formatting).  
- **Fields Filters**: according to your needs
- **Add a Hubspot Object**: To the list in "Define array of objects" node
- **Workflow Triggers**: Set up triggers (e.g., schedule, webhook) for automated runs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
