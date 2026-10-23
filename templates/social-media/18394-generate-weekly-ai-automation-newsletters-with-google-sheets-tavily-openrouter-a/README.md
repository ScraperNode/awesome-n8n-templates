# 📱 Generate weekly AI automation newsletters with Google Sheets, Tavily, OpenRouter and Gmail

> ⚡ **41 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This weekly workflow uses Google Sheets as a topic queue, Tavily for web and Reddit research, OpenRouter (OpenAI models) to plan and write a three-section newsletter with citations, then formats it as HTML and sends it to a subscriber list via Gmail.

## How it works
1. Runs weekly on a schedule trigger.
2. Reads Google Sheets for any row marked with Action = "Generate" and uses the provided Newsletter Topic when present.
3. If no manual topic exists, searches Reddit via the Tavily Search API and uses an OpenRouter (OpenAI) model to pick a single newsletter topic, then writes it back to Google Sheets.
4. Generates a unique hex ID, updates the queued row in Google Sheets with the ID/source, and performs Tavily research to fetch three recent news results for the chosen topic.
5. Uses OpenRouter (OpenAI) to plan an issue title and exactly three section topics, then runs Tavily searches per topic and writes three cited newsletter sections.
6. Uses OpenRouter (OpenAI) to edit and merge the sections into an email-ready subject and body, then saves the final title/content and marks the row as DONE ✅ in Google Sheets.
7. Converts the plain-text newsletter into styled HTML, reads recipient emails from a separate Google Sheets leads file, and sends the newsletter to each address via Gmail with a short wait between messages.

## Setup
1. Connect credentials for Google Sheets (read/write), Gmail (send email), OpenRouter, and Tavily (HTTP Header Auth with your Tavily API key).
2. Create or copy the newsletter Google Sheet with columns like Newsletter Topic, Action, Source, ID, Title, Content, Createxd Time, and Updated Time, and keep the "Createxd Time" spelling consistent with the workflow.
3. Create or point the Leads Google Sheet to a spreadsheet that contains a "Lead Email" column, and ensure it only includes addresses you intend to email.
4. Update all Google Sheets nodes to use your spreadsheet IDs/tabs and adjust the schedule trigger timing and Gmail recipient/sending settings as needed before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
