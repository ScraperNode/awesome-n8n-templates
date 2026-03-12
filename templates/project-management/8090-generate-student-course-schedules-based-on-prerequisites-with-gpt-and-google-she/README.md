# 📋 Generate student course schedules based on prerequisites with GPT and Google Sheets

> ⚡ **616 views** · 📋 [Project Management](../)

## Description

Create a **Fall 2025 course schedule** for each student based on what they’ve already completed, catalog prerequisites, and term availability (Fall/Both). Reads students from Google Sheets → asks an AI agent to select **exactly 5 courses** (target **15–17 credits**, no duplicates, prereqs enforced) → appends each student’s schedule to a **schedule** tab.

---

### 🧠 Summary
- **Trigger:** Manual — *“When clicking ‘Execute workflow’”*
- **I/O:** Google Sheets in → OpenAI decisioning → Google Sheets out
- **Ideal for:** Registrars, advisors, degree-planning prototypes

---

### ✅ What this template does
- **Reads**: `StudentID, Name, Program, Year, CompletedCourses` (pipe-separated CourseIDs) from **Sheet1**  
- **Decides**: AI **Scheduling Agent** chooses **5 courses** per student following catalog rules and prerequisites  
- **Writes**: Appends `StudentID` + `Schedule` strings to **schedule** worksheet  
- **Credits target**: 15–17 total per term  
- **Catalog rules** (enforced in the agent prompt):
  - Use **Fall** or **Both** courses for Fall 2025
  - Enforce **AND** prereqs (e.g., `CS-102|CS-103` means both)
  - Priority: **Major Core → Major Elective → Gen Ed** (include Gen Ed if needed)
  - No duplicates or already-completed courses
  - Prefer **200-level** progression when prereqs allow

---

### ⚙️ Setup (only 2 steps)

#### 1) Connect Google Sheets (OAuth2)
- In **n8n → Credentials → New → Google Sheets (OAuth2)**, sign in and grant access  
- In the Google Sheets nodes, select your spreadsheet and these tabs:
  - **Sheet1** (input students)
  - **schedule** (output)

&gt; Example spreadsheet (replace with your own):  
&gt; - Input: `.../edit#gid=0`  
&gt; - Output: `.../edit#gid=572766543`

#### 2) Connect OpenAI (API Key)
- In **n8n → Credentials → New → OpenAI API**, paste your key  
- In the **OpenAI Chat Model** node, select that credential and a chat model (e.g., `gpt-4o`)

---

### 📥 Required input (Sheet1)
- **Columns**: `StudentID`, `Name`, `Program`, `Year`, `CompletedCourses`  
- **CompletedCourses**: pipe-separated IDs (e.g., `GEN-101|GEN-103|CS-101`)  
- **Program** names should match those referenced in the embedded catalog (e.g., *Computer Science BS*, *Business Administration BBA*, etc.)

---

### 📤 Output (schedule tab)
- **Columns**:
  - `StudentID`
  - `Schedule` → a selected course string (written one row per course after splitting)

---

### 🧩 Nodes in this template
- **Manual Trigger** → **Get Student Data (Google Sheets)** → **Scheduling Agent (OpenAI)**  
  → **Split Schedule** → **Set Fields** → **Clear sheet** → **Append Schedule (Google Sheets)**



---

### 🛠 Configuration tips
- If you rename tabs, update both **Get Student Data** and **Append Schedule** nodes  
- Keep `CompletedCourses` consistent (use `|` as the delimiter)  
- To store **rationale** as well, add a column to the output and map it from the agent’s JSON

---

### 🧪 Test quickly
1) Add 2–3 sample student rows with realistic `CompletedCourses`  
2) Run the workflow and verify:
   - 5 course rows per student in **schedule**
   - Course IDs respect prereqs & Fall/Both availability
   - Credits sum ~15–17

---

### 🧯 Troubleshooting
- **Sheets OAuth error:** Reconnect “Google Sheets (OAuth2)” and re-select the spreadsheet & tabs  
- **Empty schedules:** Ensure `CompletedCourses` uses `|` and that programs/courses align with the provided catalog names  
- **Prereq violations:** Check that students actually have all AND-prereqs in `CompletedCourses`  
- **OpenAI errors (401/429):** Verify API key, billing, and rate-limit → retry with lower concurrency

---

### 🔒 Privacy & data handling
- Student rows are sent to OpenAI for decisioning. Remove or mask any fields you don’t want shared.  
- Google Sheets retains input/output. Use spreadsheet sharing controls to limit access.

---

### 💸 Cost & performance
- **OpenAI**: Billed per token; cost scales with student count and prompt size  
- **Google Sheets**: Free within normal usage limits  
- **Runtime**: Typically seconds to a minute depending on rows and rate limits

---

### 🧱 Limitations & assumptions
- Works for **Fall 2025** only (as written). For **Spring**, update availability rules in the agent prompt  
- Assumes **catalog** in the agent system message is your source of truth  
- Assumes **Program** names match catalog variants (case/spacing matter for clarity)

---

### 🧩 Customization ideas
- Add a **Max Credits** column to cap term credits per student  
- Include **Rationale** in the sheet for advisor review  
- Add a **“Gen Ed needed?”** flag per student to force at least one Gen Ed selection  
- Export to PDF or email the schedules to advisors/students

---

### 🧾 Version & maintenance
- **n8n version:** Tested on recent n8n Cloud builds (2025)  
- **Community nodes:** Not required  
- **Maintenance:** Update the embedded catalog and offerings each term; keep prerequisites accurate

---

### 🗂 Tags & category
- **Category:** Education / Student Information Systems  
- **Tags:** scheduling, registrar, google-sheets, openai, prerequisites, degree-planning, catalog, fall-term

---

### 🗒 Changelog
- **v1.0.0** — Initial release: Sheets in/out, Fall 2025 catalog rules, prereq enforcement, 5-course selection, credits target

---

## 📬 Contact
Need help customizing this (e.g., cohort logic, program-specific rules, adding rationale to the sheet, or emailing PDFs)?

- 📧 **rbreen@ynteractive.com**  
- 🔗 **Robert Breen** — https://www.linkedin.com/in/robert-breen-29429625/  
- 🌐 **ynteractive.com** — https://ynteractive.com

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
