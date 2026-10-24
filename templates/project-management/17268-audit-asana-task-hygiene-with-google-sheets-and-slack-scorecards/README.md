# 📋 Audit Asana task hygiene with Google Sheets and Slack scorecards

> ⚡ **6 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs every Monday at 8am to audit open tasks in an Asana project for missing assignees and due dates (optionally missing sections and descriptions), appends each flagged task to Google Sheets, and posts a weekly hygiene scorecard with key counts and top offenders to Slack.

## How it works
1. Runs every Monday at 8am on a schedule trigger.
2. Fetches tasks from the specified Asana project via the Asana API and keeps only open (incomplete) tasks.
3. Checks each open task for missing assignee and due date (and optionally missing section and empty description) and prepares one audit row per task that fails any enabled rule.
4. Appends the flagged task rows (including reason codes and task permalink) to a Google Sheets tab for a running audit log.
5. Calculates weekly completeness metrics across all open tasks and formats a Slack scorecard including category counts, percent fully fielded, and top offenders.
6. Posts the scorecard message to the configured Slack channel.

## Setup
1. Add an Asana API credential and set the target Asana project GID in the configuration values.
2. Add a Google Sheets OAuth2 credential, select the target spreadsheet and sheet/tab, and ensure the header columns exist (audit_date, task_gid, task_name, assignee, section, due_on, reason_codes, permalink_url).
3. Add a Slack credential and set the Slack channel ID where the scorecard should be posted.
4. Update the configuration values for the audit sheet URL (for linking in Slack) and enable or disable the optional section/description checks as needed.

## Requirements
- An Asana account with a Personal Access Token, and at least one project you can read.
- A Google account with Google Sheets, and a spreadsheet to hold the audit log.
- A Slack workspace and an app allowed to post to the channel you pick (chat:write).
- n8n cloud or self-hosted. Every node used is built in, so there is nothing extra to install.

## Customization
- Change the cadence on the schedule trigger. Weekly on Monday is only a default, and nothing downstream depends on the day.
- Turn on the section and description checks in the config node for a stricter audit. Both ship off, so assignee and due date are the only mandatory fields out of the box.
- Add your own audit columns by extending the row in the score node, mapping the new fields on the Sheets node, and adding matching headers to the sheet.
- Change how many names the scorecard calls out. It lists the five worst offenders, and that cut-off is a single number in the scorecard code node.
- Audit a second project by duplicating the workflow and changing the project GID, so each board keeps its own sheet and channel.

## Additional info
Every number in the scorecard is computed in plain JavaScript rather than by a model, so the same board always produces the same result and there is nothing to fact-check before the message goes out. The audit is also strictly read-only. It fetches tasks over the Asana API and never sets a field, moves a task, or leaves a comment, so you can point it at a live project without clearing it with the team first.

The scorecard posts on every run, including a week where nothing is flagged. That is deliberate: a clean week still gets a message saying so, which means silence in the channel reads as the workflow having stopped rather than the board being tidy. The spreadsheet is meant to accumulate rather than be cleared, since one row per flagged task per week is what turns a weekly number into a trend you can act on.

Two practical limits are worth knowing. The fetch pulls up to 100 tasks in a single call, which covers most individual projects, and a busier board needs Asana pagination added to the fetch node. All three external calls retry three times before giving up, and the Sheets append and the Slack post are set to continue on error, so a transient Google or Slack outage costs you that week's rows or message instead of the whole run. A failed Asana fetch does stop the run, since there is nothing to audit without it. There is also a note on the canvas explaining how to prepend a one-line plain-English summary using a Groq call. It is off by default and sits outside the scoring path on purpose, so adding it cannot change any of the numbers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
