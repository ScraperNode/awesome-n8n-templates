# 🎣 Add subscribed customers to Airtable automatically

> ⚡ **615 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow allows you to receive updates when a customer is subscribed to a list in GetResponse and add them to a base in Airtable.

![workflow-screenshot](fileId:409)

**GetResponse Trigger node:** This node triggers the workflow when a customer is added to a list. Based on your use-case, you can select a different event.

**Set node:** The Set node is uded here to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. For this workflow, we set the name and email of the customer.

**Airtable node:** The data from the **Set node** is added to a table in Airtable. Based on your use-case, you may want to add the infromation about the customer to a CRM instead of a table in Airtable. Replace the Airtable node with the node of the CRM where you want to add the data.

## 🔗 Nodes Used

Airtable, GetResponse Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
