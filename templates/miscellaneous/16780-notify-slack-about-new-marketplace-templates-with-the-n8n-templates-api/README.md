# 🔧 Notify Slack about new marketplace templates with the n8n Templates API

> ⚡ **8 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs every two hours to check the n8n public Templates API for the latest workflows in a chosen category, tracks which template IDs have already been seen using workflow static data, and posts a Slack digest when new templates appear.

## How it works
1. Runs on a schedule every 2 hours.
2. Loads configuration values such as the template category slug, the Slack channel, how many templates to check, and whether to report when none are new.
3. Calls the n8n Templates search API to fetch the most recent templates for the configured category.
4. Extracts key metadata (ID, title, description snippet, creator, date, and URL) from the API response.
5. Compares the fetched template IDs against previously seen IDs stored in workflow static data and updates the cache with the latest IDs.
6. If new templates are found, formats a Slack digest and posts it to the configured Slack channel.
7. If no new templates are found and reporting is enabled, posts a “no new templates” all-clear message to Slack.

## Setup
1. Add Slack credentials in n8n with permission to post messages to your target channel.
2. Update the Configuration values for categorySlug and slackChannel (and optionally templatesToCheck and reportEvenIfNone).
3. Ensure the chosen category slug exists in the n8n marketplace (you can verify via https://api.n8n.io/templates/categories) and activate the workflow knowing the first run treats all fetched templates as new.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
