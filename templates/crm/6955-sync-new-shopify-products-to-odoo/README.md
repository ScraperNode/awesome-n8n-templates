# 🤝 Sync new Shopify products to Odoo

> ⚡ **121 views** · 🤝 [CRM & Sales Operations](../)

## Description

Seamlessly sync newly created Shopify products into Odoo with this smart, no-code n8n workflow. It automatically checks for duplicates and creates new products only when needed – fully compatible with a standard Odoo setup.

**🚀 Key Features:**
- **Trigger-based Automation:** The workflow starts instantly when a new product is created in your Shopify store.
- **Intelligent Duplicate Check:** It searches for an existing product in Odoo using the Shopify product's SKU as the Internal Reference.
- **Smart Conditional Logic:**
	- If a matching product is found, the workflow automatically stops to prevent creating duplicates.
	- If no match is found, it proceeds to create a new product in Odoo.
- **Automatic Product Creation:** Creates a new Odoo product by mapping the following data from Shopify:
	- Product Name
	- Public Price
	- Internal Reference
	- Description
- **Universal Compatibility:** Works with both Odoo Community and Enterprise editions without any custom modules.
- **Fully Customizable:** The workflow is open and can be easily extended in the n8n canvas to add more fields or custom logic.

**🛠 Requirements:**
- An n8n instance (self-hosted or cloud).
- Shopify credentials with API access.
- Odoo credentials with standard XML-RPC API access.

**💡 Use Case:**
This workflow is the perfect solution for any business that regularly adds new products to Shopify and needs them automatically mirrored in Odoo for inventory, sales, or accounting purposes. Eliminate manual data entry, save time, and ensure your product catalogs are always in sync.

## 🔗 Nodes Used

Start, Shopify Trigger, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
