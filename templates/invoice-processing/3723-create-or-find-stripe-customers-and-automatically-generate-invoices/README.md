# 🧾 Create or find Stripe customers and automatically generate invoices

> ⚡ **513 views** · 🧾 [Invoice Processing](../)

## Description

Save hours of manual billing work with this Stripe automation workflow!  
Designed for entrepreneurs, SaaS founders, and online business owners, this template checks if a customer already exists in Stripe based on their email. If no customer is found, it automatically creates a new one, generates a draft invoice, adds a product line item using a Stripe Price ID, and finalizes the invoice — making it ready for payment.  
This workflow helps ensure clean customer data and efficient billing without manual input.

### How it works

- Search Stripe for an existing customer based on the provided email address.
- If no customer is found, create a new one in Stripe automatically.
- Generate a draft invoice associated with the customer.
- Add a line item to the invoice using a Stripe Price ID.
- Finalize the invoice to make it ready to send or collect payment.

### Set up steps

1. **Stripe account setup**:  
   - Ensure you have a valid Stripe account.  
   - Create a **restricted Stripe API key** with permissions to `read` and `write` Customers, Invoices, and Invoice Items.  

2. **Connect Stripe to n8n**:  
   - Set up an HTTP Basic Auth credential in n8n using your Stripe secret API key.  
   - No username is needed; the API key goes into the password field.

3. **Customize dynamic data**:  
   - Replace the sample email (`test@example.com`) with your real dynamic customer email input.  
   - Replace the example Price ID (`price_fromStripeDashboard`) with your actual product Price ID from the Stripe dashboard.

4. **Test your workflow**:  
   - Manually trigger the workflow inside n8n to ensure customers and invoices are being created correctly.
   - Check your Stripe dashboard to confirm that new customers and invoices appear as expected.

5. **Deploy to production**:  
   - Integrate this workflow with a real trigger (e.g., webhook, form submission) to automate the process live.

### Troubleshooting

- **Invalid API Key**:  
  Double-check that your Stripe API key is active and has the necessary permissions. Test it by making a simple API call manually if needed.

- **Invoice Creation Fails**:  
  Make sure you are using a valid `Price ID` from Stripe. The price must be active and available for the correct product.

- **Customer Not Found Error**:  
  If the search fails due to formatting issues, ensure emails are valid and the query syntax matches Stripe's customer search format.

- **Authentication Errors**:  
  If authentication fails, ensure you have selected **HTTP Basic Auth** in the HTTP Request nodes and left the username field empty.

### Stripe prerequisites

- You must have at least one active Price object created in your Stripe dashboard.  
- Your Stripe account must be live or have access to test mode if you're working in development.  
- Ensure your account has API access enabled for Customers, Invoices, and Products.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
