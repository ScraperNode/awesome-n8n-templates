# 👥 Match CVs to remote jobs with Groq, Google Sheets, and Gmail

> ⚡ **56 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This two-part workflow collects CV profiles via an n8n form and stores them in Google Sheets, then runs every 6 hours to pull jobs from Remotive and Arbeitnow, score fit and generate cover letters with Groq, and email each profile a digest of high-scoring matches.

## How it works
1. Receives a CV profile submission via an n8n Form trigger with keywords, work preference, notification email, and a PDF/DOCX resume upload.
2. Extracts text from the uploaded PDF or DOCX, builds a normalized profile record, and appends or updates it in a Google Sheets “CV_Profiles” sheet.
3. Runs every 6 hours, fetches the latest job listings from the Remotive and Arbeitnow APIs, and loads CV profiles plus a Google Sheets “Sent_Log” to avoid duplicates.
4. Filters jobs per profile by work preference and title keyword matches, skipping any job/profile pair already logged as sent.
5. Sends each candidate job and resume pair to Groq (OpenAI-compatible chat completions) to return an ATS score, missing keywords, and a tailored cover letter.
6. Logs each evaluated job/profile result to the Google Sheets “Sent_Log”, keeps only matches scoring 70+ and groups them by profile.
7. Sends each profile’s notification email address a Gmail digest containing the matched jobs, scores, links, and suggested cover letters.

## Setup
1. Create a Google Sheets spreadsheet with two sheets named “CV_Profiles” and “Sent_Log”, and update the workflow’s Google Sheet document ID and sheet references.
2. Add Google Sheets OAuth credentials with access to the target spreadsheet.
3. Add a Groq API key as an HTTP Header Auth credential (set the Authorization header, e.g. `Bearer <GROQ_API_KEY>`).
4. Add Gmail OAuth credentials and confirm the sender mailbox used to send the digest emails.
5. Copy the n8n Form URL for “CV Upload Form” and share it with candidates/users who will submit their CV profiles.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
