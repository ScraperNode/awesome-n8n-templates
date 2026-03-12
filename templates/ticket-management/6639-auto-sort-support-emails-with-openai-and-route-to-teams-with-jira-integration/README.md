# 🎫 Auto-sort support emails with OpenAI and route to Teams with Jira integration

> ⚡ **604 views** · 🎫 [Ticket Management & Triage](../)

## Description

This automated n8n workflow provides an AI-powered email classifier for support emails, automatically categorizing incoming emails and routing them to the appropriate inbox, creating a Jira task, and sending an autoresponse within minutes.

## Main Components
- **IMAP Email** - Monitors incoming support emails via IMAP
- **OpenAI** - Classifies emails into categories (billing, bug, feature)
- **Switch** - Routes emails based on the classified category
- **Send Billing Email** - Forwards billing-related emails to the billing inbox
- **Send Bug Email** - Forwards bug-related emails to the bugs inbox
- **Send Feature Email** - Forwards feature-related emails to the features inbox
- **Create Jira Task** - Creates a task in Jira for each classified email
- **Send Autoresponse** - Sends a confirmation email to the sender

## Essential Prerequisites
- IMAP access to the support email account
- OpenAI API key
- SMTP server credentials for sending emails
- Jira account with API access

## Customization Guide
1. Update IMAP host and credentials in the IMAP Email node
2. Adjust OpenAI model or prompt in the OpenAI node
3. Modify email addresses (billing@yourdomain.com, bugs@yourdomain.com, features@yourdomain.com) in Send Email nodes
4. Configure Jira project ID and credentials in the Create Jira Task node
5. Change autoresponse text in the Send Autoresponse node

## Features
- **🤖 AI Classification:** Uses OpenAI to categorize emails into billing, bug, or feature
- **🔄 Automated Routing:** Routes emails to the correct inbox based on category
- **🎯 Task Creation:** Creates a Jira task for each support request
- **📧 Autoresponse:** Sends instant confirmation to the sender
- **⚡ Optimizations Made:** Streamlined email processing with single-pass classification

## Parameters to Configure
- `imap_host`: Your IMAP server address
- `imap_user`: IMAP username (e.g., support@yourdomain.com)
- `imap_password`: IMAP password
- `openai_api_key`: OpenAI API key
- `smtp_host`: Your SMTP server address
- `smtp_user`: SMTP username
- `smtp_password`: SMTP password
- `jira_project_id`: Your Jira project ID
- `jira_user`: Jira username
- `jira_api_token`: Jira API token

## How to Use
1. Copy the JSON code from the artifact
2. Open your n8n workspace
3. Select “Import from JSON” or “+” → “From JSON”
4. Paste the JSON code
5. Configure parameters in the respective nodes with your credentials and settings
6. Run the workflow

## Workflow Actions
- **Classify:** Uses OpenAI to categorize incoming emails
- **Route:** Forwards emails to the appropriate inbox
- **Create:** Generates a Jira task for each email
- **Respond:** Sends an autoresponse to the sender

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Jira Software, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
