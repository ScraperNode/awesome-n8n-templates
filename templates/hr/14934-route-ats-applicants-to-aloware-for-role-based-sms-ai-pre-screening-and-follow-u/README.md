# 👥 Route ATS applicants to Aloware for role-based SMS AI pre-screening and follow-up

> ⚡ **33 views** · 👥 [HR & Recruitment](../)

## Description

## Description
Automate the full candidate outreach lifecycle: when a new application hits your ATS, this workflow validates the phone number, creates the contact in Aloware, sends a department-specific SMS, routes to the right AI pre-screening sequence based on role type, then follows up 24 hours later if the candidate hasn't responded - notifying the hiring manager if manual outreach is needed.
Speed kills in recruiting - not speed of hiring, but speed of response. Top candidates are off the market within 10 days, and the first recruiter to make contact has a massive advantage. This workflow closes the gap between "application received" and "first outreach" to seconds, while adding smart routing and a built-in safety net for non-responsive candidates.

## How it works

1. A Webhook receives new application data from your ATS (Greenhouse, Lever, BambooHR, Workday, or any system that can POST JSON).
2. A Set node normalizes the candidate payload — phone, name, email, job title, department, application ID, source, hiring manager email, and timestamp. The expressions handle multiple ATS payload structures so the workflow works across platforms without modification.
3. An IF node validates whether the candidate has a phone number. Applications without a phone are gracefully skipped — no errors, no failed API calls.
4. An HTTP Request creates or updates the candidate as a contact in Aloware via /webhook/forms, storing the role title, department, application ID, and source in custom fields and notes.
5. A Switch node routes by department:

	- Sales/BD/SDR roles → sends a sales-focused welcome SMS + enrolls in a Sales AI Pre-screening Sequence.
	- Engineering/Dev/QA roles → sends a tech-focused welcome SMS + enrolls in a Tech AI Pre-screening Sequence.
	- All other roles (fallback) → sends a general welcome SMS + enrolls in an Operations Pre-screening Sequence.


7. A Merge node converges all three branches back into a single path.
8. A Wait node pauses the workflow for 24 hours.
9. An HTTP Request looks up the candidate's contact in Aloware to check whether they've communicated since the initial SMS.
10. An IF node evaluates the response:

11. Candidate responded → no further action needed.
12. No response → sends a follow-up SMS, then fires a webhook notification to the hiring manager (Slack, Teams, or any endpoint) flagging the candidate for manual outreach.



## How to use

1. Import the JSON into n8n.
2. Go to Settings → Variables and add:
3. 
4. ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, COMPANY_NAME
5. ALOWARE_SALES_SEQUENCE_ID — AI Pre-screening Sequence for sales roles
6. ALOWARE_TECH_SEQUENCE_ID — AI Pre-screening Sequence for engineering roles
7. ALOWARE_OPS_SEQUENCE_ID — AI Pre-screening Sequence for general/operations roles
8. SLACK_WEBHOOK_URL - (optional) Slack incoming webhook URL for hiring manager alerts


- In Aloware, create three AI Pre-screening Sequences (one per department) with steps like: SMS → AI Agent call → wait → follow-up SMS. Copy each Sequence ID into the variables above.
- Copy the Webhook URL from the trigger node and paste it into your ATS webhook settings.
- Edit the Switch node conditions to match your organization's department naming conventions (e.g., if your ATS uses "Revenue" instead of "Sales").
- Toggle the workflow to Active and submit a test application.

## Requirements

Aloware account with API access and at least one outbound line
ATS capable of sending webhook POSTs on new applications (Greenhouse, Lever, BambooHR, Workday, etc.)
(Optional) Slack workspace with an incoming webhook for hiring manager notifications

#### Customising this workflow

Add more branches to the Switch node for additional departments (Marketing, Customer Success, Finance, etc.) with tailored messaging and sequences.
Replace the Slack webhook with an email notification using n8n's Send Email node for teams that don't use Slack.
Add a Google Sheets node after the Merge to log every application to a recruiting analytics spreadsheet.
Extend the follow-up logic with a second Wait + check cycle (e.g., 72 hours) before marking the candidate as unresponsive.
Connect to your HRIS or Google Calendar API to auto-schedule screening calls when a candidate replies YES.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
