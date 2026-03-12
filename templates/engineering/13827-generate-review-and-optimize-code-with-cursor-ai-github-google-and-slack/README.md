# ⚒️ Generate, review, and optimize code with Cursor AI, GitHub, Google, and Slack

> ⚡ **104 views** · ⚒️ [Engineering](../)

## Description

A smart, fully automated coding pipeline built inside n8n that leverages Cursor AI to write, refactor, review, and optimize code projects — triggered by a webhook, schedule, or manual prompt. Every output is versioned, stored, and delivered with a detailed review report.

---

### 🎯 What's the Goal?
Eliminate the repetitive overhead of writing boilerplate code, performing code reviews, and refactoring legacy code manually. This workflow turns a plain-text task description into production-ready, reviewed, and optimized code — automatically and at scale — using Cursor AI's deep coding intelligence inside n8n.

---

### 💡 Why Does It Matter?
Software teams lose hundreds of hours to boilerplate writing, manual code reviews, and inconsistent refactoring. AI-assisted coding with Cursor is powerful, but still requires manual triggering. By wiring Cursor into n8n, you get a repeatable, auditable, hands-free coding pipeline that integrates directly with your Git repos, Slack, and storage — making AI code generation a true part of your CI/CD culture, not just a one-off tool.

---

### ⚙️ How It Works
1. Webhook or Schedule triggers the flow with a coding task description
2. Task is classified (Generate / Review / Refactor / Optimize)
3. Cursor AI API is called with the appropriate system prompt & task
4. Raw code output is received and parsed
5. A second Cursor pass performs automated code review & scoring
6. If quality score passes threshold → code is committed to GitHub
7. If score is below threshold → Cursor runs an optimization pass
8. Final code + review report saved to Google Drive
9. Summary logged to Google Sheets
10. Slack notification sent with code snippet preview & Drive link

---

### 🔧 Configuration Requirements
- **Cursor AI API key** (via Cursor developer access or proxy endpoint)
- **GitHub Personal Access Token** (for auto-commit & PR creation)
- **Google Drive OAuth2** (for storing code files & reports)
- **Google Sheets OAuth2** (for logging task history & quality scores)
- **Slack Bot Token** (for team notifications)
- **Optional: OpenAI API key** (for task classification fallback)

---

### 🚀 Setup Guide
1. Import this workflow into your n8n instance
2. Connect all credentials: Cursor API, GitHub, Google Drive, Google Sheets, Slack
3. Open the **Set Task Config** node and fill in:
   - `repo_owner` and `repo_name` (your GitHub target repo)
   - `target_branch` (e.g. `ai-generated` or `main`)
   - `quality_threshold` (score 0–100, recommended: 75)
   - `storage_folder` (Google Drive folder name)
   - `log_sheet_id` (Google Sheets document ID)
4. Test with a **manual webhook POST** containing `{ "task": "Write a Python FastAPI CRUD endpoint for users" }`
5. Review output in Drive and check Slack notification
6. Activate the webhook for live use
7. Optionally activate the daily schedule for batch processing queued tasks
8. Monitor quality scores in Google Sheets and tune the threshold as needed

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
