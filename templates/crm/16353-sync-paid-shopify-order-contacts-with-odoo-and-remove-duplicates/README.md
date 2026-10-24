# 🤝 Sync paid Shopify order contacts with Odoo and remove duplicates

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow triggers on paid Shopify orders and syncs the order’s shipping contact details into Odoo Contacts (res.partner) by searching for existing contacts and creating new ones, with a secondary duplicate-check branch that splits out IDs for additional matching.

## How it works
1. Triggers when a Shopify order is marked as paid and retrieves the order payload.
2. Searches Odoo Contacts (res.partner) for an existing matching contact and flags whether a record is found.
3. If a matching Odoo contact exists, creates a new Odoo contact using the Shopify shipping address, email, and phone.
4. In parallel, splits out the incoming order’s id field and uses it to run an additional Odoo contact search for potential duplicates.
5. If a contact is found in the duplicate-check path, creates another Odoo contact from the same Shopify shipping and customer fields.

## Setup
1. Add Shopify Access Token credentials and enable the Shopify orders/paid trigger for your store.
2. Add Odoo API credentials with access to read and create records in Contacts (res.partner).
3. Review the Odoo search criteria in both contact search steps and adjust them to match your intended duplicate-detection key (for example, email or phone rather than the order id).
4. Confirm the field mappings from Shopify shipping_address and order email/phone to Odoo res.partner fields match your Odoo data model and required fields.

## Requirements
- **Shopify Store:** A live Shopify store with webhook access for `orders/paid`.
- **Odoo Instance:** An Odoo instance with API access enabled to manage `res.partner` (Contacts).
- **n8n Instance:** A self-hosted or cloud n8n workflow automation tool.
- **Access Credentials:** Valid API credentials for both Shopify (Access Token) and Odoo.

## Customization
- **Update vs. Delete:** To update existing contacts instead of replacing them, remove the delete node and use the Odoo `update` operation with the contact ID.
- **Address Source:** Switch from `shipping_address` to `billing_address` in the Create Contact nodes if billing details should be synced.
- **Duplicate Rules:** Adjust the "Split Out" node to check email or phone instead of ID, depending on your Odoo duplicate-matching criteria.

## Additional info
## Resources
*   **Shopify**: [Read Docs...](https://shopify.dev/docs/api/admin-rest)
*   **Odoo**: [Read Docs...](https://www.odoo.com/documentation/16.0/developer/reference/external_api.html)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapreen)

## 🔗 Nodes Used

Shopify Trigger, Odoo, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
