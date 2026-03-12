# 🤝 Complete Shopify to Odoo integration: Sync orders, products & customers

> ⚡ **991 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow functions like the integration of Shopify products with Odoo products, Shopify customers with Odoo customers, and paid Shopify orders with Odoo sales orders containing multiple products.
 
1. Trigger (Shopify – Order Created & Paid): The workflow starts when a new order is created in Shopify and its status is marked as paid.
 
2. Loop Through Each Line Item in the Order:
    For each product in the order:
        Check if Product Exists in Odoo (via Internal Reference/Default Code)
	    If the product exists, proceed.
	    If the product does not exist, create it in Odoo with the following details:
	        Product Name
		Description
		Price
		Internal Reference (Default Code)
 
3. Check if Customer Contact Exists in Odoo (via Email):
    If the contact exists, proceed.
    If the contact does not exist, create a new contact in Odoo with:
        Full Name
        Email Address
        Phone Number
        Shipping or Billing Address (as available)
 
4. Create a Sale Order in Odoo:
    Create a new Sale Order in Odoo using:
        The matched or newly created Customer Contact
        The matched or newly created All the Products in the Shopify order (with correct quantities and pricing)
    Each Shopify product in the order is matched to the corresponding Odoo product using the Internal Reference field
    
Integration Setup References:
 
    Shopify Integration Setup:
    https://docs.n8n.io/integrations/builtin/credentials/shopify/
 
    Odoo Integration Setup:
    https://docs.n8n.io/integrations/builtin/credentials/odoo/

## 🔗 Nodes Used

Shopify Trigger, Odoo, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
