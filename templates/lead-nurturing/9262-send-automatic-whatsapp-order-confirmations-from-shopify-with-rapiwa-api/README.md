# 💬 Send automatic WhatsApp order confirmations from Shopify with Rapiwa API

> ⚡ **934 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Send Automatic WhatsApp Order Confirmations from Shopify with Rapiwa API

## Who’s it for
This **n8n workflow** helps Shopify store owners and teams **automatically confirm orders via WhatsApp**. It checks if the customer's number is valid using **Rapiwa API**, sends a personalized message, and logs every attempt in **Google Sheets**—saving time and reducing manual work.

Whether you're a solo entrepreneur or managing a small team, this solution gives you a **low-cost alternative** to the official WhatsApp Business API, without losing control or personalization.

## Features
- Receives new order details via webhook upon order creation or update.
- Iterates over incoming data in manageable batches for smoother processing.
- Extracts and formats customer and order details from the Shopify webhook payload.
- Strips non-numeric characters from WhatsApp numbers for consistent formatting.
- Uses Rapiwa API to check if the WhatsApp number is valid and active.
- Branches the workflow based on number validity — separates verified from unverified.
- Sends a custom WhatsApp confirmation message to verified customers using Rapiwa.
- Updates Google Sheet rows with `status` and `validity`

## How it Works / What It Does
* Triggered by a **Shopify webhook** or by reading rows from a **Google Sheet**.
* **Normalizes and cleans** the order payload.
* Extracts details like customer name, phone, items, shipping, and payment info.
* Cleans phone numbers (removes special characters).
* Verifies if the number is registered on WhatsApp via **Rapiwa API**.
* If valid:

  * Sends a **templated WhatsApp message**.
  * Updates Google Sheet with `validity = verified` and `status = sent`.
* If invalid:

  * Skips sending.
  * Updates sheet with `validity = unverified` and `status = not sent`.
* Adds **wait/delay between sends** to prevent rate limits.
* Keeps an **audit trail** in the connected Google Sheet.

---

## How to Set Up
1. Set up a **Shopify webhook** for new orders (or connect a Google Sheet).
2. Create a Google Sheet with columns:

   * `name`, `number`, `order id`, `item name`, `total price`, `validity`, `status`
3. Create and configure a **Rapiwa Bearer token** in n8n.
4. Add **Google Sheets OAuth2 credential** in n8n.
5. Import the workflow in n8n and configure these nodes:
   * Webhook or Sheet Trigger
   * Loop Over Items (SplitInBatches)
   * Normalize Payload (Code)
   * Clean WhatsApp Number (Code)
   * Rapiwa WhatsApp Check (HTTP Request)
   * Conditional Branch (If)
   * Send WhatsApp Message (HTTP Request)
   * Update Google Sheet (Google Sheets)
   * Wait Node (delay per send)

---

## Requirements
* Shopify store with order webhook enabled (or order list in Google Sheet)
* A verified **Rapiwa API token**
* A working **n8n instance** with HTTP and Google Sheets nodes enabled
* A Google Sheet with required structure and valid OAuth credentials in n8n

---

## How to Customize the Workflow
* Modify the **message template** with your own brand tone or emojis.
* Add **country-code logic** in the Clean Number node if needed.
* Use a **unique `order id`** in your Google Sheet to prevent mismatches.
* Increase or decrease delay in the Wait node (e.g., 5–10 seconds).
* Use additional logic in Code nodes to handle discounts, promotions, or more line items.

---

## Workflow Highlights
- Triggered by **Shopify webhook** update.
- Receiving new order data form Shopify using webhook
- Cleans and extracts order data from raw payload.
- Normalizing and validating the customer’s WhatsApp number using the **Rapiwa API**
- Verifies WhatsApp number using **Rapiwa's `verify-whatsapp` endpoint**.
- Sends order confirmation via **Rapiwa's `send-message` endpoint**.
- Logs every result into **Google Sheets** (verified/unverified + sent/not sent).

---

## Setup in n8n

### 1. Check WhatsApp Registration
* Use an HTTP Request node:

  * URL: `https://app.rapiwa.com/api/verify-whatsapp`
  * Method: `POST`
  * Auth: `httpBearerAuth` using your Rapiwa token
  * Body: `{ "number": "cleaned_number" }`

### 2. Branch Based on Validity
* Use an `If` node:

  * Condition: `{{ $json.data.exists }} == true` (or `"true"` if string)

### 3. Send Message via Rapiwa
* Endpoint: `https://app.rapiwa.com/api/send-message`
* Method: `POST`
* Body:

 ```
 Hi *{{ $json.customer_full_name }}*,
 Thank you for shopping with *SpaGreen Creative*! We're happy to confirm that your order has been successfully placed.
 🧾 Order Details
 • Product: {{ $json.line_item.title }}
 • SKU: {{ $json.line_item.sku }}
 • Quantity: {{ $json.line_item.quantity }}
 • Vendor: {{ $json.line_item.vendor }}
 • Order ID: {{ $json.name }}
 • Product ID: {{ $json.line_item.product_id }}
 📦 Shipping Information
 {{ $json.shipping_address.address1 }} {{ $json.shipping_address.address2 }}
 {{ $json.shipping_address.city }}, {{ $json.shipping_address.country }} - {{ $json.shipping_address.zip }}
 💳 Payment Summary
 • Subtotal: {{ $json.subtotal_price }} BDT
 • Tax (VAT): {{ $json.total_tax_amount }} BDT
 • Shipping: {{ $json.total_shipping_amount }} BDT
 • Discount: {{ $json.total_discount_amount }} BDT
 • Total Paid: {{ $json.total_price }} BDT
 Order Date: {{ $json.created_date }}
 Warm wishes,
 *Team SpaGreen Creative*
 ```

## Sample Google Sheet Structure
- **A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1b5b9kvkfuCMtZ-7Z-w21sXOmHFmQ30N1iQPc2WMStEo/edit?usp=sharing)  


| name        | number        | order id      | item name                      | total price | validity | status |
| ----------- | ------------- | ------------- | ------------------------------ | ----------- | -------- | ------ |
| Abdul Mannan | 8801322827799| 8986469695806 | Iphone 10                      | 1150        | verified | sent   |
| Abdul Mannan | 8801322827799| 8986469695806 | S25 UltraXXXXeen Android Phone | 23000       | verified | sent   |

---

## Tips
* Always ensure phone numbers have a country code (e.g., 880 for BD).
* Clean numbers with regex: `replace(/\D/g, '')`
* Adjust Rapiwa API response parsing depending on actual structure (`true` vs `"true"`).
* Use `row_number` for sheet updates, or unique `order id` for better targeting.
* Use the Wait node to add 3–10 seconds between sends.

---

## Important Notes
* Avoid reordering sheet rows—updates rely on consistent `row_number`.
* `shopify-app-auth` is the credential name used in the export—make sure it's your Rapiwa token.
* Use a test sheet before going live.
* Rapiwa has request limits—avoid rapid sending.
* Add media/image logic later using `message_type: media`.

---

## Future Enhancements (Ideas)
* Add Telegram/Slack alert once the batch finishes.
* Include media (e.g., product image, invoice) in the message.
* Detect and resend failed messages.
* Integrate with Shopify’s GraphQL API for additional data.
* Auto-mark fulfillment status based on WhatsApp confirmation.

---

## Support & Community
* WhatsApp: [8801322827799](https://wa.me/8801322827799)
* Discord: [discord](https://discord.gg/SsCChWEP)
* Facebook Group: [facebook group](https://www.facebook.com/groups/spagreenbd)
* Website: [https://spagreen.net](https://spagreen.net)
* Envato/Codecanyon: [codecanyon portfolio](https://codecanyon.net/user/spagreen/portfolio)

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
