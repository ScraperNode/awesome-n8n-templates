# 🔬 Automate patient intake and AI risk triage with Azure OpenAI, Google, and Slack

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📊 Description
Automate patient pre-arrival intake, AI risk assessment, and real-time doctor alerts in one seamless healthcare workflow. ⏰📧 This automation sends scheduled intake reminders before appointments, analyzes submitted patient data using AI, and flags high-risk cases instantly via Slack. Powered by Azure OpenAI, it evaluates symptoms, allergies, and medical history to generate structured risk levels and doctor preparation notes. Reduce manual triage work, improve patient safety, and ensure physicians are fully prepared before every visit. 🤖🚨

## 🔄 What This Template Does
⏰ Runs hourly to fetch upcoming appointments from Google Calendar.
📧 Sends pre-arrival intake emails to patients via Gmail.
📊 Monitors new intake form submissions in Google Sheets.
🤖 Analyzes symptoms and medical history using Azure OpenAI (GPT-4o-mini).
🧹 Parses and normalizes structured AI output for consistency.
📝 Stores risk level and doctor notes back into Google Sheets.
🚨 Sends instant Slack alerts if a patient is classified as High risk.

## ✅ Key Benefits
✅ Automates pre-visit intake collection with zero manual follow-up
✅ Uses AI-powered risk triage to support clinical decision-making
✅ Flags high-risk or urgent cases instantly
✅ Reduces front-desk workload and manual screening time
✅ Improves patient safety through structured early assessment
✅ Ensures doctors are prepared before appointments begin

## ⚙️ Features
- Google Calendar hourly appointment trigger
- Gmail automated intake reminder emails
- Google Sheets real-time form monitoring
- Azure OpenAI GPT-4o-mini risk assessment engine
- Structured JSON AI output with confidence scoring
- Automatic data normalization and formatting
- Conditional risk triage logic (Low / Medium / High / Emergency)
- Slack instant doctor notifications for critical cases

## 🔐 Requirements
- Google Calendar OAuth2 credentials
- Gmail OAuth2 credentials
- Google Sheets OAuth2 credentials
- Azure OpenAI API credentials (GPT-4o-mini deployment)
- Slack OAuth2 credentials

## 🎯 Target Audience
- Private clinics and healthcare providers
- Telemedicine platforms
- Medical practices handling high patient volume
- Healthcare automation consultants and digital health startups

## 🔗 Nodes Used

Cron, Google Sheets, Slack, Google Calendar, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
