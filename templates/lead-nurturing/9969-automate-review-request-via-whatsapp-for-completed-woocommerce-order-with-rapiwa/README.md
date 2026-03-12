# 💬 Automate review request via WhatsApp for completed WooCommerce order with Rapiwa

> ⚡ **256 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for?
This workflow is designed for online store owners, customer-success teams, and marketing operators who want to automatically verify customers' WhatsApp numbers and deliver order updates or invoice links via WhatsApp. It is built around WooCommerce order WooCommerce Trigger (order.updated) but is easily adaptable to Shopify or other platforms that provide billing and line_items in the WooCommerce Trigger payload.

## What this Workflow Does / Key Features
- Listens for WooCommerce order events (example: order.updated) via a Webhook or a WooCommerce trigger.
- Filters only orders with status "completed" and maps the payload into a normalized object: { data: { customer, products, invoice_link } } using the Code node `Order Completed check`.
- Iterates over line items using `SplitInBatches` to control throughput.
- Cleans phone numbers (`Clean WhatsApp Number` code node) by removing all non-digit characters.
- Verifies whether the cleaned phone number is registered on WhatsApp using Rapiwa's verify endpoint `(POST https://app.rapiwa.com/api/verify-whatsapp)`.
- If verified, sends a templated WhatsApp message via Rapiwa `(POST https://app.rapiwa.com/api/send-message)`.
- Appends an audit row to a "Verified & Sent" Google Sheet for successful sends, or to an "Unverified & Not Sent" sheet for unverified numbers.
- Uses `Wait` and batching to throttle requests and avoid API rate limits.

## Requirements
- HTTP Bearer credential for Rapiwa (example name in flow: `Rapiwa Bearer Auth`).
- WooCommerce API credential for the trigger (example: `WooCommerce (get customer)`)
- Running n8n instance with nodes: WooCommerce Trigger, Code, SplitInBatches, HTTP Request, IF, Google Sheets, Wait.
- Rapiwa account and a valid Bearer token.
- Google account with Sheets access and OAuth2 credentials configured in n8n.
- WooCommerce store (or any WooCommerce Trigger source) that provides `billing` and `line_items` in the payload.

## How to Use — step-by-step Setup
1) Credentials
   - Rapiwa: Create an HTTP Bearer credential in n8n and paste your token (flow example name: `Rapiwa Bearer Auth`).
   - Google Sheets: Add an OAuth2 credential (flow example name: `Google Sheets`).
   - WooCommerce: Add the WooCommerce API credential or configure a Webhook on your store.


3) Configure Google Sheets
   - The exported flow uses spreadsheet ID: 1S3RtGt5xxxxxxxXmQi_s (Sheet gid=0) as an example. Replace with your spreadsheet ID and sheet gid.
   - Ensure your sheet column headers exactly match the mapping keys listed below (case and trailing spaces must match or be corrected in the mapping).

5) Verify HTTP Request nodes
   - Verify endpoint: POST https://app.rapiwa.com/api/verify-whatsapp — sends { number } (uses HTTP Bearer credential).
   - Send endpoint: POST https://app.rapiwa.com/api/send-message — sends number, message_type=text, and a templated message that uses fields from the `Clean WhatsApp Number` output.



## Google Sheet Column Structure
The Google Sheets nodes in the flow append rows with these column keys. Make sure the spreadsheet headers 
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1S3RtGt5tGk2sLLm9XQTI9C1C0bq2jx3TNuGQnXmQi_s/edit?usp=sharing)

| Name           | Number        | Email             | Address                                  | Product Title               | Product ID | Total Price   | Invoice Link                                                                                                  | Delivery Status | Validity   | Status    |
|----------------|---------------|-------------------|------------------------------------------|-----------------------------|------------|---------------|--------------------------------------------------------------------------------------------------------------|-----------------|------------|-----------|
| Abdul Mannan | 8801322827799 | contact@spagreen.net   | mirpur dohs                             | Air force 1 Fossil 1:1 - 44 | 238        | BDT 5500.00   | [Invoice link](https://your_shop_domain/oxxxxoWRWqd) | completed       | verified   | sent      |
| Abdul Mannan | 8801322827799 | contact@spagreen.net   | mirpur dohs h#1168 rd#10 av#10 mirpur dohs dhaka | Air force 1 Fossil 1:1 - 44 | 238        | BDT 5500.00   | [Invoice link](https://your_shop_domain/cxxxxuhtbLoWRWqd) | completed       | unverified | not sent  |


## Important Notes
- Do not hard-code API keys or tokens; always use n8n credentials.
- Google Sheets column header names must match the mapping keys used in the nodes. Trailing spaces are common accidental problems — trim them in the spreadsheet or adjust the mapping.
- The IF node in the exported flow compares to the string `"true"`. If the verify endpoint returns boolean true/false, convert to string or boolean consistently before the IF.
- Message templates in the flow reference `$('Clean WhatsApp Number').item.json.data.products[0]` — update templates if you need multiple-product support.

## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, WooCommerce Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
