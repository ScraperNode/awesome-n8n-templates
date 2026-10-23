# 🔒 Enforce DPA-compliant processors using the n8n API and Slack reports

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs weekly to audit all workflows in your n8n instance via the n8n API, identifies which external processors they send data to, optionally deactivates non-compliant workflows, and posts a consolidated compliance report to Slack.

## How it works
1. Runs every Monday morning on a schedule.
2. Loads your processor allow/block rules (including optional DPA end dates, exempt tags, and whether to auto-deactivate) and fetches all workflows from the n8n API.
3. Analyzes each workflow’s published version (or saved version if unpublished) to detect where data is sent, including service nodes, HTTP Request destinations, URLs embedded in Code, and any called sub-workflows or error workflows.
4. Classifies each workflow as clean, exempt, needs review, or switch off based on your approved/blocked processor lists, unresolved destinations, and DPA end dates.
5. If enabled, deactivates any active workflows that are marked “switch off” using the n8n API and records whether the deactivation succeeded.
6. Builds a single Slack report summarizing actions taken, workflows needing human review, upcoming DPA expirations, and configuration issues, and posts it only when something needs attention (or when forced to post).

## Setup
1. Create an n8n API credential with permission to read and deactivate workflows, and select it in the n8n nodes used to list and deactivate workflows.
2. Add a Slack OAuth2 credential, set the target channel name/ID in the Slack message step, and ensure the workflow can post to that channel.
3. Fill in “Processor Rules” with your approved processors (optionally as `Name until YYYY-MM-DD`), blocked processors, and any hosts that are not processors (for example, your own systems).
4. Set your n8n editor base URL in `editor_url` so the report can link to workflows and so calls to your own instance are treated as non-processors.
5. Decide whether to auto-enforce by setting `switch_off_blocked` and whether unknown destinations should be treated as blocked with `unknown_means_blocked`.

## Requirements
- An n8n API key for this n8n instance (create it under Settings, then n8n API), added as an n8n credential.
- A Slack workspace and a channel where the weekly report can go.
- Your list of approved outside services and the date each one's data contract (DPA) ends.
- Nothing else: no AI and no paid add-ons.

## Customization
- Everything is set in the Processor Rules step. It starts in report-only mode; once the report looks right, turn on switch_off_blocked and it switches off rule-breaking workflows by itself.
- Only want to check some workflows? Give them a tag and put that tag in only_tag. Workflows they call are still checked.
- Tag a workflow no-personal-data if it never handles personal data, and it will be skipped.
- Turn on unknown_means_blocked to treat any service you have not approved, or any address the check cannot read, as blocked.
- Change dpa_warning_days (30 by default) to be warned earlier before a contract ends, and turn on post_when_clean if you also want a message in quiet weeks.

## Additional info
Why this exists: under GDPR, the EU privacy law, every outside company that receives personal data from you needs a contract with you, called a DPA. In n8n it is easy to lose track: one person adds a Slack step, another adds an AI model or calls a web address, and suddenly data goes somewhere nobody signed off. This workflow looks inside all your workflows every week and works out where each one really sends data, so the list comes from the workflows themselves instead of from memory.

What it will not do: it never deletes or edits a workflow. It only switches off workflows that are running, one at a time, and only after you turn that on. It never switches itself off. A change someone has saved but not published yet is reported, not acted on.

Good to know: if a workflow builds a web address while it runs, the check cannot read it, so that workflow goes on the review list. Workflows your API key cannot see are not checked. And if someone switches a workflow back on after a check, it keeps running until the next Monday.

## 🔗 Nodes Used

Slack, Stop and Error, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
