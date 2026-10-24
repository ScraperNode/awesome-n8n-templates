# 🔬 Categorize meetings and log time with Fireflies, GPT-4o-mini, and Google Sheets

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description

Connect Fireflies to this workflow once and every meeting you record is automatically categorized and logged to Google Sheets the moment transcription finishes. GPT-4o-mini reads the meeting title, keywords, overview, and action items, then assigns one of seven categories — Sales, Client, Internal, HR, Product, Finance, or Other — along with a confidence rating and a one-sentence reason. Each meeting becomes one clean row in your sheet with emoji labels for instant visual scanning. Built for founders, operations managers, and team leads who want a searchable, sortable record of how their time is actually being spent across meeting types.

---

## What This Workflow Does

- **Triggers instantly when a meeting ends** — Fireflies fires the workflow the moment transcription completes, so no manual step is ever needed
- **Fetches meeting details from Fireflies** — Retrieves the title, date, duration, participants, keywords, overview, and action items for each meeting
- **Assigns one of seven categories** — GPT-4o-mini classifies every meeting as Sales, Client, Internal, HR, Product, Finance, or Other based on actual meeting content
- **Scores confidence per classification** — Returns High, Medium, or Low confidence so you know which categorizations to trust and which to review
- **Adds emoji labels for visual scanning** — Category and confidence values are emoji-coded before logging so your sheet is readable at a glance without filtering
- **Logs one row per meeting to Google Sheets** — Appends a 10-column record automatically including date, title, category, confidence, reason, duration, participants, keywords, and a direct Fireflies link

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Meeting Categories**)

### Credentials Required
- Fireflies API key (pasted into **Set Config Values**)
- OpenAI API key
- Google Sheets OAuth2

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **Fireflies Webhook** → copy the Production URL shown

3. **Register the webhook in Fireflies** — Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → Fireflies API → copy your API key

5. **Get your Google Sheet ID** — Open your Google Sheet in a browser → look at the URL → copy the string between `/d/` and `/edit` (e.g. in `docs.google.com/spreadsheets/d/1ABC123xyz/edit`, the ID is `1ABC123xyz`)

6. **Fill in Config Values** — Open node **Set Config Values** → replace the two placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR_GOOGLE_SHEET_ID` | Your Google Sheet ID from step 5 |

&gt; ⚠️ Do NOT change the `meetingId` field — it is extracted automatically from the Fireflies webhook and must remain as-is.

7. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Meeting Categories** → add these 10 column headers in row 1: `Date`, `Meeting Title`, `Category`, `Confidence`, `Reason`, `Duration (min)`, `Participants`, `Keywords`, `Fireflies URL`, `Logged At`

8. **Connect OpenAI** — Open node **OpenAI Chat Model** → click the credential dropdown → add your OpenAI API key → test the connection

9. **Connect Google Sheets** — Open node **Log to Google Sheets** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

10. **Activate the workflow** — Confirm the workflow is Active — Fireflies will now fire it automatically after every recorded meeting

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Webhook**
This step listens for a signal from Fireflies. Every time a meeting finishes transcribing, Fireflies sends a POST request to this webhook URL containing the meeting ID and event type. No manual trigger is needed — it fires automatically after every recorded call where you are the organizer.

**Step 2 — Set: Config Values**
Your Fireflies API key, Google Sheet ID, sheet tab name, and the meeting ID from the webhook are stored here. The meeting ID is extracted automatically from all possible Fireflies payload formats — you never need to enter it manually.

**Step 3 — HTTP: Fetch Transcript from Fireflies**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the meeting title, date, duration, participants, transcript URL, keywords, overview, and action items. Only lightweight summary fields are fetched — no full sentence-by-sentence transcript — keeping the response fast and small.

**Step 4 — Code: Extract Meeting Data**
The Fireflies response is processed into clean, usable fields. Keywords are limited to the top 12, the overview is capped at 600 characters, and action items are limited to the top 5. The meeting date is formatted as a readable date string. If the transcript is not found or not yet ready, the step throws an error and the workflow stops cleanly without creating a blank row in your sheet.

**Step 5 — AI Agent: Categorize Meeting**
GPT-4o-mini receives the meeting title, keywords, overview, action items, participants, and duration. It assigns exactly one category from the seven options and returns three structured fields: the category name, a confidence level (High, Medium, or Low), and a one-sentence plain-text reason for the choice. The model runs at temperature 0.1 for highly consistent, repeatable categorization.

**Step 6 — OpenAI Chat Model**
This is the language model powering the categorization step. It uses GPT-4o-mini at temperature 0.1 and is capped at 150 tokens — only three short fields are needed per meeting, making this extremely cost-efficient at approximately $0.0002 per meeting.

**Step 7 — Structured Output Parser**
This step enforces the exact three-field schema GPT-4o-mini must return. It validates that category, confidence, and reason are all present and correctly typed before the results move forward, preventing any malformed AI output from reaching your sheet.

**Step 8 — Code: Prepare Sheet Row**
The AI output is read and emoji labels are added based on category and confidence. Category emojis: 💰 Sales, 🤝 Client, 🏢 Internal, 👥 HR, 🛠️ Product, 📊 Finance, 📋 Other. Confidence emojis: ✅ High, 🟡 Medium, ⚠️ Low. All meeting metadata from step 4 is combined with the AI output into one complete row ready for logging.

**Step 9 — Google Sheets: Log to Google Sheets**
One row is appended to your Meeting Categories tab with all 10 columns populated: date, meeting title, category with emoji, confidence with emoji, reason, duration in minutes, participants, keywords, Fireflies transcript URL, and the logged-at timestamp.

The final result: every meeting ends with a new row in your Google Sheet — categorized, confidence-rated, and ready to filter or sort by meeting type.

---

## Key Features

✅ **Fires automatically on every meeting** — No manual input ever needed after the one-time webhook setup in Fireflies
✅ **Seven category options cover all meeting types** — Sales, Client, Internal, HR, Product, Finance, and Other handle virtually every business meeting scenario
✅ **Confidence rating per classification** — High, Medium, and Low ratings tell you exactly how certain the AI was so you can spot which rows to review manually
✅ **Emoji-coded for instant visual scanning** — Category and confidence columns use emojis so you can read your sheet at a glance without needing to filter
✅ **Direct Fireflies link in every row** — Each row includes a clickable link back to the full Fireflies transcript so you can open the original meeting in one click
✅ **Ultra-low cost per meeting** — GPT-4o-mini at temperature 0.1 with a 150-token cap costs approximately $0.0002 per meeting — a full year of daily meetings costs less than a dollar
✅ **Structured output enforced** — A schema parser validates all three AI fields before anything reaches your sheet — no broken or incomplete rows
✅ **Lightweight API call** — Only summary fields are fetched from Fireflies (not full sentences), keeping each API call fast and the response small

---

## Customisation Options

**Add your own custom categories** — In node **AI Agent — Categorize Meeting**, edit the category list in the prompt to replace or add categories that match your business (e.g. replace "Finance" with "Investor" or add "Partnership" as an eighth option) — also update the schema in **Structured Output Parser** to match.

**Add a Slack notification for Sales meetings** — After node **Log to Google Sheets**, add an IF check that reads the category field — if it contains "Sales", post a Slack message to your `#sales-team` channel with the meeting title, participants, and Fireflies link for immediate team visibility.

**Filter out internal meetings from the sheet** — In node **Prepare Sheet Row**, add a condition: if the category is "Internal" and confidence is "High", set a `skipLog` flag to true — then add an IF check before **Log to Google Sheets** to bypass logging for confirmed internal meetings and keep your sheet focused on client-facing activity.

**Add a weekly category summary email** — Add a separate Schedule trigger that fires every Monday morning, reads the Meeting Categories sheet via a Google Sheets read step, counts rows by category from the past 7 days, and sends a summary email showing how many Sales, Client, and Internal meetings happened that week.

**Use a different sheet per category** — In node **Prepare Sheet Row**, add logic that maps each category to a different `sheetName` value — then **Log to Google Sheets** will route each meeting to its own dedicated tab (e.g. all Sales calls on a Sales tab, all Client calls on a Client tab).

---

## Troubleshooting

**Workflow not triggering when a meeting ends:**
- Confirm the workflow is Active — inactive workflows do not receive Fireflies webhooks
- Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → confirm the URL is saved and matches the Production URL from node **Fireflies Webhook** exactly
- Note that Fireflies only fires the webhook for meetings where you are the organizer — guest meetings will not trigger it

**Fireflies API key error or transcript not found:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **Set Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → Fireflies API
- If the transcript is not found, Fireflies may still be processing the meeting — this workflow stops cleanly with an error in this case; the meeting will not be logged until you rerun it manually or wait for the next webhook

**OpenAI not categorizing correctly:**
- Confirm the API key is connected in node **OpenAI Chat Model** and your account has available credits
- Check the execution log of node **AI Agent — Categorize Meeting** for the raw GPT response
- If categories are inconsistent, confirm the prompt text in **AI Agent — Categorize Meeting** is intact and has not been accidentally edited

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **Log to Google Sheets** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_SHEET_ID` in node **Set Config Values** is the ID from the sheet URL, not the full URL
- Confirm the tab is named **Meeting Categories** exactly — capitalization must match the `sheetName` value in **Set Config Values**
- Verify all 10 column headers in row 1 match exactly: `Date`, `Meeting Title`, `Category`, `Confidence`, `Reason`, `Duration (min)`, `Participants`, `Keywords`, `Fireflies URL`, `Logged At`

**AI returning a category not in the list:**
- The **Structured Output Parser** enforces the schema — if an unexpected value appears, check the execution log of **AI Agent — Categorize Meeting** for the raw output
- Confirm the seven category names in the prompt match exactly what the schema parser expects: Sales, Client, Internal, HR, Product, Finance, Other

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
