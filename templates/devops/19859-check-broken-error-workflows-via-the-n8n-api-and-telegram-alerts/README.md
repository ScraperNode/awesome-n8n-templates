# ⚙️ Check broken error workflows via the n8n API and Telegram alerts

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily, reads your n8n instance via the n8n API, checks every workflow’s configured error workflow handler for common silent failures, and sends a grouped status report to Telegram when issues are found (or always, if configured).

## How it works
1. Runs every day at 08:00 using a schedule trigger.
2. Sets runtime options such as the Telegram chat ID and whether to send an “all clear” message.
3. Fetches all workflows from your instance using the n8n API.
4. Analyzes each active, non-archived workflow that has an error workflow configured and verifies the referenced handler exists, has a published version, and contains an Error Trigger node.
5. Builds an HTML-formatted report grouped by broken handler and listing the affected producer workflows, then decides whether a message should be sent.
6. Sends the report to Telegram when problems exist (or when “alertWhenClean” is enabled), otherwise ends without posting.

## Setup
1. Enable the n8n public API on your self-hosted instance and add n8n API credentials with permission to read workflows.
2. Create a Telegram bot, add Telegram credentials in n8n, and paste your target chat ID into the Settings step.
3. Review the schedule time and adjust the schedule trigger if you want a different cadence.
4. Optionally set “alertWhenClean” to true if you want a daily confirmation message even when no issues are found.

## Requirements
- Self-hosted n8n with the public API enabled, and an n8n API credential with read access to workflows

## Customization
- Set alertWhenClean to true in the Settings node for a daily all clear instead of silence

## 🔗 Nodes Used

Telegram, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
