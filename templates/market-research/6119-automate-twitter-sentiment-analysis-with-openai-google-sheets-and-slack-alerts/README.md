# 📊 Automate Twitter sentiment analysis with OpenAI, Google Sheets, and Slack alerts

> ⚡ **446 views** · 📊 [Market Research & Insights](../)

## Description

## ✅ What problem does this workflow solve?

Tracking what people say about your brand on Twitter can be overwhelming, especially when important mentions slip through the cracks. This workflow automates the process: it scrapes Twitter mentions, analyzes sentiment using OpenAI, logs everything in a Google Sheet, and sends real-time Slack alerts for **negative tweets**. No manual monitoring needed.

---

## ⚙️ What does this workflow do?

1. Runs on a schedule to monitor Twitter mentions or hashtags.
2. Uses **Apify** to scrape tweets based on brand keywords.
3. Filters out tweets already processed (avoids duplicates).
4. Performs **sentiment analysis** with OpenAI (Positive, Neutral, Negative).
5. Logs tweet content, sentiment, and reply (if any) in a Google Sheet.
6. Sends an instant **Slack notification** for negative tweets.
7. Generates thank-you replies for positive tweets and logs them.

---

## 🔧 Setup Instructions

### 🗓 Schedule Trigger
- Use the Cron node to schedule checks (e.g., every hour, daily).

### 🐦 Apify Twitter Scraper Setup
- Sign up on [Apify](https://apify.com/)
- Generate your **Apify API Token** and use it in the HTTP node to run the actor and get tweet results.

### 🤖 OpenAI Sentiment Analysis
- Get your API key from [OpenAI](https://platform.openai.com)

### 📄 Google Sheet Configuration
Prepare a Google Sheet with this [sample format](https://docs.google.com/spreadsheets/d/1sOxYQtX-O6p35FCNSRsovKEHL4w4GsfF-ylMVcwpb_E/edit?gid=1040262065#gid=1040262065).

Connect it using the Google Sheets node in n8n.

### 💬 Slack Notifications
- Connect your Slack workspace via the Slack node.
- Set up the channel where negative tweets should be sent as alerts.

---

## 🧠 How it Works

### 1. Scheduled Run
Triggered at a fixed interval using the Schedule (Cron) node.

### 2. Scrape Mentions from Twitter
- The Apify actor runs and collects recent tweets mentioning your brand or using your hashtag.
- Links to the tweets are extracted.

### 3. Filter Previously Seen Tweets
- Each tweet is checked against the Google Sheet.
- If already present, it’s skipped to avoid duplicate analysis.

### 4. Analyze Sentiment with OpenAI
- For new tweets, sentiment is classified into:
  - ✅ Positive
  - ⚪ Neutral
  - ❌ Negative

### 5. Store Results in Google Sheet
- The tweet link, content, and sentiment are stored in a row.
- If sentiment is **positive**, a thank-you reply is also generated and saved.

### 6. Notify Slack for Negative Tweets
- When a tweet is tagged **Negative**, a Slack message is sent to the designated channel with the tweet link.

---

## 👤 Who can use this?

This workflow is ideal for:
- 📢 **Social Media Teams**
- 🧠 **PR and Brand Managers**
- 🧑‍💻 **Solo Founders**
- 🏢 **Startups & SaaS Companies**

Stay ahead of your brand's reputation—**automatically**.

---

## 🛠 Customization Ideas

- 🎯 Add filters for specific campaign hashtags.
- 📬 Send weekly summary reports via email.
- 📥 Auto-open support tickets for negative mentions.
- 🗣 Expand sentiment categories with more detailed tagging.

---

## 🚀 Ready to get started?

Just plug in:
- 🔑 Your Apify API Token
- 🔑 Your OpenAI API Key
- 📄 Your Google Sheet
- 💬 Your Slack Channel

Then deploy the workflow, and let it monitor Twitter for you!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
