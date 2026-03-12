# 🤝 Sync HubSpot contacts with LinkedIn URLs, detect changes & send Gmail alerts

> ⚡ **377 views** · 🤝 [CRM & Sales Operations](../)

## Description

Automate CSV imports into HubSpot without the mess. Powered by n8n. Supercharged by Pollup AI.
## Who’s this for?
This workflow is perfect for Ops-minded folks in Customer Success, Marketing, and Sales – especially if you’re juggling CSV lists, CRM updates, and team-wide reporting. Whether you're a CS ops lead syncing product usage, or a RevOps manager updating contact records, this will save you hours.

## 🧠 Why it matters
Manually importing CSVs into HubSpot is a headache:
 ❌ Copy-paste errors
 ❌ Mismatched fields
 ❌ Wasted time formatting every upload
This workflow does the heavy lifting for you:
 ✅ Pulls fields dynamically from your HubSpot instance
 ✅ Preps and maps CSV data in minutes
 ✅ Syncs with Google Sheets to keep your source of truth aligned

## 🔄 What the workflow actually does
1. **Pulls live field names from HubSpot’s API** (no guesswork)
1. **Indexes and organizes your CSV** for import
1. **Processes & transforms raw data** (optional filters, cleanup, etc.)
1. **Dynamically maps** CSV fields to HubSpot fields
1. **Executes the upload** and logs results


## ⚙️ How to get started
**Prerequisites:**
- HubSpot private app token
- Google Sheets API credentials
- Access to an n8n instance (cloud or self-hosted)

**Setup in 3 steps:**
- Import the JSON into your n8n
- Connect your HubSpot and Sheets accounts
- Upload a CSV through the built-in form — you’re live 🎉


## ✏️ Make it yours
- **Add filters** (e.g., remove duplicates, format fields)
- **Add more HubSpot objects** to match your use case
- **Trigger automation** via webhook, schedule, or custom input

Works beautifully with other Pollup AI flows – so you can scale CS ops with less stress!


## About Pollup AI
Pollup builds **hands-on automations for B2B communication teams**. This n8n workflow is one of many tools helping lean CS teams deliver high-touch outcomes at scale.

Find out more at pollup.ai

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Gmail, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
