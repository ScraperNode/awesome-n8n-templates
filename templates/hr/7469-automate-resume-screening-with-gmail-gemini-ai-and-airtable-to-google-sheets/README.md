# 👥 Automate resume screening with Gmail, Gemini AI, and Airtable to Google Sheets

> ⚡ **913 views** · 👥 [HR & Recruitment](../)

## Description

## Who’s it for

This workflow is perfect for recruiters, HR professionals, and startup founders who receive job applications by email and want to automate the process of parsing, matching, and evaluating resumes. If you want to save time by having candidate data and AI scores automatically organized in Google Sheets, this workflow is for you.

---

## How it works

- Monitors a Gmail inbox for new emails with resume attachments (PDF)
- Extracts the job title from the email subject and matches it against open positions stored in Airtable
- Uploads the resume file to a designated Google Drive folder for storage
- Builds a prompt with all relevant context and sends it, along with the resume file, to Gemini AI for analysis
- Gemini scores the candidate, extracts their name and phone, and provides a one-sentence explanation
- All results—including candidate info, AI score, feedback, and a download link for the resume—are appended as new rows in Google Sheets

---

## How to set up

1. **Create accounts and APIs**: You’ll need Google (Gmail, Drive, Sheets), Airtable, and Gemini API access.
2. **Prepare your Airtable base**: Add your job descriptions (title, code, description, skills, etc.)—these are matched against incoming applications.
3. **Prepare your Google Sheet**: Create a spreadsheet to store applicant data and scores.
4. **Connect credentials in n8n**: Set up Gmail, Google Drive, Google Sheets, Airtable, and Gemini API credentials in n8n’s credential manager.
5. **Import this workflow**: Use the workflow import feature in n8n and connect your credentials to each node.
6. **Test**: Send a test application email with a PDF resume to your connected Gmail—watch the data appear in Google Sheets!

---

## Requirements

- Google account with access to Gmail, Drive, and Sheets
- Airtable account for job data
- Gemini API key (no hardcoded keys—use n8n environment variables or credentials)
- n8n instance (cloud or self-hosted)

---

## How to customize the workflow

- **Job matching logic**: Edit the EmailMatcher node to fine-tune how subjects are matched to job titles.
- **Scoring criteria**: Adjust the prompt in PromptBuilder to change what Gemini evaluates.
- **Supported file types**: Modify the ReadyAttachment node to accept other resume formats if needed.
- **Sheet columns**: Edit the Google Sheets node to map new data points or change the output format.
- **Notifications**: Add Slack or email nodes to notify you when a strong candidate is found.

---

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
