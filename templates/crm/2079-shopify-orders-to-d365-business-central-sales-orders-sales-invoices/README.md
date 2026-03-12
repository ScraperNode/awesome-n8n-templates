# 🤝 Shopify orders to D365 Business Central sales orders / sales invoices

> ⚡ **3,661 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Workflow Information 📌

### Purpose 🎯
The intention of this workflow is to integrate New Shopify Orders into MS Dynamics Business Central:

- **Point-of-Sale (POS):** POS orders will be created in Business Central as Sales Invoices given no fulfillment is expected.
- **Web Orders:** This type of orders will be created as Business Central Sales Orders.

### How to use it 🚀
1. Edit the "D365 BC Environment Settings" node with your own account values (Company Id, Tenanant Id, Tax & Discount Items).
2. Go to the "Shopify" node and edit the connection with your environment. More help [here](https://docs.n8n.io/integrations/builtin/credentials/shopify/).
3. Go to the "Lookup Customers" node to edit the Business Central connection details with your environment settings.
4. Set the required filters on the "Shopify Order Filter" node.
5. Edit the "Schedule Trigger" node with the required frequency.

### Useful Workflow Links 📚
1. [Step-by-step Guide/ Integro Cloud Solutions](https://z0v4z2m6gixudcjglfbe.guidejar.xyz/categories/business-central)
2. [Business Central REST API Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
3. [Video Demo](https://www.loom.com/share/9e218cd53cf14a93bcb55d7b3d47ec45?sid=5fdfb8ab-8205-468a-b514-67193abac455)


### Need Help?
Contact me at:
✉️greg.lopez@integrocloudsolutions.com
📥 https://www.linkedin.com/in/greg-lopez-08b5071b/

## 🔗 Nodes Used

HTTP Request, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
