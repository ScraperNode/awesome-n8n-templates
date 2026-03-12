# 📊 Turn new high-volume ranked keywords into Asana tasks with DataForSEO

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

![Turn new highvolume ranked keywords into Asana tasks with DataForSEO.png](fileId:4462)

This weekly workflow automatically discovers new high-volume, ranked keywords for your domain on Google without manual SERP monitoring. On each run, the workflow fetches the latest ranking and search volume data using the DataForSEO Labs API and stores a fresh snapshot in Google Sheets. It then compares this data with the previous run to identify any new keywords your domain started ranking for, focusing on queries with a search volume above 1,000. 

All newly ranked keywords that match this rule are added to a dedicated Google Sheet, along with their ranking position and search volume, creating a growing historical log you can use to analyze gains over time. Once new terms are identified, the workflow creates tasks in Asana to help your team act on them quickly, and sends you a Slack summary highlighting the latest changes.

## Who’s it for
SEO professionals, marketers, and content teams who want an automated way to discover newly ranked, high-volume Google keywords and turn organic ranking gains into actionable content or optimization tasks.

## What it does
This workflow automatically detects when your domain starts ranking for new high-volume keywords on Google, records them in Google Sheets, creates related tasks in Asana, and sends a weekly summary via Slack.

## How it works
Runs on a predefined schedule (default: once a week).
Reads your keywords and target domains from Google Sheets.
Extracts the latest Google results and keyword metrics via DataForSEO API.
Compares current data with the previous snapshot.
Logs newly ranked keywords to a dedicated Google Sheet.
Creates follow-up tasks in Asana for content team.
Sends a Slack summary with key changes.

## Requirements
- DataForSEO account and API credentials 
- Google Sheets spreadsheet with your keywords, following the required column structure (as in [the example](https://docs.google.com/spreadsheets/u/2/d/1uCvVHKk8rWeQ_FKpZkBfrCB26Q6UebwwzsOdU7EmUYU/edit?gid=1681593026#gid=1681593026)).
- Google Sheets spreadsheet with your target domains, following the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/1uCvVHKk8rWeQ_FKpZkBfrCB26Q6UebwwzsOdU7EmUYU/edit?gid=0#gid=0)).
- Asana account
- Slack account

## Customization
You can easily tailor this workflow to your needs by adjusting the run schedule, changing the minimum search volume threshold, exporting results to other tools (like Looker Studio or BigQuery), and customizing the content of the Asana task or Slack message to match your team’s workflow.

## 🔗 Nodes Used

Asana, Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
