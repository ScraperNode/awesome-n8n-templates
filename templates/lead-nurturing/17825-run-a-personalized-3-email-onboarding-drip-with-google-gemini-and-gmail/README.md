# 💬 Run a personalized 3-email onboarding drip with Google Gemini and Gmail

> ⚡ **35 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow collects signups via an n8n form, logs them to Google Sheets, and uses Google Gemini to generate a 3-part personalized onboarding email drip sent through Gmail over five days.

## How it works
1. Receives a new signup submission from an n8n Form trigger with the user’s name, email, role, and goal.
2. Adds product and sender context to the signup data and appends the signup to a Google Sheets worksheet.
3. Uses Google Gemini to draft a short personalized welcome email and sends it immediately via Gmail.
4. Waits 2 days, then uses Google Gemini to write a tips-focused onboarding email and sends it via Gmail.
5. Waits 3 more days, then uses Google Gemini to write a final check-in email that invites a reply and sends it via Gmail.

## Setup
1. Add credentials for the Google Gemini (PaLM) API, Gmail OAuth2, and Google Sheets OAuth2.
2. Select the target Google Sheets spreadsheet and the “Signups” sheet (or update the sheet name) where new submissions should be appended.
3. Update the product name, product value, and sender name values to match your product in the product context step.
4. Publish the n8n form and share/embed it where users sign up, and confirm Gmail is allowed to send to external recipients.
5. Adjust the two Wait durations (2 days and 3 days) to match your desired onboarding cadence.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
