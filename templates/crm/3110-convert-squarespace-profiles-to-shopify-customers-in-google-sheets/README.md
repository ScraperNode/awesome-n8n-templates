# 🤝 Convert Squarespace profiles to Shopify customers in Google Sheets

> ⚡ **355 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow converts an exported CSV from Squarespace profiles into a Shopify-compatible format for customer import.

## How It Works
Clone this [Google Sheets template](https://docs.google.com/spreadsheets/d/1ZUP7RySMCjQUBAvlZhSE1rOul1FMVHvTSF0QexuV7mQ/edit?usp=sharing), which includes two sheets:

#### Squarespace Profiles (Input)
1. Go to **Squarespace Dashboard → Contacts**  
2. Click the **three-dot icon** → Select **Export all Contacts**

#### Shopify Customers (Output)
- This sheet formats the data to match Shopify's customer import CSV.  
- Shopify Dashboard → Customers → **Import customers by CSV**

The workflow can run **on-demand** or be **triggered via webhook**.

### Via webhook
1. Set up webhook node to expect a POST request
2. Trigger the webhook using this code (psuedo) - replace {webhook-url} with the actual URL
```
    const formData = new FormData();
    formData.append('file', blob, 'profiles_export.csv'); // Add file to FormData

    fetch('{webhook-url}', { // Replace with your target URL
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
```
3. The data is processed into the Shopify Customers sheet.

### Manually trigger
1. Import Squarespace profiles into the sheet.
2. Run the workflow to convert and populate the Shopify Customers sheet.

Once workflow is done, export the Shopify to csv and import to Shopify customers

## Requirements
To use this template, you need:

- Google Sheets API credentials

### Google Sheets Setup
Use this [sample Google Sheets template](https://docs.google.com/spreadsheets/d/1ZUP7RySMCjQUBAvlZhSE1rOul1FMVHvTSF0QexuV7mQ/edit?usp=sharing) to get started quickly.

## Who Is This For?
For anyone looking to automate Squarespace contact exports into a Shopify-compatible format—no more manual conversion!

Explore More Templates
Check out my other n8n templates:
👉 [n8n.io/creators/bangank36](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

Google Sheets, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
