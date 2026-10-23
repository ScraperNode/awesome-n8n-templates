# 🎫 Triage video bug support tickets using WayinVideo and GPT-4o-mini to Google Sheets

> ⚡ **21 views** · 🎫 [Ticket Management & Triage](../)

## Description

Submit a screen recording URL, customer name, and bug type through a simple web form. The workflow automatically scans the recording using [WayinVideo](https://wayin.ai/api/) AI to pinpoint the exact moment the bug occurs, then uses GPT-4o-mini to write a structured support ticket with priority, steps to reproduce, and a fix suggestion. The completed ticket is saved instantly as a new row in your Google Sheet — ready for your dev team. Built for support agents, QA teams, and SaaS companies who want to triage bugs faster without manual video scrubbing.

---

## What This Workflow Does

- **AI bug detection** — Sends the screen recording to WayinVideo, which scans the video and finds the exact timestamp where the bug occurs
- **Smart polling loop** — Automatically waits 45 seconds then checks for results, retrying until WayinVideo returns the bug moments
- **Structured ticket generation** — GPT-4o-mini reads the bug moment data and writes a full support ticket with priority level, steps to reproduce, expected vs actual behaviour, and a suggested fix
- **Auto-triage and assignment** — The AI decides severity (Critical to Low) and which team should own it (Backend, Frontend, QA, DevOps, or Product)
- **Google Sheets logging** — Every ticket is saved with customer name, bug type, recording URL, timestamp, ticket content, status, and submission date
- **Web form trigger** — A built-in form lets any support agent submit a bug report without touching n8n directly

---

## Setup Requirements

### Tools you'll need

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account + API key (for AI video bug detection)
- OpenAI API key (GPT-4o-mini for ticket generation)
- Google account with Google Sheets OAuth access

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Get your WayinVideo API key** — Sign in to your WayinVideo account at [WayinVideo](https://wayin.ai/api/), go to your API settings, and copy your key.

2. **Add the WayinVideo key to the Find Bug Moments step** — Open the node called **2. WayinVideo — Find Bug Moments** and replace `YOUR_WAYINVIDEO_API_KEY` in the Authorization header with your actual key.

3. **Add the WayinVideo key to the Get Bug Moments step** — Open the node called **4. WayinVideo — Get Bug Moments** and replace `YOUR_WAYINVIDEO_API_KEY` in the Authorization header with your actual key.

   &gt; ⚠️ Your WayinVideo API key appears in **two nodes** — replace it in both **2. WayinVideo — Find Bug Moments** and **4. WayinVideo — Get Bug Moments** or the workflow will fail.

4. **Add your OpenAI API key** — In n8n, go to Credentials and create a new OpenAI credential. Paste your API key there. Then connect that credential to the node called **6a. OpenAI — Chat Model (GPT-4o-mini)**.

5. **Create your Google Sheet** — Make a new Google Sheet with a tab named exactly **Bug Tickets**. Add these column headers in row 1:

   | Customer Name | Bug Type | Recording URL | Bug Moments Found | Top Bug Timestamp | Bug Ticket | Status | Date Submitted |

6. **Connect your Google account** — In n8n, create a Google Sheets OAuth2 credential and connect your Google account. Apply that credential to the node called **7. Google Sheets — Save Bug Ticket**.

7. **Add your Google Sheet ID** — Open the node **7. Google Sheets — Save Bug Ticket** and replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID. You can find this in the Google Sheet URL — it is the long string of characters between `/d/` and `/edit`.

8. **Activate the workflow** — Toggle the workflow to Active. Open the form URL from the **1. Form — Bug Recording + Details** node and submit a test bug report to confirm everything is working.
---

## How It Works (Step by Step)

**Step 1 — Web Form (Bug Recording + Details)**
A support agent opens a web form and fills in three fields: the screen recording URL, the customer's name, and the type of bug (for example: Login Error, Payment Failure, or App Crash). Submitting the form kicks off the entire workflow automatically.

**Step 2 — WayinVideo — Find Bug Moments**
The recording URL is sent to the WayinVideo API with an instruction to search for moments matching the reported bug type. WayinVideo scans the video using AI and starts building a list of the most relevant bug moments, including timestamps and relevance scores. The API returns a job ID that is used in the next steps.

**Step 3 — Wait 45 Seconds**
The workflow pauses for 45 seconds to give WayinVideo time to process the video before checking for results.

**Step 4 — WayinVideo — Get Bug Moments**
Using the job ID from Step 2, the workflow requests the results from WayinVideo. This returns a list of clips, each with a title, description, start and end timestamp, and a relevance score.

**Step 5 — Check: Bug Moments Found?**
The workflow checks whether WayinVideo has returned any bug moment clips yet.
- **If yes** — it moves forward to generate the ticket.
- **If no** — it loops back to Step 3, waits another 45 seconds, and checks again.

&gt; ⚠️ If WayinVideo never returns results (for example, if the URL is broken or the video format is unsupported), this loop will repeat indefinitely. Consider adding a retry limit to avoid runaway executions.

**Step 6 — AI Agent — Generate Bug Ticket**
GPT-4o-mini receives the customer details from the form and the bug moment data from WayinVideo. It writes a complete structured support ticket covering: a one-sentence bug summary, priority level, bug category, exact video timestamp, steps to reproduce, expected vs actual behaviour, which team to assign it to, and a suggested fix.

**Step 7 — Google Sheets — Save Bug Ticket**
The completed ticket is appended as a new row in your Google Sheet. The row includes the customer name, bug type, recording URL, number of bug moments found, the top bug timestamp, the full ticket text, a status of "Open", and the submission date and time.

---

## Key Features

✅ **Exact bug timestamp detection** — WayinVideo pinpoints the precise moment in the recording where the bug occurs, so your dev team doesn't have to watch the whole video
✅ **Auto-priority assignment** — GPT-4o-mini assigns Critical, High, Medium, or Low priority based on the type of bug reported
✅ **Auto-team routing** — The AI decides whether the ticket belongs to Backend Dev, Frontend Dev, QA, DevOps, or Product — no manual triage needed
✅ **Smart retry loop** — The workflow polls WayinVideo automatically every 45 seconds until results are ready, with no manual intervention required
✅ **Structured ticket format** — Every ticket follows the same format with all required fields, making it consistent and ready to import into any project management tool
✅ **Zero-code form** — Support agents submit bug reports through a hosted web form — no n8n access needed
✅ **Full audit trail in Sheets** — Every ticket is logged with submission date, recording URL, and status so nothing falls through the cracks

---

## Customisation Options

**Capture more bug moments** — In the node **2. WayinVideo — Find Bug Moments**, change `"limit": 3` to `"limit": 5` to detect up to five bug moments per recording instead of three.

**Use a more powerful AI model** — In the node **6a. OpenAI — Chat Model (GPT-4o-mini)**, switch from `gpt-4o-mini` to `gpt-4o` for higher-quality ticket writing on complex or ambiguous bugs.

**Send instant Slack alerts** — Add a Slack node after **7. Google Sheets — Save Bug Ticket** to notify your dev channel as soon as a new ticket is saved, including the priority level and timestamp.

**Add a max-retry counter** — To prevent the polling loop from running forever, add a counter variable that increments each loop and an extra condition in **5. If — Bug Moments Found?** to stop after a set number of attempts (for example, 10 retries).

**Push tickets to Jira or Linear** — Replace or add after the Google Sheets node an HTTP Request node that calls the Jira or Linear API to create an issue automatically from the generated ticket content.

**Support multiple languages** — Change `"target_lang": "en"` in **2. WayinVideo — Find Bug Moments** to another language code (for example `"fr"` or `"de"`) to handle recordings in other languages.

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
