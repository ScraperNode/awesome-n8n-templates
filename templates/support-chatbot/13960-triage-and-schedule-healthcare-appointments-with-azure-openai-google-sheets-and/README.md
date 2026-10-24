# 💬 Triage and schedule healthcare appointments with Azure OpenAI, Google Sheets and Gmail

> ⚡ **428 views** · 💬 [Support Chatbots](../)

## Description

## 📊 Description
Automate your clinic’s patient intake and scheduling with an intelligent AI Healthcare Appointment Booking Agent built in n8n. 🏥 This workflow receives patient form submissions, analyzes symptoms using AI triage, determines urgency levels, and automatically assigns the most suitable doctor based on specialty. The agent stores structured patient records in Google Sheets and sends automated appointment schedule emails to doctors. 📧 It also follows up with patients after visits by sending personalized feedback requests, creating a complete AI-driven patient management workflow. This automation acts as a virtual clinic coordinator, streamlining healthcare operations while improving response time and patient experience. 🤖

## What This Template Does
🔔 Capture Patient Leads – A webhook receives patient intake form data including name, age, gender, and symptoms.
🤖 Run AI Medical Triage – An AI agent evaluates symptoms to determine urgency level and recommended medical department.
📝 Store Patient Intake Data – Structured triage results are automatically saved to a Google Sheets patient database.
🧠 Assign the Best Doctor – A second AI agent reads the doctor list and selects the most appropriate specialist.
📅 Create Appointment Records – The assigned doctor and appointment details are written to the scheduling sheet.
📧 Notify Doctors Automatically – Doctors receive an HTML email with their daily appointment schedule.
⏰ Monitor Completed Visits – A scheduled workflow checks completed consultations.
💬 Request Patient Feedback – Patients automatically receive a feedback form email after their visit.

## Key Benefits
✅ Automates the entire patient intake to appointment workflow
 ✅ Uses AI agents to perform smart symptom triage and doctor assignment
 ✅ Eliminates manual scheduling and patient routing
 ✅ Keeps patient and doctor records organized in Google Sheets
 ✅ Automatically sends doctor schedule notifications and patient feedback emails
 ✅ Improves clinic efficiency and response time

## Features
- AI-powered patient triage agent for symptom evaluation
- AI doctor assignment agent using specialty matching
- Webhook-based patient intake form integration
- Google Sheets database for patient records and appointments
- Automated HTML doctor schedule email generation
- Scheduled follow-up system for patient feedback
- Custom JavaScript normalization nodes for structured AI outputs

## Requirements
- Azure OpenAI API credentials
- Google Sheets OAuth2 connection
- Gmail OAuth2 credentials for email notifications
- A Google Spreadsheet with the following tabs:
- Patient forms
- Doctor details
- Scheduled appointments

## Target Audience
🏥 Healthcare clinics and medical practices
🧑‍⚕️ Hospitals managing patient intake and appointment routing
🤖 Healthcare automation builders using n8n + AI agents
🛠️ Healthtech teams building AI-assisted scheduling systems

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
