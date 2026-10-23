# 👥 Screen and route AI-scored job applications with Airtable, Google Drive and OpenRouter

> ⚡ **22 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects job applications via an n8n Form, checks duplicates in Airtable, stores CV files in Google Drive, and uses OpenRouter to score and summarize each CV for an n8n Automation Expert role, updating Airtable status and emailing shortlisted candidates via Gmail.

## How it works
1. Receives a job application submission through an n8n Form, including name, WhatsApp number, email, CV file, and an optional cover letter.
2. Normalizes the WhatsApp number to E.164 format and searches Airtable for an existing application matching the email or phone number.
3. If a match is found, returns an “application already received” completion page to prevent duplicate submissions.
4. If the applicant is new, uploads the CV to Google Drive, shares the file with “anyone with the link,” and creates a new Airtable record with the CV link and a Pending screening status.
5. Extracts text from the uploaded PDF CV and sends it to OpenRouter to generate a structured match score, summary, and extracted skills based on the n8n Automation Expert rubric.
6. Routes the application by score (70+ shortlisted, 50–69 review, under 50 rejected), updates the Airtable record with AI results and status, and emails shortlisted candidates a Calendly interview link via Gmail.

## Setup
1. Create or update an Airtable base/table with the needed fields (e.g. Full Name, WhatsApp Number, Email, CV, Cover Letter, Received At, Screening Status, AI Match Score, AI Summary, Extracted Skills) and connect an Airtable Personal Access Token.
2. Connect Google Drive OAuth credentials and set the target Drive and folder where CVs should be uploaded.
3. Connect an OpenRouter API credential and choose working models for both the screening model and the schema auto-fix model.
4. Connect Gmail OAuth credentials and replace the Calendly URL in the shortlist email with your own scheduling link.
5. Publish the workflow and share the n8n Form URL (path: /cv-application) with candidates.

## 🔗 Nodes Used

Airtable, Google Drive, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
