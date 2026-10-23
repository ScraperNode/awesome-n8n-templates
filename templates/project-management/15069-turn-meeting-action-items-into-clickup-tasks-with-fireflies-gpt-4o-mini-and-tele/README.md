# 📋 Turn meeting action items into ClickUp tasks with Fireflies, GPT-4o-mini and Telegram

> ⚡ **11 views** · 📋 [Project Management](../)

## Description

### Description

Connect Fireflies to this workflow once and every meeting action item becomes a ClickUp task automatically — no manual note-taking, no copy-pasting. The moment Fireflies finishes transcribing a call, the workflow extracts action items from two sources, uses GPT-4o-mini to parse each one into a clean task with an owner, deadline, and priority, and creates every task in ClickUp via the API. When all tasks are created, you receive a single Telegram message confirming the total count. Built for founders, project managers, and team leads who want zero gap between a meeting ending and the work showing up in their task manager.

---

## What This Workflow Does

- **Triggers automatically on transcription complete** — Fireflies fires the workflow the moment any meeting finishes transcribing, with no manual step needed
- **Extracts action items from two sources** — Combines Fireflies NLP task-flagged sentences and the AI-generated summary list, then deduplicates and caps at 15 items
- **Validates every incoming signal** — Checks for a valid meeting ID and silently discards invalid or test pings before any processing begins
- **Parses each item into a structured task** — GPT-4o-mini converts raw action item text into a verb-first task name, assigns an owner, sets a deadline, and scores a priority from 1 to 4
- **Creates tasks in ClickUp automatically** — Each parsed task is posted to your specified ClickUp list via the API with priority, due date, and a meeting reference in the description
- **Sends one Telegram confirmation** — After all tasks are created, a single message is sent with the meeting title, date, and total task count — no spam per task
- **Exits cleanly when nothing is found** — Meetings with no action items stop silently without errors or empty notifications

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access
- OpenAI account with GPT-4o-mini API access
- ClickUp account with API access and a target list
- Telegram bot (created via @BotFather)

### Credentials Required
- Fireflies API key (pasted into **5. Set — Config Values**)
- ClickUp API token (pasted into **5. Set — Config Values**)
- OpenAI API key
- Telegram Bot credential (connected in n8n)

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **1. Webhook — Fireflies Transcript Done** → copy the webhook URL shown

3. **Register the webhook in Fireflies** — Log in to fireflies.ai → Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → copy your API key

5. **Get your ClickUp API token** — In ClickUp, click your avatar (bottom left) → Settings → Apps → API Token → copy the token

6. **Get your ClickUp List ID** — Open the ClickUp list where tasks should be created → look at the URL bar → copy the number after `/li/` (e.g. in `.../li/90121234567`, the list ID is `90121234567`)

7. **Get your Telegram Chat ID** — Open Telegram → search for `@userinfobot` → send `/start` → it will reply with your chat ID

8. **Fill in Config Values** — Open node **5. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR_CLICKUP_API_TOKEN` | Your ClickUp API token from step 5 |
| `YOUR_CLICKUP_LIST_ID` | Your ClickUp list ID from step 6 |
| `YOUR_TELEGRAM_CHAT_ID` | Your Telegram chat ID from step 7 |
| `YOUR NAME` | Your name (used in the AI prompt context) |
| `YOUR COMPANY NAME` | Your company name (shown in Telegram message) |

9. **Connect OpenAI** — Open node **11. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

10. **Connect Telegram** — Open node **17. Telegram — Send Task Summary** → click the credential dropdown → add your Telegram Bot API credential → open Telegram → send `/start` to your bot before testing

&gt; ⚠️ **Activate the workflow before registering the webhook in Fireflies.** An inactive workflow will not receive signals. Activate first, then paste the URL into Fireflies.

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Transcript Done**
This step listens for a signal from Fireflies. Every time a meeting finishes transcribing, Fireflies sends a request to this webhook URL containing the meeting ID. No manual trigger is needed — it fires automatically after every recorded call.

**Step 2 — Code: Extract Meeting ID**
The meeting ID is extracted from the incoming signal. Fireflies can send the payload in several different formats, so this step checks all possible locations and pulls the ID safely. If no meeting ID is present, the signal is marked as invalid.

**Step 3 — IF: Valid Meeting ID?**
This is the first gate check. If a valid meeting ID was found (YES path), the workflow moves forward to fetch the transcript. If the signal was invalid or empty (NO path), the workflow routes to **4. Set — Invalid Webhook Skip** and stops cleanly without errors.

**Step 4 — Set: Invalid Webhook Skip**
This step handles the invalid signal case. It sets a brief message and the workflow ends here for that trigger.

**Step 5 — Set: Config Values**
Your Fireflies API key, ClickUp API token, ClickUp list ID, Telegram chat ID, your name, and company name are all stored here. The validated meeting ID from step 2 is also carried forward so the transcript fetch can use it directly.

**Step 6 — HTTP: Fetch Transcript**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the full transcript including all sentences with speaker labels and task flags, plus the AI-generated summary containing action items, overview, and keywords.

**Step 7 — Code: Process Action Items**
Action items are collected from two sources simultaneously: sentences that Fireflies NLP flagged as tasks, and the AI-generated action items list from the Fireflies summary. Both lists are combined, duplicates are removed, and the result is limited to 15 items. Meeting metadata (title, date, duration, participants, overview) is also extracted here. If no action items are found at all, a flag is set for the next gate check.

**Step 8 — IF: Action Items Found?**
This is the second gate check. If action items were found (YES path), the workflow continues to AI parsing. If no action items were detected or the transcript was not ready (NO path), the workflow routes to **9. Set — No Action Items Skip** and ends cleanly.

**Step 9 — Set: No Action Items Skip**
This step handles the no-items case. It logs the meeting ID and a skip message, and the workflow ends here.

**Step 10 — AI Agent: Parse Action Items**
GPT-4o-mini receives the meeting context and the full list of raw action items. For each item it returns four structured fields: a clean verb-first task name (maximum 60 characters), the responsible owner extracted from the text (or "Unassigned" if not mentioned), a deadline in YYYY-MM-DD format with relative date logic built in (today, tomorrow, this week, next week), and a priority number from 1 (Urgent) to 4 (Low). Every input item must produce exactly one output task — no skipping.

**Step 11 — OpenAI: GPT-4o-mini Model**
This is the language model powering the parsing step. It runs at temperature 0.2 for precise, consistent structured output and is capped at 1,200 tokens to handle up to 15 tasks per meeting.

**Step 12 — Parser: Structured Task Output**
This step enforces the exact array schema GPT-4o-mini must return. It validates that every task has all four required fields in the correct format before the results move to ClickUp creation, preventing any malformed tasks from reaching your account.

**Step 13 — Code: Split Tasks for Loop**
The array of parsed tasks is converted into individual items — one per task — so each one can be sent to ClickUp separately. A deadline timestamp is calculated in milliseconds for the ClickUp API. A flag called `isLastTask` is set to true only on the final task in the list, which controls when the Telegram notification fires.

**Step 14 — HTTP: Create ClickUp Task**
For each task, a request is sent to the ClickUp API v2. The task is created in your specified list with the task name, a description that includes the meeting title, date, owner, and deadline, plus the priority level, due date, and a tag `meeting-action-item` applied automatically.

**Step 15 — IF: All Tasks Created?**
After each ClickUp task is created, this check reads the `isLastTask` flag. If it is true (YES path — this was the last task), the workflow moves to build the Telegram summary. If it is false (NO path — more tasks still exist), the workflow routes to **18. Set — Loop Continues** and the loop proceeds to the next task.

**Step 16 — Code: Build Telegram Summary**
Once all tasks are created, a clean confirmation message is assembled. It includes the meeting title, date, total number of tasks created, and a reminder to review the tasks in ClickUp. Your company name is included in the footer.

**Step 17 — Telegram: Send Task Summary**
The confirmation message is sent to your Telegram chat ID. This fires exactly once per meeting — after all tasks are in ClickUp — not once per task.

**Step 18 — Set: Loop Continues**
This step handles the non-final tasks in the loop. It sets a brief in-progress message and the loop continues to the next task creation.

---

## Key Features

✅ **Dual-source action item extraction** — Combines Fireflies NLP task flags and the AI summary list for more complete coverage than either source alone
✅ **Fires exactly once per meeting** — The Telegram notification uses an `isLastTask` flag so you receive one clean summary, not one message per task
✅ **Relative deadline logic built in** — GPT understands "by Friday", "next week", and "tomorrow" and converts them to real dates automatically
✅ **Three validation gates** — Invalid webhooks, missing transcripts, and meetings with no action items all exit cleanly without errors or empty tasks
✅ **Priority scoring per task** — Every task is scored 1–4 (Urgent to Low) based on context so your ClickUp list is pre-sorted by importance
✅ **Meeting reference in every task description** — Each ClickUp task includes the meeting title, date, owner, and deadline so your team always knows where the task came from
✅ **`meeting-action-item` tag auto-applied** — Every task created by this workflow is tagged automatically so you can filter and report on meeting-sourced work in ClickUp
✅ **Structured output enforced** — A schema parser validates all four task fields before anything reaches ClickUp — no broken or incomplete tasks

---

## Customisation Options

**Change the maximum task limit** — In node **7. Code — Process Action Items**, change `.slice(0, 15)` to a higher or lower number to control how many action items per meeting are sent to ClickUp.

**Add tasks to different lists by meeting type** — In node **5. Set — Config Values**, add a second list ID (e.g. `clickupSalesListId`). Then add an IF check after step 7 that reads the meeting title — if it contains "sales" or "demo", route to the sales list; otherwise use the default list.

**Send a Slack message instead of or alongside Telegram** — After node **16. Code — Build Telegram Summary**, add a Slack node using the same message text to also post the task summary to a `#meetings` channel for team visibility.

**Add a Google Sheets log** — After node **14. HTTP — Create ClickUp Task**, add a Google Sheets append step to log each task: meeting title, task name, owner, deadline, priority, and ClickUp task ID — giving you a permanent record outside ClickUp.

**Assign tasks to specific ClickUp users** — In node **14. HTTP — Create ClickUp Task**, add an `assignees` field to the JSON body containing ClickUp user IDs. Map owner names from step 13 to their ClickUp IDs using a lookup object in the code step.

---

## Troubleshooting

**Workflow not triggering when a call ends:**
- Confirm the workflow is Active before expecting Fireflies to fire it — inactive workflows do not receive webhooks
- Log in to Fireflies → Settings → Developer Settings → Webhooks → confirm the URL is saved and matches the URL from node **1. Webhook — Fireflies Transcript Done** exactly
- Check that your Fireflies plan includes webhook support

**Fireflies API key error or empty transcript:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **5. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → API Key
- If the transcript returns empty, Fireflies may still be processing — the workflow exits cleanly via **9. Set — No Action Items Skip** in this case

**ClickUp tasks not being created:**
- Confirm `YOUR_CLICKUP_API_TOKEN` in node **5. Set — Config Values** is your personal API token, not an OAuth token — get it from ClickUp avatar → Settings → Apps
- Confirm `YOUR_CLICKUP_LIST_ID` is the numeric ID from the list URL (after `/li/`), not the list name
- Check the execution log of node **14. HTTP — Create ClickUp Task** for the exact API error message — a 401 means wrong token, a 404 means wrong list ID

**Telegram message not arriving:**
- Confirm the Telegram Bot credential in node **17. Telegram — Send Task Summary** is connected with a valid bot token from @BotFather
- Confirm `YOUR_TELEGRAM_CHAT_ID` in node **5. Set — Config Values** is your numeric chat ID — get it from @userinfobot in Telegram
- You must send `/start` to your bot before the first message will be delivered — bots cannot initiate conversations

**AI returning incomplete or wrongly formatted tasks:**
- The schema parser in node **12. Parser — Structured Task Output** validates all four fields — check the execution log of node **10. AI Agent — Parse Action Items** if tasks are missing fields
- If deadlines are returning as placeholder text instead of dates, confirm the action items text contains recognizable timeframes — GPT defaults to a 2-day deadline when no timeframe is mentioned
- Confirm the OpenAI credential in node **11. OpenAI — GPT-4o-mini Model** is connected and your account has available credits

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
