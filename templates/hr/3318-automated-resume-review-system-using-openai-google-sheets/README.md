# 👥 Automated resume review system using OpenAI + Google Sheets

> ⚡ **6,015 views** · 👥 [HR & Recruitment](../)

## Description

**Who is this for?**
This workflow is ideal for:
- HR teams and recruiters seeking to streamline resume screening.
- Hiring managers who want quick, summarized candidate insights.
- Recruitment agencies handling large volumes of applicant data.
- Startups and small businesses looking to automate hiring without complex systems.
- AI and automation professionals who want to build smart HR workflows using n8n and OpenAI.

**What problem is this workflow solving? / Use Case**
- Manually reviewing resumes is time-consuming, inconsistent, and prone to human bias. 
- This workflow automates the resume intake and evaluation process—ensuring that each applicant is screened, summarized, and scored using a consistent, data-driven method.
- It enhances efficiency and supports better hiring decisions.

**What this workflow does**

- Accepts resume submissions via form and saves files to Google Drive.
- Extracts key information from resumes using AI (e.g., name, contact, education, experience).
- Summarizes candidate qualifications into a short, readable profile.
- Allows HR to rate applicants and leave comments.
- Logs all extracted data and evaluations into a centralized Google Sheet for tracking.

**Setup**

- Resume is submitted through an n8n form.
- The uploaded file is automatically stored in Google Drive.
- n8n uses OpenAI and document parsing tools to extract candidate data.
- Extracted information is structured and summarized using GPT.
- A review form is triggered for internal HR rating and notes.
- All data is appended to a Google Sheet for records and filtering.
- 
**How to customize this workflow to your needs**

- Change the form tool (e.g., Typeform, Tally, or custom HTML) based on your stack.
- Adapt the summary prompt to align with your specific role requirements.
- Add filters to auto-flag top-tier candidates based on score or skills.
- Integrate Slack or email to notify hiring managers when top resumes are processed.
- Connect to your ATS if you want to push processed resumes into your recruitment system.

## 🔗 Nodes Used

Google Sheets, Google Drive, Summarization Chain, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
