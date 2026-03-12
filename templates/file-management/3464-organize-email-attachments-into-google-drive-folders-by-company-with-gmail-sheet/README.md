# 📁 Organize email attachments into Google Drive folders by company with Gmail & Sheets

> ⚡ **4,311 views** · 📁 [File Management](../)

## Description

# Automated Email Attachment Organizer
*Automatically process labeled emails with attachments into organized Google Drive folders*

---

## Who Is This For?
- **Teams or Individuals** needing to:
  - Automatically sort invoices, receipts, and files.
  - Organize client documents by date.
  - Verify sender emails against a whitelist.
  - Timestamp files to avoid duplicate names.

---

## What Does This Workflow Solve?
- 🕒 **Manual Email Sorting**: Saves time by automating the organization of email attachments.
- 📂 **Disorganized Cloud Storage**: Ensures attachments are neatly stored in Google Drive folders.
- 📧 **Unverified Sender Issues**: Filters and validates emails using a whitelist.
- 🔄 **Duplicate Filenames**: Uses timestamps to ensure every file name is unique.

---

## Setup Guide

### 1. Pre-Requisites
- **Whitelist Sheet**: Make a copy of the [Example Whitelist Sheet](https://docs.google.com/spreadsheets/d/1tTz9BflstxVL18YG11Ny1eiDj3FcjvtZ619b_bHx8h4/copy)
- **Gmail Filter**: Create a filter in Gmail to label emails with attachments.
  
**To Create a Gmail Filter:**
1. Open your Gmail Inbox.
2. Click the search bar and select **"Show search options"**.
3. Enter your criteria (e.g., type `has:attachment`).
4. Click **"Create filter"**.
5. Choose **"Apply the label: Custom_Label"** and save.

---
### 2. Credentials Setup
Make sure your n8n instance is connected with:
- **Gmail Account**: (via OAuth2)
- **Google Drive Account**: (via OAuth2)
- **Google Sheets** (via OAuth2)

---

### 3. Configure Your n8n Workflow Nodes

#### 1. Trigger and Email Retrieval
- **Gmail Trigger**: Setup check interval and filters for emails (i.e. emails labeled with `Custom_Label`)


#### 2. Whitelist settings
- **Lookup in Sheets**: Searches for a row with the sender email. Configure this node to point to your whitelist spreadsheet containing two columnds:
*|email|company|*

#### 3. File storage location
- Confirue parent folder to create sub-folders and store files into in the **Create Company Folder** node *Parent Folder* dropdown

---

## Final Steps
1. **Test Your Workflow**: Run the workflow to verify emails are processed and files are uploaded correctly.

---

Happy Automating!

## 🔗 Nodes Used

Function, Google Sheets, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
