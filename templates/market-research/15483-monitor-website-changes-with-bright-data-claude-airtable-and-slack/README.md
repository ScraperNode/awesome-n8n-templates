# 📊 Monitor website changes with Bright Data, Claude, Airtable and Slack

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

- A schedule trigger periodically fetches the list of URLs to monitor from your CRM (Airtable by default)
- Bright Data Web Unlocker scrapes each page (handles JS, CAPTCHAs, geo-blocks)
- Claude Sonnet 4.6 compares the new HTML against the previous snapshot and ignores noise (timestamps, build IDs, CSS)
- The new snapshot and AI summary are saved back to the CRM
- If a real, visible change is detected, Slack notifies your team

## Set up steps

- Setup time: ~10 minutes
- Connect your CRM, Bright Data, Anthropic and Slack credentials
- Set the Schedule Trigger interval (hourly, daily…)
- Add the URLs you want to monitor with `Active = TRUE`
- Activate the workflow

See the sticky notes inside the workflow for details on how to swap Airtable, Claude or Slack for your preferred tools.

## 🔗 Nodes Used

Airtable, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
