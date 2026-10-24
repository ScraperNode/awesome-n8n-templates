# ⚙️ Audit missing error workflows using the n8n API and Slack

> ⚡ **5 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every Monday morning, uses the n8n public API to audit all active (published) workflows for missing error workflow settings, and posts a gap report to a Slack channel only when uncovered workflows are found (or optionally when everything is covered).

## How it works
1. Runs every Monday at 09:00 on a scheduled trigger.
2. Sets audit options, including a tag name to ignore and whether to post an all-clear message.
3. Queries your n8n instance via the n8n public API to fetch active workflows.
4. Filters to non-archived workflows that are not error-handler workflows and are not tagged with the ignore tag, then identifies those missing an attached error workflow.
5. Builds a formatted report listing uncovered workflow names and a flag indicating whether a Slack post is needed.
6. Posts the report to Slack when there are gaps (or when configured to alert even when clean), otherwise does nothing.

## Setup
1. Enable the n8n public API on your self-hosted n8n instance and create an n8n API key, then add it as an n8n API credential in the workflow.
2. Add Slack credentials and select the target channel in the Slack message step.
3. Review the Settings values (ignoreTag and alertWhenClean) to match your tagging and notification preferences, then run a test and activate the workflow.

## Requirements
- Self-hosted n8n with the public API enabled
- An n8n API key created under Settings > n8n API
- A Slack workspace and an account that can post to the target channel

## Customization
- Set ignoreTag in the Settings node to a tag you put on workflows that are allowed to run without a handler
- Set alertWhenClean to true to receive a weekly all-clear instead of silence
- Move the schedule to daily if workflows are added or changed often
- Swap the Slack node for email, Telegram or Discord without changing anything upstream

## 🔗 Nodes Used

Slack, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
