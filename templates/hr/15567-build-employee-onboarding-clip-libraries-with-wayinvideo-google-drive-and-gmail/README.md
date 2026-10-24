# 👥 Build employee onboarding clip libraries with WayinVideo, Google Drive and Gmail

> ⚡ **33 views** · 👥 [HR & Recruitment](../)

## Description

### Description

Submit a new employee's details and your onboarding recording URL via a simple form and the workflow automatically extracts the specific training moments relevant to that employee. WayinVideo's Find Moments API scans the full recording and returns up to 5 matching clips in HD 720 quality with animated captions and download links — which are downloaded immediately before the export links expire and uploaded to Google Drive with a structured filename. Every clip is saved to the Onboarding Clip Library Google Sheet with the Drive link, and a personalized HTML welcome email is sent to the new employee with the full recording link and instructions. Built for HR teams, learning and development managers, and People Operations teams who run recurring onboarding sessions and want to deliver specific training clips to each new employee automatically — without manually editing recordings.

---

## What This Workflow Does

- **Finds up to 5 topic-specific training moments per recording** — [WayinVideo](https://wayin.ai/api/) scans the full onboarding session and returns only the clips that match your training topic query — not the entire recording
- **Exports clips in HD 720 with animated captions** — Every clip is generated with animated captions in the original language so new employees can watch silently or with sound
- **Downloads clips before export links expire** — WayinVideo export links last only 24 hours — the workflow downloads and uploads to Drive immediately so clips are available permanently
- **Creates structured Drive filenames per clip** — Each file is named `EmployeeName_Department_Clip_N_Score_S.mp4` so your Drive folder is organized and searchable by employee and topic
- **Saves 15 metadata fields to Google Sheets** — Employee name, email, department, start date, clip title, description, timestamp, score, tags, and a direct Drive link are all logged per clip
- **Sends a personalized HTML welcome email** — The new employee receives a branded HTML email addressed by first name with the full recording link, their department, start date, and instructions to access their clips
- **Polls automatically until clips are ready** — Waits 90 seconds then checks every 30 seconds until WayinVideo finishes processing the recording

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- Google Drive (one folder for onboarding clips)
- Google Sheets (one sheet with a tab named **Onboarding Clip Library**)
- Gmail account

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Clips Result**)
- Google Drive OAuth2
- Google Sheets OAuth2
- Gmail OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Clips Result**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Query tip** — The Training Topic to Extract field works best with 4–6 descriptive words. Examples that work well: "company culture and team values explanation", "HR leave policy and benefits overview", "tools and software walkthrough for new employees". Single words like "culture" or "HR" will return poor results.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Find Moments** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Clips Result** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Get your Google Drive folder ID** — Open your target Google Drive folder in a browser → the folder ID is the string at the end of the URL after `/folders/`

6. **Connect Google Drive** — Open node **9. Google Drive — Upload Clip** → click the credential dropdown → add Google Drive OAuth2 → authorize access → replace `YOUR_GDRIVE_FOLDER_ID` in the folder field with your actual folder ID

7. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Onboarding Clip Library** → add these 15 column headers in row 1: `Employee Name`, `Employee Email`, `Department`, `Start Date`, `Company`, `Topic`, `Clip Title`, `Description`, `Timestamp`, `Score`, `Tags`, `Drive Link`, `Drive File ID`, `Onboarding Recording URL`, `Date Added`

8. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL

9. **Connect Google Sheets** — Open node **10. Google Sheets — Save to Library** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

10. **Connect Gmail** — Open node **11. Gmail — Send Welcome Email** → click the credential dropdown → add Gmail OAuth2 → complete the Google authorization flow

11. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — New Employee + Onboarding Details** → open it in a browser to submit your first new employee

---

## How It Works (Step by Step)

**Step 1 — Form: New Employee + Onboarding Details**
Your HR team opens the form URL and fills in seven fields: the onboarding recording URL, the new employee's full name, their email address, their department, their start date, the training topic to extract (4–6 descriptive words), and the company name. Submitting the form starts the entire pipeline.

**Step 2 — HTTP: WayinVideo — Submit Find Moments**
The recording URL, training topic query, and a project name (auto-built as `Onboarding — EmployeeName — Department`) are sent to WayinVideo's Find Moments API. The request asks for up to 5 clips at HD 720 quality, animated captions in the original language using caption template `temp-7`, export enabled so download links are generated, and AI reframe disabled so the clips stay in their original aspect ratio. WayinVideo returns a task ID.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to scan the full recording.

**Step 4 — HTTP: WayinVideo — Get Clips Result**
A GET request checks the find-moments results endpoint using the task ID from step 2. It returns the current status and, once complete, the full clips array with title, description, export download link, relevance score, tags, and timestamps for each matched moment.

**Step 5 — IF: Find Moments Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the clips are ready and the workflow moves forward to splitting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When clips are not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Split Each Clip**
The clips array is split into individual rows — one per clip. Each row carries the clip title, export link, relevance score, tags, description, start time in milliseconds, end time in milliseconds, and clip index number. If no clips are returned, the step throws a clear error with a suggestion to try a more descriptive query.

**Step 8 — HTTP: Download Clip File**
For each clip, the workflow fetches the .mp4 file from the WayinVideo export link and downloads it as a binary file. This step runs immediately after splitting so no time is wasted before export links expire.

**Step 9 — Google Drive: Upload Clip**
The downloaded clip is uploaded to your specified Google Drive folder. The filename is auto-generated as `EmployeeName_Department_Clip_N_Score_S.mp4` — for example `Sarah_Johnson_Marketing_Clip_1_Score_87.mp4`. Spaces in the employee name and department are replaced with underscores. Google Drive returns the file ID and web view link.

**Step 10 — Google Sheets: Save to Library**
One row is appended to your Onboarding Clip Library tab with all 15 columns. The Drive Link is constructed directly from the file ID as `https://drive.google.com/file/d/FILE_ID/view` — so every row has a clickable link to the clip without any manual copying. The timestamp column shows the clip's start and end time in seconds.

**Step 11 — Gmail: Send Welcome Email**
After all clips are saved to the sheet, a personalized HTML email is sent to the new employee's email address. The email is addressed by their first name (extracted from the full name), confirms their training clips are ready, shows the topic, department, and start date, includes a link to the full onboarding recording, and instructs them to check the Onboarding Clip Library sheet for their clip links. The sender name is set to the company name from the form.

The final result is up to 5 clips in Google Drive, a fully populated sheet row per clip, and a branded welcome email in the new employee's inbox — all triggered by one HR form submission.

---

## Key Features

✅ **Training topic query drives clip selection** — You describe what training content to extract using plain English — WayinVideo finds only the relevant moments rather than clipping the entire recording
✅ **HD 720 with animated captions on every clip** — Every exported clip has animated captions built in using caption template `temp-7` — ready to share without any post-processing
✅ **Clips downloaded before 24-hour expiry** — WayinVideo export links expire — the workflow downloads and uploads to Drive immediately so your library is permanent
✅ **Structured Drive filename per employee** — Files are named with the employee name, department, clip number, and score so any team member can search Drive and instantly know what each file is
✅ **Drive link constructed from file ID** — The Google Sheets row includes a ready-to-click Drive link built directly from the uploaded file's ID — no manual copying or linking required
✅ **Personalized first-name HTML email** — The welcome email addresses the employee by their first name, includes their specific department and start date, and links to the full recording
✅ **WayinVideo project named per employee** — Each submission creates a named WayinVideo project (`Onboarding — Employee — Department`) so your WayinVideo dashboard stays organized across all employees

---

## Customisation Options

**Increase the number of clips per employee** — In node **2. WayinVideo — Submit Find Moments**, change `"limit": 5` to a higher number such as `8` to extract more training moments — useful for longer onboarding sessions covering many topics.

**Upgrade clips to Full HD** — In node **2. WayinVideo — Submit Find Moments**, change `"resolution": "HD_720"` to `"resolution": "FULL_HD_1080"` for higher quality clips — useful when sharing onboarding recordings with enterprise clients or executives.

**Add a Slack notification to the HR team** — After node **11. Gmail — Send Welcome Email**, add a Slack step that posts the employee name, department, start date, and number of clips created to a `#hr-team` or `#onboarding` channel so your team is notified every time a new employee's clips are ready.

**Sort clips into employee-specific Drive subfolders** — In node **9. Google Drive — Upload Clip**, change the folder ID to a dynamic expression that creates or selects a subfolder named after the employee — so each new hire's clips are in their own folder rather than all together.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification to HR instead of looping indefinitely.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Find Moments** is replaced with your actual API key — not the placeholder text
- Confirm the same replacement was made in node **4. WayinVideo — Get Clips Result** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL or request body format is invalid

**No clips returned (empty clips array):**
- The training topic query is likely too short or too vague — WayinVideo's Find Moments needs descriptive phrases of 4–6 words; try "company culture and team values explanation" instead of just "culture"
- Check that the recording URL is publicly accessible — private Zoom links, expired recordings, or login-required videos will not be processed
- Review the execution log of node **4. WayinVideo — Get Clips Result** for the full WayinVideo response — it may contain a specific error or an empty clips array with a reason

**Workflow stuck in the polling loop:**
- Open the execution log of node **4. WayinVideo — Get Clips Result** and check the raw response status — WayinVideo may have returned FAILED with a specific reason
- If the loop runs indefinitely, deactivate the workflow, fix the recording URL or query, and resubmit the form
- Confirm the recording URL does not require authentication — Zoom recordings with password protection or region-blocked videos will cause processing to stall

**Google Drive upload failing:**
- Confirm the Google Drive OAuth2 credential in node **9. Google Drive — Upload Clip** is connected and not expired — re-authorize if needed
- Confirm `YOUR_GDRIVE_FOLDER_ID` is replaced with just the folder ID from the URL — not the full Drive URL
- If step 8 fails to download the clip file (e.g. the export link expired before download), step 9 will also fail — check the execution log of step 8 first

**Google Sheets not saving rows or Gmail not sending:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **10. Google Sheets — Save to Library** is replaced with your actual Sheet ID and the tab is named **Onboarding Clip Library** exactly
- Confirm the Gmail OAuth2 credential in node **11. Gmail — Send Welcome Email** is connected — re-authorize if you see an authentication error in the execution log
- Check that the New Employee Email field in the form contains a valid email address — an invalid or missing address will cause the Gmail step to fail

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
