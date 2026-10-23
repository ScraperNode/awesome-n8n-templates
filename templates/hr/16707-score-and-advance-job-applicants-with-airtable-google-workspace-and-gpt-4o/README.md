# 👥 Score and advance job applicants with Airtable, Google Workspace and GPT-4o

> ⚡ **7 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects job applications via an n8n form, stores CVs in Google Drive, logs applicants in Airtable, and uses OpenAI to score CV-to-role fit. Shortlisted candidates receive an AI-generated questionnaire, a personalized Gmail outreach, an auto-booked Google Calendar phone screen, and saved screening questions.

## How it works
1. Receives a job application through an n8n form submission, including applicant details and a PDF CV upload.
2. Uploads the CV to Google Drive, builds a normalized applicant record (name, email, phone, experience, CV link), and creates an applicant entry in Airtable.
3. Downloads the stored CV from Google Drive, extracts text from the PDF, and uses an OpenAI-powered agent to score the CV against the job description pulled from Airtable.
4. Updates the applicant’s Airtable record as either “Interviewing” (score ≥ 0.7) or “No hire” (score < 0.7), including the numeric score and short reasoning.
5. For shortlisted candidates, generates five interview questions with OpenAI, presents them in a follow-up n8n form, and saves the candidate’s responses back to Airtable.
6. Uses OpenAI plus Airtable job/candidate context to draft a personalized outreach email, sends it via Gmail, and schedules a 30-minute phone screen in Google Calendar.
7. Writes the scheduled phone interview time and OpenAI-generated phone screening questions back to the applicant’s Airtable record.

## Setup
1. Connect credentials for Airtable, Google Drive, Google Calendar, Gmail, and OpenAI (used for scoring, question generation, email drafting, scheduling, and screening questions).
2. In Airtable, create or update a base with an Applicants table and a Positions table that match the fields referenced (for example CV Link, Stage, JD CV score, CV Score Notes, Questionnaires and responses, Phone interview, and phone screening questions).
3. Set the target Google Drive folder for CV uploads and ensure the workflow can download files using the stored CV link.
4. Publish the n8n forms (application intake and questionnaire) and share their URLs with candidates as part of your recruitment process.
5. Confirm the shortlisting threshold (0.7) and update any fixed values (like the position name and calendar) to match your role and interviewer availability.

## 🔗 Nodes Used

Airtable, Google Drive, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
