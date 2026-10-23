# 👥 Auto-Update job application status from Gmail to Google Sheets

> ⚡ **161 views** · 👥 [HR & Recruitment](../)

## Description

## How this works
* Every time you receive an email, and if that email is about your job application, then the status of your job application will be updated in the Google Sheet (No more manual tracking)

## How to set it up
**1 :** Create API keys for Google sheet/Gmail [Link](https://console.cloud.google.com/apis), and OpenRouter [link](https://openrouter.ai/workspaces/default/keys/)
- If you do not know how to create and add an API key, then search on Google, and you will find a solution, or contact me (you will find that in my n8n profile)

**2 :** Create a Google sheet (JobApplicationStatus) (with three column headings "Company", "JobRole", and "Status") in your Google Drive and link it in this workflow in the Google Sheet node

## Constomization
* Replace with a better free/paid AI model you like (you don't need to, free also works)
* Edit the prompt to get better results if you find any problem with the AI output
* Feel free to change the workflow for other similar usecase

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
