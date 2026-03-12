# 📊 Competitor price monitoring with web scraping,Google Sheets & Telegram

> ⚡ **5,845 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

++Download the google sheet here++ and replace this with the googles sheet node: [Google sheet](https://www.dropbox.com/scl/fi/zaif45nt9uzgz8mrhht9n/competitor_price_drop_automation.xlsx?rlkey=4vj3wz6gqp16dc2hh9hw5o49z&st=i23h513p&dl=1) , upload to google sheets and replace in the google sheets node.

- Scheduled trigger: Runs once a day at 8 AM (server time).

- Fetch product list: Reads your “master” sheet (product_url + last known price) from Google Sheets.

- Loop with delay: Iterates over each row (product) one at a time, inserting a short pause (20 s) between HTTP requests to avoid blocking.

- Scrape current price: Loads each product_url, extracts the current price via a simple CSS selector.

- Compare & normalize: Compares the newly scraped price against the “last_price” from your sheet, calculates percentage change, and tags items where price_changed == true.

**On price change:**
- Send alert: Formats a Telegram message (“Price Drop” or “Price Hike”) and pushes it to your configured chat.

- Log history: Appends a new row to a separate “price_tracking” tab with timestamp, old price, new price, and % change.

- Update master sheet: After a 1 min pause, writes the updated current_price back to your “master” sheet so future runs use it as the new baseline.

## Set up step
1. Google Sheets credentials (~5 min)
2. Create a Google Sheets OAuth credential in n8n. 
3. Copy your sheet’s ID and ensure you have two tabs: 
4. product_data (columns: product_url, price) 
5. price_tracking (columns: timestamp, product_url, last_price, current_price, price_diff_pct, price_changed) 
6. Paste the sheet ID into both Google Sheets nodes (“Read” and “Append/Update”). 
7. Telegram credentials (~5 min) 
8. Create a Telegram Bot token via BotFather. 
9. Copy your chat_id (for your target group or personal chat). 
10. Add those credentials to n8n and drop them into the “Telegram” node.

## Workflow parameters (~5 min)

- Verify the schedule in the Schedule Trigger node is set to 08:00 (or adjust to your preferred run time).

- In the Loop Over Items node, confirm “Batch Size” is 1 (to process one URL at a time).
 
- Adjust the Delay to avoid Request Blocking node if your site requires a longer pause (default is 20 s).
 
- In the Parse Data From The HTML Page node, double-check the CSS selector matches how prices appear on your target site.
 
- Once credentials are in place and your sheet tabs match the expected column names, the flow should be ready to activate. Total setup time is under 15 minutes—detailed notes are embedded as sticky comments throughout the workflow to help you tweak selectors, change timeouts, or adjust sheet names without digging into code.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
