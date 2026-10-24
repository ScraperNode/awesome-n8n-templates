# 📊 YouTube channel monitor with Video Stats, AI transcription & Summarization

> ⚡ **262 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# This n8n workflow monitors YouTube channels 24/7, transcribes new videos with AI, and scores them by relevance—all automatically saved to Google Sheets.

## About

This n8n workflow automatically monitors YouTube channels, transcribes new videos, and generates AI-powered summaries with relevance scoring. It pulls channel URLs from a Google Sheet, fetches recent videos (last 30 days) using the **YouTube Data API v3**, grabs each video's views and likes, transcribes them using Google Gemini, and saves detailed summaries back to your spreadsheet with relevance scores based on your custom criteria.

## How It Works

1. **Schedule Trigger**: Runs weekly (every 7 days at 7:05 AM)
2. **Fetch Channels**: Reads channel URLs and filter criteria from Google Sheets
3. **Get Channel ID**: Uses the YouTube API to look up each channel's ID from its handle
4. **Fetch Recent Videos**: Pulls up to 20 latest videos per channel via the YouTube API
5. **Filter Videos**: Only keeps videos from the last 30 days
6. **Get Video Stats**: Fetches each video's view count and like count from the YouTube API
7. **Check for Duplicates**: Skips videos already saved in your spreadsheet
8. **Transcribe**: Uses Google Gemini API to watch and transcribe the video content
9. **Summarize & Score**: AI agent analyzes the transcript against your criteria and generates:
   - Full 500-word summary in markdown
   - Short bullet-point summary
   - Topic classification
   - Relevance score (1–10)
   - Relevance reasoning
10. **Save Results**: Appends or updates all video data (including views, likes, transcript, summary) in Google Sheets

---

## Setup Instructions — Step by Step (Anyone Can Do This!)

### What You'll Need Before Starting

- An **n8n account** — cloud or self-hosted (n8n.io)
- A **Google account** (for Google Sheets and API access)
- A **Gemini API key** (free to get — instructions below)
- A **YouTube Data API key** (free to get — instructions below)

Don't worry if you've never done this before — each step is explained simply!

---

### Step 1: Make a Copy of the Google Sheet

This is where all your channels and video results will be stored.

1. Open the template: [Click here to open the Google Sheet](https://docs.google.com/spreadsheets/d/1CvRiadHGvfLOduLUZZThc-_g339q9BQXb_P8ZUCchIo/edit?usp=sharing)
2. Click **File → Make a copy** and save it to your own Google Drive
3. You'll see two tabs at the bottom: **channels** and **videos**

**The "channels" tab** is where you tell the workflow which YouTube channels to watch:
- Column A — `category`: A label for the channel group (e.g. "AI News", "Marketing")
- Column B — `channels`: Paste one or more YouTube channel URLs, separated by commas (e.g. `https://youtube.com/@mkbhd, https://youtube.com/@fireship`)
- Column C — `video filter criteria`: Describe what kind of videos matter to you (e.g. "videos about AI tools for business owners")

**The "videos" tab** is filled in automatically by the workflow — you don't need to do anything here.

---

### Step 2: Get Your Gemini API Key (Free)

Gemini is Google's AI — it reads and summarizes the videos for you.

1. Go to: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key and save it somewhere safe (like a notes app)

---

### Step 3: Get Your YouTube API Key (Free)

This lets the workflow search YouTube channels and fetch video details like views and likes.

1. Go to: [https://console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with your Google account
3. Click **"Select a project"** at the top, then **"New Project"** — give it any name and click **Create**
4. Once inside the project, click the **hamburger menu (☰) → APIs & Services → Library**
5. Search for **"YouTube Data API v3"** and click on it
6. Click **Enable**
7. Now go to **APIs & Services → Credentials**
8. Click **"+ Create Credentials" → API Key**
9. Copy the key that appears and save it

---

### Step 4: Import the Workflow into n8n

1. Open your n8n dashboard
2. Click **"New Workflow"** → then click the **three dots (⋮)** menu → **"Import from JSON"**
3. Paste the workflow JSON and click **Import**

---

### Step 5: Connect Your Google Account

The workflow needs permission to read and write to your Google Sheet.

1. In the workflow, click on any node that says **"Google Sheets"**
2. Under **Credential**, click **"Create new credential"**
3. Follow the pop-up to sign in with your Google account and grant access
4. Once connected, all Google Sheets nodes will use this same account

---

### Step 6: Add Your API Keys

1. Find the node called **"Set channel and API"** (it's an orange node near the start of the flow)
2. Click on it to open it
3. Replace `your_api_key` in the **gemini_api_key** field with your Gemini key from Step 2
4. Replace `your_api_key` in the **youtube_api** field with your YouTube key from Step 3
5. Click **Save**

---

### Step 7: Update the Google Sheet ID

The workflow needs to know which spreadsheet to use — this is the long string of letters in your sheet's URL.

1. Open your copied Google Sheet
2. Look at the URL — it looks like: `https://docs.google.com/spreadsheets/d/THIS_IS_YOUR_ID/edit`
3. Copy that ID
4. In n8n, click on any **Google Sheets** node and update the **Document ID** field with your ID
5. Do this for all Google Sheets nodes (there are a few — look for the yellow spreadsheet icons)

---

### Step 8: Test It!

1. Add a YouTube channel URL to your **channels** sheet (Column B)
2. Add a category in Column A and a description in Column C
3. In n8n, click **"Test Workflow"** (the play button)
4. Watch it run — after a minute or two, check your **videos** tab in Google Sheets for results!

---

### Step 9: Turn It On (Activate)

Once you're happy it works:

1. Click the **toggle switch** at the top of the n8n workflow to **Activate** it
2. It will now run automatically every week at 7:05 AM — no action needed from you!

---

## Optional Adjustments

- **Change how far back it looks**: The workflow currently checks videos from the last **30 days**. To change this, find the **"Last 30 days"** filter node and edit the number.
- **Change the schedule**: Click the **"Schedule Trigger"** node and set whatever day/time you prefer.
- **Adjust wait times**: The workflow has built-in pauses between videos to avoid hitting API limits. You can make them shorter if you're processing fewer channels.

---

## Good to Know

- Videos already in your sheet won't be processed again — no duplicates
- If a video fails to transcribe, the workflow moves on to the next one automatically
- Each video's **views and likes** are saved alongside the summary
- The workflow supports **multiple channels per row** — just separate URLs with commas

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
