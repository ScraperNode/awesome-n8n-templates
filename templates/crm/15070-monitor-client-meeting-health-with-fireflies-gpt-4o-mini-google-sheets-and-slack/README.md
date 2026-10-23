# 🤝 Monitor client meeting health with Fireflies, GPT-4o-mini, Google Sheets and Slack alerts

> ⚡ **9 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Description

Activate this workflow once and every Monday morning it automatically scans all your client meetings from the past week. It pulls Fireflies sentiment scores per meeting, then sends each transcript to GPT-4o-mini which explains why the sentiment was positive or negative, scores the churn risk, extracts a key quote, and recommends one concrete action. Every meeting is logged to Google Sheets and any negative or high-risk meeting triggers an immediate Slack alert to your dedicated urgent channel. Built for account managers, customer success teams, and agency leads who need early warning on at-risk clients before small problems become lost accounts.

---

## What This Workflow Does

- **Pulls last 7 days of client meetings automatically** — Fetches up to 50 recent Fireflies transcripts and filters to only those recorded this week
- **Extracts Fireflies NLP sentiment scores** — Uses the built-in positive, neutral, and negative percentages already computed by Fireflies per meeting
- **Computes a composite sentiment score** — Converts raw percentages into a single 0–100 score and assigns a label: Positive, Mostly Positive, Neutral, Mostly Negative, or Negative
- **Adds AI context with GPT-4o-mini** — Explains WHY sentiment was what it was, scores churn risk from Low to Critical, and identifies the most important quote from the meeting
- **Logs every meeting to Google Sheets** — Appends a 15-column row per meeting with emoji labels, scores, analysis, and a direct Fireflies link
- **Fires instant Slack alerts for at-risk meetings** — Any meeting with Negative sentiment or High/Critical churn risk triggers an immediate alert to your `#urgent-alerts` channel
- **Exits cleanly with no meetings** — If no meetings were recorded this week, the workflow stops silently without errors

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Client Sentiment Log**)
- Slack workspace with OAuth2 app configured and two channels ready

### Credentials Required
- Fireflies API key (pasted into **2. Set — Config Values**)
- OpenAI API key
- Google Sheets OAuth2
- Slack OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your Fireflies API key** — Log in to fireflies.ai → Settings → Integrations → copy your API key

3. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 2 |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Client Sentiment Log` | Leave as-is, or match your sheet tab name exactly |
| `#client-health` | Your Slack channel for general weekly health monitoring |
| `#urgent-alerts` | Your Slack channel for immediate at-risk client alerts |
| `YOUR COMPANY NAME` | Your company name (used in the AI prompt) |

4. **Connect OpenAI** — Open node **10. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

5. **Create your Google Sheet** — Open Google Sheets → add a tab named exactly **Client Sentiment Log** → add these 15 column headers in row 1: `Week`, `Meeting Date`, `Meeting Title`, `Client Name`, `Duration`, `Participants`, `Sentiment Score`, `Sentiment Label`, `Positive %`, `Negative %`, `GPT Analysis`, `Churn Risk`, `Recommended Action`, `Fireflies URL`, `Logged At`

6. **Connect Google Sheets** — Open node **13. Google Sheets — Log Client Sentiment** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

7. **Connect Slack** — Open node **15. Slack — Send Urgent Alert** → click the credential dropdown → connect your Slack workspace via OAuth2 → invite the n8n bot to both channels in Slack (`/invite @n8n` in each)

8. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Monday at 9AM

&gt; ⚠️ **To test immediately** — Click on node **1. Schedule — Every Monday 9AM** and use the manual Execute option to trigger a test run without waiting for Monday.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Monday 9AM**
This step fires the workflow automatically every Monday morning at 9AM. No manual trigger needed. Once the workflow is active, it runs on its own every week.

**Step 2 — Set: Config Values**
Your Fireflies API key, Google Sheet ID, sheet tab name, both Slack channel names, company name, and the 7-day date window are stored here. Week start and end dates are calculated automatically from today's date so you never need to update them.

**Step 3 — HTTP: Fetch Last 50 Transcripts**
A request is sent to the Fireflies API using your API key. It retrieves the 50 most recent transcripts from your account — title, date, duration, participants, and transcript URL for each. This is a lightweight list fetch; full content comes in a later step per meeting.

**Step 4 — Code: Filter Last 7 Days**
The 50 transcripts are filtered to only those recorded in the past 7 days. Each one that passes becomes its own separate entry so subsequent steps process each meeting individually. If no transcripts exist at all, or none fall within the window, a fallback result is passed forward.

**Step 5 — IF: Meetings Found?**
This is the gate check. If meetings were found (YES path), each one moves forward to full analysis. If no meetings were found this week (NO path), the workflow routes to **6. Set — No Meetings This Week** and stops cleanly.

**Step 6 — Set: No Meetings This Week**
This step handles the empty-week case. It sets a brief message confirming nothing was recorded and the workflow ends here for that run.

**Step 7 — HTTP: Fetch Full Transcript**
For each meeting that passed the filter, a second Fireflies API request retrieves the complete transcript: all sentences with speaker labels, the meeting summary, keywords, action items, and the Fireflies NLP sentiment analytics (positive, neutral, and negative percentages).

**Step 8 — Code: Extract Sentiment Data**
The full transcript is processed here. Sentences are assembled into readable text limited to 4,000 characters for GPT efficiency. The three Fireflies sentiment percentages are combined into a single composite score (0–100) using a weighted formula. A sentiment label is assigned: Positive (60%+ positive), Negative (35%+ negative), Mostly Positive, Mostly Negative, or Neutral. The client name is extracted automatically from the meeting title using common patterns like "Call with [Name]" or "Client | [Name]". Meeting overview, keywords, and action items are also pulled for the AI step.

**Step 9 — AI Agent: Sentiment Analysis**
GPT-4o-mini receives the full meeting context including the Fireflies sentiment scores, overview, keywords, action items, and transcript excerpt. It returns exactly four fields: a 2–3 sentence explanation of why the sentiment was what it was (referencing actual meeting content), a churn risk score (Low, Medium, High, or Critical), one concrete action the account manager should take within 48 hours, and the single most important quote from the meeting.

**Step 10 — OpenAI: GPT-4o-mini Model**
This is the language model powering the analysis step. It runs at temperature 0.3 for consistent, grounded responses and is capped at 500 tokens to keep each analysis concise and costs predictable.

**Step 11 — Parser: Structured Analysis Output**
This step enforces the exact four-field schema GPT-4o-mini must return. It validates that all required fields are present and correctly typed before results move forward, preventing malformed AI output from reaching your sheet.

**Step 12 — Code: Combine Analysis Results**
The AI output is merged with all meeting metadata. Emoji flags are added automatically based on sentiment label (🟢 Positive, 🟡 Mostly Positive, ⚪ Neutral, 🟠 Mostly Negative, 🔴 Negative) and churn risk (✅ Low, ⚠️ Medium, 🚨 High, 🆘 Critical). A `needsAlert` flag is set to true if the sentiment is Negative or Mostly Negative, or if churn risk is High or Critical.

**Step 13 — Google Sheets: Log Client Sentiment**
A new row is appended to your Client Sentiment Log tab for every meeting. All 15 columns are populated including the week date range, meeting details, sentiment score and label with emojis, positive and negative percentages, GPT analysis, churn risk with emoji, recommended action, and a direct Fireflies transcript link.

**Step 14 — IF: Needs Urgent Alert?**
This check reads the `needsAlert` flag set in step 12. If the meeting is negative or high-risk (YES path), an immediate Slack alert fires to your `#urgent-alerts` channel. If the meeting is healthy (NO path), the workflow routes to **16. Set — No Alert Needed** and ends silently for that meeting.

**Step 15 — Slack: Send Urgent Alert**
A formatted Slack alert is posted to your `#urgent-alerts` channel. It includes the client name, meeting title, date, duration, sentiment label with emoji, churn risk level, the GPT explanation of what happened, the key quote in italics, the recommended action, and a direct link to the Fireflies transcript.

**Step 16 — Set: No Alert Needed**
This step handles healthy meetings. It logs a brief confirmation that sentiment and churn risk are within acceptable levels. No Slack message is sent for these meetings.

---

## Key Features

✅ **Fully automated weekly cadence** — Runs every Monday at 9AM with zero input after setup — your team starts the week already knowing which clients need attention
✅ **Dual-layer sentiment analysis** — Combines Fireflies built-in NLP scores with GPT-4o-mini contextual interpretation for deeper insight than numbers alone
✅ **Automatic client name extraction** — Pulls the client name from the meeting title using common naming patterns so your sheet is organized by client, not by meeting ID
✅ **Emoji-coded at a glance** — Every row in Google Sheets and every Slack alert uses emoji flags for instant visual scanning — no need to read every cell
✅ **Churn risk scoring per meeting** — Every meeting gets a Low / Medium / High / Critical rating so you can prioritize which clients need calls this week
✅ **Key quote extracted per meeting** — The single most revealing sentence from the meeting is surfaced in every alert so the account manager has context instantly
✅ **Alert only when needed** — Healthy meetings log silently. Only negative or high-risk meetings fire a Slack alert, keeping your `#urgent-alerts` channel signal-only
✅ **Clean empty-week exit** — No meetings this week means a clean stop — no errors, no blank rows, no empty Slack messages

---

## Customisation Options

**Change the alert trigger threshold** — In node **12. Code — Combine Analysis Results**, the `needsAlert` flag currently fires for Negative and Mostly Negative sentiment. Remove `Mostly Negative` from the check if you only want alerts for clearly Negative meetings to reduce noise.

**Extend the date window to 14 days** — In node **2. Set — Config Values**, change `{days: 7}` in both the `weekStart` and `sevenDaysAgoMs` fields to `{days: 14}` to analyze a bi-weekly window instead of the past 7 days.

**Add a weekly digest to the general Slack channel** — After node **13. Google Sheets — Log Client Sentiment**, add a second Code step that aggregates all meetings into a weekly summary (total meetings, positive count, at-risk count) and post it to `#client-health` as a Monday morning digest alongside the per-meeting urgent alerts.

**Filter to specific client meetings only** — In node **4. Code — Filter Last 7 Days**, add a keyword filter after the date filter: only include transcripts whose title contains words like "client", "customer", or specific client names — excluding internal team meetings from the sentiment log.

**Send a follow-up email for Critical risk meetings** — After node **15. Slack — Send Urgent Alert**, add an IF check for `churnRisk === 'Critical'` and connect a Gmail node to automatically email the account manager with the full analysis, recommended action, and Fireflies link for the most severe cases.

---

## Troubleshooting

**Workflow not triggering on Monday:**
- Confirm the workflow is toggled to Active — it will not run on a schedule if inactive
- Check that the cron expression in node **1. Schedule — Every Monday 9AM** is `0 9 * * 1` exactly — any accidental edit breaks the schedule
- To test immediately, click on node 1 and use the manual Execute option

**Fireflies returning no transcripts or auth error:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → API Key
- Check that your Fireflies plan includes API access — some plans restrict this feature

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **13. Google Sheets — Log Client Sentiment** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** matches the ID in your sheet URL exactly
- Confirm the tab is named **Client Sentiment Log** exactly — capitalization must match `sheetName` in Config Values
- Verify all 15 column headers in row 1 of your sheet match exactly the column names listed in setup step 5

**Slack alerts not arriving:**
- Confirm the Slack OAuth2 credential in node **15. Slack — Send Urgent Alert** is connected and authorized
- Check that `#urgent-alerts` in node **2. Set — Config Values** includes the `#` prefix and matches your channel name exactly
- Type `/invite @n8n` in your `#urgent-alerts` channel to confirm the bot has posting permission
- Check the `needsAlert` flag in the execution log of node **12. Code — Combine Analysis Results** — if it is false, the meeting was classified as healthy and no alert fires

**AI returning incomplete output or wrong churn risk values:**
- The schema parser in node **11. Parser — Structured Analysis Output** validates all four fields — check the execution log of node **9. AI Agent — Sentiment Analysis** for the raw GPT response if fields are missing
- Confirm the OpenAI credential in node **10. OpenAI — GPT-4o-mini Model** is connected and your account has available credits
- If `churnRisk` returns a value other than Low, Medium, High, or Critical, the prompt in node 9 explicitly restricts to those four options — re-check the prompt text is intact

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
