# 👥 Screen job applications with OpenAI, Google Sheets, Google Drive, and Gmail

> ⚡ **52 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via an n8n form, stores resumes in Google Drive and candidate records in Google Sheets, screens resume text against configurable job requirements using an OpenAI chat model, and emails HR the AI recommendation and updated status via Gmail.

## How it works
1. Receives a job application submission (candidate details, cover letter, and a PDF resume) through an n8n form.
2. Generates a candidate record with a unique Candidate ID and uploads the resume file to Google Drive.
3. Appends the candidate details and the Google Drive resume link/file ID to a Google Sheets “Candidates” sheet.
4. Downloads the resume from Google Drive, extracts text from the PDF, and sends the resume text plus job requirements to an OpenAI chat model to produce a JSON screening recommendation and score.
5. Validates and parses the AI JSON output, then updates the candidate row in Google Sheets with AI Score, Screening Result, and HR Remarks.
6. Routes the application as Strong Match, Review Required, or Low Match, updates the candidate’s workflow phase/status in Google Sheets, and emails HR the results via Gmail for human review.

## Setup
1. Add credentials for Google Drive, Google Sheets, Gmail, and OpenAI (Chat Completions) used by the workflow.
2. In the “Configure Template” step, set your company name, HR email address, job title, job requirements text, and the score thresholds for Strong Match and Review Required.
3. Create or select a Google Sheets document and ensure the target sheet tab name matches, with columns for Candidate ID, candidate details, resume link/file ID, AI Score, Screening Result, HR Remarks, Application Status, and Workflow Phase.
4. Choose the Google Drive folder where resumes should be uploaded (or keep the root folder) and ensure the form’s file upload field remains named “Resume” so the upload uses the correct binary field.

## Requirements
- Google Drive, Google Sheets, OpenAI, and Gmail credentials
- A Google Sheet with the candidate columns used by the workflow
- One configured vacancy/job title and matching job requirements per workflow copy

## Customization
- Adjust the job title, job requirements, and screening thresholds in the Configure Template node
- Customize HR email wording and candidate status labels to match your hiring process
- Choose a Google Drive destination folder for uploaded resumes

## Additional info
This workflow provides AI-assisted screening recommendations only. It does not automatically approve or reject candidates. Final hiring and progression decisions should always be made by a human HR reviewer.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
