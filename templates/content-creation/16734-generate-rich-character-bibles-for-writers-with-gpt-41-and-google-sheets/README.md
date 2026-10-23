# 🎬 Generate rich character bibles for writers with GPT-4.1 and Google Sheets

> ⚡ **84 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow accepts character details via webhook or manual trigger, uses OpenAI to generate psychology, backstory, and emotional arc drafts in parallel, then synthesizes them into a structured “Character Bible” JSON response and optionally appends a log row to Google Sheets.

## How it works
1. Receives a POST request on an n8n webhook (or runs manually) with character parameters like name, age, archetype, world setting, story role, traits, and constraints.
2. Normalizes the incoming fields, validates the archetype, and derives genre tags from the world setting using Python logic.
3. Sends the enriched character inputs to OpenAI three times in parallel to generate a psychology profile, a backstory, and an emotional arc document.
4. Combines the three AI documents into a single context object and passes it to OpenAI again to synthesize a unified Character Bible with defined sections.
5. Parses the Character Bible into structured JSON fields (identity snapshot, personality core, backstory highlights, emotional arc, voice, and story hooks) and adds metadata like request ID and timestamp.
6. Returns the completed character profile as a JSON webhook response and optionally appends a summary row to a Google Sheets spreadsheet via the Google Sheets API.

## Setup
1. Add an OpenAI API credential and attach it to all OpenAI chat model connections used by the four AI generation steps.
2. If you use the webhook trigger, copy the production webhook URL for the /character-development path and send a POST request with the expected fields in the request body.
3. If you enable logging, create a Google Sheet with a “Characters” tab, replace YOUR_SHEET_ID in the Google Sheets request URL, and provide Google Sheets OAuth2 credentials (or an authorized Google API access method) for the Sheets API call.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
