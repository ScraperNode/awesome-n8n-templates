# 🤝 Automate QuickBooks customer & estimate creation from Google Sheets

> ⚡ **643 views** · 🤝 [CRM & Sales Operations](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution to accelerate your sales and quoting process into Quickbooks.

This workflow creates a seamless data pipeline from a Google Sheet directly into QuickBooks, automating the creation of new customers and their initial sales estimates. It’s designed to save time, reduce human error, and ensure your financial records are always up-to-date.


## How it works

**1. Trigger on New Sheet Row:** The workflow starts automatically when you add a new row containing customer and estimate details to your designated Google Sheet.

**2. Check for Duplicates:** Before doing anything else, it takes the customer's name from the sheet and searches your QuickBooks account to see if a customer with that exact name already exists.

**3. Route Based on Existence (If/Else Logic):**
- If the Customer is NEW: The workflow proceeds down the "true" path, first creating a new customer record in QuickBooks with the details from the sheet (Name, Email, Phone, Company). Immediately after, it creates a new sales estimate linked to that newly created customer.
- If the Customer ALREADY EXISTS: The workflow follows the "false" path and stops. This is a built-in safety measure to prevent creating duplicate customer records.

**4. End of Process:** The workflow concludes, having either created a new customer and estimate or having intelligently stopped to avoid duplication.

## Step by Step Instructions
Follow these steps carefully to get the workflow running.

**1. Connect Your Credentials**
- Google: Connect your Google account using OAuth2. Ensure you have enabled permissions for both Google Sheets and Google Drive.
- QuickBooks: Connect your QuickBooks Online account using OAuth2 credentials.

**2. Prepare Your Google Sheet**
This is the most critical step. Create a Google Sheet and ensure the first row contains these exact column headers:
- CustomerName
- Email
- Phone
- Company Name
- Amount

**3. Configure the n8n Nodes**

Google Sheets Trigger:
- Select your Google Sheet from the Document ID dropdown.
- Select the specific sheet from the Sheet Name dropdown.

Create an estimate (QuickBooks Node):
- This node has a default product/service (itemId) and tax code (TaxCodeRef) set. You must update these to match the items and tax codes in your QuickBooks account. See the Customization section for more details.

**4. Activate the Workflow**
Save the workflow and toggle the Active switch to "on". Now, every time you add a new row to your sheet, the automation will run.


## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz


## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

QuickBooks Online, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
