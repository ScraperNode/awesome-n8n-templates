# 🤝 Sync NetSuite customers to Salesforce accounts & contacts with auto upserts

> ⚡ **230 views** · 🤝 [CRM & Sales Operations](../)

## Description

Short Description

Automatically exports customer records from NetSuite and syncs them into Salesforce — creating or updating Accounts and Contacts depending on whether the NetSuite record represents a company or an individual.

Who is this for / Use case

This template is designed for businesses and integration developers who:

- Use NetSuite as their ERP or CRM system.
- Need to automatically sync customer data (both companies and individuals) into Salesforce.
- Want a reliable, scalable solution that supports pagination and upserts.
- Prefer a ready-to-use, easily customizable workflow built on n8n.

How it works

1. Initialize pagination offset.
2. Fetch customer records from NetSuite in batches via REST API.
3. Split the retrieved array into individual items.
4. Check record type — company or individual.
5. Upsert to Salesforce:
	1. For companies → creates/updates Account records.
	2. For individuals → creates/updates both Account and Contact (linked to the Account).
3. Merge results from both branches.
4. Update pagination offset for the next batch.
5. Repeat until all records are processed, then end the workflow.

Setup / Configuration

1. Import the workflow into your n8n instance.
2. Set your NetSuite and Salesforce credentials.
3. Ensure your Salesforce Account/Contact objects have a matching External ID field.
4. (Optional) Adjust mapping fields or filters to your data needs.
5. Execute manually or trigger on a schedule (e.g., daily sync).

## 🔗 Nodes Used

Salesforce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
