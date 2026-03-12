# 🎣 Automated B2B lead generation: Google Maps to Sheets with BrowserAct & Telegram

> ⚡ **1,715 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![Google Maps Local Lead Finder](https://i.postimg.cc/X7G9Qr31/Screen-Shot-20251025115219.png)

## Automated B2B Lead Generation from Google Maps to Google Sheets using BrowserAct

### This n8n template automates local lead generation by scraping Google Maps for businesses, saving them to Google Sheets, and notifying you in real-time via Telegram.

This workflow is perfect for sales teams, marketing agencies, and local B2B services looking to build targeted lead lists automatically.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.


---
### How it works
* The workflow is triggered **manually**. You can set the `Location`, `Bussines_Category`, and number of leads (`Extracted_Data`) in the first BrowserAct node.
* A **BrowserAct** node ("Run a workflow task") initiates the scraping job on Google Maps using your specified criteria.
* A second **BrowserAct** node ("Get details of a workflow task") pauses the workflow and waits for the scraping task to be 100% complete.
* A **Code** node takes the raw JSON string output from the scraper and correctly parses it, splitting the data into individual items (one for each business).
* A **Google Sheets** node appends or updates each lead into your spreadsheet, matching on the "Name" column to prevent duplicate entries.
* Finally, a **Telegram** node sends a message with the new lead's details to your specified chat, providing instant notification.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Google Maps Local Lead Finder**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for saving leads
* **Telegram** credentials for sending notifications

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [AUTOMATE Local Lead Generation: Google Maps to Sheets & Telegram with n8n](https://youtu.be/--hqPhb83kg)

## 🔗 Nodes Used

Google Sheets, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
