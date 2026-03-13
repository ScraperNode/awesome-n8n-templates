# 📊 Scrape product info from website URLs in Google Sheets using Dumpling AI

> ⚡ **1,582 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 📄 What this workflow does

This workflow automatically scrapes product information from any website URL entered into a Google Sheet and stores the extracted product details into another sheet. It uses Dumpling AI to extract product data such as name, price, description, and reviews.

---

## 👤 Who is this for

This is ideal for:
- Lead generation specialists capturing product info from prospect websites
- eCommerce researchers collecting data on competitor product listings
- Sales teams building enriched product databases from lead URLs
- Anyone who needs to automate product scraping from multiple websites

---

## ✅ Requirements

- A **Google Sheet** with a column labeled `Website` where URLs will be added
- A second sheet (e.g., `product details`) where extracted data will be saved
- **Dumpling AI** API access to perform the extraction
- Connected **Google Sheets** credentials in n8n

---

## ⚙️ How to set up

1. Replace the Google Sheet and tab IDs in the workflow with your own.
2. Make sure your source sheet includes a `Website` column.
3. Connect your Dumpling AI and Google Sheets credentials.
4. Make sure the output sheet has the following headers:
   - `productName`
   - `price`
   - `productDescription`  
   *(The workflow supports `review`, but it’s optional.)*
5. Activate the workflow to start processing new rows.

---

## 🔁 How it works (Workflow Steps)

1. **Watch New Website URL in Google Sheets**: Triggers when a new row is added with a website URL.
2. **Extract Product Info with Dumpling AI**: Sends the URL to Dumpling AI’s extract endpoint using a defined schema for product details.
3. **Split Extracted Products**: Separates multiple products into individual items if the page contains more than one.
4. **Append Product Info to Google Sheets**: Adds the structured results to the specified product details sheet.

---

## 🛠️ Customization Ideas

- Add a column to store the original source URL alongside each product
- Use OpenAI to generate short SEO summaries for each product
- Add filters to ignore pages without valid product details
- Send Slack or email notifications when new products are added to the sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
