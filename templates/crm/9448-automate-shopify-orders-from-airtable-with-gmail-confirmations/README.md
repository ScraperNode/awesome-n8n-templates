# 🤝 Automate Shopify orders from Airtable with Gmail confirmations

> ⚡ **239 views** · 🤝 [CRM & Sales Operations](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate your order creation process. 

It seamlessly syncs order data from an Airtable base directly to your Shopify store, creates the official order, and automatically sends a beautiful confirmation email to the customer, closing the loop by updating the status in Airtable.

## Who's this workflow for?
- E-commerce Managers
- Operations Teams
- Businesses with Custom Order Processes (e.g., B2B, phone orders, quotes)
- Shopify Store Owners using Airtable as a CRM

## How it works
**1. Triggered from Airtable**: The workflow starts instantly when an Airtable Automation sends a signal via a webhook. This happens when you mark an order as ready to be processed in your Airtable base.

**2. Fetch Order Details:** n8n receives the record ID from Airtable and fetches the complete order details, including customer information and the specific line items for that order.

**3. Create Order in Shopify:** All the gathered information is used to create a new, official order directly in your Shopify store.

**4. Send Confirmation Email:** Once the order is successfully created in Shopify, a professionally formatted HTML order confirmation email is sent to the customer via Gmail.

**5. Update Airtable Status:** Finally, the workflow updates the original order record in Airtable, marking its status as "Done" to prevent duplicate processing and keep your records in sync.

## Key Requirements to Use This Template
**1. n8n Instance:** An active n8n account (Cloud or self-hosted).
**2. Airtable Base:** An Airtable base on a "Pro" plan or higher (required for Airtable Automations). It should contain tables for Orders and Order Line Items.
**3. Shopify Store:** An active Shopify store with API access permissions.
**4. Gmail Account:** A Gmail account to send confirmation emails.

## Setup Instructions
**1. Configure the n8n Workflow:**
- Webhook Node: Activate the workflow to get the Production URL from the "Webhook" node. Copy this URL.
- Airtable Nodes: In the Get a record and Update record nodes, connect your Airtable credentials and select the correct Base and Table IDs.
- Shopify Node: In the Create an order node, connect your Shopify store using OAuth2 credentials.
- Gmail Node: In the Send a message node, connect your Gmail account.

**2. Set Up the Airtable Automation (Crucial Step):**
- Go to your Airtable base and click on "Automations".
- Create a new automation. For the trigger, select "When a record meets conditions".
- Choose your Orders table and set a condition that makes sense for you (e.g., When "Shopify Ordered" is "Pending").
- For the action, choose "Run a script". Paste the code below into the script editor:
**JavaScript**
const inputConfig = input.config();
const recordId = inputConfig.recordId;
const webhookUrl = 'PASTE_YOUR_N8N_PRODUCTION_URL_HERE';

await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recordId: recordId }),
});
- ReplacePASTE_YOUR_N8N_PRODUCTION_URL_HERE with the Production URL you copied from n8n.
- Add an input variable to the script named recordId and set its value to the "Airtable record ID" from the trigger step.
- Test the script and turn your Airtable Automation ON.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz


## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Airtable, Webhook, Shopify, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
