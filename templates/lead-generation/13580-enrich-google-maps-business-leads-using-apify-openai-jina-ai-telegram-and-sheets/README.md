# 🎣 Enrich Google Maps business leads using Apify, OpenAI, Jina AI, Telegram and Sheets

> ⚡ **32 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automate your B2B lead generation by scraping Google Maps, generating AI business summaries, and extracting hidden contact emails from websites, all triggered via Telegram.

## Why Use This Workflow?

**Time Savings:** Reduces lead research time from 4 hours of manual searching to 5 minutes of automated execution per 50 leads.  

**Cost Reduction:** Replaces expensive monthly lead database subscriptions with a pay-as-you-go model using Apify and OpenAI.  

**Error Prevention:** Uses AI to deduplicate results and ensure company summaries are professional and consistent for your CRM.  

**Scalability:** Allows you to trigger massive scraping tasks from your mobile phone via Telegram while the backend handles the heavy lifting.

## Ideal For

- **Sales Development Reps (SDRs):** Rapidly building targeted lists of local businesses for cold outreach or door-knocking campaigns.
- **Marketing Agencies:** Identifying new businesses in specific sectors (e.g., "Dentists in Paris") to offer SEO or advertising services.
- **Real Estate Investors:** Finding specific commercial properties or business types in a geographic area to identify investment opportunities.

## How It Works

1. **Trigger:** The workflow starts when you send a message to your Telegram bot in the format: `Sector; Limit; MapsURL`.
2. **Data Collection:** n8n parses these parameters and triggers an Apify Actor to scrape Google Maps for business details.
3. **Processing:** The workflow retrieves the results, removes duplicate entries, and begins a loop to process each business.
4. **Intelligence Layer (Summary):** OpenAI analyzes the business data to create a natural, human-like summary of the company.
5. **Enrichment (Email Hunting):** If the business has a website, Jina AI fetches the page content, and OpenAI extracts the most authoritative contact email.
6. **Output & Delivery:** Core data is upserted into Google Sheets, and the email is updated once found. A "DONE" notification is sent to Telegram upon completion.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution and logic |
| [Apify Account](https://apify.com?fpr=khmuhtadin) | Essential | Scrapes Google Maps data |
| [OpenAI API Key](https://openai.com) | Essential | Generates summaries and extracts emails |
| [Google Sheets](https://google.com/sheets) | Essential | Data storage and lead management |
| [Telegram Bot](https://t.me/botfather) | Essential | User interface for triggering searches |
| [Jina AI Key](https://jina.ai) | Essential | Converts websites to LLM-friendly Markdown |

### Installation Steps

1. Import the JSON file into your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2. **Configure credentials:**
   - **Telegram:** Create a bot via @BotFather and add your token to the Telegram nodes.
   - **Apify:** Provide your API token to the "Run Maps Scraper" and "Fetch Dataset" nodes.
   - **OpenAI:** Add your API key to the enrichment nodes.
   - **Google Sheets:** Connect your Google account and select your target Spreadsheet ID.
3. **Set up the Sheet:** Ensure your Google Sheet has headers matching the "Upsert" node (Title, Email, Category, Website, etc.).
4. **Test execution:** Send a message like `Coffee Shops; 5; https://www.google.com/maps/search/coffee+shops+london` to your bot.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| **Telegram Trigger** | Captures user input | Listens for `/message` updates |
| **Apify Node** | Executes Maps Scraper | Uses `nwua9Gu5YrADL7ZDj` actor ID |
| **OpenAI Node** | AI Analysis | Configured for JSON output (Summary) and extraction (Email) |
| **Jina AI** | Web Scraping | Converts HTML to Markdown for AI readability |
| **Google Sheets** | Database | Uses `Append or Update` based on the business Title |

### Workflow Logic

The workflow utilizes a **Split In Batches** loop to ensure stability. It first performs a "shallow" save of business details (name, phone, address) and then attempts a "deep" enrichment only if a website URL is detected. This two-stage approach ensures you don't lose data if a website crawl fails.

## Customization Options

**Basic Adjustments:**
- **Rate Limit:** Adjust the "Wait" node duration (default 2s) to comply with Google Sheets or API limits.
- **Language:** Modify the OpenAI prompt to generate summaries in your preferred language (e.g., English, French, Spanish).

**Advanced Enhancements:**
- **CRM Integration:** Replace Google Sheets with HubSpot or Pipedrive for direct lead injection.
- **Slack Notifications:** Send the final lead list or business summary directly to a sales channel.
- **Auto-Emailer:** Add a Gmail/Outlook node to automatically send an introductory email once a lead is found.

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| Empty Email column | Website protected by bot-blockers | Try a different scraper or use a proxy in Jina AI |
| Apify Timeout | Scraping limit set too high | Lower the "limit" parameter in your Telegram message |
| 429 Errors | Google Sheets rate limits | Increase the duration in the "Wait Rate Limit" node |

## Use Case Examples

### Scenario 1: Local SEO Agency
**Challenge:** Finding local contractors with poor reviews but high revenue potential.  
**Solution:** Use the workflow to scrape "Plumbers" in a city, use AI to summarize their online presence, and collect emails.  
**Result:** A curated list of 100 leads with contact info and a "Pitch" summary generated in minutes.

### Scenario 2: SaaS Cold Outreach
**Challenge:** Getting the direct email of a business owner for a new booking software.  
**Solution:** Trigger the scraper via Telegram while in the field. The workflow extracts the "authoritative" email (manager/owner) from their site.  
**Result:** Accurate, high-intent lead data delivered directly to a master spreadsheet for the sales team.

---

**Created by:** [Khaisa Studio](https://khaisa.studio)  
**Category:** Marketing | **Tags:** Lead Gen, AI, Google Maps, Telegram  
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, OpenAI, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
