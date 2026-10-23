# 📊 Monitor competitor YouTube videos weekly with WayinVideo and GPT-4o-mini

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Add your competitors' YouTube video URLs to a Google Sheet once and every Monday at 8AM the workflow automatically processes each one. [WayinVideo](https://wayin.ai/api/) summarizes each video and extracts structured highlights and tags, then GPT-4o-mini reads the summary and extracts ten competitive intelligence fields — content type, messaging angle, key claims, target audience signals, pricing signals, strengths, weaknesses, opportunity for your team, urgency score, and urgency reasoning. Each video is saved as a structured Airtable record and the sheet row is marked Processed. Built for marketing teams, product managers, and growth teams who want to automatically track what competitors are saying in their video content every week without watching hours of recordings.

---

## What This Workflow Does

- **Summarizes competitor videos automatically** — WayinVideo extracts structured highlights and tags from each competitor video without any manual watching or note-taking
- **Extracts ten competitive intelligence fields per video** — GPT-4o-mini identifies content type, messaging angle, key claims, audience signals, pricing signals, strengths, weaknesses, opportunity for your team, urgency score, and urgency reasoning
- **Assigns an urgency score from 1 to 10** — GPT rates how urgently your team needs to respond to this competitor content — with a one-sentence explanation of why
- **Identifies specific opportunities for your team** — Each Airtable record includes bullet-pointed actions your team could take in response or content you could create to counter the competitor
- **Creates one Airtable record per video** — Every competitor video becomes a fully structured intelligence record with Status set to New for your team to review and act on
- **Marks each video as Processed in Google Sheets** — After saving to Airtable, the sheet row is updated so the same video is never processed again on a future Monday run
- **Runs fully unattended every Monday** — Just add new competitor URLs to the sheet and the pipeline processes them automatically the next Monday morning

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Airtable account with a base and table set up
- Google Sheets (one spreadsheet with a **Video Queue** tab)

### Credentials Required
- WayinVideo API key (pasted into **3. WayinVideo — Submit Summarization** and **5. WayinVideo — Get Summary Results**)
- OpenAI API key
- Airtable Personal Access Token (pasted into **11. HTTP — Save to Airtable**)
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Pending Videos** and **12. Google Sheets — Mark as Processed**)

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **3. WayinVideo — Submit Summarization** and **5. WayinVideo — Get Summary Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Google Sheet ID appears in 2 steps** — replace `YOUR_COMPETITOR_SHEET_ID` in both **2. Google Sheets — Read Pending Videos** and **12. Google Sheets — Mark as Processed**.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 3** — Open node **3. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 5** — Open node **5. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet** — Open a new or existing Google Sheet → add a tab named exactly **Video Queue** → add these 6 column headers in row 1: `Video URL`, `Video Title`, `Competitor Name`, `Your Product / Brand`, `Status`, `Processed Date` → add your first competitor video URLs in the rows below, leaving Status and Processed Date blank

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

8. **Connect Google Sheets for reading** — Open node **2. Google Sheets — Read Pending Videos** → click the document field → replace `YOUR_COMPETITOR_SHEET_ID` with your actual Sheet ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Connect Google Sheets for marking** — Open node **12. Google Sheets — Mark as Processed** → click the document field → replace `YOUR_COMPETITOR_SHEET_ID` with the same Sheet ID → confirm the Google Sheets OAuth2 credential is selected

10. **Create your Airtable table** — In Airtable, open your base → create a table named **Competitor Intelligence** → add these 16 fields: `Week` (Date), `Competitor Name` (text), `Video Title` (text), `Video URL` (URL), `Content Type` (single select), `Messaging Angle` (long text), `Key Claims Made` (long text), `Target Audience Signals` (long text), `Pricing / Offer Signals` (long text), `Strengths Identified` (long text), `Weaknesses / Gaps` (long text), `Opportunity for Us` (long text), `Urgency Score` (Number), `Tags` (text), `Summary` (long text), `Status` (single select — add "New" as default option)

11. **Get your Airtable Base ID and table name** — Open your Airtable base in a browser → the Base ID starts with `app` and is in the URL → your table name is `Competitor Intelligence` (URL-encode the space as `%20` → `Competitor%20Intelligence`)

12. **Get your Airtable Personal Access Token** — Go to airtable.com/create/tokens → click Create new token → give it a name → add scope `data.records:write` → add your base under Access → click Create token → copy the token

13. **Add your Airtable credentials to node 11** — Open node **11. HTTP — Save to Airtable** → in the URL, replace `YOUR_AIRTABLE_BASE_ID` with your actual Base ID and `YOUR_AIRTABLE_TABLE_NAME` with `Competitor%20Intelligence` → in the `Authorization` header, replace `YOUR_AIRTABLE_API_KEY` with your Personal Access Token

14. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Monday at 8AM. To test immediately, click on node **1. Schedule — Every Monday 8AM** and use the manual Execute option.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Monday 8AM**
The workflow fires automatically every Monday at 8AM using the cron expression `0 8 * * 1`. No manual trigger is needed once the workflow is active.

**Step 2 — Google Sheets: Read Pending Videos**
All rows from your Video Queue tab are read. Each row contains a video URL, video title, competitor name, and your brand name. Every row that has not been marked Processed is picked up and run through the full intelligence pipeline.

**Step 3 — HTTP: WayinVideo — Submit Summarization**
The competitor video URL is sent to WayinVideo's Summarization API. WayinVideo accepts the job and returns a task ID confirming the summarization has started.

**Step 4 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check, giving WayinVideo time to process the video.

**Step 5 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID from step 3. It returns the current processing status and, once complete, the summary text, highlights array, and tags array.

**Step 6 — IF: Summary Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves directly to GPT analysis — no intermediate code step needed. If still processing (NO path), the workflow routes to **7. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 5 to check again. This repeats until SUCCEEDED.

**Step 7 — Wait: 30 Seconds Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 5 for another check. The loop continues automatically.

**Step 8 — AI Agent: Extract Competitive Intelligence**
GPT-4o-mini receives the competitor name, video title, your brand name, video URL, WayinVideo summary text, highlights joined as a pipe-separated string, and tags joined as a comma-separated string — all passed directly from steps 2 and 5. It writes ten labeled sections: content type from a fixed list, messaging angle, key claims as bullet points, target audience signals, pricing and offer signals, strengths, weaknesses and gaps, opportunity for your team as specific actionable bullet points, an urgency score from 1–10, and a one-sentence urgency reasoning. GPT is instructed to base everything only on the WayinVideo summary — no outside knowledge is used.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the competitive analysis. It runs with default settings for structured, consistent intelligence output.

**Step 10 — Code: Parse Intelligence Output**
All ten labeled sections are extracted from the AI output using regex. A Monday week date is calculated from the current date — this is the date field for Airtable to make records filterable by week. The video URL, title, competitor name, summary text, and tags from the sheet and WayinVideo are also packaged for the Airtable record.

**Step 11 — HTTP: Save to Airtable**
A POST request creates one Airtable record in your Competitor Intelligence table with all 16 fields populated. Status is set to `New` on every record. Airtable returns the new record ID on success.

**Step 12 — Google Sheets: Mark as Processed**
The Video Queue row matching this video URL is updated with Status set to Processed and today's date in the Processed Date column. This prevents the same video from being picked up in future Monday runs.

---

## Key Features

✅ **Fully automated weekly competitor monitoring** — Runs every Monday at 8AM with zero manual input after the one-time setup — just add new URLs to the sheet whenever you find new competitor content
✅ **WayinVideo summary passed directly to GPT** — No intermediate code step between summarization and analysis — the summary, highlights, and tags go straight into the GPT prompt for cleaner, faster processing
✅ **Ten structured intelligence fields per video** — Each Airtable record gives your team everything needed to evaluate a competitor video: claims, audience, pricing signals, strengths, gaps, and a specific opportunity bullet list
✅ **Urgency scoring with reasoning** — Every record includes a 1–10 urgency rating and a one-sentence explanation so your team can triage which videos need an immediate response
✅ **Fixed content type categories** — GPT assigns one of nine content type labels so your Airtable table is filterable and sortable by type across all competitors and weeks
✅ **Monday week date auto-calculated** — Every record is tagged with the Monday date of the week it was processed so you can filter Airtable by week and track competitor activity over time
✅ **Status tracking prevents double-processing** — Videos marked Processed in the sheet are skipped on all future Monday runs — add new competitor URLs any time and they are picked up automatically

---

## Customisation Options

**Change the weekly run day or time** — In node **1. Schedule — Every Monday 8AM**, edit the cron expression from `0 8 * * 1` to run on a different day or time — for example `0 7 * * 1` for 7AM Monday or `0 8 * * 3` for Wednesday morning.

**Add a retry limit to stop infinite polling** — Before node **7. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Send a Monday digest email after all videos are processed** — After the last video is marked Processed, add a Gmail step that sends a plain-text email listing all competitor videos processed that week, their urgency scores, and direct Airtable links — so your team gets a Monday morning brief in their inbox.

**Add a Slack alert for high-urgency videos** — After node **11. HTTP — Save to Airtable**, add an IF check that triggers only when `urgencyScore` is 7 or higher, then add a Slack step that posts the competitor name, video title, urgency score, and opportunity bullets to a `#competitive-intel` channel for immediate team visibility.

**Track multiple competitors with separate Airtable views** — In Airtable, create one filtered view per competitor using the `Competitor Name` field — so each team member or account manager can monitor only the competitors relevant to them without filtering manually.

---

## Troubleshooting

**Workflow not triggering on Monday:**
- Confirm the workflow is Active — inactive workflows do not run on a schedule
- Check that your n8n instance is running at 8AM Monday — self-hosted instances that are off will not fire scheduled workflows
- To test immediately, click on node **1. Schedule — Every Monday 8AM** and use the manual Execute option — do not wait for the scheduled run to verify your setup

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **3. WayinVideo — Submit Summarization** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **5. WayinVideo — Get Summary Results** — both steps require the key
- Check the execution log of node 3 for the raw error — a 401 means wrong key, a 422 means the video URL format is unsupported

**Workflow stuck in the polling loop:**
- Check that the competitor video URL is publicly accessible — private YouTube videos, unlisted videos requiring login, or unavailable videos will cause WayinVideo to fail
- Open the execution log of node **5. WayinVideo — Get Summary Results** and inspect the raw response — WayinVideo may have returned FAILED with a specific reason
- If the loop runs indefinitely, deactivate the workflow, fix the video URL in your sheet, and resubmit

**Airtable records not being created:**
- Confirm `YOUR_AIRTABLE_BASE_ID` in the URL of node **11. HTTP — Save to Airtable** is replaced with your actual Base ID starting with `app`
- Confirm `YOUR_AIRTABLE_TABLE_NAME` is replaced — if your table name has a space, encode it as `%20` (e.g. `Competitor%20Intelligence`)
- Confirm `YOUR_AIRTABLE_API_KEY` in the Authorization header is replaced with a valid Personal Access Token with `data.records:write` scope
- Check the execution log of node 11 for the Airtable error — a 422 means a field name in the JSON body does not match your actual Airtable column name exactly

**Google Sheets not reading videos or not marking rows:**
- Confirm `YOUR_COMPETITOR_SHEET_ID` is replaced in both **2. Google Sheets — Read Pending Videos** and **12. Google Sheets — Mark as Processed** — they must use the same Sheet ID
- Confirm the tab is named **Video Queue** exactly and all 6 column headers match
- Check that the Google Sheets OAuth2 credential is connected in both steps — it is easy to connect in node 2 but forget in node 12

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
