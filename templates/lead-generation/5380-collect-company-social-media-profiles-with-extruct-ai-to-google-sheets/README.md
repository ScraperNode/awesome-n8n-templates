# 🎣 Collect company social media profiles with Extruct AI to Google Sheets

> ⚡ **1,070 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Who’s it for:**  
Sales teams, marketers, and analysts who need to quickly access all the social media and public profile links for any company.

**How it works / What it does:**  
When you enter a company into the form, this workflow automatically searches for and collects all available links to the company’s social media accounts, review sites, and public profiles from sources like Crunchbase and Zoominfo. All discovered URLs are added directly to your Google Sheet.

**How to set up:**  
1. Create an Extruct account at [www.extruct.ai/](https://www.extruct.ai/).  
2. Open the Extruct table template, find the table ID in your browser’s address bar, and copy it.  
3. Make a copy of the provided Google Sheets template to your own Google Drive.  
4. In n8n, paste the table ID into the variables node of your flow.  
5. Set up Bearer authentication in every HTTP Request node using your Extruct API token (found on the API page in Extruct).  
6. In the Google Sheets node, paste the link to your copied template and connect your Google account.  
7. Run the flow once to load the fields, then map the output fields to the correct columns in your sheet.  
8. Activate the flow and start adding companies via the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
You can add your own columns to the Extruct table and your Google Sheet. Just add the new column in both places and map it in the Google Sheets node in n8n.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
