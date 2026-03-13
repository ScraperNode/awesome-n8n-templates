# 📊 Track Amazon product prices with ScrapeGraphAI, Google Sheets & Telegram alerts

> ⚡ **414 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates the process of **monitoring Amazon product prices** and **sending alerts** when a product’s price drops below a defined threshold.

It integrates **ScrapeGraphAI**, **Google Sheets**, and **Telegram** to provide a complete end-to-end price tracking system.

---

###  **Key Advantages**

1. **💡 Intelligent Scraping**

   * Uses **ScrapeGraphAI** to extract structured data (product prices) from complex Amazon pages — even those with dynamic JavaScript rendering.

2. **📊 Centralized Tracking**

   * All products and price history are managed in a **Google Sheet**, making it easy to review and update data.

3. **⚡ Real-Time Alerts**

   * Sends **instant Telegram notifications** when a product’s price drops below its previous minimum — helping users take quick advantage of deals.

4. **🔁 Fully Automated**

   * Once set up, it runs on a **schedule** with no manual input required, automatically updating and alerting users.

5. **🧩 Modular & Extensible**

   * Built entirely with **n8n nodes**, making it easy to customize — for example, adding new alert channels (email, Slack) or additional data checks.

6. **🕒 Time-Efficient**

   * Eliminates the need for manual price checking, saving significant time for users monitoring multiple products.

---


### How it Works

This automated workflow tracks Amazon product prices and sends an alert via Telegram when a product hits a new lowest price. Here's the process:

1.  **Trigger & Data Fetch:** The workflow is initiated either on a scheduled basis (every 10 minutes) or manually. It first connects to a designated Google Sheet, which acts as a database, to fetch a list of products to monitor. Each product's details (Name, URL, and current "MIN PRICE") are read.

2.  **Price Scraping & Comparison:** The workflow loops through each product from the sheet. For each product, it uses ScrapeGraphAI to navigate to the Amazon product page, render JavaScript-heavy content, and extract the current price. This newly scraped price is then compared to the "MIN PRICE" value stored in the Google Sheet for that product.

3.  **Conditional Alert & Update:**
    *   **If the new price is lower,** two actions are triggered:
        a. **Sheet Update:** The Google Sheet is updated with the new, lower "MIN PRICE" and the current date.
        b. **Telegram Notification:** A message is sent to a specified Telegram chat, announcing that the product has hit a new lowest price, including the product name and a link.
    *   **If the price is not lower,** no action is taken for that product, and the workflow moves on to the next one in the loop.

---

### Set up Steps

To implement this workflow yourself, follow these steps:

1.  **Prepare the Google Sheet:**
    *   Create a copy of the [provided template spreadsheet](https://docs.google.com/spreadsheets/d/1_FBegOUXt3657og_ScfuiLCERWHtxDWn14799HkVrUo/edit?usp=sharing).
    *   In the sheet, fill in the columns for `PRODUCT` (name), `URL` (the full Amazon product link), and `MIN PRICE`. When adding a new product, set the `MIN PRICE` to a very high value (e.g., 9999) to ensure the first real price triggers an alert.

2.  **Configure n8n Credentials:**
    *   **Google Sheets:** Set up a "Google Sheets account" credential in n8n using OAuth2 to grant the workflow access to your copied spreadsheet.
    *   **ScrapeGraphAI:** Configure the "[ScrapegraphAI account](https://dashboard.scrapegraphai.com/?via=n3witalia)" credential with your API key from the ScrapeGraphAI service.
    *   **Telegram:** Set up a "Telegram account" credential with a Bot Token obtained from the BotFather in Telegram. You will also need your specific `chatId` for the node.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
