# 🎬 Create e-commerce listings from images with UploadToURL, GPT-4o, Shopify

> ⚡ **226 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

Transform raw product images into fully-optimized e-commerce listings in seconds. This workflow automates the bridge between a photo upload and a live product page by combining **UploadToURL** for hosting, **GPT-4o Vision** for content generation, and native integrations for **Shopify** and **WooCommerce**.

## 🎯 What This Workflow Does

Turns a single product photo into a comprehensive, SEO-ready store listing:

1. **📝 Captures Product Assets** - Receives an image via mobile upload (binary) or a remote URL via Webhook.
2. **☁️ Instant CDN Hosting** - **UploadToURL** hosts the image and generates a permanent, high-speed link for your store.
3. **👁️ Vision AI Analysis** - **GPT-4o Vision** "looks" at the product to generate titles, HTML descriptions, SEO tags, and even suggested categories.
4. **🚦 Smart Platform Routing** - Automatically detects your target platform and formats the data for:
   - **Shopify**: Creates products via GraphQL-compatible REST with full SEO metafields.
   - **WooCommerce**: Creates listings via REST API with Yoast SEO support and marketing blurbs.
5. **📊 Data Enrichment** - Sanitizes SKUs, coerces pricing, and maps inventory data for a production-ready entry.

## ✨ Key Features

- **Seamless Asset Hosting**: Uses the **UploadToURL** community node to eliminate the need for manual cloud storage management.
- **Zero-Copywriting Required**: AI generates 5-point bullet features, SEO titles (max 70 chars), and rich HTML descriptions.
- **Dual-Platform Support**: Toggle between Shopify and WooCommerce within a single workflow.
- **Automated Slugs**: Generates URL-friendly "handles" based on AI-suggested product names.
- **Robust Error Handling**: Centralized logic to catch upload or API failures and return structured feedback.

## 💼 Perfect For

- **E-commerce Managers**: Adding hundreds of products without manual data entry.
- **Dropshippers**: Quickly importing products from supplier URLs with fresh, unique AI copy.
- **Retailers**: Taking photos of new stock on a phone and pushing them live to the store instantly.
- **Agencies**: Automating catalog management for multiple client stores.

## 🔧 What You'll Need

### Required Integrations
- **[UploadToURL](https://uploadtourl.com)** - To host product images and provide public CDN links.
- **n8n Community Node** - `n8n-nodes-uploadtourl` must be installed.
- **OpenAI API** - GPT-4o Vision for image analysis and copywriting.
- **Shopify or WooCommerce** - Credentials for your specific store platform.

### Optional Integrations
- **Google Sheets** - To log all generated product data for an offline backup.
- **Slack** - To notify the team whenever a new product "Draft" is created.

## 🚀 Quick Start

1. **Import Template** - Copy the JSON and import it into your n8n instance.
2. **Install Node** - Verify the **UploadToURL** community node is installed.
3. **Set Credentials** - Connect your UploadToURL, OpenAI, and Store (Shopify/WooCommerce) accounts.
4. **Set Default Platform** - Configure the `DEFAULT_PLATFORM` variable (shopify/woocommerce).
5. **Test Upload** - Send a `POST` request with an image and price to the Webhook URL.
6. **Go Live** - Switch to "Active" to begin your automated catalog expansion.

## 🎨 Customization Options

- **Pricing Logic**: Add a node to calculate dynamic markups or currency conversions.
- **Publishing Workflow**: Set `publishImmediately` to `false` to create all AI products as "Drafts" for human review.
- **Image Processing**: Add watermarking or resizing steps before uploading to the CDN.
- **Multi-Store Routing**: Use tags to route products to different regional store locations.

## 📈 Expected Results

- **95% reduction** in manual listing time (from 15 minutes to 30 seconds per product).
- **SEO-Optimized listings** from day one with zero manual keyword research.
- **Professional, consistent descriptions** across your entire product catalog.
- **Immediate mobile-to-store** capability for on-the-go inventory management.

## 🏆 Use Cases

### High-Volume Inventory
A warehouse team snaps photos of 50 new arrivals; the workflow creates 50 draft listings with descriptions and prices ready for final approval.

### Competitor Migration
Input a list of product image URLs from a supplier site; the AI re-writes all titles and descriptions to ensure unique content for SEO.

### Boutique E-commerce
Small business owners can manage their entire store from their smartphone by simply "sharing" a photo to the n8n webhook.

## 💡 Pro Tips

- **High-Res Images**: Better image quality results in significantly more accurate AI feature extraction.
- **SKU Naming**: Send a custom SKU in the webhook to maintain sync with your physical inventory or ERP system.
- **Confidence Scores**: The AI returns a `confidenceScore`; you can set a filter to only auto-publish products with a score above 0.9.

---

**Ready to automate your storefront?** Import this template and connect **UploadToURL** to start building your AI-driven product catalog today.

**Questions about store-specific fields?** Detailed sticky notes inside the workflow explain how to map custom attributes for both Shopify and WooCommerce.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Shopify, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
