# 🔒 Audit n8n instance security with the n8n API, api.n8n.io and GitHub advisories

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to audit your n8n instance, compare its version against n8n GitHub security advisories with branch-aware patch detection, and email a scored report and fix plan via SMTP when new risks are found or on a weekly digest.

## How it works
1. Runs daily at 07:00 (or manually for testing) and loads instance-specific settings like the n8n URL and optional version override.
2. Calls your n8n instance’s `/api/v1/audit` endpoint using an `X-N8N-API-KEY` header to retrieve the built-in security audit report.
3. Fetches the official stable n8n versions list from `api.n8n.io` to help determine the instance version when the audit doesn’t report missing updates.
4. Pulls published security advisories for `n8n-io/n8n` from the GitHub Security Advisories API.
5. Analyzes the audit and advisories to detect your effective n8n version, flag advisories affecting that version (including backport-aware patch matching), identify audit findings (including workflows broken by disabled nodes policy), and compute a risk score, grade, trend, and ordered fix plan.
6. Sends a plain-text email report via SMTP when there are new urgent issues, when a check fails (reported as SKIPPED, never a fake all-clear), on the weekly report day, or when always-send testing is enabled.

## Setup
1. Create an n8n API key with “Instance operations” scope and add an HTTP Header Auth credential that sends `X-N8N-API-KEY` to your `N8N_URL`.
2. Set `N8N_URL` in the Set Sentinel Settings node to the base URL your n8n instance can reach (for example `http://localhost:5678`) and optionally set `VERSION_OVERRIDE` if you run a beta/next build.
3. Add an SMTP credential and update the “to” and “from” email addresses in the email step.
4. (Optional) Set `WEEKLY_REPORT_DAY` and `ALWAYS_SEND` in the Set Sentinel Settings node to control weekly digests and testing behavior, then run a manual execution to validate email delivery before activating the schedule.

## Requirements
- Self-hosted n8n with the public API enabled (tested on n8n 2.41.7)
- n8n API key with the "Instance operations" scope
- SMTP credential for the email report
- Outbound access to api.n8n.io and api.github.com (no keys needed)

## Customization
- Change the schedule in the "Every Morning at 7am" trigger
- Set WEEKLY_REPORT_DAY in the Set Sentinel Settings node (0 = Sunday … 6 = Saturday, empty = off)
- Adjust score weights and grade thresholds in the Score Risk and Build Report node
- Replace Send Report Email with Slack, Telegram or any other node (use subject and report_text)

## Additional info
Branch-aware matching: n8n backports security fixes to older version lines (for example 2.41.4 for 2.41.x). A plain version comparison would wrongly flag those instances as vulnerable; Sentinel counts a fix on your own major.minor line as patched. The fix plan is rule-based, not AI-generated. "New since last run" and the 30-run trend are kept in workflow static data, which n8n saves only in scheduled (production) runs. Each run reads the 100 most recent n8n security advisories from GitHub.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
