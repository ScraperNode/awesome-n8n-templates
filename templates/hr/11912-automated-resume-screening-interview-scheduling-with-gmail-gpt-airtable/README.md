# 👥 Automated resume screening & interview scheduling with Gmail, GPT & Airtable

> ⚡ **118 views** · 👥 [HR & Recruitment](../)

## Description

## How it works

The workflow detects incoming job-application emails, extracts resumes, and parses them for AI analysis. It evaluates each candidate against three open roles and assigns a fit score with structured reasoning. Low-scoring applicants are stored for review, while strong candidates move into an automated scheduling flow. The system checks availability on the next business day, books the slot, sends a confirmation email, and records all details in Airtable.

---

## Step-by-step

### Detect and collect job-application data
- **Gmail Trigger1** – Monitors inbox for all new emails.
- **Message a model2** – Classifies whether the email is a job application.
- **If2** – Continues only when the AI result is YES.
- **Get a message1** – Fetches the full message and attachments.
- **Upload file1** – Uploads the resume to Google Drive.
- **Extract from File1** – Converts the PDF resume into text.

### Analyze the resume and evaluate fit
- **Available Positions1** – Defines the three open roles.
- **Message a model3** – Produces recommended role, fit score, strengths, gaps, skills, and reasoning.
- **If3** – Routes candidates based on `fit_score ≥ 8`.
- **Create a record3** – Stores lower-scoring applicants in Airtable.
- **Get Next Business Day1** – Calculates the schedule window for qualified candidates.

### Check availability on the next business day
- **AI Agent1** – Orchestrates availability search using calendar nodes.
- **Get Events1** – Retrieves events for the target day.
- **Check Availability1** – Evaluates free 1-hour slots.
- **OpenAI Chat Model2** – Reasoning engine for the agent.
- **Structured Output Parser1** – Returns clean JSON with `start_time` and `end_time`.
- **OpenAI Chat Model3** – Supports structured parsing.

### Schedule the interview and notify the candidate
- **Create an event1** – Books the interview in Google Calendar.
- **Send a message1** – Sends an HTML confirmation email to the candidate.
- **Create a record2** – Saves shortlisted candidate and interview data in Airtable.

---

## Why use this?

- Removes manual screening by automating email intake and resume parsing.
- Ensures consistent AI-based role matching and scoring.
- Books interviews automatically using real calendar availability.
- Keeps all applicant and scheduling data organized in Airtable.
- Provides a fully hands-off, end-to-end hiring pipeline.

## 🔗 Nodes Used

Airtable, Google Drive, Google Calendar, Gmail, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
