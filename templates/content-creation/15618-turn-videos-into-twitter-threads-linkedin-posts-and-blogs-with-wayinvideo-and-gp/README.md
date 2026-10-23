# 🎬 Turn videos into Twitter threads, LinkedIn posts, and blogs with WayinVideo and GPT-4o-mini

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit any video URL — podcast, webinar, interview, or YouTube video — along with the title, creator name, niche, target audience, and tone and the workflow transcribes the full recording automatically. WayinVideo's Transcription API returns a speaker-labeled, timestamped transcript which is sent to GPT-4o-mini in one call to produce all three content pieces simultaneously: a 10-tweet Twitter thread, a 200–300 word LinkedIn post, and a 600–800 word SEO blog post with HTML structure, meta description, and focus keyword. Word counts are tracked for all three pieces and everything is saved as one row in Google Sheets with Status set to Draft. Built for content marketers, solo creators, agencies, and social media managers who want to repurpose every video into three platform-specific pieces without writing anything manually.

---

## What This Workflow Does

- **Transcribes the full video with speaker labels and timestamps** — WayinVideo's Transcription API returns every word spoken in the video with the speaker name and timestamp so GPT has full context to work from
- **Generates all three content pieces in one GPT call** — The Twitter thread, LinkedIn post, and blog post are all produced together — saving API cost and keeping the voice consistent across platforms
- **Produces a 10-tweet Twitter thread with a hook and CTA** — Tweet 1 is a scroll-stopping hook, tweets 2–9 cover one insight each from the transcript, and tweet 10 is a CTA with the video reference and hashtags
- **Writes a platform-appropriate LinkedIn post** — A 200–300 word thought leadership post with a strong first line, numbered insights, a closing question, and professional hashtags
- **Creates a full SEO blog post with HTML structure** — A 600–800 word post with an SEO title, meta description, focus keyword, and HTML H2 headings ready to paste into any CMS
- **Tracks word counts for all three pieces** — The Twitter thread, LinkedIn post, and blog content each have their own word count column in the sheet so you can verify length at a glance
- **Saves 18 fields to Google Sheets in one row** — All three pieces, their word counts, the focus keyword, meta description, hashtags, video metadata, and generation timestamp are all in one Draft row

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- [WayinVideo](https://wayin.ai/api/) account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Content Engine**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Content Engine** → add these 18 column headers in row 1: `Video URL`, `Video Title`, `Creator Name`, `Niche`, `Target Audience`, `Duration (min)`, `Twitter Thread`, `Twitter Word Count`, `LinkedIn Post`, `LinkedIn Word Count`, `Blog Title`, `Blog Meta Description`, `Focus Keyword`, `Blog Content`, `Blog Word Count`, `Hashtags`, `Generated On`, `Status`

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

8. **Connect Google Sheets** — Open node **11. Google Sheets — Save Content Engine** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Video URL + Content Details** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Video URL + Content Details**
You open the form URL and fill in six fields: the video URL (YouTube, Zoom, Vimeo, Loom, or any direct link), the video or episode title, the creator or brand name, the content niche (e.g. Digital Marketing, SaaS, Finance), the target audience, and the content tone (e.g. Professional, Casual and friendly, Inspirational). Submitting the form starts the pipeline.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The video URL is sent to WayinVideo's Transcription API — note this is a different API endpoint from Summarization, using `/v2/transcripts`. WayinVideo accepts the job and returns a task ID. The transcription returns speaker-labeled segments with timestamps and the full spoken text.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to transcribe the full video.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the transcripts results endpoint using the task ID from step 2. It returns the current status and, once complete, the full transcript array where each segment includes the speaker label, start time in milliseconds, end time, and spoken text.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Format Transcript**
Each transcript segment is formatted as `[Speaker | MM:SS] Spoken text` and all segments are joined into a single readable text block. Total duration is calculated from the last segment's end time. A word count of the transcript and the list of unique speakers are also extracted. All six form inputs are packaged alongside the formatted transcript for the GPT prompt.

**Step 8 — AI Agent: Generate All 3 Content Pieces**
GPT-4o-mini receives the full formatted transcript as the main input and the video context (title, creator, niche, audience, tone, duration, URL) in the system prompt. It generates all three pieces in one call using eight labeled output sections. For the Twitter thread: 10 numbered tweets (1/ to 10/), hook first, CTA last, each under 280 characters, no hashtags in the thread body, hashtags added separately as THREAD_HASHTAGS. For LinkedIn: a strong first line, short paragraphs, 3–5 numbered insights, a closing question, and professional hashtags. For the blog: an SEO title at 55–60 characters, a meta description at 150–155 characters, 600–800 words with HTML H2 headings, the focus keyword used naturally in the title, first paragraph, and at least one heading, and a concluding paragraph.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the three-platform content generation.

**Step 10 — Code: Parse All Content Outputs**
All eight labeled sections are extracted from the AI output using regex: TWITTER_THREAD, THREAD_HASHTAGS, LINKEDIN_POST, BLOG_TITLE, BLOG_META_DESCRIPTION, BLOG_CONTENT, FOCUS_KEYWORD, and HASHTAGS. The Twitter thread and thread hashtags are combined into one field. Word counts are calculated for all three pieces — HTML tags are stripped from the LinkedIn and blog text before counting. If the Twitter thread, LinkedIn post, or blog content are missing, the step throws a clear error. All video metadata from step 7 is also packaged for the sheet row.

**Step 11 — Google Sheets: Save Content Engine**
One row is appended to your Content Engine tab with all 18 columns: video URL, video title, creator name, niche, target audience, estimated duration, Twitter thread with hashtags, Twitter word count, LinkedIn post, LinkedIn word count, blog title, blog meta description, focus keyword, blog content, blog word count, universal hashtags, generation timestamp, and Status set to Draft.

---

## Key Features

✅ **Transcription API with speaker labels** — WayinVideo returns each segment with the speaker's name and timestamp — giving GPT much richer context than a plain text dump
✅ **Three platforms in one GPT call** — All content is generated together in a single request so the voice and insights stay consistent across Twitter, LinkedIn, and the blog
✅ **Twitter thread hashtags kept separate from body** — The thread body follows Twitter best practice with no inline hashtags — hashtags are appended at the end as a separate section
✅ **HTML-ready blog post** — The blog content uses HTML H2 tags for headings so you can paste directly into WordPress, Webflow, or any CMS without additional formatting
✅ **SEO meta description and focus keyword generated** — Every blog post comes with a 150–155 character meta description and a primary keyword — ready to paste into your SEO plugin
✅ **Word counts tracked for all three pieces** — Twitter thread, LinkedIn post, and blog content each have their own count column so you can verify length before publishing
✅ **Duration calculated from transcript** — The estimated video duration in minutes is logged in the sheet so you can track which recordings produced the most content

---

## Customisation Options

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Send all three pieces to Gmail for review** — After node **11. Google Sheets — Save Content Engine**, add a Gmail step that sends the Twitter thread, LinkedIn post, and blog title in a plain-text email to the creator so they can review everything in their inbox before publishing.

**Add a Slack notification when content is ready** — After node **11. Google Sheets — Save Content Engine**, add a Slack step that posts the video title, niche, and a link to the Content Engine sheet to a `#content-team` channel so your team knows new content is ready to review.

**Change the blog post length** — In the system prompt of node **8. AI Agent — Generate All 3 Content Pieces**, change `600-800 words` to a different range — for example `800-1000 words` for more detailed posts or `400-600 words` for shorter content.

**Change the Twitter thread length** — In the system prompt of node **8. AI Agent — Generate All 3 Content Pieces**, change `Exactly 10 tweets` to a different number — for example 8 tweets for shorter videos or 12 tweets for longer recordings with more insights.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Video URL + Content Details** after activating — URLs copied before activation will not work
- Make sure all six fields are filled in — all are marked required

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — note this workflow uses the `/v2/transcripts` endpoint, not `/v2/summaries` — confirm the URL is correct

**Workflow stuck in the polling loop:**
- Check that the video URL is publicly accessible — private YouTube videos, unlisted videos requiring login, or expired Zoom links will not be transcribed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and inspect the raw response — WayinVideo may have returned FAILED with a specific reason
- Transcription typically takes longer than summarization for longer recordings — if the video is over 60 minutes, the loop may run many cycles before completing; this is expected

**GPT not generating all three content pieces:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- All three pieces must be present for step 10 to succeed — if any section is missing from the GPT output, node **10. Code — Parse All Content Outputs** throws an error with a message indicating which piece was not found
- For very long videos with large transcripts, the combined prompt may approach GPT's input token limit — try using a shorter video or truncating the transcript in step 7 by limiting the number of segments

**Google Sheets not saving the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **11. Google Sheets — Save Content Engine** is replaced with your actual Sheet ID from the URL
- Confirm the tab is named **Content Engine** exactly and all 18 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
