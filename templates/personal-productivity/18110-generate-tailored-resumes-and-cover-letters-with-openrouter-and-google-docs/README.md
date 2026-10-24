# ⚡ Generate tailored resumes and cover letters with OpenRouter and Google Docs

> ⚡ **586 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow collects a job posting URL via an n8n form, extracts key requirements with OpenRouter, then rewrites your resume and drafts a tailored cover letter and saves both into a new Google Doc (optionally moved to a chosen Google Drive folder).

## How it works
1. Receives a job posting URL (and optional notes) from an n8n form.
2. Downloads the job posting web page and extracts the page body text.
3. Uses OpenRouter to extract structured job details such as title, company, skills, responsibilities, and ATS keywords from the page text.
4. Uses OpenRouter to rewrite your base resume so it truthfully aligns with the extracted requirements and target keywords.
5. Uses OpenRouter to draft a specific cover letter that references real accomplishments from your base resume and the job’s responsibilities.
6. Creates a new Google Doc titled with the role and company, inserts the tailored resume and cover letter, and moves the file to your selected Google Drive folder.

## Setup
1. Update the candidate details and paste your full base resume text in the Candidate Profile section.
2. Add an OpenRouter API credential and select it for both OpenRouter model nodes.
3. Add Google Docs OAuth2 credentials for creating and updating documents.
4. Add Google Drive OAuth2 credentials and set the destination folder URL (or remove the move step if you want to keep the doc in My Drive root).
5. Use the form’s production URL to submit a job posting link from your source site.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Docs, Basic LLM Chain, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
