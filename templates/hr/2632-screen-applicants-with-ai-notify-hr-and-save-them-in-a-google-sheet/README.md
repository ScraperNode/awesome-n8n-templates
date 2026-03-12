# 👥 Screen applicants with AI, notify HR and save them in a Google Sheet

> ⚡ **6,338 views** · 👥 [HR & Recruitment](../)

## Description

## What this workflow does
This workflow helps HR teams screen CVs with AI, store compatibility ratings in Google Sheets, and send email notifications to candidates and HR. It simplifies the recruitment process.

1. CV Submission Form:
Candidates submit their details and CV (PDF) through a web form, triggering the workflow in n8n.
2. PDF Extraction & AI Rating:
The submitted CV is processed to extract text, and AI analyzes it to generate a compatibility rating.
3. Results Storage & Notifications:
Ratings are stored in a Google Sheet for easy access and organization.
10. Confirmation emails are automatically sent to both HR and the candidate.

## Setup
- Use the provided template to configure your form and connect it to n8n.
- Ensure your Google Sheets and email service integrations are active.

## Customization Instructions:

- Modify the email template to match your organization’s branding.
- Adjust the AI compatibility rating thresholds based on your requirements.
- Ensure you have updated the prompt for cv screening.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
