# 🔧 Grist: On row confirmed, create row in other table

> ⚡ **1,127 views** · 🔧 [Miscellaneous](../)

## Description

In Grist, when I mark a row as confirmed (via a toggle):
![image.png](fileId:787)

a webhook is set up to notify n8n, and this workflow will create derived records in the destination table.

### Design decisions
#### Confirmation-based
In the source table **there is a boolean column "Confirmed" that will trigger the transfer**.
This way there is a manual check involved & it's a conscious step to trigger the workflow.
#### Runs once
If the destination table already contains an entry, **we will not re-create/update** it (as it might've already been changed manually)


### Setup
1. Create a boolean column `Confirmed` in source table
2. **Add a webhook** in [Grist Settings](https://support.getgrist.com/newsletters/2023-05/#webhooks)
3. Add grist **API credentials** in n8n
4. Set **document ID** & source **table ID/Name** in the '**get existing**' node
3. Set **docID**, the destination **table ID/Name** - and the **columns & values** you want in the **Create Row** node

## 🔗 Nodes Used

Webhook, Grist

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
