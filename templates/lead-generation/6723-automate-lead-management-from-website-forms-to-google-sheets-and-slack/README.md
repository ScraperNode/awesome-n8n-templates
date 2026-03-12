# 🎣 Automate lead management from website forms to Google Sheets and Slack

> ⚡ **417 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🧠 Workflow Summary

Automates lead management by:

- 🔗 **Webhook Trigger**: Captures form data from your website.
- 🧼 **Code Node**: Standardizes the data format.
- 📄 **Google Sheets**: Appends a new row with lead info.
- 🔔 **Slack Notification**: Alerts your team instantly.

---

## ⚙️ Quick Setup

### 1. Import Workflow
- In n8n, go to **Workflows** → **+ New** → **Import from JSON**.

### 2. Add Credentials
- **Google Sheets**: Use OAuth2 to connect your account.
- **Slack**: Create a Slack App → Add bot scopes → Connect via OAuth2.

### 3. Google Sheet Prep
- Create a sheet with these columns in row 1:
  - Full Name
  - Email Address
  - Business Name
  - Project Intent/Needs
  - Project Timeline
  - Budget Range
  - Received At

### 4. Configure Nodes
- **Webhook**: Use the generated URL in your form settings.
- **Code**: Cleans and maps form fields.
- **Google Sheets Node**:
  - Set to **Append**
  - Map fields using expressions like `={{ $json.email }}`
- **Slack Node**:
  - Choose your channel
  - Send a templated lead alert message with form data

### 5. Activate & Test
- Click **Activate**
- Send a test POST to the Webhook
- Confirm:
  - New row in Sheet ✅
  - Slack alert sent ✅

---

🎯 *Use this automation to capture leads, log data, and notify your team—all hands-free.*

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
