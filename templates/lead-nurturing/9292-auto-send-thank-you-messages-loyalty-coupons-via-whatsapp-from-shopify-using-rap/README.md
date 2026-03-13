# 💬 Auto send thank-you messages & loyalty coupons via WhatsApp from Shopify using Rapiwa

> ⚡ **314 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Shopify Auto Send WhatsApp Thank-You Messages & Loyalty Coupon Using Rapiwa API

## Who is this for?
This workflow is for Shopify store owners, marketers, and support teams who want to automatically message their high-value customers on WhatsApp when new discount codes are created.

## What this workflow does
- Fetches customer data from Shopify
- Filters customers where `total_spent &gt; 5000`
- Cleans phone numbers (removes non-digit characters) and normalizes them to an international format
- Verifies numbers via the Rapiwa API (`verify-whatsapp` endpoint)
- Sends coupon or thank-you messages to verified numbers via the Rapiwa `send-message` endpoint
- Logs each send attempt to Google Sheets with `status` and `validity`
- Uses batching (SplitInBatches) and Wait nodes to avoid rate limits

## Key features
- Automated trigger: Shopify webhook (`discounts/create`) or manual trigger
- Targeted sending to high-value customers
- Pre-send verification to reduce failed sends
- Google Sheets logging and status updates
- Rate-limit protection using Wait node

#How to use?
## Step-by-step setup
1) Prepare a Google Sheet
   - Columns: `name`, `number`, `status`, `validity`, `check` (optional)
   - Example row: `Abdul Mannan | 8801322827799 | not sent | unverified | check`

2) Configure n8n credentials
   - Shopify: store access token (X-Shopify-Access-Token)
   - Rapiwa: Bearer token (HTTP Bearer credential)
   - Google Sheets: OAuth2 credentials and sheet access

3) Configure the nodes
   - Webhook/Trigger: Shopify `discounts/create` or Manual Trigger
   - HTTP Request (Shopify): `/admin/api/&lt;version&gt;/customers.json`
   - Code node: filter customers `total_spent &gt; 5000` and map fields
   - SplitInBatches: batching/looping
   - Code (clean number): `waNoStr.replace(/\D/g, "")`
   - HTTP Request (Rapiwa verify): POST `https://app.rapiwa.com/api/verify-whatsapp` body `{ number }`
   - IF node: check `data.exists` to decide branch
   - HTTP Request (Rapiwa send-message): POST `https://app.rapiwa.com/api/send-message` body `{ number, message_type, message }`
   - Google Sheets Append/Update: write `status` and `validity`
   - Wait: add 2–5 seconds delay between sends

4) Test with a small batch
   - Run manually with 2–5 records first and verify results

## Google Sheet column structure
**A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1q5mO2pRCdO-v51OyUZt-56UprsGpmn0PMGhnglgg2ls/edit?usp=sharing)
| Name  | Number  | Status   | Validity   |
| -------------- | ------------- | -------- | ---------- |
| Abdul Mannan | 8801322827798 | not sent | unverified |
| Abdul Mannan | 8801322827799 | sent     | verified   |

## Requirements
- Shopify Admin API access (store access token)
- Rapiwa account and Bearer token
- Google account and Google Sheet (OAuth2 setup)
- n8n instance (nodes used: HTTP Request, Code, SplitInBatches, IF, Google Sheets, Wait)

## Customization ideas
- Adjust the filter (e.g., order count, customer tags)
- Use message templates to insert name and coupon code per customer
- Add an SMS or email fallback for unverified numbers
- Send a run summary to admin (Slack / email)
- Store logs in a database for deeper analysis

## Important notes
- `data.exists` may be a boolean or a string — normalize it in a Code node before using in an IF node
- Ensure Google Sheets column names match exactly
- Store Rapiwa and Shopify tokens securely in n8n credentials
- Start with small batches for testing and scale gradually

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

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
