# 👥 Score and triage job applicants with Airtable, Google Drive and OpenAI

> ⚡ **8 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via an n8n form, stores applicant details and CVs in Google Drive and Airtable, uses OpenAI to score CV fit, branches candidates into rejected or interviewing stages, then generates followup questionnaires, emails shortlisted candidates, books a phone interview in Google Calendar, and saves screening questions.

## How it works
1. Receives a job application through an n8n form submission with candidate details and an uploaded PDF CV.
2. Uploads the CV to Google Drive, builds a share link, and creates an applicant record in Airtable.
3. Downloads the CV from Google Drive, extracts the PDF text, and uses OpenAI (with an Airtable tool lookup for the position description) to score job-description fit and return a short reason.
4. Updates the applicant’s Airtable record with the score and sets the stage to Interviewing when the score is at least 0.7, otherwise sets the stage to No hire.
5. For shortlisted candidates, uses OpenAI (with the Airtable job description) to generate five interview questions and presents them to the candidate in a second n8n form.
6. Saves the candidate’s questionnaire responses back to Airtable, then uses OpenAI (with Airtable job and candidate context) to draft a personalized follow-up email and sends it via SMTP.
7. Uses OpenAI with a Google Calendar tool to book a 30-minute phone interview for the next day, writes the meeting time to Airtable, generates phone-screening questions, and stores them in Airtable.

## Setup
1. Connect Airtable credentials and ensure your base includes the “Applicants” and “Positions” tables (for example, from the Simple Applicant Tracker template) with fields matching the workflow mappings.
2. Connect Google Drive OAuth2 credentials and set the target Drive folder ID for CV uploads.
3. Add an OpenAI API credential for the AI scoring, question generation, email drafting, and scheduling steps.
4. Add an SMTP credential and set the sender address (fromEmail) used for candidate emails.
5. Connect Google Calendar OAuth2 credentials and select the calendar to use for booking phone interviews.
6. Publish the two n8n forms (application and questionnaires) and share the application form URL with candidates.

## 🔗 Nodes Used

Airtable, Send Email, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
