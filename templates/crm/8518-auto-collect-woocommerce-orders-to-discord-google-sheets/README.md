# 🤝 Auto-collect WooCommerce orders to Discord & Google Sheets

> ⚡ **289 views** · 🤝 [CRM & Sales Operations](../)

## Description

Every WooCommerce order, instantly in Discord and neatly logged in Sheets. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow captures order updates via webhook, fires real-time Discord notifications, and records paid orders to Google Sheets for tracking and reporting.

*Last updated: September 2026.*

## What This Workflow Does
Captures WooCommerce orders automatically and sends real-time Discord notifications while logging paid orders to Google Sheets.

## Key Benefits
- **Save 90% Time**: No more manual order logging and monitoring.
- **Never Miss Orders**: Instant Discord alerts for all order activity.  
- **80% Faster Response**: Your team gets structured order info immediately.
- **Dual Tracking**: Real-time alerts plus permanent spreadsheet records.

## Perfect For
- **Ecommerce Teams**: Monitor orders without living in the admin panel.
- **Small Business Owners**: Professional order tracking without extra staff.
- **Fulfillment Teams**: Organized order data for quick processing.

## How It Works
1. WooCommerce sends order webhook to [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. Order data is parsed and formatted beautifully
3. All orders trigger Discord notifications (color-coded by status)
4. Paid orders (PROCESSING status) are logged to Google Sheets
5. Webhook confirms successful receipt to WooCommerce

## Features
- **Smart Status Colors**: Yellow (pending), Blue (processing), Green (completed), Gray (cancelled)
- **Rich Discord Embeds**: Customer info, items, shipping, totals, all formatted nicely
- **Flexible Data Parsing**: Handles various WooCommerce webhook structures
- **Indonesian Currency**: Proper IDR formatting for local businesses
- **Product Thumbnails**: Shows product images in Discord notifications

## Setup Requirements
- [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance (self-hosted or cloud)
- Discord server with bot access ([developer docs](https://discord.com/developers/docs/intro))
- Google account for Sheets
- WooCommerce admin access

## Quick Setup
1. Import workflow JSON to [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. Add Discord bot token
3. Connect Google Sheets OAuth
4. Set WooCommerce webhook to [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) endpoint
5. Create Google Sheet with required columns
6. Test with a sample order

## Customization Options
- Change Discord embed colors for your brand
- Modify which order statuses get logged
- Add custom fields to Google Sheets
- Adjust currency and language settings
- Filter orders by specific conditions

## Google Sheets Columns
- Month (order date)
- Brand Name  
- Web Order Number
- Expedition (shipping method)
- Tracking Number
- Status

## Future Enhancement Ideas
- Add SMS/WhatsApp customer notifications
- Connect to shipping label services
- Integrate with CRM for customer insights
- Add inventory management triggers
- Create sales analytics dashboard

### Quick Answers
**What do the colors mean?**  
Yellow pending, blue processing, green completed, gray cancelled.  
**Which orders reach Sheets?**  
Paid orders (PROCESSING status) with month, brand, order number, expedition, tracking, and status columns.  
**Is IDR supported?**  
Yes. Proper Indonesian Rupiah formatting is built in.  

## Support
Made by: [khmuhtadin](https://khmuhtadin.com)  
Need customization? [Contact me](https://khmuhtadin.com/contact)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
