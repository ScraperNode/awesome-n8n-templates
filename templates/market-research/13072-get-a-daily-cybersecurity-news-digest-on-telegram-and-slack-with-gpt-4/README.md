# 📊 Get a daily cybersecurity news digest on Telegram and Slack with GPT-4

> ⚡ **137 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

# Daily Cyber News Digest to Telegram

Workflow Created By: Abdullah Dilshad 📧 iamabdullahdishad@gmail.com

Stay informed with automated daily summaries.
This workflow aggregates cyber news from multiple trusted sources, uses AI to intelligently select and summarize the top 5 most relevant articles, and delivers a clean, concise digest directly to your Telegram chat every morning at 10:00 AM.

# What This Workflow Does
Collects Data: Fetches cybersecurity news from multiple global APIs.

Filters Noise: Uses AI to discard irrelevant updates.

Summarizes: Generates short, professional summaries (1–2 sentences).

Delivers: Automatically sends a formatted digest to Telegram within message length limits.

# How It Works
1. Schedule Trigger

Runs automatically every day at 10:00 AM (customizable).

2. News Collection

Fetches articles using the keyword "cyber" from:

GNews

NewsAPI

3. Data Processing

Merges articles from both sources into a single, unified dataset.

4. AI-Powered Selection

OpenAI analyzes all fetched articles.

Intelligently selects the Top 5 most relevant cybersecurity stories.

5. Smart Summarization

Each article is condensed into 1–2 clear sentences.

Includes: Publication date, Source name, and Article link.

6. Telegram Delivery

Sends a clean, formatted digest to your specified Telegram chat.

Ensures the total message length stays under Telegram’s 4096-character limit.

#  Setup Instructions
Get API Keys

Sign up for free API keys from GNews.io and NewsAPI.org.

Connect Accounts

Add your Telegram and OpenAI credentials in n8n.

Configure Telegram

Enter your Telegram Chat ID in the "Send a Text Message" node.

Customize the Schedule

Change the trigger time if you prefer delivery at a different hour.

# Customization & Use Cases
This workflow is fully reusable and scalable. You can replace the keyword "cyber" to track any topic relevant to your needs.

Example Topics:

🤖 Artificial Intelligence (AI)

💰 Cryptocurrency & Blockchain

🚀 Startups & Venture Capital

📱 Consumer Technology

🏭 Industry-specific updates

## Note:
 This workflow is designed to be adapted for individual tracking, team updates, or competitor analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
