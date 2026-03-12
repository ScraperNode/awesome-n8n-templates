# 🎣 Enrich company sales data with Extruct AI and export to Google Sheets

> ⚡ **132 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Who’s it for:**  
Sales and business development professionals who want to monitor company news, hiring trends, and business signals for their leads.

**How it works / What it does:**  
Add a company to the form, and the workflow will automatically search for the latest news, recent hires, company stage, and LinkedIn activity. The results are sent straight to your Google Sheet, helping you stay up to date with your leads and prospects.

**How to set up:**  
1. Register for Extruct at [www.extruct.ai/](https://www.extruct.ai/).  
2. Open the Extruct table template, copy the table ID from the browser’s address bar.  
3. Make a copy of the Google Sheets template to your Drive.  
4. Enter the table ID into the variables node in your n8n flow.  
5. Set up Bearer authentication in all HTTP Request nodes using your Extruct API token.  
6. In the Google Sheets node, paste your template link and connect your Google account.  
7. Run the flow once to load the mapping fields, then match each output to the correct column.  
8. Activate the flow and start adding companies through the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
To track more business development signals, add new columns in both the Extruct table and your Google Sheet, then map them in the Google Sheets node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
