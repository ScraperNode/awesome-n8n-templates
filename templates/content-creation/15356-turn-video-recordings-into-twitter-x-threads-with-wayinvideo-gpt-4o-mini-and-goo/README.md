# 🎬 Turn video recordings into Twitter (X) threads with WayinVideo, GPT-4o-mini and Google Sheets

> ⚡ **26 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Paste any YouTube, podcast, or Zoom URL into a simple form along with your video title, niche, and target audience and the workflow handles the rest. [WayinVideo](https://wayin.ai/api/) transcribes the full video with speaker labels and timestamps, then GPT-4o-mini writes exactly 10 tweets — a hook, eight content insights each under 270 characters, and a call-to-action. All 10 tweets are saved to Google Sheets as drafts, and if you choose Auto Post, each tweet is published to Twitter/X in sequence and the sheet row is updated with the live tweet ID. Built for content creators, marketers, and thought leaders who want to repurpose long-form video into Twitter/X threads without watching or manually summarizing anything.

---

## What This Workflow Does

- **Transcribes any video with speaker labels** — WayinVideo processes the full video and returns every spoken segment attributed to the correct speaker with timestamps
- **Polls automatically until transcription is complete** — Waits 60 seconds then checks every 45 seconds until the transcript is ready, with no manual monitoring required
- **Writes exactly 10 tweets in one GPT call** — A hook tweet, eight standalone content insights each under 270 characters, and a CTA tweet — all grounded in the actual transcript
- **Assigns a unique thread ID to every run** — All 10 tweets share one thread ID in Google Sheets so you can filter and find the full thread at any time
- **Saves all 10 tweets to Google Sheets as drafts** — Each tweet gets its own row with character count, tweet number, thread ID, and Draft status for review
- **Auto-posts to Twitter/X on request** — If you choose Yes at form submission, each tweet is posted to your connected Twitter/X account in sequence
- **Updates the sheet with live tweet IDs** — After each tweet is posted, the corresponding row Status changes from Draft to Posted and the live tweet ID is saved

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Twitter Threads**)
- Twitter/X developer account with OAuth2 and `tweet.write` scope

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Google Sheets OAuth2 (used in **11. Google Sheets — Save Thread Draft** and **14. Google Sheets — Update Status to Posted**)
- Twitter/X OAuth2 credential

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Google Sheet ID appears in 2 steps** — replace `YOUR_GOOGLE_SHEET_ID` in both **11. Google Sheets — Save Thread Draft** and **14. Google Sheets — Update Status to Posted**.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Twitter Threads** → add these 8 column headers in row 1: `Video Title`, `Video URL`, `Thread ID`, `Tweet Number`, `Tweet Text`, `Character Count`, `Generated On`, `Status`

7. **Add a Tweet ID column too** — In the same tab, add a 9th column header: `Tweet ID` — this is where live tweet IDs are written after posting

8. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

9. **Connect Google Sheets for saving** — Open node **11. Google Sheets — Save Thread Draft** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access

10. **Connect Google Sheets for updating** — Open node **14. Google Sheets — Update Status to Posted** → repeat the same process — select your spreadsheet, replace `YOUR_GOOGLE_SHEET_ID`, and confirm the same Google Sheets OAuth2 credential is connected

11. **Connect Twitter/X** — Open node **13. Twitter/X — Post Tweet** → click the credential dropdown → add Twitter OAuth2 → complete the OAuth flow — make sure your Twitter app has `tweet.write` permission enabled in the Twitter Developer Portal

12. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Video URL + Details** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Video URL + Details**
You open the form URL in a browser and fill in five fields: the video URL (YouTube, Zoom, Vimeo, or any direct link), the video title, your niche or topic, target audience, and whether to auto-post to Twitter/X (type `Yes` or `No`). Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The video URL is sent to the WayinVideo transcription API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 60 Seconds**
The workflow pauses for 60 seconds before checking the transcription status for the first time, giving WayinVideo time to begin processing.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full speaker-labeled transcript.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 45 Seconds Retry** which pauses 45 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 45 Seconds Retry**
When the transcript is not yet ready, the workflow waits 45 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Format Transcript**
Each segment is formatted as `[Speaker Name | MM:SS] text` for clear, structured GPT input. Total video duration in minutes, word count, and unique speaker names are also calculated. All form inputs (video title, URL, niche, target audience, auto-post preference) are packaged here for the AI prompt.

**Step 8 — AI Agent: Write Twitter Thread**
GPT-4o-mini receives the formatted transcript as the user message and a detailed system prompt specifying ten strict Twitter rules. The rules enforce exactly 10 tweets, a hook that does not start with "I", 270-character limits per tweet, one standalone insight per content tweet, and a CTA for tweet 10. The output format uses labeled sections `TWEET 1:` through `TWEET 10:` so parsing is reliable.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the thread writing. It runs with default settings for natural output.

**Step 10 — Code: Parse Tweets**
The AI output text is parsed using regex to extract each tweet from its labeled section. All 10 tweets are returned as individual rows, each carrying the tweet text, character count, tweet number, video title, video URL, a unique thread ID, auto-post preference, and Draft status. If zero tweets are extracted, the step throws a clear error.

**Step 11 — Google Sheets: Save Thread Draft**
Each of the 10 tweets is appended as one row to your Twitter Threads tab. All 8 columns are populated including the shared thread ID that groups the full thread together. Status is set to Draft for all rows.

**Step 12 — IF: Auto Post Enabled?**
After each tweet is saved, this check reads the `autoPost` value from the form. If it equals `Yes` (YES path — case-insensitive), the workflow moves to post the tweet on Twitter/X. If `No` or anything else (NO path), the workflow ends here — the tweet stays as a draft in your sheet.

**Step 13 — Twitter/X: Post Tweet**
The tweet text is posted to your connected Twitter/X account using the Twitter OAuth2 credential. Twitter returns the live tweet ID on success.

**Step 14 — Google Sheets: Update Status to Posted**
The sheet row matching this tweet's Thread ID and Tweet Number is updated. Status changes from Draft to Posted and the live tweet ID is saved to the Tweet ID column. This lookup uses both Thread ID and Tweet Number together to find the exact row.

The final result is 10 logged rows in your Twitter Threads sheet — all Drafts if Auto Post was No, or all updated to Posted with live tweet IDs if Auto Post was Yes.

---

## Key Features

✅ **Optional auto-posting at form submission** — You decide at submission time whether to save as draft or post immediately — no separate workflow run needed
✅ **Speaker-labeled transcript for context** — WayinVideo attributes each sentence to the right speaker so GPT understands dialogue flow and can write tweets that reflect real insights from the conversation
✅ **Ten strict Twitter rules enforced in the prompt** — Character limits, hook structure, standalone tweet requirement, no invented facts, and CTA placement are all built into the system prompt — not left to chance
✅ **Unique thread ID per run** — Every set of 10 tweets shares one thread ID so you can filter your Google Sheets library by thread and find all 10 tweets together at any time
✅ **Character count per tweet logged** — The sheet records the character count for every tweet so you can spot any that approach the 270-character limit before posting
✅ **Status updates from Draft to Posted automatically** — When auto-posting, the sheet updates in real time as each tweet goes live — no manual tracking needed
✅ **Retry loop with 45-second intervals** — The workflow polls on a sensible schedule without hammering the WayinVideo API or timing out on longer videos

---

## Customisation Options

**Change the number of tweets per thread** — In node **10. Code — Parse Tweets**, change the loop from `i &lt;= 10` to a different number — and update the system prompt in node **8. AI Agent — Write Twitter Thread** to request that same number of tweets, adjusting the OUTPUT FORMAT section to match.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 45 Seconds Retry**, add a Set step that increments a counter, then add a second IF check to stop after 15 polls and route to a Gmail or Slack error notification instead of looping indefinitely.

**Post threads as replies to each other** — In node **13. Twitter/X — Post Tweet**, add the previous tweet's ID as a `reply_to_tweet_id` parameter so tweets are chained as a proper threaded reply on Twitter/X rather than separate posts.

**Add a Slack notification when the thread is drafted** — After node **11. Google Sheets — Save Thread Draft** (only on tweet 10), add a Slack step that posts the video title, hook tweet, and a link to your Twitter Threads sheet so your team sees new threads without checking email.

**Schedule threads for a future time** — Replace node **13. Twitter/X — Post Tweet** with a scheduling step that saves tweets to a Buffer or Hypefury queue instead of posting immediately, so you can plan threads in advance without live posting.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder
- Also confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps need the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is unsupported

**Workflow stuck in the retry loop:**
- Check that the video URL is publicly accessible — private, password-protected, or region-blocked videos will not be processed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and inspect the raw response — WayinVideo may have returned a FAILED status with an error message
- If the loop runs indefinitely, deactivate the workflow, fix the video URL, and resubmit

**GPT not generating all 10 tweets:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Write Twitter Thread** for the raw output — if fewer than 10 labeled tweet sections are present, the regex in node 10 will only extract what is there
- If the issue is consistent, check that the system prompt in node 8 is intact and has not been accidentally edited

**Google Sheets not saving rows or updating status:**
- Confirm `YOUR_GOOGLE_SHEET_ID` is replaced in both **11. Google Sheets — Save Thread Draft** and **14. Google Sheets — Update Status to Posted** — both need the same Sheet ID
- Confirm the tab is named **Twitter Threads** exactly and all column headers match
- Check that the Google Sheets OAuth2 credential is connected and not expired in both steps

**Twitter/X posting failing:**
- Confirm the Twitter OAuth2 credential in node **13. Twitter/X — Post Tweet** is connected and your app has `tweet.write` permission enabled in the Twitter Developer Portal
- Twitter rate limits allow 17 posts per 15 minutes on free tier — if your thread of 10 tweets posts too fast, Twitter may reject later tweets
- Check the execution log of node 13 for the exact Twitter API error response — a 403 usually means a permission scope issue

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, X (Formerly Twitter), AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
