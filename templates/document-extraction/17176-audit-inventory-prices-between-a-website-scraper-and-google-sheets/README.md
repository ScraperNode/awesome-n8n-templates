# 🔬 Audit inventory prices between a website scraper and Google Sheets

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives scraped product data via a webhook, compares it against an internal inventory list in Google Sheets, and writes an audit log (price changes, matches, and missing items) to a separate Google Sheets spreadsheet.

## How it works
1. Receives a POST webhook request containing a JSON payload with a `products` array from an external scraper.
2. Reads the current internal inventory reference rows (SKUs, product names, and prices) from a Google Sheets spreadsheet.
3. Compares each sheet item to the scraped products, matching first by SKU and then (as a fallback) by product name, and calculates the price difference.
4. Labels each item as Matched (No Price Change), Price Changed, or Not Found on Website, and carries forward category and image URL when available.
5. Appends the comparison results as new rows into an output Google Sheets spreadsheet for reporting.

## Setup
1. Create or select two Google Sheets files (one for the inventory reference and one for the audit output) and ensure the output sheet has headers for `sku`, `product_name`, `sheet_price`, `scraped_price`, `match_found_via`, `status`, `difference`, `category`, and `image_url`.
2. Add a Google Sheets OAuth2 credential in n8n with access to both spreadsheets and update the document and sheet IDs if you use different files.
3. Configure your external scraper to POST to the workflow’s production webhook URL and send a JSON body that includes `body.products[]` with fields such as `sku`, `name`, `scraped_rate`, `category`, and `image_url`.

## Requirements
- Here is the simplified, clean, and point-by-point English version of the project requirements, perfectly formatted to be pasted directly into your n8n Creator Profile or project dashboard:
- 📋 SYSTEM & TECHNICAL REQUIREMENTS
- 💻 1. Environment & Terminal
- Node.js Runtime: Required to execute and run the local scraper script on your computer.
- Terminal Access: Access to Windows PowerShell or Bash terminal to fire the execution commands.
- Stable Network: A continuous internet connection to fetch web data and avoid bot-detection blocks.
- 🌐 2. n8n Platform Configuration
- Active n8n Instance: Cloud or self-hosted workspace to run and monitor the integration pipeline.
- 4 Core Nodes Configured:
- Webhook Node: To create a secure gateway and listen for live incoming data.
- Google Sheets (Reader): To extract the baseline product lists securely.
- JavaScript Code Node: To run the two-way array matching and price difference logic.
- Google Sheets (Writer): Set to automatically append rows into the final spreadsheet.
- 📊 3. Data Sources & Permissions
- Google OAuth2 Access: Secure Google API connection linked to your workspace email to read/write sheets.
- Master Inventory File: An internal reference spreadsheet containing exactly 376 active items with clean SKU and Product Name headers.
- Output Reporting Sheet: A secondary target tab (Sheet1) set up with identical matching columns (sku, product_name, sheet_price, scraped_price, match_found_via, status, difference).
- 🎯 4. Target Website Access
- Domain Connectivity: Open web access to scan the public storefront without firewall restrictions.
- CSS Selector Stability: Reliance on clean website classes (like .price-item--regular) to extract exact web prices.

## Customization
- Smart 376-Item Loop: Custom built to check only our 376 internal products instead of the whole website. This ensures we only see data for the items we actually care about.
- 2-Step Matching Logic: Automatically matches products by SKU first. If the SKU is missing on the website, it instantly falls back to match by Product Name.
- Automated Price Math: Calculates the exact price difference ($Scraped Price - Sheet Price$) automatically for every single item.
- Custom Status Labels: Automatically tags every row with clear business statuses: Matched (No Price Change), Price Changed, or Not Found on Website.
- Auto-Column Mapping: Customized the final Google Sheets node to automatically align our processed script data directly under the matching sheet headers.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
