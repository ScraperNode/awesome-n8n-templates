# 🎣 Verify mailing address deliverability of new contacts in HighLevel Using Lob

> ⚡ **2,951 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n workflow verifies the deliverability of mailing addresses stored in HighLevel by integrating with Lob's address verification service.

## Who is this for?
This template is designed for HighLevel users who need to ensure the accuracy of mailing addresses stored in their CRM systems.

## What problem is this workflow solving? / Use Case
This workflow addresses the challenge of maintaining accurate mailing addresses in CRM databases by verifying the deliverability of addresses.

## What this workflow does
1. A new contact is created in HighLevel
2. Webhook sent to n8n
3. Verify if the address is deliverable via LOB
4. Report back to HighLevel

Set Up Steps
- Watch this setup video: 
https://www.youtube.com/watch?v=T7Baopubc-0

## Takes 10-30 minutes to set up
Accounts Needed:
HighLevel
LOB Account (https://www.lob.com $0.00/mo 300 US addresses Verifications)
n8n

Before using this template, ensure you have API keys for your HighLevel app and Lob. Set up authentication for both services within n8n. 

## How to customize this workflow to your needs
You can customize this workflow by adjusting the trigger settings to match HighLevel's workflow configuration. Additionally, you can modify the actions taken based on the deliverability outcome, such as updating custom fields or sending notifications.

## 🔗 Nodes Used

HTTP Request, Webhook, HighLevel

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
