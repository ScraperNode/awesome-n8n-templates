# 📊 Track Amazon prices & monitor competitors with Apify and Google Sheets

> ⚡ **828 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Amazon Price Tracker & Competitor Monitoring Workflow (Apify + Google Sheets)

This n8n workflow automates Amazon price tracking and competitor monitoring by scraping product pricing via Apify and updating your Google Sheet every day.  

It removes manual price checks, keeps your pricing data always fresh, and helps Amazon sellers stay ahead in competitive pricing, Buy Box preparation, and daily audits.

## 💡 Use Cases
- Automatically track prices of your Amazon products  
- Monitor competitor seller prices across multiple URLs  
- Maintain a daily pricing database for reporting and insights  
- Catch sudden competitor undercutting or pricing changes  
- Support Buy Box analysis by comparing seller prices  
- Scale from 10 to 1000+ product URLs without manual effort  

## 🧠 How It Works
- **Scheduled Trigger** runs the workflow every morning  
- **Google Sheets node** loads all product rows with seller URLs  
- **Loop node** processes each item one-by-one  
- **Apify Actor node** triggers the Amazon scraper  
- **HTTP Request node** fetches the scraped result from Apify  
- **JavaScript node** extracts, cleans, and formats price data  
- **Update Sheet node** writes the fresh prices back to the right row  
- Supports additional price columns for more sellers or metrics  

## ➕ Adding New Competitor Columns (Step-by-Step)

### **1. Add a new column in Google Sheets**
Add two new columns:

competitor_url_3
price_comp_3

---

### **2. Update the Apify Actor (inside n8n)**
In the **Apify Actor node**, pass the new competitor URL:

"competitor_url_3": {{$json.competitor_url_3}}

This ensures Apify scrapes the additional competitor product page.

---

### 3. Update your Code (JavaScript) node
Inside the Code node, extract the new competitor’s price from the Apify JSON and attach it to the output:

const price_comp_3 = item?.offers?.[2]?.price || null; item.price_comp_3 = price_comp_3;

return item;
(Adjust the index [2] based on the Apify output structure.)

---

### Update the Google Sheet “Update Row” node
To save the new values into your Sheet:

1. Open your Google Sheets Update Row node
2. Scroll to Field Mapping
3. Map Columns with New Data

Hit the "Save & Execute" Button.🚀

## ⚡ Requirements
- Apify account (free tier is enough)
- Apify "Amazon Product Scraper" API (Costs $40/month - 14-day free trial)
- Google Sheet containing product URLs  
- Basic credentials setup inside n8n  

## 🙌 Want me to set it up for you?
I’ll configure the full automation — Apify scraper, n8n workflow, Sheets mapping, and error handling.

Email me at: **imarunavadas@gmail.com**

**Automate the boring work and focus on smarter selling. 🚀**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
