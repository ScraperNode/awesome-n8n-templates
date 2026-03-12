# ⚙️ Elastic alert notification via Microsoft Graph API

> ⚡ **1,299 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## **Who is this template for?**

This template is for teams and administrators who use n8n to monitor Elastic alerts and want to receive automated email notifications when an alert is triggered. It leverages Microsoft Graph API to send emails and provides an efficient way to notify users about alerts directly in their inbox.

## **How it works?**

The template connects to the Elastic API to retrieve alert data. When a new alert is detected, the workflow processes the alert content and sends an email notification via Microsoft Graph API. The email includes alert details such as the alert name, timestamp, severity, and a summary of the message, allowing for quick action or review.

## **Setup steps**

Step 1: Set up OAuth2 Credentials in n8n for Microsoft Graph API with Mail.Send permission.
Step 2: Configure your Elastic API endpoint in the HTTP Request node to retrieve alerts.
Step 3: Modify the email recipients in the template to specify who will receive the alert notifications.
Step 4: Customize the email format, if necessary, to include additional alert details or adjust the message.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
