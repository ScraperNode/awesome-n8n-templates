# 📋 Jira ticket creation from Google Forms with sheet updates and email notifications

> ⚡ **528 views** · 📋 [Project Management](../)

## Description

## Description

Automated workflow that creates Jira issues directly from Google Forms. The flow validates and normalizes the data, creates the Jira issue, writes the key back to the Google Sheet, and sends a Gmail notification.

## Context

This template bridges lightweight Google Forms with enterprise Jira. It enables instant ticket creation while keeping Jira the single source of truth. The flow is idempotent (no duplicates) and production-friendly, with clean field normalization and safe mappings.

## Target Users

- Product / Ops teams running request portals on Google Forms
- Engineering managers who need quick Jira integration without custom UI
- Project managers who track intake in Google Sheets but want Jira as the system of record
- Orgs that want controlled ticket creation without exposing Jira directly

## Technical Requirements

- Jira Cloud project + API email + API token + “Create issues” permission
- Google Form + response Sheet
- Gmail credential for notifications


## Workflow Steps

![image.png](fileId:2347)


- Trigger when a row is added
- Normalize Fields – Trim/clean text
- Create Jira Issue – POST to Jira REST; safe mappings 
- Update Google Sheet – Match by Horodateur or rowNumber; write jira_key, issue_url, status, updated_at.
- Send Gmail – HTML email with key, title, link, priority, requester.

## Key Features

- Real-time (no polling): Forms → trigger→ n8n
- Idempotent updates using the Form timestamp (“Horodateur”)
- Clean normalization: summary/description/labels all standardized once
- Safe Jira mappings: priority via ID
- Notification: branded HTML email with all key fields


## Expected Output
- Google Form to create the issue
![image.png](fileId:2343)


- Sheet updated with jira_key, issue_url, status, updated_at


![image.png](fileId:2346)

- A valid Jira issue in the configured project

![image.png](fileId:2344)
- Email sent to stakeholders / requester

![image.png](fileId:2345)

## How it works 

⏰ Trigger – As soon as a row is added, the workflow is triggered
🧱 Normalize – Clean summary/description/labels; pick reporter_email
🧾 Create – POST to /rest/api/3/issue, capture { id, key, self }
📗 Update – Write jira_key, issue_url, status, updated_at back to the Sheet
✉️ Notify – Send Gmail HTML confirmation to stakeholders/requester

## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=SP_GAyBfv0Q)

## About me :
I'm Yassin, IT Project Manager, Agile & Data specialist. Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Google Sheets, Jira Software, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
