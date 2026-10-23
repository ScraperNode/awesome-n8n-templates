# 🤝 Onboard new clients via forms with Google Sheets, Drive, Notion and Gmail

> ⚡ **82 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers on an n8n Form submission, checks Google Sheets for duplicate clients, and for new entries creates and shares a Google Drive folder, creates a Notion database page, sends a Gmail welcome email with links, and updates the Google Sheets record with onboarding status.

## How it works
1. Triggers when a new submission is received via an n8n Form.
2. Looks up the submitted email in Google Sheets to determine whether the client already exists.
3. Stops processing if a matching client record is found.
4. Appends or updates the client details in Google Sheets for new clients.
5. Creates a dedicated Google Drive folder under the configured parent folder and shares it with the client’s email address.
6. Creates a Notion database page for the client and stores the email, Drive folder URL, and an onboarding status.
7. Sends a personalized welcome email via Gmail with the Drive and Notion links, then updates Google Sheets to mark the client as onboarded.

## Setup
1. Configure the n8n Form Trigger (or replace it with your own form/webhook source) and ensure it captures Client Name, Company Name, Email, Phone Number, and Project Details.
2. Add Google Sheets Service Account credentials and update the spreadsheet ID and sheet tab used for the client lookup and append/update operations.
3. Add Google Drive OAuth2 credentials and set the parent folder ID where new client folders are created.
4. Add Notion OAuth2 credentials and select the target Notion database, ensuring it has properties for Email (email), Drive Folder (url), and Status (select).
5. Add Gmail OAuth2 credentials and customize the welcome email subject/body and any scheduling link included in the message.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Notion, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
