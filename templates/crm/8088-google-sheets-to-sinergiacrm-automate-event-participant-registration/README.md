# 🤝 Google Sheets to SinergiaCRM: automate event participant registration

> ⚡ **95 views** · 🤝 [CRM & Sales Operations](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**How it works**

- This workflow automates the registration of event participants in SinergiaCRM from a Google Sheets spreadsheet.
- A Google Sheets Trigger watches for new rows with pending registrations.
- The flow checks if the participant already exists in SinergiaCRM by NIF (national ID).
- If the contact exists, it creates a relationship and registers them for an event.
- If the contact doesn’t exist, it first creates the contact, then adds the relationship and event registration.
- Finally, it marks the row as "Processed" in the original spreadsheet to avoid duplicate entries.

**Set up steps**

- Connect your Google Sheets and SinergiaCRM accounts using OAuth credentials.
- Replace the sample Google Sheet ID and worksheet name with your own.
- Ensure the spreadsheet contains the following columns: First name, Last name, NIF, Email, Event ID, Relation type, Registration date, and Relation date.
- Add the appropriate values in the "To CRM" and "Processed" columns to control processing logic.
- Review sticky notes inside the workflow for additional guidance and customization tips.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
