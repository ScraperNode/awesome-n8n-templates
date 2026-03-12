# 🎬 Convert Telegram channel posts to WooCommerce products automatically

> ⚡ **97 views** · 🎬 [Content Creation & Video](../)

## Description

# Auto-publish Telegram channel posts to WooCommerce store

This n8n template automatically converts Telegram channel posts into WooCommerce products, perfect for businesses that share products on Telegram and want to sync them with their online shop.

## Who's it for

E-commerce businesses, dropshippers, and retailers who:
- Use Telegram channels to showcase products
- Want to automatically sync products to their WooCommerce store
- Need to reduce manual data entry between platforms
- Handle multiple product images and want them properly organized

## How it works

The workflow monitors your Telegram channel for new posts and automatically creates corresponding WooCommerce products:

1. **Telegram Trigger** detects new channel posts with photos and captions
2. **Text Processing** extracts product details from the post:
   - First line becomes the product title
   - First hashtag determines the product category
   - Price is extracted using regex patterns
   - Channel signature is removed from description
3. **Image Handling** downloads and uploads images to WordPress media library
4. **Category Matching** fetches WooCommerce categories and matches them with hashtags
5. **Product Creation** creates the WooCommerce product with all extracted data
6. **Multi-Image Support** handles posts with multiple images by updating the product

## How to set up

1. **Telegram Setup**:
   - Create a Telegram bot and get the API token
   - Add the bot to your channel as an administrator
   - Configure the Telegram Trigger with your bot credentials

2. **WooCommerce Setup**:
   - Enable WooCommerce REST API in your WordPress admin
   - Create API keys with read/write permissions
   - Configure the WooCommerce nodes with your API credentials

3. **WordPress Setup**:
   - Configure HTTP Basic Auth for WordPress REST API
   - Update the `woocommerce_url` in the SetFields node with your domain

4. **Channel Post Format**:
   - First line: Product title
   - Include at least one photo
   - Add price in format: 9,500,000 or 9.500.000
   - Use hashtags that match your WooCommerce category names
   - End posts with your signature after the divider character

## Requirements

- Active Telegram bot with channel admin access
- WooCommerce store with REST API enabled
- WordPress with media upload permissions

## How to customize the workflow

**Price Format**: Modify the regex patterns in the Code node to match your currency format

**Category Mapping**: Ensure your Telegram hashtags exactly match your WooCommerce category names

**Signature Divider**: Change the signature divider character in SetFields node (default: "_")

**Image Quality**: Adjust the Telegram file download to get different image resolutions

**Product Status**: Modify the product creation node to set products as draft instead of published

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, WooCommerce, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
