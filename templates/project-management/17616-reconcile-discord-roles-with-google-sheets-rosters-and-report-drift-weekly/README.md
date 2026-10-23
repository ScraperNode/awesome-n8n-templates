# 📋 Reconcile Discord roles with Google Sheets rosters and report drift weekly

> ⚡ **15 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs weekly to compare a Google Sheets roster to actual Discord member roles, writes a row-by-row drift report back to Google Sheets, and posts a concise summary to a Discord channel.

## How it works
1. Runs every week on a schedule (Monday at 08:00).
2. Loads reconciliation settings (Discord server and channel IDs, Google Sheets URLs/tab names, gated role names, status rules, and grace period).
3. Fetches the Discord server’s roles via the Discord API and reads the roster tab from Google Sheets.
4. Normalizes and validates roster rows, resolving entitled role names to live Discord role IDs and flagging unusable rows or missing roles.
5. Retrieves all Discord server members (excluding bots and any ignored user IDs) along with their current role IDs.
6. Reconciles roster entitlements against Discord roles, bucketing mismatches (for example missing roles, unexpected gated roles, missing roster rows, grace-period joiners, and configuration/roster issues).
7. Appends all drift rows to the drift report tab in Google Sheets and posts a formatted summary message to the configured Discord channel.

## Setup
1. Create and invite a Discord bot to your server, enable Server Members Intent, and add a Discord Bot credential in n8n.
2. Add Google Sheets OAuth credentials in n8n and provide the roster and report spreadsheet URLs and tab names in the settings step.
3. Ensure the roster sheet has columns like `discord_user_id`, `display_name`, `entitled_role`, and optionally `status`, and set `gated_roles` to the exact Discord role names you want to enforce.
4. Create a drift report tab with headers `checked_at`, `run_id`, `bucket`, `discord_user_id`, `display_name`, `discord_username`, `role`, and `note`, and set the target Discord channel ID for the summary post.
5. Optionally tune `active_status_values`, `inactive_status_values`, `grace_period_days`, `ignore_user_ids`, and `max_examples_in_summary` to match your membership process.

## Requirements
- A Discord server you can add a bot to. The bot needs no role permissions at all, because this never calls roleAdd or roleRemove.
- A bot in fewer than 100 servers, where SERVER MEMBERS is a self-serve toggle rather than an approval queue.
- A Google account with a roster tab and a report tab. They can live in the same spreadsheet.
- A roster that already holds Discord user IDs. The join runs on snowflakes, so names and emails will not match anything.
- n8n with Discord Bot API and Google Sheets credentials. No paid plan, no AI model, no third-party service.

## Customization
- Extend the status lists rather than working around them. A value in neither list is deliberately reported as unjudgeable instead of assumed inactive.
- Swap the Discord summary node for Slack or email. It consumes one formatted string, so nothing upstream changes.
- Move to a daily schedule for a cohort that changes fast, and shorten the grace period to match.
- Point the report tab at a separate spreadsheet if the roster owner should not see the drift history.
- Carry extra roster columns into the report by extending the row builder in the reconcile step.

## Additional info
This is deliberately read only. There is no fix-it branch and the workflow never adds or removes a role, so it is safe to point at a live server with thousands of members and decide for yourself what to do about what it finds. That is also what separates it from role bots like Carl-bot or Dyno, which manage roles from inside Discord but have no idea what your spreadsheet says. The one thing to watch is the discord_user_id column, because nobody hand-maintains a column of 18 digit snowflakes for long: capture the ID at signup by adding the field to your intake form rather than backfilling it later. Rows with a blank or malformed ID are not dropped quietly, they land in the report as unusable and are counted on their own line, which is a signal that the roster needs attention rather than a signal that the workflow failed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
