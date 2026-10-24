# 📊 Analyze YouTube comments with OpenAI, Google Sheets, and Gmail

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow monitors a Google Sheets list of YouTube video IDs, fetches video details and top comments from the YouTube Data API, analyzes the comments with OpenAI into structured sentiment and themes, emails an HTML report via Gmail, and writes the results back to Google Sheets.

## How it works
1. Triggers every minute when a row in Google Sheets is added or updated.
2. Reads the video ID and status from the row and continues only if the status is set to “Pending”.
3. Calls the YouTube Data API to fetch the video’s metadata and the top comment threads for that video.
4. Flattens the comment threads, calculates basic stats (comment count and average likes), and compiles a limited comment text block for analysis.
5. If comments exist, sends the compiled comments and video title to OpenAI to generate a structured analysis (sentiment score, sentiment breakdown, themes, questions, feedback, insights, and summary).
6. Builds an HTML email report from the structured results, sends it to the configured recipient with Gmail, and updates the Google Sheet row with the analysis fields; if no comments exist, marks the row as “No comments”.

## Setup
1. Create or duplicate a Google Sheet with at least “Video ID” and “Status” columns (plus the output columns you want to log, such as sentiment, themes, summary, and analyzed timestamp).
2. Connect your Google Sheets OAuth credentials for the trigger and update steps, and set the correct spreadsheet ID and sheet tab.
3. Provide a YouTube Data API v3 key and configure it as query authentication for the two HTTP requests to `www.googleapis.com`.
4. Add your OpenAI API credentials and confirm the model name in the configuration (for example, `gpt-5.4-mini`).
5. Add your Gmail OAuth2 credentials and set the recipient email address in the configuration values.

## Additional info
# Analyze YouTube video comments with AI and email a report
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Analyze-YouTube-video-comments-with-AI-and-email-a-report-Course-39b3d6550fd981f0be27f5d4fa6f5934)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Sheets Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
