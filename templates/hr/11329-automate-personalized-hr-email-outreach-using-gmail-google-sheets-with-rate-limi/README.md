# 👥 Automate personalized HR email outreach using Gmail, Google Sheets with rate limiting

> ⚡ **93 views** · 👥 [HR & Recruitment](../)

## Description

## Automate Personalized HR Email Outreach with Rate Limiting

This workflow streamlines HR outreach by fetching contact data, validating emails, enforcing daily sending limits, and sending personalized emails with attachments, all while logging activity.

### How it works
1. Read HR contact data from Google Sheets.
2. Remove duplicates and validate email formats.
3. Apply dynamic daily email sending limits.
4. Generate personalized email content.
5. Download resumes for attachments.
6. Send emails via Gmail with attachments.
7. Log sending status (success/failure) to Google Sheets.

### Setup
1. Configure Google Sheets credentials.
2. Configure Gmail OAuth2 credentials.
3. Update 'Google Sheets - Read HR Data' with your document and sheet IDs.
4. Define email content in 'Email Creator' node.
5. Set 'Download Resume' URL to your resume repository.
6. Update 'Log to Google Sheets' with your tracking sheet IDs.

### Customization
Adjust the 'Rate Limiter' node's RAMP_START and LIMIT_BY_WEEK variables to match your desired sending schedule and volume.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
