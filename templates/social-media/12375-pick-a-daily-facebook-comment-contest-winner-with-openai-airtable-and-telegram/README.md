# 📱 Pick a daily Facebook comment contest winner with OpenAI, Airtable and Telegram

> ⚡ **98 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Community Contest Tracker (FB Comments) → Sentiment Analysis → Telegram Winner Alerts + Airtable Proof

This workflow automatically monitors a Facebook post, extracts comments, enforces a "past winner" blocklist, analyzes sentiment using AI to find positive entries, randomly selects a winner, stores them in Airtable and announces the result via Telegram.

This workflow runs every night to manage your daily community giveaways. It fetches fresh comments from a specific Facebook post and cross-references users against a list of previous winners stored in Airtable to ensure fairness. It uses OpenAI to filter for genuinely positive sentiment (removing spam), selects a random winner, saves the record and sends a celebratory announcement to your Telegram channel.

You receive:

* **Daily automated comment collection**
* **Fairness enforcement (Blocklist for past winners)**
* **AI-powered sentiment filtering (Positive vibes only)**
* **Automated winner selection & notification**

Ideal for community managers and brand owners who want to run fair, high-engagement contests without manually reading hundreds of comments or tracking past winners in spreadsheets.

### Quick Start – Implementation Steps

1.  Add your **Facebook Graph API Credentials** in the HTTP Request node.
2.  Connect and configure your **Airtable** base (Winners Table).
3.  Add your **OpenAI API Key** for sentiment analysis.
4.  Connect your **Telegram Bot** credentials and set the Chat ID.
5.  Update the **Post ID** in the "Get FB Comments" node.
6.  Activate the workflow — daily contest automation begins instantly.


## What It Does

This workflow automates the entire lifecycle of a social media contest:

1.  **Daily Trigger:** Runs automatically at 9:00 PM every day.
2.  **Data Ingestion:** Fetches the latest comments from Facebook and the full list of past winners from Airtable simultaneously.
3.  **Pre-Processing:**
    * Creates a blocklist of users who won in the last 30 days.
    * Filters out spam, short comments (e.g., single emojis) and blocklisted users.
4.  **AI Analysis:**
    * Uses GPT-4o-mini to analyze the text of eligible comments.
    * Filters specifically for "Positive" sentiment.
5.  **Selection:** Randomly picks one winner from the pool of positive comments.
6.  **Storage:** Saves the winner's Name, Facebook ID and Comment to Airtable.
7.  **Notification:**
    * Sends a "Winner Announcement" to your public Telegram channel.
    * If any errors occur (e.g., DB save fail), logs them to Supabase and alerts the Admin.

This ensures your contests are fair, spam-free and consistently managed with zero manual effort.


## Who’s It For

This workflow is ideal for:

* Social Media Managers
* Community Moderators
* Digital Marketing Agencies
* Brand Owners running daily giveaways
* Influencers managing high-volume comment sections
* Customer Experience teams rewarding positive feedback


## To run this workflow, you will need

* **n8n instance** (cloud or self-hosted)
* **Facebook Developer App** (Graph API Access Token)
* **Airtable Base** + Personal Access Token
* **OpenAI API Key** (or compatible LLM)
* **Telegram Bot Token**
* **Supabase Project** (Optional, for error logging)


## How It Works

1.  **Daily Trigger** – The schedule node initiates the process.
2.  **Fetch Data** – Comments are pulled from FB; Winners pulled from Airtable.
3.  **Code Filter** – JavaScript node removes past winners and low-quality spam.
4.  **Sentiment Analysis** – AI determines if the comment is Positive, Neutral or Negative.
5.  **Pick Winner** – A randomized logic block selects one "Positive" user.
6.  **Record Keeping** – The winner is officially logged in your database.
7.  **Broadcast** – The winner is announced to the community via Telegram.


## Setup Steps

1.  Import the provided n8n JSON file.
2.  Open **Get FB Comments** node → Add credentials and paste your specific `Post ID`.
3.  Open **Get Past Winners** node → Link to your Airtable "Winners" table.
4.  Open **OpenAI Chat Model** node → Add your API Key.
5.  Open **Create a record** (Airtable) → Map the fields:
    * Name
    * Facebook ID
    * Date
6.  Open **Send a text message** (Telegram) → Add your Chat ID (e.g., `@mychannel`).
7.  Activate the workflow — done!


## How To Customize Nodes

### Customize Filtering Logic

Modify the **Pre-Filter (Blocklist)** Code node:

* Change the minimum character length (default is 2).
* Adjust the "Blocklist" duration (e.g., allow users to win again after 7 days instead of 30).

### Customize AI Criteria

Modify the **Sentiment Analysis** or **OpenAI** prompt:

* Look for "Creative" or "Humorous" comments instead of just "Positive".
* Filter for specific keywords related to your brand.

### Customize Notifications

Replace Telegram with:

* **Slack** (for internal team updates).
* **Discord** (for gaming communities).
* **Email** (SMTP/Gmail) to notify the marketing team.

### Customize Storage

Replace Airtable with:

* Google Sheets
* Notion
* PostgreSQL / MySQL


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* **Auto-Reply:** Use the Facebook API to reply to the winner's comment automatically ("Congrats! DM us to claim.").
* **Image Generation:** Use OpenAI DALL-E or Bannerbear to generate a "Winner Certificate" image.
* **Cross-Posting:** Automatically post the winner's name to Twitter/X or LinkedIn.
* **Sentiment Report:** Create a weekly summary of overall community sentiment (Positive vs Negative ratio).
* **Prize Tiering:** Assign different prizes based on the quality of the comment.


## Use Case Examples

### 1. Daily Product Giveaways

Reward one user every day who comments why they love your product.

### 2. Feedback Drives

Encourage users to leave constructive feedback and reward the most helpful positive comment.

### 3. Community Engagement

Keep your group active by automating "Best Comment of the Day" rewards.

### 4. Brand Loyalty Programs

Track "Super Fans" by counting how many times they participate (even if they don't win).


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **No comments found** | Invalid Post ID or Token | Check Facebook Graph API token and Post ID. |
| **No winner selected** | No positive comments | AI found no "Positive" sentiment. Check prompt or input data. |
| **Airtable Error** | Field Mismatch | Ensure column names in Airtable match exactly (Name, Facebook ID). |
| **Telegram Error** | Bot Permissions | Ensure the Bot is an Admin in the channel. |
| **Workflow Stuck** | API Rate Limit | Check OpenAI or Facebook API usage limits. |


## Need Help?

If you need help customizing or extending this workflow, adding multi-platform support (Instagram/YouTube), integrating complex prize logic or setting up advanced dashboards, feel free to [hire n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**. We are happy to assist you with advanced automation solutions.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Supabase, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
