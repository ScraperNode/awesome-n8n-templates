# 📱 Auto-reply to Instagram comments with Gemini and Google Sheets tracking

> ⚡ **271 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Auto-Reply to Instagram Comments with Gemini & Google Sheet Tracker

## Summary
Automate your Instagram community management without sounding like a bot. This workflow monitors a specific Instagram post, uses Gemini 2.5 Flash to generate context-aware, highly personalized replies to new comments, and logs every interaction in Google Sheets.

It includes built-in deduplication (so you never reply to the same comment twice), rate-limit protection, and resilient error handling to ensure your workflow never crashes even if the Facebook API hiccups. Perfect for social media managers, creators, and brands handling viral posts or high-engagement campaigns.

&gt; **Note:** This workflow processes up to 100 recent comments per run. Posts with more than 100 comments will have older comments silently skipped — pagination is not currently handled.

## Key features
* **Context-Aware AI Replies:** Gemini analyzes both your original post caption and the user's specific comment to craft a relevant, brand-aligned response.
* **Smart Deduplication:** Uses Google Sheets as a lightweight database to instantly filter out previously replied-to comments by comment ID. Note: if the same user leaves multiple comments on a post, each comment will receive its own reply.
* **Rate-Limit & Error Protection:** Built-in batching, delay nodes, and an API Error Fallback branch ensure Instagram API calls mimic human behavior and gracefully handle temporary rate limits without breaking the loop. Malformed AI responses are caught and skipped rather than crashing the batch.
* **Centralized Audit Trail:** Every comment, AI-generated reply, and timestamp (or error status) is cleanly logged in Google Sheets for easy review and analytics. Each execution also logs the total number of comments processed.
* **Ready to Test:** Comes with pinned sample data so you can inspect the logic and data mapping immediately, even before connecting your own credentials!

## How it works
1. **Trigger:** Runs automatically on a 15-minute schedule (or manually via click).
2. **Fetch:** Pulls your recent media and up to 100 recent comments via the Facebook Graph API.
3. **Filter:** Compares live comment IDs against your Google Sheet history to isolate strictly *new* comments.
4. **Generate:** For each new comment, Gemini 2.5 Flash drafts a unique reply based on your preset brand guidelines.
5. **Execute & Log:** Posts the reply to Instagram, waits 1 second (for API safety), and appends the complete interaction record to your Google Sheet. If a reply fails, it logs "API Error" to the sheet and continues processing the rest. If Gemini returns unparseable output, that comment is skipped gracefully and logged with an empty reply field.

## Nodes used
* Facebook Graph API (Fetch posts, fetch comments, send replies)
* Google Sheets (Read history, append new logs)
* Google Gemini (Advanced AI LangChain Node)
* Loop (Split in Batches)
* Wait
* Code (Data filtering and AI output parsing)
* Set (Configuration)
* No Operation (API Error Fallback)
* Schedule / Manual Triggers

## Setup instructions
1. **Credentials:** Authenticate your Facebook Graph API and Google Sheets credentials. For the Gemini node, create a new **"Google Gemini(PaLM) Api account"** credential and paste your Google AI Studio key.
2. **Database Setup:** Create a blank Google Sheet and add these exact headers to Row 1: `comment_id`, `username`, `comment`, `reply_id`, `reply`, `comments_timestamp`, `post_url`, `reply_timestamps`. The workflow expects the sheet tab to be named **Sheet1** (the default). If you rename the tab, update the `sheetName` field in both the **Read Contacted Users** and **Record Contacted User** nodes.
3. **Configuration:** Open the **⚙️ Configure Post & Message** node and fill in:
   * Target Instagram post URL
   * Instagram Business Account ID
   * Brand Name & Brand Tone
   * Google Sheet URL
4. **Test:** Click "Test Workflow". The template uses pinned sample data, allowing you to see exactly how the AI and loops function before going live.
5. **Error Workflow (Optional but recommended):** Go to your workflow settings and assign a global Error Workflow so you get notified if the credentials ever expire.
6. **Activate:** Switch the workflow to Active. It will now poll for new comments every 15 minutes.

## Requirements
* n8n version 2.11.3+
* Google Gemini API key (Input via the PaLM API credential type)
* Instagram Business Account connected to a Facebook Page
* API scopes: Facebook Graph API (`instagram_manage_comments`, `pages_show_list`, `instagram_basic`), Google Sheets (read/write).

## Customization ideas
* **Monitor multiple posts:** Modify the ingestion Code node to target an array of URLs instead of a single post.
* **Change the frequency:** Update the Schedule Trigger to run hourly or daily depending on your traffic volume.
* **Advanced AI routing:** Update the Gemini system prompt to detect negative sentiment and flag those comments in a Slack channel instead of auto-replying.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
