# 📋 Log Jira worklogs nightly from Google Sheets with Gmail and GPT-4o-mini

> ⚡ **9 views** · 📋 [Project Management](../)

## Description

# Jira Daily Worklog Automation — Auto-log Time from Google Sheets to Jira Every Night

Automatically logs time to Jira every night from a Google Sheet. No manual worklog entries needed — just fill in your sheet and the workflow handles the rest at 10 PM.

Built for developers and teams who track their daily tasks in a spreadsheet and want their Jira time entries done automatically, with a clean email report.

---

## How It Works

- Runs every night at **10 PM** via a Schedule Trigger
- Reads all rows from your Google Sheet and filters rows where `status = Pending` and `date &lt;= today`
- Loops through each pending row one at a time using `splitInBatches`
- Builds the Jira worklog payload — normalises time format, constructs the ISO timestamp from `date` + `started_at`
- Calls the **Jira REST API** (`POST /rest/api/3/issue/ticket_id/worklog`) with Basic Auth
- Updates the sheet row status to `Completed` or keeps it `Pending` with an error message and incremented `retry_count`
- After all rows are processed, reads results from static data and builds a summary
- **GPT-4o-mini** writes a friendly 2–3 sentence team update
- Sends a formatted **HTML email report** via Gmail with success count, fail count, total time logged, and the AI summary

---

## How to Use

**Step 1 — Set up your Google Sheet**

Create a sheet with these exact column headers in row 1:

| ticket_id | log_text | date | started_at | log_time | status | error_message | retry_count |
|-----------|----------|------|------------|----------|--------|---------------|-------------|

- `ticket_id` — your Jira issue key e.g. `PROJ-123`
- `log_text` — worklog comment e.g. `Reviewed PR and fixed unit tests`
- `date` — date to log against e.g. `2026-04-02`
- `started_at` — time the work started e.g. `09:30`
- `log_time` — time spent e.g. `1h`, `30m`, `1h30m`
- `status` — set to `pending` for rows to be processed
- `error_message` — auto-filled on failure
- `retry_count` — auto-incremented on failure

**Step 2 — Add credentials in n8n**

- **Google Sheets OAuth2** — connect your Google account
- **Gmail OAuth2** — connect your Gmail account for email reports
- **HTTP Basic Auth** — your Jira email + API token (get token at [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens))
- **OpenAI API** — for the AI summary (GPT-4o-mini)

**Step 3 — Update the workflow**

- Open the `Read Log Sheet` node and select your spreadsheet and sheet tab
- Open the `Update Sheet` node and do the same
- Open `Jira: Add Worklog` and update the Atlassian domain in the URL: `https://YOUR-DOMAIN.atlassian.net/...`
- Open both Gmail nodes and update the `sendTo` email address
- Select your HTTP Basic Auth credential in `Jira: Add Worklog`

**Step 4 — Activate**

Toggle the workflow to **Active**. It will run automatically every night at 10 PM.

To test immediately, open the workflow and click **Test Workflow**.

---

## Requirements

- n8n (self-hosted or cloud)
- Google account with Google Sheets + Gmail
- Jira Cloud account with an API token
- OpenAI API key (free tier works for low volume)

---

## Customising This Workflow

- **Change the schedule** — edit the cron expression in the trigger node. Examples are in the sticky note
- **Change the Jira domain** — update the URL in `Jira: Add Worklog` to your Atlassian subdomain
- **Use Telegram instead of Gmail** — replace both Gmail nodes with a Telegram node using `chatId` and `text`
- **Skip the AI summary** — delete the `AI Summary` node and wire `Build Summary` directly to the Gmail node; update the email template to remove `$json.message.content`
- **Add multiple projects** — the sheet supports any mix of ticket IDs from different Jira projects in the same run
- **Catch missed past days** — the filter already picks up rows where `date &lt; today`, so any past pending rows are automatically retried on the next run

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
