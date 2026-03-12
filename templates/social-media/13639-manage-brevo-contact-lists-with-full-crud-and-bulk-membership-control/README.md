# 📱 Manage Brevo contact lists with full CRUD and bulk membership control

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Brevo List Management Master Template

Master advanced Brevo list operations that go beyond the native n8n node. This template provides a complete toolkit for dynamic email marketing automation, allowing you to manage lists and contact memberships with professional-grade precision.

### Key Features

* **Full List CRUD:** Create, Read, Update, and Delete Brevo lists via API.
* **Auto-Pagination:** Pre-configured pagination settings to handle hundreds of lists or thousands of contacts automatically.
* **Membership Control:** Bulk add or remove contacts from specific lists using unique identifiers.
* **Smart Sorting:** Easily organize list data using built-in query parameters.

### How to use

1. **API Key:** Get your API Key from the Brevo Settings page (SMTP & API section).
2. **Credentials:** Use n8n's native **Brevo** credential type (select "Predefined Credential Type" in the HTTP Request nodes).
   * Alternatively, use **Header Auth** with the name `api-key` and your key as the value.
3. **Customize:** The nodes use path parameters like `{listId}`. Map these dynamically from your trigger data or set them as static values.

### Documentation & Support

For a deep dive into how each node works and how to extend this workflow, check out the full tutorial: [Mastering Brevo List Management in n8n](https://n8nplaybook.com/post/2026/02/brevo-list-management-n8n-api/)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
