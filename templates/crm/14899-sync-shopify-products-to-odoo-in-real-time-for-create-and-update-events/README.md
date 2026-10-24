# 🤝 Sync Shopify products to Odoo in real time for create and update events

> ⚡ **72 views** · 🤝 [CRM & Sales Operations](../)

## Description

What Problem Does It Solve?

* Keeping product data consistent between Shopify and Odoo is a major operational challenge.
* Manually creating new products in Odoo every time they are added to Shopify is slow and leads to Barcode errors.
* Prices and titles change frequently; failing to sync these updates results in pricing discrepancies and customer confusion.
* This workflow solves these issues by:
  - Automatically creating a new product in Odoo as soon as it's added to Shopify.
  - Ensuring Barcode uniqueness by checking for existing products before creation.
  - Syncing product images directly from Shopify to Odoo.
  - Real-time updating of product names and prices in Odoo whenever they change in Shopify.

How to Configure It

* Shopify Setup
  - Connect your Shopify account using OAuth2.
  - The workflow uses two triggers: "products/create" and "products/update".
* Odoo Setup
  - Connect your Odoo API credentials in n8n.
  - Ensure your Shopify "Vendors" match the "Product Categories" names in Odoo for accurate automated mapping.
* Image Handling
  - The workflow automatically downloads the first image from Shopify and converts it to the format required by Odoo's "image_1920" field.

How It Works

* Product Creation Path:
  - Shopify triggers the "Product Created" node.
  - The workflow checks Odoo for an existing product with the same Barcode.
  - If not found, it retrieves the Odoo Category ID based on the Shopify Vendor name.
  - It downloads the product image, extracts the file content, and creates the item in Odoo.
* Product Update Path:
  - Shopify triggers the "Product Updated" node.
  - The workflow finds the corresponding product in Odoo by Barcode.
  - It instantly updates the Odoo record with the new Title and List Price from Shopify.

Customization Ideas

* Add logic to sync "Inventory Levels" so Shopify and Odoo share the same stock count.
* Map multiple variants (Sizes/Colors) from Shopify to Odoo Product Variants.
* Integrate with a notification system to alert you if a Shopify Vendor doesn't have a matching Category in Odoo.

For more info [Contact Me](https://www.linkedin.com/in/khaledyasser01/)

## 🔗 Nodes Used

HTTP Request, Shopify Trigger, Odoo, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
