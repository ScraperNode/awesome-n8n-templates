# 📊 Extract product info from website screenshots with Dumpling AI + Sheets

> ⚡ **576 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### What this workflow does

This workflow extracts product details—like name, price, discount, and rating—  
from website screenshots using Dumpling AI. It starts when a new product page  
URL is added to a Google Sheet, captures a screenshot of that page, extracts  
visible product info from the image, and writes the results back into the sheet.

### What problem is this workflow solving?

Many product pages block traditional scraping tools or use unstructured layouts.  
This workflow bypasses HTML limitations by using visual AI extraction, making  
it reliable even when content is embedded in images or hard to parse with code.

### Who is this for?

This is ideal for eCommerce researchers, pricing analysts, marketers, or anyone  
building a product database from websites without needing to code or maintain  
complex scrapers.

### Setup

1. Create a Google Sheet with a column named **"Site"** (or update the trigger).  
2. Add your product page URLs in this column—one per row.  
3. Connect your Google Sheets and Dumpling AI credentials in n8n.  
4. Ensure your Dumpling AI account has API access for screenshots and extraction.

### How to customize the workflow

- **Prompt adjustment**:  
  In the “Extract Text from Screenshot” node, you can modify the prompt to  
  extract other information like brand name, delivery time, or availability.

- **Add more fields**:  
  After the extraction, edit the “Format Extracted Data” node to map additional  
  fields from the response to your Google Sheet columns.

- **Change output destination**:  
  You can easily replace the Google Sheets module with Airtable, Notion, or  
  another app if preferred.

&gt; ⚠️ This works best when the product data is clearly visible in the screenshot.  
&gt; It won’t extract info that’s hidden behind popups or loaded via user interaction.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
