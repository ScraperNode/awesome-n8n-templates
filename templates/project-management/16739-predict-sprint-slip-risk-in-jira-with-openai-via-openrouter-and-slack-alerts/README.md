# 📋 Predict sprint slip risk in Jira with OpenAI via OpenRouter and Slack alerts

> ⚡ **31 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs on a weekday morning schedule (or manually) to pull the active Jira sprint and its issues, compute sprint health metrics, use an OpenRouter-hosted OpenAI model to assess slip risk, and post a motivating alert to a Slack channel when the sprint is behind.

## How it works
1. Runs every weekday at 08:00 (or when executed manually).
2. Calls the Jira Software Cloud Agile API to fetch the board’s active sprint and all issues in that sprint, including status, labels, and story points.
3. Calculates sprint timing, completion percentage, slip margin, velocity gap, and a list of potentially blocked issues based on labels or status.
4. Sends the computed metrics to an OpenRouter (OpenAI) chat model to return a structured JSON risk assessment (on_track, at_risk, or critical) with recommendations and tickets to watch.
5. Parses the model output into JSON and merges it with the computed sprint metrics for reporting.
6. If the risk level is not on_track, a second OpenRouter (OpenAI) agent drafts a team-focused status update and posts it to the configured Slack channel.
7. If the risk level is on_track (or parsing fails and defaults to on_track), the workflow ends without posting to Slack.

## Setup
1. Add Jira Software Cloud credentials in n8n with access to your board and sprint data.
2. Add an OpenRouter API credential and select a chat model that supports agent tool-calling.
3. Add Slack API credentials and ensure the bot is allowed to post in the target channel.
4. In the workflow’s configuration values, set your Jira domain, board ID, story points custom field ID, and the Slack channel name.
5. Adjust the schedule trigger cron expression if you want the check to run at a different time.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
