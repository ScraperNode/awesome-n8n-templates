# 👥 Manage volunteer shift signups and reminders with DeepSeek and Google Sheets

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

Volunteer shifts that fill themselves. This workflow takes signups through a form, checks capacity in Google Sheets, and has AI write confirmation or waitlist emails. Coordinators get Telegram updates, volunteers get reminders, and a weekly digest keeps everyone aligned.

*Last updated: September 2026.*

## Quick Overview
This workflow collects volunteer shift signups via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, checks shift availability in Google Sheets, and uses OpenAI (DeepSeek) to write confirmation or waitlist emails sent through Gmail, while notifying coordinators in Telegram and sending scheduled reminder and digest messages.

## How it works
1. Receives a volunteer signup through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and normalizes the submitted details (name, email, shift ID, experience, and notes).
2. Validates that required fields are present, and if not, alerts the coordinator in Telegram and sends a review email via Gmail.
3. Looks up the requested shift and current signup count in Google Sheets to determine whether the shift exists and has remaining capacity.
4. If the shift is unknown, sends Telegram and Gmail notifications to the coordinator with the skipped signup details.
5. If capacity is available, uses OpenAI (DeepSeek) to generate a confirmation email, appends the signup to the Google Sheets log, emails the volunteer via Gmail, and sends a Telegram alert.
6. If the shift is full, uses OpenAI (DeepSeek) to generate a waitlist email, appends the waitlisted signup to Google Sheets, emails the volunteer via Gmail, and sends a Telegram alert.
7. On a schedule, reads confirmed signups from Google Sheets to email reminders for shifts happening today or tomorrow and posts a Telegram recap, and also compiles weekly stats, generates an AI-written digest, and sends it via Gmail and Telegram.

## Setup
1. Create or choose a Google Sheets spreadsheet with a Shifts tab (including shift_id, role, date, start_time, end_time, location, description, capacity) and a Signups tab matching the fields the workflow appends.
2. Add a Google Sheets OAuth2 credential and update the spreadsheet ID and sheet names if you are not using the provided document.
3. Add a Gmail OAuth2 credential and replace the coordinator email address used for invalid/unknown shift notices and weekly digests.
4. Add a Telegram bot credential and replace the chat ID used for coordinator alerts and recaps.
5. Add an OpenAI API credential (used with the deepseek-v4-flash chat model) and adjust the prompts or model name if needed.
6. Publish the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and share its URL with volunteers, and update the schedule triggers (cron expressions) to the times you want reminders and digests to run.

### Quick Answers
**What if a shift is full?**  
The volunteer gets an AI-written waitlist email instead of a confirmation.  
**When do reminders go out?**  
Scheduled emails for shifts happening today or tomorrow, plus a weekly digest with stats.  
**Who hears about problems?**  
Coordinators via Telegram and Gmail for invalid or unknown-shift signups.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
