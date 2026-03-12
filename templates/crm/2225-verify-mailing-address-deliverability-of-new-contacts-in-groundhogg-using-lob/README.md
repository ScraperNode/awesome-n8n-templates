# 🤝 Verify mailing address deliverability of new contacts in Groundhogg using Lob

> ⚡ **1,395 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n workflow verifies the deliverability of mailing addresses stored in Groundhogg CRM by integrating with Lob’s address verification service.

## Who is this for?
This template is designed for Groundhogg CRM users who need to ensure the accuracy of mailing addresses stored in their CRM systems.

## What problem is this workflow solving? / Use Case
This workflow addresses the challenge of maintaining accurate mailing addresses in CRM databases by verifying the deliverability of addresses.

## What this workflow does
A new contact is created in Groundhogg CRM
Webhook sent to n8n
Verify if the address is deliverable via LOB
Report back to Groundhogg CRM

## Set Up Steps
Watch this setup video:
https://www.youtube.com/watch?v=nrV0P0Yz8FI

Takes 10-30 minutes to set up

## Accounts Needed:
- Groundhogg CRM
- LOB Account (https://www.lob.com $0.00/mo 300 US addresses Verifications)
- n8n

Before using this template, ensure you have API keys for your Groundhogg CRM app and Lob. Set up authentication for both services within n8n.

## How to customize this workflow to your needs
You can customize this workflow by adjusting the trigger settings to match Groundhogg CRM’s workflow configuration. Additionally, you can modify the actions taken based on the deliverability outcome, such as updating custom fields or sending notifications.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
