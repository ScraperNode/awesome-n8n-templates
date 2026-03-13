# 📊 Monitor Shopify stores for new products with BrowserAct and Slack alerts

> ⚡ **284 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Competitors Shopify Website Monitor](https://i.postimg.cc/dQpczfP7/Screen-Shot-20251025120751.png)

## Automated E-commerce Store Monitoring for New Products Using BrowserAct

### This n8n template is an advanced competitive intelligence tool that automatically monitors competitor E-commerce/Shopify stores and alerts you the moment they launch a new product.

This workflow is essential for e-commerce store owners, product strategists, and marketing teams who need real-time insight into what their competitors are selling.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow runs on a **Schedule Trigger** to check for new products automatically (e.g., daily).
* A **Google Sheets** node fetches your master list of competitor store links from a central sheet.
* The workflow **loops** through each competitor one by one.
* For each competitor, a **Google Sheets** node first creates a dedicated tracking sheet (if one doesn't exist) to store their product list history.
* A **BrowserAct** node then scrapes the competitor's current product list from their live website.
* The scraped data is saved to the competitor's dedicated tracking sheet.
* The workflow then fetches the *newly scraped list* and the *previously stored list* of products.
* A custom **Code** node (labeled "Compare Datas") performs a difference check to reliably detect if any new products have been added.
* If a new product is detected, an **If** node triggers an immediate **Slack** alert to your team, providing real-time competitive insight.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Competitors Shopify Website New Product Monitor**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for storing and managing data
* **Slack** credentials for sending alerts

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Automatically Track Competitor Products | n8n & Google Sheets Template](https://youtu.be/Gsj6IlyxdY0)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
