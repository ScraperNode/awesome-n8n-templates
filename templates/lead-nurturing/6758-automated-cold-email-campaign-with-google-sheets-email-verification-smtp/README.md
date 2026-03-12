# 💬 Automated cold email campaign with Google Sheets, email verification & SMTP

> ⚡ **3,671 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Use this template if you’re collecting leads in Google Sheets manually or automatically and need to send them emails daily using any personal or professional email provider. It’s simple yet effective.

I’ve kept it easy so that anyone without technical or coding knowledge can still automate their emails and achieve excellent ROI. Setting up the workflow takes only 15 minutes.


## How it works:
We connect Google Sheets with n8n to automatically fetch lead data. Google Sheets is used because it’s easy and widely accessible. Then, n8n sends emails daily at your scheduled times to the respective email addresses, using the subject lines and body text you've configured. It also verifies emails before sending.

It checks email availability, deliverability, and updates the Google Sheet/CRM with the respective fields.




## Requirements:
1. A Google Sheet/Excel/CRM tools with leads
(*A sample Google Sheet link is provided in the template*)

2. A working email account with SMTP information
(*SMTP info for the top 10 email providers is provided in the template*)

3. API key from any email verification tool
(*We use the Hunter API key in our use case. You can find the link in the template.*) 

## Setup Steps:
You need a Google Sheet where you're collecting leads. You can replace Google Sheets with your CRM tool. Connect it using your credentials.

Replace the manual trigger with a scheduled trigger to automate emails at your preferred time.

Replace the email verification tool/Hunter API with your own API key.

Add your SMTP credentials to connect the template with your preferred email provider. Using SMTP, you can send emails through Gmail, Outlook, Zoho, or any similar provider. This makes sending emails simple and cost-efficient.

```
Note: SMTP, which stands for Simple Mail Transfer Protocol, is a communication protocol used to send email messages between mail servers.

```

After sending the email, we update the Google Sheet with “Sent”; hence, the email is not sent again the next day.

## 🔗 Nodes Used

Send Email, Google Sheets, Hunter, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
