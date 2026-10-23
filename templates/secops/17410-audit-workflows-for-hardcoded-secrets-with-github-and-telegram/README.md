# 🔒 Audit workflows for hardcoded secrets with GitHub and Telegram

> ⚡ **67 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Scans every workflow on your n8n instance for credentials, tokens, and personal data pasted straight into node parameters. Findings are reported to Telegram by severity, and the snapshot committed to GitHub has those values masked.

## How it works
1. A daily schedule reads every workflow on the instance through the n8n API.
2. Each workflow is first stripped of four structural leaks: the instance ID, pinned test data, webhook IDs, and credential IDs. These are the values that quietly identify your instance and your clients inside a shared repository.
3. The remaining JSON is matched against a rule set covering private keys, AWS keys, JWTs, Bearer tokens, Slack tokens, GitHub PATs, OpenAI keys, secrets passed in URL query strings, and email addresses.
4. Every match becomes a finding with a severity. Matched values are masked in the copy that gets committed, never on the instance itself.
5. Snapshots are committed one at a time, keyed on workflow ID, so renaming a workflow keeps its history in the same file instead of orphaning it.
6. Findings across the whole run are aggregated into one Telegram report. If nothing meets your threshold, no message is sent.

## Setup
1. Attach an n8n API credential to Get All Workflows, a GitHub credential to the three GitHub nodes, and a Telegram credential to Send Audit Report.
2. Open Configuration and set repoOwner, repoName, repoPath, and telegramChatId.
3. Set alertSeverityThreshold to critical, high, medium, or low. Only workflows at or above that level reach the report.
4. Leave redactSecretValues as true to mask matched values before committing, or set it to false to commit the structurally sanitised JSON with values intact.
5. Adjust the schedule. It runs daily at 03:00 by default.

## Requirements
- n8n API key with read access to workflows
- GitHub credential with write access to the target repository
- Telegram bot token and the chat ID you want the report sent to

## Customization
- Add or remove patterns in the RULES array inside Scan and Redact. Each rule is an id, a severity, and a regular expression, so covering your own token formats is a one line change.
- Swap the Telegram node for Slack, Google Chat, or email. Only reportText is consumed downstream, so nothing else needs rewiring.
- Raise alertSeverityThreshold to critical to stay silent until something serious appears.
- Change the file path format in Scan and Redact if you prefer folders per year or per project.

## Additional info
This is an audit tool, not a restore image. Snapshots are sanitised by design: credential IDs and pinned data are removed, and with redaction on, matched secret values are masked. Use it for change history and for catching leaks before they reach git, not as a disaster recovery backup.
The email rule is deliberately broad and will flag addresses that are legitimately part of a workflow, such as a Google Calendar ID. That is intentional for an audit, but expect it in your first run and raise the threshold to high if the noise bothers you.

Nothing is ever modified on your instance. The workflow only reads through the n8n API and writes to GitHub.

## 🔗 Nodes Used

GitHub, Telegram, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
