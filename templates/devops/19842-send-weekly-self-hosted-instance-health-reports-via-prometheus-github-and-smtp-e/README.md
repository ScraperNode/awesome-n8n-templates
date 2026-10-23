# ⚙️ Send weekly self-hosted instance health reports via Prometheus, GitHub and SMTP email

> ⚡ **10 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to check your self-hosted n8n instance version and security audit status, fetches the latest stable n8n releases from GitHub, summarizes failed executions from the last week, and sends a single HTML health report via SMTP email.

## How it works
1. Runs every Monday at 8am (or manually) to start the report.
2. Loads report settings such as your n8n URL, metrics endpoint, look-back window, and email recipients.
3. Reads the running n8n version from the Prometheus metrics endpoint and runs the n8n instance security audit.
4. Fetches the latest stable n8n releases from the n8n-io/n8n GitHub releases API.
5. Retrieves failed n8n executions and workflow names, then groups recent failures (within the look-back window) by workflow.
6. Builds an HTML and plain-text summary with version status, audit findings, and failure counts, then sends it as an email via SMTP.

## Setup
1. Enable metrics on your n8n instance by setting `N8N_METRICS=true` and ensure the workflow can reach your metrics URL (default `http://localhost:5678/metrics`).
2. Create an n8n API key and configure an n8n API credential with your base URL (for example, `https://your-n8n-host/api/v1`) for the audit, executions, and workflow-list requests.
3. Configure an SMTP credential for sending email and select it in the email step.
4. Update the instance URL, recipients, sender address, and look-back days in the report settings before activating the schedule.

## Requirements
- Self-hosted n8n with the public API enabled
- An SMTP account for sending email

## Customization
- Swap the email node for Slack or Microsoft Teams; the Code node also outputs a plain-text summary
- Change the schedule to daily if you run many production workflows

## 🔗 Nodes Used

Send Email, HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
