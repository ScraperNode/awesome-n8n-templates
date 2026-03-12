# 🤝 Sync Shopify customers to Google Sheets + Squarespace compatible csv

> ⚡ **656 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow retrieves all Shopify Customers and saves them into a Google Sheets spreadsheet using the [Shopify Admin REST API](https://shopify.dev/docs/api/admin-rest/2025-01/resources/customer). It uses [pagination](https://shopify.dev/docs/api/admin-rest/usage/pagination) to ensure all customers are collected efficiently.

N8n does not have built-in actions for Customers, so I built the workflow using an HTTP Request node.

## How It Works
This workflow uses the HTTP Request node to fetch paginated chunks manually.

- Shopify uses cursor-based pagination (**page_info**) instead of traditional page numbers.
- Pagination data is stored in the response headers, so we need to enable `Include Response Headers and Status` in the HTTP Request node.
- The workflow processes customer data, saves it to Google Sheets, and formats a compatible CSV for Squarespace Contacts import.
- This workflow can be run on demand or scheduled to keep your data up to date.

## Parameters
You can adjust these parameters in the HTTP Request node:

- **limit** – The number of customers per request (default: 50, max: 250).
- **fields** – Comma-separated list of fields to retrieve.
- **page_info** – Used for pagination; only limit and fields are allowed when paginating.

📌 **Note:** When you query paginated chunks with `page_info`, only the `limit` and `fields` parameters are allowed.

## Credentials
- **Shopify API Key** – Required for authentication.
- **Google Sheets API credentials** – Needed to insert data into the spreadsheet.

## Google Sheets Template
### Clone this spreadsheet:
📎 [Google Sheets Template](https://docs.google.com/spreadsheets/d/1E8i98hwiFW7XG9HuxIZrOWfuLxGFaDm3EOAGQBZjhfk/edit?usp=sharing)

According to [Squarespace documentation](https://support.squarespace.com/hc/en-us/articles/360001280708-Building-mailing-lists#h_01H95WGA8Y7F3D2AJ4K7J30CMY), your spreadsheet can have up to three columns and must be arranged in this order (no header):

1. **Email Address**  
2. **First Name** (optional)  
3. **Last Name** (optional)  
4. **Shopify Customer ID** (this field will be ignored)  

## Exporting a Compatible CSV for Squarespace Contacts
This workflow also generates a CSV file that can be imported into Squarespace Contacts.

### How to Import the CSV to Squarespace:
1. Open the **Lists & Segments** panel and click on your mailing list.
2. Click **Add Subscribers**, then select **Upload a list**.
3. Click **Add a CSV file** and select the file to import.
4. Toggle **These subscribers accept marketing** to confirm permission.
5. Preview your list, then click **Import**.

## Who Is This For?
- **Shopify store owners** who need to export all customers to Google Sheets.
- **Anyone looking for a flexible and scalable** Shopify customers extraction solution.
- **Squarespace website owners** who want to bulk-create their Contacts using CSV.

---
Explore More Templates  
👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
