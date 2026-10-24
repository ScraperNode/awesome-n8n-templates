# 👥 Vet community membership applications with Google Gemini, Telegram, and Sheets

> ⚡ **6 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects community membership applications via an n8n Form, vets each candidate with Google Gemini using Tavily web search and an Apify LinkedIn lookup, requests human approval in Telegram when needed, sends invite or rejection emails via Gmail, and logs outcomes to Google Sheets.

## How it works
1. Receives a submission from an n8n Form that captures applicant details such as name, email, company, role, birthday, and additional notes.
2. Normalizes the submitted fields and passes the candidate profile to a Google Gemini-powered AI Agent that can use Tavily web search, an Apify LinkedIn search actor, a calculator, and short-term memory.
3. Produces a structured vetting result (including summary, decision status, and a community-fit score) using a structured output schema.
4. If the AI decision is “Immediate approval”, sends the candidate summary to Telegram and waits for a response before continuing.
5. If the AI decision is not “Immediate approval”, sends the summary to Telegram and asks the reviewer to reply with 1 (approve), 2 (reject), or 3 (do nothing).
6. Sends an approval/invite email or a rejection email via Gmail based on the Telegram response, or stops without action.
7. Appends the candidate details and decision (including score, status, and timestamp) to Google Sheets for record keeping.

## Setup
1. Configure the n8n Form trigger and share the form URL with applicants.
2. Add credentials for Google Gemini (PaLM) API, Tavily API, and Apify API (and ensure the selected LinkedIn search actor is available in your Apify account).
3. Connect a Telegram Bot credential and set the correct chat destination so the send-and-wait messages reach your reviewer.
4. Connect Gmail OAuth2 credentials and customize the invite and rejection email templates (including replacing {Your organization/community name} and any links).
5. Connect Google Sheets OAuth2 credentials and update the target spreadsheet and sheet tab to match your logging columns.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
