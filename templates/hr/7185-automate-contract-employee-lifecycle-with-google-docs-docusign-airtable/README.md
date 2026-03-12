# 👥 Automate contract employee lifecycle with Google Docs, DocuSign & Airtable

> ⚡ **206 views** · 👥 [HR & Recruitment](../)

## Description

### ⚙ Automated Contract Employee Placement & Management System: Setup Guide

This guide will walk you through setting up your n8n workflow. By the end, you'll have a fully automated system for managing your contract employee placements, from generating documents to sending renewal reminders.

---

### How It Works

This workflow is structured in three logical phases to automate the entire contract management lifecycle:

1.  **Phase 1: Placement Trigger & Data Retrieval**: The workflow begins when a new placement record is created in your CRM or database. It automatically retrieves all necessary employee and client data to prepare for contract generation.

2.  **Phase 2: Contract Generation & Delivery**: The system uses a pre-made Google Docs template to generate a professional contract. It then automatically sends this document for e-signature via DocuSign to both the employee and the client.

3.  **Phase 3: Post-Placement Management & Reminders**: Once the contract is signed, the workflow updates your database, notifies your team, and adds the start date to your calendar. A separate scheduled automation runs weekly to proactively check for expiring contracts and send renewal reminders.

---

### Step-by-Step Setup Guide

Follow these steps to configure the workflow in your n8n instance.

### **Step 1: Prerequisites & Database Setup**

Before you begin, ensure you have the following accounts and a workspace set up:
* **n8n Instance:** Your self-hosted or cloud-based n8n instance.
* **Airtable:** Your main database for managing placements.
* **Google Docs:** A contract template saved in your Google Drive.
* **DocuSign:** For handling electronic signatures.
* **Slack:** For internal team notifications.
* **Google Calendar:** For adding start dates to a shared team calendar.

**Airtable Database Preparation:**
Create an Airtable base with a `Placements` table. This table must include the following columns:
* `Candidate Name`
* `Candidate Email`
* `Client Name`
* `Client Contact Email`
* `Start Date`
* `End Date`
* `Status`

**Google Docs Template Preparation:**
Create a contract template in Google Docs with placeholders in the format `{{placeholder}}` (e.g., `{{candidateName}}`, `{{clientName}}`).

### **Step 2: Workflow Import & Credential Configuration**

1.  Import the workflow's `.json` file into your n8n instance. All the necessary nodes will appear on your canvas.
2.  Click on any node with a red **"!"** icon (e.g., the `Airtable` or `DocuSign` node).
3.  Click **"Create new credential"** and follow the instructions to connect your accounts. Repeat this for all nodes that require credentials.

### **Step 3: Node-Specific Configuration**

Configure the following key nodes to match your specific setup:

1.  **Webhooks Trigger**:
    * Click on the `Webhooks Trigger` node and copy the **Webhook URL**.
    * Configure your CRM or Airtable to send a `POST` request to this URL whenever a new placement is created.

2.  **Airtable Nodes**:
    * For every `Airtable` node in the workflow, enter the correct `Base ID` and `Table Name` (`Placements`) that you created in Step 1.

3.  **Google Docs Node**:
    * In the `Template File ID` field, enter the file ID of your Google Docs contract template.
    * Map the placeholders you created in your template to the dynamic data from your database (e.g., `{{candidateName}}` should be mapped to `={{ $json.candidate_name }}`).

4.  **DocuSign Node**:
    * Enter your `Account ID` in the credentials settings.
    * Map the `Signer Name` and `Signer Email` fields to the data from your database.
    * Ensure your DocuSign envelope template is configured with anchor text (e.g., `/signature/`) that matches the anchor tags in the DocuSign node.

5.  **Cron Trigger**:
    * The `Cron Trigger` node is set up to check for expiring contracts. You can adjust the `Interval` parameter (e.g., `Every Week`) to match your desired schedule.

### **Step 4: Activation**

1.  Once all credentials and node configurations are complete, click **"Save"** at the top of the canvas.
2.  Toggle the workflow to **"Active"** in the top-right corner.

The workflow is now live! It will automatically handle contract generation, signatures, and reminders for every new placement.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Google Calendar, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
