# 📋 Turn course videos into ClickUp learning tasks with WayinVideo and GPT‑4o‑mini

> ⚡ **47 views** · 📋 [Project Management](../)

## Description

### Description

Submit any course or lecture video URL along with the course title, module name, assignee, due date, and priority and the workflow automatically converts the entire module into a ClickUp task list. [WayinVideo](https://wayin.ai/api/) summarizes the video and extracts key learning highlights, then GPT-4o-mini reads the summary and returns 5–12 structured tasks — each with a title starting with an action verb, a description with what to do and why it matters, a task type, an estimated time, and step-by-step checklist items. Each task is created in ClickUp with your chosen priority and due date, tagged as `course-task` and `learning`, and every task is logged to Google Sheets with the ClickUp Task ID and URL. Built for learning and development teams, student communities, training managers, and knowledge workers who want learning to translate directly into action.

---

## What This Workflow Does

- **Summarizes the course module automatically** — WayinVideo extracts a structured summary with numbered highlights from the video so GPT has real content to build tasks from
- **Extracts 5–12 actionable tasks in pure JSON** — GPT returns a structured JSON array — each task has a title, description, type, estimated minutes, and checklist steps — no free-text parsing needed
- **Prefixes every task title with the course name** — Tasks are created in ClickUp as `[Course Title] Task Title` so your board stays organized when processing multiple modules
- **Maps your priority input to ClickUp numbers** — Urgent, High, Normal, and Low are automatically converted to the correct ClickUp priority value (1–4) so no manual setup is needed
- **Converts the due date to the format ClickUp requires** — The date you type in the form is converted to a Unix timestamp automatically before the ClickUp task is created
- **Creates one ClickUp task per learning objective** — Each extracted task becomes a separate ClickUp task with To Do status, course-task and learning tags, priority, and due date
- **Logs every task to Google Sheets** — Course title, module, task title, type, estimated minutes, total tasks in module, ClickUp Task ID, ClickUp URL, assignee, due date, and priority are all recorded

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- ClickUp account with a List where tasks will be created
- Google Sheets (one sheet with a tab named **Course Tasks Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Summarization** and **4. WayinVideo — Get Summary Results**)
- OpenAI API key
- ClickUp OAuth2 credential + List ID
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Summarization** and **4. WayinVideo — Get Summary Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Get your ClickUp List ID** — Open ClickUp in a browser → navigate to the List where you want tasks created → right-click the List name → click Copy link → the List ID is the last segment of the URL after the final `/`

7. **Connect ClickUp** — Open node **11. ClickUp — Create Task** → click the credential dropdown → add ClickUp OAuth2 → complete the authorization flow → in the List ID field, replace `YOUR_CLICKUP_LIST_ID` with your actual List ID

8. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Course Tasks Log** → add these 14 column headers in row 1: `Course Title`, `Module Title`, `Video URL`, `Task Number`, `Task Title`, `Task Type`, `Estimated Minutes`, `Total Tasks in Module`, `ClickUp Task ID`, `ClickUp Task URL`, `Assigned To`, `Due Date`, `Priority`, `Generated On`

9. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

10. **Connect Google Sheets** — Open node **12. Google Sheets — Log Tasks** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

11. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Course Video + Details** → open it in a browser to submit your first module

---

## How It Works (Step by Step)

**Step 1 — Form: Course Video + Details**
You open the form URL and fill in six fields: the course video URL (YouTube, Zoom, Vimeo, Loom, or any direct link), the course title, the module or lecture title, who to assign tasks to, the task due date (formatted as YYYY-MM-DD), and the task priority (High, Normal, or Low). Submitting the form starts the entire pipeline.

**Step 2 — HTTP: WayinVideo — Submit Summarization**
The course video URL is sent to WayinVideo's Summarization API. WayinVideo accepts the job and returns a task ID confirming the summarization has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to process the video.

**Step 4 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID. It returns the current status and, once complete, the summary text, highlights array, and tags array.

**Step 5 — IF: Summary Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves forward to data extraction. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Extract Summary Data**
The summary text and highlights (formatted as a numbered list) are extracted from the WayinVideo response. All six form inputs are also packaged. Two important conversions happen here: the priority text (e.g. "High") is mapped to the ClickUp priority number (2) using a lookup table — Urgent=1, High=2, Normal=3, Low=4 — and the due date string is converted to a Unix timestamp in milliseconds which is what ClickUp requires.

**Step 8 — AI Agent: Extract Learning Tasks**
GPT-4o-mini receives the module summary, numbered highlights, and full module context in the system prompt. It is instructed to return ONLY a valid JSON array with no extra text — a strict format that makes parsing reliable. Each task in the array must have a title starting with an action verb, a description explaining what to do and why it matters with the video URL included as a reference, a task type chosen from Review, Practice, Build, Implement, or Reflect, a realistic estimated time in minutes between 15 and 120, and 2–3 specific checklist steps. A minimum of 5 tasks and a maximum of 12 must be extracted.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model producing the JSON task array.

**Step 10 — Code: Parse Tasks Array**
The AI output is cleaned of any markdown backticks and parsed as JSON. If parsing fails, the step throws a clear error showing the first 300 characters of the output for debugging. If the array is empty or missing, another error is thrown. Each task in the array is returned as a separate row — one per task — with the course name prefixed to every task title as `[Course Title] Task Title`. The total number of tasks is also carried forward for the sheet log.

**Step 11 — ClickUp: Create Task**
One ClickUp task is created per learning objective in your specified List. The task title, due date timestamp, priority number, status set to To Do, and two tags (`course-task` and `learning`) are all set. ClickUp returns the new task's ID and URL.

**Step 12 — Google Sheets: Log Tasks**
One row is appended to your Course Tasks Log tab for every task created. The row captures all 14 fields: course title, module title, video URL, task number, task title, task type, estimated minutes, total tasks in module, ClickUp Task ID, ClickUp Task URL, assignee, due date, priority, and generation timestamp. Every task is logged immediately after its ClickUp task is created.

---

## Key Features

✅ **Pure JSON output from GPT** — GPT is instructed to return only a JSON array with no extra text — making the output directly parseable without complex regex extraction
✅ **Priority mapped automatically to ClickUp numbers** — Your plain text input (High, Normal, Low) is converted to ClickUp's numeric priority system (1–4) in one step — no manual mapping needed
✅ **Due date converted to ClickUp timestamp format** — The date you type in the form is automatically converted to the Unix millisecond timestamp that ClickUp requires — no manual conversion
✅ **Course name prefixed to every task title** — Tasks appear in ClickUp as `[Course Name] Task Title` so your board stays identifiable when processing multiple courses or modules
✅ **Course-task and learning tags on every task** — All created tasks are automatically tagged so you can filter your entire ClickUp workspace for course-related tasks across any list or project
✅ **Estimated minutes per task** — GPT assigns a realistic completion time to each task so assignees can plan their learning schedule without guessing how long each task will take
✅ **ClickUp Task ID and URL captured in Google Sheets** — Every row in the log includes direct links to the ClickUp task so you can navigate from the sheet to any task in one click

---

## Customisation Options

**Add checklist items to each ClickUp task** — After node **11. ClickUp — Create Task**, add a ClickUp Create Checklist step using the Task ID returned from step 11 and loop through the `checklistItems` array from step 10 to add each step as a checklist item on the task.

**Change the minimum and maximum task count** — In the system prompt of node **8. AI Agent — Extract Learning Tasks**, change `minimum 5 tasks, maximum 12 tasks` to a different range — for example 3–8 for shorter lectures or 8–15 for full-day workshops.

**Send a summary email when all tasks are created** — After node **12. Google Sheets — Log Tasks** (on the last task row), add a Gmail step that sends the assignee a plain-text email listing all task titles, types, estimated times, and ClickUp URLs so they have everything in their inbox.

**Add a Slack notification when tasks are created** — After node **12. Google Sheets — Log Tasks**, add a Slack step that posts the course title, module name, number of tasks created, and a link to the ClickUp List to a `#learning` or `#training` channel.

**Change the ClickUp task status** — In node **11. ClickUp — Create Task**, change `"status": "To Do"` to match your ClickUp List's actual status names — for example `"status": "Backlog"` or `"status": "Learning"` if your List uses custom statuses.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Course Video + Details** after activating — URLs copied before activation will not work
- Make sure all six fields are filled in — all are marked required

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Summarization** is replaced with your actual API key
- Confirm the same key is in node **4. WayinVideo — Get Summary Results** — both steps require it
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported

**GPT returning a parse error (JSON parsing failed):**
- Check the execution log of node **8. AI Agent — Extract Learning Tasks** for the raw output — if GPT returned markdown code blocks with backticks, node **10. Code — Parse Tasks Array** will strip them, but if GPT added other text before or after the array, parsing can fail
- The error message in node 10 shows the first 300 characters of the raw output to help diagnose — look at what GPT returned and whether it is valid JSON
- Confirm your OpenAI account has credits — a failed API call can produce an empty or error response that looks like a JSON parse problem

**ClickUp tasks not being created:**
- Confirm the ClickUp OAuth2 credential in node **11. ClickUp — Create Task** is connected and not expired — re-authorize if needed
- Confirm `YOUR_CLICKUP_LIST_ID` has been replaced with your actual List ID — the ID is the last segment of the URL when viewing the list in ClickUp in a browser
- Check that your ClickUp account has permission to create tasks in the target List — shared or read-only lists will reject task creation

**Google Sheets not logging rows:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **12. Google Sheets — Log Tasks** is replaced with your actual Sheet ID from the URL
- Confirm the tab is named **Course Tasks Log** exactly and all 14 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, ClickUp, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
