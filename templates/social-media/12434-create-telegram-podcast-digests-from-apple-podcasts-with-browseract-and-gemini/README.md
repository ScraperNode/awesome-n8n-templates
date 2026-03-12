# 📱 Create Telegram podcast digests from Apple Podcasts with BrowserAct and Gemini

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Create Telegram podcast digests from Apple Podcasts using BrowserAct & Gemini

This workflow automates the creation of engaging podcast summaries for your Telegram channel. It scrapes a podcast feed (like Apple Podcasts Top Charts), uses AI to format the episodes into a clean, readable HTML list with emojis, and publishes the digest directly to your subscribers.

## Target Audience
Podcast curators, news aggregators, and community managers who want to share daily or weekly updates.

## How it works
1. **Scheduled Fetch**: The workflow runs on a set schedule (e.g., daily).
2. **Scrape Feed**: **BrowserAct** visits the podcast chart or RSS feed URL to extract episode titles, show names, and descriptions.
3. **Format Digest**: An **AI Agent** (using Google Gemini) processes the raw list. It formats each item into HTML (bold titles, italic show names), adds visual separators, and splits the digest into multiple messages if it exceeds Telegram's character limit.
4. **Publish**: The workflow loops through the formatted message parts and sends them sequentially to your **Telegram** channel.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Top Charts Podcast** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is an admin in the target channel and add the Chat ID to the **Send a text message** node.
4. **Activate**: Turn on the workflow.

## Requirements
* **BrowserAct** account with the **Top Charts Podcast** template.
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Change Source**: Update the BrowserAct template to scrape Spotify charts or a specific RSS feed URL.
2. **Adjust Format**: Modify the system prompt in the **AI Agent** node to change the emoji style or layout of the digest.
3. **Add Filters**: Add a **Code** node before the AI step to filter out episodes based on keywords (e.g., only show "Tech" podcasts).

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase Video

* #### [🎙️ Automate Your Podcast Feed: Apple Top Charts to Telegram with n8n](https://youtu.be/jR_EjiLTIgg)

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
