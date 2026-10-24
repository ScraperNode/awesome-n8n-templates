# 🤝 Analyze weekly Fireflies sales calls with GPT-4o-mini, Google Sheets and Slack

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Description

Connect your Fireflies account once and activate the workflow — every Monday at 9AM it runs automatically without any input from you. It pulls all sales call transcripts from the past 7 days, analyzes each one with GPT-4o-mini, and extracts six intelligence fields: pricing mentions, objections, buying signals, competitor mentions, a key takeaway, and a recommended next action. Every call is logged as one row in Google Sheets and a full weekly digest is posted to your Slack channel. Built for sales managers and revenue teams who want structured call intelligence delivered without manual review.

---

## What This Workflow Does

- **Fetches last 7 days of calls automatically** — Pulls up to 50 recent transcripts from Fireflies and filters to only those recorded in the past week
- **Analyzes every call individually** — GPT-4o-mini reads each transcript and extracts six structured fields per call, not a generic summary
- **Detects objections and buying signals** — Surfaces exactly what concerns were raised and what positive signals suggest the deal is moving forward
- **Flags competitor mentions** — Identifies any competitor names or alternative products that came up across all calls this week
- **Logs each call to Google Sheets** — Appends one 13-column row per call so your team has a permanent, searchable record of every sales conversation
- **Delivers a weekly Slack digest** — Aggregates all calls into one report covering totals, top objections, top buying signals, and a call-by-call overview
- **Exits cleanly when no calls exist** — If no transcripts are found for the week, the workflow stops silently without errors or empty Slack messages

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Sales Call Analysis**)
- Slack workspace with OAuth2 app configured

### Credentials Required
- Fireflies API key (pasted directly into **2. Set — Config Values** — no n8n credential needed)
- OpenAI API key
- Google Sheets OAuth2
- Slack OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your Fireflies API key** — Log in to fireflies.ai → go to Settings → Integrations → copy your API key

3. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 2 |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Sales Call Analysis` | Leave as-is, or change to match your sheet tab name exactly |
| `#sales-team` | Your Slack channel name including the `#` |
| `YOUR COMPANY NAME` | Your company name (used in the AI prompt and Slack report) |
| `salesKeywords` | Comma-separated keywords to identify sales calls (default: `sales,client,demo,proposal,pricing,onboarding,deal,contract`) |

4. **Connect OpenAI** — Open node **10. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

5. **Create your Google Sheet** — Open Google Sheets → create a new sheet → add a tab named exactly **Sales Call Analysis** → add these 13 column headers in row 1: `Call Date`, `Meeting Title`, `Duration (min)`, `Participants`, `Overall Sentiment`, `Pricing Mentions`, `Objections`, `Buying Signals`, `Competitor Mentions`, `Key Takeaway`, `Recommended Action`, `Transcript URL`, `Logged At`

6. **Connect Google Sheets** — Open node **13. Google Sheets — Log Call Analysis** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

7. **Connect Slack** — Open node **15. Slack — Send Weekly Report** → click the credential dropdown → connect your Slack workspace via OAuth2 → invite the n8n bot to your sales channel in Slack (`/invite @n8n`)

8. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Monday at 9AM

&gt; ⚠️ **Test before Monday** — To test immediately without waiting for Monday, open node **1. Schedule — Every Monday 9AM**, click "Execute step", then run the full workflow manually from there.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Monday 9AM**
This step fires the workflow automatically every Monday morning at 9AM. No manual trigger is needed. Once the workflow is active, this runs on its own every week.

**Step 2 — Set: Config Values**
Your Fireflies API key, Google Sheet ID, sheet tab name, Slack channel, company name, sales keywords, and the 7-day date window are all stored here. The week start and end dates are calculated automatically based on today's date so you never need to update them manually.

**Step 3 — HTTP: Fetch Recent Transcripts**
A request is sent to the Fireflies API using your API key. It retrieves the 50 most recent transcripts from your account, including each call's ID, title, date, duration, and participants. This is a lightweight fetch — full transcript content comes later.

**Step 4 — Code: Filter Last 7 Days**
The 50 transcripts are filtered down to only those recorded in the past 7 days. Each transcript that passes the filter becomes its own separate item so the next steps process each call individually. If no transcripts exist at all, a fallback result is passed forward.

**Step 5 — IF: Any Transcripts Found?**
This is the gate check. If transcripts were found (YES path), each one moves forward to full analysis. If no transcripts were found this week (NO path), the workflow routes to **6. Set — No Calls This Week** and stops cleanly — no errors, no empty reports.

**Step 6 — Set: No Calls This Week**
This step handles the empty-week case. It sets a simple message confirming no calls were recorded and the workflow ends here for that run.

**Step 7 — HTTP: Fetch Full Transcript**
For each call that passed the filter, a second Fireflies API request is made to retrieve the complete transcript details: all sentences with speaker labels, AI-detected pricing sentences, questions, tasks, keyword summary, overview, and sentiment percentages.

**Step 8 — Code: Extract Transcript Data**
The full transcript is processed here. Sentences are assembled into readable text (limited to 4,000 characters for GPT efficiency). Fireflies AI-flagged pricing sentences and question sentences are extracted separately. Sentiment percentages are converted into a single label: Positive, Mostly Positive, Mixed, or Negative. All data is packaged cleanly for the AI step.

**Step 9 — AI Agent: Analyze Sales Call**
GPT-4o-mini receives the call details, sentiment data, Fireflies-detected pricing sentences, keywords, overview, and the transcript excerpt. It returns exactly six fields: pricing mentions, objections, buying signals, competitor mentions, a key takeaway under 25 words, and a recommended action for the sales rep to take within 48 hours.

**Step 10 — OpenAI: GPT-4o-mini Model**
This is the language model powering the analysis step. It runs at temperature 0.3 for consistent, factual extraction and is capped at 800 tokens per call to keep costs predictable across the full week's batch.

**Step 11 — Parser: Structured Call Analysis**
This step enforces the exact six-field schema GPT-4o-mini must return. It validates that all required fields are present and correctly typed before the results move forward, preventing malformed output from reaching your sheet.

**Step 12 — Code: Combine Analysis Results**
The AI output is merged with the original transcript metadata (date, title, duration, participants, sentiment, transcript URL). A log timestamp is also added. This creates the complete data row that goes to both Google Sheets and the Slack aggregation step.

**Step 13 — Google Sheets: Log Call Analysis**
One row is appended to your Sales Call Analysis tab for every call analyzed. All 13 columns are populated: date, title, duration, participants, sentiment, pricing, objections, buying signals, competitors, key takeaway, recommended action, transcript URL, and logged-at timestamp.

**Step 14 — Code: Build Weekly Slack Summary**
All analyzed calls are aggregated into a single weekly digest. The code counts total calls, positive calls, calls with objections, calls with buying signals, and compiles unique competitor mentions. The top 3 objections and top 3 buying signals are pulled from across all calls. A call-by-call overview line is added for every transcript.

**Step 15 — Slack: Send Weekly Report**
The complete weekly digest is posted to your Slack channel. The message includes the week date range, summary totals, top objections, top buying signals, competitor mentions, and a one-line overview of every call. A footer confirms the full analysis is logged in Google Sheets.

---

## Key Features

✅ **Fully automated weekly cadence** — Runs every Monday at 9AM with zero manual input after setup
✅ **Per-call AI intelligence** — Each call gets its own six-field analysis, not a rolled-up average
✅ **Fireflies AI signals as input** — Pricing sentences and questions detected by Fireflies are fed directly into GPT for more accurate extraction
✅ **Structured output enforced** — A schema parser validates every AI response before it reaches your sheet — no broken rows
✅ **Sentiment scoring per call** — Each call is rated Positive, Mostly Positive, Mixed, or Negative based on Fireflies sentiment percentages
✅ **Competitor tracking built in** — Competitor mentions are collected across all calls and deduplicated into one list in the Slack report
✅ **48-hour action item per call** — Every call ends with one concrete action the sales rep should take — not a vague suggestion
✅ **Clean empty-week handling** — No transcripts this week means a clean stop, not an error or blank Slack message

---

## Customisation Options

**Change the schedule day or time** — In node **1. Schedule — Every Monday 9AM**, edit the cron expression `0 9 * * 1` to run on a different day or time. For example, `0 8 * * 5` runs every Friday at 8AM for an end-of-week review instead.

**Increase the transcript fetch limit** — In node **3. HTTP — Fetch Recent Transcripts**, change `limit: 50` in the GraphQL query body to `100` if your team records more than 50 calls per week to ensure no calls are missed.

**Expand the date window beyond 7 days** — In node **2. Set — Config Values**, change `{days: 7}` in both the `weekStart` and `sevenDaysAgoMs` fields to `{days: 14}` for a bi-weekly analysis window.

**Add a Slack alert for high-objection calls** — After node **12. Code — Combine Analysis Results**, add an IF check: if the `objections` field does not contain "No objections", post an immediate Slack alert to a `#deal-risk` channel so the sales manager can follow up same day.

**Add a Gmail summary to the sales manager** — After node **15. Slack — Send Weekly Report**, add a Gmail node to also email the full weekly digest to your sales manager's inbox as a backup record outside of Slack.

**Filter to specific call types using keywords** — In node **2. Set — Config Values**, edit the `salesKeywords` field to narrow analysis to specific call types — for example, change to `demo,discovery,closing` to analyze only those pipeline stages.

---

## Troubleshooting

**Fireflies returning no transcripts or an auth error:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → API Key
- Make sure your Fireflies plan includes API access — some free plans do not

**Workflow not triggering on Monday:**
- Confirm the workflow is toggled to Active — it will not run on a schedule if inactive
- Check that the cron expression in node **1. Schedule — Every Monday 9AM** is `0 9 * * 1` — any edit to this field can break the schedule
- To test immediately, click on node 1 and use the manual Execute option

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **13. Google Sheets — Log Call Analysis** is connected and not expired
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** matches the ID in your sheet URL exactly
- Confirm the tab is named **Sales Call Analysis** exactly — capitalization and spacing must match `sheetName` in Config Values

**AI returning incomplete or missing fields:**
- The schema parser in node **11. Parser — Structured Call Analysis** enforces all six fields — if output is missing fields, check the execution log of node **9. AI Agent — Analyze Sales Call** for the raw GPT response
- Confirm the OpenAI credential in node **10. OpenAI — GPT-4o-mini Model** is connected and your account has available credits
- If transcripts are very short, GPT may have little content to extract — the fallback text ("No objections detected", etc.) will be used automatically

**Slack report not arriving:**
- Confirm the Slack OAuth2 credential in node **15. Slack — Send Weekly Report** is connected and authorized
- Check that the channel name in node **2. Set — Config Values** includes the `#` prefix and matches your actual Slack channel name exactly
- Type `/invite @n8n` in your Slack channel to ensure the bot has posting permission

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
