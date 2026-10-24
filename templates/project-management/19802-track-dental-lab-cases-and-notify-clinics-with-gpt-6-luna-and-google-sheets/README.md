# 📋 Track dental lab cases and notify clinics with gpt-6-luna and Google Sheets

> ⚡ **24 views** · 📋 [Project Management](../)

## Description

Dental lab cases that keep clinics in the loop without anyone chasing updates. This workflow takes new case submissions from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, has gpt-6-luna check that the case is complete and draft the clinic acknowledgment, tracks every stage in Google Sheets, and sends the right email or alert the moment a case moves.

*Last updated: September 2026.*

## Quick Overview
This workflow captures dental lab case submissions via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, uses gpt-6-luna to assess completeness and draft an acknowledgment email, logs and tracks cases in Google Sheets, and sends status and daily production updates via Gmail, Discord, and Telegram.

## How it works
1. Receives a new case submission through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and normalizes the clinic and case details while generating a unique case ID and timestamps.
2. Validates required fields (clinic email, product type, due date) and, if missing, logs the error to Google Sheets, posts a Discord alert, and emails an invalid-submission notice.
3. Builds a case summary prompt and uses gpt-6-luna to assess completeness, identify missing items, set priority guidance, and draft a clinic acknowledgment email.
4. Assigns the case to a technician category, calculates urgency from the due date and rush flag, and appends the case (including AI outputs) to the Google Sheets “Cases” tab.
5. Emails the clinic the acknowledgment, posts the new case to Discord, and if the case is rush/urgent or incomplete, emails the lab manager and sends a Telegram alert.
6. Accepts status updates via a webhook, validates the case ID and stage, updates the matching row in Google Sheets, and appends an entry to the “Status Log” tab.
7. Notifies clinics by email when a case becomes ready or delivered, and sends a Telegram alert (plus a clinic email) when a case is flagged for remake.
8. Runs daily at 08:00, analyzes the Google Sheets case board for overdue/due-soon/stuck items, uses gpt-6-luna to write a morning brief, posts it to Discord, emails it to the lab manager, and sends a Telegram alert if any cases are overdue.

## Setup
1. Create a Google Sheets file with three tabs named “Cases”, “Status Log”, and “Errors”, and ensure the columns match those appended/updated by the workflow.
2. Add credentials for Google Sheets OAuth2, OpenAI, Gmail OAuth2, Discord Bot, and Telegram, and select the correct accounts in the respective nodes.
3. Update recipient details such as the lab manager email address, Discord server/channel, and Telegram chat ID used for alerts.
4. Publish the intake form and share its URL with clinics, and copy the status webhook endpoint (/dental-case-status) into whatever system will post lab stage updates.
5. Confirm the daily schedule time (08:00) matches your desired timezone and adjust the cron expression if needed.

### Quick Answers
**How does a new case get into the lab?**
The clinic submits it on the form, the workflow normalizes the clinic and case details and generates a unique case ID, then checks that clinic email, product type, and due date are present. Anything missing is logged to Google Sheets, posted to Discord, and answered with an invalid-submission notice.

**What does gpt-6-luna actually do?**
It assesses the case for completeness, lists missing items, sets priority guidance, and drafts the clinic acknowledgment email. A second AI step writes the morning production brief.

**How do clinics hear about progress?**
Stage updates sent to the status webhook are validated and used to update the matching row in the Cases tab and append to the Status Log. Ready and delivered cases trigger clinic emails, and a remake flags the lab manager on Telegram and notifies the clinic by email.

**What happens in the daily 08:00 run?**
The whole case board is analyzed for overdue, due-soon, and stuck items, gpt-6-luna writes the morning brief, and it is posted to Discord and emailed to the lab manager, with a Telegram alert when any case is overdue.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
