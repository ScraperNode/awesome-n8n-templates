# 👥 Send AI interview briefs from resumes with GPT-4o-mini, Google Sheets and Gmail

> ⚡ **13 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to read candidate rows from Google Sheets, download each resume PDF from Google Drive, extract text, generate an HTML interview brief using OpenAI GPT-4o-mini, email it via Gmail to the interviewer, and mark the row as Processed to avoid duplicates.

## How it works
1. Runs on a schedule trigger every 15 minutes.
2. Reads all candidate rows from the “Candidates” tab in Google Sheets and processes them one at a time.
3. Skips any rows where the Status column is already set to “Processed.”
4. Extracts the Google Drive file ID from the resume link, downloads the PDF, and converts it to plain text.
5. Cleans and truncates the resume text and combines it with the candidate’s name, role, and email details.
6. Sends the resume text and metadata to OpenAI (GPT-4o-mini) to generate a styled HTML interviewer brief.
7. Emails the HTML brief to the interviewer via Gmail and updates the candidate row in Google Sheets to “Processed,” then waits 5 seconds before moving to the next candidate.

## Setup
1. Add Google Sheets OAuth credentials and replace `YOUR_CANDIDATES_SHEET_ID`, then create a “Candidates” sheet with columns Name, Email, Job Role, Resume Drive Link, Interviewer Email, and Status.
2. Add Google Drive OAuth credentials and ensure each resume PDF is accessible to the workflow (for example, shared so the connected account can view it).
3. Add an OpenAI API credential and keep the model set to GPT-4o-mini.
4. Add Gmail OAuth credentials and confirm the sender name and subject line meet your email requirements.
5. Adjust the schedule interval if you want the workflow to check for new candidates more or less frequently.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
