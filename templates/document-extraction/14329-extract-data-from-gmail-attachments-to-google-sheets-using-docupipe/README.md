# 🔬 Extract data from Gmail attachments to Google Sheets using DocuPipe

> ⚡ **189 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Screenshot_3.jpg](fileId:5186)
## Who is this for?                                                                                                                                                                                                                                                                
                  
  Teams that receive documents via email (invoices, receipts, contracts) and want structured data automatically extracted and added to a spreadsheet - without manual data entry.                                                                                                    
  
  ## What it does                                                                                                                                                                                                                                                                    
                  
  This template contains two connected flows:

  - **Scenario 1 - Upload:** Watches Gmail for new emails with attachments, labels them as "Processing", uploads the attachment to DocuPipe for AI-powered extraction, and saves a backup copy to Google Drive.                                                                      
  - **Scenario 2 - Process & Save:** When DocuPipe finishes extracting, the webhook fires, results are fetched, processed into a flat row format, enriched with metadata (document name, timestamp), and appended as a new row in your Google Sheet.
                                                                                                                                                                                                                                                                                     
  ## How to set up
                                                                                                                                                                                                                                                                                     
  1. Install the **DocuPipe community node** via Settings &gt; Community Nodes
  2. Connect your **Gmail** account
  3. Create a Gmail label called **"DocuPipe - Processing"** (or customize the label name)
  4. Sign up at [docupipe.ai](https://docupipe.ai), then get your **DocuPipe API key** at [app.docupipe.ai/settings/general](https://app.docupipe.ai/settings/general)                                                                                                               
  5. Select an extraction **schema** in the Upload node                                                                                                                                                                                                                              
  6. Connect your **Google Drive** account and select a backup folder                                                                                                                                                                                                                
  7. Connect your **Google Sheets** account and select your spreadsheet                                                                                                                                                                                                              
  8. Ensure your sheet's column headers match the schema field names                                                                                                                                                                                                                 
  9. Activate the workflow                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                     
  ## Requirements                                                                                                                                                                                                                                                                    
                  
  - A DocuPipe account with an API key
  - A Gmail account
  - A Google Drive folder for backups
  - A Google Sheets spreadsheet                                                                                                                                                                                                                                                      
  - Self-hosted n8n (required for community nodes)
                                                                                                                                                                                                                                                                                     
  **Note:** Requires the [DocuPipe community node](https://www.npmjs.com/package/n8n-nodes-docupipe). Install via Settings &gt; Community Nodes.                                                                                                                                        
  
  Categories: Productivity, Data & Storag

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
