# 📈 Send a daily stock movers and news email digest via Google Sheets, EODHD and Gmail

> ⚡ **125 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# **What this workflow does**

This workflow automatically generates a daily stock market email digest, combining price movements and recent financial news into a clean, actionable report.

Instead of manually checking charts and news every morning, this workflow does it for you.

It combines:
 - Market data from EODHD APIs
 - Financial news with sentiment analysis
 - Smart processing using JavaScript (no raw data overload)
✉️ Automated email delivery via Gmail

Only relevant insights reach your inbox.

## How it works (overview)
The workflow runs on a schedule (daily at 7 AM) or manually
It reads your stock watchlist from Google Sheets
It fetches:
Historical price data (last 14 days)
Latest news (last 7 days)
JavaScript processes the data:
Calculates daily % change
Filters recent news
Assigns sentiment (positive / neutral / negative)
A clean HTML email is generated
The digest is sent automatically via Gmail

👉 The result: a complete market snapshot in seconds

## How to configure it
1. EODHD APIs (Market Data)
Add your API key in the ⚙️ Config node
Used for:
Price data
Financial news
Sentiment signals
2. Google Sheets
Add your credentials
Create a column named ticker
Add one stock per row (e.g. AAPL, TSLA, MSFT)
3. Gmail
Add your Gmail credentials
Set your recipient email
4. Schedule
Default: runs daily at 7 AM
You can adjust it easily in the Schedule node

Why this workflow is powerful

## Most people:

Check multiple sites every morning
Waste time jumping between charts and news
Miss important market moves

This workflow:

✔ Automates everything
✔ Centralizes data
✔ Adds context with sentiment analysis
✔ Saves hours every week

📊 Data powered by EODHD APIs

This workflow uses EODHD APIs to retrieve:

Historical stock prices
Financial news
Sentiment indicators

👉 If you want to build your own financial automations, dashboards, or trading workflows:

Get started here (10% discount):
[https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)

## Final result

You get a daily email like this:

- Top movers (price changes)
- Curated news per stock
- Sentiment insights
- Clean, readable format

All generated automatically.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
