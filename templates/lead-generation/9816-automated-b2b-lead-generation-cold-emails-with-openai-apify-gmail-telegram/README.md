# 🎣 Automated B2B lead generation & cold emails with OpenAI, Apify, Gmail & Telegram

> ⚡ **729 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧩 Description  

A customized n8n workflow inspired by the **Lead Generation Agent** template.  
It automates B2B lead scraping via **Apify**, extracts contact emails with **AI**, sends cold emails via **Gmail**, and logs every interaction in **Google Sheets** with **Telegram alerts** for live monitoring.  

---

### 🧠 How It Works  

This workflow automates the entire B2B lead generation and outreach process from data collection to email delivery.  
Once you enter your search keyword and location, the system scrapes business details using Apify, filters valid websites, and extracts email addresses with AI. Each lead is then enriched and logged in Google Sheets.  

The workflow automatically composes a personalized cold email based on your preferred tone (friendly, simple, or professional) and sends it through Gmail with short delays between each message to avoid spam filters.  
You’ll also receive Telegram notifications to monitor progress and any leads that fail to send.  

---

### ⚙️ Setup Steps  

1. **Clone the workflow** into your n8n instance.  
2. **Add your API credentials:**  
   - Apify API Token  
   - OpenAI (or Gemini) API Key  
   - Google Sheets & Gmail account connections  
   - Telegram Bot Token + Chat ID *(optional)*  
3. Open the **Form node** or **Manual Trigger**, and set your search criteria (e.g., *“marketing agencies in London”*).  
4. Configure your **Google Sheet** — make sure the columns match the node mapping.  
5. Adjust the **AI prompt** in the OpenAI node if you want a different tone or style for your emails.  
6. Run the workflow manually to test one or two leads first.  
7. Once confirmed, activate scheduling or keep it manual for on-demand lead generation.  

---

### 🚀 Try It Out!  

Experience how AI and automation can take over your lead generation workflow.  
Just enter a business type and location, and watch as the system finds potential clients, extracts contact details, crafts a personalized cold email, and sends it — all without manual effort.  
Perfect for freelancers, agencies, or anyone looking to automate their B2B outreach process.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
