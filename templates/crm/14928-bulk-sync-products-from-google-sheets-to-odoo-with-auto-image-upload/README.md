# 🤝 Bulk sync products from Google Sheets to Odoo with auto image upload

> ⚡ **231 views** · 🤝 [CRM & Sales Operations](../)

## Description

What Problem Does It Solve?

* Manually entering hundreds of products from a spreadsheet into Odoo is slow, repetitive, and prone to human error.
* Ensuring that barcodes are unique and products aren't duplicated during manual entry is a constant challenge.
* Uploading product images one by one into Odoo's interface is a major bottleneck for inventory management.
* This workflow solves these issues by:
  - Automatically importing new products from a Google Sheet to Odoo the moment they are added.
  - Performing a real-time duplicate check via Barcode to prevent redundant records.
  - Automatically fetching and attaching product images from URLs directly into the Odoo product template.
  - Updating the status in your spreadsheet to "Done" once the sync is successful.

How to Configure It

* Google Sheets Setup
  - Connect your Google account and select your inventory spreadsheet.
  - Your sheet should have columns for: Name, Barcode, category, Sales Price, Cost, and Image URL (الصوره).
* Odoo Setup
  - Connect your Odoo API credentials in n8n.
  - Ensure the category names in your sheet exactly match the existing "Product Categories" in Odoo for accurate mapping.
* Image Processing
  - The "Download Image" node is configured to fetch the image file from the URL provided in your sheet. Ensure these are direct, publicly accessible image links.

How It Works

* The workflow triggers automatically whenever a new row is added to your Google Sheet.
* It loops over the items and first searches Odoo by Barcode to verify if the product already exists.
* If it’s a new product, it searches Odoo to find the correct internal Category ID based on the sheet data.
* It checks if an image URL is available. If so, it downloads the file, converts it to binary, and creates the product in Odoo with the image attached.
* If no image is provided, it seamlessly creates the product template with basic details (Price, Cost, Barcode, Category).
* Finally, it updates the status column in the spreadsheet to "Done" and includes a brief "Wait" to stay within Odoo and Google API rate limits.

Customization Ideas

* Add a logic branch to update existing products (e.g., sync new prices) if the Barcode already exists in Odoo instead of just skipping them.
* Integrate with a Telegram bot to send a confirmation photo and summary of the new product once it’s live in the ERP.
* Add currency conversion nodes if your sheet prices are in a different currency than your Odoo default.

For more info [Contact Me](https://www.linkedin.com/in/khaledyasser01/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Odoo, Google Sheets Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
