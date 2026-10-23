# 👥 Screen, score and route job applicants with Gemini, Gmail, Sheets and Slack

> ⚡ **21 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow runs daily to pull job applicants from Google Sheets, score each candidate against role requirements using the Google Gemini API, log results back to Google Sheets, and notify a Slack channel when an applicant meets or exceeds a minimum score.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Reads applicant records from an “Applicants” tab in Google Sheets.
3. Combines the job title, requirements, and each applicant’s resume text into a screening prompt.
4. Sends the prompt to the Google Gemini API and requests a JSON response with score, verdict, strengths, gaps, and summary.
5. Parses the returned JSON and normalizes the screening fields (score, verdict, strengths, gaps, and summary).
6. Appends the screening result for every applicant to a “Screening” tab in Google Sheets.
7. Posts a formatted message to a Slack channel when the applicant’s score is greater than or equal to the configured minimum score.

## Setup
1. Connect credentials for Google Sheets OAuth, Google Gemini (PaLM) API, and Slack OAuth.
2. Select your Google Sheets spreadsheet and ensure it has an “Applicants” sheet with fields like Name, Email, and Resume/ResumeText, plus a “Screening” sheet to store results.
3. Update the role title, requirement text, and minimum score threshold in the job requirements configuration.
4. Choose the Slack channel where qualified-candidate notifications should be posted.
5. Adjust the schedule time if you want the daily run to occur at a different hour.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
