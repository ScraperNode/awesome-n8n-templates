# 🔒 Monitor SSL certificate expiry with Google Sheets and multi-channel alert

> ⚡ **2,116 views** · 🔒 [SecOps & Security Automation](../)

## Description

## SSL Expiry Alert System

### Who is this for?
This workflow is ideal for administrators or IT professionals responsible for monitoring SSL certificates of multiple websites to ensure they do not expire unexpectedly.

### Problem
SSL certificates play a crucial role in ensuring secure communication over the internet. However, if not monitored closely, they can expire, leading to potential security risks and service disruption. This workflow helps in proactively monitoring SSL certificate expiry dates.

### Functionality
1. Pulls URLs to monitor from a Google Sheet.
2. Checks SSL certificates using SSL-Checker.io.
3. Updates Google Sheet with SSL details such as expiry date and certificate status.
4. Sends email alerts for SSL certificates nearing expiry (&lt;30 days) or invalid certificates.

### Setup
1. Clone the provided Google Sheet and update the Google Sheet URL in the "URLs to Monitor" node.
2. Set up Google Sheets and Gmail credentials in n8n.
3. Configure the Discourse Trigger for weekly monitoring.
4. Customize email/telegram/ntfy alert settings as needed.

### Customization
- Modify the frequency of monitoring by adjusting the trigger interval in the "Weekly Trigger" node.
- Customize email content and recipients in the "Send Alert Email" node.
- Extend functionality by adding additional checks or actions based on SSL certificate status.

### Note
Ensure proper authentication and authorization for accessing Google Sheets, SSL-Checker.io, and Gmail accounts within the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
