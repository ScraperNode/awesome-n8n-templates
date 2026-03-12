# 🤝 Complete WooCommerce to Odoo integration: Sync orders, products & customers

> ⚡ **290 views** · 🤝 [CRM & Sales Operations](../)

## Description

📖 Description (WooCommerce Version)

This workflow functions like the integration of WooCommerce products with Odoo products, WooCommerce customers with Odoo customers, and WooCommerce orders with Odoo sales orders containing multiple products.

🔔 Trigger (WooCommerce – Order Created)

The workflow starts when a new order is created in WooCommerce.

🔄 Loop Through Each Line Item in the Order
For each product in the WooCommerce order:
Check if Product Exists in Odoo (via Internal Reference/Default Code):
If the product exists, proceed.

If the product does not exist, create it in Odoo with:
Product Name
Description
Price
Internal Reference (Default Code)

👤 Check if Customer Contact Exists in Odoo (via Email)

If the contact exists, proceed.

If the contact does not exist, create a new contact in Odoo with:
Full Name
Email Address
Phone Number

Shipping or Billing Address (as available)

📝 Create a Sale Order in Odoo

Create a new Sale Order in Odoo using:
The matched or newly created Customer Contact
All the matched or newly created Products from the WooCommerce order (with correct quantities and pricing)
Each WooCommerce product in the order is matched to the corresponding Odoo product using the Internal Reference field.
👉 This ensures a seamless sync between WooCommerce and Odoo, keeping your orders, products, and customers aligned automatically.

Setup referecence:
https://docs.n8n.io/integrations/builtin/credentials/woocommerce/
https://docs.n8n.io/integrations/builtin/credentials/odoo/

## 🔗 Nodes Used

WooCommerce Trigger, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
