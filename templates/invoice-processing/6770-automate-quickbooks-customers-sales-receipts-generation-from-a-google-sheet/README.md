# 🧾 Automate QuickBooks customers & sales receipts generation from a Google Sheet

> ⚡ **315 views** · 🧾 [Invoice Processing](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution to streamline your sales and accounting process.

Simply add new transaction details to a designated Google Sheet, and this workflow takes over. Using specific status keywords in a column to trigger the process, it automatically creates new customer profiles and generates sales receipts in QuickBooks. This creates a complete, end-to-end system from a simple spreadsheet entry to a formal accounting record, eliminating manual data entry.

## How it works

This workflow streamlines the process of recording sales from a Google Sheet into QuickBooks Online, intelligently handling both new and existing customers.

**1. Trigger on New Row:** The workflow starts automatically whenever a new row is added to your specified Google Sheet.

**2. Check for Existing Customer:** It takes the customer's name from the new row and searches your QuickBooks account to see if a customer with that DisplayName already exists.

**3. Conditional Logic (IF Node):** Based on the search result, the workflow splits into two paths:

- If Customer Exists (True Path): The workflow proceeds directly to create a Sales Receipt, linking it to the existing customer's ID found in the search.
- If Customer Does Not Exist (False Path): The workflow first creates a new customer in QuickBooks using the name and email from the sheet. It then uses the ID of this newly created customer to generate the corresponding Sales Receipt.


### How to Use: Quick Start Guide

1. Prepare your Google Sheet: Make sure you have a Google Sheet with clear headers for your sales data. The template is configured for the following columns: CustomerName, Email, Amount, and Quantity.

2. Import the Template: Click the "Use Template" button to import the workflow into your n8n instance.

3. Configure Google Sheet Node: 
- Enter the Spreadsheet ID from your Google Sheet's URL.
- Enter the Sheet Name where your sales data is located (e.g., Sheet1).

4. Configure the QuickBooks Nodes: 
- Select your QuickBooks Online credential or create a new one for the "Search for Customer", "Create Receipt for EXISTING Customer", "Create New Customer", and "Create Receipt for NEW Customer" nodes.
- Important: In both "Create Receipt" nodes, you must provide a valid Product/Service ID from your QuickBooks account. Find this in the node parameters under Line &gt; Sales Item Line Detail &gt; Item Ref &gt; Value.

5. Activate the Workflow: Save your changes and activate the workflow. Now, every new row you add to the Google Sheet will automatically create the necessary records in QuickBooks.
 

#### Key Requirements to Use Template
- An active n8n instance.
- A Google account with a prepared Google Sheet.
- A QuickBooks Online account.
- A QuickBooks Developer account to obtain the API credentials needed to connect to n8n.
- At least one Product or Service item set up in your QuickBooks account to be referenced in the sales receipts.
 
## Connect with us

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz


## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

QuickBooks Online, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
