# 👥 Score and triage job candidates with OpenAI, Google Drive, Google Sheets, and Gmail

> ⚡ **49 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives candidate applications via webhook, uploads resumes to Google Drive, logs candidate details in Google Sheets, and uses OpenAI to score questionnaire answers and summarize the CV, then emails either an interview invite or an HR review request based on the score.

## How it works
1. Receives a POST webhook containing candidate details, questionnaire answers, and a base64-encoded resume.
2. Cleans the base64 resume payload, converts it to a file, uploads it to Google Drive, and captures the Drive sharing link.
3. Appends the candidate’s submission ID, contact details, resume link, and consolidated question/answer text to a Google Sheets recruitment sheet.
4. Sends the questionnaire answers (for scoring) and the resume content (for summarization) to OpenAI and parses the response into structured fields like score, summaries, strengths, and weaknesses.
5. Updates the same Google Sheets row (matched by SubmissionID) with the AI score, CV summary, and strengths/weaknesses.
6. If the score is greater than 7, sends the candidate an interview scheduling email via Gmail and notifies HR, otherwise emails HR to manually review the candidate in Google Sheets and submit a decision.

## Setup
1. Add credentials for Google Drive, Google Sheets, Gmail, and OpenAI.
2. Configure the webhook URL in your application form tool so it sends the expected fields (candidate_name, email, enrichedData question_1–question_10, submissionId, and resume in base64).
3. Select the target Google Drive folder for resume uploads and ensure Drive link sharing settings match your recruiting process.
4. Update the Google Sheets spreadsheet and sheet tab, and ensure it has columns for SubmissionID, ResumeLink, Question/Answers, Score, Summrized CV, and Strength / Weeknesses.
5. Set the HR notification email address(es) and replace the interview scheduling link and manual decision form link in the Gmail messages.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
