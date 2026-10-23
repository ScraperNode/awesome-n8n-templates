# 👥 Screen CVs and score candidates with Gmail, Google Drive, OpenAI, and Sheets

> ⚡ **111 views** · 👥 [HR & Recruitment](../)

## Description

## Who's it for

This template is for HR teams, recruiters, and companies that receive job applications via email and want to automatically screen and evaluate candidates using AI. Ideal for organisations processing a high volume of resumes who want to reduce manual screening time.

## How it works

When a candidate emails their CV, the workflow triggers automatically:

- Gmail detects the incoming application and uploads the CV attachment to Google Drive
- A Switch node identifies the file type (PDF, DOCX, or TXT) and routes it to the appropriate extraction method
- The full text content of the resume is extracted and standardised into a clean format
- An AI recruiter agent powered by OpenAI evaluates the candidate's strengths, weaknesses, skills, and potential contribution to the company
- The candidate is assigned a suitability score from 1 to 10
- A Structured Output Parser extracts the key evaluation data and saves it to Google Sheets for the hiring team to review

## How to set up

1. Connect your **Gmail** account to the Gmail Trigger node
2. Connect your **Google Drive** account and set the destination folder for incoming CVs
3. Connect your **OpenAI** account to the AI model node
4. Connect your **Google Sheets** account and configure the candidate tracking sheet
5. Customise the Recruiter Agent prompt to match your job role and evaluation criteria

## Requirements

- Gmail account
- Google Drive account
- OpenAI API key
- Google Sheets account

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
