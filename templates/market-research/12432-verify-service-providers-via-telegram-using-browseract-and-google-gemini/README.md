# 📊 Verify service providers via Telegram using BrowserAct and Google Gemini

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Verify service providers using Telegram and BrowserAct

This workflow transforms your Telegram bot into an intelligent vendor vetting tool. Send the name and location of a service provider (e.g., "Mr. Rooter in Detroit"), and it will automatically scrape Google Maps for reviews, cross-reference the business with OpenCorporates to verify its legal status, and deliver a detailed legitimacy report back to your chat.

## Target Audience
Procurement managers, homeowners hiring contractors, and anyone needing to verify the legitimacy of a business quickly.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** classifies it: is it a casual chat or a verification request?
2. **Extract Details**: If a request is detected, the AI extracts the `Provider Name` and `Location` from your message.
3. **Scrape Data**: **BrowserAct** executes a background task to scrape Google Maps for reviews/ratings and search OpenCorporates for legal entity filings.
4. **Human Verification (CAPTCHA)**: If the scraper encounters a CAPTCHA, the workflow pauses and sends a Telegram alert with a link. Once you solve it, the workflow resumes automatically.
5. **Verify & Report**: A second **AI Agent** analyzes the gathered data. It compares the Google listing with the corporate registry to determine if the business is "Verified" (matched), "Unverified" (local only), or "Not Found."
6. **Deliver**: The bot sends a formatted HTML report with the verdict, ratings, and active locations to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Vendor Vetting and verification bot** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a message like "Is Acme Plumbing in Chicago legit?" to your bot to start the verification process.

## Requirements
* **BrowserAct** account with the **Vendor Vetting and verification bot** template.
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Add More registries**: Update the BrowserAct template to search other databases like BBB (Better Business Bureau) or Yelp for broader verification.
2. **Change Output Format**: Modify the system prompt in the **Verify the provide** agent to output a simple "Pass/Fail" score instead of a detailed report.
3. **Save Reports**: Add a **Google Sheets** or **Notion** node at the end to log every verification request and its result for future reference.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase Video

* #### [How to Automate Company Due Diligence with n8n & BrowserAct](https://youtu.be/OS3pWKptxDw)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
