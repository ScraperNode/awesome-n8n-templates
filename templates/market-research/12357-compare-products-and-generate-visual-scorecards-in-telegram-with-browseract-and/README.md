# 📊 Compare products and generate visual scorecards in Telegram with BrowserAct and Gemini

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Compare products and generate visual scorecards in Telegram using BrowserAct & Nano banana

This workflow acts as an expert shopping assistant that analyzes product comparisons from first principles and generates a high-quality visual infographic with the verdict. Instead of reading endless reviews, simply ask the bot (e.g., "iPhone 15 vs S24"), and it will scrape data, analyze it using AI, and render a "Winner Takes All" image card directly in your chat.

## Target Audience
Shoppers, tech enthusiasts, product reviewers, and anyone who wants objective, data-driven buying advice without the fluff.

## How it works
1. **Understand Intent**: The workflow receives a message via **Telegram**. An **AI Classifier** determines if you want to chat casually or compare specific products.
2. **Scrape Data**: If a comparison is requested, **BrowserAct** executes a background task to scrape real-time specifications, pricing, and reviews from relevant sites (like Amazon or G2) for each product.
3. **Deep Analysis**: An **AI Analyst** aggregates the data and evaluates it based on Composition, Performance, and Economics to find an objective winner.
4. **Visual Engineering**: A second **AI Agent** generates a detailed "blueprint" prompt for a comparison infographic, highlighting the key differences and the winner.
5. **Render & Deliver**: **Google Gemini** generates a 4K image based on the blueprint, which is then sent to your **Telegram** chat along with a formatted summary caption.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **Google Sheets**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Product Comparison & Visualize Bot** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a new Google Sheet to serve as a temporary data store.
4. **Connect Sheet**: Open the **Get row(s) in sheet** and **Append row in sheet** nodes and paste your spreadsheet ID.
5. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
6. **Activate**: Turn on the workflow.

## Requirements
* **BrowserAct** account with the **Product Comparison & Visualize Bot** template.
* **Telegram** account (Bot Token).
* **Google Sheets** account.
* **Google Gemini** account.

## How to customize the workflow
1. **Change Image Style**: Modify the system prompt in the **Generate Image and Description** agent to change the aesthetic of the infographic (e.g., "Minimalist," "Cyberpunk," "Corporate").
2. **Adjust Analysis Logic**: Update the system prompt in the **Analyze the data** agent to weigh certain factors more heavily (e.g., prioritize "Price" over "Performance").
3. **Add More Sources**: Update the **BrowserAct** template to scrape specialized niche sites for better data accuracy.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automate Product Research: Comparison Bot with n8n & Gemini](https://youtu.be/MCKLEF0m9ps)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
