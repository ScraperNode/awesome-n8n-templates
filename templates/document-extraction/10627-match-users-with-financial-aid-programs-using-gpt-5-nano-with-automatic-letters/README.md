# 🔬 Match users with financial aid programs using GPT 5-Nano with automatic letters & emails

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
The webhook receives incoming profiles and extracts relevant demographic, financial, and credential data. The workflow then queries the programs database to identify suitable options, while the AI generates personalized recommendations based on eligibility and preferences. A formal recommendation letter is created, followed by a drafted outreach email tailored to coordinators. Parsers extract structured data from the letters and emails, a Slack summary is prepared for internal visibility, and the final response is sent to the appropriate recipients.

## Setup Steps
1. Configure AI agents by adding OpenAI credentials and setting prompts for the Program Matcher, Letter Writer, and Email Drafter.
2. Connect the programs database (Airtable or PostgreSQL) and configure queries to retrieve matching program data.
3. Set up the webhook by defining the trigger endpoint and payload structure for incoming profiles.
4. Configure JSON parsers to extract relevant information from profiles, letters, and emails.
5. Add the Slack webhook URL and define the summary format for generated communications.


## Prerequisites
- OpenAI API key
- Financial programs database
- Slack workspace with webhook
- User profile structure (income, GPA, demographics)


## Use Cases
- Universities automating 500+ annual applicant communications
- Scholarship foundations personalizing outreach at scale

## Customization
- Add multilingual support for international applicants
- Include PDF letter generation with signatures

## Benefits
Reduces communication time from 30 to 2 minutes per applicant, ensures consistent professional quality

## 🔗 Nodes Used

Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
