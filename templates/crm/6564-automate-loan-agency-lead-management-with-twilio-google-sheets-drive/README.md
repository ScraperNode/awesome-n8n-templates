# 🤝 Automate loan agency lead management with Twilio, Google Sheets & Drive

> ⚡ **125 views** · 🤝 [CRM & Sales Operations](../)

## Description

### How to Set Up 🛠️

Setting up this powerful CRM system is a straightforward process that connects your lead sources, your database, and your communication channels. The core steps involve preparing your database, importing the workflow, and then customizing the nodes to match your business rules.

### Setup Steps:

1.  **Prepare Your Database**:
    * Create a new Google Sheet (or Airtable Base) to serve as your central CRM database.
    * Title the sheet `Loan Agency CRM` and create the following columns in the first row: `Name`, `Phone Number`, `Loan Type`, `Assigned Agent`, `Status`, `Date Captured`.
    * This will be the single source of truth for all your leads.

2.  **Import the Workflow**:
    * Copy the provided workflow JSON and import it into your n8n instance. This will create both the "Lead Intake" and "Status Update" workflows.

3.  **Configure Integrations**:
    * **Webhook**: This node is the entry point. Simply copy the generated URL to use in your lead form integrations.
    * **Google Sheets**: Add your Google Sheets credential. Replace `[YOUR SPREADSHEET ID]` with the ID from your newly created sheet.
    * **Twilio / WhatsApp**: Add your communication credential. Replace `[YOUR TWILIO NUMBER]` with your number.
    * **Google Drive (for documents)**: Add your credential and specify a secure folder ID where documents will be stored.

4.  **Customize Business Logic**:
    * **Node (`Auto-Assign Agent`)**: Open this `Function` node and edit the JavaScript code. Change the agent names, loan types, and locations to match your specific team and business rules.
    * **Node (`Twilio`)**: If you have a list of agent phone numbers, you can use a lookup expression here to automatically send the notification to the right person.

5.  **Connect Your Lead Sources**:
    * Go to your Facebook Lead Ads, Google Forms, or website forms.
    * In the integration settings, paste the `Webhook` URL you copied from n8n.
    * This will ensure that every new lead is automatically sent to your CRM system.

6.  **Activate & Test**:
    * Once all settings are configured, save the workflow.
    * Click the "Inactive" toggle to make it live.
    * Run a test by submitting a dummy lead through one of your forms to ensure the data flows correctly into your Google Sheet and an agent is notified.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
