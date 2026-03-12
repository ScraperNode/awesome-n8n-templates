# 🔬 Add new incoming emails to a Google Sheets spreadsheet as a new row

> ⚡ **4,760 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the process of capturing and storing incoming email details in a structured spreadsheet format, such as Google Sheets or Excel. Whenever a new email is received, the workflow extracts key details—including the sender’s email, subject, email body, and optional attachments—and logs them as a new row in the spreadsheet.

You can customise this workflow to extract additional details, filter emails based on specific criteria, or send notifications when new entries are added.

## Pre-conditions & Requirements

Before setting up this workflow, ensure that:

- You have access to the email provider (e.g., Gmail, Outlook, or IMAP-supported email services).
- The Gmail Node must be enabled in n8n.
- You must authenticate n8n with Google OAuth2 to access your inbox.
- Ensure that the Gmail API is enabled in the Google Cloud Console.
- You have an existing Google Sheet where data will be stored.
- The Google Sheets API is enabled.
- You authenticate n8n with your Google account.

## Steps

### Step 1: Add the Gmail Trigger Node

- Click on "Add Node" and search for "Gmail".
- Select "Gmail Trigger" and click to add it.
- Under Authentication, click "Create New" and authenticate with your Google account. (If you have already connected your Google account, simply select it.)
- In the Trigger Event field, select "Message Received".
- Under Filters, you can specify:
	- Label/Mailbox: If you want to listen to emails from a specific folder (optional).
	- From Address: If you only want to receive emails from specific senders (optional).
- Click "Execute Node" to test the connection.
- Click "Save".

**What This Does:**
This node listens for new incoming emails in your Gmail inbox.
 
## Step 2: Store Email Data in Google Sheets

- Click on "Add Node" and search for "Google Sheets" (or Microsoft Excel, if applicable)
- Under Authentication, connect your Google account
- Select the target Spreadsheet and Sheet Name where the data will be stored
- Set the Operation to "Append Row"
- Map the extracted email data to the correct columns.
- Click "Execute Node" to test and verify data storage
- Click "Save"

**What This Does:**
This node automatically adds a new row for each incoming email, ensuring a structured and searchable email log.
 
## Final Step
Attach both node and execute the workflow.


## Who’s behind this?

WeblineIndia’s [AI development team](https://www.weblineindia.com/ai-development.html). 

We've delivered 3500+ software projects across 25+ countries since 1999. From no-code automations to complex AI systems — our AI team builds tools that drive results. 

Looking to [hire AI developers](https://www.weblineindia.com/hire-ai-developers.html)? Start with us.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
