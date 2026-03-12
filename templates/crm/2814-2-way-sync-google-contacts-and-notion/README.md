# 🤝 2-way sync Google Contacts and Notion

> ⚡ **1,327 views** · 🤝 [CRM & Sales Operations](../)

## Description

Sync your Google Contacts with your Notion database.

You can filter contacts by label or sync all contacts.

All contact information is kept in sync between Google and Notion.
![Screenshot 20250128 102805.jpg](fileId:919)
![Screenshot 20250128 103041.jpg](fileId:920)

### **What happens if I delete a contact?**

It gets deleted on the other end.

- Google Contact deleted → Notion page deleted
- Notion page deleted → Google contact deleted

But you can easily change this behavior by disabling the respective deletion nodes.

### Who is this template for?

- Service providers looking to keep track of client information
- Organized individuals who like to centralize their lives in Notion
- Automation nerds who enjoy creating interesting projects

### How it works

First, you perform an initial import to bring your contacts from Google to Notion.

After that, the workflow listens for changes in both Notion and Google and keeps everything in sync.

### How to set up

Instructions are included within the workflow itself.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 🔗 Nodes Used

HTTP Request, Google Contacts, Notion, Notion Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
