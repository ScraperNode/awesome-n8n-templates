# 🎯 Automatically rename Gmail attachments with GPT-4o and save to Google Drive

> ⚡ **1,507 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Automatically Rename Gmail Attachments with AI and Save to Google Drive

### Who is this for?

This workflow is perfect for anyone who regularly receives important email attachments like reports, invoices, or PDFs and wants them:

- Renamed using clean AI generated filenames  
- Automatically saved to a specific Google Drive folder  
- Neatly organized without manual work  

It is ideal for freelancers, business owners, accountants, and productivity enthusiasts.

### What does it solve?

Manually naming and organizing email attachments takes time and often leads to messy files.

This workflow solves that by:

- Automatically downloading unread Gmail attachments  
- Using AI to understand the content and generate clean, consistent filenames  
- Saving the renamed files to your chosen Google Drive folder  
- Marking emails as read after processing  

No more confusing filenames like "Attachment 1.pdf".

### How it works

1. The workflow runs on a scheduled interval (every hour by default)  
2. It checks Gmail for any unread emails with attachments.  
3. For each email:
   - Downloads attachments  
   - Extracts and reads PDF content  
   - Uses AI to generate a new filename in the format: `YYYYMMDD-keyword-summary.pdf`  
4. Saves the file to Google Drive with the new name  
5. Marks the email as read to avoid duplicates  

### How to set up?

1. Connect these accounts in your n8n credentials:
   - Gmail (OAuth2)  
   - Google Drive (OAuth2)  
   - OpenAI (API key)  

2. Update the folder URL in the Google Drive node to your target folder  
3. Optional: adjust the trigger interval if you want it to run more or less often  

### How to customize this workflow to your needs

- Change the AI prompt to create different naming rules, such as including sender or topic  
- Dynamically set Drive folders based on email sender or subject

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
