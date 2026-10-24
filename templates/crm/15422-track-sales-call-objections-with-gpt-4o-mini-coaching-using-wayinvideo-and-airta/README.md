# 🤝 Track sales call objections with GPT-4o-mini coaching using WayinVideo and Airtable

> ⚡ **20 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Description

Submit a sales call recording URL and describe the objection type you want to find — such as "pricing too expensive" or "competitor comparison" — and the workflow scans the recording automatically. [WayinVideo's](https://wayin.ai/api/) Find Moments API locates up to 5 exact moments in the recording that match your search, returning each one with a title, description, timestamp, and relevance score. GPT-4o-mini then analyzes each moment and writes a structured coaching note — objection category, what happened, rep response assessment, specific coaching advice, and a first-person suggested reframe ready to use on the next call. Every moment is saved as a separate Airtable record with Status set to Needs Review. Built for sales managers and revenue teams who want to track objection patterns across their team's calls without manually reviewing every recording.

---

## What This Workflow Does

- **Finds exact objection moments in the recording** — WayinVideo's Find Moments API scans the full call and returns up to 5 timestamped moments that match your specific objection search query
- **Returns relevance scores per moment** — Each matching moment comes with a relevance score out of 100 so you know which instances are the strongest matches
- **Generates a coaching note per moment** — GPT-4o-mini writes a structured 5-section analysis for each moment including what happened, how the rep likely handled it, and specific coaching advice
- **Writes a first-person suggested reframe** — Every coaching note includes an exact alternative response the rep can use next time the same objection comes up — in first person, ready to say out loud
- **Categorizes each objection automatically** — GPT assigns every moment to one of eight objection categories: Pricing, Competitor, Timing, Feature Gap, Trust, Authority, Need, or Other
- **Creates one Airtable record per moment** — Each of the up to 5 moments becomes its own record with all 16 fields and Status set to Needs Review for the manager to review
- **Polls automatically until results are ready** — Waits 90 seconds then checks every 30 seconds until WayinVideo finishes scanning the recording

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Airtable account with a base and table set up

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**)
- OpenAI API key
- Airtable Personal Access Token (pasted into **11. HTTP — Save to Airtable**)

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Find Moments** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Moments Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Airtable table** — In Airtable, open your base → create a table named **Sales Objections** → add these 16 fields: `Call Date`, `Rep Name`, `Contact Name`, `Company`, `Call Purpose`, `Objection Type`, `Objection Category`, `Moment Title`, `Objection Description`, `Timestamp in Recording`, `Relevance Score` (Number), `Rep Response Assessment`, `Coaching Note`, `Suggested Reframe`, `Recording URL`, `Status`

7. **Get your Airtable Base ID** — Open your Airtable base in a browser → the Base ID is in the URL — it starts with `app` and looks like `appXXXXXXXXXXXXX`

8. **Get your Airtable Personal Access Token** — Go to airtable.com/create/tokens → click Create new token → give it a name → add scope `data.records:write` → add your base under Access → click Create token → copy the token

9. **Add your Airtable credentials to node 11** — Open node **11. HTTP — Save to Airtable** → in the URL, replace `YOUR_AIRTABLE_BASE_ID` with your actual Base ID and `YOUR_AIRTABLE_TABLE_NAME` with `Sales%20Objections` (URL-encoded with %20 for the space) → in the `Authorization` header, replace `YOUR_AIRTABLE_API_KEY` with your Personal Access Token

10. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Call Recording + Details** → open it in a browser to submit your first call

---

## How It Works (Step by Step)

**Step 1 — Form: Call Recording + Details**
You open the form URL in a browser and fill in seven fields: the call recording URL, the sales rep name, the contact name, the company name, the call purpose (e.g. Discovery Call, Demo, Pricing Call), the call date, and the objection type you want to search for (e.g. "pricing too expensive", "competitor comparison", "missing feature"). The objection search query is the most important field — the more specific and descriptive it is, the better WayinVideo's results will be.

**Step 2 — HTTP: WayinVideo — Submit Find Moments**
The recording URL and your search query are sent to WayinVideo's Find Moments API. The request asks for up to 5 matching moments with export disabled (since you only need the metadata, not video downloads). A project name is auto-generated from the contact name and company. WayinVideo accepts the job and returns a task ID.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check, giving WayinVideo time to scan the full recording.

**Step 4 — HTTP: WayinVideo — Get Moments Results**
A GET request checks the WayinVideo find-moments results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full clips array with title, description, timestamp, relevance score, and tags for each matched moment.

**Step 5 — IF: Find Moments Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the moments are ready and the workflow moves forward to clip extraction. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When results are not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Extract Objection Clips**
The clips array from WayinVideo is read and split into individual rows — one per matching moment. If no clips are returned, the step throws a clear error with a suggestion to try a different query. For each clip, the millisecond timestamps are converted to MM:SS format. All seven form inputs are carried forward alongside each clip's data so every Airtable record has full context.

**Step 8 — AI Agent: Generate Coaching Note**
GPT-4o-mini receives the call context and the specific moment's metadata: its title, description, timestamp range, relevance score, and tags. It writes a structured 5-section coaching analysis. The prompt instructs GPT to base everything on the moment description provided — not to invent content. The output uses five labeled sections: OBJECTION_CATEGORY, WHAT_HAPPENED, REP_RESPONSE_ASSESSMENT, COACHING_NOTE, and SUGGESTED_REFRAME.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the coaching analysis. It runs with default settings for consistent structured output.

**Step 10 — Code: Parse Coaching Output**
All five labeled sections are extracted from the AI output using regex. The objection description field combines GPT's "what happened" analysis with WayinVideo's original clip description for maximum context. All 16 Airtable field values are assembled and packaged ready for the API call.

**Step 11 — HTTP: Save to Airtable**
A POST request creates one Airtable record in your Sales Objections table with all 16 fields populated. Status is set to `Needs Review` on every record so managers can filter the table to see only records awaiting their attention. Airtable returns the new record ID on success.

The final result is up to 5 Airtable records — one per objection moment found — each containing the full coaching analysis, timestamp, relevance score, and a first-person suggested reframe ready for the rep to practice.

---

## Key Features

✅ **Find Moments API — no transcription needed** — This workflow uses WayinVideo's semantic search to find moments directly, which is faster than transcribing and then searching through text
✅ **Relevance score per moment** — Every match comes with a score out of 100 so you can instantly see which moments are the strongest matches for your search query
✅ **Eight objection categories — auto-assigned** — GPT categorizes each objection into Pricing, Competitor, Timing, Feature Gap, Trust, Authority, Need, or Other — making your Airtable filterable by category across all calls
✅ **First-person suggested reframe** — The coaching note ends with an exact alternative response the rep can rehearse — not generic advice, but specific language ready to use
✅ **One Airtable record per moment** — Each moment gets its own record so managers can review, comment on, and track each objection instance independently
✅ **Status set to Needs Review automatically** — Every new record starts in a review queue — managers see exactly what requires their attention without any manual tagging
✅ **Timestamped moments linked to recording URL** — Every record includes both the timestamp range and the full recording URL so the manager can jump straight to that moment in the call

---

## Customisation Options

**Increase the number of moments returned** — In node **2. WayinVideo — Submit Find Moments**, change `"limit": 5` to a higher number such as `10` to find more matching moments per call — useful for longer recordings or broader search queries.

**Add a Slack notification to the sales manager** — After node **11. HTTP — Save to Airtable**, add a Slack step that posts the rep name, objection category, and a direct Airtable link to a `#sales-coaching` channel so managers are notified immediately without checking Airtable.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Search for multiple objection types in one run** — In node **1. Form — Call Recording + Details**, allow comma-separated queries in the Objection Type field, then add a code step after the form that splits them and runs the Find Moments submission once per query type.

**Auto-assign Airtable records to a specific reviewer** — In node **11. HTTP — Save to Airtable**, add an `"Assigned To"` field to the JSON body using the Sales Rep Name to route each rep's records to their specific manager — requires an Airtable Collaborator field type.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Find Moments** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Moments Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format or query format is invalid

**No moments found (empty clips array):**
- The objection search query may be too short or too vague — WayinVideo's Find Moments needs descriptive phrases; try "prospect says price is too high" instead of just "price"
- The recording may have low audio quality or heavy background noise — WayinVideo needs clear spoken audio to find moments
- Check that the recording URL is publicly accessible without login — password-protected Zoom links will not be processed

**Workflow stuck in the polling loop:**
- Check that the recording URL is valid and accessible — expired Zoom links or private recordings will cause WayinVideo to fail silently
- Open the execution log of node **4. WayinVideo — Get Moments Results** and inspect the raw response — WayinVideo may have returned FAILED with a specific error message
- If the loop runs indefinitely, deactivate the workflow, fix the URL or query, and resubmit

**Airtable records not being created:**
- Confirm `YOUR_AIRTABLE_BASE_ID` in the URL of node **11. HTTP — Save to Airtable** is replaced with your actual Base ID starting with `app`
- Confirm `YOUR_AIRTABLE_TABLE_NAME` is replaced — if your table name has a space, encode it as `%20` in the URL (e.g. `Sales%20Objections`)
- Confirm `YOUR_AIRTABLE_API_KEY` in the Authorization header is replaced with a valid Personal Access Token with `data.records:write` scope enabled for your base
- Check the execution log of node 11 for the Airtable API error — a 403 means wrong token or missing scope, a 422 means a field name in the JSON body does not match your actual Airtable column name

**GPT not generating coaching sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Generate Coaching Note** for the raw GPT output — if any labeled sections are missing, the regex in node 10 will return empty strings for those fields
- If the clip description from WayinVideo is very short (under 10 words), GPT may produce a minimal analysis — this is expected behavior for low-relevance-score matches

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
