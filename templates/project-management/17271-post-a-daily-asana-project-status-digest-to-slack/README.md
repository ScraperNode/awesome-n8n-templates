# 📋 Post a daily Asana project status digest to Slack

> ⚡ **7 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs every weekday morning to fetch tasks from a specified Asana project, bucket them by due status and completion activity, and post a Slack Block Kit digest with counts, key task links, and per-assignee open workload.

## How it works
1. Runs on a weekday-morning schedule.
2. Pulls tasks from a chosen Asana project via the Asana REST API, including assignee, due date, completion status, and task links, and paginates through results as needed.
3. Groups open tasks into overdue, due today, due this week, and unassigned buckets, and also collects tasks completed within the configured lookback window.
4. Calculates summary counts and open-task load per assignee.
5. Formats the results into a Slack Block Kit message with a short totals line and up to five linked tasks per bucket.
6. Posts the digest to the specified Slack channel.

## Setup
1. Add an Asana Personal Access Token (Asana API credentials) and select it for the HTTP request that fetches project tasks.
2. Add a Slack OAuth credential and ensure the app/bot can post messages to your target channel.
3. In the configuration step, set your Asana project GID, Slack channel ID, timezone, and the lookback window for recently completed tasks.
4. Adjust the schedule (days and hour) to match when you want the digest to run, then execute once to verify output before activating.

## Requirements
- An Asana account with access to the project you want reported on. The free tier is enough.
- An Asana Personal Access Token. The digest only ever contains tasks that token's own user can already see, so a token from outside the project returns nothing.
- A Slack bot token with the chat:write scope, held as n8n's Slack API credential.
- The bot already in the destination channel. A private channel needs it invited first.
- The Slack channel ID, not the name. The node selects by ID and will not resolve #general.
- No AI provider, no community nodes, no paid tier. Runs on Cloud or self-hosted.

## Customization
- lookbackHours (default 24) controls how far back completed tasks are collected. The totals line reads "completed in the last day" as fixed text, so reword it there if you change this.
- MAX_LINKS (default 5) in Build Slack Digest Blocks caps linked tasks per section. The remainder shows as "+N more".
- The due-this-week window ends on the coming Sunday via daysUntilSunday. Change it for a rolling seven-day window instead.
- Section headings, order, and the colour emoji are plain strings in Build Slack Digest Blocks.
- Set a summaryLine field on the item before Build Slack Digest Blocks and it renders as a quote above the buckets. That is where a model call belongs if you want one, and it changes no counts.
- Pagination guards on the Asana call: 100 tasks per page, 20 pages maximum, 300ms apart.

## Additional info
Nothing in this workflow calls a model, so the same Asana data always produces the same digest and a run costs nothing beyond the two accounts. Two timezones are in play: the schedule fires on your n8n instance timezone, while overdue and due today are decided from the timezone set in the config node, so set both if they differ. Open tasks with no due date land in no bucket at all, yet they still count toward the totals line and per-assignee load, so the buckets will not sum to the total. Unassigned is a separate list rather than an exclusive bucket, so an overdue task with no owner appears in both. Pagination stops after 20 pages of 100 tasks, and a project larger than that is truncated with no warning and low counts. The digest posts on every run whether or not anything is due, and there is no stored state, so a manual execution posts a second copy of the same snapshot. The Asana read and the Slack post each retry three times, and if they still fail the run stops silently, so set an n8n error workflow if people rely on this. One quirk worth knowing: the builder computes a plain-text fallback string, but the Slack node sends blocks only, so mobile notification previews can arrive with no preview text.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
