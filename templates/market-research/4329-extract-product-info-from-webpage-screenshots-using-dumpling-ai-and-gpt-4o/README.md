# 📊 Extract product info from webpage screenshots using Dumpling AI and GPT-4o

> ⚡ **551 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who is this for?

This workflow is perfect for eCommerce teams, market researchers, and product analysts who want to track or extract product information from websites that restrict scraping tools. It’s also useful for virtual assistants handling product comparison tasks.

---

### What problem is this workflow solving?

Many eCommerce and retail sites use dynamic content or anti-bot protections that make traditional scraping methods unreliable. This workflow bypasses those issues by taking a screenshot of the full page, using OCR to extract visible text, and summarizing product information with GPT-4o—all fully automated.

---

### What this workflow does

This workflow monitors a Google Sheet for new URLs. Once a new link is added, it performs the following steps:

1. **Trigger on New URL in Sheet** – Watches for new rows added to a Google Sheet.
2. **Screenshot URL via Dumpling AI** – Sends the URL to Dumpling AI’s screenshot endpoint to capture a full-page image of the product webpage.
3. **Save Screenshot to Drive Folder** – Uploads the screenshot to a specific Google Drive folder for reference or logging.
4. **Extract Text from Screenshot with Dumpling AI** – Uses Dumpling AI’s image-to-text endpoint to pull all visible content from the screenshot.
5. **Extract Product Info from Screenshot Text with GPT-4o** – Sends the extracted raw text to GPT-4o, prompting it to identify structured product information such as product name, price, ratings, deals, and purchase options.
6. **Split Each Product Entry** – Splits the GPT response (an array of product objects) so each product becomes an individual item for saving.
7. **Save Products info to Google Sheet** – Appends each product’s structured details to a separate sheet in the same spreadsheet.

---

### Setup

1. **Google Sheet**
   - Create a Google Sheet with at least two sheets:  
     - `Sheet1` should contain a header row with a column labeled `URL`.
     - `Sheet2` should contain headers: `Product Name`, `price`, `purchased`, `ratings`, `deal`, `buyingOptions`.
   - Connect your Google account in both the trigger and final write-back node.

2. **Dumpling AI**
   - Sign up at [Dumpling AI](https://app.dumplingai.com)
   - Create an API key and use it for both HTTP modules:
     - **Screenshot URL via Dumpling AI**
     - **Extract Text from Screenshot with Dumpling AI**
   - The screenshot endpoint used is `https://app.dumplingai.com/api/v1/screenshot`.

3. **Google Drive**
   - Create a folder for storing screenshots.
   - In the `Save Screenshot to Drive Folder` node, select the correct folder or provide the folder ID.
   - Make sure permissions allow uploading from n8n.

4. **OpenAI**
   - Provide an API key for GPT-4o in the `Extract Product Info from Screenshot Text with GPT-4o` node.
   - The prompt is structured to return structured product listings in JSON format.

5. **Split & Save**
   - `Split Each Product Entry` takes the array of product objects from GPT and makes each one a separate execution.
   - `Save Products info to Google Sheet` writes structured fields into `Sheet2` under:  
     `Product Name`, `price`, `purchased`, `ratings`, `deal`, `buyingOptions`.

---

### How to customize this workflow

- Adjust the GPT prompt to return different product fields (e.g., shipping info, product categories).
- Use a filter node to limit which types of products get written to the final sheet.
- Add sentiment analysis to analyze review content if available.
- Replace Google Drive with Dropbox or another file storage app.

---

### Notes

- Make sure you monitor your API usage on both Dumpling AI and OpenAI to avoid rate limits.
- This setup is great for snapshot-based extraction where scraping is blocked or unreliable.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
