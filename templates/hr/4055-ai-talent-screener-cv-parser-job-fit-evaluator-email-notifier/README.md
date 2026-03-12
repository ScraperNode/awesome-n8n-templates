# 👥 AI talent screener – CV parser, job fit evaluator & email notifier

> ⚡ **1,549 views** · 👥 [HR & Recruitment](../)

## Description

## AI Talent Screener – CV Parser, Job Fit Evaluator & Email Notifier

### Who is this for?
This template is ideal for HR teams, recruiters, staffing agencies, and tech-enabled hiring managers looking to automate the intake, analysis, and shortlisting of job applicants directly from CV submissions.

### What problem is this workflow solving?
Manually evaluating resumes for job openings is time-consuming and prone to bias or oversight. This workflow uses AI to extract candidate data, analyze fit based on job descriptions, and make data-backed shortlisting decisions — automatically updating Google Sheets and notifying both Talent Acquisition and candidates.

### What this workflow does
This workflow automates your recruitment pipeline by:

**1. Accepting CV submissions via an embedded form.**

**2. Saving resumes to Google Drive.**

**3. Extracting and parsing resume content using AI.**

**4. Fetching the relevant job description from Google Sheets.**

**5. Summarizing both job and applicant profiles.**

**6. Conducting an AI-powered fit evaluation (semantic match, red flags, soft skills, etc.).**

**7. Updating detailed analysis in a centralized Google Sheet.**

**8. Notifying the TA team for approval.**

**9. Automatically sending shortlisting or rejection emails to candidates based on approval.**

### Setup
**1. Connect credentials for:**

* Google Sheets

* Google Drive

* OpenAI API

* SMTP email (for notification)

**2. Update the Google Sheets document IDs and folder IDs in the relevant nodes.**

**3. Adjust the form fields in the "Form Trigger" node if needed.**

**4. Customize email sender/receiver addresses in the email nodes.**

**5. Enable the workflow and embed the form on your career page.**

For convenience, the sticky notes guide you through what each block does.

### How to customize this workflow to your needs
* Change job roles by editing the dropdown options in the form.

* Modify evaluation criteria in the “Semantic Fit & Evaluation by HR Expert” prompt.

* Add more fields (e.g., GitHub, portfolio links) to the form and extend parsing.

* Connect to ATS or Slack if you'd like to integrate further.

## 🔗 Nodes Used

Send Email, Google Sheets, Google Drive, Summarization Chain, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
