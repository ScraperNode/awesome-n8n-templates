# 👥 Automate CV screening with GPT-4o-mini: Gmail to Google Sheets HR evaluation system

> ⚡ **3,289 views** · 👥 [HR & Recruitment](../)

## Description

# AI-Powered HR Workflow: CV Analysis and Evaluation from Gmail to Sheets

![Workflow Screenshot](https://www.dr-firas.com/AI-Powered-HR-Workflow-CV-Analysis.png)

### Who is this for?

This workflow is designed for HR professionals, recruiters, startup founders, and operations teams who receive candidate resumes by email and want to automate the evaluation process using AI.

It's ideal for teams that receive high volumes of applications and want to streamline screening without sacrificing quality.

### What problem is this workflow solving?

Manually reviewing every resume is time-consuming, inconsistent, and often inefficient. This workflow automates the initial screening process by:

- Extracting resume data directly from incoming emails
- Analyzing resumes using GPT-4 to evaluate candidate fit
- Saving scores and notes in Google Sheets for easy filtering

It helps teams qualify candidates faster while staying organized.

### What this workflow does

1. Detects when a new email with a CV is received (Gmail)
2. Filters out non-relevant messages using an AI classifier
3. Extracts the resume text (PDF parsing)
4. Uploads the original file to Google Drive
5. Retrieves job offer details from a connected Google Sheet
6. Uses GPT-4 to evaluate the candidate’s fit for the job
7. Parses the AI output to extract the candidate's score
8. Logs the results into a central Google Sheet
9. Sends a confirmation email to the applicant

### Setup

1. Install **n8n self-hosted**
2. Add your **OpenAI API Key** in the AI nodes
3. Enable the following APIs in your [Google Cloud Console](https://console.cloud.google.com):
   - Gmail API
   - Google Drive API
   - Google Sheets API
4. Create OAuth credentials and connect them in n8n
5. Configure your **Gmail trigger** to watch the inbox receiving CVs
6. Create a Google Sheet with columns like: `Candidate`, `Score`, `Job`, `Status`, etc.

### How to customize this workflow to your needs

- Adjust the AI scoring prompt to match your company’s hiring criteria
- Add new columns to the Google Sheet for additional metadata
- Include Slack or email notifications for each qualified candidate
- Add multiple job profiles and route candidates accordingly
- Add a Telegram or WhatsApp step to notify HR in real time

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/AI-Powered-HR-Workflow-CV-Analysis-and-Evaluation-from-Gmail-to-Sheets-2363d6550fd98087b305d2f10f20e290?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
