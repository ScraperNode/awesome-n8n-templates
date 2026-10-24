# 💬 Send client recap emails after Fireflies meetings using GPT-4o-mini, Gmail and Sheets

> ⚡ **90 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Description

Connect Fireflies to this workflow once and every client meeting you record automatically generates a polished recap email sent directly to your client. The moment transcription finishes, the workflow detects the client's email from the participant list, uses GPT-4o-mini to write a warm 250-word professional recap with key points and action items, and sends it via Gmail with your address as the reply-to. Every sent email is also logged to Google Sheets for tracking. Built for account managers, consultants, and agency owners who want to follow up with clients professionally after every call — without spending 15 minutes writing the email themselves.

---

## What This Workflow Does

- **Triggers automatically when a meeting ends** — Fireflies fires the workflow the moment transcription completes, so the recap reaches your client while the meeting is still fresh
- **Detects the client email intelligently** — Uses three strategies to find the right recipient: looks for an external participant domain, checks the meeting title for an embedded email, then falls back to your default client email
- **Writes a warm professional recap** — GPT-4o-mini produces a 250-word email with a greeting, thank-you opener, key points as bullets, action items, and a sign-off — all grounded in real meeting content
- **Sends the email via Gmail with your reply-to** — The email arrives from your Gmail account and replies come directly back to you, with no AI footprint or Fireflies links visible to the client
- **Extracts the client name from their email** — Converts the email address into a readable first name for the greeting automatically
- **Logs every sent recap to Google Sheets** — Appends a 7-column record per email including meeting date, title, client email, subject, status, and Fireflies link for delivery tracking

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access
- OpenAI account with GPT-4o-mini API access
- Gmail account (the account you want to send recaps from)
- Google Sheets (one sheet with a tab named **Recap Email Log**)

### Credentials Required
- Fireflies API key (pasted into **2. Set — Config Values**)
- OpenAI API key
- Gmail OAuth2
- Google Sheets OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **1. Webhook — Fireflies Transcript Done** → copy the Production URL shown

3. **Register the webhook in Fireflies** — Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → Fireflies API → copy your API key

5. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR FULL NAME` | Your name as it should appear in the email sign-off |
| `you@yourcompany.com` | Your email address (must match the Gmail account you connect in step 8) |
| `YOUR COMPANY NAME` | Your company name (used in the email sign-off and AI prompt) |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `client@example.com` | A fallback email used when no external participant is detected — set this to your most common client email or a test address |
| `yourcompany.com` | Your company's email domain (e.g. `incrementors.com`) — used to identify which participant is the client |

&gt; ⚠️ Do NOT change the `meetingId` field — it is extracted automatically from the Fireflies webhook.

6. **Connect OpenAI** — Open node **6. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

7. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Recap Email Log** → add these 7 column headers in row 1: `Date`, `Meeting Title`, `Client Email`, `Email Subject`, `Status`, `Fireflies URL`, `Logged At`

8. **Connect Gmail** — Open node **8. Gmail — Send Recap Email** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account that matches `senderEmail` in your Config Values → authorize access

9. **Connect Google Sheets** — Open node **9. Google Sheets — Log Sent Recaps** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

10. **Activate the workflow** — Confirm the workflow is Active — Fireflies will now fire it automatically after every recorded meeting

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Transcript Done**
This step listens for a signal from Fireflies. Every time a meeting finishes transcribing, Fireflies sends a request to this webhook URL containing the meeting ID. The workflow fires instantly — no manual trigger is ever needed.

**Step 2 — Set: Config Values**
Your Fireflies API key, sender name, sender email, company name, Google Sheet ID, sheet tab name, default client email, your company domain, and the meeting ID are all stored here. The meeting ID is extracted automatically from all possible Fireflies payload formats.

**Step 3 — HTTP: Fetch Transcript**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the meeting title, date, duration, participants, transcript URL, gist, overview, bullet points, keywords, and action items from the Fireflies summary. Only lightweight summary fields are fetched — no full sentence-by-sentence transcript.

**Step 4 — Code: Extract Data and Detect Client Email**
This step runs three detection strategies to find the client email. First, it scans the participant list for any email address whose domain does not match your company domain — that participant is the client. Second, if no external participant is found, it checks whether an email address is embedded directly in the meeting title. Third, if neither strategy works, it falls back to the `defaultClientEmail` from your config. Once the client email is identified, the first name is extracted from the email address (e.g. `john.smith@client.com` becomes "John Smith") and used as the greeting name. All meeting metadata is also cleaned and formatted here.

**Step 5 — AI Agent: Write Recap Email**
GPT-4o-mini receives the meeting details, Fireflies summary, key points, action items, client name, and sender details. It writes a plain-text email following a fixed structure: a greeting using the client's name, a warm thank-you opener referencing the meeting topic, 3–4 bullet points summarizing key discussion points from the real meeting content, a next steps section listing action items, a warm closing sentence, and a sign-off with your name and company. The email contains no AI mentions, no Fireflies links, and no internal notes.

**Step 6 — OpenAI: GPT-4o-mini Model**
This is the language model powering the writing step. It runs at temperature 0.6 for a natural, warm writing style — not too creative and not too robotic — and is capped at 600 tokens to keep the email within the 250-word target.

**Step 7 — Code: Prepare Email Fields**
The AI-generated email body is read and validated — if it is under 50 characters, the step throws an error and stops rather than sending a broken email. The email subject line is assembled automatically as: `Meeting Recap — [Meeting Title] — [Meeting Date]`. All fields needed for both sending and logging are packaged into one clean output.

**Step 8 — Gmail: Send Recap Email**
The recap email is sent to the detected client email address. Your sender email is set as the reply-to address so any client reply comes directly back to your inbox. The email has no n8n attribution footer.

**Step 9 — Google Sheets: Log Sent Recaps**
At the same time as the email is sent, a new row is appended to your Recap Email Log tab with all 7 columns: meeting date, meeting title, client email, email subject, status (always "Sent"), the Fireflies transcript URL, and the logged-at timestamp. Both steps 8 and 9 run simultaneously — logging never delays sending.

---

## Key Features

✅ **Three-strategy client email detection** — Finds the right recipient from participant domain, meeting title, or fallback — no manual input needed per meeting
✅ **No AI footprint in the email** — The prompt explicitly forbids any mention of AI, automation, or Fireflies — the email reads as if you wrote it personally right after the call
✅ **Reply-to set to your address** — Client replies go directly to your inbox, not to an n8n webhook or unmonitored address
✅ **Client name extracted automatically** — The first name is parsed from the client's email address and used in the greeting without any manual entry
✅ **Parallel sending and logging** — Gmail sends and Google Sheets logs run at exactly the same time — the sheet is always current
✅ **Error guard on AI output** — If GPT fails to generate a proper email body, the workflow stops cleanly rather than sending a blank or broken message to a client
✅ **Auto-generated subject line** — The subject is assembled from the meeting title and date automatically — consistent format every time, no editing needed
✅ **Lightweight Fireflies fetch** — Only summary fields are pulled (no full transcript), keeping each API call fast and the response small

---

## Customisation Options

**Add CC to your manager** — In node **8. Gmail — Send Recap Email**, add a `cc` field in the options and set it to your manager's email address so they are automatically copied on every client recap without you having to remember.

**Change the email tone** — In node **5. AI Agent — Write Recap Email**, edit the prompt instruction from "warm professional" to "formal" or "casual" to match your relationship with different client types — you can also add client-specific instructions like "this client prefers very brief emails."

**Send a Slack notification after every sent recap** — After node **8. Gmail — Send Recap Email**, add a Slack node that posts to a `#client-updates` channel with the client email, meeting title, and a note that the recap was sent — giving your team visibility without checking the sheet.

**Add a 10-minute delay before sending** — After node **7. Code — Prepare Email Fields**, add a Wait step set to 10 minutes before the Gmail step — giving you a window to check the Google Sheet log and cancel if something looks wrong before the client receives it.

**Use a different email for different client domains** — In node **4. Code — Extract Data and Detect Client Email**, add a lookup object that maps known client domains to specific sender names or email addresses — useful for agencies managing multiple branded accounts.

---

## Troubleshooting

**Workflow not triggering when a meeting ends:**
- Confirm the workflow is Active — inactive workflows do not receive Fireflies webhooks
- Log in to app.fireflies.ai → Settings → Developer Settings → Webhooks → confirm the URL matches the Production URL from node **1. Webhook — Fireflies Transcript Done** exactly
- Fireflies only fires webhooks for meetings where you are the organizer — guest meetings will not trigger it

**Email sent to the wrong person or to the fallback address:**
- Check that `yourEmailDomain` in node **2. Set — Config Values** is your actual company domain (e.g. `incrementors.com`, not `@incrementors.com`) — the `@` symbol must not be included
- Check the participant list in the Fireflies transcript for this meeting — if all participants share your domain, the workflow will fall through to `defaultClientEmail`
- For internal-only meetings, update `defaultClientEmail` to a safe test address so the fallback does not send to a real client

**Gmail credential error or email not sending:**
- Confirm the Gmail OAuth2 credential in node **8. Gmail — Send Recap Email** is connected with the same Gmail account as `senderEmail` in Config Values — mismatched accounts cause auth failures
- If the Gmail credential expired, re-authorize it in n8n Settings → Credentials → find the Gmail credential → reconnect

**OpenAI not generating the email body:**
- Confirm the API key is connected in node **6. OpenAI — GPT-4o-mini Model** and your account has available credits
- If the generated body is under 50 characters, step **7. Code — Prepare Email Fields** throws an error and stops the workflow — check the execution log of node **5. AI Agent — Write Recap Email** for the raw GPT response

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **9. Google Sheets — Log Sent Recaps** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** is the ID from the sheet URL, not the full URL
- Confirm the tab is named **Recap Email Log** exactly — capitalization must match `sheetName` in Config Values
- Verify all 7 column headers in row 1 match exactly: `Date`, `Meeting Title`, `Client Email`, `Email Subject`, `Status`, `Fireflies URL`, `Logged At`

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: info@incrementors.com
🌐 Website: https://www.incrementors.com/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
