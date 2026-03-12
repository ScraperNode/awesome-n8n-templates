# 💬 WhatsApp product catalog bot with PostgreSQL database

> ⚡ **2,023 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Who is this for?
This workflow is designed for businesses or developers who want to integrate product information into a WhatsApp bot and allow users to retrieve details about products from a database.

### What problem is this workflow solving?
This workflow automates the process of managing and retrieving product information via WhatsApp, allowing businesses to easily share product details with customers without manual interaction.

### What this workflow does
Basis version:
- It adds product data to a Postgres database.
- It enables a WhatsApp bot to retrieve a list of products.
- Users can select a product to receive detailed information about it.

Additional version:
- All features from Basis Version.
- Get a list of product categories.
- Get a list of products in a category.
- Add product to cart.
- Go to the cart or select more products.
- Remove unnecessary items in the cart or clear the entire cart.
- When all the desired items are in the cart, click Buy.
- The bot will send you a payment link.

### Setup
1. **Create Tables in Postgres DB**
   - Modify the SQL script to replace "n8n" with your schema name.
   - Run the provided SQL script in your database (available in the workflow).

2. **Add Credentials**
   - Add WhatsApp credentials (OAuth, Account).
   - Add Postgres credentials to connect the bot to your database.

### How to customize this workflow to your needs
- Update the database schema or table structure if you need additional product information.
- Modify the bot interaction to suit your specific product listing and display preferences.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, Summarize, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
