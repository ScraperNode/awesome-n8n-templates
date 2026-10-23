# 💬 Rescue at-risk gym members using Google Sheets, Gemini, and Twilio SMS

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/YNinqI84rNw

This workflow runs weekly to analyze Google Sheets member attendance, calculate churn risk scores, and use Google Gemini to generate personalized re-engagement SMS copy, then sends eligible messages via Twilio and logs the outreach back to Google Sheets.

## How it works
1. Runs weekly on a schedule.
2. Pulls all active members from a Google Sheets “Members” tab and fetches each member’s attendance history from a Google Sheets “Attendance” tab.
3. Calculates churn metrics per member (visits in the last 30 days vs. prior 30 days, attendance drop percentage, days since last visit) and derives a capped 0–100 risk score.
4. Filters to members with a churn signal and a risk score of at least 60, and skips the rest.
5. Looks up the member’s profile details in a Google Sheets “MemberProfiles” tab and sends the profile plus churn metrics to Google Gemini to produce a short internal diagnosis, a ≤300-character SMS message, and an SMS eligibility flag.
6. If the member is marked SMS-eligible, sends the generated message to the member via Twilio (SMS/MMS/WhatsApp) and appends the sent message, timestamp, member ID, and risk score to a Google Sheets “OutreachLog” tab.

## Setup
1. Set up a Google Sheets Service Account credential in n8n and share the “Gym Member Management & Outreach Tracker” spreadsheet with the service account email.
2. Add a Google Gemini (Google PaLM) API credential for the Gemini chat model used by the AI Agent.
3. Add a Twilio credential, set a valid Twilio “From” number, and confirm the workflow’s message type (SMS vs. WhatsApp) matches your Twilio configuration.
4. Update the Google Sheet document ID/sheet tabs as needed and ensure your sheets include the expected columns (e.g., member_id, status, join_date, visit_date, phone) plus an “OutreachLog” tab for appends.
5. Adjust the churn threshold (risk score ≥ 60) and weekly schedule timing to match your retention policy and outreach volume limits.

## 🔗 Nodes Used

Google Sheets, Twilio, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
