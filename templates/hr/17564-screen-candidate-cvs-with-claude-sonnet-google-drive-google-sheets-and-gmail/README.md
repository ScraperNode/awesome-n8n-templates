# 👥 Screen candidate CVs with Claude Sonnet, Google Drive, Google Sheets, and Gmail

> ⚡ **102 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
A candidate submits a CV to a webhook. One AI agent parses it and scores it against the job description, a deterministic rule turns that score into a recommendation, then the CV is filed in Drive, logged to Sheets, and the candidate gets an email.

## How it works
1. A webhook receives the CV plus candidate name, email, and the job ID applied for.
2. Text is extracted from the file: PDF directly, DOCX through a Google Drive conversion.
3. The matching job description is pulled from Google Sheets and combined with the CV text.
4. One agent call on Claude Sonnet reads both together and returns a candidate profile plus a scored evaluation across required skills, experience, domain alignment, and nice-to-have, weighted by role category.
5. A recommendation is computed in code from those scores: a required-skills floor first, then a threshold on the overall score.
6. The CV is filed into the Shortlisted, Pending, or Do Not Proceed Drive folder, and the full record is logged to Sheets.
7. A shortlist email is sent automatically, or a rejection draft is prepared for a human to review and send.

## Setup
1. Open the Config node and fill in all eight values: spreadsheet ID, results tab GID, three Drive folder IDs, a temp folder ID for DOCX conversion, company name, and HR email.
2. Attach credentials: Google Sheets, Google Drive, Gmail, and OpenRouter.
3. Create the Google Sheet with a Job Description tab keyed on job_id, and a results tab matching the columns written by Log to Sheets.
4. Point your intake form at the webhook, sending candidate_name, candidate_email, applied_job_id, and the CV file as cv_file.
5. Replace the YOUR COMPANY ADDRESS placeholder in the two email bodies.

## Requirements
- Google Sheets, Google Drive, and Gmail credentials on one Workspace account
- OpenRouter API key with access to Claude Sonnet, or swap the Screening Model node for any provider you prefer

## Customization
- Adjust the role-category weights or the recommendation thresholds directly in Build Submission Record, since both live in code rather than in the prompt
- Swap the Screening Model node for a cheaper or faster model
- Update the PRICING rate in Build Submission Record if your provider's cost per token changes

## Additional info
The prompt instructs the model to ignore name, age, gender, nationality, and other protected characteristics, and to score only on evidence found in the CV. This is a first-pass screening aid, not an automated hiring decision. The rejection path only ever drafts an email, so no candidate is declined without a human sending it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
