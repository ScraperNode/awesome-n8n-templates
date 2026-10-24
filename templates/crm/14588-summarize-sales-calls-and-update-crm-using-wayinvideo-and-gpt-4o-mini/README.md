# 🤝 Summarize sales calls and update CRM using WayinVideo and GPT-4o-mini

> ⚡ **150 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description

Paste any sales call recording URL into a form — this n8n workflow automatically transcribes the call using [WayinVideo](https://wayin.ai/api/), extracts structured CRM data with AI, and saves a complete report directly to your shared Google Doc.** No manual note-taking, no missed action items, no forgotten follow-ups. Just submit the recording and your CRM notes write themselves.

Built for sales teams, digital marketing agencies, and freelancers who want to turn every client call into structured, searchable CRM data — automatically.

---

## What This Workflow Does

This automation handles your complete call-to-CRM pipeline:

- **Form-triggered input** — Salesperson submits a Zoom or Google Meet recording URL plus client details via a simple web form and the workflow starts instantly
- **AI transcription** — WayinVideo automatically generates a speaker-labeled transcript from the recording, identifying who said what and when
- **Smart polling loop** — Waits and retries every 45 seconds until transcription is fully complete before moving forward
- **AI-powered CRM extraction** — GPT-4o-mini analyzes the full transcript and extracts deal status, action items, client objections, buying signals, pricing discussed, and next follow-up date
- **Auto-save to Google Docs** — Appends the complete CRM report to your shared team Google Doc with a timestamp and separator for every call
- **Zero manual work** — No editing, no copy-paste, no summarizing. Submit the URL and your CRM updates itself

---

## Setup Requirements

### Tools You'll Need

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access
- OpenAI account with API access (GPT-4o-mini)
- Google account with Google Docs access

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

**1. Get Your WayinVideo API Key**

WayinVideo is the transcription engine that converts your call recording into a speaker-labeled text transcript.

1. Go to [WayinVideo](https://wayin.ai/api/) and create or log into your account
2. Navigate to your Dashboard → API section
3. Copy your Bearer API token
4. Open the **2. WayinVideo — Submit Transcript** node in n8n
5. Replace `YOUR_WAYIN_API_KEY` in the Authorization header with your actual token
6. Open the **4. WayinVideo — Get Transcript** node
7. Replace `YOUR_WAYIN_API_KEY` in that node's Authorization header as well

&gt; ⚠️ The API key appears in **two separate nodes** — Submit Transcript and Get Transcript. You must replace it in both or the workflow will fail at the polling step.

---

**2. Connect Your OpenAI Account**

OpenAI's GPT-4o-mini is the AI brain that reads the transcript and writes the structured CRM report.

1. In n8n, go to **Credentials → Add Credential → OpenAI API**
2. Paste your OpenAI API key (get it from [platform.openai.com](https://platform.openai.com) → API Keys)
3. Open the **OpenAI Chat Model — GPT-4o-mini** node
4. Select your newly added OpenAI credential from the dropdown

---

**3. Connect Google Docs and Set Your Document**

This is where every completed CRM report gets saved automatically.

1. In n8n, go to **Credentials → Add Credential → Google Docs OAuth2 API**
2. Complete the Google OAuth authentication flow
3. Open the **7. Google Docs — Save CRM Report** node
4. Select your Google Docs credential
5. Replace `YOUR_GOOGLE_DOC_URL_OR_ID` with your actual Google Doc ID

**How to find your Google Doc ID:**
Open your Google Doc in the browser. The URL will look like:
`https://docs.google.com/document/d/`**`1aBcDeFgHiJkLmNoPqRsTuVwXyZ`**`/edit`
Copy only the long string of characters between `/d/` and `/edit` — that is your Doc ID.

---

**4. Activate the Workflow and Share the Form**

1. Toggle the workflow **Active** at the top of the n8n editor ✅
2. Click the **1. Form — Call Recording + Details** node
3. Copy the **Production Form URL**
4. Share this URL with your sales team — anyone can now submit call recordings without needing access to n8n

---

## How It Works (Step by Step)

**Step 1 — Web Form Trigger**
A salesperson opens the form and fills in four fields: the call recording URL (Zoom, Google Meet, or any accessible video link), the client or company name, their own name, and the product or service discussed in the call. Clicking submit triggers the entire workflow instantly.

**Step 2 — Submit Recording to WayinVideo**
The workflow sends the recording URL to the WayinVideo transcription API. WayinVideo processes the audio, identifies different speakers automatically, and returns a Job ID. That Job ID is stored and used in the next check to retrieve the completed transcript.

**Step 3 — Wait 45 Seconds**
The workflow pauses for 45 seconds to give WayinVideo time to process the recording. This prevents the next step from checking too early and receiving an empty or incomplete response.

**Step 4 — Poll for Transcript Result**
Using the Job ID from Step 2, the workflow calls the WayinVideo results endpoint to check whether the transcript is ready. The response includes a transcript array with each speaker's lines, their speaker label, and a timestamp in milliseconds.

**Step 5 — Is the Transcript Ready? (Smart Retry Loop)**
A check runs to see whether the transcript array contains any data:

- **YES (transcript ready)** → The workflow moves forward and passes the full transcript to the AI report generator
- **NO (still processing)** → The workflow loops back to Step 3, waits another 45 seconds, and checks again automatically

This retry loop runs on its own every 45 seconds until transcription is complete — no manual re-runs needed.

**Step 6 — AI Agent Generates CRM Report**
GPT-4o-mini receives the full speaker-labeled transcript alongside the call details from the form. It analyzes the conversation and writes a structured CRM report covering: call summary, action items, deal status with reasoning, client objections, buying signals, pricing discussed, next follow-up timeline, and overall call sentiment.

**Step 7 — Save Report to Google Docs**
The completed CRM report is appended to your shared Google Doc. Each entry is separated by a clear header line showing the client name, salesperson name, and exact timestamp — so your full call history stays organized and searchable in one document.

---

## Key Features

✅ **Zero manual CRM entry** — AI extracts and writes all CRM data from the raw transcript automatically

✅ **Speaker identification** — WayinVideo labels who is speaking at each point, so the AI knows exactly who is the salesperson and who is the client

✅ **Smart retry loop** — Auto-checks every 45 seconds until transcription is complete, no timeouts, no manual re-runs

✅ **Deal status classification** — AI automatically categorizes each call as Hot Lead, Warm Lead, Cold Lead, Negotiating, Closed Won, or Closed Lost with a one-line reason

✅ **Objection and buying signal detection** — Every client concern and every positive signal is pulled out and listed separately

✅ **Team-ready form** — Share one URL with your whole sales team, no n8n access needed

✅ **Timestamped entries** — Every report is saved with an exact date and time so your call history stays chronologically organized

✅ **Supports any recording platform** — Works with Zoom, Google Meet, Loom, or any publicly accessible video URL

---

## Customisation Options

**Send a Slack notification after each report is saved:**
Add a Slack node after the **7. Google Docs — Save CRM Report** step. Map the client name, deal status, and salesperson name into the message so your sales manager gets an instant alert every time a new call is logged.

**Switch to GPT-4o for higher accuracy:**
Open the **OpenAI Chat Model — GPT-4o-mini** node and change the model from `gpt-4o-mini` to `gpt-4o`. Use this for longer calls or complex enterprise deals where nuance matters.

**Add a max-retry counter to prevent infinite loops:**
Add a counter variable before the Wait node and increment it each loop. Add a second IF branch that stops execution and sends an error alert if retries exceed 5 — this protects against recordings that fail to process.

**Save to a CRM like HubSpot or Notion instead of Google Docs:**
Replace the **7. Google Docs — Save CRM Report** node with a HubSpot, Notion, or Airtable node. Map the AI output fields to the corresponding CRM properties — deal status, contact name, next steps, and notes.

**Increase wait time for longer recordings:**
Change the amount in the **3. Wait — 45 Seconds** node from `45` to `90` or `120` for calls that are over 60 minutes long and need more processing time.

**Add an email confirmation to the salesperson:**
After the Google Docs node, add a Gmail node that sends the salesperson a copy of their CRM report directly to their inbox as soon as it's ready.

---

## Troubleshooting

**WayinVideo API returning an error or empty response:**
- Check that your API key is replaced correctly in **both** the Submit and Get Transcript nodes — not just one
- Make sure the Bearer format is correct: `Bearer YOUR_ACTUAL_KEY` with a space after Bearer
- Confirm your WayinVideo account is active and has API access enabled

**Transcript never becomes ready — workflow keeps looping:**
- Verify the recording URL is publicly accessible (not behind a login or expiry link)
- Try opening the URL in an incognito browser window to confirm it loads without authentication
- Check that the video format is supported by WayinVideo (MP4, Zoom links, and Google Meet recordings all work)

**OpenAI node failing or returning no output:**
- Confirm your OpenAI API key is valid and has available credits
- Check that the credential is properly selected inside the OpenAI Chat Model node
- If the transcript is very long, the token limit may be exceeded — switch to GPT-4o which has a larger context window

**Google Docs node not saving the report:**
- Confirm your Google Docs OAuth credential is connected and not expired — reconnect if needed
- Double-check the Document ID is correct — it should be only the ID string, not the full URL
- Make sure the Google account you authenticated with has edit access to the document

**Form not triggering the workflow:**
- Confirm the workflow is set to **Active** (not just saved)
- Use the **Production URL** from the form node, not the test URL
- If testing inside n8n, use the test execution button and submit the form while the test is running

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com](https://isawow.com)

&gt; **Pro Tip:** Pin your shared Google Doc link to your team's Slack channel or CRM dashboard so every salesperson can view the full call history without needing to search for it after each meeting.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
