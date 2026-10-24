# 📱 Turn TikTok videos into Facebook posts using WayinVideo and GPT-4o-mini

> ⚡ **75 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Paste any TikTok, YouTube, or short-form video URL into a simple form along with your brand name, target audience, and preferred tone and the workflow automatically transcribes the content and writes a ready-to-publish Facebook caption. GPT-4o-mini follows ten Facebook engagement rules to write a hook, short paragraphs, a call to action, and up to 8 hashtags — then posts the caption directly to your Facebook Page feed via the Graph API. Every post is logged to Google Sheets with the Post ID, Post URL, character count, and Posted status. Built for social media managers, content creators, and brands who produce short-form video and want Facebook posts published automatically without rewriting captions manually.

---

## What This Workflow Does

- **Transcribes any video into plain text** — [WayinVideo](https://wayin.ai/api/) processes the video and returns a clean spoken text version that GPT uses as the source for caption writing
- **Writes a Facebook caption following 10 engagement rules** — GPT-4o-mini produces a hook, short paragraphs, a tone-matched body, a CTA, optional video link, and up to 8 hashtags
- **Optionally includes the video link in the post** — If you choose Yes at form submission, the video URL is added naturally to the end of the caption
- **Posts directly to the Facebook Page feed** — The caption and hashtags are published via the Facebook Graph API without any manual copy-pasting
- **Polls automatically until transcription is ready** — Waits 60 seconds then checks every 30 seconds until the transcript is available, with no manual monitoring required
- **Logs every post to Google Sheets** — Appends a row with the video URL, title, brand name, caption, hashtags, character count, Post ID, constructed Post URL, Status, and Posted On timestamp

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Facebook Developer account with a Page Access Token
- Google Sheets (one sheet with a tab named **Facebook Posts**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Facebook Page ID and Facebook Page Access Token (pasted into **11. HTTP — Post to Facebook**)
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Get your Facebook Page ID** — Go to your Facebook Page → click About → scroll to Page Transparency → copy the Page ID number

7. **Get your Facebook Page Access Token** — Go to developers.facebook.com → My Apps → your app → Graph API Explorer → select your Page from the dropdown → click Generate Access Token → copy the token. Make sure the token has `pages_manage_posts` and `pages_read_engagement` permissions

8. **Add your Facebook credentials to node 11** — Open node **11. HTTP — Post to Facebook** → in the URL, replace `YOUR_FACEBOOK_PAGE_ID` with your actual Page ID → in the JSON body, replace `YOUR_FACEBOOK_PAGE_ACCESS_TOKEN` with your actual Page Access Token

9. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Facebook Posts** → add these 10 column headers in row 1: `Video URL`, `Video Title`, `Brand / Page`, `Facebook Caption`, `Hashtags`, `Character Count`, `Post ID`, `Post URL`, `Status`, `Posted On`

10. **Connect Google Sheets** — Open node **12. Google Sheets — Log Post** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID (the string between `/d/` and `/edit` in your Sheet URL) → click the credential dropdown → add Google Sheets OAuth2 → authorize access

11. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Video URL + Details** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Video URL + Details**
You open the form URL in a browser and fill in six fields: the video URL (TikTok, YouTube, Vimeo, or any direct link), the video title, your brand or page name, the target audience, the post tone (e.g. inspiring, informative, funny), and whether to include the video link in the post (Yes or No). Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The video URL is sent to the WayinVideo transcription API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 60 Seconds**
The workflow pauses for 60 seconds before the first status check, giving WayinVideo time to begin processing the video.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full transcript with speaker labels and timestamps.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Format Transcript**
The transcript segments are formatted in two ways simultaneously: a speaker-labeled version with timestamps (for reference), and a clean plain text version that joins all spoken words into a single block of text. The plain text version is what GPT receives — this gives it the actual video content without speaker formatting distracting from the caption writing task. All six form inputs are also packaged here for the AI prompt.

**Step 8 — AI Agent: Write Facebook Caption**
GPT-4o-mini receives the plain text transcript and a detailed system prompt. Ten Facebook writing rules are enforced: content only from the transcript, strong scroll-stopping hook in the first line, short 1–2 sentence paragraphs with line breaks, consistent tone, a CTA at the end, natural emojis, 150–300 word total length, optional video link if requested, and 5–8 relevant lowercase hashtags. The output uses three labeled sections: FACEBOOK CAPTION, HASHTAGS, and CHARACTER COUNT.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the caption writing. It runs with default settings for natural, engaging social copy.

**Step 10 — Code: Parse Caption Output**
The AI output is parsed using regex to extract the FACEBOOK CAPTION, HASHTAGS, and CHARACTER COUNT sections individually. The full post message is assembled by joining the caption and hashtags with two line breaks. If the caption section is empty, the step throws a clear error. Video title, URL, brand name, and tone are also carried forward for the sheet log.

**Step 11 — HTTP: Post to Facebook**
The full post message is sent to the Facebook Graph API v19 feed endpoint for your Page. The Graph API returns the new Post ID on success.

**Step 12 — Google Sheets: Log Post**
One row is appended to your Facebook Posts tab with all 10 columns populated: video URL, video title, brand name, caption, hashtags, character count, the Post ID returned by Facebook, a constructed Post URL (`https://www.facebook.com/[post_id]`), Status set to Posted, and the Posted On timestamp.

---

## Key Features

✅ **Plain text transcript for cleaner captions** — The workflow strips speaker labels before sending to GPT so the AI focuses on the content, not the formatting — producing more natural Facebook copy
✅ **Ten Facebook engagement rules in the prompt** — Hook structure, paragraph length, line breaks, emoji usage, CTA placement, word count, and hashtag count are all enforced in the system prompt
✅ **Optional video link included automatically** — If you choose Yes at form submission, the video URL is woven into the post naturally — no manual adding or editing needed
✅ **Character count logged per post** — Every row in Google Sheets includes the character count of the caption alone so you can track post length trends across your Page
✅ **Post URL constructed and logged** — The Google Sheets log includes a direct link to every live Facebook post built from the Post ID — no searching for it in Facebook later
✅ **Tone matched per submission** — You choose the tone at submission time so the same workflow can produce an inspiring post for one video and a funny casual post for another
✅ **Retry loop with 30-second intervals** — The workflow polls on a sensible schedule without hammering the WayinVideo API while the transcript is processing

---

## Customisation Options

**Change the Facebook Graph API version** — In node **11. HTTP — Post to Facebook**, update the URL from `v19.0` to the latest Graph API version (e.g. `v23.0`) if you need to use newer API features or if v19.0 is deprecated by the time you set this up.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Post to multiple Facebook Pages in sequence** — After node **12. Google Sheets — Log Post**, duplicate the HTTP and Sheets steps with a second Page ID and Access Token — useful for agencies managing multiple brand pages from the same workflow.

**Save a draft instead of posting immediately** — In node **11. HTTP — Post to Facebook**, add a `"published": false` field to the JSON body to save the post as a Facebook draft for review before it goes live — then update the Status in the sheet to "Draft" accordingly.

**Extend to Instagram simultaneously** — After node **10. Code — Parse Caption Output**, add a second HTTP step that posts the same caption to an Instagram Business Account via the Instagram Graph API — repurposing the same caption across both platforms in one workflow run.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported

**Workflow stuck in the retry loop:**
- Check that the video URL is publicly accessible — TikTok videos that require login, private YouTube videos, or expired links will not be processed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and check the raw response — WayinVideo may have returned FAILED with a specific error
- If the loop runs indefinitely, deactivate the workflow, fix the URL, and resubmit

**Facebook post not publishing:**
- Confirm `YOUR_FACEBOOK_PAGE_ID` in the URL of node **11. HTTP — Post to Facebook** is replaced with your numeric Page ID — not the page name or username
- Confirm `YOUR_FACEBOOK_PAGE_ACCESS_TOKEN` in the JSON body of node 11 is replaced with a valid Page Access Token with `pages_manage_posts` permission
- Page Access Tokens expire — if the workflow worked before and stopped, regenerate a long-lived Page Access Token from Graph API Explorer
- Check the execution log of node 11 for the Facebook API error — a 190 error means the token is expired or invalid

**GPT not generating the caption or missing sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Write Facebook Caption** for the raw GPT output — if any of the three labeled sections are missing, the regex in node 10 returns empty strings
- If the transcript is very short (under 50 words), GPT may produce a minimal output — try a longer video or add more context in the video title field

**Google Sheets not logging the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **12. Google Sheets — Log Post** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Facebook Posts** exactly and all 10 column headers match exactly
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
