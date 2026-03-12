# 🧾 Automate real-time QuickBooks invoice sync to Google Sheets

> ⚡ **1,074 views** · 🧾 [Invoice Processing](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for real-time financial reporting. 

It instantly syncs new QuickBooks invoices to Google Sheets, using specific invoice data or keywords as triggers to ensure your financial records are always accurate and up-to-date.

It uses a webhook to capture every new or updated invoice and logs the essential details into a designated Google Sheet. Perfect for creating custom reports, data backups, or a real-time dashboard of your accounts receivable.


## Use Cases

- **Financial Reporting:** Create a simple, shareable Google Sheet for team members who don't have QuickBooks access.
- **Data Backup:** Maintain a secure, independent log of all your invoices outside of the QuickBooks ecosystem.
- **Custom Dashboards:** Use the Google Sheet as a data source for tools like Google Data Studio or Grafana to build custom financial dashboards.
- **Auditing:** Easily track the history and status of all invoices in a simple, searchable spreadsheet format.


## How it Works

**1. Instant Webhook Trigger:** The workflow activates the moment an invoice is created or updated in QuickBooks. The QuickBooks webhook sends a notification to n8n, kicking off the process in real time.

**2. Fetch Full Invoice Details:** The initial webhook notification only contains the invoice ID. This node uses that ID to make a call back to the QuickBooks API and retrieve the complete invoice data, including customer name, due date, and more.

**3. Format Key Data:** A simple Code node cleans up the data fetched from QuickBooks. It extracts only the fields you need—ID, Domain, Customer Name, and Due Date—and structures them perfectly for the next step.

**4. Append or Update in Google Sheets**: The final node connects to your Google Sheet and uses the powerful "Append or Update" operation.
- If the ID of the invoice doesn't exist in the sheet, it adds a new row.
- If the ID already exists, it updates the existing row with the latest information.

This ensures your Google Sheet is always a perfect mirror of your QuickBooks invoice data, preventing duplicates and keeping everything current.

## Setup Instructions

For this workflow to run successfully, follow these setup steps:

**1. Credentials:**
- QuickBooks: Connect your QuickBooks account credentials to n8n.
- Google: Connect your Google account using OAuth2 credentials. Ensure the Google Sheets and Google Drive APIs are enabled.

**2. QuickBooks Webhook Configuration:**
- Activate the workflow. Copy the Production URL from the Webhook node.
- In your Intuit Developer Portal, go to the webhooks section for your app.
- Paste the URL and subscribe to Invoice events (e.g., Create, Update).

**3. Google Sheet Setup:**
- Create a Google Sheet for your invoice data.
- Crucially, create the following headers in the first row of your sheet:
-ID
-Domain
-Customer Name
-Due Date

**4. Node Configuration:**
- In the Append or update row in sheet node, select your Google Sheet document and the specific sheet name from the dropdown lists. The columns should map automatically if you've set up the headers correctly.


## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, Webhook, QuickBooks Online

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
