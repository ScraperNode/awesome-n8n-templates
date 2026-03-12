# 🎣 Find emails with Dropcontact on Typeform submission

> ⚡ **617 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically finds verified and nominative email and all information (with Dropcontact) to prospect properly from a Typeform.

![workflow-screenshot](fileId:563)

- **Typeform Trigger**: This node triggers the workflow when a new Typeform is submitted.

- **Dropcontact**: This node fetches the new contact information and returns the data of the person and the company associated with the email address, job function, and all legal information.
- **Airtable - List**: This will list all the entries from your table in order to check if the subscriber is new or not.
- **If**: Does the contact exist in your Airtable yet?
- **Set**: Set values on the Airtable values
- **Airtable Update**: This node updates your record with new and up-to-date data
- **Airtable - Create**: This node creates a new record when the subscriber is a new lead
- **Slack**: This node sends an alert when the record is added or updated

## 🔗 Nodes Used

Airtable, Slack, Typeform Trigger, Dropcontact

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
