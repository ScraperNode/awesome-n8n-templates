# 🎣 Send weekly Slack alerts for new hiring signals from Google Sheets via Apify

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every Monday, reads target company domains from Google Sheets, sends them to the Apify Company Hiring Signals Actor to detect new job openings, and posts weekly hiring alerts for companies with newly opened roles to a specified Slack channel.

## How it works
1. Runs every Monday at 08:00.
2. Reads the list of target company domains from a specified Google Sheets tab.
3. Builds an Apify Actor request payload with the domains and enables watch mode to compare results to the previous run.
4. Calls the Apify Company Hiring Signals Actor via HTTP to retrieve hiring and job-opening data for each company.
5. Filters for companies where the response includes one or more newly opened roles since the last run.
6. Posts a Slack message per matching company summarizing new role count, a few new role titles, total open roles, hiring velocity, and a sales-hiring note when present.

## Setup
1. Add Google Sheets OAuth credentials and update the sheet URL and tab in the workflow settings, ensuring the sheet has a `Domain` column.
2. Create an Apify API token and configure the HTTP Header Auth credential on the Apify request with `Authorization: Bearer <token>`.
3. Add Slack OAuth credentials and set the target channel name in the workflow settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
