# 👥 Automate candidate rejections with Google Sheets, GPT-4o-mini, Gmail & ClickUp

> ⚡ **56 views** · 👥 [HR & Recruitment](../)

## Description

## Description
This workflow automates the candidate rejection process after interviews. It retrieves interview feedback from Google Sheets, uses AI to structure and score candidate data, applies a scoring threshold, and routes underperforming candidates into a rejection path. The system generates compassionate, professional HTML rejection emails and logs the decision in ClickUp—ensuring candidates receive timely communication while HR teams save time.

**What This Template Does**
📋 Fetch Interview Feedback from Google Sheets
 Pulls structured interview responses from a connected sheet.
🧠 AI-Powered Candidate Profiling
 GPT-4o-mini structures raw feedback into candidate profiles with scores and notes.
⚖️ Apply Threshold (≥ 3 = Pass, &lt; 3 = Reject)
 Marks candidates who fail to meet the minimum criteria.
🔀 Route Candidates via If Node
 Rejects candidates with scores below the threshold. (Accepted path is not implemented in this workflow.)
📩 Generate Rejection Email
 AI crafts a professional, empathetic HTML email with personalized feedback.
📨 Send Email via Gmail
 Delivers the rejection email directly to the candidate.
🗂 Create ClickUp Task
 Logs each rejected candidate into ClickUp for record-keeping and team visibility.

**Prerequisites**

- Google Sheet with interview feedback data
- n8n instance (cloud or self-hosted)
- Azure OpenAI API key with GPT-4o-mini access
- Gmail API credentials (for sending rejection emails)
- ClickUp API credentials (for rejection tracking)

**Step-by-Step Setup**

- Connect Google Sheets → Pull raw candidate interview responses.
- AI Processing (LLM Chain) → Structure candidate feedback into JSON profiles with scores.
- Apply Threshold Check (Code Node) → Mark candidates as rejected if their averageScore &lt; 3.
- Route with If Node → Only the rejection path is configured.
- Generate Rejection Email (LLM Chain) → Create respectful, personalized HTML email.
- Format Metadata (Code Node) → Combine email + candidate info.
- Send Email via Gmail → Notify candidates of rejection.
- Create ClickUp Task → Record rejection decision for transparency.

**Customization Ideas**
 🎯 Adjust the rejection threshold (e.g., &lt; 3.5 instead of &lt; 3).
 📢 Add recruiter Slack/Teams notifications when a rejection is processed.
 📚 Sync rejection emails and candidate profiles into Notion or Airtable for reporting.
 💡 Include AI-suggested “areas for improvement” in rejection emails.

**Key Benefits**
 ✅ Ensures timely, consistent rejection communication
 ✅ Saves HR teams hours of manual follow-up
 ✅ Maintains candidate dignity with professional, empathetic emails
 ✅ Keeps transparent rejection records in ClickUp
 ✅ 100% automated and customizable

**Perfect For**
 👥 HR teams managing high-volume hiring rejections
 🏢 Companies aiming for consistent candidate communication
 🎯 Recruiters who want to provide personalized but automated rejection emails
 📊 Organizations that need structured rejection records

## 🔗 Nodes Used

Google Sheets, ClickUp, Gmail, Basic LLM Chain, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
