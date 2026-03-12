# 📁 Sync Toggl Track time entries with Google Sheets detail and summary tabs

> ⚡ **1 views** · 📁 [File Management](../)

## Description

## How it works

This workflow syncs Toggl Track time entries to Google Sheets and creates monthly tabs automatically.

It fetches:
- time entries from Toggl
- project metadata from Toggl

Then it:
- filters entries by your selected project name
- writes detailed rows to a **Detail Sheet**
- writes daily aggregated rows to a **Summary Sheet**
- creates/removes monthly tabs to keep both sheets clean and aligned

## Set up steps

Estimated setup time: 10–15 minutes.

1. Configure **HTTP Basic Auth** for Toggl:
   - Username: your Toggl API token
   - Password: `api_token`
2. Configure **Google Sheets OAuth2** credentials.
3. In **Set Date Range**, set `start_date`.
4. In **Process Data**, set:
   - `PROJECT_NAME`
   - `TIMEZONE`
5. Replace placeholders in workflow nodes:
   - `YOUR_DETAIL_SPREADSHEET_ID`
   - `YOUR_SUMMARY_SPREADSHEET_ID`

Detailed node-by-node guidance is included in sticky notes inside the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
