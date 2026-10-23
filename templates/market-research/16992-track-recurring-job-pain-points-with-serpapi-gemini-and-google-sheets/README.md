# 📊 Track recurring job pain points with SerpApi, Gemini, and Google Sheets

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly to pull Google Jobs results via SerpApi, uses Google Gemini to extract operational pain points and an automation opportunity from each posting, logs them to Google Sheets, and writes a frequency-ranked pain-point summary to a summary tab.

## How it works
1. Runs weekly on a schedule.
2. Sets the target job role, location, and Google Sheets tab name to use for this run.
3. Queries Google Jobs through SerpApi and splits the response into one item per job posting.
4. Sends each posting’s title, company, and description to Google Gemini and parses the returned JSON into structured fields.
5. Appends each analyzed posting (company, title, pain points, automation opportunity, and collection date) as a new row in Google Sheets.
6. Reads all rows from the same Google Sheets tab, counts how often each pain-point phrase appears, and sorts the list by frequency.
7. Appends the ranked pain-point frequency list to a Google Sheets "summary" tab.

## Setup
1. Add a SerpApi API key and update the SerpApi request parameters in the HTTP request step (or store the key in an n8n credential).
2. Connect a Google Sheets OAuth2 credential and replace the placeholder spreadsheet URL/ID with your own in all Google Sheets steps.
3. Create a spreadsheet with a per-role tab (matching the configured sheetTab name) containing the columns Title, Company, Pain Points, Date Collected, and Automation Opportunity, plus a "summary" tab with columns for phrase and count.
4. Connect a Google Gemini (PaLM) API credential and confirm the selected model ID is available for your account.
5. Update the role, location, and sheetTab values in the search configuration step to match the job title and region you want to track.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
