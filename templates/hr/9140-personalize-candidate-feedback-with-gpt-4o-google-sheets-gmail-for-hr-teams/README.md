# 👥 Personalize candidate feedback with GPT-4o, Google Sheets & Gmail for HR teams

> ⚡ **176 views** · 👥 [HR & Recruitment](../)

## Description

## Description
This workflow automates personalized candidate communication for both shortlisted and rejected applicants. It fetches candidate details, processes resumes, checks for errors, and uses GPT-4o to generate professional HTML emails. Shortlisted candidates receive congratulatory onboarding plans, while rejected candidates receive polite rejections with learning resources.

## What This Template Does (Step-by-Step)
- ⚡ Manual Trigger – Starts the workflow execution.
-  📑 Candidate Data Fetch (Google Sheets) – Pulls structured candidate data (name, email, resume link, skills, job info, status).
-  📥 Resume Downloader (Google Drive) – Downloads candidate resumes from sheet links.
-  ✅ Resume File Check (If Condition) – Ensures the resume file is valid before proceeding.
-  ⚠️ Error Logging (Google Sheets) – Records failed or missing resumes in a dedicated sheet for audit.
-  📄 PDF → Text Extractor – Extracts raw resume text for deeper AI analysis.
-  🧩 Candidate Data Builder (Code Node) – Combines Google Sheets data with extracted resume text into a single enriched JSON object.
-  🎯 Shortlisted vs Rejected (If Condition) – Splits candidates into two flows based on their status field.

## Shortlisted Path
🎉 Congrats + Onboarding Plan (LLM Chain) – GPT-4o generates a congratulatory HTML email including:
- Identified skill gaps
- Recommended online courses (Coursera/Udemy/LinkedIn Learning)
- Next onboarding steps
📧 Candidate Mailer – Shortlisted (Gmail) – Sends the onboarding email directly to the candidate.

## Rejected Path
🙏 Polite Rejection + Learning Plan (LLM Chain) – GPT-4o generates a professional rejection email including:
- Empathetic rejection message
- Constructive feedback on skill gaps
- Learning resources to improve for future opportunities
📧 Candidate Mailer – Rejected (Gmail) – Sends the polite rejection + learning plan to the candidate.

## Prerequisites
- Google Sheets (candidate database + error log)
- Google Drive (resume storage)
- Gmail API (for sending candidate emails)
- Azure OpenAI (GPT-4o-mini model access)

## Key Benefits
 ✅ Automates candidate communication (both shortlisted & rejected)
 ✅ Delivers professional, HTML-ready emails
 ✅ Enhances candidate experience with personalized learning plans
 ✅ Prevents silent rejections by providing constructive resources
 ✅ Improves employer branding with empathetic communication
 ✅ Error resilience via logging and validation steps

## Perfect For
- Recruitment teams managing high candidate volume
- Companies looking to humanize rejections
- HR departments that want automated but personalized communication
- Organizations investing in candidate experience & employer brand

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Basic LLM Chain, Extract from File, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
