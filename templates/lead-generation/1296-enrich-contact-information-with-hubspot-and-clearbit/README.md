# 🎣 Enrich contact information with HubSpot and ClearBit

> ⚡ **2,531 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow enriches the information of a new contact that gets added to HubSpot.

![workflow-screenshot](fileId:554)

**HubSpot Trigger:** This node triggers the workflow when a new contact gets added to HubSpot.

**Get Contact:** This node fetches the information of the new contact.

**Clearbit:** This node returns the data of the person and the company associated with the email address.

**Update Contact:** This node will update the contact with the information returned by the Clearbit node. Based on your use case, you can select which fields you want to update.

## 🔗 Nodes Used

HubSpot, Clearbit, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
