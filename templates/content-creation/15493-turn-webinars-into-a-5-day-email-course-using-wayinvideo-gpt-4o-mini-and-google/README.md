# 🎬 Turn webinars into a 5-day email course using WayinVideo, GPT-4o-mini, and Google Sheets

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

### Description

Submit any webinar recording URL using a simple form along with your course name, target audience, brand name, and preferred email tone and the workflow builds a complete 5-day drip email course automatically. [WayinVideo](https://wayin.ai/api/) AI Clipping extracts the top 5 most engaging teaching moments from the recording, ranked by engagement score so the best content becomes Day 1. GPT-4o-mini then writes a complete email lesson for each clip — with subject line, preview text, email body, key takeaway, CTA text, and a CTA URL placeholder — where Day 1 is welcoming, the final day wraps up, and middle days flow naturally between them. All 5 emails are saved to Google Sheets as a ready-to-use drip course with Status set to Draft. Built for course creators, coaches, educators, and marketing teams who want to turn any webinar into a ready-to-send email sequence without writing a single word manually.

---

## What This Workflow Does

- **Extracts the top 5 teaching moments by engagement score** — WayinVideo AI Clipping ranks moments by engagement and the workflow sorts them highest first so your best content always becomes Day 1
- **Assigns each clip to a day number automatically** — Clips are sorted and labeled Day 1 through Day 5 so the email sequence has a logical flow based on content quality
- **Writes a complete email lesson per day** — Each email includes a subject line, preview text, 200–300 word body, key takeaway, CTA text, and a CTA URL placeholder
- **Adapts the tone per day position** — Day 1 is welcoming and introduces the course, the final day concludes and points to next steps, middle days continue naturally
- **Applies ten email writing rules per lesson** — Subject line length, preview text length, paragraph style, CTA format, and day position awareness are all enforced in the prompt
- **Saves all 5 email rows to Google Sheets** — Each row includes webinar title, course name, day number, all six email fields, word count, clip metadata, and Status set to Draft
- **Polls automatically until clips are ready** — Waits 90 seconds then checks every 30 seconds until WayinVideo finishes extracting the teaching moments

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Drip Email Course**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit AI Clipping** and **4. WayinVideo — Get Clip Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit AI Clipping** and **4. WayinVideo — Get Clip Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit AI Clipping** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Clip Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Drip Email Course** → add these 16 column headers in row 1: `Webinar Title`, `Course Name`, `Day Number`, `Email Subject`, `Preview Text`, `Email Body`, `Key Takeaway`, `CTA Text`, `CTA URL Placeholder`, `Word Count`, `Clip Title`, `Clip Score`, `Clip Timestamp`, `Webinar URL`, `Generated On`, `Status`

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

8. **Connect Google Sheets** — Open node **11. Google Sheets — Save Email Course** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet from the dropdown or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Webinar URL + Course Details** → open it in a browser to submit your first webinar

---

## How It Works (Step by Step)

**Step 1 — Form: Webinar URL + Course Details**
You open the form URL in a browser and fill in six fields: the webinar recording URL (YouTube, Zoom, Vimeo, or any direct link), the webinar or course title, the mini-course name (what your subscribers will see), the target audience, your brand or sender name, and the email tone (e.g. "Professional and educational" or "Casual and friendly"). Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit AI Clipping**
The webinar URL is sent to WayinVideo's AI Clipping API. The request asks for clips between 60 and 90 seconds long, limited to 5 clips, with export disabled since you only need the metadata and descriptions for writing emails. A project name is auto-generated from your mini-course name. WayinVideo returns a task ID confirming the job has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check, giving WayinVideo time to identify and extract the best teaching moments from the recording.

**Step 4 — HTTP: WayinVideo — Get Clip Results**
A GET request checks the clipping results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full clips array with title, description, engagement score, timestamp, and tags for each extracted moment.

**Step 5 — IF: Clipping Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the clips are ready and the workflow moves forward to extraction. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When clips are not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Extract Clips + Assign Days**
The clips array is sorted by engagement score from highest to lowest. The top 5 clips are kept and assigned Day 1 through Day 5 in order — Day 1 gets the highest-scoring clip. Millisecond timestamps are converted to MM:SS format. All six form inputs are merged into each clip row so every email lesson has full course context.

**Step 8 — AI Agent: Write Email Lesson**
GPT-4o-mini receives the clip description as the main input and a system prompt with the full course context: webinar title, course name, target audience, brand name, tone, day number, total days, clip title, engagement score, clip tags, and timestamp. Ten email writing rules are enforced: content only from the clip, tone consistency, day-position awareness (welcoming on Day 1, concluding on Day 5, continuing in middle days), subject line 40–55 characters, preview text 85–100 characters, body 200–300 words in short paragraphs, and a single action-oriented CTA. The output uses six labeled sections.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the email writing. It runs with default settings for consistent, readable email copy.

**Step 10 — Code: Parse Email Output**
All six labeled sections are extracted from the AI output using regex: SUBJECT_LINE, PREVIEW_TEXT, EMAIL_BODY, KEY_TAKEAWAY, CTA_TEXT, and CTA_URL_PLACEHOLDER. The word count of the email body is also calculated. If the subject line or email body are missing, the step throws a clear error. All clip metadata and course details are packaged for the sheet row.

**Step 11 — Google Sheets: Save Email Course**
One row is appended to your Drip Email Course tab with all 16 columns populated: webinar title, course name, day number, subject line, preview text, email body, key takeaway, CTA text, CTA URL placeholder, word count, clip title, clip engagement score, timestamp range, webinar URL, generation timestamp, and Status set to Draft. All five email days are saved as five separate rows in the same sheet.

---

## Key Features

✅ **Best clip becomes Day 1 automatically** — Clips are sorted by engagement score before day assignment — your most engaging teaching moment always leads the course
✅ **Day-position awareness in every email** — GPT knows whether it is writing Day 1, a middle day, or the final day and adjusts the tone and structure accordingly — without any extra prompt logic needed
✅ **Six email components per lesson** — Subject line, preview text, body, key takeaway, CTA text, and CTA URL placeholder are all generated separately so you can copy each field directly into your email platform
✅ **CTA URL placeholder included** — Every email ends with a clearly labeled placeholder (e.g. `YOUR_COURSE_LINK`) so you know exactly where to paste your own link before sending
✅ **Word count per email logged** — The sheet records the word count of each email body so you can quickly verify length without opening every email
✅ **Tone applied consistently across all 5 days** — Your chosen tone from the form is passed to every email's GPT prompt so the entire course sounds like one consistent voice
✅ **Draft status for every row** — All five emails are saved with Status set to Draft so you have a clear review stage before loading them into your email platform

---

## Customisation Options

**Change the clip duration range** — In node **2. WayinVideo — Submit AI Clipping**, change `"target_duration": "DURATION_60_90"` to `"DURATION_30_60"` for shorter clips or `"DURATION_90_120"` for longer ones — matching the email length you want to write from.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Send the completed course to Gmail for review** — After node **11. Google Sheets — Save Email Course** (on Day 5 row), add a Gmail step that sends all 5 subject lines, preview texts, and a link to the Drip Email Course sheet so you get a complete course digest in your inbox when it is ready.

**Add a Slack notification when the course is generated** — After the Day 5 row is saved, add a Slack step that posts the course name, webinar title, and a link to the Google Sheet to a `#content-team` channel so your team knows a new email course is ready to review.

**Extend to a 7-day course** — In node **2. WayinVideo — Submit AI Clipping**, change `"limit": 5` to `7` to extract 7 clips — the day assignment logic in node **7. Code — Extract Clips + Assign Days** automatically adapts to however many clips are returned.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Webinar URL + Course Details** after activating — URLs copied before activation will not work
- Make sure all six form fields are filled in — all are marked required

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit AI Clipping** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Clip Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL or request format is invalid

**Workflow stuck in the polling loop:**
- Check that the webinar URL is publicly accessible — private YouTube videos, unlisted videos requiring login, or expired Zoom links will not be processed
- Open the execution log of node **4. WayinVideo — Get Clip Results** and check the raw response — WayinVideo may have returned FAILED with a specific reason
- If the loop runs indefinitely, deactivate the workflow, fix the URL, and resubmit

**GPT not generating all six email sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Write Email Lesson** for the raw GPT output — if any labeled sections are missing, the regex in node **10. Code — Parse Email Output** returns empty strings
- If the subject line or email body are empty, node 10 throws an error — check the raw output for formatting issues

**Google Sheets not logging all 5 rows:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **11. Google Sheets — Save Email Course** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Drip Email Course** exactly and all 16 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
