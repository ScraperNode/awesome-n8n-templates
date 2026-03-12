# 📱 Automated weekly product promotion emails for e-commerce with Algolia and Gmail

> ⚡ **105 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Automated Weekly Newsletter for E-commerce Promotions (based on Algolia)

This workflow automatically sends a beautifully designed HTML newsletter every Sunday at 8 AM, featuring products currently on sale from your Algolia-powered e-commerce store.

## Who's it for

Perfect for e-commerce store owners, marketing teams, and anyone running promotional campaigns who wants to automate their weekly newsletter without relying on expensive email marketing platforms.

## How it works

1. **Triggers every Sunday at 8:00 AM** - Scheduled to start each new promotion week
2. **Fetches discounted products** - Queries your Algolia index for 6 products marked with `on_sale:true`
3. **Calculates promotion dates** - Automatically generates the week's date range (Sunday to Saturday)
4. **Builds HTML newsletter** - Populates a responsive email template with product images, prices, and descriptions
5. **Retrieves subscribers** - Pulls the latest subscriber list from your Google Sheets
6. **Sends personalized emails** - Delivers the newsletter to all subscribers via Gmail

## Set up steps

**Setup time: ~15 minutes**

1. Connect your **Algolia credentials** (Search API key + Application ID)
2. Update the **Algolia index name** to match your store (currently set to `dogtreats_prod_products`)
3. Create a **Google Sheet** with subscriber emails (column named "Email")
4. Connect your **Google Sheets** and **Gmail** accounts
5. (Optional) Customize the HTML template colors and branding to match your store

## Requirements

- Algolia account with a product index containing `on_sale`, `price_eur`, `original_price_eur`, `image`, `name`, and `description` fields
- Google Sheets with subscriber list
- Gmail account for sending emails

## How to customize

- **Change promotion criteria**: Modify the filter in "Request products from Algolia" node (e.g., `category:shoes` instead of `on_sale:true`)
- **Adjust product count**: Change `hitsPerPage` value (currently 6)
- **Modify schedule**: Update the trigger node to run on different days/times
- **Personalize email design**: Edit the HTML template node to match your brand colors and style
- **Add unsubscribe logic**: Extend the workflow to handle unsubscribe requests

💡 **Pro tip**: Use the manual execution button to test the workflow mid-week - it's "smart" enough to calculate the current promotion week even when not running on Sunday.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
