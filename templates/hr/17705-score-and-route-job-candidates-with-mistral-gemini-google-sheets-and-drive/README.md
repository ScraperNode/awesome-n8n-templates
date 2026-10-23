# 👥 Score and route job candidates with Mistral, Gemini, Google Sheets, and Drive

> ⚡ **7 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects candidate applications via an n8n form, extracts resume text with Mistral AI, matches the candidate to an open role stored in Google Sheets and Google Docs, scores the fit using Google Gemini, and uploads the CV and an evaluation report to department-specific Google Drive folders.

## How it works
1. Receives a candidate submission via an n8n form with name, email, CV upload, and department selection.
2. Extracts plain text from the uploaded CV using Mistral AI and loads open job roles from Google Sheets filtered by the selected department.
3. If no OPEN roles exist for the department, shows a “no jobs available” completion page; otherwise presents a role dropdown for the candidate to choose from.
4. Looks up the selected role’s configuration from the filtered job list and fetches the full job description from Google Docs using the JD link.
5. Sends the job description and extracted resume text to Google Gemini (via a LangChain LLM chain) to return a structured JSON evaluation with scores, matched skills, and missing requirements.
6. Compares the candidate’s overallScore against the role’s Min_Score and generates a text evaluation report, then uploads the CV and report to the appropriate department folder in Google Drive for either shortlisted or rejected candidates.

## Setup
1. Connect credentials for Mistral Cloud (resume extraction), Google Gemini (PaLM) API (scoring), Google Sheets OAuth2 (job list), Google Docs OAuth2 (JD retrieval), and Google Drive OAuth2 (file uploads).
2. Create a Google Sheet with job rows including at least Department, Role, Status (set to OPEN), JD_Link (Google Doc URL), and Min_Score, and update the workflow to use your spreadsheet and sheet tab.
3. Store each job description in Google Docs and ensure the JD_Link values in the sheet point to accessible documents.
4. Create Google Drive folders for shortlisted and rejected candidates per department and update the hardcoded folder ID mappings in the workflow’s code steps.
5. Publish the n8n forms and share the form URL with candidates, ensuring the department dropdown values exactly match the Department values used in your Google Sheet.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Docs, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
