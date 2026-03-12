# 🧾 Automate expense reporting from Airtable to QuickBooks

> ⚡ **335 views** · 🧾 [Invoice Processing](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate your expense approval and accounting process. 

It seamlessly connects an Airtable base, where expenses are submitted, to your QuickBooks account, eliminating manual data entry and ensuring financial records are always up-to-date.

## Who's this workflow for?
- Accountants & Bookkeepers
- Small Business Owners
- Finance Teams
- Operations Managers


## How it works
**1. Trigger on New Expense:** The workflow starts automatically when a new expense record is added to your Airtable base.

**2. Filter for Approval:** It checks if the expense's Status field is marked as "Approved". Unapproved items are ignored.

**3. Create Expense in QuickBooks:** For every approved item, the workflow creates a new expense record in QuickBooks, mapping data like amount, date, vendor, and accounts directly from Airtable.

**4. Download and Upload Receipt:** It downloads the receipt from the URL provided in Airtable and uploads it as an attachment to the corresponding expense record in QuickBooks.

**5. Update Airtable Status:** Once the expense and receipt are successfully logged in QuickBooks, the workflow updates the record's Status in Airtable to "Done", closing the loop.


## Setup Instructions
**1. Airtable Configuration:**
- Create an Airtable base with a table for your expenses. Ensure your table includes the following columns: Status, Receipt URL, Amount, Date, Memo, QBO Vendor ID, QBO Expense Account ID, and QBO Payment Account ID.
- Connect your Airtable account to n8n.
- In the Airtable Trigger, Search records, and Update record nodes, select your credentials and specify your Base ID and Table ID.

**2. QuickBooks Configuration:**
- Connect your QuickBooks account to n8n using OAuth2 credentials.
- In the QBO-Create Expense and QBO-Upload File nodes, replace {YOUR_QUICKBOOKS_COMPANY_ID} in the URL with your actual QuickBooks Company ID.
- Ensure the Vendor ID and Account IDs in your Airtable records correspond to valid IDs in your QuickBooks account.

**3. Activate Workflow:**
- Save the workflow and toggle the "Active" switch to ON. Your expense management is now fully automated!


## Connect with us:
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Airtable, HTTP Request, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
