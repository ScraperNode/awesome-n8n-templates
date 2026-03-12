# ⚒️ Import Productboard notes, companies and features into Snowflake

> ⚡ **972 views** · ⚒️ [Engineering](../)

## Description

This workflow imports Productboard data into Snowflake, automating data extraction, mapping, and updates for features, companies, and notes. It supports scheduled weekly updates, data cleansing, and Slack notifications summarizing the latest insights.

## Features
- Fetches data from Productboard (features, companies, notes).
- Maps and processes data for Snowflake tables.
- Automates table creation, truncation, and updates.
- Summarizes new and unprocessed notes.
- Sends weekly Slack notifications with key insights.

## Setup
- Configure Productboard and Snowflake credentials in n8n.
- Update Snowflake table schemas to match your setup.
- Replace Slack channel ID and dashboard URL in the notification node.
- Activate the workflow and set the desired schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Snowflake, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
