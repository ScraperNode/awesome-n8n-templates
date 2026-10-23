# 📊 Extract earnings call highlights with GPT-4o-mini and WayinVideo Find Moments

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

### Description

Submit an earnings call recording URL along with the company name, ticker, quarter, and the financial topics you want to extract — and the workflow scans the recording automatically. WayinVideo's Find Moments API locates up to 8 relevant moments in the call, each with a title, description, timestamp, and relevance score. GPT-4o-mini then analyzes every moment and writes an 8-section investor highlight including topic category, investor summary, key metrics mentioned, why it matters, sentiment with reasoning, and flags for attention. One Notion page is created per highlight in your Investor Intelligence database. Built for investment analysts, fund managers, IR teams, and financial content creators who want to organize earnings call intelligence without manually scrubbing through recordings.

---

## What This Workflow Does

- **Finds up to 8 financial moments per call** — WayinVideo's Find Moments API scans the full recording and returns the most relevant timestamped moments matching your financial topics query
- **Returns relevance scores per moment** — Each matched moment includes a score out of 100 so you can see at a glance which highlights are the strongest matches
- **Assigns a topic category to every highlight** — GPT categorizes each moment into one of nine categories: Revenue and Growth, Guidance and Outlook, Profitability and Margins, Product and Innovation, Risk Factors, Competitive Landscape, Management Commentary, Capital Allocation, or Other
- **Writes an 8-section investor analysis per moment** — Each highlight includes an investor summary, key metrics, why it matters, sentiment label, sentiment reasoning, and flags for analyst attention
- **Generates pre-formatted Notion page content** — GPT writes the full Notion page body alongside the structured analysis so the page is readable immediately after creation
- **Creates one Notion page per highlight** — Every matching moment becomes its own page in your Investor Intelligence database with the page title formatted as Company Ticker — Quarter — Category — Highlight N
- **Polls automatically until results are ready** — Waits 90 seconds then checks every 30 seconds until [WayinVideo](https://wayin.ai/api/) finishes scanning the recording

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Notion account with a database set up

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**)
- OpenAI API key
- Notion OAuth2 credential

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Find Moments** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Moments Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Notion database** — In Notion, create a new database named **Investor Intelligence** → add these properties: `Title` (title), `Company` (text), `Ticker Symbol` (text), `Quarter` (text), `Topic Category` (select), `Sentiment` (select), `Timestamp` (text), `Relevance Score` (number), `Recording URL` (url), `Call Date` (date), `Status` (select — add "New" as a default option)

7. **Get your Notion database ID** — Open your Investor Intelligence database in Notion in a browser → the database ID is the 32-character string in the URL between the last `/` and the `?` — it looks like `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

8. **Connect Notion and set the database** — Open node **11. Notion — Create Highlight Page** → click the credential dropdown → add Notion OAuth2 → complete the OAuth flow to authorize n8n → in the `pageId` field, paste your Notion database URL or ID → make sure your Notion integration has access to the database (go to the database in Notion → three-dot menu → Add connections → find your n8n integration)

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Earnings Call + Details** → open it in a browser to submit your first earnings call

---

## How It Works (Step by Step)

**Step 1 — Form: Earnings Call + Details**
You open the form URL in a browser and fill in seven fields: the earnings call recording URL (Zoom, YouTube, Vimeo, or any direct link), the company name, the ticker symbol, the quarter or period (e.g. Q1 2025, FY2025), the call date, the financial topics you want to extract (e.g. "revenue growth guidance profit margin"), and optionally your investment thesis context (e.g. "Long-term growth play" or "Risk assessment"). Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Find Moments**
The recording URL and your financial topics query are sent to WayinVideo's Find Moments API. The request asks for up to 8 matching moments with export disabled since you only need the metadata. A project name is auto-generated from the company name, ticker, and quarter. WayinVideo accepts the job and returns a task ID.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check, giving WayinVideo time to scan the full recording. Earnings calls are typically 60–90 minutes long and benefit from this initial processing window.

**Step 4 — HTTP: WayinVideo — Get Moments Results**
A GET request checks the WayinVideo find-moments results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full clips array with title, description, timestamp, relevance score, and tags for each matched moment.

**Step 5 — IF: Find Moments Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the moments are ready and the workflow moves forward to clip extraction. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When results are not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Extract Highlight Clips**
The clips array from WayinVideo is read and split into individual rows — one per matching moment. If no clips are returned, the step throws a clear error with a suggestion to try a broader query. Millisecond timestamps are converted to MM:SS format. The total clip count is also tracked and passed forward so GPT knows which highlight number it is writing (e.g. "Highlight 3 of 7"). All form inputs are carried forward alongside each clip's data.

**Step 8 — AI Agent: Generate Investor Highlight**
GPT-4o-mini receives the earnings call context and the specific moment's metadata: company, ticker, quarter, call date, financial topics, investment thesis, the moment title, description, timestamp range, relevance score, and tags. It writes eight labeled sections: TOPIC_CATEGORY, INVESTOR_SUMMARY, KEY_METRICS_MENTIONED, WHY_IT_MATTERS, SENTIMENT, SENTIMENT_REASONING, FLAGS_FOR_ATTENTION, and NOTION_PAGE_CONTENT. The Notion page content section is a fully formatted readable version of all other sections combined.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the investor analysis. It runs with default settings for structured, consistent financial output.

**Step 10 — Code: Parse Investor Analysis**
All eight labeled sections are extracted from the AI output using regex. A Notion page title is assembled in the format `Company Ticker — Quarter — TopicCategory — Highlight N`. All fields are packaged and ready for the Notion API call.

**Step 11 — Notion: Create Highlight Page**
One Notion page is created in your Investor Intelligence database per financial highlight. The page title uses the structured format built in step 10. The full formatted Notion page content from GPT is written into the page body. Each page created corresponds to one timestamped moment from the earnings call.

The final result is up to 8 Notion pages — one per financial highlight found — each containing the investor summary, key metrics, sentiment, flags for attention, and the full page body ready to read, annotate, and share.

---

## Key Features

✅ **Find Moments API — no full transcription** — WayinVideo semantically searches the recording to find relevant moments directly, which is faster than transcribing and then text-searching the full call
✅ **Up to 8 highlights per call** — More moments per call than most WayinVideo workflows — suited for longer earnings calls with multiple important topics
✅ **Nine financial topic categories — auto-assigned** — Every highlight is automatically tagged with a category so your Notion database is filterable and sortable by topic type across all calls
✅ **Investment thesis personalization** — The optional investment thesis field is passed to GPT so the "Why It Matters" and "Flags" sections are framed around your specific analysis angle
✅ **Sentiment with reasoning included** — GPT assigns one of five sentiment labels and explains why — giving you a one-line justification you can include in your notes or investment memo
✅ **Structured Notion page title** — Every page is titled as `Company Ticker — Quarter — Category — Highlight N` so your Notion database is sortable and scannable without opening individual pages
✅ **Highlight index passed to GPT** — GPT knows it is writing "Highlight 3 of 7" so the analysis can reference position and relative importance within the full set of moments found

---

## Customisation Options

**Increase the number of moments returned** — In node **2. WayinVideo — Submit Find Moments**, change `"limit": 8` to a higher number such as `12` to find more matching moments per call — useful for very long conference call recordings covering many topics.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail or Slack error notification instead of looping indefinitely.

**Add Notion database properties per page** — After node **11. Notion — Create Highlight Page**, add a Notion update step that sets the database properties (Company, Ticker Symbol, Quarter, Sentiment, Topic Category, etc.) on the newly created page using the page ID returned — making your database filterable without opening each page.

**Send a summary email after all highlights are created** — After node **11. Notion — Create Highlight Page** (on the last clip), add a Gmail step that sends a plain-text email listing all highlight titles, sentiments, and Notion page URLs so you have the full digest in your inbox.

**Search for multiple topic queries in one run** — In the form, allow comma-separated financial topics in the Financial Topics to Extract field, then add a code step after the form that submits a separate Find Moments request per topic and merges the results — covering revenue, margins, and risk in a single form submission.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Find Moments** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Moments Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL or query format is invalid

**No moments found (empty clips array):**
- The financial topics query may be too short or too specific — try broader phrases like "revenue guidance margin" instead of "Q3 gross margin beat consensus by 200 basis points"
- Check that the recording URL is publicly accessible without login — private Zoom recordings or expired links will not be processed
- The recording may need clearer audio — low-quality recordings or those with heavy background noise reduce WayinVideo's moment detection accuracy

**Workflow stuck in the polling loop:**
- Open the execution log of node **4. WayinVideo — Get Moments Results** and inspect the raw response — WayinVideo may have returned FAILED with a specific error message
- Check that the recording URL is a direct video link and not a landing page, login wall, or a link that requires account access
- If the loop runs indefinitely, deactivate the workflow, fix the URL or query, and resubmit

**Notion pages not being created:**
- Confirm the Notion OAuth2 credential in node **11. Notion — Create Highlight Page** is connected and that your n8n integration has been added to the Investor Intelligence database in Notion — go to the database → three-dot menu → Add connections
- Confirm the `pageId` field in node 11 points to a valid Notion database — this must be a database, not a regular page
- Check the execution log of node 11 for the Notion API error — a 404 means the database ID is wrong, a 403 means the integration does not have access

**GPT not generating all eight sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Generate Investor Highlight** for the raw GPT output — if any labeled sections are missing, the regex in node **10. Code — Parse Investor Analysis** returns empty strings for those fields
- If the clip description from WayinVideo is very short (under 10 words), GPT may produce a minimal analysis — this is expected for very low-score moments

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

HTTP Request, Notion, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
