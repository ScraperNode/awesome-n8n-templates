# 📊 Track role skill trends from Google Jobs with SerpApi, Claude and Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs on demand or daily, pulls recent Google Jobs postings via SerpApi for a chosen role and location, uses OpenRouter to extract and rank core technical skills, and logs skill trends plus a readable summary to Google Sheets for tracking changes over time.

## How it works
1. Triggers either from an n8n Form submission (role and location) or from a daily schedule.
2. Reads the last saved role/location from a Google Sheets “Config” tab and resolves the current inputs, reusing the previous role if the form role is blank.
3. Queries SerpApi’s Google Jobs engine for up to ~100 recent postings, then flattens, truncates descriptions, deduplicates by title and company, and caps the list at 100.
4. Sends the consolidated postings to OpenRouter (chat completions) to return JSON with the top technical skills, their categories, and the percentage of postings mentioning each skill, plus a plain-text summary.
5. Parses the model’s JSON response and prepares a readable list of the top skills for logging.
6. Appends one row per skill to a Google Sheets “Skill Trends” tab, appends the run summary to a “Run Summaries” tab, and updates the “Config” tab so scheduled runs reuse the latest role and location.

## Setup
1. Create a Google Sheets file with tabs for Config (key, role, location, last_run_date), Skill Trends (run_date, role, location, postings_analyzed, skill, category, percentage_of_postings), and optionally Run Summaries (run_date, role, location, postings_analyzed, top_skills_readable, summary_text, raw_skills_json).
2. Add Google Sheets OAuth2 credentials in n8n and update each Google Sheets node with your spreadsheet ID and the correct tab names.
3. Add a SerpApi credential and ensure the SerpApi request can paginate (up to 10 pages) for your chosen role and location.
4. Add an OpenRouter API key using HTTP Header Auth (Authorization: Bearer YOUR_KEY) and set the model ID in the AI request builder code.
5. If you use the scheduled trigger, run the workflow once manually with a role so the Config tab has a saved role/location for future runs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
