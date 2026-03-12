# 📁 Automation for Real Estate Client Portal (with video)

> ⚡ **216 views** · 📁 [File Management](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recg2xflZyWDKDjup.jpg)](https://youtu.be/Ft3c_NPRlI8)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What this workflow does

This workflow automates backend setup tasks for real estate client portals. When a new property transaction is added to your Google Sheets database with a buyer email but no document folder assigned, the workflow automatically creates a dedicated Google Drive folder, updates the spreadsheet with the folder URL, and adds an initial task prompting the client to upload documents.

This automation eliminates manual folder creation and task assignment, ensuring every new transaction has its documentation infrastructure ready from day one. Your clients can access their dedicated folder directly from the portal, keeping all property-related documents organized and accessible in one place.

## Key benefits

- **Eliminate manual setup**: No more creating folders and tasks individually for each transaction
- **Consistent client experience**: Every buyer gets the same professional onboarding process
- **Organized documentation**: Each transaction has its own Google Drive folder automatically shared with the client
- **Time savings**: Focus on closing deals instead of administrative setup

## Setup requirements

**Important:** You must make a copy of the [reference Google Sheets spreadsheet](https://docs.google.com/spreadsheets/d/1UJPaBd_qHsNgInA2mrYaq7wgXLHzFw9jcTUoSpTxMDk/edit?usp=sharing) to your own Google account before using this workflow.

Your spreadsheet needs at minimum two tabs:
- **Transactions tab**: Columns for ID, Buyer Email, Documents URL, Property Address, and Status
- **Tasks tab**: Columns for Transaction ID, Task Name, Task Description, and Status

## Configuration steps

1. Authenticate your Google Sheets and Google Drive accounts in n8n
2. Update the Google Sheets trigger node to point to your copied spreadsheet
3. Set the parent folder ID in the "Create Client Documents Folder" node (where transaction folders should be created)
4. Customize the initial task name and description in the "Add Initial Upload Task" node
5. Verify all sheet names match your spreadsheet tabs

The workflow triggers every minute checking for new transactions that meet the criteria (has buyer email, missing documents URL).

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
