# 📊 Daily Solana news tracker with GPT-4.1-mini weekly summaries in Google Sheets

> ⚡ **160 views** · 📊 [Market Research & Insights](../)

## Description

## **Automated Solana News Tracker with AI-Powered Weekly Summaries**

Never miss important Solana ecosystem updates again. This production-ready workflow automatically scrapes crypto news daily, intelligently filters duplicates, stores everything in Google Sheets, and generates AI-powered weekly summaries every Monday—completely hands-free.

**🎯 What It Does:**

This intelligent automation runs on autopilot to keep you informed about Solana developments without manual monitoring. Every day at 8 AM PT, it fetches the latest Solana news from CryptoPanic, checks for duplicates against your existing database, and stores only new articles in Google Sheets. On Mondays, it takes an extra step: reading all accumulated articles from the past week and using GPT-4.1-mini to generate a concise, factual summary of key developments and investor takeaways.

- **Daily News Collection**: Automatically fetches latest Solana articles from CryptoPanic API
- **Smart Duplicate Detection**: Compares incoming articles against existing database to prevent redundancy
- **Data Validation**: Filters out incomplete articles to ensure data quality
- **Organized Storage**: Maintains clean Google Sheets database with timestamps and descriptions
- **Weekly AI Summaries**: Analyzes accumulated news every Monday and generates 2-3 sentence insights
- **Historical Archive**: Builds searchable database of both raw articles and weekly summaries

**💼 Perfect For:**

Crypto traders tracking market-moving news • SOL investors monitoring ecosystem growth • Blockchain researchers building historical datasets • Content creators sourcing newsletter material • Portfolio managers needing daily briefings • Anyone wanting Solana updates without information overload

**🔧 How It Works:**

The workflow operates in two distinct modes based on the day of the week. During the daily collection phase (Tuesday-Sunday), it runs at 8 AM PT, fetches the latest Solana news from CryptoPanic, formats the data to extract titles, descriptions, and timestamps, checks each article against your Google Sheets database to identify duplicates, filters out any articles that already exist or have missing data, and appends only valid new articles to your "Raw Data" sheet.

On Mondays, the workflow performs all daily tasks plus an additional summarization step. After storing new articles, it retrieves all accumulated news from the "Raw Data" sheet, aggregates all article descriptions into a single text block, sends this consolidated information to GPT-4.1-mini with instructions to create a factual, spartan-toned summary highlighting key investor takeaways, and saves the AI-generated summary with a timestamp to the "Weekly Summary" sheet for historical reference.

**✨ Key Features:**

- **Schedule-based execution**: Runs automatically at 8 AM PT every day without manual intervention
- **Intelligent deduplication**: Title-based matching prevents storing the same article multiple times
- **Data quality control**: Validates required fields before storage to maintain clean dataset
- **Dual-sheet architecture**: Separate sheets for raw articles and weekly summaries for easy access
- **Cost-effective AI**: Uses GPT-4.1-mini (~$0.001 per summary) for extremely low operating costs
- **Scalable storage**: Google Sheets handles thousands of articles with free tier
- **Customizable cryptocurrency**: Easily adapt to track Bitcoin, Ethereum, or any supported coin
- **Flexible scheduling**: Modify trigger time and summary frequency to match your needs

**📋 Requirements:**

- CryptoPanic account with free API key (register at cryptopanic.com)
- Google Sheets with two sheets: "Raw Data" (columns: date, title, descripton, summary) and "Weekly Summary" (columns: Date, Summary)
- OpenAI API key for GPT-4.1-mini access (~$0.05/month cost)
- n8n Cloud or self-hosted instance with schedule trigger enabled

**⚡ Quick Setup:**

Register for a free CryptoPanic API key and replace `[your token]` in the "Get Solana News" HTTP Request node URL. Create a new Google Spreadsheet with two sheets: one named "Raw Data" with columns for date, title, descripton (note the typo in template), and summary; another named "Weekly Summary" with columns for Date and Summary. Connect your Google Sheets OAuth2 credential to all Google Sheets nodes in the workflow. Add your OpenAI API credential to the "Summarize News" node. Test the workflow manually to ensure it fetches news and stores it correctly. Activate the workflow to enable daily automatic execution.

🚨 Please note, that you're not able to get news in real-time with a FREE CryptoPanic API. Consider their pro plan or another platform for real-time news scraping

You'll get new that's up to date as of yesterday.



**🎁 What You Get:**

Complete end-to-end automation with concise sticky note documentation at each workflow stage, pre-configured duplicate detection logic, AI summarization with investor-focused prompts optimized for factual analysis without hype, dual-sheet Google Sheets structure for raw data and summaries, flexible schedule trigger you can adjust to any timezone, example data in pinned format showing expected API responses, customization guides for different cryptocurrencies and summary frequencies, and troubleshooting checklist for common setup issues.

**💰 Expected Costs & Performance:**

CryptoPanic API is free with reasonable rate limits for personal use. OpenAI GPT-4.1-mini costs approximately $0.001 per summary, totaling about $0.05 per month for weekly summaries. The workflow typically processes 20-50 articles daily and generates one summary weekly from 140-350 accumulated articles. Daily executions complete in 5-10 seconds, while Monday runs with AI summarization take 15-20 seconds. Google Sheets provides free storage for up to 5 million cells, easily handling years of news data.

**🔄 Customization Ideas:**

Track different cryptocurrencies by changing the `currencies` parameter (btc, eth, ada, doge, etc.). Adjust the schedule trigger to run at different times matching your timezone. Modify the Monday check condition to generate summaries on different days or multiple times per week. Connect Slack, Discord, or Email nodes to receive instant notifications when summaries are generated. Edit the AI prompt to change tone, detail level, or focus on specific aspects like price action, development updates, or partnerships. Add conditional logic to send alerts only when certain keywords appear in news (like "hack," "partnership," or "upgrade").

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
