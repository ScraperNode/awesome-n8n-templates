# 👥 Screen and triage job applications with Ollama, Gmail, and Google Sheets

> ⚡ **32 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications through an n8n form, extracts text from the uploaded PDF CV, analyzes it with Ollama, and records the results in Google Sheets while using Gmail to send candidate confirmations, route high-fit candidates to human approval, and email alerts on AI errors.

## How it works
1. Receives a candidate submission through an n8n form, including contact details, screening questions, and a PDF CV upload.
2. Sends a confirmation email to the candidate via Gmail acknowledging receipt of the application.
3. Extracts text from the uploaded PDF CV and submits it to Ollama (nemotron-3-ultra:cloud) along with the job requirements and form answers to generate a structured JSON evaluation.
4. Cleans, validates, and normalizes the Ollama JSON output (scores, fit level, recommendation, skills, languages, and summaries) to ensure consistent fields for downstream use.
5. If the candidate’s fit level is “Alto”, appends the candidate and evaluation data to Google Sheets and emails a hiring reviewer in Gmail with approve/reject actions.
6. Updates the candidate’s row in Google Sheets with the reviewer’s decision after the Gmail approval response.
7. If the fit level is not “Alto”, sends a rejection email to the candidate via Gmail.
8. If the Ollama step errors (for example, model/credit issues), sends an alert email via Gmail to notify the workflow owner.

## Setup
1. Connect an Ollama API credential and ensure the selected model (nemotron-3-ultra:cloud) is available in your Ollama environment.
2. Connect a Gmail OAuth2 credential and update the recipient addresses used for the candidate confirmation, human review approval email, rejection email, and error alerts.
3. Connect a Google Sheets OAuth2 credential and update the spreadsheet ID/sheet (“Currículums”) and column schema to match your Google Sheet.
4. Publish the n8n form and share the form URL with applicants, ensuring the CV upload field is enabled and accepts PDF files.
5. Review and customize the job requirements text in the workflow’s options/context so Ollama evaluates CVs against your role criteria.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger, Extract from File, Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
