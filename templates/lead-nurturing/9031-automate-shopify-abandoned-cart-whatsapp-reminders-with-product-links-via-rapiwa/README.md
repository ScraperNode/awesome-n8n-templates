# 💬 Automate Shopify abandoned cart WhatsApp reminders with product links via Rapiwa

> ⚡ **475 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate Shopify Abandoned Cart WhatsApp Reminders with Product Links via Rapiwa

## Who’s it for
This n8n workflow automatically identifies customers who have abandoned their carts on your Shopify store, cleans and verifies their WhatsApp numbers, and sends them personalized reminders via the Rapiwa API. It also logs each interaction—whether the number was valid or not—into a connected Google Sheet. Designed for marketers, small business owners, freelancers, and support teams, this solution makes it easy to run bulk WhatsApp campaigns using just a Google Sheet and your own WhatsApp number—no need for the official WhatsApp Business API. It’s a budget-friendly, scalable, and easy-to-manage alternative for anyone looking to automate WhatsApp follow-ups without the tech hassle.

## How it Works / What It Does
- Reads rows from a Google Sheet where the Status column is marked as "pending".
- Cleans each phone number (removes special characters, spaces, etc.).
- Verifies whether the number is a WhatsApp user using the Rapiwa API.
- If valid:
  - Sends the message via Rapiwa.
  - Updates Status = sent and Verification = verified.
- If invalid:
  - Skips sending.
  - Updates Status = not sent and Verification = unverified.
- Waits a configurable delay between sends to avoid rate limits.
- Processes rows in small batches and repeats on schedule (default every 5 minutes).

---

## How to Set Up
1. Duplicate the sample Google Sheet format and populate it with contacts and messages.
2. Fill required columns such as WhatsApp No, Name, Message, Image URL, and set Status = pending.
3. Connect Google Sheets in n8n and grant the required OAuth scopes.
4. Create an HTTP Bearer credential in n8n and paste your Rapiwa API key.
5. Configure the workflow nodes (Trigger, Google Sheets, Limit, SplitInBatches, Code, HTTP Request, If, Update Google Sheets, Wait).
6. Enable the workflow in n8n.

---

## Requirements
- Google Sheets API credentials (OAuth2) configured in n8n
- Google Sheet matching the template (WhatsApp No, Name, Message, Status, Verification)
- Rapiwa account and Bearer token
- n8n instance with HTTP Request and Google Sheets nodes enabled

---

## How to Customize the Workflow
- Add or increase delay between messages using the Wait node (e.g., 5–10 seconds).
- Change message content or include media by editing the HTTP Request body.
- Personalize messages using sheet columns (Name, product details, coupon codes).
- Add error handling nodes to retry failed sends or log errors.
- Adjust the Limit node to control how many rows are processed per run.

---

## Workflow Highlights
- Triggered every 5 minutes using the Schedule Trigger node.
- Filters sheet rows where Status = pending.
- Cleans numbers and verifies WhatsApp existence before sending.
- Sends messages via Rapiwa (unofficial API).
- Updates Google Sheet rows with Status = sent/not sent and Verification = verified/unverified.
- Uses a Wait node to prevent rapid-fire sending.

---

## Setup in n8n

### 1. Connect Google Sheets
- Add a Google Sheets node.
- Authenticate with your Google account.
- Select the document and worksheet.
- Use a filter or query to fetch rows with `Status = pending`.

### 2. Loop Through Rows
- Use SplitInBatches to process rows in small chunks (e.g., 5 rows per batch).
- Add a Code node to clean phone numbers (remove non-digits).
- Add a Wait node to pause between individual sends (recommended 5 seconds).

### 3. Send Message via HTTP Node
- Configure an HTTP Request node to POST to:
  `https://app.rapiwa.com/api/send-message`
- Use Bearer Token authentication with your Rapiwa API key.
- Example JSON body:
```
{
  "number": "{{ $json['WhatsApp No'] }}",
  "message": "{{ $json['Message'] }}"
}
```
- After the send, update the row in Google Sheets with the result.

---

## Sample Google Sheet Structure
 - A Google Sheet formatted like this ➤ [sample](https://docs.google.com/spreadsheets/d/1zsVzniJTeiFOafCI_V0B3_7VnlAPQ2CTWQa-N30qCqs/edit?usp=sharing)

| name | number | order id | item name | coupon | item link | total price | validity | status |
| -------------- | ------------- | -------------- | --------------------------------- | ------ | -------------------------------------------------------------------------------- | ------------ | ---------- | -------- |
| Abdul Mannan | 8801400620056 | 39248398811454 | S25 Ultra 5XXXXX Price Cell Phone | | [Product Link](https://your-shop-domain.myshopify.com/946181xxxxxx&locale=en-BD) | 11500.00 BDT | unverified | not sent |
| Abdul Mannan | 8801400620055 | 39248402153790 | S25 Ultra 5XXXXX Price Cell Phone | | [Product Link](https://your-shop-domain.myshopify.com/946181xxxxxx&locale=en-BD) | 11500.00 BDT | verified | sent |
| Abdul Mannan | 8801400620055 | 39248403431742 | S25 Ultra 5XXXXX Price Cell Phone | | [Product Link](https://your-shop-domain.myshopify.com/946181xxxxxx&locale=en-BD) | 11500.00 BDT | verified | sent |

---

## Tips
- Ensure numbers are in proper format (e.g., 8801XXXXXXXXX — no +, no spaces).
- Use public image URLs if sending media.
- Store Rapiwa API key securely in n8n credentials.
- Test with a small batch before scaling up.
- Mark processed rows as "sent" to avoid duplicates.
- Increase Wait time or reduce batch size if you encounter rate limiting.

## Important Notes
- Avoid Duplicates: The Google Sheet serves as a ledger. Sent messages won’t be repeated in the next cycle.
- Rate Limit Awareness: Use Wait nodes to space out requests and avoid getting banned.
- Add Delay for Safety: If needed, increase wait times or limit message batches.
- Extendable: You can add product images, links, or even abandon cart discounts dynamically.

## Future Enhancements (Ideas)
- Add delay between batches (e.g., 60 messages/hour)
- Auto-update Shopify checkout status (via GraphQL API)
- Use more advanced templates or media (via Rapiwa)
- Add error handling to log failed API calls
- Use Telegram/Slack node to notify when process ends
---

## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support
- WhatsApp Support: [Chat Now](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Community](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)  
- Website: [https://spagreen.net](https://spagreen.net)  
- Developer Portfolio: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
