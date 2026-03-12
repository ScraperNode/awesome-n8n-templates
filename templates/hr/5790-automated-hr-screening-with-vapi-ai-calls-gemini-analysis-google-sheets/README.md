# 👥 Automated HR screening with VAPI AI calls, Gemini analysis & Google Sheets

> ⚡ **2,571 views** · 👥 [HR & Recruitment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**This n8n template automates candidate outreach, call transcription, and structured feedback capture for HR teams and recruiters. It triggers on a new candidate row added in a Google Sheet, initiates a call using Vapi.ai, processes the transcript using Google Gemini, extracts key information like CTC, experience, and notice period, and then updates the same Google Sheet with parsed insights.

This is ideal for recruiters or HR teams conducting high-volume candidate outreach and wanting to scale initial data collection using automated voice bots and AI transcription analysis.**

## How it works
1. Trigger: Listens for new rows added to a Google Sheet (e.g., a new candidate lead).

2. Call Initiation: Uses Vapi.ai to make a phone call to the candidate using an assistant bot.

3. Transcript Retrieval: After the call, fetches the conversation transcript from the Vapi API.

4. AI Transcript Analysis: Google Gemini parses the transcript and extracts structured fields like:
- Work experience
- Current & expected CTC
- Notice period & negotiability
- Work preferences and location
 
5. Data Mapping: Extracted insights are mapped to structured JSON fields.
 
6. Google Sheet Update: The same row in the source Sheet is updated with the collected information.

## Use Cases
Pre-screening calls for job applicants

Collecting missing candidate information asynchronously

Replacing manual HR data entry with AI-powered automation

Smart CRM updates from voice interactions

## Requirements
Before you run this workflow, ensure the following:

✅ Google account with access to Google Sheets API

✅ Vapi.ai account with:

- Assistant ID
- Phone number ID
- Active API key

✅ Google Gemini API (via PaLM) enabled

✅ n8n version 1.40.0 or later with relevant credentials configured

## How to use
Import the workflow into n8n.

Set up your credentials for:

- Google Sheets Trigger
- Google Sheets
- Vapi.ai (add Bearer token)
- Google Gemini

Replace the placeholder values in:

- Assistant ID
- Phone number ID
- Google Sheet ID and tab

Start the workflow and add a row to the Google Sheet.

Wait for the automated call and let the AI extract and populate the data.

## Customising this workflow
Replace Google Gemini with OpenAI or Claude if preferred.

Add sentiment analysis on the transcript using an LLM.

Modify the Sheet column structure to add additional fields.

Add a filter node to skip candidates with incomplete phone numbers.

Use a Webhook trigger instead of Google Sheets to integrate with job portals or ATS.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
