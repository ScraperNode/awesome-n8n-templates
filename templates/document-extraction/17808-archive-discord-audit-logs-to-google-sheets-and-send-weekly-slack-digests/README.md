# 🔬 Archive Discord audit logs to Google Sheets and send weekly Slack digests

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to fetch new Discord server audit log entries, appends them to a Google Sheets ledger, and posts a weekly digest to Slack summarizing moderator activity and action counts over a configurable lookback window.

## How it works
1. Runs every day at 3 AM on a schedule.
2. Loads configuration values (Discord guild ID, Google Sheet URL, Slack channel, paging limits, and digest settings) and reads the last archived audit log entry ID from an n8n Data Table.
3. Calls the Discord API to fetch audit log entries after the stored watermark, paging through results up to the configured maximum.
4. Converts Discord action type IDs into readable action names and resolves moderator/target names from the API’s users list.
5. Appends the new audit log rows to the audit_log tab in Google Sheets and updates the stored watermark to the highest entry ID archived in this run.
6. On the configured weekday, reads recent rows from the Google Sheets ledger, computes top counts by moderator and by action for the lookback window, and posts the digest to the selected Slack channel.

## Setup
1. Create a Discord bot, invite it to your server, grant it View Audit Log permissions, and add a Discord Bot API credential in n8n.
2. Create a Google Sheets spreadsheet with a tab named audit_log and the expected columns (entry_id, created_at, guild_id, action, action_type, moderator_id, moderator_name, target_kind, target_id, target_name, reason, changed_keys, archived_at), then connect Google Sheets OAuth credentials.
3. Create an n8n Data Table (for example discord_audit_watermark) with columns guild_id, last_entry_id, and updated_at, and select its ID in both the watermark read and upsert steps.
4. Connect Slack credentials and set the target Slack channel name in the workflow configuration.
5. Fill in the guildId, sheetUrl, slackChannel, and optional paging/digest settings (pageSize, maxPagesPerRun, digestWeekday, digestLookbackDays) before activating the workflow.

## Requirements
- A Discord server where you can add a bot and grant it View Audit Log. No privileged intents are needed, because this reads the audit log rather than message content or the member list.
- An n8n instance with Data Tables available, which is where the paging cursor is kept between runs.
- A Google account with access to Google Sheets, and a Slack workspace where a bot can post to the digest channel.
- No AI credentials, no paid plan tier on any service, and no community nodes.

## Customization
- maxPagesPerRun caps how much history a single run backfills. Each Discord request returns at most 100 entries, so raise it for the first run on a busy server and lower it afterwards.
- digestWeekday and digestLookbackDays move and widen the Slack summary without touching the daily archive.
- Map Action Types and Users names the action types most servers see. Discord defines more than sixty, so extend that map for any that still arrive as raw integers.
- Point the digest at a private moderator channel, or delete that branch entirely if you only want the ledger.
- Move to a twice-daily schedule on a high-traffic server so each run has fewer pages to walk.

## Additional info
Discord deletes audit log entries 45 days after they are created and the API cannot return them afterwards, so this ledger is only ever as complete as its uptime: a workflow paused for longer than that leaves a permanent hole no later run can fill. The design follows from that. The watermark advances only after the Google Sheets append succeeds, so a failed run retries the same range instead of stepping over it, and rows are appended rather than updated so the tab stays an audit trail rather than a snapshot of current state. The audit log is also the one Discord read endpoint with a real server side cursor, which is why paging forward from a stored entry ID is exact instead of a timestamp guess that can double-count or skip. Two practical notes: both Data Table nodes import pointing at a placeholder and must be repointed at your own table before the first run, and nothing here calls a model, so a run costs three API quotas and nothing else.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
