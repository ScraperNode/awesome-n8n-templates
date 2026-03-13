# 📊 Scrape hotel listings with prices from Booking.com using Brightdata & AI

> ⚡ **882 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates the search and extraction of hotel data from **Booking.com**. Triggered by a chat message, it uses a combination of web scraping with **[Bright Data's](https://get.brightdata.com/unstoppable)** Web Scraper and AI-powered data processing with **OpenRouter** to deliver a concise, human-friendly list of hotels.

The final output is a clean and formatted report, making it a valuable tool for travelers, event planners, and business professionals who need to quickly find accommodation options.

---

## Who's it for

This template is ideal for:
-   **Event Planners:** Quickly identify and compare hotel options for conferences, meetings, or group travel.
-   **Travel Agents:** Efficiently research and provide clients with a curated list of accommodations based on their specified destination.
-   **Business Travelers:** Instantly find and assess hotel availability and pricing for upcoming trips.
-   **Individuals:** Streamline the hotel search process for personal vacations or short-term stays.

---

## How it works

1.  The workflow is triggered by a chat message containing a city name from an n8n chat application.
2.  It uses Bright Data to initiate a web scraping job on Booking.com for the specified city.
3.  The workflow continuously checks the status of the scraping job. Once the data is ready, it downloads the snapshot.
4.  The extracted data is then passed to a custom AI agent powered by OpenRouter.
5.  This AI agent uses a calculator tool to convert prices and an instruction prompt to refine and format the raw data.
6.  The final output is a well-presented list of hotels, ready for display in the chat application.

---

## How to set up

1.  **Bright Data Credentials:** Sign up for a Bright Data account and create a Web Scraper dataset. In n8n, create new [Bright Data API credentials](https://get.brightdata.com/unstoppable) and copy your API key.
2.  **OpenRouter Credentials:** Create an account on OpenRouter and get your API key. In n8n, create new OpenRouter API credentials and paste your key.
3.  **Chat Trigger Node:** Configure the "When chat message received" node. Copy the production webhook URL to integrate with your preferred chat platform.

---

## Requirements

-   An active n8n instance.
-   A [Bright Data](https://get.brightdata.com/unstoppable) account with a Web Scraper dataset.
-   An OpenRouter account with API access.

---

## How to customize this workflow

-   **Search Parameters:** The "Initiate batch extraction from URL" node can be modified to change search criteria, such as check-in/check-out dates, number of adults and children, or property type.
-   **Output Format:** Edit the "Human Friendly Results" node's system message to change the format of the final report. You can modify the prompt to generate a JSON object, a CSV, or a different text format.
-   **Price Conversion:** The "Calculator" tool can be adjusted to perform different mathematical operations or currency conversions by modifying the AI agent's prompt.


.

---
[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

AI Agent, Calculator, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
