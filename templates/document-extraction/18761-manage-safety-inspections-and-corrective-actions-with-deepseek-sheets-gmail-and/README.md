# 🔬 Manage safety inspections and corrective actions with DeepSeek, Sheets, Gmail and Telegram

> ⚡ **66 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Safety inspections that actually follow through. Submit findings via form and this workflow turns non-pass results into AI-written corrective actions, logs everything to Sheets, and chases overdue items with daily reminders plus a weekly digest. Nothing stays open and forgotten.

*Last updated: September 2026.*

## Quick Overview
This workflow collects safety inspection submissions via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, uses DeepSeek (OpenAI API) to turn non-pass results into corrective actions, logs everything to Google Sheets, and sends critical alerts, overdue reminders, and a weekly digest via Telegram and Gmail.

## How it works
1. Receives a safety inspection submission from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form with statuses and notes for four safety areas.
2. Validates that required fields are present, and if anything is missing sends an invalid-submission alert to Telegram and Gmail.
3. Normalizes the inspection data and sends the findings to DeepSeek (via the OpenAI API) to generate structured corrective actions for any area not marked Pass.
4. Parses and validates the AI output, calculates due dates and severity counts, and builds a critical-findings list when applicable.
5. Appends the inspection summary to the Inspections tab in Google Sheets and appends each corrective action to the CorrectiveActions tab.
6. If any critical findings exist, sends an immediate critical alert to Telegram and an email report via Gmail.
7. Runs daily to detect overdue open corrective actions in Google Sheets and sends overdue reminders to Telegram and Gmail when any are found.
8. Runs weekly to compute inspection/action stats from Google Sheets, uses DeepSeek to draft a short digest, and sends the digest to Telegram and Gmail.

## Setup
1. Add credentials for Google Sheets, OpenAI API (used with the DeepSeek model), Gmail OAuth2, and Telegram.
2. Create or select a Google Sheets spreadsheet with Inspections and CorrectiveActions tabs (and ensure the columns match the fields this workflow appends).
3. Update the Google Sheets document ID, Gmail recipient address, and Telegram chat ID to match your environment.
4. Share the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form URL from the Safety Inspection Form trigger with inspectors and adjust the form fields/inspection areas and AI prompts if your checklist differs.
5. Confirm the schedule times (daily 07:00 and Mondays 09:00 in the Asia/Jakarta timezone) fit your reporting cadence.

### Quick Answers
**What happens on critical findings?**  
An immediate alert goes to Telegram plus an email report via Gmail.  
**How are overdue actions chased?**  
A daily scan finds open overdue actions and reminds via Telegram and Gmail.  
**Is there a weekly summary?**  
Yes. Inspection and action stats with an AI-written digest, on the weekly schedule.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
