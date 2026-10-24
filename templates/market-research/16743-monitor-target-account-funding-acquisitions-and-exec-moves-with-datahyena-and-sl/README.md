# 📊 Monitor target account funding, acquisitions, and exec moves with Datahyena and Slack

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning and checks Datahyena for funding events, acquisitions, and executive moves from the last 24 hours, then posts matching updates for your target account domains to a Slack channel.

## How it works
1. Runs every day at 9:00 AM.
2. Loads a list of target company domains to monitor.
3. Fetches the last 24 hours of funding events from the Datahyena API, filters to events where the company domain matches your target list, and posts each match to Slack.
4. Fetches the last 24 hours of acquisition events from the Datahyena API, filters to deals where either the acquirer or target domain matches your list, and posts each match to Slack.
5. Fetches the last 24 hours of executive move events from the Datahyena API, filters to moves where the current or previous company domain matches your list, and posts each match to Slack.

## Setup
1. Create a Datahyena API key and configure an HTTP Header Auth credential with header name `X-API-Key` for the three Datahyena HTTP requests.
2. Update the target domain list in the workflow’s target accounts step (the `domains` array).
3. Connect your Slack credential and select the channel for the three Slack message steps.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
