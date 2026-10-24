# 🎣 Score and email cleaning quotes from JotForm with Gemini and Google Sheets

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/5QmlxcOuuSg

This workflow captures commercial cleaning quote requests from Jotform, uses Google Gemini to extract requirements and draft a quote email, calculates an internal quote range, logs the lead to Google Sheets, and emails qualified prospects via Gmail.

## How it works
1. Triggers when a new submission is received from a Jotform website quote form.
2. Normalizes the submission fields (name, email, phone, property details) and filters out entries missing required information.
3. Uses Google Gemini to analyze the request notes and return structured requirements like bathrooms/kitchens, special requirements, service type, and a complexity multiplier.
4. Calculates estimated labor hours and an internal low/high quote range based on square footage, extracted requirements, and property-type adjustments.
5. Filters out leads that don’t meet basic job-fit rules (e.g., square footage range and positive labor hours).
6. Uses Google Gemini to generate a structured estimator summary (subject, HTML email body, urgency, next step, and lead quality score).
7. If the lead quality score is above the threshold, appends/updates the lead in Google Sheets and sends the generated quote email to the customer via Gmail.

## Setup
1. Connect your Jotform account and select the correct form ID (or update it to match your quote request form).
2. Add a Google Gemini (Google PaLM) API credential and ensure the selected model is available in your account.
3. Connect Gmail OAuth2 and confirm the workflow is allowed to send email to customers.
4. Connect a Google Sheets service account, set the target spreadsheet and sheet, and ensure the column names match the fields being written (including the email-matching column).

## 🔗 Nodes Used

Google Sheets, Jotform Trigger, Gmail, Filter, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
