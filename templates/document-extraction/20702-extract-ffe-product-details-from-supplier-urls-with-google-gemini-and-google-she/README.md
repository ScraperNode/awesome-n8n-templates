# 🔬 Extract FF&E product details from supplier URLs with Google Gemini and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Built for FF&E teams that spend too much time copying product information from supplier websites into schedules. The workflow takes a product URL, extracts the usable product data, structures it with Gemini, and writes it back to the correct Google Sheets record while preserving status and source traceability.

## How it works
1. The workflow starts from a webhook request containing the product URL, category, sheet reference, row context, and a unique Automation ID. The Automation ID is used throughout the workflow so the extracted data is written back to the correct FF&E record, even when multiple products are processed.
2. Before requesting the supplier page, the workflow validates the URL format. Invalid inputs are stopped early instead of being passed into the scraping and AI stages.
3. The product page is then requested directly over HTTP. The response is checked before any extraction takes place. If the page is blocked, unavailable, or returns no usable content, the workflow follows the failure path and updates the corresponding record with a clear page-fetch error status.
4. For successful responses, the HTML is reduced to the page content that is useful for product extraction. Scripts, styles, and other non content elements are excluded, while the workflow also attempts to capture the product image from the page’s og:image metadata.
5. The cleaned supplier page text is passed to Google Gemini with a tightly defined extraction schema. Gemini is asked to return the fields that matter in an FF&E schedule: SKU or product code, finish/colour, supplier or manufacturer, vendor description, and relevant product notes. Where the source page does not provide a value, the workflow leaves the field empty rather than fabricating one.
6. The extracted values are assembled into a single product record together with the original product URL, category, image URL, and Automation ID. The final Google Sheets step matches the existing row by Automation ID and updates it with the extracted information. Successful records are marked Completed; inaccessible pages are marked Failed - Page fetch error.

## Setup
1. Connect Google Sheets in n8n and select the spreadsheet that will hold the FF&E schedule. Use the same spreadsheet in both update nodes so successful and failed runs always write back to the same record set.
2. Connect your Google Gemini credential to the chat model used by the Information Extractor. The extraction step depends on Gemini to convert unstructured supplier page content into the structured FF&E fields used later in the workflow.
3. Prepare the Google Sheet with these columns: Image, Category, SKU, Finish/Colour, Supplier, Vendor Description, Notes, Product Website, Location, Automation ID, and Status. Automation ID should be unique for each product record because the workflow uses it as the row matching key.
4. Prepare the Google Sheet with these columns: Image, Category, SKU, Finish/Colour, Supplier, Vendor Description, Notes, Product Website, Location, Automation ID, and Status. Automation ID should be unique for each product record because the workflow uses it as the row-matching key. After connecting the credentials and spreadsheet, run a test with a publicly accessible supplier product page. Confirm that a successful product is marked Completed and that an inaccessible page is routed to the failure branch with Failed - Page fetch error

## Requirements
- A Google account with access to Google Sheets, a Google Gemini API credential, and an n8n instance. Create a Google Sheet containing the required FF&E columns: Image, Category, SKU, Finish/Colour, Supplier, Vendor Description, Notes, Product Website, Location, Automation ID, and Status.

## Customization
- You can customize the extracted product attributes, Gemini extraction instructions, Google Sheets column structure, status values, and failure-handling logic. The workflow can also be extended with additional scraping services for websites that block standard HTTP requests.

## Additional info
This workflow is designed for FF&E and product-sourcing use cases where teams need to convert unstructured supplier product pages into structured schedule data. Some supplier websites may restrict automated HTTP access, so results can vary depending on the website. Always review AI-extracted product information before using it for procurement or specification decisions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
