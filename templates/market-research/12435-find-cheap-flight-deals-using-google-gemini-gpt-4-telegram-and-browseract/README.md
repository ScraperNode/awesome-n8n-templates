# 📊 Find cheap flight deals using Google Gemini, GPT-4, Telegram and BrowserAct

> ⚡ **135 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Find cheap flight deals using AI, Telegram and BrowserAct

This workflow transforms your Telegram bot into an intelligent travel agent. Ask for deals (e.g., "Flights from Berlin"), and it will scrape real-time prices from a flight aggregator, curate the best offers using AI, and deliver a formatted list directly to your chat.

## Target Audience
Travel enthusiasts, digital nomads, and budget-conscious flyers looking for automated deal alerts.

## How it works
1. **Receive Request**: You send a message to your Telegram bot (e.g., "Cheap flights from London").
2. **Extract Location**: An **AI Agent** parses your message to identify the departure city. If you don't specify one, it asks for clarification.
3. **Scrape Deals**: **BrowserAct** executes a background task to search a flight aggregator (like Momondo or Skyscanner) for the best deals from your chosen city.
4. **Curate & Format**: A second **AI Agent** processes the raw flight data. It sorts deals by price, groups them for readability, adds country flags, and formats the list into Telegram-friendly HTML.
5. **Deliver**: The workflow splits the curated list into multiple messages (if necessary) and sends them to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Low-Cost Travel Finder** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a message like "Flights from NYC" to your bot.

## Requirements
* **BrowserAct** account with the **Low-Cost Travel Finder** template.
* **Telegram** account (Bot Token).
* **Google Gemini** & **OpenRouter** accounts.

## How to customize the workflow
1. **Filter by Destination**: Add logic to the **Generate response** agent to only show flights to specific regions (e.g., "Only show Asia destinations").
2. **Change Aggregator**: Update the BrowserAct template to scrape Google Flights or Kayak instead of Momondo.
3. **Set Alerts**: Add a **Schedule Trigger** to run this workflow automatically every morning for your home airport.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Build a Low-Cost Flight Finder with n8n & AI (Telegram Bot Tutorial)](https://youtu.be/W4EYza-Te5w)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
