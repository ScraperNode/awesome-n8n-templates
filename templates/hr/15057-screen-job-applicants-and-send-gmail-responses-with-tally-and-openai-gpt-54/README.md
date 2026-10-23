# 👥 Screen job applicants and send Gmail responses with Tally and OpenAI GPT-5.4

> ⚡ **70 views** · 👥 [HR & Recruitment](../)

## Description

## Description

This workflow automatically screens job applicants, scores them against role requirements, sends personalized emails (interview invitation or polite rejection), and logs everything to a Google Sheet. It replaces hours of manual resume triage per hiring cycle.

## Overview

A candidate submits an application through a Tally form with their name, email, role, experience, and motivation. Two AI agents process the application: one extracts and normalizes the fields, the other scores the candidate 1-10 against the role requirements. An IF node routes the applicant based on score: 7 or above triggers an interview invitation email, below 7 triggers a personalized rejection email. Both paths log the applicant with their score, grade, evaluation, and status to a Google Sheet for the hiring manager.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow.
- **Tally**: Free form builder used as the job application form. Create forms at [tally.so](https://tally.so).
- **OpenAI (GPT-5.4)**: Powers two AI agents for applicant data extraction and candidate scoring/evaluation.
- **Gmail**: Sends personalized interview invitations and rejection emails automatically.
- **Google Sheets**: Logs every applicant with their score, grade, AI evaluation, and shortlisted/rejected status.

## How it works

1. A candidate submits a Tally application form with their full name, email, role applied for, years of experience, experience summary, and motivation statement.
2. Agent 1 extracts and normalizes all applicant fields from the raw Tally payload.
3. Agent 2 scores the candidate 1-10 based on relevance of experience and quality of motivation, assigns a grade (A-D), identifies key strengths and concerns, and writes a 2-sentence evaluation for the hiring manager.
4. An IF node checks the score: 7 or above routes to the shortlist path, below 7 routes to the rejection path.
5. Shortlisted candidates receive a personalized interview invitation email via Gmail.
6. Rejected candidates receive a polite, personalized rejection email via Gmail.
7. Both paths set a status (Shortlisted or Rejected) and log the applicant to a Google Sheet with all details.

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance.
2. **Update Job Requirements (Critical First Step)**: Open the Score Candidate agent node and update the system prompt with the actual job requirements, must-have skills, and evaluation criteria for the open role. Without this, the AI scores against generic criteria.
3. **Configure Tally**: Add your Tally API key in n8n credentials (get it from Tally &gt; Settings &gt; Integrations &gt; API). Select your Tally form in the Tally Trigger dropdown.
4. **Configure OpenAI**: Add your OpenAI API key in n8n credentials.
5. **Configure Gmail**: Add Gmail OAuth2 credentials using the Google account that will send the emails. Edit the email templates in the Send Interview Invitation and Send Rejection Email nodes if needed.
6. **Configure Google Sheets**: Add Google Sheets OAuth2 credentials.
7. **Create a Tally Form**: Create a job application form in Tally with these fields:
   - Full Name (short text)
   - Email (email field)
   - Role Applied For (short text or dropdown)
   - Years of Experience (number)
   - Experience Summary (long text)
   - Why do you want this role? (long text)
8. **Set Up Google Sheets**: Create a spreadsheet with a tab named exactly `applications` and these column headers in Row 1 (all lowercase, copy-paste ready):

   | timestamp | name | email | role | score | grade | evaluation | status |
   |-----------|------|-------|------|-------|-------|------------|--------|

9. **Connect the Sheet**: Paste your spreadsheet ID into the Log to Applications Sheet node.
10. **Test**: Submit a test application through your Tally form to verify the full flow: scoring, email delivery, and sheet logging.

## Use Cases

- **HR Teams**: Automate first-pass screening for high-volume roles and save 2-3 hours per hiring cycle.
- **Startup Founders**: Screen applicants without a dedicated recruiter.
- **Recruiting Agencies**: Triage candidate submissions across multiple open roles.
- **Hiring Managers**: Get an AI evaluation with score and grade before reviewing any application manually.
- **Internal Mobility Programs**: Let employees apply for internal roles with automated, fair scoring.

## Notes

- The score threshold (7) is set in the IF node. Adjust it higher for stricter screening or lower for more inclusive shortlisting.
- Edit the email templates in both Gmail nodes to match your company's tone and include relevant links (calendar scheduling, office address, etc.).
- GPT-5.4 costs approximately $2.50 per million input tokens and $15 per million output tokens. A typical applicant screening uses 2 API calls, costing approximately $0.005-0.01 per applicant.
- For multiple open roles, create separate Tally forms per role and duplicate this workflow, customizing Agent 2's system prompt for each role's requirements. Tally's free plan has no form limit, so this scales without extra cost.
- The workflow sends emails from whatever Gmail account you connect. Make sure it's the appropriate hiring/recruitment account.

## Connect with Me

- Website: https://www.nofluff.online
- YouTube: https://www.youtube.com/@YaronBeen/videos
- LinkedIn: https://www.linkedin.com/in/yaronbeen/

#n8n #automation #tally #openai #gpt5 #recruitment #hiring #hrautomation #gmail #googlesheets #applicantscreening #airecruitment #n8nworkflow #workflow #nocode #hiringautomation #candidatescoring #talentacquisition #hrtech #jobapplication #tallyforms

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
