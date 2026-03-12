# 📊 Get new ranked Google AI Overview keywords via email with DataForSEO

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

![Get new ranked keywords from Google AIO via email with DataForSEO.png](fileId:4425)

Once a week, this workflow automatically detects newly ranked keywords in Google AI Overview across your domains using DataForSEO API. It pulls the latest data for every target, stores a new snapshot in Google Sheets, and compares it with the previous run. Any new keywords and related info is automatically appended to a dedicated log sheet, and a short email recap is sent to your chosen recipients, so your team can easily review updates without manual monitoring. 

## Who’s it for
SEO specialists and marketers who want a hands-off way to track newly ranked keywords in Google’s AIO for specific domains and get weekly updates without manual checks.

## What it does
This workflow automatically discovers new keywords your domains started ranking for in Google AI Overview (AIO), logs them in Google Sheets, and emails you a weekly summary of what’s changed.

## How it works
Triggers on a chosen schedule (default: once a week).
Reads your keywords and domains from Google Sheets.
Pulls the latest data from Google AI Overview via DataForSEO API.
Compares the results with the previous snapshot.
Appends newly ranked keywords to a dedicated Google Sheet.
Sends a weekly summary email.

## Requirements
- DataForSEO account
- A spreadsheet in Google Sheets with your keywords that matches the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/1w8bTZ0hfQ0A0e-GZ3s5oDR8-lWqpepU-FJN_Uv4fWwE/edit?gid=1681593026#gid=1681593026)).
- A spreadsheet in Google Sheets with your target domains that matches the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/1w8bTZ0hfQ0A0e-GZ3s5oDR8-lWqpepU-FJN_Uv4fWwE/edit?gid=0#gid=0)).
- Gmail account
- 
## Customization
You can customize this workflow by changing the schedule, exporting results to other tools (such as Looker Studio and BigQuery) instead of Google Sheets, and modifying the email text.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
