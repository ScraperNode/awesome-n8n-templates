# 🎯 Extract YouTube creator emails with Apify scraper and GPT-4o Mini

> ⚡ **1,031 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow automates the process of finding **YouTube creator contact emails** for outreach and partnerships. It combines **Apify scrapers** with **OpenAI** to deliver a clean list of emails from channel descriptions:  

- **Step 1:** Search YouTube with Apify based on a keyword or topic  
- **Step 2:** Scrape each channel for descriptions and metadata  
- **Step 3:** Use OpenAI to extract and format valid email addresses into a structured JSON output  

This is useful for influencer outreach, creator collaborations, UGC sourcing, or lead generation — all automated inside **n8n**.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up Apify Connection
1. Go to [Apify Console](https://console.apify.com/) and sign up/login  
2. Get your API token here: [Apify API Keys](https://console.apify.com/account/integrations)  
3. Set up the two scrapers in your Apify account:  
   - [YouTube Scraper by streamers](https://apify.com/streamers/youtube-scraper)  
   - [YouTube Scraper by apidojo](https://apify.com/apidojo/youtube-scraper)  
4. In n8n, create a **HTTP Query Auth** credential  
   - Query Key: `token`  
   - Value: `YOUR_APIFY_API_KEY`  
5. Attach this credential to both **HTTP Request nodes** (`Search YouTube` and `Scrape Channels`)  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
