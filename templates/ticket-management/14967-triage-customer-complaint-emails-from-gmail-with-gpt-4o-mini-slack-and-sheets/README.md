# 🎫 Triage customer complaint emails from Gmail with GPT-4o-mini, Slack and Sheets

> ⚡ **88 views** · 🎫 [Ticket Management & Triage](../)

## Description

### Description

Activate this workflow once and it monitors your Gmail inbox every minute automatically. Every incoming email is scanned for complaint keywords — and if a complaint is detected, GPT-4o-mini scores its urgency, identifies the right department, writes a one-line summary, and drafts a ready-to-send reply. The complaint is logged to Google Sheets and a formatted alert is posted to the correct Slack channel instantly. Built for support teams, customer success managers, and small businesses who can't afford to miss or delay a complaint.

---

## What This Workflow Does

- **Automatic inbox monitoring** — Checks your Gmail every minute so no complaint sits unread while your team is busy with other work
- **Keyword-based complaint detection** — Scans subject lines and email bodies for 12 complaint signals and silently ignores everything else
- **AI urgency scoring** — Rates every complaint from 1 to 10 so your team knows at a glance what needs attention first
- **Department routing** — Classifies each complaint as Billing, Technical, or General and sends the alert to the right Slack channel automatically
- **Reply draft generation** — GPT-4o-mini writes a professional, empathetic reply your agent can send immediately — no drafting from scratch
- **Permanent complaint log** — Appends a 12-column record to Google Sheets for every complaint, giving you a searchable history for reporting and pattern analysis
- **Clean non-complaint exit** — Emails that are not complaints pass through silently without triggering any logging or alerts

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Gmail account (the inbox you want monitored)
- OpenAI account with GPT-4o-mini API access
- Slack workspace with OAuth2 app configured
- Google Sheets (one sheet with a tab named **Complaint Log**)

### Credentials Required
- Gmail OAuth2
- OpenAI API key
- Slack OAuth2
- Google Sheets OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Connect Gmail** — Open node **1. Gmail — Inbox Monitor** → click the credential dropdown → select OAuth2 → sign in with the Gmail account you want monitored → authorize access

3. **Fill in your config values** — Open node **2. Set — Config Values** → replace all seven placeholders:

| Field | What to put here |
|---|---|
| `YOUR COMPANY NAME` | Your business name (used in the AI reply) |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Complaint Log` | Leave as-is, or match your sheet tab name exactly |
| `#billing-support` | Your Slack channel for billing complaints |
| `#tech-support` | Your Slack channel for technical complaints |
| `#customer-support` | Your Slack channel for general complaints |
| `support@yourcompany.com` | Your support team's reply-from email |

4. **Connect OpenAI** — Open node **6. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

5. **Connect Google Sheets** — Open node **9. Google Sheets — Log Complaint** → click the credential dropdown → connect your Google account via OAuth2 → make sure your sheet has a tab named exactly **Complaint Log** with these 12 column headers in row 1: `Email ID`, `Received Date`, `Sender Name`, `Sender Email`, `Subject`, `One Line Summary`, `Department`, `Urgency Score`, `Urgency Level`, `Suggested Reply`, `Slack Channel Alerted`, `Logged At`

6. **Connect Slack** — Open node **10. Slack — Send Department Alert** → click the credential dropdown → connect your Slack workspace via OAuth2 → invite the n8n bot to all three complaint channels in Slack (`/invite @n8n` in each channel)

7. **Activate the workflow** — Toggle the workflow to Active — it will begin polling Gmail every minute immediately

---

## How It Works (Step by Step)

**Step 1 — Gmail: Inbox Monitor**
This step checks your Gmail inbox every 60 seconds for new emails. Every new message that arrives is passed to the next step for processing. Nothing is read, flagged, or deleted — it is read-only access.

**Step 2 — Set: Config Values**
Your company name, Google Sheet ID, sheet tab name, three Slack channel names, and support email are stored here as named variables. You set these once and every other step in the workflow uses them automatically.

**Step 3 — Code: Extract Email Fields**
This step pulls the sender name, sender email, subject line, and email body out of the raw Gmail data. The email body is trimmed to 3,000 characters to keep AI processing fast and cost-efficient. A timestamp is also captured for the log.

**Step 4 — IF: Is This a Complaint?**
This is the filter step. It checks whether the subject or body contains any of 12 complaint signals: words like "complaint", "refund", "not working", "unacceptable", "very unhappy", "demand refund", and others. If a match is found (YES path), the email moves forward to AI triage. If no match is found (NO path), the email flows to **11. NoOp — Not a Complaint** and the workflow stops silently — no logging, no alert.

**Step 5 — AI Agent: Triage Complaint**
GPT-4o-mini reads the sender name, subject, and email body. It returns exactly four pieces of data: an urgency score from 1 to 10, the correct department (Billing, Technical, or General), a one-line summary of the complaint, and a ready-to-send reply draft under 80 words addressed to the customer by name.

**Step 6 — OpenAI: GPT-4o-mini Model**
This is the language model powering the triage step. It runs at temperature 0.3 for consistent, structured responses and is capped at 600 tokens to keep costs low per complaint.

**Step 7 — Parser: Structured Triage Output**
This step enforces the exact data structure GPT-4o-mini must return. It validates that urgency score is a number, department is one of the three valid options, and both the summary and reply fields are present. This prevents malformed AI output from reaching your sheet or Slack.

**Step 8 — Code: Combine Triage Data**
All AI results are merged with the original email data here. This step also converts the numeric urgency score into a human-readable label: 1–3 = Low, 4–5 = Medium, 6–7 = High, 8–10 = CRITICAL. It also selects the correct Slack channel based on the department GPT-4o-mini assigned.

**Step 9 — Google Sheets: Log Complaint**
A new row is appended to your Complaint Log sheet with all 12 fields: email ID, received date, sender details, subject, AI summary, department, urgency score, urgency label, suggested reply, which Slack channel was alerted, and the time it was logged.

**Step 10 — Slack: Send Department Alert**
A formatted Slack message is posted to the correct channel — `#billing-support`, `#tech-support`, or `#customer-support` — depending on the department. The message shows the urgency label, score, sender details, subject, AI summary, and the suggested reply text ready for the agent to copy and send.

The final result: your team sees a structured complaint alert in Slack within seconds of the email arriving, with the reply already written.

---

## Key Features

✅ **Runs without any manual trigger** — Gmail polling fires every minute automatically once the workflow is active
✅ **Zero noise for non-complaints** — Regular emails pass through silently with no logging, no alerts, and no wasted API calls
✅ **CRITICAL flag for urgent cases** — Any complaint scoring 8 or above is labelled CRITICAL in Slack so high-risk customers get immediate attention
✅ **Ready-to-send reply included** — Every Slack alert contains a drafted reply addressed to the customer by name — agents copy, review, and send
✅ **Structured AI output enforced** — A schema parser ensures GPT-4o-mini always returns the correct fields in the correct format, preventing broken logs
✅ **Three-channel Slack routing** — Billing, Technical, and General complaints each go to their own channel automatically — no manual sorting
✅ **12-column complaint history** — Every complaint is permanently recorded in Google Sheets for weekly reporting, pattern spotting, and team reviews
✅ **Token-efficient processing** — Email body is capped at 3,000 characters and AI is capped at 600 tokens — keeping costs predictable at scale

---

## Customisation Options

**Add more complaint keywords** — In node **4. IF — Is This a Complaint?**, add more trigger phrases to the condition (e.g. `very frustrated`, `cancel my account`, `escalate`) to catch complaints your current list misses.

**Adjust urgency thresholds** — In node **8. Code — Combine Triage Data**, change the score cutoffs for Low, Medium, High, and CRITICAL to match your team's definition of urgency (e.g. raise CRITICAL from 8 to 9 for a stricter threshold).

**Add a Gmail label to processed complaints** — After node **10. Slack — Send Department Alert**, add a Gmail node set to "Add Label" to tag every processed complaint in your inbox (e.g. "Triaged") so agents know which emails the workflow has already handled.

**Send a copy to email** — After node **8. Code — Combine Triage Data**, add a Gmail Send node to also email the suggested reply and triage details to your support team inbox as a backup alongside Slack.

**Weekly summary report** — Add a Schedule trigger that runs every Monday morning, reads the Google Sheet via a Sheets node, counts complaints by department and urgency level, and posts a summary to a `#support-weekly` Slack channel.

**Route CRITICAL complaints to a separate Slack channel** — In node **8. Code — Combine Triage Data**, add a condition: if `urgencyLabel === 'CRITICAL'`, override `slackChannel` with a dedicated `#escalations` channel so your most urgent cases never get buried.

---

## Troubleshooting

**Gmail not triggering the workflow:**
- Make sure the workflow is toggled to Active — inactive workflows do not poll
- Check that the Gmail OAuth2 credential in node **1. Gmail — Inbox Monitor** is connected and not expired — re-authorize if needed
- Send a test email to the monitored inbox and wait up to 60 seconds for the next poll cycle

**OpenAI credential not working:**
- Confirm the API key is connected in node **6. OpenAI — GPT-4o-mini Model**, not in a different step
- Check that your OpenAI account has available credits
- Verify the key has access to gpt-4o-mini — restricted keys may block this model

**Google Sheets not logging rows:**
- Confirm the Sheet ID in node **2. Set — Config Values** matches the ID in your Google Sheet URL exactly
- Make sure the tab is named **Complaint Log** — the name must match `sheetName` in Config Values exactly, including capitalization
- Check that the Google Sheets OAuth2 credential in node **9. Google Sheets — Log Complaint** is connected and authorized

**Slack alerts not arriving:**
- Confirm the Slack OAuth2 credential in node **10. Slack — Send Department Alert** is connected
- Make sure the n8n bot has been invited to all three channels — type `/invite @n8n` in each channel in Slack
- Check that the channel names in node **2. Set — Config Values** include the `#` prefix and match exactly

**AI returning wrong department or malformed output:**
- The structured output parser in node **7. Parser — Structured Triage Output** enforces the schema — if GPT returns an unexpected format, check the execution log of node **5. AI Agent — Triage Complaint** for the raw output
- If department values are inconsistent, the prompt in node **5** explicitly requires exactly `Billing`, `Technical`, or `General` — any deviation means the AI call failed and you should re-run

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
