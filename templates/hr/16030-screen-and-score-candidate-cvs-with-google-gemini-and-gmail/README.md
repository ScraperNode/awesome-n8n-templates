# 👥 Screen and score candidate CVs with Google Gemini and Gmail

> ⚡ **348 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via an n8n Form, extracts text from uploaded PDF resumes, uses Google Gemini to score and summarize candidates against a job description, stores the results in an n8n Data Table, and emails HR and the applicant via Gmail based on the score.

## How it works
1. Receives a job application submission through an n8n Form with candidate details and a PDF resume upload.
2. Applies role-specific context (job title, job description, HR email, score threshold, and submission timestamp) and extracts text from the uploaded PDF.
3. Sends the job context and extracted CV text to a Google Gemini-powered AI agent to produce a structured evaluation (score, recommendation, strengths, weaknesses, summary, and interview questions).
4. Upserts the candidate record and AI evaluation into an n8n Data Table keyed by the candidate email address.
5. Checks whether the AI score meets or exceeds the configured threshold and emails HR a high-priority or standard candidate notification via Gmail.
6. Emails the candidate a confirmation message via Gmail acknowledging receipt of their application.

## Setup
1. Add a Google Gemini (PaLM) API credential to the Google Gemini chat model node used by the AI agent.
2. Add a Gmail/Google API credential for the HR notification and candidate confirmation emails, and ensure the sending account is authorized.
3. Create or select an n8n Data Table and replace `YOUR_DATA_TABLE_ID_HERE` with your table ID in the Data Table upsert step.
4. Update the values in the context configuration (HR email, company name, job title, job description, and score threshold) to match the role you are hiring for.
5. Publish the n8n Form and share the form URL with candidates.

## Requirements
- **n8n Version:** Built and tested on **n8n 2.9.4+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
- **Google Gemini** API key.
- **Gmail** account (OAuth2 authentication).
- n8n instance with the **Data Table** feature enabled.

## Customization
- **Change the Trigger:** Swap the n8n Form Trigger for a **Gmail Trigger** to automatically process resumes sent directly to your careers@ inbox.
- **Change the AI Model:** Easily switch the Gemini sub-node for **OpenAI** or **Anthropic Claude** depending on your preferred AI provider.
- **Team Messaging:** Prefer chat over email? Replace the HR Gmail node with a **Telegram** or **Slack** bot to send candidate alerts directly to your recruitment channel.

## Additional info
## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)  
**Email:** me@nguyenthieutoan.com  
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)  
**Company:** GenStaff ([genstaff.net](https://genstaff.net))  
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan  
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

Gmail, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
