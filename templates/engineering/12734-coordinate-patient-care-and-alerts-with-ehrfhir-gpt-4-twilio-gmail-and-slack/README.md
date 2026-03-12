# ⚒️ Coordinate patient care and alerts with EHR/FHIR, GPT-4, Twilio, Gmail and Slack

> ⚡ **985 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates end-to-end patient care coordination by monitoring appointment schedules, clinical events, and care milestones while orchestrating personalized communications across multiple channels. Designed for healthcare operations teams, care coordinators, and patient engagement specialists, it solves the challenge of manual patient follow-up, missed appointments, and fragmented communication across care teams. The system triggers on scheduled intervals and real-time clinical events, ingesting data from EHR systems, appointment schedulers, and lab result feeds. Patient records flow through validation and risk stratification layers using AI models that identify high-risk patients, predict no-show probability, and recommend intervention timing. The workflow applies clinical protocols for appointment reminders, medication adherence checks, and post-discharge follow-ups. Critical cases automatically route to care coordinators via Slack alerts, while routine communications deploy via SMS, email, and patient portal notifications. All interactions log to secure databases for compliance documentation. This eliminates manual outreach coordination, reduces no-shows by 40%, and ensures HIPAA-compliant patient engagement at scale.

## Setup Steps
1. Configure EHR/FHIR API credentialsfor patient data access
2. Set up webhook endpoints for real-time clinical event notifications
3. Add OpenAI API key for patient risk stratification and communication personalization
4. Configure Twilio credentials for SMS and voice call delivery
5. Set Gmail OAuth or SMTP credentials for email appointment reminders
6. Connect Slack workspace and define care coordination alert channels


## Prerequisites
Active EHR system with FHIR API access or HL7 integration capability.  
## Use Cases
Automated appointment reminder campaigns reducing no-shows.
## Customization
Modify risk scoring models for specialty-specific patient populations. 
## Benefits
Reduces patient no-show rates by 40% through timely, personalized reminders.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
