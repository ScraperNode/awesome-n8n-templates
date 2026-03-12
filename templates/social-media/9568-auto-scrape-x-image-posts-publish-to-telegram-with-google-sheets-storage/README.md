# 📱 Auto scrape X image posts & publish to Telegram with Google Sheets storage

> ⚡ **362 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who’s it for

This automation template is designed for content creators, social media managers, and automation enthusiasts who want to automatically scrape X (Twitter) posts with images and publish them directly to a Telegram channel — without writing a single line of code.

With this workflow, you can keep your Telegram community constantly updated with the latest tweets from any account. It collects, cleans, and shares content in a fully automated cycle.

 ## How It Works

- Trigger – Start scraping from a specific X (Twitter) account using its unique ID and username.
- Fetch Data – The workflow calls the Twitter API (or a scraping endpoint) to gather recent tweets.
- Format & Filter – Extracts key fields (author name, username, text, URL, creation date, images, video) and keeps only tweets containing text and at least one image.
- Remove Duplicates – Ensures no tweet is processed or posted twice.
- Save to Google Sheets – Stores cleaned tweet data for backup and future use.
- Clean Text – Removes unwanted links and hashtags for a polished message.
- Loop & Publish – Sends each tweet (text + image) to your Telegram channel.
- Delay – Waits 3 minutes between each post to prevent spamming.

## How to Use

- Enter the Twitter ID and username of the target account.
- Connect your Google Sheets account to store scraped tweets.
- Connect your Telegram bot and specify the channel for publication.
- Run the workflow — tweets will be automatically scraped, filtered, saved, and posted to Telegram.

## Requirements

- A valid Twitter API connection or alternative scraping endpoint.
- A Google Sheet to store tweet data.
- A Telegram Bot linked to your channel.
- n8n (or any compatible automation platform) to run the workflow.

## Need help

**Contact me for consulting and support:** [LinkedIn](https://www.linkedin.com/in/jaures-nya-83a033270/) / [YouTube](https://www.youtube.com/@jauresnya)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
