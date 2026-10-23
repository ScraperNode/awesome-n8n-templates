# 👥 Score and triage job applications with Google Gemini and Google Sheets

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via an n8n form, stores them in Google Sheets, extracts and analyzes resumes with Google Gemini against a JD stored in another Google Sheet, calculates a fit score, updates application status, and sends the candidate a Gmail acknowledgment or rejection email.

## How it works
1. Receives a job application when a candidate submits the n8n form with their contact details, position, experience, and resume file.
2. Generates an application ID and timestamp, validates required fields, and immediately sends a Gmail rejection if the candidate has 5 years of experience or less.
3. Appends or updates the candidate’s basic details (including the resume file reference) in a Google Sheets “Job Applications” spreadsheet.
4. Looks up the matching job description in a separate Google Sheets “Job Descriptions” spreadsheet based on the selected position and combines it with the application data.
5. Extracts text from the uploaded resume PDF and sends it to Google Gemini to return a structured JSON analysis (skills, strengths, weaknesses, and missing skills).
6. Scores the candidate against the JD requirements (required skills, experience, preferred skills, and strengths), writes the analysis, score, and status back to the “Job Applications” sheet, and sets the final status to Selected (score ≥ 80) or Rejected.
7. Sends a Gmail email to the candidate confirming receipt if selected, or a rejection email if rejected.

## Setup
1. Create and connect Google Sheets credentials, then set the correct spreadsheet IDs/sheet names for both the “Job Applications” and “Job Descriptions” documents.
2. Ensure the Job Descriptions sheet includes columns such as Position, JD ID, Required Experience, Required Skills, Preferred Skills, and Minimum Score.
3. Ensure the Job Applications sheet includes (at minimum) applicationId (used for matching), Full Name, Email, Phone, Position, Experience, Resume, Score, Skills, Strengths, Weaknesses, Missing Skills, and status.
4. Add a Google Gemini (PaLM) API credential and confirm the model and prompt return valid JSON in the expected structure.
5. Add Gmail credentials and update the email subjects/bodies and any recipient logic to match your hiring process.
6. Publish the n8n form and share the form URL with candidates, and confirm the resume upload accepts the file types you want (PDF/DOC/DOCX).

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
