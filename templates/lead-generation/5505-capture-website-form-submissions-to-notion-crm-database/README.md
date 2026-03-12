# 🎣 Capture website form submissions to Notion CRM database

> ⚡ **1,216 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ⚡️ How It Works

This workflow captures form submissions from your website, formats the data, and automatically creates a new entry in your Notion CRM database. It eliminates manual copy-pasting and keeps your leads or requests organised in one place.



## 🛠 Setup Steps
	1.	Webhook Node
	•	Create a webhook in n8n.
	•	Connect your website form to POST submissions to this webhook URL.
	2.	Code Node
	•	Formats the incoming data to match your Notion database structure.
	•	You can customise the fields in the code to suit your specific form inputs.
	3.	Notion Node (Create Page)
	•	Connect your Notion account.
	•	Choose your target database.
	•	Map each field from the Code node output to your Notion database properties.
	4.	Test
	•	Submit a test form entry.
	•	Confirm the data appears correctly in Notion.

⸻

## 👥 Who It’s For

✅ Freelancers collecting project inquiries
✅ Agencies managing client onboarding forms
✅ Business owners wanting organised lead capture
✅ Teams that use Notion as their central CRM or task manager
✅ Anyone tired of manually transferring form data into Notion

## 🔗 Nodes Used

Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
