# 📊 Real-time MAP enforcement & price violation alerts using Google Sheets, BrowserAct & Slack

> ⚡ **175 views** · 📊 [Market Research & Insights](../)

## Description

## Real-Time MAP Enforcement & Price Violation Alerts using BrowserAct & slack

### This n8n template automates MAP (Minimum Advertised Price) enforcement by monitoring reseller websites and alerting you instantly to price violations and stock issues.

This workflow is essential for brand owners, manufacturers, and compliance teams who need to proactively monitor their distribution channels and enforce pricing policies.

---
### How it works
* The workflow runs on a **Schedule Trigger** (e.g., hourly) to continuously monitor product prices.
* A **Google Sheets** node fetches your list of resellers, product URLs, and the official **MAP price** (`AP_Price`).
* The **Loop Over Items** node ensures that each reseller's product is checked individually.
* A pair of **BrowserAct** nodes navigate to the reseller's product page and reliably scrape the current live price.
* A series of **If** nodes check for violations:
    * The first check (`If1`) looks for "NoData," signaling that the product is **Out of Stock**, and sends a specific **Slack** alert.
    * The second check (`If`) compares the scraped price to your MAP price, triggering a detailed **Slack** alert if a **MAP violation** is found.
* The workflow loops back to check the next reseller on the list.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**MAP (Minimum Advertised Price) Violation Alerts**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for your price list
* **Slack** credentials for sending alerts

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [I Built a Bot to Catch MAP Violators (n8n + BrowserAct Workflow)](https://youtu.be/ys6OZ7W3oww)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
