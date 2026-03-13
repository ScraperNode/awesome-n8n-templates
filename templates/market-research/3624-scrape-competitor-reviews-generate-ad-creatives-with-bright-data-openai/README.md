# 📊 Scrape competitor reviews & generate ad creatives with Bright Data & OpenAI

> ⚡ **3,742 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Scrape Competitor Reviews & Generate Ad Creatives with Bright data and OpenAI

### How the Flow Runs

1. **Fill the Form**
   - Enter the Amazon product URL to analyze competitor reviews.

2. **Trigger Bright Data Scraper**
   - Bright Data scrapes Amazon reviews based on the provided URL.

3. **Wait for Snapshot Completion**
   - Periodically checks Bright Data until the scraping is complete.

4. **Retrieve JSON Data**
   - Collects the scraped review data in JSON format.

5. **Save Reviews to Google Sheets**
   - Automatically appends the scraped reviews to your Google Sheets.

6. **Aggregate Reviews**
   - Consolidates all reviews into a single summary for simpler analysis.

7. **Analyze Reviews with OpenAI LLM**
   - Sends the aggregated reviews to OpenAI (GPT-4o mini) to summarize competitors’ main weaknesses clearly.

8. **Generate Creative Ad Image**
   - OpenAI generates a visually appealing 1080x1080 ad image addressing these identified pain points.

9. **Send Ad Creative via Gmail**
   - Automatically emails the creative and review summary to your media buying team for immediate use in Meta ads.

---

### What You Need

- **Google Sheets:** [Template](https://docs.google.com/spreadsheets/d/1IR-yMQwEFTjbTCSPvVlQ54zQsnG0IRauTjPGoBWmR8U/edit?usp=sharing)
- **Bright Data:** Dataset and API key:
www.brightdata.com
- **OpenAI API Key:** For GPT-4o mini or your preferred LLM
- **Automation Tool:** Ensure it supports HTTP Requests, Wait, Conditional (If), Google Sheets integration, Form Trigger, OpenAI integration, and Gmail integration.

---

### Form Fields to Fill

- **Amazon Product URL:** Enter the competitor’s product URL from Amazon.

---

### Setup Steps

1. **Copy** the provided Google Sheet template.
2. **Import** the JSON workflow into your automation tool.
3. **Update credentials** for Bright Data, Google Sheets, Gmail, and OpenAI.
4. **Test manually** by submitting the form and verifying functionality.
5. **Optional:** Set a schedule for regular workflow execution.

---

### Bright Data Trigger Example

```json
[
  {
    "url": "https://www.amazon.com/example-product"
  }
]

Tips
Frequently update URLs to ensure fresh insights.

Allow more wait time for extensive data scrapes.

Focus on targeted products to optimize cost-efficiency.

Need Help?
Email: Yaron@nofluff.online

Resources:

YouTube:
https://www.youtube.com/@YaronBeen/videos

LinkedIn:
https://www.linkedin.com/in/yaronbeen/

Bright Data Documentation:
https://docs.brightdata.com/introduction

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
