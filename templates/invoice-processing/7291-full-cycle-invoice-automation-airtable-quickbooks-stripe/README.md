# 🧾 Full-cycle invoice automation: Airtable, QuickBooks & Stripe

> ⚡ **1,407 views** · 🧾 [Invoice Processing](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for full-cycle invoicing, orchestrating a seamless flow between Airtable, QuickBooks, and Stripe. 

This is the ultimate sales-to-cash automation. When a deal in Airtable is marked "Approved for Invoicing," this workflow intelligently syncs customer data across QuickBooks and Stripe (creating them if they don't exist), generates an official QuickBooks invoice, creates a Stripe payment link, and then updates the original Airtable record with all the new IDs and links. Eliminate manual data entry and keep your systems perfectly in sync.


## Who's this workflow for? 

1. Finance, Accounting, and Operations Teams
2. SalesOps and RevOps Teams
3. Small Business Owners and Founders
4. Agencies and Freelancers


## How It Works:
**1. Airtable Trigger & Approval Gate:** The workflow starts when a record in your Airtable base is updated. An If node immediately checks if the Status field is set to "Approved for Invoicing." If not, the workflow for that item stops.

**2. Customer Sync (QuickBooks & Stripe):**
- The workflow searches for the customer in both QuickBooks and Stripe using the details from Airtable.
- Using If nodes, it intelligently checks if the customer exists. If a customer is not found in either platform, it creates a new one. This "find-or-create" logic prevents duplicate records.

**3. Update Airtable with IDs:** Once the customer IDs from both QuickBooks and Stripe are secured (either found or newly created), the workflow updates the original Airtable record with these new IDs for future reference.

**4. Generate Financials:**
- Stripe Payment Link: It sends an HTTP request to Stripe to create a unique, ready-to-use payment link for the specified amount.
- QuickBooks Invoice: It fetches your product list from QuickBooks, finds the matching item from the Airtable record, and generates a formal, detailed invoice.

**5. Close the Loop**: In the final step, the workflow updates the Airtable record one last time to:
- Add the QuickBooks Invoice #.
- Add the Stripe Payment Link.
- Change the Status to "Invoiced."


##  Step-by-Step Setup Instructions
This is an advanced workflow. Follow these setup steps carefully.

**1. Connect Your Credentials**
- Airtable: Create and connect a Personal Access Token with data.records:read and data.records:write scopes.
- QuickBooks: Connect your QuickBooks Online account using OAuth2 credentials.
- Stripe: Connect your Stripe account using your Secret Key.

**2. Airtable Base Setup (Crucial)**
Your Airtable base must have a table with the following columns. The names must match exactly:

- Deal Name (Text)
- Client Name (Text)
- Client Email (Email)
- Status (Single-select with options: Draft,
- Approved for Invoicing, Invoiced)
- QuickBooks Customer ID (Text)
- Stripe Customer ID (Text)
- Stripe Payment Link (URL)
- QuickBooks Invoice # (Text)
- Stripe Price Id (Text - The API ID of your price in Stripe, e.g., price_123...)
- Quantity (Number)
- Quickbooks Product Name (Text)
- Created (Created Time) - This is used by the trigger.

**3. Configure the n8n Nodes**
- All Airtable Nodes: In each Airtable node, select your Base and Table from the dropdown lists.
- Get all Quickbook products (HTTP Request Node):
You must replace {YOUR_QUICKBOOKS_COMPANY_ID} in the URL with your actual QuickBooks Company ID (also known as a Realm ID).

**4. Activate the Workflow**
Save the workflow and toggle the Active switch to "on". The workflow will now trigger whenever the Created field is updated for a record in your Airtable base.


## Customization Guidance
- Changing the Trigger Status: If you use a different status than "Approved for Invoicing," simply update the value in the "IF - Status Check" node.
- Modifying Invoice Details: You can customize the Description or other line item details in the "Create an invoice" (QuickBooks) node by pulling more fields from your Airtable record.
- Adding Email Notifications: To notify a customer when their invoice is ready, add a Gmail or SendGrid node after the last Airtable Update node. You can include the Stripe Payment Link and a PDF of the QuickBooks invoice directly in the email.
- Advanced Error Handling: For a production environment, consider connecting the false output of the various IF nodes or using the .onError() workflow setting to send a Slack or email alert if a customer can't be found or an API call fails.


## Support
For further support, or to develop a custom workflow, reach out to:

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Airtable, HTTP Request, Airtable Trigger, QuickBooks Online, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
