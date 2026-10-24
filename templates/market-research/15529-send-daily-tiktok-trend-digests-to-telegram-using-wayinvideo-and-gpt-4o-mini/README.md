# 📊 Send daily TikTok trend digests to Telegram using WayinVideo and GPT-4o-mini

> ⚡ **169 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Add TikTok video URLs to a Google Sheet and every morning at 8AM the workflow automatically processes each one, skipping cleanly if nothing is queued. [WayinVideo](https://wayin.ai/api/) summarizes each video, then all summaries are combined and sent to GPT-4o-mini in one call which writes a 5-section daily digest — trend overview, per-video summaries, top 3 content patterns, action recommendations, and trending tags. A formatted Telegram message is sent to your team channel with auto-truncation at 4000 characters, and everything is logged to Google Sheets. Built for social media teams, content agencies, and brand managers who want to track what is trending in their niche every morning without watching hours of videos.

---

## What This Workflow Does

- **Stops cleanly when the queue is empty** — An early IF check detects whether there are any pending videos and exits gracefully if there are none — no errors, no failed runs
- **Summarizes each TikTok video via WayinVideo** — Each video URL is submitted to WayinVideo's Summarization API which returns a structured summary, key highlights, and tags
- **Combines all video summaries before writing the digest** — An aggregation step collects every processed video into one combined text block so GPT sees all the content at once
- **Writes a 5-section daily digest in one GPT call** — GPT produces a trend overview, one-line summaries per video, top 3 content patterns, 2–3 action recommendations, and top trending tags
- **Sends a formatted Telegram message with auto-truncation** — The digest is built in Telegram Markdown with section headers and emoji icons, auto-truncated at 4000 characters if it is too long
- **Logs the digest to Google Sheets** — Overview, top patterns, action recommendations, tags, and send status are saved to the Digest Log tab for your records
- **Marks all processed videos in the queue** — Every Video Queue row is updated with Processed status and today's date so the same videos are never processed again

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Telegram Bot and a team channel or group chat
- Google Sheets (one spreadsheet with two tabs: **Video Queue** and **Digest Log**)

### Credentials Required
- WayinVideo API key (pasted into **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results**)
- OpenAI API key
- Telegram Bot credential + Chat ID (used in **14. Telegram — Send Daily Digest**)
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Pending Videos**, **15. Google Sheets — Log Digest**, and **16. Google Sheets — Mark Videos Processed**)

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Google Sheet ID appears in 3 steps** — replace `YOUR_TREND_SHEET_ID` in **2. Google Sheets — Read Pending Videos**, **15. Google Sheets — Log Digest**, and **16. Google Sheets — Mark Videos Processed**. All three must use the same Sheet ID.

**Estimated Setup Time: 25–30 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 6** — Open node **6. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **12. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create a Telegram Bot** — Open Telegram → search for @BotFather → send `/newbot` → follow the prompts → copy the Bot Token BotFather gives you

7. **Get your Telegram Chat ID** — Add your bot to your team channel or group → send a message in the chat → open this URL in a browser replacing YOUR_BOT_TOKEN: `https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates` → find the `chat.id` value in the response — it is a number (negative for groups)

8. **Connect Telegram in n8n** — Open node **14. Telegram — Send Daily Digest** → click the credential dropdown → add a new Telegram credential → paste your Bot Token → replace `YOUR_TELEGRAM_CHAT_ID` in the Chat ID field with your actual Chat ID

9. **Create your Google Sheet** — Open a new or existing Google Sheet → add a tab named exactly **Video Queue** → add these 6 headers: `Video URL`, `Video Title`, `Niche / Category`, `Date Added`, `Status`, `Processed Date` → add your first TikTok URLs in the rows below leaving Status blank

10. **Add the Digest Log tab** — In the same spreadsheet → add a second tab named exactly **Digest Log** → add these 9 headers: `Digest Date`, `Niche`, `Videos Processed`, `Overview`, `Top Patterns`, `Action Recommendations`, `Top Tags`, `Telegram Sent`, `Sent On`

11. **Get your Google Sheet ID** — Open the spreadsheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

12. **Connect Google Sheets for reading** — Open node **2. Google Sheets — Read Pending Videos** → replace `YOUR_TREND_SHEET_ID` with your actual Sheet ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access

13. **Connect Google Sheets for logging and marking** — Open node **15. Google Sheets — Log Digest** → replace `YOUR_TREND_SHEET_ID` with the same Sheet ID → confirm OAuth2 is selected → repeat the same Sheet ID replacement in node **16. Google Sheets — Mark Videos Processed**

14. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every day at 8AM. To test immediately, click on node **1. Schedule — Every Day 8AM** and use the manual Execute option.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Day 8AM**
The workflow fires automatically every day at 8AM using the cron expression `0 8 * * *`. It can also be triggered manually at any time using the Execute option in n8n.

**Step 2 — Google Sheets: Read Pending Videos**
All rows from your Video Queue tab are read. Each row contains a TikTok video URL, title, niche, and date added. Every row regardless of status is passed forward for the empty queue check.

**Step 3 — IF: Any Pending Videos Today?**
This is the empty queue gate. If the total number of rows is greater than zero (YES path), the workflow has videos to process and continues forward. If the sheet is empty or has no rows (NO path), the workflow stops cleanly — no error is thrown and no Telegram message is sent. This prevents the workflow from failing on mornings when no new videos have been added.

**Step 4 — HTTP: WayinVideo — Submit Summarization**
Each video URL is submitted to WayinVideo's Summarization API. Each submission returns a task ID for tracking. If multiple videos are in the queue, this step runs once per video sequentially.

**Step 5 — Wait: 60 Seconds**
The workflow pauses 60 seconds before the first status check. TikTok videos are typically shorter than webinar recordings so 60 seconds is used here instead of 90.

**Step 6 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID from step 4. It returns the current status and, once complete, the summary text, highlights array, and tags array.

**Step 7 — IF: Summary Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves to extraction. If still processing (NO path), the workflow routes to **8. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 6 to check again. The retry loop runs automatically until SUCCEEDED.

**Step 8 — Wait: 30 Seconds Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 6 for another check.

**Step 9 — Code: Extract Summary Per Video**
The completed summary, highlights array, and tags array are extracted from the WayinVideo response. Highlights are joined as a pipe-separated string and tags as a comma-separated string. The video URL, title, niche, and date added from the sheet row are also packaged. This produces one clean data object per processed video.

**Step 10 — Code: Aggregate All Summaries**
After all videos have been processed individually, this step collects all of them together into a single combined text block. Each video's data is formatted as a labeled block — Video N, URL, Summary, Key Highlights, Tags — separated by dashes. The total video count and niche from the first video are also extracted. This single combined output is what GPT receives.

**Step 11 — AI Agent: Write Daily Digest**
GPT-4o-mini receives the combined summary block, today's date, the niche being tracked, and the total number of videos. It writes a 300–400 word digest in five labeled sections: DIGEST_OVERVIEW (1–2 sentence trend overview), VIDEO_SUMMARIES (one bullet per video — topic and why it is trending), TOP_PATTERNS (3 bullets of content patterns being used today), ACTION_RECOMMENDATIONS (2–3 specific things the team should create or do), and TOP_TAGS (top 8 tags from today's videos comma-separated). Emojis are kept to section headers only.

**Step 12 — OpenAI: GPT-4o-mini Model**
This is the language model powering the digest writing.

**Step 13 — Code: Format Telegram Message**
All five labeled sections are extracted from the AI output using regex. A Telegram Markdown message is assembled with section headers, emoji icons, and the niche and video count as a subtitle line. If the full message exceeds 4000 characters (Telegram's limit), it is auto-truncated at 3900 characters with a note that the full version is in the Digest Log sheet.

**Step 14 — Telegram: Send Daily Digest**
The formatted Markdown message is sent to your Telegram channel or group chat via the Bot API using your Chat ID. Markdown formatting is enabled so bold text and italics render correctly.

**Step 15 — Google Sheets: Log Digest**
One row is appended to your Digest Log tab with all 9 columns: digest date, niche, videos processed count, overview, top patterns, action recommendations, top tags, Telegram Sent set to Yes, and the current timestamp.

**Step 16 — Google Sheets: Mark Videos Processed**
Every Video Queue row that was processed today is updated with Status set to Processed and today's date in the Processed Date column. This prevents the same videos from appearing in tomorrow's digest.

---

## Key Features

✅ **Graceful empty queue handling** — The workflow checks whether any videos are queued before doing anything — runs daily without failing on days when nothing is added
✅ **Aggregation step before GPT** — All per-video summaries are combined into one input so GPT can write cross-video trend analysis rather than analyzing each video in isolation
✅ **5-section digest in one GPT call** — Overview, video summaries, content patterns, action recommendations, and tags are all produced together — saving API cost and keeping the digest coherent
✅ **Auto-truncation at 4000 characters** — Telegram messages have a hard character limit — the workflow handles this automatically and notifies your team to check the sheet for the full version
✅ **Separate Digest Log and Video Queue tabs** — The two tabs serve different purposes — the queue manages what to process, the log archives every digest sent — both tracked in the same spreadsheet
✅ **60-second initial wait for TikTok videos** — Shorter than the 90-second wait used for longer recordings — matched to the typical length of TikTok content
✅ **Niche and date context passed to GPT** — The system prompt includes today's date and the niche being tracked so the digest feels current and category-specific rather than generic

---

## Customisation Options

**Change the daily run time** — In node **1. Schedule — Every Day 8AM**, edit the cron expression from `0 8 * * *` to a different time — for example `0 7 * * *` for 7AM or `0 9 * * 1-5` for weekdays only at 9AM.

**Add a retry limit to stop infinite polling** — Before node **8. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Telegram error message instead of looping indefinitely.

**Track multiple niches in separate sheet tabs** — Duplicate the Video Queue tab and name new tabs by niche (e.g. Beauty, Finance, Fitness) — then duplicate the workflow and point each copy to a different tab so your team gets a separate digest per niche.

**Send the digest to multiple Telegram channels** — After node **14. Telegram — Send Daily Digest**, duplicate the Telegram step with a different Chat ID to send the same digest to a second channel — for example, a client-facing channel alongside your internal team channel.

**Add a Slack message alongside the Telegram digest** — After node **14. Telegram — Send Daily Digest**, add a Slack step that posts the overview section and top tags to a `#trends` channel so team members who are not on Telegram also receive the key highlights.

---

## Troubleshooting

**Workflow running daily but no digest being sent:**
- The most common cause is an empty Video Queue — if no rows exist in the sheet, step 3 stops the workflow cleanly with no output and no error — this is expected behavior
- Confirm the workflow is Active and your n8n instance is running at 8AM — self-hosted instances that are off will not fire
- To test immediately, click on node **1. Schedule — Every Day 8AM** and use the manual Execute option

**WayinVideo API key errors:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` is replaced in both **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results** — missing either one causes a 401 error
- Check the execution log for the specific step that failed — node 4 errors mean the submission failed, node 6 errors mean the polling request failed
- Confirm your WayinVideo account is active and the key has not expired

**Polling loop getting stuck:**
- Check that each TikTok URL in the sheet is publicly accessible — private TikTok videos, deleted posts, or region-blocked content will not be processed by WayinVideo
- Open the execution log of node **6. WayinVideo — Get Summary Results** and check the raw response — WayinVideo may have returned FAILED with a specific error
- If a single video causes the loop to run indefinitely, remove it from the sheet, reactivate the workflow, and resubmit

**Telegram message not sending:**
- Confirm `YOUR_TELEGRAM_CHAT_ID` in node **14. Telegram — Send Daily Digest** is replaced with your actual Chat ID — group chat IDs are negative numbers (e.g. `-1001234567890`)
- Confirm your Telegram Bot credential is connected and the Bot Token is valid — regenerate the token via @BotFather if needed
- Make sure your bot has been added to the target channel or group and has permission to post messages

**Google Sheets not logging or marking rows:**
- Confirm `YOUR_TREND_SHEET_ID` is replaced in all three steps: **2. Google Sheets — Read Pending Videos**, **15. Google Sheets — Log Digest**, and **16. Google Sheets — Mark Videos Processed**
- Confirm the tab names match exactly: **Video Queue** and **Digest Log** — capitalization and spacing must be exact
- Check that the Google Sheets OAuth2 credential is connected in all three steps — it is easy to authorize in node 2 but forget in nodes 15 and 16

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
