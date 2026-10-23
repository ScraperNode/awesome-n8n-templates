# 🔬 Create Notion knowledge pages from webinars with WayinVideo and GPT-4o-mini

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description

Paste any webinar, training, or lecture recording URL into a simple form along with the title, speaker name, topic category, and date and the workflow builds your knowledge base automatically. [WayinVideo](https://wayin.ai/api/) transcribes the full session with speaker labels and timestamps, then GPT-4o-mini identifies 3 to 8 distinct topics covered and writes a complete structured page for each one — summary, key insights, action items, notable quotes, timestamps, and tags. One Notion page is created per topic and every page is logged to Google Sheets with its Notion URL for easy team access. Built for teams, educators, consultants, and agencies who want a searchable knowledge base from every webinar without watching recordings or taking notes manually.

---

## What This Workflow Does

- **Transcribes webinars with speaker labels** — WayinVideo processes the full session and returns every segment attributed to the correct speaker with timestamps, giving GPT full context
- **Identifies 3 to 8 distinct topics automatically** — GPT-4o-mini reads the transcript and determines how many meaningful topics were covered — no manual segmentation needed
- **Writes a complete knowledge page per topic** — Each topic gets a summary, up to five key insights, action items with checkboxes, notable quotes, timestamp range, and relevant tags
- **Creates one Notion page per topic** — Each knowledge page is published directly to your Notion database with the webinar title and topic title as the page name
- **Polls automatically until transcription is ready** — Waits 90 seconds then checks every 30 seconds until the transcript is available, with no manual monitoring required
- **Logs every created page to Google Sheets** — Appends a row with the Notion page ID, Notion page URL, topic title, speaker, tags, and Status set to Published
- **Saves all webinar metadata to every page** — Speaker name, webinar date, duration, target team, and recording URL are embedded in every Notion page for full context

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Notion account with a connected database
- Google Sheets (one sheet with a tab named **Knowledge Base Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Notion OAuth credential
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

6. **Set up your Notion database** — In Notion, create a database (or use an existing one) where the knowledge pages will be created → open the database in a browser → copy the database ID from the URL (the 32-character string after your workspace name and before the `?`)

7. **Connect Notion** — Open node **11. Notion — Create Topic Page** → click the credential dropdown → add Notion OAuth → complete the OAuth flow to authorize n8n access → in the `pageId` field, paste your Notion database URL or ID

8. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Knowledge Base Log** → add these 10 column headers in row 1: `Webinar Title`, `Topic Title`, `Speaker`, `Topic Category`, `Webinar Date`, `Notion Page ID`, `Notion Page URL`, `Tags`, `Created On`, `Status`

9. **Connect Google Sheets** — Open node **12. Google Sheets — Log Created Pages** → click the document field → replace `YOUR_GOOGLE_SHEET_LOG_ID` by selecting your spreadsheet or entering the Sheet ID (the string between `/d/` and `/edit` in your Sheet URL) → click the credential dropdown → add Google Sheets OAuth2 → authorize access

10. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Webinar URL + Details** → open it in a browser to submit your first webinar

---

## How It Works (Step by Step)

**Step 1 — Form: Webinar URL + Details**
You open the form URL in a browser and fill in six fields: the webinar or recording URL (Zoom, YouTube, Vimeo, or any direct link), the webinar title, the speaker or presenter name, the topic category (e.g. SEO, Marketing, AI), the webinar date, and optionally the target team or department. Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The webinar URL is sent to the WayinVideo transcription API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check. This is longer than shorter video workflows because webinar recordings are typically 45–90 minutes and need more initial processing time.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full speaker-labeled transcript.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Format Transcript**
Each segment is formatted as `[Speaker Name | MM:SS] text`. Total duration in minutes, word count, and unique speaker names are calculated. All form inputs — webinar title, speaker name, topic category, webinar date, target team, and recording URL — are packaged here for the AI prompt.

**Step 8 — AI Agent: Extract Knowledge Topics**
GPT-4o-mini receives the formatted transcript and a detailed system prompt. It identifies between 3 and 8 distinct topics from the webinar and for each topic returns a structured JSON object with: a 5–8 word topic title, a 2–3 sentence summary, up to five key insights, action items, notable quotes, an approximate timestamp range, and 2–4 tags. The output is a clean JSON array. GPT is instructed to write only from what was actually said in the transcript.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the knowledge extraction. It runs with default settings for consistent, structured output.

**Step 10 — Code: Parse Topics and Build Notion Content**
The AI output JSON is cleaned (any accidental markdown backticks removed) and parsed. If parsing fails, the step throws a clear error. Each topic in the array is returned as an individual row. For each topic, a full Notion-ready markdown page is assembled with sections for Summary, Key Insights, Action Items (with checkbox syntax), Notable Quotes (in blockquote format), and Webinar Details. All webinar metadata is embedded in every page.

**Step 11 — Notion: Create Topic Page**
One Notion page is created per topic. The page title is formatted as "Webinar Title — Topic Title". The full markdown content built in step 10 is written into the page body. Notion returns the new page's ID and URL.

**Step 12 — Google Sheets: Log Created Pages**
After each Notion page is created, one row is appended to your Knowledge Base Log tab. The row includes webinar title, topic title, speaker, topic category, webinar date, the Notion page ID, the Notion page URL, the tags as a comma-separated string, the creation timestamp, and Status set to Published. Your team now has a direct link to every knowledge page from one sheet.

---

## Key Features

✅ **90-second initial wait for long recordings** — The workflow uses a longer first pause suited to webinar-length content rather than short video clips
✅ **3 to 8 topics per webinar — auto-detected** — GPT decides how many meaningful topics are present based on the actual content, not a fixed number
✅ **Action items formatted as Notion checkboxes** — Every action item is written with `- [ ]` syntax so they render as real checkboxes in Notion — ready to assign and complete
✅ **Notable quotes in blockquote format** — Speaker quotes are wrapped in Notion blockquote syntax so they visually stand out on the page
✅ **Webinar metadata embedded in every page** — Speaker, date, duration, target team, and recording URL are written into each page so the context is always visible without referencing a separate document
✅ **Notion page URL logged immediately** — Every page URL is saved to Google Sheets the moment it is created so your team can access any page directly without opening Notion
✅ **JSON parsing with fallback protection** — The code step strips any accidental markdown formatting from GPT output before parsing, reducing the chance of a JSON parse failure on well-formed responses

---

## Customisation Options

**Increase the maximum number of topics** — In node **8. AI Agent — Extract Knowledge Topics**, change "maximum 8 topics" in the system prompt to a higher number — useful for long full-day workshop recordings that cover more than 8 distinct areas.

**Add a Slack notification after all pages are created** — After node **12. Google Sheets — Log Created Pages** (on the last topic row), add a Slack step that posts the webinar title, number of pages created, and a link to your Knowledge Base Log sheet so your team is notified without checking Sheets.

**Filter which topics get a Notion page** — After node **10. Code — Parse Topics and Build Notion Content**, add an IF check that only proceeds to Notion creation if the number of key insights is 3 or more — skipping thin topics that GPT extracted with limited content.

**Add a Notion tag property** — In node **11. Notion — Create Topic Page**, add a multi-select property mapping that sends the `tags` array to a Tags property in your Notion database — making pages filterable and searchable by tag directly in Notion.

**Send a summary email after all pages are created** — After node **12. Google Sheets — Log Created Pages** (last row only), add a Gmail step that sends an email with the webinar title, number of pages created, and a direct link to the Knowledge Base Log sheet so the submitter gets a confirmation.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder text
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported by WayinVideo

**Workflow stuck in the polling loop:**
- Check that the webinar URL is publicly accessible — Zoom recordings with password protection, private YouTube videos, or expired Zoom links will not be processed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and check the raw response — WayinVideo may have returned a FAILED status with a specific error message
- Very long recordings (over 2 hours) may take longer than the polling loop can handle — consider increasing the retry wait from 30 to 60 seconds in node **6. Wait — 30 Seconds Retry**

**GPT not returning valid JSON or extracting zero topics:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Extract Knowledge Topics** for the raw GPT output — the code step in node 10 will show a parse error with the first 200 characters of the bad output
- If GPT is consistently returning markdown-wrapped JSON (with backticks), node 10 strips these automatically — but if the output has additional explanation text before the array, the JSON extraction regex should still find it

**Notion pages not being created:**
- Confirm the Notion OAuth credential in node **11. Notion — Create Topic Page** is connected and that the integration has been added to the target database in Notion — go to your Notion database → three-dot menu → Add connections → find your n8n integration
- Confirm the `pageId` field in node 11 points to a valid Notion database URL — this must be a database, not a regular page
- Check the execution log of node 11 for the Notion API error — a 404 means the database ID is incorrect

**Google Sheets not logging rows:**
- Confirm `YOUR_GOOGLE_SHEET_LOG_ID` in node **12. Google Sheets — Log Created Pages** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Knowledge Base Log** exactly and all 10 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Notion, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
