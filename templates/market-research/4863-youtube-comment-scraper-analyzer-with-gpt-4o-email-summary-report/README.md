# 📊 YouTube comment scraper & analyzer with GPT-4o + email summary report

> ⚡ **2,860 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

##  How it Works ##

This workflow automates the collection and analysis of **YouTube comments** from a video and sends a **summary report via email**, using **Google Sheets**, the **YouTube API**, **OpenAI (GPT-4o)**, and **Gmail**.

Whether you're a content creator, brand manager, or social media analyst, this workflow helps you **automate sentiment analysis** and **receive insights** directly in your inbox — all triggered from a simple spreadsheet.

## 🎯 Use Case

Ideal for:
- **YouTubers** monitoring audience sentiment
- **Marketing teams** analyzing campaign feedback
- **Community managers** summarizing engagement

##  Setup Instructions ##

### 1. Upload the Spreadsheet

- File name: `Youtube_Video`
- Sheet structure:
| ID | Video Title | YouTube Video ID | Status |
- Add video IDs and set their `Status` as `Pending`

### 2. Configure Google Sheets Nodes

Connect your **Google account** to:
- `Pick Video IDs from Google Sheet`
- `Update Status on Google Sheet`

### 3. Add API Credentials

- **YouTube API Key** → for comment + video scraping nodes
- **OpenAI API Key** → for analyzing comments
- **Gmail Account** → for sending the summary email

### 4. Activate the Workflow

Once live, the workflow will:
1. Watch for new or updated rows in the spreadsheet
2. Scrape comments using the YouTube API
3. Analyze sentiment and key themes via GPT-4o
4. Send a formatted HTML email with the summary
5. Update the spreadsheet status to `Mail sent`

## 🔁 Workflow Logic

1. **Trigger**: New/updated row in Google Sheet
2. **Retrieve**: YouTube video metadata + comments
3. **Analyze**: Comments using GPT-4o
4. **Email**: Summary report via Gmail
5. **Update**: Spreadsheet status to `Mail sent`

## 🧩 Node Descriptions

| Node Name | Description |
|-----------|-------------|
| Pick Video IDs from Google Sheet | Watches the spreadsheet and retrieves pending video IDs |
| If | Checks whether status is 'Pending' |
| Limit | Restricts the number of processed rows |
| Set Video Details | Prepares video info (e.g., title, channel) |
| Get YouTube Video Details | Fetches metadata (title, channel, etc.) |
| Get YouTube Video Comments | Pulls top-level comments using YouTube API |
| Prepare Comments Data | Formats comment text for OpenAI |
| AI Agent | Summarizes comments using OpenAI's GPT-4o |
| Prepare HTML for Email | Converts summary into HTML for email body |
| Gmail Account Configuration | Sends the email report via Gmail |
| Update Status on Google Sheet | Marks the row as 'Mail sent' |

## 🛠️ Customization Tips

- Change the AI prompt for tone, length, or custom metrics
- Send results to Slack or Telegram instead of Gmail
- Export summaries to Notion, Airtable, or PDF
- Schedule it daily/weekly for recurring analysis

## 📒 Suggested Sticky Notes for Workflow

| Node/Section | Sticky Note Content |
|--------------|---------------------|
| Pick Video IDs from Google Sheet | "Triggers on new YouTube videos in your spreadsheet" |
| AI Agent | "Uses OpenAI to generate an analysis summary – customize prompt as needed" |
| Gmail | "Sends summary report – you can update subject, recipients, or style" |
| Update Status | "Marks video as processed to avoid duplicate runs" |

## 📎 Required Files

| File Name | Purpose |
|-----------|---------|
| Youtube_Video | Google Sheet to hold YouTube video IDs and status |
| Youtube_Comment_Scraper.json | Main n8n workflow export for this automation |

## 🧪 Testing Tips

- Add one test video with a valid YouTube video ID and status = `Pending`
- Monitor the workflow logs to confirm API responses
- Confirm summary delivery in your inbox
- Verify that status updates in the sheet

## 🏷 Suggested Tags & Categories

- #YouTube
- #OpenAI
- #Automation
- #Marketing
- #Email
- #Analytics

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, YouTube, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
