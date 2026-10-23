# 🎬 Turn YouTube videos into weekly email newsletters with WayinVideo and GPT-4o-mini

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Add your YouTube video URLs to a Google Sheet once and every Monday at 7AM the workflow automatically converts each pending video into a complete newsletter draft. [WayinVideo](https://wayin.ai/api/) summarizes each video and extracts numbered highlights and tags, then GPT-4o-mini reads the summary and writes a full newsletter issue — subject line, preview text, hook intro, three H2 content sections, a featured quote, CTA button text, and hashtags — all assembled into a Markdown-formatted newsletter body with a week-number issue label. The draft is saved to a Newsletter Drafts tab and the video row is marked Processed in the Video Queue. Built for content creators, media brands, newsletter writers, and marketing teams who publish YouTube videos and want a ready-to-send newsletter draft waiting for them every Monday morning without writing anything manually.

---

## What This Workflow Does

- **Runs every Monday at 7AM and stops cleanly if the queue is empty** — An early check detects whether any videos are pending and exits gracefully if there are none — no errors on empty weeks
- **Summarizes each video automatically** — WayinVideo extracts a structured summary, numbered highlights, and tags from each YouTube video so GPT has real content to base the newsletter on
- **Assigns a week-number issue label to every draft** — The issue number is calculated from the current week of the year (e.g. `Issue #18 — 2025`) so your newsletter archive stays organized automatically
- **Writes a 12-section newsletter in one GPT call** — Subject line, preview text, intro hook, three H2 sections with bodies, featured quote, CTA text, and hashtags are all produced together in a single request
- **Assembles a complete Markdown newsletter body** — All sections are combined into one formatted body with H2 headings and a blockquote for the featured quote — ready to paste into any email platform
- **Saves 14 fields to the Newsletter Drafts tab** — Subject line, preview text, full newsletter body, featured quote, CTA text and link, hashtags, word count, and generation timestamp are all saved per draft
- **Marks each video as Processed in the Video Queue** — After saving the draft, the sheet row is updated so the same video is never processed again on a future Monday run

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one spreadsheet with two tabs: **Video Queue** and **Newsletter Drafts**)

### Credentials Required
- WayinVideo API key (pasted into **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results**)
- OpenAI API key
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Pending Videos**, **13. Google Sheets — Save Newsletter Draft**, and **14. Google Sheets — Mark Video Processed**)

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Two separate Google Sheet IDs are used** — replace `YOUR_VIDEO_QUEUE_SHEET_ID` in **2. Google Sheets — Read Pending Videos** and **14. Google Sheets — Mark Video Processed**, and replace `YOUR_NEWSLETTER_SHEET_ID` in **13. Google Sheets — Save Newsletter Draft**. These can be the same spreadsheet or different ones — just make sure each uses the correct Sheet ID.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 6** — Open node **6. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **11. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create the Video Queue tab** — Open your Google Sheet → add a tab named exactly **Video Queue** → add these 8 column headers in row 1: `Video URL`, `Video Title`, `Newsletter Niche / Brand`, `Target Audience`, `Newsletter Tone`, `CTA Link`, `Status`, `Processed Date` → add your first YouTube video URLs in the rows below, leaving Status and Processed Date blank

7. **Create the Newsletter Drafts tab** — In the same spreadsheet or a new one → add a tab named exactly **Newsletter Drafts** → add these 14 column headers in row 1: `Video URL`, `Video Title`, `Newsletter Niche`, `Issue Number`, `Subject Line`, `Preview Text`, `Newsletter Body`, `Featured Quote`, `CTA Text`, `CTA Link`, `Hashtags`, `Word Count`, `Generated On`, `Status`

8. **Get your Video Queue Sheet ID** — Open the spreadsheet containing the Video Queue tab in a browser → copy the string between `/d/` and `/edit` in the URL

9. **Connect Google Sheets for reading and marking** — Open node **2. Google Sheets — Read Pending Videos** → replace `YOUR_VIDEO_QUEUE_SHEET_ID` with your actual Sheet ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access → repeat the same Sheet ID replacement in node **14. Google Sheets — Mark Video Processed**

10. **Get your Newsletter Drafts Sheet ID** — If it is a separate spreadsheet, open it and copy the Sheet ID from the URL; if it is the same spreadsheet, use the same Sheet ID

11. **Connect Google Sheets for newsletter drafts** — Open node **13. Google Sheets — Save Newsletter Draft** → replace `YOUR_NEWSLETTER_SHEET_ID` with the correct Sheet ID → confirm Google Sheets OAuth2 is selected

12. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Monday at 7AM. To test immediately, click on node **1. Schedule — Every Monday 7AM** and use the manual Execute option.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Monday 7AM**
The workflow fires automatically every Monday at 7AM using the cron expression `0 7 * * 1`. It can also be triggered manually at any time using the Execute option in n8n.

**Step 2 — Google Sheets: Read Pending Videos**
All rows from your Video Queue tab are read. Each row contains a YouTube video URL, video title, newsletter niche or brand, target audience, newsletter tone, and CTA link.

**Step 3 — IF: Any Pending Videos Today?**
This is the empty queue gate. If the total number of rows is greater than zero (YES path), the workflow has videos to process and continues. If the sheet has no rows (NO path), the workflow stops cleanly — no error is thrown. This prevents failures on weeks when no new videos have been added.

**Step 4 — HTTP: WayinVideo — Submit Summarization**
Each YouTube video URL is submitted to WayinVideo's Summarization API. WayinVideo accepts the job and returns a task ID. Multiple videos are processed sequentially — step 4 runs once per video.

**Step 5 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to process the video.

**Step 6 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID. It returns the current status and, once complete, the summary text, highlights array, and tags array.

**Step 7 — IF: Summary Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves forward to extraction. If still processing (NO path), the workflow routes to **8. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 6. This repeats until SUCCEEDED.

**Step 8 — Wait: 30 Seconds Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 6 for another check.

**Step 9 — Code: Extract Summary Data**
The summary text and numbered highlights (formatted as `1. highlight`, `2. highlight`) are extracted from the WayinVideo response. Tags are joined as a comma-separated string. All sheet columns (niche, audience, tone, CTA link) are also packaged. The current week number of the year is calculated and formatted as an issue label — for example `Issue #18 — 2025` — so every newsletter draft is automatically numbered.

**Step 10 — AI Agent: Write Newsletter**
GPT-4o-mini receives the summary and highlights as the main input and the newsletter context (title, niche, audience, tone, issue number, CTA link, video URL) in the system prompt. It writes 12 labeled sections: SUBJECT_LINE (45–55 characters), PREVIEW_TEXT (85–100 characters that never repeats the subject), NEWSLETTER_INTRO (2–3 sentence hook), SECTION_1_HEADING through SECTION_3_HEADING (four to seven words each), SECTION_1_BODY through SECTION_3_BODY (80–120 words each from the highlights), FEATURED_QUOTE (the most insightful statement from the highlights), CTA_TEXT (3–5 word button text), and HASHTAGS (4–6 niche-relevant hashtags).

**Step 11 — OpenAI: GPT-4o-mini Model**
This is the language model powering the newsletter writing.

**Step 12 — Code: Parse Newsletter Output**
All 12 labeled sections are extracted from the GPT output using regex. A complete Markdown newsletter body is assembled by joining: intro → blank line → `## Section 1 Heading` → body → blank line → `## Section 2 Heading` → body → blank line → `## Section 3 Heading` → body → blank line → blockquote of featured quote → blank line → CTA as a Markdown link. Word count is calculated from the assembled body. If the subject line or intro are missing, the step throws a clear error.

**Step 13 — Google Sheets: Save Newsletter Draft**
One row is appended to your Newsletter Drafts tab with all 14 columns: video URL, video title, newsletter niche, issue number, subject line, preview text, newsletter body, featured quote, CTA text, CTA link, hashtags, word count, generation timestamp, and Status set to Draft.

**Step 14 — Google Sheets: Mark Video Processed**
The Video Queue row matching this video URL is updated with Status set to Processed and today's date in the Processed Date column. This prevents the same video from being picked up in future Monday runs.

---

## Key Features

✅ **Graceful empty queue handling** — The workflow checks whether any videos are queued before doing anything — runs every Monday without failing on weeks when nothing new is added
✅ **Week-number issue label auto-calculated** — Every draft is tagged with the current week number and year so your newsletter archive is self-organizing without any manual numbering
✅ **Featured quote extracted from highlights** — GPT identifies the single most insightful statement from the video highlights and saves it separately so you can use it as a pull quote in your email design
✅ **Markdown newsletter body fully assembled** — All sections are combined in one code step with correct H2 headings and a blockquote — ready to paste into Mailchimp, Beehiiv, ConvertKit, or any Markdown-aware editor
✅ **Word count tracked per draft** — The newsletter body word count is logged in the sheet so you can see at a glance whether each draft meets your length target before reviewing
✅ **CTA link pulled from the sheet row** — The CTA link comes directly from your Video Queue row — so different videos in your queue can point to different CTAs without any prompt changes
✅ **Two-tab separation of concerns** — The Video Queue manages what to process; the Newsletter Drafts stores finished output — keeping operations clean and easy to manage

---

## Customisation Options

**Change the weekly run day or time** — In node **1. Schedule — Every Monday 7AM**, edit the cron expression from `0 7 * * 1` to a different schedule — for example `0 6 * * 1` for 6AM Monday or `0 7 * * 3` for Wednesday morning.

**Add a retry limit to stop infinite polling** — Before node **8. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Send the newsletter draft to Gmail for review** — After node **13. Google Sheets — Save Newsletter Draft**, add a Gmail step that emails the subject line, preview text, and full newsletter body to your inbox so you receive a formatted preview every Monday without opening the sheet.

**Add a Slack notification when drafts are ready** — After node **13. Google Sheets — Save Newsletter Draft**, add a Slack step that posts the issue number, video title, subject line, and a link to the Newsletter Drafts sheet to a `#newsletter-team` channel so your team knows a new draft is ready to review.

**Change the newsletter length** — In the system prompt of node **10. AI Agent — Write Newsletter**, change `350-500 words total` to a different range — for example `500-700 words` for longer newsletters or `250-350 words` for shorter digest-style issues.

---

## Troubleshooting

**Workflow running every Monday but no drafts being generated:**
- The most common cause is an empty Video Queue — if no rows exist in the sheet, step 3 stops the workflow cleanly with no output and no error; this is expected behavior
- Confirm the workflow is Active and your n8n instance is running at 7AM Monday — self-hosted instances that are off will not fire
- To test immediately, click on node **1. Schedule — Every Monday 7AM** and use the manual Execute option

**WayinVideo API key errors:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` is replaced in both **4. WayinVideo — Submit Summarization** and **6. WayinVideo — Get Summary Results** — missing either one causes a 401 error
- Check the execution log for the specific failing step — node 4 errors mean the submission failed, node 6 errors mean the polling request failed
- Confirm your WayinVideo account is active and the key has not expired

**Polling loop getting stuck:**
- Check that each YouTube URL in the Video Queue is publicly accessible — private YouTube videos or unavailable videos will not be processed by WayinVideo
- Open the execution log of node **6. WayinVideo — Get Summary Results** and check the raw response — WayinVideo may have returned FAILED with a specific reason
- If a single video causes the loop to run indefinitely, remove it from the queue, reactivate the workflow, and resubmit

**Newsletter Drafts tab not receiving rows:**
- Confirm `YOUR_NEWSLETTER_SHEET_ID` in node **13. Google Sheets — Save Newsletter Draft** is the correct Sheet ID — if the Newsletter Drafts tab is in a different spreadsheet than the Video Queue, it needs its own Sheet ID
- Confirm the tab is named **Newsletter Drafts** exactly and all 14 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected in node 13 — it is easy to authorize in node 2 but forget in node 13

**Video Queue rows not being marked as Processed:**
- Confirm `YOUR_VIDEO_QUEUE_SHEET_ID` in node **14. Google Sheets — Mark Video Processed** is the same Sheet ID used in node 2 — they must point to the same spreadsheet
- Confirm the tab name in node 14 is **Video Queue** exactly
- The update matches rows by Video URL — if the URL in the sheet has a trailing space or slightly different format from what was submitted, the match will fail

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
