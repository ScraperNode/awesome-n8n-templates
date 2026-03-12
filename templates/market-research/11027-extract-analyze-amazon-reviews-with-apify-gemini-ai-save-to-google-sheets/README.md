# 📊 Extract & analyze Amazon reviews with Apify, Gemini AI & save to Google Sheets

> ⚡ **646 views** · 📊 [Market Research & Insights](../)

## Description

# Template Description 
## 📝 Template Title
**Analyze Amazon product reviews with Gemini and save to Google Sheets**

## 📄 Description
This workflow automates the process of analyzing customer feedback on Amazon products. Instead of manually reading through hundreds of reviews, this template scrapes reviews (specifically targeting negative feedback), uses Google Gemini (AI) to analyze the root causes of dissatisfaction, and generates specific improvement suggestions. The results are automatically logged into a Google Sheet for easy tracking, and a Slack notification is sent to keep your team updated.

This tool is essential for understanding "Voice of Customer" data efficiently without manual data entry.

## 🧍 Who is this for
- **Product Managers** looking for product improvement ideas.
- **E-commerce Sellers (Amazon FBA, D2C)** monitoring brand reputation.
- **Market Researchers** analyzing competitor weaknesses.
- **Customer Support Teams** identifying recurring issues.

## ⚙️ How it works
1. **Data Collection:** The workflow triggers the Apify actor (`junglee/amazon-reviews-scraper`) to fetch reviews from a specified Amazon product URL. It is currently configured to filter for 1 and 2-star reviews to focus on complaints.
2. **AI Analysis:** It loops through each review and sends the content to Google Gemini. The AI determines a sentiment score (1-5), categorizes the issue (Quality, Design, Shipping, etc.), summarizes the complaint, and proposes a concrete improvement plan.
3. **Formatting:** A Code node parses the AI's response to ensure it is in a clean JSON format.
4. **Storage:** The structured data is appended as a new row in a Google Sheet.
5. **Notification:** A Slack message is sent to your specified channel to confirm the batch analysis is complete.

## 🛠️ Requirements
- **n8n** (Self-hosted or Cloud)
- **Apify Account:** You need to rent the `junglee/amazon-reviews-scraper` actor.
- **Google Cloud Account:** For accessing the Gemini (PaLM) API and Google Sheets API.
- **Slack Account:** For receiving notifications.

## 🚀 How to set up
1. **Apify Config:** Enter your Apify API token in the credentials. In the "Run an Actor" node, update the `startUrls` to the Amazon product page you want to analyze.
2. **Google Sheets:** Create a new Google Sheet with the following header columns: `sentiment_score`, `category`, `summary`, `improvement`. Copy the Spreadsheet ID into the Google Sheets node.
3. **AI Prompt:** The "Message a model" node contains the prompt. It is currently set to output results in **Japanese**. If you need English output, simply translate the prompt text inside this node.
4. **Slack:** Select the channel where you want to receive notifications in the Slack node.

## 🔗 Nodes Used

Google Sheets, Slack, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
