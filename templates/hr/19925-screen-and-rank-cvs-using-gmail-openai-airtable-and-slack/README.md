# 👥 Screen and rank CVs using Gmail, OpenAI, Airtable, and Slack

> ⚡ **15 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow screens CVs received via Gmail (or an optional Google Drive folder), extracts and parses resume text with OpenAI, scores candidates against a job description stored in Airtable, writes results to an Airtable pipeline, and posts notifications to Slack and sends booking emails.

## How it works
1. Triggers when a new Gmail message arrives with an attachment (or, if enabled, when a file is created in a specific Google Drive folder).
2. Detects whether the attachment is a PDF or DOCX and extracts the CV text accordingly.
3. Uses OpenAI to parse the CV text into structured JSON fields like experience, skills, education, and projects while discarding protected attributes.
4. Fetches the active job description (and optional booking link) from an Airtable Config table and combines it with the parsed candidate data.
5. Uses OpenAI to score the candidate against the job description and returns a score, strengths, gaps, recommendation, and screening questions.
6. Creates a new record in an Airtable Pipeline table with the candidate details, scoring output, and a mapped status.
7. Routes outcomes by recommendation: posts shortlisted and “needs review” candidates to Slack, emails shortlisted candidates a booking link via Gmail, and holds rejected candidates in Airtable without sending notifications.
8. Runs every Monday morning to pull the last 7 days of Airtable pipeline records, compute totals and average score, and post a weekly digest to Slack.

## Setup
1. Connect credentials for Gmail, OpenAI, Airtable (Personal Access Token), and Slack.
2. In Airtable, create/configure a Config table with an `active` field and a job description field (plus an optional `booking_link`), and ensure exactly one record is marked `active = 1`.
3. In Airtable, create/configure the Pipeline table with the fields mapped in the workflow (for example Name, Email, Score, Recommendation, Status, Applied At, Strengths, and Gaps) and update the base/table IDs if yours differ.
4. Choose a single intake source by keeping the Gmail trigger active or enabling the Google Drive trigger and setting the folder ID to watch.
5. Set the Slack channel used for shortlist alerts, manual review posts, and the weekly digest, and confirm the booking URL included in the Config record is the one you want candidates to use.

## Requirements
- Credentials: Gmail, OpenAI, Airtable PAT, Slack
- Airtable Config: active, job_description, optional booking_link
- Airtable Pipeline: Name, Email, Score, Recommendation, Status, Applied At, etc.
- Slack hiring channel
- Booking URL is just a link in Config — no Calendly credential

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Airtable, Slack, Gmail, Google Drive Trigger, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
