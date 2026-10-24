# 👥 Screen and triage job applications with Gemini, Google Sheets, Slack and Gmail

> ⚡ **9 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
Youtube Video: https://www.linkedin.com/posts/iamvaar_n8n-aiautomation-recruitingtech-activity-7503103988427542528-9X1G

This workflow collects job applications via form, validates and de-duplicates submissions in Sheets, extracts resume text and evaluates candidates with Gemini. It logs results, notifies the hiring team, candidates via Gmail, and schedules interviews in Calendar based on Slack approvals.

## How it works
1. Receives a job application through an n8n Form Trigger with the applicant’s details and an uploaded resume.
2. Generates a unique application ID, loads the role configuration, validates the submission, and logs invalid entries to Google Sheets while alerting an admin in Slack.
3. Checks Google Sheets for an existing applicant with the same email and posts a Slack notice if the application is a duplicate.
4. Extracts text from the uploaded resume and, if parsing fails, logs the issue to Google Sheets and emails the candidate via Gmail to re-upload a readable file.
5. Sends the resume text and job requirements to Google Gemini to extract structured candidate data, produce a fit score and recommendation, and flag potential risks.
6. Logs the evaluated candidate record to Google Sheets and routes outcomes to Slack and Gmail (shortlist notification, review FYI, manual-review request, or rejection email).
7. Listens for Slack reaction events from an authorized reviewer, and when approved it checks availability in Google Calendar, creates an interview event with a Google Meet link, and emails the shortlisted candidate via Gmail.

## Setup
1. Configure the n8n form and publish its URL where candidates apply, ensuring the resume upload field name matches the workflow’s expected binary key.
2. Add Google service account credentials for Google Sheets and update the spreadsheet IDs/sheet tabs for both the Applicants and Rejected applicants logs.
3. Add a Google Gemini (Google PaLM) API credential and confirm the Gemini endpoint/model settings match your account and region.
4. Add Slack credentials, set the target channel IDs, and enable the Slack app event subscription for reaction_added so the Slack Trigger receives reactions.
5. Add Gmail OAuth2 credentials for candidate emails and Google Calendar OAuth2 credentials for scheduling, then select the correct calendar and confirm the timezone/working hours used for slot selection.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Calendar, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
