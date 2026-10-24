# 🎣 Research sales contacts with Claude Sonnet, Glasser and Google Sheets

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow provides a chat-based sales research agent that uses Anthropic Claude and Glasser to find relevant company contacts, look up work emails, and pull company profiles or web results, then appends approved contacts to a Google Sheets spreadsheet.

## How it works
1. Receives a message in an n8n chat session started from the built-in chat interface.
2. Uses Anthropic Claude with short-term chat memory to interpret the request and decide which research actions are needed.
3. Queries Glasser to find people at a company by domain and target job titles.
4. Uses Glasser to look up a work email for a selected person and to enrich the company with a basic profile, using Glasser web search when needed.
5. When the user asks to save the contact, appends the contact details, source notes, and context to a Google Sheets “Contacts” sheet.

## Setup
1. Add an Anthropic API credential to the Claude chat model.
2. Install the Glasser community node, create a Glasser API key, and add it as a Glasser API credential for the Glasser tools.
3. Connect a Google Sheets OAuth2 credential and replace the spreadsheet ID in the Google Sheets tool, ensuring a sheet named “Contacts” exists with the expected columns (Name, Title, Company, Email, Source, Notes).
4. Open the workflow chat and ask a question, then tell the agent “save it” when you want to write a row to Google Sheets.

## Requirements
- A Glasser account with balance. Each tool call costs a few cents or less, and the agent is instructed to avoid calls it does not need.

## Customization
- Edit the instructions in the Sales research agent node, add more Glasser tools (SEO data, social media, news, tech stack or stock quotes), save to HubSpot or Airtable instead of Google Sheets, or make the chat public to share it with your team.

## Additional info
Glasser routes each call to a data provider such as Apollo, Hunter or Serper and reports which provider answered, so the agent can cite its sources. Make a copy of the contact sheet template linked in the description sticky note to get the expected columns.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
