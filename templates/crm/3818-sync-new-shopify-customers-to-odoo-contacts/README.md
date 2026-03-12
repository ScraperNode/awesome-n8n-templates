# 🤝 Sync new Shopify customers to Odoo contacts

> ⚡ **1,245 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow functions by integrating Shopify customers into Odoo customers.

1. Trigger: Shopify – New Customer Created
   The workflow starts when a new customer is added in Shopify.

2. Action: Odoo – Search Contact by Email
   It checks in Odoo to see if a contact already exists with the same email address as the Shopify customer.

3. Condition: Email Match Check
    If a contact with the same email is found, the workflow ends (no duplicate contact is created).
    If no match is found, the workflow proceeds to the next step.

4. Action: Odoo – Create New Contact
   A new contact is created in Odoo using the customer's:
    Full name
    Email address
    Phone number
    Full Address (whichever is available)

## 🔗 Nodes Used

Shopify Trigger, Odoo, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
