# 📊 Monitor Reddit job posts with GPT-4o analysis & Telegram alerts using Google Sheets

> ⚡ **197 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works

* **Monitors Reddit:** Automatically searches specified subreddits for posts matching your keywords or flair filters (template is n8n - Now Hiring flair)

* **AI Analysis:** Processes found posts using AI to create personalized summaries based on your custom prompts

* **Smart Filtering:** Tracks previously sent posts in Google Sheets to avoid duplicate notifications

* **Telegram Delivery:** Sends AI-generated summaries directly to your Telegram chat

## Set Up Steps
*Time required: ~15-20 minutes*

* **Configure Credentials (10 mins):** Set up Telegram bot token, Reddit app credentials, and Google Sheets access

* **Customize Search Parameters (3 mins):** Define target subreddit, keywords/flairs, and post limits

* **Personalize AI Settings (2 mins):** Adjust AI model and system prompts for your preferred summary style

* **Set Schedule & Chat (2 mins):** Choose monitoring frequency and configure your personal Telegram chat ID

&gt;The workflow includes detailed setup instructions and configuration guidance in the sticky notes within the template.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
