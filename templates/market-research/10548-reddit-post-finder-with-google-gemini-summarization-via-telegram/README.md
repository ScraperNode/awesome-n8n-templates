# 📊 Reddit post finder with Google Gemini summarization via Telegram

> ⚡ **158 views** · 📊 [Market Research & Insights](../)

## Description

## Who's it for

This template is perfect for content creators, researchers, marketers, and Reddit enthusiasts who want to stay updated on specific topics without manually browsing Reddit. If you need curated, AI-summarized Reddit insights delivered directly to your Telegram, this workflow automates the entire process.

## What it does

This workflow transforms your Telegram into a powerful Reddit search engine with AI-powered curation. Simply send any keyword to your Telegram bot, and it will:

- Search Reddit across 4 different sorting methods (top, hot, relevance) to capture diverse perspectives
- Automatically remove duplicate posts from multiple search results
- Filter posts based on quality metrics (minimum 50 upvotes, recent content within 15 days, non-empty text)
- Extract key information: title, upvotes, subreddit, publication date, URL, and content
- Generate a clean, Telegram-formatted summary using Google Gemini AI
- Deliver structured results with direct links back to you instantly

The AI summary includes post titles, upvote counts, timestamps, brief insights, and direct Reddit links—all formatted for easy mobile reading.

## How it works

**Step 1: Telegram Trigger**
User sends a search keyword via Telegram (e.g., "voice AI agents")

**Step 2: Parallel Reddit Searches**
Four simultaneous Reddit API calls search with different sorting algorithms:
- Top posts (all-time popularity)
- Hot posts (trending now)
- Relevance (best keyword matches)
- Top posts (duplicate for broader coverage)

**Step 3: Merge & Deduplicate**
All search results combine into one stream, then a JavaScript code node removes duplicate posts by comparing post IDs

**Step 4: Field Extraction**
The Edit Fields node extracts and formats:
- Post title
- Upvote count
- Subreddit name and subscriber count
- Publication date (converted from Unix timestamp)
- Reddit URL
- Post content (selftext)

**Step 5: Quality Filtering**
The Filter node applies three conditions:
- Minimum 50 upvotes (ensures quality)
- Non-empty content (excludes link-only posts)
- Posted within last 15 days (ensures freshness)

**Step 6: Data Aggregation**
All filtered posts aggregate into a single dataset for AI processing

**Step 7: AI Summarization**
Google Gemini AI analyzes the aggregated posts and generates a concise, Telegram-formatted summary with:
- Emoji indicators for better readability
- Point-wise breakdown of top 5-7 posts
- Upvote counts and relative timestamps
- Brief 1-2 sentence summaries
- Direct Reddit links

**Step 8: Delivery**
The formatted summary sends back to the user's Telegram chat

## Requirements

**Credentials needed:**
- **Reddit OAuth2 API** - For searching Reddit posts ([Get Reddit API credentials](https://www.reddit.com/prefs/apps))
- **Google Gemini API** - For AI-powered summarization ([Get Gemini API key](https://ai.google.dev/))
- **Telegram Bot Token** - For receiving queries and sending results ([Create Telegram Bot](https://core.telegram.org/bots/tutorial))

**n8n Version:** Self-hosted or Cloud (latest version recommended)

## Setup Instructions

**1. Create Telegram Bot**
- Message @BotFather on Telegram
- Send `/newbot` and follow prompts
- Copy the bot token for n8n credentials
- Start a chat with your new bot

**2. Configure Reddit API**
- Go to https://www.reddit.com/prefs/apps
- Click "Create App" → Select "script"
- Note your Client ID and Secret
- Add credentials to n8n's Reddit OAuth2

**3. Get Gemini API Key**
- Visit https://ai.google.dev/
- Create a new API key
- Add to n8n's Google Gemini credentials

**4. Import & Configure Workflow**
- Import this template into n8n
- Add your three credentials to respective nodes
- Remove pinData from "Telegram Trigger" node (test data)
- Activate the workflow

**5. Test It**
- Send any keyword to your Telegram bot (e.g., "machine learning")
- Wait 10-20 seconds for results
- Receive AI-summarized Reddit insights

## How to customize

**Adjust Quality Filters:**
Edit the Filter node conditions:
- Change minimum upvotes (currently 50)
- Modify time range (currently 15 days)
- Add subreddit subscriber minimum

**Limit Results:**
Add a Limit node after Filter to cap results at 10-15 posts for faster processing

**Change Search Strategies:**
Modify the Reddit nodes' "sort" parameter:
- `new` - Latest posts first
- `comments` - Most commented
- `controversial` - Controversial content

**Customize AI Output:**
Edit the AI Agent's system message to:
- Change summary style (more/less detail)
- Adjust formatting (bullets, numbered lists)
- Modify language/tone
- Add emoji preferences

**Add User Feedback:**
Insert a Telegram Send Message node after the trigger:
```
"🔍 Searching Reddit for '{{ $json.message.text }}'... Please wait."
```

**Enable Error Handling:**
Create an Error Workflow:
- Add Error Trigger node
- Send fallback message: "❌ Search failed. Please try again."

**Sort by Popularity:**
Add a Sort node after Filter:
- Field: `upvotes`
- Order: Descending

## 🔗 Nodes Used

Telegram, Telegram Trigger, Reddit, Filter, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
