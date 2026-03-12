# 🤝 Customer onboarding automation with HubSpot, email sequences and team alerts

> ⚡ **12,924 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Learn Customer Onboarding Automation with n8n


## ✅ How It Works
This smart onboarding automation handles new customer signups by:

Receiving signup data via webhook
Validating required customer info
Creating a contact in HubSpot CRM
Sending a personalized welcome email
Delivering onboarding documents after 2 hours
Sending a personal check-in email after 1 day
Sending a Week 1 success guide after 3 days
Updating CRM status and notifying the team at each milestone
It’s designed for professional onboarding, with built-in timing, CRM integration, and smart notifications to improve engagement and retention.

## 🛠️ Setup Steps
**Create Webhook**
Add a Webhook node in n8n with POST method — this triggers when a new customer signs up.
Validate Customer Data
Add an IF node to check if email and customerName are present.
**Create CRM Contact**
Use a HubSpot node to create a new contact, map fields (e.g., split name into first/last).
**Send Notifications**
Add a Telegram or Slack node to alert your team instantly.
**Send Welcome Email**
Use an Email Send node for a warm welcome, customized with customer details.
**Wait 2 Hours**
Add a Wait node to delay next steps and avoid overwhelming the customer.
Send Onboarding Documents
Use another Email Send node to deliver helpful PDFs or guides.
**Wait 1 Day & Send Check-in**
Another Wait node, followed by a personal check-in email using the customer’s name.
Wait 2 More Days & Send Success Guide
Deliver Week 1 content via email to reinforce engagement.
**Update CRM & Notify Team**
Use HubSpot to update status and Telegram/Slack to notify your team of completion.

## 🔗 Nodes Used

Send Email, Webhook, Telegram, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
