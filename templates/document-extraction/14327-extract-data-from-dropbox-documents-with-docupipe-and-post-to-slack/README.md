# 🔬 Extract data from Dropbox documents with DocuPipe and post to Slack

> ⚡ **49 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Screenshot_1.jpg](fileId:5184)

 ## Who is this for?                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                     
  Teams that collect documents in Dropbox (invoices, receipts, forms) and want instant Slack notifications with AI-extracted structured data - great for invoice processing, receipt tracking, or any document workflow where team visibility matters.                               
                                                                                                                                                                                                                                                                                     
  ## What it does                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                   
  This template contains two connected flows:

  - **Scenario 1 - Upload:** Polls a Dropbox folder every minute for new files, filters for recently added documents, downloads them, and uploads to DocuPipe for AI-powered extraction.                                                                                             
  - **Scenario 2 - Notify:** When DocuPipe finishes extracting, the webhook fires, results are fetched, formatted into a readable Slack message with labeled fields, and posted to your channel.
                                                                                                                                                                                                                                                                                     
  ## How to set up                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                     
  1. Install the **DocuPipe community node** via Settings &gt; Community Nodes (self-hosted only)                                                                                                                                                                                       
  2. Connect your **Dropbox** account and set the folder path in the List Dropbox Folder node
  3. Sign up at [docupipe.ai](https://docupipe.ai), then get your **DocuPipe API key** at [app.docupipe.ai/settings/general](https://app.docupipe.ai/settings/general)                                                                                                               
  4. Select an extraction **schema** in the Upload node                                                                                                                                                                                                                              
  5. Connect your **Slack** account and select the target channel
  6. Activate the workflow                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                   
  ## Requirements                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                   
  - A DocuPipe account with an API key
  - A Dropbox account
  - A Slack workspace with bot permissions
  - Self-hosted n8n (required for community nodes)
**Note:** Requires the [DocuPipe community node](https://www.npmjs.com/package/n8n-nodes-docupipe). Install via Settings &gt; Community Nodes. 
                                                                                                                                                                                                                                                                    
  Categories: Data & Storage, Communication

## 🔗 Nodes Used

Dropbox, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
