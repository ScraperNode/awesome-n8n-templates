# 👥 Screen CVs for multiple roles with OpenRouter, Google Sheets, Gmail and Calendly

> ⚡ **132 views** · 👥 [HR & Recruitment](../)

## Description

This template automates the complete hiring pipeline for 
digital agencies managing applications across multiple job 
roles. When a candidate submits a Google Form with their 
CV, the system scores it with AI against a role-specific 
weighted job profile, lets HR decide in Google Sheets with 
a single typed decision, sends a personalized email 
automatically, and tracks the Calendly interview booking 
in real time — all without leaving the tools you already use.

This template contains 3 linked workflows that must all 
be active for the full pipeline to run.

## How it works

**Workflow 1 — CV Screening Pipeline**

- Triggers when a new row is added to the Google Form 
  responses sheet
- Extracts the Google Drive file ID from the CV upload 
  URL, handling all three Drive URL formats automatically
- Checks an n8n Data Table to block duplicate 
  applications by email — stops processing if the 
  candidate already exists
- Routes the candidate to the correct job profile based 
  on their selected role using a Switch node
- Each job profile (Set node) defines: required skills, 
  nice-to-have skills, minimum years of experience, 
  seniority thresholds (Junior / Mid / Senior), and 
  weighted scoring criteria (technical skills weight, 
  experience weight, nice-to-have weight)
- All branches converge into a single Normalize Data 
  node that cleans Google Form field names into 
  standardized keys
- CV is downloaded from Google Drive and extracted from 
  PDF to plain text
- AI evaluates the CV using a dynamically built prompt 
  pulling all values from the job profile — no 
  hardcoded role logic in the AI node
- Structured output parser returns: score (out of 10), 
  seniority level, recommendation (Interview / Maybe / 
  Reject), matched skills, missing skills, 
  nice-to-have matched, experience comment, red flags, 
  and a plain English summary
- All results are written back to the same Google Sheet 
  row matched by the candidate's email address

**Workflow 2 — HR Decision Email Sender**

- Watches the Google Sheet every minute for updates to 
  the HR_Decision column
- An IF node confirms the decision is filled and 
  Email_Status is not already "Sent" — preventing 
  duplicate emails if the sheet is updated again
- HR types exactly "Send Invite" or "Send Rejection" 
  in the HR_Decision column to trigger the correct path
- Interview invitation email includes a pre-filled 
  Calendly booking link with the candidate's name and 
  email already populated as URL parameters
- Rejection email delivers a warm, personalized message 
  referencing the role applied for
- After sending, Email_Status is immediately updated 
  to "Sent" in the sheet

**Workflow 3 — Calendly Interview Tracker**

- Listens for Calendly webhook events in real time: 
  invitee.created and invitee.canceled
- On booking: extracts the interview start time, 
  formats it to your local timezone, and writes it to 
  the Interview_Time column matched by email
- On cancellation: checks the rescheduled flag — if 
  true, stops and lets the new invitee.created event 
  handle the update; if false, writes "Meeting 
  canceled" to the sheet

## How to use

1. Connect Google Sheets Trigger credential (OAuth2) 
   and point it to your Form Responses sheet
2. Connect Google Drive credential (OAuth2) — needs 
   read access to the folder where Google Forms 
   stores CV uploads
3. Connect OpenRouter credential — get a free API key 
   at openrouter.ai. Default model is set to a free 
   model for testing. Switch to a stronger model for 
   production
4. Connect Gmail credential (OAuth2) for sending 
   invitation and rejection emails
5. Connect Calendly credential (OAuth2)
6. In the **Invitation Message** node, replace 
   YOUR_CALENDLY_LINK with your actual Calendly 
   event URL
7. Add these columns manually to your Google Form 
   responses sheet: score, seniority, recommendation, 
   matched_skills, missing_skills, nice_to_have_matched, 
   experience_comment, red_flags, summary, HR_Decision, 
   Email_Status, Interview_Time
8. Create an n8n Data Table named **CV Screening** 
   with a single column: Email (string type)
9. Customize each Job Profile Set node with your 
   agency's actual role requirements, skill lists, 
   and scoring weights
10. Activate all three workflows

## Requirements

- **Google Sheets** (OAuth2) — application tracking 
  and HR decision sheet
- **Google Drive** (OAuth2) — CV file storage and 
  download
- **Gmail** (OAuth2) — sending invitation and 
  rejection emails
- **OpenRouter** (API key) — AI model access for 
  CV evaluation
- **Calendly** (OAuth2) — interview booking and 
  cancellation tracking
- **n8n Data Table** — built-in n8n feature, 
  no external service needed

## Notes & customization

- **To add a new job role:** add the role to your 
  Google Form dropdown, add a new condition to the 
  Route by Job Role Switch node, and duplicate any 
  existing Job Profile Set node with updated values
- **Scoring weights:** tech_weight, experience_weight, 
  and nice_to_have_weight in each Job Profile node 
  must add up to 100
- **HR_Decision values are case-sensitive:** type 
  Send Invite or Send Rejection exactly as written
- **Calendly email matching:** the candidate must 
  book using the same email they applied with — the 
  invitation link pre-fills this automatically so 
  this is handled in normal use
- **Free model limits:** OpenRouter free models 
  allow approximately 200 requests per day, which 
  is sufficient for most agency hiring volumes
---

## 📬 Contact Information
For Help and queries, contact

* **LinkedIn:** [Salman Mehboob](https://www.linkedin.com/in/salman-mehboob-pro/)
* **Email:**[salmanmehboob1947@gmail.com](mailto:salmanmehboob1947@gmail.com)

## 🔗 Nodes Used

Google Sheets, Google Drive, Calendly Trigger, Gmail, Google Sheets Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
