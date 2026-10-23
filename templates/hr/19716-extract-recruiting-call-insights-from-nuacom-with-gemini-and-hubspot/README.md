# 👥 Extract recruiting call insights from NUACOM with Gemini and HubSpot

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow triggers on NUACOM calls, fetches the AI-generated transcript, and uses Google Gemini to extract structured recruiting insights. It writes the Q&A back to the NUACOM call notes and updates a HubSpot contact property with the candidate’s salary expectation.

## How it works
1. Triggers when a NUACOM call event is received for the configured extension.
2. Checks the call duration and continues only if it is longer than 5 seconds.
3. Waits 30 seconds, then retrieves NUACOM’s AI-generated call analysis including the transcription.
4. Sends the transcript to Google Gemini with instructions to answer 11 recruiting questions and return a JSON-structured result.
5. Reformats the structured answers into a simple JSON object and adds a formatted note to the NUACOM call with the extracted details.
6. Searches HubSpot for a contact whose phone number matches the call recipient and, if the salary expectation field is empty, updates the contact with the extracted salary expectation.

## Setup
1. Add your NUACOM API credentials, set the extension to monitor, and ensure NUACOM AI Call Analysis is enabled for your calls.
2. Configure access to Google Gemini (Google PaLM/Gemini credentials via n8n’s AI integration) for the AI Agent.
3. Add your HubSpot OAuth2 credentials and ensure the custom contact property `ain8n_salary_expectation` exists (and adjust the property name if yours differs).

## 🔗 Nodes Used

HubSpot, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
