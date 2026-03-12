# 🎣 Automate lead processing from landing pages with Zoho CRM, Jira & Slack

> ⚡ **147 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Landing Page Lead Intake via Webhook to Zoho CRM, Jira Task & Slack Alerts

This n8n workflow captures lead data from a landing-page webhook, validates required fields and then processes the lead by creating a Zoho CRM Lead, generating a Jira Task and notifying a Slack channel. If required fields are missing, the workflow skips CRM + Jira creation and instead notifies Slack with available lead details.

### ⚡ Quick Start: 5-Step Fast Implementation

1. Import this workflow JSON into n8n.  
2. Configure credentials: Zoho CRM OAuth2, Jira Cloud, Slack OAuth2.  
3. Copy the webhook URL and connect it to your landing page form.  
4. Ensure your form sends: first_name, last_name, company_name, email, phone, title, description, referrer.  
5. Activate workflow → send test POST → verify Zoho, Jira & Slack outputs.


## What It Does
This workflow works as an automated lead pipeline. When the landing page sends JSON to the webhook, the workflow checks if `last_name` and `company_name` are present. If both fields exist, it proceeds to create a Zoho CRM lead, then generates a Jira task using the same data. A detailed Slack message is then posted with all lead information and the newly created Jira task ID.

If any of the required fields are missing, the workflow does not create CRM or Jira entries. Instead, it sends a Slack notification with available details so teams can intervene manually without incorrect CRM data entry.


## Who’s It For
- Marketing teams capturing leads from landing pages.
- Sales teams using CRM and Jira for task tracking.
- Internal teams who want Slack alerts for new leads.
- Agencies and startups handling inbound lead flow.
- Anyone requiring automated lead routing without manual work.


## Prerequisites
- n8n instance  
- Zoho CRM OAuth2 credential  
- Jira Software Cloud credential  
- Slack OAuth2 credential  
- A landing page that sends POST JSON payloads  
- Required payload fields:  
  - first_name  
  - last_name  
  - company_name  
  - email  
  - phone  
  - title  
  - description  
  - referrer  


## How to Use & Setup

### Step 1: Import Workflow
Go to n8n → Workflows → Import workflow JSON.

### Step 2: Configure Credentials
Add your credentials in:
- Zoho CRM (Create a lead)
- Jira Software Cloud (Create an issue)
- Slack (Send a message & Send a message1)

### Step 3: Connect Webhook
Copy the Webhook URL from the **Webhook** node and configure your landing page to send POST JSON to it.

### Step 4: Field Validation
The **If** node checks:
- last_name exists  
- company_name exists  

If both exist → CRM + Jira + Slack  
If missing → Slack-only alert

### Step 5: Test Workflow
Send sample JSON using your landing page or Postman.  

Check Zoho CRM, Jira task creation, and Slack messages.

### Step 6: Activate Workflow
Enable workflow after verification.


## How To Customize Nodes?

### Webhook Node
- Add/remove expected fields  
- Modify payload structure  

### If Node
- Add more validations  
- Switch to OR logic  

### Zoho CRM Lead Node
- Add additional fields  
- Modify CRM field mapping  

### Jira Task Node
- Change project, issue type, priority, assignee  
- Modify description template  

### Slack Nodes
- Change channel  
- Rewrite notification messages  
- Add Slack formatting  


## Add-ons (Optional Enhancements)
- Email notification to lead  
- Google Sheets entry logging  
- Duplicate lead detection  
- Lead scoring system  
- CRM sync extensions (Contact, Account, etc.)  


## Use Case Examples
1. Marketing campaign lead automation.
2. Instant Slack alerts for new inbound leads.
3. Customer inquiry → Jira task workflow.
4. Data quality enforcement (avoid CRM pollution).
5. Trigger for larger lead qualification workflow.

(And many more possible use cases.)


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Webhook not triggered | Wrong webhook URL or wrong HTTP method | Check URL and ensure POST is used |
| Zoho lead not created | Invalid credentials or missing required mapping | Reconnect Zoho credentials and verify fields |
| Jira task not created | Wrong project/issue/assignee config | Verify project, issue type & permissions |
| Slack message not sent | Token expired or incorrect channel ID | Re-authenticate Slack and confirm channel |
| Workflow stops at If node | last_name or company_name missing | Update landing page form to include fields |
| Slack message missing values | Wrong field names in payload | Ensure JSON fields match expected structure |


## Need Help?

For assistance with setup, customization or building enhanced automation workflows, our n8n team at WeblineIndia can help you build & optimize your automations.

We support:
- Workflow customization  
- Add-on development  
- Integration with other CRMs or apps  
- Advanced automation logic

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Zoho CRM

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
