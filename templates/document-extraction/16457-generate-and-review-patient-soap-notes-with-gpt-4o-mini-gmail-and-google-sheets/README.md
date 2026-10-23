# 🔬 Generate and review patient SOAP notes with GPT-4o Mini, Gmail, and Google Sheets

> ⚡ **64 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects patient symptoms via an n8n Form, uses OpenAI (GPT-4o Mini) to draft a SOAP note, and sends it to a doctor for email approval in Gmail. Approved notes are saved to Google Sheets and notifications go out via Gmail and Telegram, with Slack alerts on errors.

## How it works
1. Receives a patient submission from an n8n Form with demographic details, symptoms, and contact info.
2. Sends the intake details to OpenAI (GPT-4o Mini) to generate a structured SOAP note draft and alerts a Slack channel if the AI generation fails.
3. Packages the patient details and SOAP draft (including a review token) and emails the draft to the assigned doctor via Gmail using a send-and-wait approval action.
4. Routes the workflow based on the doctor’s email decision (approve vs. request edit).
5. If approved, appends the patient data and SOAP note to Google Sheets, emails a confirmation to the patient via Gmail, and sends Telegram notifications to both the patient and doctor.
6. If an edit is requested, emails the original draft back to the doctor via Gmail and sends a Telegram message confirming the edit request.
7. If any other node fails, triggers a global error handler that posts execution details to Slack.

## Setup
1. Add credentials for OpenAI API, Gmail OAuth2, Google Sheets OAuth2, Telegram Bot, and Slack OAuth2.
2. Share the n8n Form URL from the trigger with patients and ensure the form fields match your intake requirements.
3. Update the assigned doctor email address and doctor Telegram chat ID used for routing notifications.
4. Select or create the target Google Sheets spreadsheet and worksheet, and ensure the columns used in the append step exist.
5. Choose the Slack channel for error alerts and confirm it is accessible to your Slack OAuth connection.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
