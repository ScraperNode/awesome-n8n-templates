# 🤝 Sync face-to-face fundraising data from offline Google Sheets to SinergiaCRM

> ⚡ **34 views** · 🤝 [CRM & Sales Operations](../)

## Description

Automate syncing of offline donor data from Google Sheets into SinergiaCRM for fast, error-free face-to-face fundraising tracking.

### Who is this workflow for?
This workflow is perfect for nonprofit organizations that run face-to-face fundraising campaigns and collect donor data offline (e.g. via tablets or spreadsheets). It helps fundraising and CRM teams ensure donor records are correctly and automatically stored in **SinergiaCRM**, a popular CRM platform used by NGOs.

### What it does / How it works
- Watches a Google Sheet for new rows (also works offline if synced later).
- Filters rows marked `To CRM = Yes` and `Processed = No`.
- Checks if the donor already exists in **SinergiaCRM** (based on NIF).
- If the contact exists: creates a “member” relationship and a payment commitment.
- If not: creates the contact first, then adds the relationship and commitment.
- Finally, updates the original row as “Processed” to prevent re-importing.

### Requirements
- An active **Google Sheets** account with the donor spreadsheet.
- A **SinergiaCRM** account with API/OAuth access.
- Fields `First name`, `Last name`, `Email`, `NIF`, `To CRM`, `Processed` must exist in the sheet.
- SinergiaCRM modules enabled: Contacts, stic_Contacts_Relationships, stic_Payment_Commitments.

### How to set up
1. Connect your **Google Sheets** account and set the correct Document ID and Sheet name in the trigger and update nodes.  
2. Connect your **SinergiaCRM** account using OAuth credentials.  
3. Adjust the `assigned_user_id` field if required by your CRM instance.  

### How to customize the workflow
- Change the filter conditions in the IF nodes to match your business logic.
- Customize fields like relationship type, amount, and periodicity to suit your campaign.
- Add or remove nodes if you want additional steps (like sending Slack notifications).

📌 Category: **CRM & Customer Management**  
📘 [Learn more about SinergiaCRM](https://sinergiacrm.org)

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
