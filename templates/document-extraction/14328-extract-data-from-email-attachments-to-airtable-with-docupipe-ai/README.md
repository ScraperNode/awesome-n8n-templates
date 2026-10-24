# 🔬 Extract data from email attachments to Airtable with DocuPipe AI

> ⚡ **104 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Screenshot_2.jpg](fileId:5185)
## Who is this for?                                                                                                                                                                                                                                                                
                  
  Teams that receive documents via email and want structured data automatically extracted and saved to an Airtable base for tracking, review, or further automation. Works with any IMAP email provider - Outlook, Yahoo, or custom domains.                                         
  
  ## What it does                                                                                                                                                                                                                                                                    
                  
  This template contains two connected flows:

  - **Scenario 1 - Upload:** Watches your inbox for new emails with attachments, filters by subject keywords (invoice, receipt, contract), extracts email metadata, and uploads the attachment to DocuPipe for AI-powered extraction.                                                
  - **Scenario 2 - Process & Save:** When DocuPipe finishes extracting, the webhook fires, results are fetched, processed into Airtable-compatible format (nested objects and arrays are serialized), enriched with metadata (document name, timestamp), and saved as a new record.
                                                                                                                                                                                                                                                                                     
  ## How to set up
                                                                                                                                                                                                                                                                                     
  1. Install the **DocuPipe community node** via Settings &gt; Community Nodes                                                                                                                                                                                                          
  2. Connect your **IMAP email** account (server, port, username, password)
  3. Customize the **subject filter** keywords in the Filter by Subject node                                                                                                                                                                                                         
  4. Sign up at [docupipe.ai](https://docupipe.ai), then get your **DocuPipe API key** at [app.docupipe.ai/settings/general](https://app.docupipe.ai/settings/general)                                                                                                               
  5. Select an extraction **schema** in the Upload node                                                                                                                                                                                                                              
  6. Connect your **Airtable** account, select your base and table                                                                                                                                                                                                                   
  7. Ensure your Airtable column names match the schema field names                                                                                                                                                                                                                  
  8. Activate the workflow                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                     
  ## Requirements                                                                                                                                                                                                                                                                    
                  
  - A DocuPipe account with an API key
  - An email account with IMAP access
  - An Airtable account with a table configured for your data
  - Self-hosted n8n (required for community nodes)                                                                                                                                                                                                                                   
  
  **Note:** Requires the [DocuPipe community node](https://www.npmjs.com/package/n8n-nodes-docupipe). Install via Settings &gt; Community Nodes.                                                                                                                                        
                  
  Categories: Productivity, Data & Storage

## 🔗 Nodes Used

Airtable, Email Trigger (IMAP)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
