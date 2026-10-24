# 👥 Screen candidate CVs with Google Gemini, Google Sheets, and Gmail

> ⚡ **41 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects candidate applications via an n8n form, extracts text from uploaded PDF CVs, compares each CV to a job description stored in Google Sheets using Google Gemini (via OpenRouter), logs screening results back to Google Sheets, and creates a Gmail draft email for HR review.

## How it works
1. Candidate submits the n8n-hosted form with their details and a PDF CV.
2. Two operations run in parallel: CV text is extracted from the uploaded PDF, and the matching Job Description is fetched from Google Sheets using the role the candidate entered.
3. Gemini Flash evaluates the CV against the JD and returns a structured recommendation: Strong Interview, Interview, Borderline, or Do Not Proceed, along with a score, matched skills, gaps, and a plain-text summary.
4. The full screening record is logged to a Screening Results tab in Google Sheets.
5. A Gmail draft is created for HR to review and send: a shortlist notification for Interview and above, a rejection for Borderline and below.

## Setup
1. Open the Config node and fill in spreadsheet_id, jd_sheet_gid, results_sheet_gid, and company_name.
2. Create two tabs in your Google Sheet: Job Description (columns: job_id, title, department, required_skills, min_experience_years, description) and Screening Results (columns matching the Log to Sheets node).
3. Connect credentials: Google Sheets, Gmail, and OpenRouter.
4. Activate the workflow. The form URL appears in the CV Application Form node -- share it with candidates.

## Requirements
- n8n self-hosted or cloud. OpenRouter account with access to google/gemini-flash-1.5. Google Sheets with the two tabs above. Gmail account.

## Customization
- Swap the model slug in the OpenRouter node for any model on OpenRouter. Adjust the ats_score thresholds in the AI agent prompt. Add a Slack notification after Log to Sheets for real-time alerts. Convert the role text field to a dropdown by switching fieldType to "dropdown" and adding fieldOptions.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
