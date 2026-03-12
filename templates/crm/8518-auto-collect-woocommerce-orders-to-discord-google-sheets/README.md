# 🤝 Auto-collect WooCommerce orders to Discord & Google Sheets

> ⚡ **238 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n workflow automates WooCommerce order processing by capturing order updates via webhook and converting them into Discord notifications and Google Sheets entries.

## What This Workflow Does
Automatically captures WooCommerce orders and sends real-time Discord notifications while logging paid orders to Google Sheets for tracking and reporting.

## Key Benefits
- **Save 90% Time**: Eliminates manual order logging and monitoring
- **Never Miss Orders**: Instant Discord alerts for all order activities  
- **80% Faster Response**: Team gets structured order info immediately
- **Dual Tracking**: Real-time alerts + permanent spreadsheet records

## Perfect For
- **Ecommerce Teams**: Monitor orders without constantly checking admin panel
- **Small Business Owners**: Professional order tracking without extra staff
- **Fulfillment Teams**: Get organized order data for quick processing

## How It Works
1. WooCommerce sends order webhook to n8n
2. Order data is parsed and formatted beautifully
3. All orders trigger Discord notifications (color-coded by status)
4. Paid orders (PROCESSING status) are logged to Google Sheets
5. Webhook confirms successful receipt to WooCommerce

## Features
- **Smart Status Colors**: Yellow (pending), Blue (processing), Green (completed), Gray (cancelled)
- **Rich Discord Embeds**: Customer info, items, shipping, totals - all formatted nicely
- **Flexible Data Parsing**: Handles various WooCommerce webhook structures
- **Indonesian Currency**: Proper IDR formatting for local businesses
- **Product Thumbnails**: Shows product images in Discord notifications

## Setup Requirements
- n8n instance (self-hosted or cloud)
- Discord server with bot access
- Google account for Sheets
- WooCommerce admin access

## Quick Setup
1. Import workflow JSON to n8n
2. Add Discord bot token
3. Connect Google Sheets OAuth
4. Set WooCommerce webhook to n8n endpoint
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

## Support
Created by [Khmuhtadin](https://khmuhtadin.com/contact)  
Need customization? [Contact us!](https://khmuhtadin.com/contact)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
