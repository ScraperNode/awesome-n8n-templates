# 🤝 Sync Facebook leads from Google Sheets to Perfex CRM via REST API

> ⚡ **64 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who’s it for
This workflow is built for sales and marketing teams who collect Facebook Lead Ads into Google Sheets and want to automatically sync those leads into Perfex CRM without manual data entry or duplicate records.

## What it does
The workflow checks Google Sheets for new rows where `lead_status` is marked as `CREATED`. For each lead, it searches Perfex CRM using the email address via the Rest API module for the Perfex CRM plugin. If the lead already exists, the workflow updates the sheet with a clickable CRM link and marks the row as `ADDED`. If the lead does not exist, it creates a new lead in Perfex CRM through the REST API and then updates the sheet accordingly.

This ensures your CRM stays up to date while preventing duplicate lead creation.

## How it works
1. A scheduled trigger runs the workflow.
2. Google Sheets retrieves leads with status `CREATED`.
3. The workflow searches Perfex CRM using the REST API.
4. If found → update Sheet.
5. If not found → create lead in CRM.
6. The sheet is updated with the CRM record link.

## Requirements
- Google Sheets account
- Perfex CRM
- Rest API module for the Perfex CRM plugin enabled
- API token configured in n8n credentials (do not hardcode it)

## How to customize
You can modify the lead field mappings, assign leads to different staff members, add tags, or adjust the schedule interval and batch size depending on your lead volume.

## Support / Contact

If you need help setting up or customizing this workflow, feel free to reach out:

Email: asrafulattare@aftie.eu  
WhatsApp: +1 (760) 933-7005 (WhatsApp only)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
