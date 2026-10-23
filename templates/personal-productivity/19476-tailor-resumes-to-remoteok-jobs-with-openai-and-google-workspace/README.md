# ⚡ Tailor resumes to RemoteOK jobs with OpenAI and Google Workspace

> ⚡ **8 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every 6 hours to fetch recent RemoteOK jobs, extract text from a master resume stored in Google Drive, use OpenAI to score job fit and tailor a resume for strong matches, then upload the tailored file to Google Drive and log the results in Google Sheets.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Fetches recent job listings from a RemoteOK-compatible HTTP API and filters and normalizes results by keyword and recency.
3. Downloads a master resume PDF from Google Drive and extracts the resume text.
4. Combines each job with the extracted resume text and sends it to an OpenAI (gpt-4o-mini) agent to return a JSON match score and reasoning.
5. Filters out jobs with a match score below 7 and skips them.
6. For jobs scoring 7 or higher, sends the job and resume context to a second OpenAI (gpt-4o-mini) agent to generate a tailored resume and cover letter in JSON.
7. Converts the tailored resume text into a file, uploads it to Google Drive, and appends a tracking row (company, role, URL, score, reasoning, and Drive link) to Google Sheets.

## Setup
1. Add Google Drive OAuth2 credentials and set the master resume file location/ID and the target upload folder ID.
2. Add an OpenAI API credential for the two OpenAI agent steps using the gpt-4o-mini model.
3. Add Google Sheets OAuth2 credentials and set the spreadsheet ID and sheet name used for the tracking log.
4. Replace the job feed URL placeholder (YOUR_JOB_BOARD_API_URL) with the RemoteOK API endpoint you want to query.
5. Adjust the keyword list, recency window, and the match-score threshold (default 7) to match your job search criteria.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
