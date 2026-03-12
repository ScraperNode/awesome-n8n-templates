# 📊 Track new ranked keywords in Google Sheets with DataForSEO and Slack alerts

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

![Pull new ranked keywords to Google Sheets with DataForSEO  get a Slack message.png](fileId:4376)

Once a week, this workflow automatically scans Google for newly ranked keywords for your domains using the DataForSEO API. It pulls the latest data for every target you track, stores a fresh snapshot in Google Sheets, and compares it to the previous run. Any newly ranked keywords are automatically added to a dedicated Google Sheet, creating an easy-to-review log. Lastly, the workflow sends a short summary to Slack, so your team can quickly see what’s changed without manual checks. 

## Who’s it for
SEO specialists and marketers who want to automatically track newly ranked keywords for their target domains and get quick weekly updates without doing manual Google checks.

## What it does
This workflow automatically fetches new keywords your domains started ranking for on Google using DataForSEO Labs API, saves them into Google Sheets, and sends you a Slack summary so you can quickly see what’s changed.

## How it works
Triggers on your chosen schedule (default: once a week).
Reads your keywords and target domains from Google Sheets.
Extracts fresh ranking data from Google via DataForSEO API.
Compares the results with the previous run.
Adds newly ranked keywords into a dedicated Google Sheet.
Sends a weekly summary message to Slack.

## Requirements
- DataForSEO account
- A spreadsheet in Google Sheets with your keywords that matches the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/1FO9Btg5y5TmE56La4O-QzJbEjGAZLe3zG0phB7eXnqs/edit?pli=1&gid=1681593026#gid=1681593026)).
- A spreadsheet in Google Sheets with your target domains that matches the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/1FO9Btg5y5TmE56La4O-QzJbEjGAZLe3zG0phB7eXnqs/edit?pli=1&gid=0#gid=0)).
- Slack account
## Customization
You can easily customize the workflow by changing the schedule, exporting results to dashboards and other tools (such as Looker Studio and BigQuery) instead of Google Sheets, and modifying the Slack message text.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
