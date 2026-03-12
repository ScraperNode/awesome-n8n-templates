# 🧾 Create and send multi-item PayPal invoices via email

> ⚡ **148 views** · 🧾 [Invoice Processing](../)

## Description

### Who Is This For?  
Small businesses, consultants, agencies… anyone who bills with PayPal.

### What Problem Does It Solve?  
Automates itemized invoicing and delivery via PayPal’s Invoicing API with support for an “Add more items?” loop.

### What This Workflow Does  
1. Collects your PayPal credentials & invoice data via a form  
2. Dynamically generates a timestamp + random 4 digit number for the invoice_number  
3. Calls PayPal to create and then send the invoice  
4. Supports endless line-items via a Switch + Merge loop.

### Setup  
1. Grab a PayPal REST App’s Client ID & Secret.  
2. Toggle “Live or Test” to point at production vs sandbox.  
3. **PayPal Credentials**  
   - If you select **Test**, this workflow points at PayPal’s **sandbox** (`api-m.sandbox.paypal.com`) and **requires your sandbox** Client ID & Secret.  
   - If you select **Live**, it points at PayPal’s **production** endpoint (`api-m.paypal.com`) and **requires your live** Client ID & Secret.  
4. (Optional) Customize your logo, currency, default notes.

### How to Customize  
– Change the currency dropdown  
– Tweak the invoice-number format in the “Set Invoice Number and Date” code node  
– Swap out or style the n8n Form nodes for your own UX

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
