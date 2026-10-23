# 🎣 Generate and verify B2B leads with CoreSignal, Apify, Google Sheets, and GPT-4o mini

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow sources targeted B2B decision-maker leads with CoreSignal, enriches and verifies emails via Apify, stores everything in Google Sheets, and generates personalized outreach email drafts using an OpenRouter-hosted model.

## How it works
1. Receives lead criteria (industry, company size, region, and number of results) from an n8n form submission.
2. Queries the CoreSignal Agentic Search API to return a list of matching decision makers and splits the results into individual lead items.
3. Upserts the initial lead details (company, name, title, LinkedIn URL, and score) into a Google Sheets “Leads” sheet.
4. Aggregates LinkedIn URLs, runs an Apify actor to find contact emails from LinkedIn profiles, and updates the Google Sheet with enriched contact fields.
5. Filters leads that have an email address, verifies the emails using an Apify email verification actor, and writes the email status back to Google Sheets.
6. When run manually, reads verified leads and the existing outreach list from Google Sheets, removes leads already present in outreach, and generates a draft outreach email with an OpenRouter chat model (optionally using an Apify web search tool).
7. Saves the generated outreach draft and lead details into a Google Sheets “Outreach” sheet with a “waiting confirmation” status.

## Setup
1. Add a CoreSignal API credential and ensure the HTTP Request node is authorized for the CoreSignal Agentic Search endpoint.
2. Add an Apify API token with access to the actors used for LinkedIn email discovery, email verification, and (optionally) web search.
3. Connect Google Sheets OAuth credentials and update the spreadsheet ID/sheet tabs to point to your own “Leads” and “Outreach” sheets.
4. Ensure your Google Sheets columns match the fields written by the workflow (for example: Company Name, Person First Name/Last Name, Linkedin Url, Title, Person Email, Email Status, and Draft Outreach).
5. Enable the form trigger and publish/copy the form URL if you want users to submit lead criteria via the built-in n8n form.

## Requirements
- n8n
- CoreSignal account
- Apify account
- Google account / Google Sheets
- A Google Sheet for storing your leads

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
